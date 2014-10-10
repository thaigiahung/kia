/** @jsx React.DOM */

/*var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="moveUp">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

React.renderComponent(
  <TodoList />,
  document.getElementById('container')
);*/

/** @jsx React.DOM */

var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Test = React.createClass({
  getInitialState: function() {
    return {showOne:true}
  },
  onClick: function() {
    this.setState({showOne:! this.state.showOne});
  },
  render: function() {
    var result;
      if (this.state.showOne)
      {
        result = <div key="a" className="header">
                    <img src="../images/icon_navigation.png" />
                  </div>

        return (
          <div>
            <div><button onClick={this.onClick}>switch state</button></div>
            <CSSTransitionGroup transitionName="example">
              {result}
            </CSSTransitionGroup>
          </div>
        );
      }
      else 
      {
        result = <div key="b" className="header">
                    <img src="../images/icon_navigation.png" />
                  </div>
        return (
          <div>
            <Header />
            <div><button onClick={this.onClick}>switch state</button></div>
            <CSSTransitionGroup transitionName="example">
              {result}
            </CSSTransitionGroup>
          </div>
        );
      }
      
    
  }
});

var app = React.renderComponent(<Test />, document.body);