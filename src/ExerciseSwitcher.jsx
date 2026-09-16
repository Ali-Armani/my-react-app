import { useState } from 'react';
import MyComponentPage from './exercises/MyComponentPage/MyComponentPage'
import ButtonPage from './exercises/ButtonPage/ButtonPage';
import ListPage2  from './exercises/ListPage2/ListPage2';
import ListPage from './exercises/ListPage/ListPage'
import UserGreetingPage from './exercises/UserGreeting/UserGreetingPage';
import StudentPage from './exercises/StudentPage/StudentPage';
import FoodPage from './exercises/FoodPage/FoodPage';

const exercises = {
  myComponentPage: MyComponentPage,
  buttonPage: ButtonPage,
  listPage2: ListPage2,
  listPage: ListPage,
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
