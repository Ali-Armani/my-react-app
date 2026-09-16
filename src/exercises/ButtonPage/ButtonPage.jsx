
import Button from './Button';

function ButtonPage() {

/*
  let count = 0;

  const handlelick = () => {
    if (count < 3) {
      count++;
      console.log(`${name} You clicked me ${count} time(s)`);
    }
    else {
      console.log(`${name} That hurt!🤕`)
    }
  };

  const handlelick2 = (name) => console.log(`${name} Stop clicking me!`);
*/



// Event Argument:
  const handleClick = (e) => e.target.textContent = 'OUCH!🤕';

//  const handleClick = (e) => e.target.style.display = 'none';

/*
  return(
    <>
      <button onDoubleClick={(e) => handleClick(e)}>
        Click me 😀
      </button>
    </>
  )
*/

  return(
    <>
      <button onClick={(e) => handleClick(e)}>
        Click me 😀
      </button>
    </>
  )
}

export default ButtonPage;