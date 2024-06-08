import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import Developer from "./Developer.json";
import Person from "./person.json";
import Hello from "./Hello.json";
import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import './index.css';  

const SocialMediaDiv = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
    box-shadow: 0 0.15rem 0.8rem rgba(188, 136, 238, 0.9); 
  }
`;

function Home() {
  return (
    <div>
      <section className="home">
        <div className='info'>
          <div className='greet'>
            Hello There!
            <Lottie 
              className="hello" 
              animationData={Hello} 
              loop={true} 
            />
          </div>
          <div className='name'>
            <p className='pronoun'>I'M <span>Harshith Chintakindi</span></p>
          </div>
          <div className='typewriter'>
            <Typewriter 
              options={{
                strings: ["Software Developer", "MERN Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 20,
              }} 
            /> 
          </div>
        </div>
        <div className='animation'>
          <Lottie 
            className="illustration" 
            animationData={Developer} 
            loop={true} 
          />  
        </div> 
      </section>
      <section className='part2'>
        <div className='intro'>
          <h1>Let's Get <span>Acquainted</span></h1>
          <div className='paragraph'>
            <p className='Greetings'>Welcome to the dynamic world of <span>Harshith Chintakindi</span>, where creativity meets invitation!</p>
            <p>I am fluent in <span>Python</span> and know a bit of <span>Java</span> and am in the process of learning <span>DSA</span> and <span>DP</span>.</p>
            <p>Looking for <span>Software Development</span> Positions.</p>
          </div>
        </div>
        <div className='image'>
          <Tilt>
          <Lottie 
            className="illustration" 
            animationData={Person} 
            loop={true} 
          />
          </Tilt>
        </div>
      </section>
      <section className='part3'>
        <h1>FIND ME ON</h1>
        <div className="SocialMedia">
          <SocialMediaDiv href='mailto:chintakindibhargav2016@gmail.com' target='_blank' rel="noopener noreferrer">
            <GrMail className='sm github'/>
          </SocialMediaDiv>
          <SocialMediaDiv href="https://www.linkedin.com/in/chbsh" target="_blank">
            <FaLinkedin />
          </SocialMediaDiv>
          <SocialMediaDiv href="https://www.instagram.com/harshithh.in" target="_blank">
            <FaInstagram className='sm insta' />
          </SocialMediaDiv>
          <SocialMediaDiv href="https://www.x.com/harshith_1704" target="_blank">
            <FaXTwitter className='sm x'/>
          </SocialMediaDiv>
        </div>
      </section>
    </div>
  );
}

export default Home;