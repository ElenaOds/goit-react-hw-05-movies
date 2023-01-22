import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


export const Box = styled.div`
padding: 20px 50px;
display: flex;
flex-direction: column;
`;

export const Name = styled.h1`
margin: 0 0 20px 0;
font-weight: 700;
font-size: 30px;
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
margin: 0;
padding: 0;
list-style: square;
`;

export const StyledLink = styled(NavLink)`
margin-bottom: 5px;
`;