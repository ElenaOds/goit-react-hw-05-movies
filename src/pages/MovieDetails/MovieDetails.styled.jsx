import styled from '@emotion/styled';
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
display: block;
align-items: center;
width: 90px;
height: 20px;
text-decoration: none;
color: #1a1a1a;
background-color: #f0f0f0;
margin: 10px;
border: 2px solid #a6a6a6;
border-radius: 4px;
cursor: pointer;

:hover {
    border: 2px solid #8d8d8d;
    background-color: #b0b0b0;
    }
`;

export const Section = styled.div`
display: flex;
padding-left: 10px;
padding-right: 10px;
border-bottom: 2px solid #a6a6a6;
`;

export const Img = styled.img`
display: block;
margin-right: 20px;
margin-bottom: 10px;
`;

export const List = styled.ul`
display: flex;
flex-direction: column;
padding: 0 0 5px 40px;
margin: 0;
border-bottom: 2px solid #a6a6a6;
`;

export const Item = styled.li`
margin-bottom: 5px;
`;

export const Text = styled.p`
margin: 0;
padding: 10px;
`