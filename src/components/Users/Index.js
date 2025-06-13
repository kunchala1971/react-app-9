import React from "react";

const Users = ({ data, setId,setToggle }) => {
  const onClickHandler = (id,toggle) => {
    setToggle(toggle)
    setId(0);
    setId(id);
  };
  return (
    <div className="container">
      <h1>Users Data</h1>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {data.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>
                <button
                  className="btn btn-primary me-1"
                  onClick={() => onClickHandler(element.id,"Edit")}
                >
                  Edit
                </button>
                <button className="btn btn-danger ms-1"  onClick={() => onClickHandler(element.id,"Delete")}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Pagination</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Users;
