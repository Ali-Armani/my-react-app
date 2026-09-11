import { useState } from 'react';
import FoodPage from './exercises/FoodPage/FoodPage';

const exercises = {
  foodPage: FoodPage,
};

function ExerciseSwitcher() {
  const [selected, setSelected] = useState('foodPage');
  const SelectedExercise = exercises[selected];

  return (
    <div>
      <nav>
        {Object.keys(exercises).map((key) => (
          <button key={key} onClick={() => setSelected(key)}>
            {key}
          </button>
        ))}
      </nav>
      <SelectedExercise />
    </div>
  );
}

export default ExerciseSwitcher;
