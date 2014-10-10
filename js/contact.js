/** @jsx React.DOM */
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Contact = React.createClass({
  render: function() {      
    return (
      <div>
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
    );
  }
});

/*var Contact = React.createClass({
  render: function() {      
    return (
      <div>
        <div className="container container-front">
          <Header />
        </div>
        <div className="container container-back">
          <ContactComponent />
        </div>
      </div>
    );
  }
});

var app = React.renderComponent(<Contact />, document.body);*/