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
                            // highlightBox.style.width = `${tabRect.width}px`;
                            // highlightBox.style.height = `${tabRect.height}px`;
                        }

                    });
                
                    // move the highlight box when the tab has finished transitioning
                    tab.addEventListener('transitionend', () => {
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
                            <img src={django_logo_yellow}></img>


                        </div>    

                        <div className="tab active" key="tab-interface-tab-2">
                        <img src={react_logo_yellow}></img>


                        </div>    

                        <div className="tab" key="tab-interface-tab-3">
                        <img src={redux_logo_yellow}></img>


                        </div>    

                        <div className="tab" key="tab-interface-tab-4">
                        <img src={mysql_logo_yellow}></img>


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








    return (
        <Layout title = 'Core Codex | Home' content='Home Page'>

            <div className="home-container-1">

                <div className="home-page-panel">

                <Navbar />

                <img className="big-logo" src={cc_logo} alt=""/>
                <div className="big-title-container" alt="fancy big title that says 'Core Codex'">
                    <div className="big-title">
                    <div className="big-title-decos-1">•&nbsp;&nbsp;&nbsp;&nbsp;•</div>
                    <div className="big-title-decos-2">••&nbsp;&nbsp;••</div>
                    <div className="big-title-decos-3">••&nbsp;&nbsp;••</div>
                    <div className="big-title-decos-4">&nbsp;••••</div>
                    <div className="big-title-decos-3">&nbsp;&nbsp;••</div>
                    
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