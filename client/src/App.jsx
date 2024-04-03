import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { baseUrl } from "./config";
import { set } from "mongoose";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [_id, setId] = useState("");
  const [users, setUsers] = useState([]);
  const postData = async () => {
    axios
      .post(baseUrl + "users", {
        firstName,
        lastName,
        email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    axios
      .get(baseUrl + "users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <h1>Assignment -001</h1>
        <div className="display">
          <h2>Display Details</h2>
          {users &&
            users.map((user) => {
              return (
                <div
                  className="user-details"
                  key={user._id}
                  onClick={() => {
                    setId(user._id);
                    setFirstName(user.firstName);
                    setLastName(user.lastName);
                    setEmail(user.email);
                  }}
                >
                  <div className="first-name">{user.firstName}</div>
                  <div className="last-name">{user.lastName}</div>
                  <div className="email">{user.email}</div>
                </div>
              );
            })}
        </div>
        <form action="">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="button-stack">
            <button
              onClick={(e) => {
                e.preventDefault();
                postData();
              }}
            >
              Save as New Entry
            </button>
            <button>Update Entry</button>
            <button>Delete Entry</button>
            <button>Clear the Fields</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default App;
