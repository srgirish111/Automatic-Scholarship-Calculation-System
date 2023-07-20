
import {useState }from "react";
import "../registerst/registerst.css";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Registerst = () => {
  const navigate = useNavigate();
  const { setUserToken, setUserType } = useContext(AppContext);
  const [user, setUser] = useState({
    firstName: "",
    id:"",
    lastName: "",
    emailId: "",
    branch: "",
    programme:"",
    Year: "",
    dob: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(user);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const {
        firstName,
        id,
        lastName,
        emailId,
        branch,
        programme,
        Year,
        dob,
        gender,
    } = user;
    const temp= user.id;
    setUserToken(temp);
    setUserType("student");
    localStorage.setItem("userToken", user.id);
    localStorage.setItem("userType", "student");
    navigate("/Homest");
  };

  return (
    <div className="register" id="register-form">
      {console.log("User", user)}
      <div className="form" id="form-id">
        <h2>Register as Student</h2>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          placeholder="Your First Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          placeholder="Your Last Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="id"
          value={user.id}
          placeholder="Your Id"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="emailId"
          value={user.emailId}
          placeholder="Your EmailId"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="branch"
          value={user.branch}
          placeholder="Your Branch"
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="Year"
          value={user.Year}
          placeholder="Your Year"
          onChange={handleChange}
        ></input>
        <input
          type="date"
          name="dob"
          value={user.dob}
          placeholder="Your Date of Birth"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="gender"
          value={user.gender}
          placeholder="Your Gender"
          onChange={handleChange}
        ></input>
        <div className="button" onClick={register}>
          Register
        </div>
      </div></div>
  );
};
export default Registerst