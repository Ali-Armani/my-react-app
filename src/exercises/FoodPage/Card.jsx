
import fruitsPhoto from '../../assets/fruits-photo.webp';

function Card() {

  return (
    <div className="card">
      <img src={fruitsPhoto} alt="Fruits picture" className="fruits-photo" />
      <h2>Fruits</h2>
      <p>Apples, oranges and bananas are full of vitamins and are among the heakthiest types of food you can eat.</p>
    </div>
  );
}

export default Card