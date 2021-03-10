import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';
import Row from './Row';

function HomeScreen() {
    return (
        <HomeScreenContainer>
            <NavBar />

            <Header />

            <Row />
        </HomeScreenContainer>
    )
}

export default HomeScreen


const HomeScreenContainer = styled.div`
    display:flex;
`