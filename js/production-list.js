/** @jsx React.DOM */

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Product = React.createClass({
	onClick: function(product_id) {
		this.props.callback({showPage: 2, product: product_id});
	},
	render: function() {
		return (
					<div>
						<img src={this.props.itemImg} onClick={this.onClick.bind(this,this.props.itemId)}/>
					</div>				
				);		
	}	
});

var Products = React.createClass({
	onClick: function() {
		console.log('event');
	},
	render: function() {
		var cars = [];
		var suvs = [];
		var callback = this.props.callback;
		this.props.products.forEach(function(item) {	
			if(item.group === '----------- Cars -----------')	{
				cars.push(
						<Product key={item.id} itemId={item.id} itemImg={item.img} callback={callback} />
					)
			}	
			else{
				suvs.push(
						<Product key={item.id} itemId={item.id} itemImg={item.img} callback={callback} />
					)
			}
			
		});
		return (
					<div>
						<h6>----------- Cars -----------</h6>
						{cars}		

						<h6>----------- SUV &#38; MPV -----------</h6>
						{suvs}					
					</div>					
				);		
	}	
});

var ProductionList = React.createClass({
	render: function() {
		var callback = this.props.callback;
		return (
					<div>
						<Products products={this.props.products} callback={callback}/>
					</div>
				);
	}	
});

var PRODUCTS = [
  {id: '1', group: '----------- Cars -----------', img:'images/production-list/thumb-k3-off.gif'},
  {id: '2', group: '----------- Cars -----------', img:'images/production-list/thumb-Koup-off.gif'},
  {id: '3', group: '----------- Cars -----------', img:'images/production-list/thumb-morning-off.gif'},
  {id: '4', group: '----------- Cars -----------', img:'images/production-list/thumb-rio5door-off.gif'},
  {id: '5', group: '----------- SUV & MPV -----------', img:'images/production-list/thumb-k3-off.gif'},
  {id: '6', group: '----------- SUV & MPV -----------', img:'images/production-list/thumb-Koup-off.gif'}
];

var app = React.renderComponent(<ProductionList products={PRODUCTS}/>, document.body);