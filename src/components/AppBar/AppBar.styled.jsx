import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';

export const Nav = styled.nav`
background-color: #fafafa;
height: 60px;
padding: 0 50px;
display: flex;
align-items: center;
border-bottom: 4px;
box-shadow: 
0px 2px 1px rgb(0 0 0 / 20%);

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