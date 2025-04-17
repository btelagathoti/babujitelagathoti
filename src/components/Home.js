import React, { useEffect, useRef } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgVideo from '../videos/homepagebgvideo.mov';


const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {

        const playVideo = async () => {
            try {
                if (videoRef.current) {
                    await videoRef.current.play();
                }
            } catch (err) {
                console.error("Error playing video:", err);
            }
        };

        playVideo();
    }, []);

    return (
        <div className="home-container">
            {/* Video Background */}
            <video 
                ref={videoRef}
                className="video-background" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
            >
                <source src={bgVideo} type="video/mp4" />
                <source src={bgVideo} type="video/quicktime" />
                <source src={bgVideo} type="video/mov" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay to ensure text readability */}
            <div className="video-overlay"></div>

            {/* Main Content */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 offset-md-2">
                            <h1 className="display-4 mb-4">Babuji Telagathoti</h1>
                            <p className="lead">Software Developer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home; 