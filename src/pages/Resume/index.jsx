import './index.css';
import styled from 'styled-components';
import { IoMdDownload } from "react-icons/io";
import pdfFile from './Resume.pdf';
import Image from './Resume.jpg'

const ResumePage = styled.section`
  width: 100%;  

  @media (max-width: 767px){
    padding-top:20%;
  }
`;

const ResumeDiv = styled.div`
  height: 52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rem;
  
  @media (max-width: 767px){
    height:35rem;
  }
`;

const ResumeImg = styled.div`
  width: 45%;
  height: 90%;
  background-size: cover;
  background-position: center;
  background-color:white;
  
  @media (max-width: 767px){
    width: 90%;
    height:95%;

  }
`;

const DownloadContainer = styled.div`
  height: 4rem;
  display: flex;
  align-items: start;
  justify-content: center;
`;

const Download = styled.a`
  background-color: #8a4ca8;
  height: 2.5rem;
  width: 13rem;
  border-radius: 0.35rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

function Resume() {

  return (
    <ResumePage>
      <ResumeDiv>
          <ResumeImg>
          <img src={Image} className="ResumeImage"/>
          </ResumeImg>
      </ResumeDiv>
      <DownloadContainer>
        <Download href={pdfFile} download>
          <IoMdDownload /> Download Resume
        </Download>
      </DownloadContainer>
    </ResumePage>
  );
}

export default Resume;