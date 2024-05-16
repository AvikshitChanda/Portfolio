import ProfileImage from '../Assets/Images/Avikshit_Photo.png'
import '../css/about.css'

const About=()=>{
    return (<div className='aboutContainer' id='about'>
     <h1>About</h1>
        <div className="AboutSection">
           
            <div className="profileimage">
            <img src={ProfileImage} alt="Profile image" />
            </div>
            <div className="aboutMyself">
            <p>
            Hi there, I'm Avikshit Chanda from Nagpur, Maharashtra. I'm a fourth year undergrad student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence And Machine Learning  at Ramdeobaba University (RBU),Nagpur. I really enjoy web development it's all about being creative and paying attention to the little things. My goal is to make websites easy to use and look great. I'm always learning and improving in this field.
            </p>
            </div>
        </div>
        </div>
    )
}

export default About;