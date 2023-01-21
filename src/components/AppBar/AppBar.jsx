import { Nav, StyledLink } from "./AppBar.styled";

export const AppBar = () => {
    return (
      <Nav>
        <StyledLink to="home">Home</StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Nav>  
    )
}