import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { 
    LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@mui/icons-material';

const Sidebar = styled.div`
    flex: 1;
    height: calc(100vh - 10vh);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 0;
`

const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`

const SidebarMenu = styled.div`
     margin-bottom: 10px;
`

const SidebarTitle = styled.h3`
    font-size: 13px;
  color: rgb(187, 186, 186);
`

const SidebarList = styled.ul`
    list-style: none;
  padding: 5px;
`

const SidebarListItem = styled.li`
    padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover, :active{
    background-color: rgb(240, 240, 255);
  }
`

 const sidebarIcon = {
    marginRight: '5px',
    fontSize: '20px'
}

const SideBar = () => {
  return (
    <Sidebar>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
          <Link to="/" className="link">
            <SidebarListItem active>
              <LineStyle style={sidebarIcon} />
              Home
            </SidebarListItem>
            </Link>
            <SidebarListItem>
              <Timeline style={sidebarIcon} />
              Analytics
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
          <Link to="/users" className="link">
              <SidebarListItem>
                <PermIdentity style={sidebarIcon} />
                Users
              </SidebarListItem>
          </Link>
          <Link to="/resumes" className="link">
              <SidebarListItem>
                <Storefront style={sidebarIcon} />
                Resumes
              </SidebarListItem>
          </Link>   
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </Sidebar>
  )
}

export default SideBar