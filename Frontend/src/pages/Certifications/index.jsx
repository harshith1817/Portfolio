import styled from "styled-components";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbHandClick } from "react-icons/tb";
import { GiClick } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { FaAward } from "react-icons/fa";


const Section = styled.section`
  width: 100%;
  height: 100rem;
  @media (max-width: 1310px){
    height:133rem;
  }
  @media (max-width: 900px){
    height:209rem;
  }
  @media (max-width: 767px){
    height:184rem;
  }
`;

const Professional = styled.h1`
  color: white;
  padding-top: 3rem;
  text-align: center;
  font-size: 1.8rem;

  @media (max-width: 767px){
  padding-top: 7rem;
  }
`;

const CertificationsHead = styled.span`
color: #2ab3a1;
  `;

const CertificationsAchievements = styled.h1`
  color: white;
  padding-top: 10rem;
  text-align: center;
  font-size: 2.5rem;
    @media (max-width: 767px){
    padding-top: 7rem;
    }
    `;


const CertificationsContainer = styled.div`
  width: 100%;
  height: 55rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const CertificateContainer = styled.div`
  width: 25rem;
  height: 24rem;
  box-shadow: 0.15rem 0.15rem 0.5rem rgba(138, 76, 168, 0.5);
  border-radius: 1rem;
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
`;

const CertificationTitle = styled.h3`
  color: white;
  padding-top: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const CertificationOrganization = styled.h4`
  color: #2ab3a1;
  padding-top: 7%;
  font-size: 1.2rem;
  text-align: center;
`;

const CertificationDescription = styled.p`
  color: white;
  padding-top: 1rem;
`;

const Skills=styled.span`
color: #2ab3a1;
margin-right: 0.75rem;
background-color: #A8E2DA;
border-radius: 1rem;
padding: 0.25rem 0.75rem;
  `;

const Viewbtn=styled.a`
    width:100%;
height:80%;
font-size:1rem;
border-radius:0.4rem;
background-color:#8a4ca8;
color:white;
border:none;
margin-right:1rem;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
transition: all 0.3s ease;

    &:hover{
    opacity:0.8;
}
    `;

const Titlediv=styled.div`
width: 90%;
height: 25%;
    `;

const Organizationdiv=styled.div`
width: 90%;
height: 20%;
    `;

const Descriptiondiv=styled.div`
width: 90%;
height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

const Skillsdiv=styled.div`
width: 90%;
height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top:5%;
    `;

const ButtonsContainer = styled.div`
width: 90%;
height: 20%;
padding:1.5rem;
`;
  

const AchievementContainer = styled.div`
  width: 29rem;
  height: 14rem;
  box-shadow: 0.15rem 0.15rem 0.5rem rgba(138, 76, 168, 0.5);
  border-radius: 1rem;
  margin: 1.75rem;
  border: 0.005rem solid #8a4ca8;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  &:hover {
    scale : 1.075;
    transition: .5s;
    box-shadow: 0.15rem 0.15rem 0.8rem rgba(138, 76, 168, 0.7);
    h3 {
      color: #2ab3a1;
}
`;

const AcheivementsHeading = styled.h1`
  color: white;
  padding-top: 3rem;
  text-align: center;
  font-size: 1.8rem;
  `;

  const AchievementsContainerBox = styled.div`
  width: 100%;
    height: 20rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    `;

const Badgediv=styled.div`
width: 90%;
height: 20%;
padding-top: 0.75rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

const AcheivementTitle=styled.div`
  color: white;
  height: 20%;
  width: 90%;
  padding-top: 1rem;
  display: flex;
    justify-content: flex-start;
`;

const AcheivementDescription=styled.div`
width: 90%;
height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    `;

const BadgeSpan=styled.span`
color: #2ab3a1;
margin-left: 0.75rem;
border: 0.1rem solid #2ab3a1;
border-radius: 1rem;
padding: 0.25rem 0.75rem;
  `;

