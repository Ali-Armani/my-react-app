
import Button from './Button';

function ButtonPage() {

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

//  const handlelick2 = (name) => console.log(`${name} Stop clicking me!`);

  return(
    <>
      <button onClick={() => handlelick("Dude!")}>
        Click me 😀
      </button>
    </>
  )
}

export default ButtonPage;