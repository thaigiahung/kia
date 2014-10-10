/** @jsx React.DOM */

var ShowroomRow = React.createClass({
  render: function() {      
    return (
    	<table>
	    	<tr>
	    		<td rowSpan="6"><img src={this.props.img} width="150px" /></td>
	    		<td>{this.props.name}</td>
	    	</tr>
	    	<tr>
	    		<td>{this.props.add}</td>
	    	</tr>
	    	<tr>
	    		<td>{this.props.phone}</td>
	    	</tr>
	    	<tr>
	    		<td>{this.props.web}</td>
	    	</tr>
	    	<tr>
	    		<td>{this.props.hotline}</td>
	    	</tr>
    	</table>
    );
  }
});

var Showroom = React.createClass({
	render: function() {   
		var table = [];
		this.props.showrooms.forEach(function(item) {			
			table.push(<ShowroomRow name={item.name} img={item.img} add={item.add} phone={item.phone} web={item.web} hotline={item.hotline} key={item.name} />);
		});
		return (
				<div className="body-background production-content">
					<h1>HỆ THỐNG SHOWROOM</h1>
					{table}
				</div>
			);
	}
});

/*var SHOWROOMS = [
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Tiền Giang', add: 'Địa chỉ: Khu Phố 2, Phường 10, Thành phố Mỹ Tho, Tỉnh Tiền Giang', phone: 'Điện thoại: 0733 955 633 - 0933 806 648 - Fax: 0736 256 119', web: 'Website: http://kiatiengiang.com', hotline: 'Hotline kinh doanh: 0938 807 323'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Vĩnh Long', add: 'Địa chỉ: Ấp Tân Vĩnh Thuận, Xã Tân Ngãi, Thành phố Vĩnh Long, Tỉnh Vĩnh Long', phone: 'Điện thoại: 0703 910 811 - Fax: 0703 910 815', web: 'Website: http://www.kiavinhlong.com/', hotline: 'Hotline kinh doanh: 0938 807 482'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Phú Mỹ Hưng', add: 'Địa chỉ: 314 Nguyễn Văn Linh Phường Bình Thuận Quận 7, TPHCM', phone: 'Điện thoại: 0938 807 101 - Fax: 08 37 754 964', web: 'Website: http://www.kiaphumyhung.vn', hotline: 'Hotline kinh doanh: 0938 807 101'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Long Biên', add: 'Địa chỉ: 2A Ngô Gia Tự, Phường Đức Giang, Quận Long Biên, Hà Nội', phone: 'Điện thoại: 04 38 773 989 - Fax: 04 38 271 902', web: 'Website: http://www.kialongbien.vn/', hotline: 'Hotline kinh doanh: 0938 808 759'},
  {img:'images/Kia-Tien-Giang.jpg' ,name: 'KIA Bình Triệu', add: 'Địa chỉ: 153 Quốc Lộ 13, Khu phố 1, Phường Hiệp Bình Chánh, Quận Thủ Đức, TP. HCM', phone: 'Điện thoại: 08 54 225 154/55/56 - 0938 807 040 - Fax: 08 37 269 704', web: 'Website: http://www.kiabinhtrieu.vn', hotline: 'Hotline kinh doanh: 0938 807 040'}
];

var app = React.renderComponent(<Showroom showrooms={SHOWROOMS}/>, document.body);*/