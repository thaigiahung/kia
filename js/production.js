/** @jsx React.DOM */

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Discover = React.createClass({
	getInitialState: function() {
	  return {click: true}
	},
	onClick: function(event) {
		this.setState({click: !this.state.click});
	},
	render: function() {
		var result;
		if(this.state.click)
		{
			result = <div key="discover1" onClick={this.onClick.bind(this,true)}>
						<img src="images/optima/discover1.jpg" />
					</div>
		}
		else
		{
			result = <div key="discover2" onClick={this.onClick.bind(this,false)}>
						<img src="images/optima/discover2.jpg" />
					</div>
		}
		return (
					<div>
						<CSSTransitionGroup transitionName="moveRight2Left">
							{result}
						</CSSTransitionGroup>
					</div>
				);
	}	
});

var Specification = React.createClass({
	render: function() {
		return (
					<div>
						<img src="images/optima/optima.jpg" />
					</div>
				);		
	}	
});

var Gallery = React.createClass({
	render: function() {
		return (
					<div>
						<img src="images/optima/optima1.jpg" />
						<img src="images/optima/optima2.jpg" />
						<img src="images/optima/optima3.jpg" />
						<img src="images/optima/optima4.jpg" />
					</div>
				);		
	}	
});

var Production = React.createClass({
	getInitialState: function() {
	  return {page: 1}
	},
	onClick: function(page) {
		this.setState({page: page});
	},
	render: function() {
		var result, productionNav;
		if(this.state.page == 1)
		{
			result = <div key="discover">
						<Discover />
					</div>

			productionNav = <div className="production-nav">
								<div onClick={this.onClick.bind(this,1)}>
									<img src="images/button_explore_active.png" />
								</div>
								<div onClick={this.onClick.bind(this,2)}>
									<img src="images/button_specitification.png" />
								</div>
								<div onClick={this.onClick.bind(this,3)}>
									<img src="images/button_gallery.png" />
								</div>
							</div>
		}
		if(this.state.page == 2)
		{
			result = <div key="specification">
						<Specification />
					</div>

			productionNav = <div className="production-nav">
								<div onClick={this.onClick.bind(this,1)}>
									<img src="images/button_explore.png" />
								</div>
								<div onClick={this.onClick.bind(this,2)}>
									<img src="images/button_specitification_active.png" />
								</div>
								<div onClick={this.onClick.bind(this,3)}>
									<img src="images/button_gallery.png" />
								</div>
							</div>
		}
		if(this.state.page == 3)
		{
			result = <div key="gallery">
						<Gallery />
					</div>

			productionNav = <div className="production-nav">
								<div onClick={this.onClick.bind(this,1)}>
									<img src="images/button_explore.png" />
								</div>
								<div onClick={this.onClick.bind(this,2)}>
									<img src="images/button_specitification.png" />
								</div>
								<div onClick={this.onClick.bind(this,3)}>
									<img src="images/button_gallery_active.png" />
								</div>
							</div>
		}
		return (
					<div>
						<div className="production-content">
							<CSSTransitionGroup transitionName="moveRight2Left">
								{result}
							</CSSTransitionGroup>
						</div>
						{productionNav}
					</div>
				);
	}	
});


// var app = React.renderComponent(<Production />, document.body);