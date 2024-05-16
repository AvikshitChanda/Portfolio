    import React from 'react';
    import '../css/project.css';
    import Culinary from '../Assets/Images/Culinary.png';
    import weather from '../Assets/Images/Weather.png';
    import DermDetect from '../Assets/Images/DermDetect.png';
    import Focus from '../Assets/Images/Focus.png';
    import GithubIcon from '../Assets/Images/Github.png';
    import LiveIcon from '../Assets/Images/Live.png';

    const Project = () => {
        
        return (
            <div className="projectContainer" >
                <div className="heading" id='project'>
                    <h1>Projects</h1>
                </div>
                <div className="projectSlider">
                    {projects.map((d, index) => (
                        <div className='sliderContainer' key={index}>
                            <div className='imgContainer'>
                                <img src={d.image} alt="#" />
                            </div>
                            <div className='infoContainer'>
                                <p className='projectName'>{d.name}</p>
                                <p>{d.description}</p>
                            <div>
                                    <a href={d.githublink} style={{ display: 'inline-block',marginRight:'70px' }}>
                                        <img src={GithubIcon} alt="#" />
                                    </a>
                                    <a href={d.livelink} style={{ display: 'inline-block' }}>
                                        <img src={LiveIcon} alt="#" />
                                    </a>
    </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const projects = [
        {
            name: `Culinary Compass`,
            description: `Culinary Compass is a React recipe app that helps users explore cuisines, find recipes, and view detailed recipe information. Powered by Spoonacular API, it features styled-components for design and Framer Motion for animations.`,
            image: Culinary,
            githublink: `https://github.com/AvikshitChanda/CulinaryCompass`,
            livelink: `https://culinarycompass-two.vercel.app/`
        },
        {
            name: `Derm Detect`,
            description: `DermDetect is a Streamlit app that predicts skin diseases from uploaded images using machine learning models. It provides disease classification (common nevus, atypical nevus, or melanoma), severity level, and recommendations for further action.`,
            image: DermDetect,
            githublink: `https://github.com/AvikshitChanda/DermDetect2`,
            livelink: `https://dermdetect16.onrender.com/`
        },
        {
            name: `WeatherX`,
            description: `WeatherX is a React weather app that fetches and displays current weather data from the OpenWeatherMap API based on user-entered city names.`,
            image: weather,
            githublink: `https://github.com/AvikshitChanda/WeatherApp`,
            livelink: `https://weatherx16.vercel.app/`
        },
        {
            name: `Focus Flow`,
            description: `Focus Flow is a React timer app for productivity. It features customizable intervals, animated visuals, and a victory animation with sound upon completion.`,
            image: Focus,
            githublink: `https://github.com/AvikshitChanda/FocusFlow`,
            livelink: `https://focus-flow-theta.vercel.app/`
        },
    ]

    export default Project;
