import Layout from '../components/Layout';
import SocialMediaSlice from '../components/elements/SocialMediaSlice';

import insta_icon from '../media/icons/insta_icon.png';
import spotify_icon from '../media/icons/spotify_icon.png';
import youtube_icon from '../media/icons/youtube_icon.png';

import cc_logo from '../media/logos/cc_logo2.png';
import coldcut_drums from '../media/logos/coldcut_drums.png';

import Footer from '../components/elements/Footer';
import Navbar from '../components/elements/Navbar';

import { useRef, useEffect } from 'react';

import django_logo_yellow from '../media/icons/django-logo-yellow.png';
import mysql_logo_yellow from '../media/icons/mysql-logo-yellow.png';
import react_logo_yellow from '../media/icons/react-logo-yellow.png';
import redux_logo_yellow from '../media/icons/redux-logo-yellow.png';


const HomePage = () => {


    const TabInterface = () => {

        const containerRef = useRef(null);

        useEffect(() => {
            // Make sure the component is mounted
            if (containerRef.current) {
                const tabs = containerRef.current.querySelectorAll('.tab');
                const highlightBox = containerRef.current.querySelector('.highlight-box');
                const displays = Array.from(containerRef.current.querySelectorAll('.tab-display'));

                // upon page load, move the highlight box to the active tab
                const activeTab = containerRef.current.querySelector('.tab.active');
                const activeTabRect = activeTab.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                highlightBox.style.left = `${activeTabRect.left - containerRect.left + 16}px`;

                // check every so often to make sure it's aligned (like when a window is resized)
                // but, only do so when a window is resized, or a few seconds after the page loads
                // (check 5 times after page loads, then check every 250ms)
                let checkCount = 0;
                const checkInterval = setInterval(() => {
                    const activeTab = containerRef.current.querySelector('.tab.active');
                    const activeTabRect = activeTab.getBoundingClientRect();
                    const containerRect = containerRef.current.getBoundingClientRect();
                    highlightBox.style.left = `${activeTabRect.left - containerRect.left + 16}px`;
                    highlightBox.style.width = `${activeTabRect.width}px`;
                    checkCount++;
                    if (checkCount > 15) {
                        clearInterval(checkInterval);
                        setInterval(() => {
                            const activeTab = containerRef.current.querySelector('.tab.active');
                            const activeTabRect = activeTab.getBoundingClientRect();
                            const containerRect = containerRef.current.getBoundingClientRect();
                            highlightBox.style.left = `${activeTabRect.left - containerRect.left + 16}px`;
                            highlightBox.style.width = `${activeTabRect.width}px`;
                        }, 500);
                    }
                }, 250);

                // the above could be improved by switching 





                



                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        // remove the active class from the current active tab
                        containerRef.current.querySelector('.tab.active').classList.remove('active');
                        // remove the active class from the current active tab display
                        containerRef.current.querySelector('.tab-display.active').classList.remove('active');
                        // add the active class to the clicked tab
                        tab.classList.add('active');
                        // add the active class to the corresponding tab display
                        const index = Array.from(tabs).indexOf(tab);
                        displays[index].classList.add('active');


                        if (tab.classList.contains('active')) { // make sure the tab is still active
                            // get the position of the clicked tab
                            const tabRect = tab.getBoundingClientRect();
                            const containerRect = containerRef.current.getBoundingClientRect();
                            
                            // move the highlight box to the clicked tab
                            highlightBox.style.left = `${tabRect.left - containerRect.left + 16}px`;
                            // highlightBox.style.top = `${tabRect.top - containerRect.top}px`;
                            
                            // adjust the width and height of the highlight box to match the tab
                            highlightBox.style.width = `${tabRect.width}px`;
                            // highlightBox.style.height = `${tabRect.height}px`;
                        }

                    });
                
                    // move the highlight box when the tab has finished transitioning
                    tab.addEventListener('transitionend', () => {
                    });
                });


                // Support highlight box animations for each tab.
                document.querySelectorAll('.tab').forEach(tab => {
                    tab.addEventListener('click', function() {
                      const highlightBox = document.querySelector('.tab-interface .highlight-box');
                      // after a delay of 200ms, add the animate class to the highlight box:
                        setTimeout(() => {
                            highlightBox.classList.add('animate');
                        }, 220);

                            
                  
                      // Optionally remove the class after animation ends
                      highlightBox.addEventListener('animationend', () => {
                        highlightBox.classList.remove('animate');
                      });
                    });
                  });
                
                
                
            }

        }, []);

        return (

            <div className="tab-interface-container" ref={containerRef}>
                
                <div className="tab-interface">

                    <div className="highlight-box"> </div>

                    <div className="blanket"></div>

                    <div className="tabs">

                        <div className="tab" key="tab-interface-tab-1">
                            <div className="tab-image">
                            <img src={django_logo_yellow}></img>
                            </div>


                        </div>    

                        <div className="tab active" key="tab-interface-tab-2">
                            <div className="tab-image">
                            <img src={react_logo_yellow}></img>
                            </div>


                        </div>    

                        <div className="tab" key="tab-interface-tab-3">
                            <div className="tab-image">
                            <img src={redux_logo_yellow}></img>
                            </div>

                        </div>    

                        <div className="tab" key="tab-interface-tab-4">
                            <div className="tab-image">
                            <img src={mysql_logo_yellow}></img>
                            </div>

                        </div>

                    </div>

                    

                    <div className="tab-display" key="tab-interface-tab-display-1" data-display="1">
                        <div className="description">
                            <p>We use <div className="bolded-text">DJANGO</div>, a Python Web Framework. This allows us to access a database, create APIs, and overall supplement a backend to do server-side calculations and search queries.</p>
                        </div>
                    </div>

                    <div className="tab-display active" key="tab-interface-tab-display-2" data-display="2">
                        <div className="description">
                            <p>We use <div className="bolded-text">REACT</div>, a JavaScript library, to create the user interface for our web applications.</p>
                        </div>
                    </div>

                    <div className="tab-display" key="tab-interface-tab-display-3" data-display="3">
                        <div className="description">
                            <p>We use <div className="bolded-text">REDUX</div>, a React/Node.js-based State Container for Web Apps. It makes handling front-end state changes (User Interface, Client-Side Storage, Navigation) easier by making them more debuggable.</p>
                        </div>

                    </div>

                    <div className="tab-display" key="tab-interface-tab-display-4" data-display="4">
                        <div className="description">
                            <p>We use <div className="bolded-text">MYSQL</div>, a database management system, which allows computers and servers, which are already good at handling big databases, to query and serve data to your web app from the backend.</p>
                        </div>
                    </div>
                    
                    
                </div>    

             </div>


        )


    }



    const RandomParticlesDisplay = () => {

        const containerRef = useRef(null);

        useEffect(() => {

        if(containerRef.current) {
            const container = containerRef.current;
            const numberOfParticles = 30; // Adjust as needed
    
            for (let i = 0; i < numberOfParticles; i++) {
                let particle = document.createElement('div');
                particle.className = 'particle';
    
                // Random size between 10px and 30px
                let my_width = Math.random() * 250 + 5; 
                let my_height = Math.random() * 4 + 2; 
                particle.style.width = `${my_width}px`;
                particle.style.height = `${my_height}px`;
    
                // Random position within the container
                particle.style.left = `${Math.random() * 100 - 20}%`;
                particle.style.top = `${Math.random() * 100}%`;
    
                // Random animation duration between 3s and 8s
                particle.style.animationDuration = `${Math.random() * 6 + Math.random() * 6 + Math.random() * 6}s`;

                const max_opacity = `${Math.random() * 25 + 10}%`;
    
                // Add inline style for keyframes with randomized opacity
                const keyframes = `
                @keyframes floaty-${i} {
                    0% { transform: translateY(2.5rem) translateX(10rem) rotate(15deg); opacity: ${max_opacity}; }
                    50% { transform: translateY(5rem) translateX(20rem) rotate(15deg); opacity: 0; }
                    51% { transform: translateY(0) translateX(0rem) rotate(15deg); opacity: 0; }
                    100% { transform: translateY(2.5rem) translateX(10rem) rotate(15deg); opacity: ${max_opacity}; }
                }
                `;
                const styleSheet = document.createElement("style")
                styleSheet.innerText = keyframes;
                document.head.appendChild(styleSheet);

                particle.style.animationName = `floaty-${i}`;

                container.appendChild(particle);
        }

        return () => {
            // Cleanup: remove all particles and dynamically created styles when the component unmounts
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            const createdStyles = document.querySelectorAll('style');
            createdStyles.forEach(style => {
                if (style.innerText.includes('@keyframes floaty-')) {
                    document.head.removeChild(style);
                }
            });
        };

        }

        }, []);
    
        return (
            <div className="particle-container" id="particleContainer" ref={containerRef}></div>
        );
    };





    return (
        <Layout title = 'Core Codex | Home' content='Home Page'>

            <div className="home-container-1">

                <div className="home-page-panel">

                <Navbar />



                <RandomParticlesDisplay />

                <img className="big-logo" src={cc_logo} alt=""/>
                <div className="big-title-container" alt="fancy big title that says 'Core Codex'">
                    <div className="big-title">

                    <div className="bt-decos-container">
                    <div className="bt-decos-1">•&nbsp;&nbsp;&nbsp;&nbsp;•</div>
                    <div className="bt-decos-2">••&nbsp;&nbsp;••</div>
                    <div className="bt-decos-3">••&nbsp;&nbsp;••</div>
                    <div className="bt-decos-4">••••</div>
                    <div className="bt-decos-3">••</div>
                    </div>
                    
                    <h1>CORE</h1>
                    <h1>CODEX</h1>
                    <div className="tagline" style={{margin:"auto", alignItems:"right"}}>
                        <p>ORIGINAL.</p>
                        <p style={{fontWeight:"bold"}}>POWERFUL.</p>
                        <p>WEBSITES.</p>
                    </div>








                    </div>
                </div>

                {TabInterface()}

                <Footer />

                </div>
            
            </div>
        </Layout>
    );
};

export default HomePage;