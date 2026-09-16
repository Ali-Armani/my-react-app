
import React, {useState} from 'react';

function MyComponent() {

  const [name, setName] = useState('Guest');

  const [age, setAge] = useState(0);

  const updateName = () => {
    setName('SpongeBob');
  }

  const decrementAge10 = () => {
    setAge(age - 10);
  }

  const decrementAge = () => {
    setAge(age - 1);
  }

  const resetAge = () => {
    setAge(0);
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const incrementAge10 = () => {
    setAge(age + 10);
  }


/*
  const updateAge = () => {
    setAge('28');
  }

  return(
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateName}>Set Name</button>
      <button onClick={updateAge}>Set Age</button>
    </div>
  )
}
*/

return(
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={updateName}>Set Name</button>
      <button onClick={decrementAge10}>-10</button>
      <button onClick={decrementAge}>-</button>
      <button onClick={resetAge}>Reset</button>
      <button onClick={incrementAge}>+</button>
      <button onClick={incrementAge10}>+10</button>
    </div>
  )
}

export default MyComponent;