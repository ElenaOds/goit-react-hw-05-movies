import styled from '@emotion/styled';
import { Link } from "react-router-dom";


export const Box = styled.div`
padding: 20px 50px;
`;

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
list-style: none;
`;

export const Item = styled.li`
margin-bottom: 5px;
text-decoration: none;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;

export const Img = styled.img`
width: 250px;
height: 100%;
`