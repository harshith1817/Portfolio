import React from 'react';
import styled from 'styled-components';
import BotImg from './BotImg.jpg';
import { IoMdCloseCircleOutline } from "react-icons/io";


const ChatBox = styled.div`
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    // width: 26rem;
    // height: 36rem;
    width: 20rem;
    height: 25rem;
    background-color: 	#eef3f8;
    border-radius: 1rem;
    flex-direction: column;
    z-index: 1000;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
        width: 60%;
        height: 50%;
        bottom: 1rem;
        right: 1rem;
    }
`;

const ChatHeader = styled.div`
    width: 100%;
    background-color: #530095;
    color: white;
    text-align: left;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ChatContent = styled.p`
    padding: 1rem;
    flex-grow: 1;
    overflow-y: auto;
    font-size: 1.2rem;
    font-weight: bold;
`;

const BotImage = styled.img`
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Message = styled.div`
height: 80%;
width: 80%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Warning = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #e67e22;
    padding: 0.25rem;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;


function Chat() {

    return (
        <ChatBox className='chat-box'>
            <ChatHeader>
                <BotImage src={BotImg} alt="Bot" />
                <ChatContent>
                    ResuME
                </ChatContent>
                <CloseButton onClick={() => document.querySelector('.chat-box').style.display = 'none'}>
                    <IoMdCloseCircleOutline size={24} color="white" />
                </CloseButton>
            </ChatHeader>
            {/* 👋 Hey, I’m Harshith’s Assistant! */}
            <Message>
                <Warning> Hey there! </Warning>
                <Warning>I’m ResuME — Harshith’s personal resume assistant!</Warning>
                <Warning>Right now, I’m still booting up my brain. </Warning>
                <Warning>Soon, I’ll be ready to answer all your curious questions about him.</Warning>
            </Message>
        </ChatBox>
    );

}

export default Chat;