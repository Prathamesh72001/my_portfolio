import React, { useState, useEffect } from 'react';
import './App.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const cheerio = require('cheerio');
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


function App() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const openLink = (url) => {
        window.open(url, "_blank"); // Opens in a new tab
    };

    const cards = [
        { id: 1, title: 'iTAP Entertainment & Gaming', link: "https://play.google.com/store/apps/details?id=com.app.itap&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/WGGw9sdmGBhWqfhDO54FiSmA__6jR8Cft-M9jutBzzprcMYakmWNANT2HMelsc459A=w480-h960-rw" },
        { id: 2, title: 'Canvia: Art Gallery at home', link: "https://play.google.com/store/apps/details?id=com.palacio.canvia&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/Ztrvf9znaktVCS6J36tPPJI73RC-Sc-FCBQFZ3Hw6u7-DE_rPv-DOi47NP3a4Jqm7Q=w480-h960-rw" },
        { id: 3, title: 'Insta Parenting App: Play-Way', link: "https://play.google.com/store/apps/details?id=com.parenting.instaparenting&pcampaignid=web_share", image: "https://play-lh.googleusercontent.com/KyP59LujVr_v9ZwKQVkfwkb4rCaamItgxxPdsIvApYOXvupWQYYjEFEBwQMDK5JlkADJ=w480-h960-rw" }
    ];

    return (
        <div className="App" style={{ backgroundColor: 'transparent' }}>
            <header className="App-header">
                {screenWidth < 700 && <div style={{
                    top: "5px",
                    right: "25px",
                    display: "flex",
                    position: "absolute"
                }}>
                    {/* Button to Open Drawer */}
                    <IconButton style={{ color: "#00C08D" }} onClick={toggleDrawer(true)} edge="start">
                        <MenuIcon />
                    </IconButton>

                    {/* Drawer */}
                    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                        <List>
                            <ListItem button onClick={() =>
                                setActiveTab("tab1")} className={`menu-item ${activeTab === "tab1" ? "active" : ""}`}>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button onClick={() =>
                                setActiveTab("tab2")} className={`menu-item ${activeTab === "tab2" ? "active" : ""}`}>
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem button onClick={() =>
                                setActiveTab("tab3")} className={`menu-item ${activeTab === "tab3" ? "active" : ""}`}>
                                <ListItemText primary="Experience" />
                            </ListItem>
                            <ListItem button onClick={() =>
                                setActiveTab("tab4")} className={`menu-item ${activeTab === "tab4" ? "active" : ""}`}>
                                <ListItemText primary="Resume" />
                            </ListItem>
                        </List>
                    </Drawer>
                </div>}
                {screenWidth >= 700 && <div className="tool-bar">
                    <div
                        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                        onClick={() =>
                            setActiveTab("tab1")}
                    >
                        Home
                    </div>
                    <div
                        className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                        onClick={() =>
                            setActiveTab("tab2")}
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
                        Resume
                    </div>
                </div>}
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
                {(activeTab == "tab1" || activeTab == "tab2" || activeTab == "tab3") ? (<img
                    className='circular-image'
                    src='https://cdn5.telesco.pe/file/XDIU5165MDif4cfH6It3kdkDdWl7KRTrTWC0paUvmgoXWlhFXAYikqURYkUhKg_ShXzHMrb-Rds2PLE3ns2J62Uc9XpLcWvM0OCtXrsw3wMfvP4p1dQ1I5l9MPF2IC09DuABA8QTawrr61NCI9snWIx2mSXhxpCqljcJtrtwINymbAoIO10-LEqNQOr3ny-Fap1Ovvr1M_WRNCTQNaUCjDPkc3f2tU9UTW55JPwW6rf-05t8Cs7eDWm0my6tMia-3EG9U4FXDnDSSUmD0SxSf2-kC_pVod5CrvDtQNu0JjBoY9J_KQUfkTuO3ENKgsb9d3d-cltn6Iyjjft0674cDg.jpg'
                ></img>) : null}
                {activeTab == "tab3" && <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "35px", marginLeft: "25px", marginRight: "25px" }}>Experience</span>}
                {activeTab == "tab4" && <span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "35px", marginLeft: "25px", marginRight: "25px" }}>Resume</span>}
                {(activeTab == "tab1" || activeTab == "tab2") ? (<span style={{ color: "#ffffff", fontFamily: "Arial", marginLeft: "25px", marginRight: "25px", fontSize: "20px" }}>Hello I'm</span>) : null}
                {(activeTab == "tab1" || activeTab == "tab2") ? (<span style={{ color: "#00C08D", fontFamily: "Arial", fontSize: "35px", marginLeft: "25px", marginRight: "25px" }}>Prathamesh Sawardekar</span>) : null}

                {activeTab == "tab1" && <TypingAnimation text="  Welcome to My Portfolioo  " speed={100} isInLoop={true} />}
                {activeTab == "tab2" && <TypingAnimation text="  I am an Android/Flutter developer with over 2.5 years of professional experience, specializing in building efficient and user-centric applications. My expertise includes developing cross-platform apps using Flutter, ensuring seamless performance and high-quality UI/UX. Alongside mobile development, I have experience with backend technologies like Node.js, frontend frameworks like React, and cloud platforms such as AWS. I am proficient in tools like Firebase for real-time database and authentication, and FlutterFlow for rapid prototyping. My technical skill set allows me to deliver scalable solutions and contribute effectively to end-to-end app development processes.  "
                    speed={10} isInLoop={false} />}
                {activeTab == "tab3" && <div className="scrollable-container">
                    <div className="grid-container">
                        {cards.map((card) => (
                            <div key={card.id} className="grid-card" onClick={() => openLink(card.link)}
                            >
                                <img src={card.image} alt={card.title} className="card-image" />
                                <div className="card-text">{card.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                }
                {activeTab == "tab4" && <div>
                    <iframe src="https://drive.google.com/file/d/1-pTkwNKlS99HdnaqweUa4cSsnv0V_o4_/preview" style={{ height: "75vh", width: "100%" }}></iframe>
                </div>}
            </header>
        </div>
    );
}

const TypingAnimation = ({ text, speed, isInLoop }) => {
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
                if (isInLoop) {
                    clearInterval(interval);
                    setTimeout(() => {
                        // Clear the text and restart typing animation after a short delay
                        setDisplayedText("");
                        currentIndex = 0;
                        interval = setInterval(typeText, speed);
                    }, 3000); // Pause for 1 second before restarting
                }
            }
        };

        if (isTyping) {
            interval = setInterval(typeText, speed);
        }

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [text, speed, isTyping]);

    return <div className='padded-span'><span>{displayedText}</span></div>;
};

export default App;
