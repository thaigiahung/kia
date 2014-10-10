/** @jsx React.DOM */

var MenuHeader = React.createClass({
	render: function() {
		return (
				<div className="menu-header">
					<img src="images/icon_logo.png" />
				</div>
			);
	}
});

var MenuItem = React.createClass({
	onClick: function(page) {
	    this.props.callback({showPage: page});
	},
	render: function() {
		return (				
				<li onClick={this.onClick.bind(this,this.props.itemId)}>
					<img src={this.props.itemImg} />
					<a href="#">{this.props.itemName}</a>
				</li>
			);
	}
});

var MenuContent = React.createClass({
	render: function() {
		var lis = [];
		var callback = this.props.callback;
		this.props.menuItems.forEach(function(item) {			
			lis.push(<MenuItem callback={callback} itemId={item.id} itemName={item.name} itemImg={item.img} key={item.name} />);
		});
		return (
				<div className="menu-content">
					<ul>
						{lis}
					</ul>
				</div>
			);
	}
});

var MenuFooter = React.createClass({
	render: function() {
		return (
				<div className="menu-footer">
					<label>COPYRIGHT © INFORY 2014</label>
				</div>
			);
	}
});

var Menu = React.createClass({
	render: function() {
		var callback = this.props.callback;
		return (
				<div>
					<MenuHeader />
					<MenuContent menuItems={this.props.menu} callback={callback} />
					<MenuFooter />
				</div>
			);
	}
});