function Certifications(){
    return(
        <Section>
            <CertificationsAchievements>Certifications & <CertificationsHead>Achievements</CertificationsHead></CertificationsAchievements>
            <Professional>
                Professional Certifications
            </Professional>
            <CertificationsContainer>
                <CertificateContainer>
                    <Titlediv>
                    <CertificationTitle>
                        <LiaCertificateSolid />Natural Language Processing Specialization</CertificationTitle>
                    </Titlediv>
                    <Organizationdiv>
                        <CertificationOrganization>DeepLearning.AI</CertificationOrganization>
                    </Organizationdiv>
                    <Descriptiondiv>
                        <CertificationDescription>Mastered modern NLP techniques, transformer models, and language understanding.
                            Built practical solutions for text classification, sequence modeling, and language generation.</CertificationDescription>
                    </Descriptiondiv>
                    <Skillsdiv>
                        <Skills>NLP</Skills>
                        <Skills>Transformers</Skills>
                    </Skillsdiv>
                    <ButtonsContainer>
                        <Viewbtn  href="https://learn.deeplearning.ai/certificates/2f5dba87-7328-4420-8dc9-47ff43ae4567" target="_blank">Show Credential &nbsp;<GiClick /></Viewbtn>
                    </ButtonsContainer>
                </CertificateContainer>

                <CertificateContainer>
                    <Titlediv>
                    <CertificationTitle>
                        <LiaCertificateSolid />Deep Learning Specialization</CertificationTitle>
                    </Titlediv>
                    <Organizationdiv>
                        <CertificationOrganization>DeepLearning.AI</CertificationOrganization>
                    </Organizationdiv>
                    <Descriptiondiv>
                    <CertificationDescription>Built deep learning models using neural networks and TensorFlow for AI applications.
                        Explored CNNs, sequence models, optimization techniques, and model training strategies.</CertificationDescription>
                    </Descriptiondiv>
                    <Skillsdiv>
                        <Skills>Deep Learning</Skills>
                        <Skills>TensorFlow</Skills>
                    </Skillsdiv>
                    <ButtonsContainer>
                        <Viewbtn  href="https://learn.deeplearning.ai/certificates/07140e95-6a18-4085-b19f-df65a0d3f649" target="_blank">Show Credential &nbsp;<GiClick /></Viewbtn>
                    </ButtonsContainer>
                </CertificateContainer>

                <CertificateContainer>
                    <Titlediv>
                    <CertificationTitle><LiaCertificateSolid />Machine Learning Specialization</CertificationTitle>
                    </Titlediv>
                    <Organizationdiv>
                    <CertificationOrganization>DeepLearning.AI</CertificationOrganization>
                    </Organizationdiv>
                    <Descriptiondiv>
                    <CertificationDescription>Developed machine learning solutions using supervised and unsupervised learning techniques.
                        Applied model evaluation, feature engineering, and predictive analytics to real-world datasets.</CertificationDescription>
                    </Descriptiondiv>
                    <Skillsdiv>
                        <Skills>Machine Learning</Skills>
                        <Skills>Scikit-Learn</Skills>
                    </Skillsdiv>
                    <ButtonsContainer>
                        <Viewbtn  href="https://www.coursera.org/account/accomplishments/specialization/O0TVOBGJLAY1" target="_blank">Show Credential &nbsp;<GiClick /></Viewbtn>
                    </ButtonsContainer>
                </CertificateContainer>

                    <CertificateContainer>
                    <Titlediv>
                    <CertificationTitle><LiaCertificateSolid />Object Oriented Programming in Java</CertificationTitle>
                    </Titlediv>
                    <Organizationdiv>
                    <CertificationOrganization>University of California, San Diego</CertificationOrganization>
                    </Organizationdiv>
                    <Descriptiondiv>
                    <CertificationDescription>Strengthened software development fundamentals through object-oriented programming in Java.
                        Applied core OOP principles to build modular, reusable, and maintainable applications.</CertificationDescription>
                    </Descriptiondiv>
                    <Skillsdiv>
                        <Skills>Object-Oriented Programming</Skills>
                        <Skills>Java</Skills>
                    </Skillsdiv>
                    <ButtonsContainer>
                        <Viewbtn  href="https://www.coursera.org/account/accomplishments/verify/29HKQ55LHM33" target="_blank">Show Credential &nbsp;<GiClick /></Viewbtn>
                    </ButtonsContainer>
                </CertificateContainer>

                    <CertificateContainer>
                    <Titlediv>
                    <CertificationTitle><LiaCertificateSolid />Smart Coder</CertificationTitle>
                    </Titlediv>
                    <Organizationdiv>
                    <CertificationOrganization>Smart Interviews</CertificationOrganization>
                    </Organizationdiv>
                    <Descriptiondiv>
                    <CertificationDescription>Enhanced coding proficiency through intensive algorithmic problem solving and interview preparation.
                        Strengthened analytical thinking with consistent practice in data structures and algorithms.</CertificationDescription>
                    </Descriptiondiv>
                    <Skillsdiv>
                        <Skills>Problem Solving</Skills>
                        <Skills>Data Structures</Skills>
                    </Skillsdiv>
                    <ButtonsContainer>
                        <Viewbtn  href="https://smartinterviews.in/certificate/e7eaba6d" target="_blank">Show Credential &nbsp;<GiClick /></Viewbtn>
                    </ButtonsContainer>
                </CertificateContainer>
            </CertificationsContainer>
            <AcheivementsHeading>
                Technical Achievements
            </AcheivementsHeading>
            <AchievementsContainerBox>
                    <AchievementContainer   onClick={() =>
                        window.open(
                        "https://pyramid-it-learn.github.io/pyramid-leaderboards/##/leaderboard/CMRIT/CMRIT-2025-LEADERBOARD",
                        "_blank"
                        )
                    }>
                        <Badgediv>
                            <h1 style={{ color: "#2ab3a1" }}><FaAward /></h1> &nbsp;<p style={{ fontSize: "0.75rem" }}><BadgeSpan>Coding Excellence</BadgeSpan></p>
                        </Badgediv>
                        <AcheivementTitle>
                            <h3 style={{ fontSize: "1.2rem"}}>Top Coder - College Coding Tracker </h3>   
                        </AcheivementTitle>
                        <AcheivementDescription>
                            Ranked among the top 7% of coders in the college coding leaderboard through consistent problem-solving and competitive programming performance.
                        </AcheivementDescription>
                    </AchievementContainer>

                    <AchievementContainer  onClick={() =>
                        window.open(
                        "https://www.codechef.com/users/cmr_21r01a7219",
                        "_blank"
                        )
                    }>
                        <Badgediv>
                            <h1 style={{ color: "#2ab3a1" }}><FaStar /></h1> &nbsp; <p style={{ fontSize: "0.75rem" }}><BadgeSpan>Competitive Programming</BadgeSpan></p>
                        </Badgediv>
                        <AcheivementTitle>   
                            <h3 style={{ fontSize: "1.2rem" }}>CodeChef 2-Star Competitive Programmer</h3>   
                        </AcheivementTitle>
                        <AcheivementDescription>
                            Solved 1800+ coding problems and participated in 50+ coding contests, maintaining a consistent daily problem-solving practice to continuously improve algorithmic thinking and coding proficiency.
                        </AcheivementDescription>
                    </AchievementContainer>
            </AchievementsContainerBox>
        </Section>
    );
}

export default Certifications;