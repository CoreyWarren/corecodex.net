import Layout from '../components/Layout';
import SocialMediaSlice from '../components/elements/SocialMediaSlice';

import insta_icon from '../media/icons/insta_icon.png';
import spotify_icon from '../media/icons/spotify_icon.png';
import youtube_icon from '../media/icons/youtube_icon.png';

import cc_logo from '../media/logos/cc_logo2.png';
import coldcut_drums from '../media/logos/coldcut_drums.png';

import Footer from '../components/elements/Footer';
import Navbar from '../components/elements/Navbar';

const HomePage = () => {

    // Display upcoming show if true:
    const show = false;



    

    const renderSocialMediaSlice = () => {
        return (
            <SocialMediaSlice
            items={[
                { title: 'Our Insta', icon: insta_icon, link: 'https://www.instagram.com/coldcut_/'},
                { title: 'Our Spotify', icon: spotify_icon, link: 'https://open.spotify.com/artist/5kSVXoBjzVbHGJg3KND4XW'},
                { title: 'Our YouTube', icon: youtube_icon, link:'https://www.youtube.com/channel/UCZKNsuPrK5koGQUWB-cpoxg'},
            ]}
            />
        )
    }
        

    // Photo Gallery


      


    const renderCurrentClient = () => {
        return (
            <div className="small-image-1">
            <a href="https://coldcmerch.com">
                <img src={coldcut_drums} alt="image of drumset"/>
                <p>https://coldcmerch.com</p>
            </a>
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

                <Footer />

                </div>
            
            </div>
        </Layout>
    );
};

export default HomePage;