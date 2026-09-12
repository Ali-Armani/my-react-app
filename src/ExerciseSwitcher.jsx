import { useState } from 'react';
import UserGreetingPage from './exercises/UserGreeting/UserGreetingPage';
import StudentPage from './exercises/StudentPage/StudentPage';
import FoodPage from './exercises/FoodPage/FoodPage';

const exercises = {
  userGreetingPage: UserGreetingPage,
  studentPage: StudentPage,
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
