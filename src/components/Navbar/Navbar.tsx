import React from "react";
import styled from "styled-components";
import "bootstrap-icons/font/bootstrap-icons.css";

//Styled Components
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  width: 100%;
  height: 50px;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 800px;
  list-style: none;
  padding-top: 15px;

  li {
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;

      &:hover {
        box-shadow: 0 0 10px #B11313;
        color: #447BBE;
    }
  }
`;

const StyledIcon = styled.i`
  font-size: 2rem;
`;

interface NavbarProps {
  // TODO
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar: React.FC<NavbarProps> = (_props) => {
  return (
    <StyledDiv>
      <StyledUl>
        <li>
          <a href="/homefeed">
            <StyledIcon className="bi bi-house"></StyledIcon>
          </a>
        </li>
        <li>
          <a href="/">
            <StyledIcon className="bi bi-search"></StyledIcon>
          </a>
        </li>
        <li>
          <a href="/">
            <StyledIcon className="bi bi-person"></StyledIcon>
          </a>
        </li>
      </StyledUl>
    </StyledDiv>
  );
};

export default Navbar;
