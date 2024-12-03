import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

    return (
        <div className="App" style={{ backgroundColor: 'transparent' }}>
            <header className="App-header">
            <img 
                        src="https://github.com/Prathamesh72001/my_portfolio/blob/main/images/WhatsApp%20Image%202024-10-05%20at%201.03.42%20PM.jpeg" 
                        alt="Profile" 
                        style={{ 
                            width: '100px', 
                            height: '100px', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            marginRight: '20px'
                        }} 
                    />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <h1 style={{ color: "#ffffff", fontFamily: "cursive", marginLeft: 25 }}>Hello I'm</h1>
                    <h1 style={{ color: "#00C08D", fontFamily: "cursive", marginLeft: 20,  marginRight: 25 }}>Prathamesh Sawardekar</h1>
                </div>
                <TypingAnimation text="Welcome to My Portfolio, Let me showcase you My Journey in Software Development, UI/UX Design, and Innovation" speed={100} />
            </header>
        </div>
    );
}

const TypingAnimation = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = -1;
        let interval;

        const typeText = () => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    // Clear the text and restart typing animation after a short delay
                    setDisplayedText("");
                    currentIndex = -1;
                    interval = setInterval(typeText, speed);
                }, 3000); // Pause for 1 second before restarting
            }
        };

        if (isTyping) {
            interval = setInterval(typeText, speed);
        }

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [text, speed, isTyping]);

    return <h6 style={{ color: "#ffffff", fontFamily: "cursive", marginLeft: 25, marginRight: 25 }}>{displayedText}</h6>;
};

export default App;
