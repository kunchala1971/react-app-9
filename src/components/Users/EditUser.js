import React, { useState, useEffect } from "react";

const EditUser = ({ id,setId }) => {
  const [userdata, setUserData] = useState([]);
  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [id]);
const onSubmitHandler=()=>{
    setId(0);
}
  return (
    <div className="container">
      <h1>Edit User {userdata.id}</h1>
      <form onSubmit={onSubmitHandler}>
 <div className="form-group">
        <label>UserName</label>
        <input type="text" className="form-control" value={id} />
      </div>
      <div className="form-group">
        <label>UserName</label>
        <input type="text" className="form-control" value={userdata.name} />
      </div>
      <div className="form-group">
        <label>UserName</label>
        <input type="text" className="form-control" value={userdata.email} />
      </div>
       <div className="form-group">
        <button type="submit">Update</button>
       </div>
      </form>
     
    </div>
  );
};

export default EditUser;
