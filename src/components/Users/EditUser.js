import React, { useState, useEffect, useRef } from "react";

const EditUser = ({ id, setId, toggle }) => {
  const [userdata, setUserData] = useState([]);

  const usernameRef = useRef();
  const emailRef = useRef();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const onSubmitHandler = () => {
    if (toggle === "Edit") {
      const student = {
        name: usernameRef.current.value,
        email: emailRef.current.value,
      };
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: student,
      })
        .then((response) => console.log(response.status))
        .catch((err) => {
          console.log(err);
        });
      console.log("Edit Succefully Completed");
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => console.log(response.status))
        .catch((err) => {
          console.log(err);
        });
      console.log("Delete Succefully Completed");
    }

    setId(0);
  };

  return (
    <div className="container">
      <h1>{toggle} User {userdata.id}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>UserName</label>
          <input type="text" className="form-control" value={id} />
        </div>
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            ref={usernameRef}
            className="form-control"
            defaultValue={userdata.name}
          />
        </div>
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            ref={emailRef}
            className="form-control"
            defaultValue={userdata.email}
          />
        </div>
        <div className="form-group">
          {toggle === "Edit" && <button type="submit">Update</button>}
          {toggle === "Delete" && <button type="submit">Delete</button>}
        </div>
      </form>
    </div>
  );
};

export default EditUser;
