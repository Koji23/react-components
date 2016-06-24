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
var GroceryItem = (props) => {
  var onListItemClick = (event) => {
    console.log("Click heard on", props.item, "!");
  };
  return <li onClick={onListItemClick}>{props.item}</li>
};


ReactDOM.render(<App />, document.getElementById('app'));


