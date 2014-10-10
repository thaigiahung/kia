/** @jsx React.DOM */

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Promotion = React.createClass({
	render: function() {
		return (
					<div>
						<h1>ƯU ĐÃI</h1>
						<p>
							Tháng 9/2014 Thaco KIA thực hiện chương trình ưu đãi giá cho 3 mẫu xe KIA là K3, Cerato (5 cửa) và New Sorento. Ngoài ra, đối với các xe KIA còn lại như Rio, Carens được tặng thêm phụ kiện giá trị.

							Cụ thể, khách hàng mua xe Kia Morning sẽ được giảm 2 triệu đồng, kế đến Kia K3 và Cerato giảm 12 triệu đồng; Kia New Sorento giảm 15 triệu đồng.
							Trong khi đó, khách hàng mua Kia Rio được tặng màn hình DVD tích hợp GPS trị giá 11,4 triệu đồng và Kia Carens được tặng màn hình ốp trần trị giá 5 triệu đồng.
							Đại diện Thaco Kia cho biết, việc tiếp tục chương trình ưu đãi giá nhằm mục đích hỗ trợ khách hàng mua xe Kia ngay trong tháng 9 trước khi Thaco Kia chính thức tăng giá xe vào tháng 10 tới.
						</p>
						<img src="images/optima/promo.jpg" />
					</div>
				);
	}	
});


// var app = React.renderComponent(<Promotion />, document.body);