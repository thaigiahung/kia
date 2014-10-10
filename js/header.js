/** @jsx React.DOM */

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Header = React.createClass({
	getInitialState: function() {
	  return {showPage:1}
	},
	onClick: function(event) {
		this.setState({showPage: event});
	},
	callback: function(event) {
		this.setState(event);
	},
	render: function() {
		var result;
		if (this.state.showPage == 1) //Menu
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="zoomOut">
							<Menu menu={MENU} callback={this.callback} />
						</CSSTransitionGroup>
					</div>
				);	
		}
		else if(this.state.showPage == 2)
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="zoomIn">
							<div key="header" className="body-background">
								<div className="header">
									<div className="header-container">
										<div className="header-left" onClick={this.onClick.bind(this,1)}><img src="images/icon_navigation.png" /></div>									
										<div className="header-center" onClick={this.onClick.bind(this,7)}></div>
										<div className="header-right" onClick={this.onClick.bind(this,3)}><img src="images/icon_promotion.png" /></div>										
									</div>									
									<div className="container-back">
										<Production />
									</div>
								</div>
							</div>							
						</CSSTransitionGroup>
					</div>
				);
		}
		else if(this.state.showPage == 3)
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="zoomIn">
							<div key="header" className="body-background">
								<div className="header">
									<div className="header-container">
										<div className="header-left" onClick={this.onClick.bind(this,1)}><img src="images/icon_navigation.png" /></div>									
										<div className="header-center" onClick={this.onClick.bind(this,7)}></div>
										<div className="header-right" onClick={this.onClick.bind(this,3)}><img src="images/icon_promotion.png" /></div>										
									</div>
									<div className="container-back">
										<Promotion />
									</div>								
								</div>
							</div>
						</CSSTransitionGroup>
					</div>
				);
		}
		else if(this.state.showPage == 4)
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="zoomIn">
							<div key="header" className="body-background">
								<div className="header">
									<div className="header-container">
										<div className="header-left" onClick={this.onClick.bind(this,1)}><img src="images/icon_navigation.png" /></div>									
										<div className="header-center" onClick={this.onClick.bind(this,7)}></div>
										<div className="header-right" onClick={this.onClick.bind(this,3)}><img src="images/icon_promotion.png" /></div>										
									</div>
									<div className="container-back">
										<Pricing />
									</div>								
								</div>
							</div>
						</CSSTransitionGroup>
					</div>
				);
		}
		else if(this.state.showPage == 5)
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="zoomIn">
							<div key="header" className="body-background">
								<div className="header">
									<div className="header-container">
										<div className="header-left" onClick={this.onClick.bind(this,1)}><img src="images/icon_navigation.png" /></div>									
										<div className="header-center" onClick={this.onClick.bind(this,7)}></div>
										<div className="header-right" onClick={this.onClick.bind(this,3)}><img src="images/icon_promotion.png" /></div>										
									</div>
									<div className="container-back">
										<Showroom showrooms={SHOWROOMS}/>
									</div>
								</div>
							</div>
						</CSSTransitionGroup>
					</div>
				);
		}
		else if(this.state.showPage == 6)
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="zoomIn">
							<div key="header" className="body-background">
								<div className="header">
									<div className="header-container">
										<div className="header-left" onClick={this.onClick.bind(this,1)}><img src="images/icon_navigation.png" /></div>									
										<div className="header-center" onClick={this.onClick.bind(this,7)}></div>
										<div className="header-right" onClick={this.onClick.bind(this,3)}><img src="images/icon_promotion.png" /></div>										
									</div>
									<div className="container-back">
										<Contact />
									</div>
								</div>
							</div>
						</CSSTransitionGroup>
					</div>
				);
		}	
		else if(this.state.showPage == 7)
		{
			return (
					<div>
						<CSSTransitionGroup transitionName="moveDown">							
							<div key="header" className="body-background">
								<div className="header">
									<div className="header-left" onClick={this.onClick.bind(this,1)}><img src="images/icon_navigation.png" /></div>									
									<div className="header-center"><h1>SẢN PHẨM</h1></div>
									<div className="header-right" onClick={this.onClick.bind(this,3)}><img src="images/icon_promotion.png" /></div>										
								</div>
								<div className="container-back">
									<ProductionList products={PRODUCTS} />
								</div>
							</div>							
						</CSSTransitionGroup>
					</div>
				);
		}	
	}
});

var PRODUCTS = [
  {group: '----------- Cars -----------', img:'images/production-list/thumb-k3-off.gif'},
  {group: '----------- Cars -----------', img:'images/production-list/thumb-Koup-off.gif'},
  {group: '----------- Cars -----------', img:'images/production-list/thumb-morning-off.gif'},
  {group: '----------- Cars -----------', img:'images/production-list/thumb-rio5door-off.gif'},
  {group: '----------- SUV & MPV -----------', img:'images/production-list/thumb-k3-off.gif'},
  {group: '----------- SUV & MPV -----------', img:'images/production-list/thumb-Koup-off.gif'}
];

var MENU = [
  {id: '2', img:'images/menu-item-logo.png' ,name: 'SẢN PHẨM'},
  {id: '3', img:'images/menu-item-logo.png' ,name: 'ƯU ĐÃI'},
  {id: '4', img:'images/menu-item-logo.png' ,name: 'BẢNG GIÁ'},
  {id: '5', img:'images/menu-item-logo.png' ,name: 'HỆ THỐNG PHÂN PHỐI'},
  {id: '6', img:'images/menu-item-logo.png' ,name: 'LIÊN HỆ'}
];

var SHOWROOMS = [
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Tiền Giang', add: 'Địa chỉ: Khu Phố 2, Phường 10, Thành phố Mỹ Tho, Tỉnh Tiền Giang', phone: 'Điện thoại: 0733 955 633 - 0933 806 648 - Fax: 0736 256 119', web: 'Website: http://kiatiengiang.com', hotline: 'Hotline kinh doanh: 0938 807 323'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Vĩnh Long', add: 'Địa chỉ: Ấp Tân Vĩnh Thuận, Xã Tân Ngãi, Thành phố Vĩnh Long, Tỉnh Vĩnh Long', phone: 'Điện thoại: 0703 910 811 - Fax: 0703 910 815', web: 'Website: http://www.kiavinhlong.com/', hotline: 'Hotline kinh doanh: 0938 807 482'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Phú Mỹ Hưng', add: 'Địa chỉ: 314 Nguyễn Văn Linh Phường Bình Thuận Quận 7, TPHCM', phone: 'Điện thoại: 0938 807 101 - Fax: 08 37 754 964', web: 'Website: http://www.kiaphumyhung.vn', hotline: 'Hotline kinh doanh: 0938 807 101'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Long Biên', add: 'Địa chỉ: 2A Ngô Gia Tự, Phường Đức Giang, Quận Long Biên, Hà Nội', phone: 'Điện thoại: 04 38 773 989 - Fax: 04 38 271 902', web: 'Website: http://www.kialongbien.vn/', hotline: 'Hotline kinh doanh: 0938 808 759'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Bình Triệu', add: 'Địa chỉ: 153 Quốc Lộ 13, Khu phố 1, Phường Hiệp Bình Chánh, Quận Thủ Đức, TP. HCM', phone: 'Điện thoại: 08 54 225 154/55/56 - 0938 807 040 - Fax: 08 37 269 704', web: 'Website: http://www.kiabinhtrieu.vn', hotline: 'Hotline kinh doanh: 0938 807 040'}
];

var app = React.renderComponent(<Header />, document.body);