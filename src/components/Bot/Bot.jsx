import { useState } from 'react';
import styled from 'styled-components';
import BotImg from './BotImg.jpg';
import Chat from './Chat.jsx';

const BotContainer = styled.div`
    position: fixed;
    bottom: 3rem;
    right: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        bottom: 2rem;
        right: 1rem;
    }
`;

const BotImage = styled.img`
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    cursor: pointer;
    &:hover {
        scale : 1.075;
        transform: rotate(360deg);
        transition: transform 0.5s ease;
    }
    @media (max-width: 767px) {
        width: 5rem;
        height: 5rem;
    }
`;

const BotText = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
    @media (max-width: 767px) {
        font-size: 0.9rem;
    }
`;


function Bot() {
    const [showChat, setShowChat] = useState(false);
    return (
        <BotContainer >
            <BotImage src={BotImg} alt="Bot" onClick={() => setShowChat(!showChat)}/>
            <BotText>Hi, I'm ResuME!</BotText>
            <BotText>How can I assist you?</BotText>
            {showChat && <Chat />}
        </BotContainer>
    );

}

export default Bot;