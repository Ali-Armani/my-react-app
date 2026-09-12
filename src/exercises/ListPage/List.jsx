
function List() {
  
  const fruits = [{id: 1, name: "apple", claories: 95},
                 {id: 2, name: "orange", claories: 45},
                 {id: 3, name: "banana", claories: 105},
                 {id: 4, name: "coconut", claories: 159},
                 {id: 5, name: "pineapple", claories: 37}];

// fruits.sort(); // SORT METHOD

// fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL

// fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL

// fruits.sort((a, b) => a.claories - b.claories) // NUMERIC

fruits.sort((a, b) => b.claories - a.claories) // REVERSE NUMERIC



  const listItems = fruits.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp; 
                                                <b>{fruit.claories}</b> 
                                                </li>)

//  return(<ul>{listItems}</ul>);

  return(<ol>{listItems}</ol>);
}

export default List;