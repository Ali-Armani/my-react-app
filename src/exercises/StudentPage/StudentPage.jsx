import Student from './Student';

function StudentPage() {
  return (
    <div className='student'>
      <hr />
      <Student name="SpongeBob" age={30} isStudent={1} />
      <hr />
      <Student name="Patrick" age="48" isStudent={0} />
      <hr />
      <Student name="Larry" age="28" isStudent={true} />
      <hr />
      <Student name="Marcello" age="18" isStudent={NaN} />
      <hr />
      <Student name="Emily" age="21" isStudent={undefined} />
      <hr />
      <Student name="Luca" age="29" isStudent={false} />
    </div>
  );
}

export default StudentPage;