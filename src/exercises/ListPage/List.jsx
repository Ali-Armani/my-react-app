
function List() {
  
  const fruits = [{id: 1, name: "apple", calories: 95},
                 {id: 2, name: "orange", calories: 45},
                 {id: 3, name: "banana", calories: 105},
                 {id: 4, name: "coconut", calories: 159},
                 {id: 5, name: "pineapple", calories: 37}];

// fruits.sort(); // SORT METHOD

// fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL

// fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL

// fruits.sort((a, b) => a.calories - b.calories) // NUMERIC

// fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERIC

/*
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                                {lowCalFruit.name}: &nbsp; 
                                                <b>{lowCalFruit.calories}</b> 
                                                </li>)
*/                                                

const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                {highCalFruit.name}: &nbsp; 
                                                <b>{highCalFruit.calories}</b> 
                                                </li>)

//  return(<ul>{listItems}</ul>);

  return(<ol>{listItems}</ol>);
}

export default List;