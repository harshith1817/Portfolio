import Lottie from 'lottie-react';
import Code from './coder.json';
import styled from 'styled-components';
import { FaPython,FaJava,FaHtml5,FaCss3,FaReact,FaGitAlt,FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNumpy, SiPandas, SiScikitlearn, SiOpencv, SiTensorflow, SiSelenium } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";


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
    width: 95%;
    height:50%;
    flex-direction: column;
    align-items: center;
}
`;

const Heading=styled.h1`
font-size:2.8rem;
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
 font-size:1.6rem;
 padding-bottom:2rem;
 `;

 const Bio2=styled.p`
 font-size:1.6rem;
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
    width: 85%;
    padding-left:8%;
}
`;


const Part2=styled.div`
height:45rem;
text-align:center;
display:flex;
justify-content:center;
flex-wrap:wrap;
padding-bottom:7.5rem;

@media (max-width: 767px){
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    height:85rem;
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
    cursor:pointer;
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
                    <Bio>Hi, I'm <Diff>Harshith Chintakindi</Diff> from Hyderabad, India.
                        I recently graduated in <Diff>Artificial Intelligence and Data Science</Diff> from <Diff>CMR Institute of Technology, Hyderabad</Diff>, 
                        and I'm passionate about applying AI to solve real-world problems.
                    </Bio>
                    <Bio2>
                        I'm currently working on personal projects to strengthen my skills in <Diff>machine learning</Diff>, <Diff>data analysis</Diff>, and <Diff>software development</Diff>, 
                        as I prepare to launch my career in the tech industry.
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
                <SkillHolder onClick={() => window.open('https://www.python.org', '_blank')}><FaPython /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://isocpp.org', '_blank')}><TbBrandCpp /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://www.java.com', '_blank')}><FaJava /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://numpy.org', '_blank')}><SiNumpy /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://www.python.org', '_blank')}><SiPandas /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://scikit-learn.org', '_blank')}><SiScikitlearn /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://opencv.org', '_blank')}><SiOpencv /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://www.tensorflow.org', '_blank')}><SiTensorflow/></SkillHolder>
                <SkillHolder onClick={() => window.open('https://html.spec.whatwg.org', '_blank')}><FaHtml5 /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://www.w3.org/Style/CSS', '_blank')}><FaCss3 /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}><IoLogoJavascript /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://react.dev', '_blank')}><FaReact /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://www.selenium.dev', '_blank')}><SiSelenium /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://git-scm.com', '_blank')}><FaGitAlt /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://github.com', '_blank')}><FaGithub /></SkillHolder>
                <SkillHolder onClick={() => window.open('https://code.visualstudio.com', '_blank')}><VscVscode /></SkillHolder>
            </SkillBox>
        </Part2>
    </AboutPage>
  );
}

export default About;