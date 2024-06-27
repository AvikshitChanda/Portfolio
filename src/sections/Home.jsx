import React from 'react';
import Navbar from '../components/Navbar';
import '../css/home.css';
import profilePic from '../Assets/Images/DEV.gif';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeTagger" id='home'></div>
      <div className="homeSection">
        <div className="startLines">
          <h4>Hi, I'M</h4>
          <br />
          <h1>AVIKSHIT</h1>
          <br />
          <h5>WEB DEVELOPER</h5>
         
          <a href="https://drive.google.com/file/d/1HTZ-05djECV0QpX6UPCJMGrkWZDIKZ7q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className='resume'>Download Resume</button>
          </a>
        </div>
        <div className="profilpic">
          <img src={profilePic} alt="picture" />
        </div>
      </div>
    </div>
  );
};

export default Home;
