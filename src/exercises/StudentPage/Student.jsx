// Practicing: props & prop-types

import PropTypes from 'prop-types';

function Student({ name = 'Guest', age = 0, isStudent = false }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 
                              "Yes" : 
                              "No"}
      </p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

export default Student;