import { CookiesProvider } from "react-cookie";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import NewProduct from "./pages/NewProduct";
import UserList from "./pages/UserList";
import ResumeList from "./pages/ResumeList";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import './App.css'

const  Container = styled.div`
  display: flex;
  flex: 4;
`
const  Other = styled.div`
flex: 6;
`
function App() {
  return (
    <Router>
      <Routes>

      <Route path="/login" element={<Login />}></Route>
      </Routes>
      {/* <TopBar /> */}
      <CookiesProvider>
        <Container>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/user/:userId" element={<User />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/resumes" element={<ResumeList />}></Route>
            <Route path="/resume/:resumeId" element={<Resume />}></Route>
            <Route path="/newresume" element={<NewProduct />}></Route>
          </Routes>
        </Container>
      </CookiesProvider>
    </Router>
  );
}

export default App;
