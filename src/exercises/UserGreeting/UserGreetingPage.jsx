
import UserGreeting from "./UserGreeting";

function UserGreetingPage() {

  return(
    <>
      <UserGreeting isLoggedIn={false} username="Mike Wilson" />
      <hr />
      <UserGreeting isLoggedIn={true} username="John Tyson" />
    </>
  );
}

export default UserGreetingPage;