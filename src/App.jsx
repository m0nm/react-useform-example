import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <h1>Sign Up</h1>
        {/* email */}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        {/* password */}
        <div className="input-container">
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>

        {/* confirm password */}
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" />
        </div>

        {/* button */}
        <button>SIGN UP</button>
      </form>
    </div>
  );
}

export default App;
