import React, { useEffect, useState } from "react";
import Users from "./components/Users/Index";
import EditUser from "./components/Users/EditUser";

const App = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [toggle, setToggle] = useState("");

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  if (id > 0) {
    return <EditUser id={id} setId={setId} toggle={toggle} />;
  }
  return (
    <div>
      {/* {id > 0 && <EditUser id={id} />} */}

      <Users data={data} setId={setId} setToggle={setToggle}/>
    </div>
  );
};

export default App;
