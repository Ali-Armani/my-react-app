
import PropTypes from 'prop-types';

function List2({category='category', items=[]}) {

  const listItems = items.map(item => <li key={item.id}>
                                                {item.name}: &nbsp; 
                                                <b>{item.calories}</b> 
                                                </li>)


//  return(<ul>{listItems}</ul>);
// <h3>{category}</h3>

  return(<><h3 className="list-category">{category}:</h3>
            <ol className="list-items">{listItems}</ol>
            </>)
}

List2.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({ 
                                            id: PropTypes.number, 
                                            name: PropTypes.string,  
                                            calories: PropTypes.number 
                                          }))
}

export default List2;