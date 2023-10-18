import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

// Styled Components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 100px;
  color: #447bbe;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledLoginButton = styled.button`
  margin-right: 10px;
  height: 35px;
  width: 100px;
  border-radius: 10px;
  background-color: #447bbe;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

const StyledRegisterButton = styled.button`
  height: 35px;
  width: 100px;
  border-radius: 10px;
  background-color: #b11313;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

function LandingPage() {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleRegistration = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.status === 201) {
        // Registration successful
        const data = await response.json();
        console.log("User registered:", data);
        // Optionally, you can navigate to another page here
        navigate("/homefeed");
      } else {
        // Registration failed
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false); // Hide the registration form
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false); // Hide the login form
    setShowRegisterForm(true);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (showLoginForm) {
      // Handle login form submission
      try {
        const response = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registrationData.email, // Use the email input from your state
            password: registrationData.password, // Use the password input from your state
          }),
        });

        if (response.status === 200) {
          // Login successful
          const userData = await response.json();
          console.log("Login successful:", userData);
          // navigate to another page here
          navigate("/homefeed");
        } else {
          // Login failed
          const errorData = await response.json();
          console.error("Login failed:", errorData);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    } else if (showRegisterForm) {
      handleRegistration(); // Calls the registration function for registration
    }
  };

  // Separate onChange handlers for each input field
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({
      ...registrationData,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({
      ...registrationData,
      email: e.target.value,
    });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({
      ...registrationData,
      username: e.target.value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({
      ...registrationData,
      password: e.target.value,
    });
  };

  return (
    <div>
      <StyledTitle>Welcome to WEB</StyledTitle>
      <StyledButtonContainer>
        <StyledLoginButton onClick={handleLoginClick}>Login</StyledLoginButton>
        <StyledRegisterButton onClick={handleRegisterClick}>
          Register
        </StyledRegisterButton>
      </StyledButtonContainer>

      {showLoginForm && (
        <StyledForm onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <input type="submit" value="Login" />
        </StyledForm>
      )}

      {showRegisterForm && (
        <StyledForm onSubmit={handleRegistration}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={registrationData.name}
            onChange={handleNameChange}
            required
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={registrationData.email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <label htmlFor="username">Username:</label> {/* Add this */}
          <input
            type="text"
            id="username"
            name="username"
            value={registrationData.username}
            onChange={handleUsernameChange}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={registrationData.password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <input type="submit" value="Register" />
        </StyledForm>
      )}
    </div>
  );
}

export default LandingPage;
