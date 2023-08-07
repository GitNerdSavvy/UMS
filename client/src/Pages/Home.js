import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/reducers/userSlice";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { users } = useSelector((state) => state.users);
  return (
    <div className="container flex items-center justify-content-center">
      <h2
        style={{ backgroundColor: "red" , borderRadius: "25px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",  transition: "box-shadow 0.3s ease", 
        ":hover": {
          boxShadow: "0 0 10px rgba(255, 165, 0, 0.8)"}
         }}
        className="text-center text-white p-2 m-2"
      >
        User Details
      </h2>
      <Link to={"/register"}>
        <button className="btn btn-primary">
          <i className="fa fa-add" />
          &nbsp;Add
        </button>
      </Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>City</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
  {users &&
    users.map((user) => {
      return (
        <tr key={user.id}> 
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
          <td>{user.city}</td>
          <td>
            <img
              src={`http://localhost:8000/${user.profile}`}
              className="img img-rounded"
              height="100px"
              width="100px"
              alt="Profile"
            />
          </td>
        </tr>
      );
    })}
</tbody>
      </table>
    </div>
  );
};

export default Home;
