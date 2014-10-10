/** @jsx React.DOM */

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Product = React.createClass({
	render: function() {
		var cars = [];
		var suvs = [];
		this.props.products.forEach(function(item) {	
			if(item.group === '----------- Cars -----------')	{
				cars.push(
						<div>
							<img src={item.img} />
						</div>
					)
			}	
			else{
				suvs.push(
						<div>
							<img src={item.img} />
						</div>
					)
			}
			
		});
		return (
					<div>
						<h6>Cars</h6>
						{cars}		

						<h6>SUV &#38; MPV</h6>
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
						<Product products={this.props.products}/>
					</div>
				);
	}	
});



// var app = React.renderComponent(<Production />, document.body);