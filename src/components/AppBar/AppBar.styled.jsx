import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const Nav = styled.nav`
height: 60px;
padding: 0 50px;
display: flex;
align-items: center;
border-bottom: 4px;
box-shadow: 
0px 2px 1px rgb(0 0 0 / 20%);
background: #C9D6FF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const StyledLink = styled(NavLink)`
position: relative;
margin-right: 15px; 
color: #1a1a1a;
font-weight: 500;
font-size: 25px;
line-height: 1.14;
letter-spacing: 0.02em;
text-decoration: none;

&.active {
    color: #ff4000;
}
 &:hover::after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
}

`;