import React from 'react';
import '../../components/css/Footer.css';

const Footer = () => (
    <>

    <footer className='footer'>
        <div className='footer-container'>

            <button 
                onClick={() => window.scrollTo(0, 0)}
                className='back-to-top'
            >
                /\ Back to Top /\
            </button>


            <div className='footer-content'>





                <div className='footer-section contact'>
                    <h4>Contact Me</h4>
                    <p>corey@corecodex.net</p>
                </div>
            </div>

            <div className='footer-bottom'>
                <span className="footer-span">Core Codex © 2023</span>
                <span className="footer-span">Owned and Operated in Fontana, CA</span>
            </div>


        </div>
    </footer>

    </>
)

export default Footer;