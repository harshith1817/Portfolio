import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaRegCopyright, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

const Section = styled.section`

width: 100%;
height: 3.5rem;
background-color: #0a0520;
display: flex;
align-items: center;
justify-content: space-evenly;
font-family: Raleway, sans-serif;
color: white;

  @media (max-width: 767px) {
    height:7rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 2rem;
  }
`;

const Credits = styled.div`
  height: 2.5rem;
  width: 19rem;
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: white;

  @media (max-width: 767px){
    margin: 0;
    padding-right:10%;
  }
`;

const CopyRights = styled.div`
  height: 2.5rem;
  width: 16rem;
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: white;

  @media (max-width: 767px){
    margin: 0;
    padding-bottom:1rem;
  }
`;



const SocialMediaDiv = styled.div`
  width: 10%;
  color: white;
  display: flex;
  align-items: center;
  gap:8.5%;

  @media (max-width: 767px){
    margin: 0;
    justify-content: center;
    padding-right:15%;
    gap:1rem;
  }
`;

const Connect = styled.a`
color:white;
cursor:pointer;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section>
      <Credits>
        <p>Developed by Harshith Chintakindi</p>
      </Credits>
      <CopyRights>
        <p>
          Copyright <FaRegCopyright /> {currentYear} HC
        </p>
      </CopyRights>
      <SocialMediaDiv>
        <Connect href="https://github.com/harshith1817" target='_blank' rel="noopener noreferrer"><FaGithub /></Connect>
        <Connect href="https://www.linkedin.com/in/chbsh/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></Connect>
        <Connect href='mailto:chintakindibhargav2016@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail /></Connect>
        <Connect href="https://www.instagram.com/harshithh.in" target="_blank" rel="noopener noreferrer"><FaInstagram /></Connect>     
        <Connect href="https://www.x.com/harshith_1704" target="_blank" rel="noopener noreferrer"><FaXTwitter /></Connect> 
      </SocialMediaDiv>
    </Section>
  );
}

export default Footer;
