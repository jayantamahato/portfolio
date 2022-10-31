import './css/home.css';
import { useNavigate } from "react-router-dom";
import my_pic from '../assets/my_pic.png'
import cv from '../assets/jayanta_mahato.pdf'
const Home = () => {
    const navigate = useNavigate();
    const projects = () => {
        navigate('/projects')
    }
    const download = ()=>{
        window.location.href ={my_pic};
    }
    return (
        <div className="content">
            <div className="intro-content">
                <div className="top-left">
                    <h6>INTRODUCTION</h6><br></br>
                    <div className="heading">
                        <h4>WEB DEVELOPER</h4>
                    </div>
                    <p>
                        i design and develop web app for customer of all sizesspecializing in creating stylish,
                        modern websites.
                    </p>
                    <div className="signature">
                        Jayata Mahato
                    </div>
                </div>
                <div className="top-right">
                    <div className="profile-picture">
                        <img src={my_pic} />
                    </div>
                    <div className="image-box-one">
                    </div>
                    <div className="image-box-two">
                    </div>
                    <div className="caption" >
                        <div className="static-text">I'm</div>
                        <ul className="dynamic-text">
                            <li><span>Jayanta Mahato</span></li>
                            <li><span>A Freelancer</span></li>
                            <li><span>MERN Stack Developer</span></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="service-content">
                <h6>SERVICES</h6><br></br>
                <div className="heading">
                    <h4>What I do ?</h4>
                </div>
                <p>
                    i design and develop  morder,stylish web app for customer. i have three year work exprience in web development.
                    i have completed many projects..
                </p>
                <button onClick={() => { projects() }}>Projects</button>
            </div>
            <div className="about-content">
                <h6>ABOUT ME</h6><br></br>
                <div className="heading">
                    <h4>Biography</h4>
                </div>
                <div className="about-section">
                    <ul>
                        <li>Name:Jayanta Mahato</li>
                        <li>Birth Date:24th febuary 2000</li>
                        <li>Age:22 year</li>
                        <li>Address:Purulia,West Bengal,India</li>
                        <li>Phone:9064187130/8207064802</li>
                        <li>emial:support.jayanta@proton.me</li>
                    </ul>
                    <a href={cv} download='Jayanta Mahato Resume' target='_blank'><button>Download My CV</button></a>
                </div>
            </div>

        </div>
    )
}
export default Home;
