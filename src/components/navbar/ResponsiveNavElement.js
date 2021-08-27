import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';

export const ResponsiveContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #ff9999;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({open}) => (open ? '1' : '0')};
top: ${({open}) => (open ? '0' : '-100%')};
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;


`


export const CloseIcon = styled(FaTimes)`

color: white

`


export const ResponsiveWrapper = styled.div`

`


export const ResponsiveMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

`


export const ResponsiveLink = styled(Link)`
display: flex;
color: white;
align-items: center;
justify-content: center;
text-decoration: none;
font-size: 1.5rem;
transition: 0.3s ease-in-out;
text-transform: uppercase;
letter-spacing: 0.5rem;
&:hover {
    color: black;
}
`


export const ButtonWrapper = styled.div`

display: flex;
justify-content: center;
`
