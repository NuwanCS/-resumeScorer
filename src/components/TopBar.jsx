import React from 'react'
import styled from 'styled-components'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Container = styled.div`
    width: 100%;
    height: 10vh;
    
    background-color: lightgray;
    position: sticky;
    top: 0;
    z-index: 999;

`

const ContainerWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    padding: 0 10px;
`

const Left = styled.div`
    
`

const Logo = styled.span`
    padding: 0 10px;
`

const Right = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

const IconContainer = styled.div`
    position: relative;
    padding: 0 10px;
`

const IconBadge = styled.span`
    background-color: red;
    padding: 0.1rem 0.4rem;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -2px;
    font-size: 10px;
`

const TopBar = () => {
  return (
    <Container>
        <ContainerWrapper>
        <Left>
            <Logo>Resume Screener</Logo>
        </Left>
        <Right>
            <IconContainer>
                <NotificationsNoneIcon/>
                <IconBadge>2</IconBadge>
            </IconContainer>
            <IconContainer>
                <LanguageIcon/>
                <IconBadge>2</IconBadge>
            </IconContainer>
            <IconContainer>
                <SettingsIcon/>
            </IconContainer>
            <IconContainer>
                <AccountCircleIcon/>
            </IconContainer>
        </Right>
        </ContainerWrapper>
    </Container>
  )
}

export default TopBar