import { useState } from "react";

export default function App() {
  return <Myapp />;
}

function Myapp() {
  const [welcome, setWelcome] = useState(true);
  const [message, setMessage] = useState("there");
  const [off, setOff] = useState(false);

  function handleimg() {
    setOff((tr) => !tr);
  }
  function handleclick() {
    setWelcome((not) => !not);
  }

  function handleback() {
    setWelcome(true);
  }

  function handlemessage(e) {
    setMessage(e.target.value);
  }
  return (
    <section className={off ? "color" : ""}>
      {welcome ? (
        <div className="card">
          <div className="data">
            <img
              src="https://images.unsplash.com/photo-1540957904852-c2184978df5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="logo"
              height={40}
            />
            <h3> Welcome back</h3>
            <p className="dont">
              Don't have an account yet?
              <span className="sign" onClick={handleimg}>
                {" "}
                Sign up
              </span>
            </p>
          </div>
          <div className="input-element1">
            <i className="fa-regular fa-envelope"></i>
            <input placeholder="full name" onChange={handlemessage} />
          </div>

          <div className="input-element2">
            <i className="fa-solid fa-lock"></i>
            <input placeholder="Password" />
          </div>

          <button className="btn" onClick={handleclick}>
            Login
          </button>

          <div className="bar">
            <div className="bar1"></div>
            <span className="or">OR</span>
            <div className="bar1"></div>
          </div>

          <div className="brand">
            <div className="apple">
              <i className="fa-brands fa-apple"></i>
            </div>

            <div className="apple">
              <i className="fa-brands fa-google"></i>
            </div>

            <div className="apple">
              <i className="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="second">
          <img
            src="https://images.unsplash.com/photo-1540957904852-c2184978df5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            height={40}
          />
          <h1> Hi, {message}</h1>
          <button className="btn" onClick={handleback}>
            Go back
          </button>
        </div>
      )}
    </section>
  );
}
