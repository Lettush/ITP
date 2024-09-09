import "./App.css";
// import Welcome from "./components/Welcome";
import Hooks from "./components/Hooks";

const App = () => {
  // const greeting = "Hello, React!";
  const isUserLoggedIn = true;
  const userList = ['Jorvic', 'Catherine', 'Christian'];

  // () = JSX
  // {} = JS Code
  // condition ? true code : else code
  return (
    <div>
      {
        // conditional formatting (? and :)
        isUserLoggedIn 
        ? <h1>Logged In!</h1>
        : <h1>Not Logged In!</h1>
      }

      {
        // conditional formatting (&&)
        isUserLoggedIn && (
          <ul>
            {
              // mapping
              userList.map((user) => (
                <li key={user}>{user}</li>
              ))
            }
          </ul>
        )
      }
      <Hooks />
    </div>
  )
}

export default App;
