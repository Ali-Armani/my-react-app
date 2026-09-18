
import React, {useState} from 'react';

function OnChange() {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [shipping, setShipping] = useState('Delivery');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value)
  }

  return(

    <div>
      <br />
      <p>Name: {name}</p>
      <input value={name} onChange={handleNameChange} placeholder='Please enter your name ...' />
      <br />
      <br />
      <hr />
      <p>Number of Products: {quantity}</p>
      <input value={quantity} onChange={handleQuantityChange} type='number' />
      <br />
      <br />
      <hr />
      <p>Comment: {comment}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder='Your delivery instructions ...' />
      <br />
      <br />
      <hr />
      <p>Please Select the Payment Method:</p>
      <select value={payment} onChange={handlePaymentChange}> 
        <option value=''>Payment Method</option>
        <option value='Visa'>Visa</option>
        <option value='Master Card'>Master Card</option>
        <option value='Gift Card'>Gift Card</option>
      </select>
      <br />
      <br />
      <hr />
      <p>Shipping Method: {shipping}</p>
      <label>
        <input type="radio"
               value='Pick Up'
               checked={shipping === 'Pick Up'}
               onChange={handleShippingChange}
      />
        Pick up
      </label>
      <br />
      <br />
      <label>
        <input  type="radio"
                value='Delivery'
                checked={shipping === 'Delivery'}
                onChange={handleShippingChange}
        />
        Delivery
      </label>
    </div>
  )
}

export default OnChange;