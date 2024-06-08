import Lottie from 'lottie-react';
import Code from './coder.json';
import styled from 'styled-components';
import { FaPython,FaJava,FaHtml5,FaCss3,FaReact,FaNodeJs,FaNpm,FaGitAlt,FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress,SiSelenium } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";



const AboutPage=styled.div`
width:100%;
`;

const Part1=styled.div`
display: flex;
padding-top:3rem;
height:40.5rem;

@media (max-width: 767px){
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
}
`;

const Who = styled.div`
    width:65%;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media (max-width: 767px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Coder = styled.div`
    width:30%;
    display:flex;
    justify-content:center;   

@media (max-width: 767px){
    width: 100%;
    height:25%;
    flex-direction: column;
    align-items: center;
}
`;

const Heading=styled.h1`
font-size:2.5rem;
color:white;
padding-bottom:2rem;

@media (max-width: 767px){
    width: 100%;
    display: flex;
    padding-top: 1.5rem;
    padding-bottom:4%;
}
`;

const Diff=styled.span`
color: #2ab3a1;
font-weight:bold;
`;

 const Bio=styled.p`
 font-size:1.35rem;
 padding-bottom:2rem;
 `;

 const Bio2=styled.p`
 font-size:1.35rem;
 padding-bottom:2rem;

 @media (max-width: 767px){
    padding-bottom: 1.5rem;
}
 `;

const Parah=styled.div`
width:75%;
height:45rem;
display:flex;
flex-direction:column;
justify-content:center;
color:white;
font-weight: lighter;

@media (max-width: 767px){
    width: 100%;
    padding-left:8%;
}
`;


const Part2=styled.div`
height:42rem;
text-align:center;
display:flex;
justify-content:center;
flex-wrap:wrap;

@media (max-width: 767px){
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    height:74rem;
}
`;
const SkillsDiv=styled.div`
width:100%;
height:3rem;

@media (max-width: 767px){
    width:100%;
    padding-top:16%;
}
`;

const Skills=styled.div`
font-size:2.5rem;
color:white;
font-weight:Bold;
padding-bottom:2rem;

@media (max-width: 767px){
    font-size: 2rem;
    color: white;
    font-weight: bold;
    padding-bottom: 1.5rem;
    text-align: center;
}

`;

const SkillBox=styled.div`
font-size:3.5rem;
color:white;
width:70rem;
height:35rem;
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;
align-items:center;

@media (max-width: 767px){
    width: 100%;
    height:50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

`;

const SkillHolder=styled.div`
width:12rem;
height:9.5rem;
background-color: transparent;
border-radius:0.35rem;
margin:0.7rem;
border: 0.005rem solid #8a4ca8;
display:flex;
justify-content:center;
align-items:center;
transition: .5s;

&:hover {
    scale : 1.075;
    box-shadow: 0.15rem 0.15rem 0.8rem rgba(138, 76, 168, 0.7);
}

@media (max-width: 767px){

    width: 8rem;
    height: 6rem;
    background-color: transparent;
    border-radius: 0.35rem;
    margin: 0.5rem;
    border: 0.005rem solid #8a4ca8;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  
    &:hover {
      transform: scale(1.075);
      box-shadow: 0.15rem 0.15rem 0.8rem rgba(138, 76, 168, 0.7);
    }
  

`;



function About() {
  return (
    <AboutPage>
        <Part1>
            <Who>
                <Parah>
                    <Heading>Get to <Diff>Know</Diff> me!</Heading>
                    <Bio>Hi, my name is <Diff>Harshith Chintakindi</Diff> and I am from Hyderabad, India.
                        I'm currently pursuing a degree in <Diff>Artificial Intelligence and Data Science </Diff>from CMR Institute Of Technology, Hyderabad.
                        I'm eager to embark on my career in <Diff>software development</Diff>.
                        
                    </Bio>
                    <Bio2>
                        I'm actively learning and honing my skills in preparation for my transition into the industry.
                        I'm currently working on <Diff>personal projects</Diff> to strengthen my <Diff>programming abilities</Diff> and gain practical experience.
                    </Bio2>
                </Parah>
            </Who>
            <Coder>
                <Lottie
                    animationData={Code}
                    loop={true}
                />
            </Coder>
        </Part1>
        <Part2>
            <SkillsDiv>
                <Skills>Professional <Diff>Skillset</Diff></Skills>
            </SkillsDiv>
            <SkillBox>
                <SkillHolder><FaPython /></SkillHolder>
                <SkillHolder><FaJava /></SkillHolder>
                <SkillHolder><IoLogoJavascript /></SkillHolder>
                <SkillHolder><FaHtml5 /></SkillHolder>
                <SkillHolder><FaCss3 /></SkillHolder>
                <SkillHolder><FaReact /></SkillHolder>
                <SkillHolder><FaNodeJs /></SkillHolder>
                <SkillHolder><SiExpress /></SkillHolder>
                <SkillHolder><FaNpm /></SkillHolder>
                <SkillHolder><SiSelenium /></SkillHolder>
                <SkillHolder><FaGitAlt /></SkillHolder>
                <SkillHolder><FaGithub /></SkillHolder>
                <SkillHolder><VscVscode /></SkillHolder>
            </SkillBox>
        </Part2>
    </AboutPage>
  );
}

export default About;