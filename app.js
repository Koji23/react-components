// TODO

//note this array must be declared before invoking 'items'  duh!
var groceryItems = ['milk', 'eggs', 'chicken', 'babel bites'];

//invoke with groceryItems here
var App = () => {
  return (
    <div>
      <h2>My Grocery List</h2> 
      <GroceryList items={ groceryItems } />
    </div>
    );
};

//using {} and return here just for fun
// this would be a good place to define an event handler for the ul, not groceryItem components!
var GroceryList = (props) => {
  return ( 
    <ul>
      <GroceryItem item={ props.items[0] } /> 
      <GroceryItem item={ props.items[1] } />
      <GroceryItem item={ props.items[2] } />
      <GroceryItem item={ props.items[3] } />
    </ul>
  );
};
     // {props.items.map(food => <GroceryItem item = { food }/> ) }

//note the paraethesis implies that everything inside will be returned as one line
// !!! note that listeners for events must be on the html elements, not the components
// the onClick attribute below is an HTML attribute

//Class Refactor
//note that any reference to props/methods/etc must be done with this
class GroceryItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      crossed: false
    };
  }
  _onListItemClick () {
    //console.log("Click heard on", this.props.item, "!");
    //console.log("Heard Click!");
    this.setState({
      crossed: !this.state.crossed
    });
  }
  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onClick={this._onListItemClick}>{this.props.item}</li>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));


