import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './Footer';
import MoveToTop from "./components/MoveToTop";
import Preloader from "./components/Preloader.jsx";
import Bot from './components/Bot/Bot.jsx';
import {FaBars} from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import './App.css';

const onClickHandle = (e) => {
  window.open("https://github.com/harshith1817/Portfolio", '_blank');
};

const Nav = styled.nav`
  margin-top: 0;
  width: 100%;
  height: 4.5rem;
  display: flex;
  padding-left: 6rem;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-left: 0;
  }
`;

const Logo = styled.div`
  color: #a2c4a8;
  font-size: 1.8rem;
  align-items: center;
  padding-left: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display : none;
  }
`;

const MobileLogo = styled.div`
  color: #a2c4a8;
  font-size: 1.8rem;
  align-items: center;
  padding-left: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  display : none;
  left : 20px;
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display : block;
  }
`;

const MenuItems = styled.div`
  width: 83%;
  display: flex;
  justify-content: right;
  background-color: rgba(0, 0, 0, 0);

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Icon = styled.span`
  color: white;
  background-color: rgba(0, 0, 0, 0);
  font-size: 1.2rem;
`;

const MenuItem = styled(({ exact, activeClassName, ...props }) => (
  <NavLink {...props} exact={exact ? true : undefined} activeClassName={activeClassName ? 'active' : undefined} />
))`
  color: white;
  text-decoration: none;
  margin-right: 3rem;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  position: relative;

  &.active {
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0);
    color: #b968c7;    
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background-color: #b968c7;
    border-bottom: 5px;
    transform-origin: center;
    transform: scaleX(0);
    transition: .5s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    display : none;
  }
`;

const SourceCodeBtn = styled.button`
  width: 5.5rem;
  height: 2.25rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: #643483;
  position: relative;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    transform: translateY(-1.75px);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    display : none;
  }
`;

const MobileSourceCodeBtn = styled.button`
  width: 5.5rem;
  height: 2.25rem;
  border-radius: 0.4rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: #643483;
  position: relative;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
    transform: translateY(-1.75px);
    opacity: 0.8;
  }
`;

const MobileNav = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  position : fixed;
  display : flex;
  justify-content : space-between;
  width : 100%;
  heigth : 40px;
  align-items : center;
  padding : 0 10px;
`;
const MobileIcon = styled.div`
  display : none;
  @media screen and (max-width : 768px) {
      display : block;
      position : absolute;
      top : 0;
      right : 10px;
      font-size : 1.5rem;
      cursor : pointer;
      transform : translate(-100%, 50%);
      cursor : pointer;
      color : white;
      margin : 0
  }
`;

const MobileMenu = styled.div`
  width: 100%;
  height : 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  gap: 16px;
  position: fixed;
  top: 50px;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`;

const MobileLink = styled(({ exact, activeClassName, ...props }) => (
  <NavLink {...props} exact={exact ? true : undefined} activeClassName={activeClassName ? 'active' : undefined} />
))`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0);

  &.active {
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0);
    color: #b968c7;    
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background-color: #b968c7;
    border-bottom: 5px;
    transform-origin: center;
    transform: scaleX(0);
    transition: .5s;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;


function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (load) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }

    const timer = setTimeout(() => {
      setLoad(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, [load]);

  const reloadPage = () => {
    window.location.reload();
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Router>
      <div className="app">

      <img src="https://raw.githubusercontent.com/harshith1817/Portfolio/main/public/assets/Background.png" alt="background" className='bg'/>
        <Preloader load={load} />
        <MoveToTop />
        <Nav>
          <Logo onClick={reloadPage}>HC</Logo>
          <MenuItems>
            <MenuItem exact to='/'> <Icon> <AiTwotoneHome /> </Icon>Home</MenuItem>
            <MenuItem to='/about'> <Icon> <FaUser /> </Icon>About</MenuItem>
            <MenuItem to='/projects'> <Icon> <GoProjectSymlink /> </Icon>Projects</MenuItem>
            <MenuItem to='/resume'> <Icon> <IoDocumentTextOutline /> </Icon>Resume</MenuItem>
            <SourceCodeBtn onClick={onClickHandle} className='github'><Icon> <FaCodeBranch /><FaStar /></Icon></SourceCodeBtn>
          </MenuItems>            
        </Nav>

        <MobileNav>
          <MobileLogo onClick={reloadPage}>HC</MobileLogo>
          <MobileIcon>
            <FaBars onClick={()=>{setIsOpen(!isOpen)}}></FaBars>
          </MobileIcon> 
        </MobileNav>
        

        {
          isOpen && 
            <>
            
            <MobileMenu isOpen={isOpen}>
                <MobileLink to="/" onClick={()=>setIsOpen(!isOpen)}>Home</MobileLink>
                <MobileLink to="/about" onClick={()=>setIsOpen(!isOpen)}>About</MobileLink>
                <MobileLink to="/projects" onClick={()=>setIsOpen(!isOpen)}>Projects</MobileLink>
                <MobileLink to="/resume" onClick={()=>setIsOpen(!isOpen)}>Resume</MobileLink>  
                <MobileSourceCodeBtn onClick={onClickHandle} className='github'><Icon> <FaCodeBranch /><FaStar /></Icon></MobileSourceCodeBtn>           
            </MobileMenu>
            </>
        }

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Bot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;