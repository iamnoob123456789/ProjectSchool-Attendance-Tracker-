import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported

const Login = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    rollno: "",
    password: "",
  });

  const navigate = useNavigate();

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle login authentication
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://127.0.0.1:5000/api/login", formData);
        if (response.data.success) {
            localStorage.setItem("token", response.data.token); // Store token
            navigate("/attendance/cse");
        } else {
            alert("Invalid credentials");
        }
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed! Check console for details.");
    }
};


  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Navigate to signup page
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/profilecreation");
  };

  return (
    <div className="d-flex align-items-center py-4 bg-body-tertiary">
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <img
            className="mb-4"
            src={process.env.PUBLIC_URL + "/kmit-logo.png"}
            alt="kmit logo"
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your roll number"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingInput">RollNo</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>

          <button className="btn btn-primary w-20 py-2" type="submit">
            Sign in
          </button>
          <button className="btn btn-primary w-20 py-2" onClick={handleSignUp}>
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2007</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
