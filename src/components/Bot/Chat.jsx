import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import BotImg from './BotImg.jpg';
import { IoMdCloseCircleOutline, IoIosSend } from "react-icons/io";

const ChatBox = styled.div`
    position: fixed;
    bottom: 1.2rem;
    right: 1.2rem;
    width: 27rem;
    height: 37rem;
    background-color: #eef3f8;
    border-radius: 1rem;
    flex-direction: column;
    z-index: 1000;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 767px) {
        width: 90%;
        height: 80%;
        bottom: 0.5rem;
        right: 0.5rem;
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
    height: 77%;
    width: 92.5%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        width: 91%;
    }
`;

const FooterInputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    background-color: #ebebeb;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    @media (max-width: 767px) {
        width: 80%;
    }
`;

const FooterTextInput = styled.input`
    flex-grow: 1;
    height: 3.25rem;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1rem;
    padding: 0 0.5rem;
    @media (max-width: 767px) {
        font-size: 0.8rem;
        height: 3rem;
    }
`;

const SendButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #530095;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 767px) {
        padding: 0.3rem;
    }
`;

const ChatFooter = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 1rem 1rem;
`;

const ChatMessages = styled.div`
    flex-grow: 1;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    overflow-x: hidden;
`;

const SentMessage = styled.div`
    align-self: flex-end;
    background-color: #530095;
    color: white;
    padding: 0.6rem;
    border-radius: 1rem 1rem 0 1rem;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 0.9rem;
    text-align: left;
`;

const ReceivedMessage = styled.div`
    align-self: flex-start;
    background-color: #e2e3e5;
    color: #000;
    padding: 0.6rem;
    border-radius: 1rem 1rem 1rem 0;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 0.9rem;
    text-align: left;
`;

const StartMessage = styled.div`
    align-self: flex-start;
    border: 1px solid #530095;
    color: #000;
    padding: 0.4rem;
    border-radius: 0.25rem;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 0.9rem;
    cursor: pointer;
    text-align: left;
    &:hover {
        background-color: #530095;
        color: white;
    }
`;

const WelcomeMessage = styled.div`
    align-self: flex-start;
    background-color: #e2e3e5;
    color: #000;
    margin-bottom: 0.5rem;
    padding: 0.6rem;
    border-radius: 1rem 1rem 1rem 0;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 0.9rem;
    text-align: left;
`;

const bounce = keyframes`
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
`;

const Loader = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 0.4rem;
  padding: 0.6rem;
  background-color: #e2e3e5;
  border-radius: 1rem 1rem 1rem 0;
  max-width: 70%;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out both;
  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }
  &:nth-child(3) { animation-delay: 0; }
`;

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (text) => {
        if (!text.trim()) return;

        setMessages((prev) => [...prev, { type: 'sent', text }]);
        setInput('');

        const loaderId = Date.now(); 
        setMessages((prev) => [...prev, { type: 'loader', id: loaderId }]);

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: text })
            });

            const data = await response.json();

            setTimeout(() => {
                setMessages((prev) => {
                    const withoutLoader = prev.filter(msg => msg.type !== 'loader' || msg.id !== loaderId);
                    return [...withoutLoader, { type: 'received', text: data.response }];
                });
            }, 1000);
        } catch (error) {
            setMessages((prev) => {
                const withoutLoader = prev.filter(msg => msg.type !== 'loader' || msg.id !== loaderId);
                return [...withoutLoader, { type: 'received', text: 'Error: Could not reach server.' }];
            });
            console.error("Error:", error);
        }
    };

    return (
        <ChatBox className='chat-box'>
            <ChatHeader>
                <BotImage src={BotImg} alt="Bot" />
                <ChatContent>ResuME</ChatContent>
                <CloseButton onClick={() => document.querySelector('.chat-box').style.display = 'none'}>
                    <IoMdCloseCircleOutline size={24} color="white" />
                </CloseButton>
            </ChatHeader>

            <Message>
                <ChatMessages>
                    <WelcomeMessage>👋 Hey! I’m ResuME, Harshith’s AI-powered assistant. How can I assist you today?</WelcomeMessage>

                    <StartMessage onClick={() => sendMessage("Who is Harshith?")}>Who is Harshith?</StartMessage>
                    <StartMessage onClick={() => sendMessage("What did he study?")}>What did he study?</StartMessage>
                    <StartMessage onClick={() => sendMessage("What are his skills?")}>What are his skills?</StartMessage>
                    <StartMessage onClick={() => sendMessage("Can I see his resume?")}>Can I see his resume?</StartMessage>
                    <StartMessage onClick={() => sendMessage("What are his hobbies?")}>What are his hobbies?</StartMessage>

                    {messages.map((msg, idx) => {
                        if (msg.type === 'sent') return <SentMessage key={idx}>{msg.text}</SentMessage>;
                        if (msg.type === 'received') return <ReceivedMessage key={idx}>{msg.text}</ReceivedMessage>;
                        if (msg.type === 'loader') return (
                            <Loader key={idx}>
                                <Dot /><Dot /><Dot />
                            </Loader>
                        );
                        return null;
                    })}
                    <div ref={chatEndRef} />
                </ChatMessages>
            </Message>

            <ChatFooter>
                <FooterInputWrapper>
                    <FooterTextInput
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message here..."
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                    />
                    <SendButton onClick={() => sendMessage(input)}>
                        <IoIosSend size={30} />
                    </SendButton>
                </FooterInputWrapper>
            </ChatFooter>
        </ChatBox>
    );
}

export default Chat;
