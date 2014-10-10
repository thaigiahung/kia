/** @jsx React.DOM */
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Test = React.createClass({
  getInitialState: function() {
    return {showPage:1, subPage: 1}
  },
  onClick: function(page) {
    this.setState({showPage: page});
  },
  onTap: function(page) {
  	this.setState({subPage: page});
  	this.forceUpdate();
  },
  render: function() {
    var result;
      if (this.state.showPage == 1) //Menu
      {
		return (
		  <div>
		    <CSSTransitionGroup transitionName="zoomOut">
		      <Menu menu={MENU} />
		    </CSSTransitionGroup>
		  </div>
		); 
      }
      else if(this.state.showPage == 2) //Sản phẩm (Khám phá)
      {
      	var divStyle = {
		  height: 400
		};

      	if(this.state.subPage == 1)
      	{      		
			result = <div key="san_pham" style={divStyle}>
							<h1>Khám Phá</h1>
							<p>
								Air Conditioning
								Bluetooth® with Voice Recognition & Music Streaming
								USB & AUX Ports
								LED Daytime Running Lights
								Cruise Control & Speed Limiter
								Flex Steer (Normal, Comfort & Sport Modes)
								All Round Electric Windows with Auto Up & Down Function
								Electrically Adjustable & Heated Door Mirrors
							</p>
			          </div>
      	}
      	else if(this.state.subPage == 2)
      	{
			result = <div key="san_pham1" style={divStyle}>
							<h1>Thông Số Kỹ Thuật</h1>
							<p>
								Specification

		The dynamic new 7-seat Kia Carens combines practicality and unique styling, with an impressive level of specification as standard.
		Backed up by our industry leading 7-year warranty, the New Carens promises to deliver on style without compromising on reliability.
							</p>
			          </div>
      	}
      	else if(this.state.subPage == 3)
      	{
      			result = <div key="san_pham2" style={divStyle}>
      							<h1>Thư viện</h1>
      			          </div>
      	}

        return (
          <div>
            <CSSTransitionGroup transitionName="zoomIn">
            	<div className="header">
					<div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
					
					<div style={divStyle}>
						<CSSTransitionGroup transitionName="moveLeft2Right">
							{result}
						</CSSTransitionGroup>
					</div>
					
        			<div className="production-content">
						<div className="production-content-horizontal-menu">
							<div onClick={this.onTap.bind(this,1)}>
								<img src="../images/button_explore_active.png" />
							</div>
							
							<div onClick={this.onTap.bind(this,2)}>
								<img src="../images/button_specitification.png" />
							</div>
							<div onClick={this.onTap.bind(this,3)}>
								<img src="../images/button_gallery.png" />
							</div>
						</div>		
					</div>
		          </div>
            </CSSTransitionGroup>
          </div>
        );
      }
    else if(this.state.showPage == 3) //Sản phẩm (Thông số kỹ thuật)
    {
		result = <div key="san_pham1" className="header">
					<div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
					<h1>Thông Số Kỹ Thuật</h1>
					<p>
						Specification

The dynamic new 7-seat Kia Carens combines practicality and unique styling, with an impressive level of specification as standard.
Backed up by our industry leading 7-year warranty, the New Carens promises to deliver on style without compromising on reliability.
					</p>
      			<div className="production-content">
						<div className="production-content-horizontal-menu">
							<div onClick={this.onClick.bind(this,2)}>
								<img src="../images/button_explore_active.png" />
							</div>
							
							<div onClick={this.onClick.bind(this,3)}>
								<img src="../images/button_specitification.png" />
							</div>
							<div onClick={this.onClick.bind(this,4)}>
								<img src="../images/button_gallery.png" />
							</div>
						</div>		
					</div>
		          </div>
      return (
        <div>
          <CSSTransitionGroup transitionName="zoomIn">
            {result}
          </CSSTransitionGroup>
        </div>
      );
    }
    else if(this.state.showPage == 4) //Sản phẩm (Thư viện)
    {
		result = <div key="san_pham2" className="header">
					<div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
					<h1>Thư viện</h1>
      			<div className="production-content">
						<div className="production-content-horizontal-menu">
							<div onClick={this.onClick.bind(this,2)}>
								<img src="../images/button_explore_active.png" />
							</div>
							
							<div onClick={this.onClick.bind(this,3)}>
								<img src="../images/button_specitification.png" />
							</div>
							<div onClick={this.onClick.bind(this,4)}>
								<img src="../images/button_gallery.png" />
							</div>
						</div>		
					</div>
		          </div>
      return (
        <div>
          <CSSTransitionGroup transitionName="zoomIn">
            {result}
          </CSSTransitionGroup>
        </div>
      );
    }
      else if(this.state.showPage == 5) //Ưu đãi
      {
		result = <div key="uu_dai" className="header">
					<div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
					<a href="#">
						<img src="../images/icon_promotion.png" />
					</a>

					<h3>ƯU ĐÃI</h3>
					<p>THÁNG 9 - THACO ƯU ĐÃI GIÁ LÊN ĐẾN 15 TRIỆU ĐỒNG</p>
		          </div>

        return (
          <div>
            <CSSTransitionGroup transitionName="zoomIn">
              {result}
            </CSSTransitionGroup>
          </div>
        );
      }
      else if(this.state.showPage == 6) //Bảng giá
      {
        result = <div key="bang_gia" className="header">
					<div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
					<a href="#">
						<img src="../images/icon_promotion.png" />
					</a>

					<h3>BẢNG GIÁ</h3>
					<h5>KIA MORNING</h5>
					<ul>
						<li>Morning EX 349 tr</li>
						<li>Morning MT 363 tr</li>
						<li>Morning AT 390 tr</li>
						<li>Morning S MT 380 tr</li>
					</ul>

					<h5>KIA CARENS</h5>
					<ul>
						<li>CARENS MT 349 tr</li>
						<li>CARENS S MT 363 tr</li>
						<li>CARENS S AT 390 tr</li>
					</ul>
				</div>

		return (
		  <div>
		    <CSSTransitionGroup transitionName="zoomIn">
		      {result}
		    </CSSTransitionGroup>
		  </div>
		);
      }
      else if(this.state.showPage == 7) //Showroom
      {
        result = <div key="showroom" className="header">
					<div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
					<a href="#">
						<img src="../images/icon_promotion.png" />
					</a>

					<h3>HỆ THỐNG SHOWROOM</h3>
				</div>

		return (
		  <div>
		    <CSSTransitionGroup transitionName="zoomIn">
		      {result}
		    </CSSTransitionGroup>
		  </div>
		);
      }
      else if(this.state.showPage == 8) //Liên hệ
      {
        result = <div key="lien_he" className="header">
                    <div onClick={this.onClick.bind(this,1)}><img src="../images/icon_navigation.png" /></div>
                    <a href="#">
                      <img src="../images/icon_promotion.png" />
                    </a>

                    <h1>LIÊN HỆ</h1>
                    <div className="contact-hotline">
                      <h3>Hotline Kinh Doanh</h3>
                      <ul>
                        <li>Bắc bộ: 0938.809.169</li>
                        <li>Trung bộ: 0938.809.169</li>
                        <li>Nam bộ: 0938.809.169</li>
                      </ul>
                    </div>
                    <div className="contact-hotline">
                      <h3>Hotline Dịch Vụ</h3>
                      <ul>
                        <li>Bắc bộ: 0938.809.169</li>
                        <li>Trung bộ: 0938.809.169</li>
                        <li>Nam bộ: 0938.809.169</li>
                      </ul>
                    </div>
                  </div>

      	return (
      	  <div>
      	    <CSSTransitionGroup transitionName="zoomIn">
      	      {result}
      	    </CSSTransitionGroup>
      	  </div>
      	);
      }
      
    
  }
});

var MENU = [
  {img:'../images/menu-item-logo.png' ,name: 'SẢN PHẨM'},
  {img:'../images/menu-item-logo.png' ,name: 'ƯU ĐÃI'},
  {img:'../images/menu-item-logo.png' ,name: 'BẢNG GIÁ'},
  {img:'../images/menu-item-logo.png' ,name: 'HỆ THỐNG PHÂN PHỐI'},
  {img:'../images/menu-item-logo.png' ,name: 'LIÊN HỆ'}
];

var app = React.renderComponent(<Test />, document.body);