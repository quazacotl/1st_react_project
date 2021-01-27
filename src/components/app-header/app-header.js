import React from 'react'
import  styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        color: ${props => props.colored ? 'red' : 'green'};
        font-size: 26px;
        :hover {
            color: blue
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1 >Name Surname</h1>
            <h2>{allPosts} записи, из них понравилось {liked}</h2>
        </Header>
    )
};

export default AppHeader;