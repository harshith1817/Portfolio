import "./index.css";
import styled from 'styled-components';
import CMRIT from './CMRIT.png'
import AbhiBus from './AbhiBus.png'
import TicTacToe from './TicTacToe.png'
import Portfolio from './Portfolio.png'
import CinemaSeek from './CinemaSeek.png'
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const Section = styled.section`
  width: 100%;
  height:95rem;
  @media (max-width: 1310px){
    height:133rem;
  }
  @media (max-width: 900px){
    height:209rem;
  }
  @media (max-width: 767px){
    height:182rem;
  }
`;

const MyProjects = styled.h1`
  color: white;
  padding-top: 10rem;
  padding-bottom: 2.5rem;
  text-align: center;
  font-size: 2.5rem;

  @media (max-width: 767px){
  padding-top: 7rem;
  }
`;

const ProjectWorksContainer = styled.div`
  width: 100%;
  height: 73rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const ProjectContainer = styled.div`
  width: 24rem;
  height: 35rem;
  box-shadow: 0.15rem 0.15rem 0.5rem rgba(138, 76, 168, 0.5);
  border-radius: 0.35rem;
  margin: 1.75rem;
  border: 0.005rem solid #8a4ca8;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center;
  &:hover {
    scale : 1.075;
    transition: .5s;
    box-shadow: 0.15rem 0.15rem 0.8rem rgba(138, 76, 168, 0.7);
  }

  @media (max-width: 767px){
  width: 18.5rem;
  height: 30rem;
}
`;

const Works = styled.span`
color: #2ab3a1;
  `;

const Image = styled.div`
padding-top:2rem;
padding-bottom:2rem;
  width: 23.5rem;
  height: 16rem;
  
  @media (max-width: 767px){
  width: 20rem;
  height: 15rem;
  }
`;

const Discription = styled.div`
text-align:center;
width:22rem;

  @media (max-width: 767px){
  width: 17rem;
  }

`;

const ButtonsContainer = styled.div`
padding:1.5rem;
display: flex;
flex-direction: row;
align-items: center;
`;

const Buttons = styled.a`
width:6rem;
height:2rem;
font-size:0.9rem;
border-radius:0.35rem;
background-color:#8a4ca8;
color:white;
border:none;
margin-right:1rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;


&:hover{
    opacity:0.8;
}
`;

const ProjectHeading=styled.h1`
color:white;
Padding-bottom:1.5rem;
`;

const ProjectDesc=styled.p`
color:white;
text-align:left;
  @media (max-width: 767px){
padding-leftt:1.2rem;
  }
`;

function Projects() {

  return (
    <Section>
      <MyProjects>
        My Recent <Works>Works</Works>
      </MyProjects>
      <ProjectWorksContainer>
        <ProjectContainer>
            <Image>
                <img src={CMRIT} className="projectss"/>
            </Image>
            <Discription>
                <ProjectHeading>CMRIT Clone</ProjectHeading>
                <ProjectDesc>Recreated CMR Institute of Technology's website using 
                    HTML and CSS, showcasing modern web design techniques. Explore this project to experience it firsthand.</ProjectDesc>
            </Discription>
            <ButtonsContainer>
                <Buttons href="https://github.com/harshith1817/CMRITHYD_CLONE" target="_blank">
                    <FaGithub />&nbsp; GitHub
                </Buttons>
                <Buttons href="https://harshith1817.github.io/CMRITHYD_CLONE" target="_blank">
                    <CgFileDocument />&nbsp; Demo
                </Buttons>
            </ButtonsContainer>
        </ProjectContainer>
        <ProjectContainer>
          <Image>
          <img src={AbhiBus} className="projectss"/>
          </Image>
          <Discription>
            <ProjectHeading>AbhiBus Automation</ProjectHeading>
                        <ProjectDesc>As part of my professional experience, I undertook the responsibility of automating the testing process 
                            for the Abhi Bus ticket booking website using Java and Selenium framework.</ProjectDesc>
            </Discription>
            <ButtonsContainer>
            <Buttons href="https://github.com/harshith1817/AbhiBusAutomation" target="_blank">
                <FaGithub />&nbsp; GitHub
                </Buttons >
                <Buttons href="https://drive.google.com/file/d/16hvGmxlIVc8PwkaJ4QkE_q7-Z1N0ubkR/view" target="_blank">
                    <CgFileDocument />&nbsp; Demo
                </Buttons>
            </ButtonsContainer>
        </ProjectContainer>
        <ProjectContainer>
            <Image>
                <img src={TicTacToe} className="projectss"/>
            </Image>
            <Discription>
                
            <ProjectHeading>TicTacToe Game</ProjectHeading>
                    <ProjectDesc>This project highlights my front-end web skills with modern design
                    principles, featuring clean layout, typography, and intuitive navigation.</ProjectDesc>
            </Discription>
            <ButtonsContainer>
                <Buttons href="https://github.com/harshith1817/TicTacToe" target="_blank">
                <FaGithub />&nbsp; GitHub
                </Buttons>
                <Buttons href="https://harshith1817.github.io/TicTacToe/" target="_blank">
                    <CgFileDocument />&nbsp; Demo
                </Buttons>
            </ButtonsContainer>
        </ProjectContainer>
        <ProjectContainer>
            <Image>
            <img src={Portfolio} className="projectss"/>
            </Image>
            <Discription>
                <ProjectHeading>Portfolio</ProjectHeading>
                <ProjectDesc>My portfolio, meticulously crafted using HTML, CSS, JavaScript, and React, 
                        serves as a dynamic platform to showcase my projects and skills, providing visitors with an immersive experience.</ProjectDesc>
            </Discription>
            <ButtonsContainer>
                <Buttons href="https://github.com/harshith1817/Portfolio/" target="_blank">
                    <FaGithub />&nbsp; GitHub
                </Buttons>
                <Buttons href="https://chbsh.vercel.app" target="_blank">
                    <CgFileDocument />&nbsp; Demo
                </Buttons>
            </ButtonsContainer>
            </ProjectContainer>
            <ProjectContainer>
            <Image>
            <img src={CinemaSeek} className="projectss"/>
            </Image>
            <Discription>
                <ProjectHeading>CinemaSeek</ProjectHeading>
                <ProjectDesc>A React-based movie search application that allows users to search for films,
                  view detailed information, and save their favorite movies in a responsive and user-friendly
                  interface.</ProjectDesc>
            </Discription>
            <ButtonsContainer>
                <Buttons href="https://github.com/harshith1817/CinemaSeek/" target="_blank">
                    <FaGithub />&nbsp; GitHub
                </Buttons>
                <Buttons href="https://cinema-seek.vercel.app" target="_blank">
                    <CgFileDocument />&nbsp; Demo
                </Buttons>
            </ButtonsContainer>
            </ProjectContainer>
      </ProjectWorksContainer>
    </Section>
  );
}

export default Projects;