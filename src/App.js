import React, { useState, useEffect } from 'react';
import './App.css';
const cheerio = require('cheerio');


function App() {
    const [activeTab, setActiveTab] = useState("tab1");
    const openLink = (url) => {
        window.open(url, "_blank"); // Opens in a new tab
    };
    return (
        <div className="App" style={{ backgroundColor: 'transparent' }}>
            <header className="App-header">
                <div className="tool-bar">
                    <div
                        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab1")}
                    >
                        Home
                    </div>
                    <div
                        className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab2")}
                    >
                        About
                    </div>
                    <div
                        className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab3")}
                    >
                        Experience
                    </div>
                    <div
                        className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab4")}
                    >
                        Contact
                    </div>
                    <div
                        className={`tab ${activeTab === "tab5" ? "active" : ""}`}
                        onClick={() => setActiveTab("tab5")}
                    >
                        Resume
                    </div>
                </div>
                <div className="social-bar">
                    <img
                        src='https://th.bing.com/th/id/OIP.k6lUqaSsHH2O9icUX0f_DQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://www.facebook.com/people/Prathamesh-Sawardekar/pfbid0kicduEVeoCEzLbD9ebQptiZRLuFbF1NTf7wmYbLttRQ5WTjoqbeQ3au5YMpSoF8l/?mibextid=ZbWKwL")}
                    />
                    <img
                        src='https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png'
                        className="image-button"
                        onClick={() => openLink("https://github.com/Prathamesh72001")}
                    />
                    <img
                        src='https://th.bing.com/th/id/OIP.g8P-sH4xNG_jxN9yUTLoTwHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://www.linkedin.com/in/prathamesh-sawardekar-3671b9238")}
                    />
                    <img
                        src='https://th.bing.com/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
                        className="image-button"
                        onClick={() => openLink("https://www.instagram.com/prathamesh_pratik_07/?igshid=OGQ5ZDc2ODk2ZA%3D%3D")}
                    />
                    <img
                        src='https://th.bing.com/th/id/OIP.tvKJc7Lvs-0Mo2cYPMugvAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://telegram.me/prathamesh070401")}
                    />
                    <img
                        src='https://th.bing.com/th/id/OIP.63DXNT7dro-XDctQsQE7VwHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                        className="image-button"
                        onClick={() => openLink("https://wa.link/aiezfi")}
                    />
                </div>
                <img
                    className='circular-image'
                    src='https://th.bing.com/th/id/OIP.zc3XRPZxUt4Xt7zDZYLa_wHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7'
                ></img>
                <br />
                <span style={{ color: "#ffffff", fontFamily: "Arial", marginLeft: 25, marginRight: 25, fontSize: 20 }}>Hello I'm</span>
                <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: 35, marginLeft: 25, marginRight: 25 }}>Prathamesh Sawardekar</span>

                <TypingAnimation text="  Welcome to My Portfolioo  " speed={100} />
            </header>
        </div>
    );
}

const TypingAnimation = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let interval;

        const typeText = () => {
            if (currentIndex < text.trim().length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    // Clear the text and restart typing animation after a short delay
                    setDisplayedText("");
                    currentIndex = 0;
                    interval = setInterval(typeText, speed);
                }, 3000); // Pause for 1 second before restarting
            }
        };

        if (isTyping) {
            interval = setInterval(typeText, speed);
        }

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [text, speed, isTyping]);

    return <span style={{ color: "#ffffff", fontFamily: "RM Typerighter old", marginLeft: 25, marginRight: 25, marginTop: 25, fontSize: 15, fontFamily: "" }}>{displayedText}</span>;
};

export default App;
