import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <Wrapper>
      <Title>Farm Records App</Title>
      <UL>
        <List>Records</List>
        <List>New Records</List>
      </UL>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  font-family: "Great Vibes", cursive;
  color: #23bca8;
  font-size: 28px;
  font-weight: bold;
  padding: 15px 0;
`;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #1f2430;
`;

const UL = styled.ul`
  display: flex;
  color: #fff;
  list-style: none;
  align-items: center;
`;

const List = styled.li`
  padding: 0 5px;
  
  &:hover {
    color: red; // <Thing> when hovered
    border-bottom: 1px solid #fff;
  }

`;

export default NavBar;
