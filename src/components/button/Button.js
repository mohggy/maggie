import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({background}) => (background ? '#ff8080' : '#ffcccc')};
    border-radius: 3rem;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({large}) => (large ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? 'white' : 'black')};
    fontSize: ${({ large }) => (large ? '20px' : '14px')};
    
    &:hover {
        transform: translateY(-2px)
    }
`
