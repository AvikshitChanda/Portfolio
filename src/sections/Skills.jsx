import React from 'react';
import '../css/skills.css'
import Html from '../Assets/Images/Html.png';
import Css from '../Assets/Images/Css.png';
import Javascript from '../Assets/Images/Js.png';
import Bootstrap from '../Assets/Images/Bootstrap.png';
import Tailwind from '../Assets/Images/Tailwind css.png';
import ReactImg from '../Assets/Images/React.png';
import Java from '../Assets/Images/Java.png';
import Node from '../Assets/Images/Node js.png';
import Express from '../Assets/Images/Express.png';
import Mongo from '../Assets/Images/MongoDb.png'


const Skills=()=>{
    return (
        <div className="SkillsContainer" >
            <div className="heading" id='skills'>
                <h1>Professional Skillset</h1>
            </div>
            <div className="skills">
                {skills.map((d)=>(
                    <div className="parentContainer">
                         <div className="icon">
                                <img src={d.image} alt="#" />
                         </div>
                         <div className="skillName">
                            <h3>{d.name}</h3>
                         </div>
                    </div>
                   
                )

                )}
            </div>
        </div>
    )
}

export default Skills;


const skills=[
    {
        image:Html,
        name:`Html`,
    },
    {
        image:Css,
        name:`Css`,
    },
    {
        image:Javascript,
        name:`Javascript`,
    },
    {
        image:Bootstrap,
        name:`Bootstrap`,
    },
    {
        image:Tailwind,
        name:`Tailwind Css`,
    },
    {
        image:ReactImg,
        name:`React Js`,
    },
    {
        image:Java,
        name:`Java`,
    },
  
    {
        image:Node,
        name:`Node Js`,
    },
    {
        image:Express,
        name:`Express Js`,
    },
    {
        image:Mongo,
        name:`Mongo DB`,
    }

]