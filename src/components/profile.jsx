import mypic from '../assets/mypic.jpg';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin_logo from '../assets/linkedin.png';
import github from '../assets/github.png';
import './css/profile.css'

const Profile = () => {
    const git = () => {
        window.open('https://github.com/jayantamahato/');
    }
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/jayanta-mahato-983225239/');
    }
    const ig = () => {
        window.open('https://www.instagram.com/jayanta2k20/');
    }
    const fb = () => {
        window.open('https://www.facebook.com/jayantamahat0');
    }
    const mail = () => {
        window.open('mailto:jayantamahato830@gmail.com?body=hiring massage!')
    }
    return (
        <div className="profile-content">
            <h4 className="heading">Profile</h4>
            <div className="profile">
                <div className="left">
                    <img src={mypic} alt="my profile DP" />
                    <button onClick={mail}>Hire Me!</button>
                </div>
                <div className="right">
                    <div className="name">
                        <h3>JAYANTA MAHATO</h3>
                    </div>
                    <hr />
                    <div className="address">
                        <h4 className="address-heading">Address</h4>
                        <ul>
                            <li>Vill : Baghmara</li>
                            <li>Po : Rampur</li>
                            <li>P.s : Neturia</li>
                            <li>Dist : Purulia</li>
                            <li>State : West Bengal</li>
                            <li>Pin : 723121</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="skills">
                    <h4 className="address-heading">SKILLS</h4>
                    <div className="skill">
                            <div className="skill-name">C</div>
                            <div className="skill-bar">
                                <div className="skill-per c-bar" per="70%" max-width="90%"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">JAVA</div>
                            <div className="skill-bar">
                                <div className="skill-per java-bar" per="50%" max-width="90%"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">HTML</div>
                            <div className="skill-bar">
                                <div className="skill-per html-bar" per="90%" max-width="90%"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">CSS</div>
                            <div className="skill-bar">
                                <div className="skill-per css-bar" per="70%" max-width="70%"></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-name">JS</div>
                            <div className="skill-bar">
                                <div className="skill-per js-bar" per="50%" max-width="70%"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">PHP</div>
                            <div className="skill-bar">
                                <div className="skill-per php-bar" per="70%" max-width="70%"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">MY SQL</div>
                            <div className="skill-bar">
                                <div className="skill-per sql-bar" per="55%" max-width="70%"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">REACT</div>
                            <div className="skill-bar">
                                <div className="skill-per react-bar" per="65%" max-width="70%"></div>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-name">NODE </div>
                            <div className="skill-bar">
                                <div className="skill-per node-bar" per="60%" max-width="70%"></div>
                            </div>
                        </div>


                    </div>
                    <hr />

                    <div className="qualification">
                        <h4 className="education-heading">Education qualification</h4>
                        <ul>
                            <li className='imp'>Bachelor Of Computer Application &#x2022; 2020 <br /></li>
                            <li>Sidho Kanho Birsha University, Purulia</li>

                            <li className='imp'>Master Of Computer Application &#x2022; 2023 <br /></li>
                            <li>Vidyasagar University, Midnapore </li>
                        </ul>
                    </div>
                    <hr />

                    <div className="extra-qualification">
                        <h4 className="extra-qualification-heading">Extra Qualification</h4>
                        <ul>
                            <li>Diploma In Application Software Programming &#x2022;2018 </li>
                        </ul>
                    </div>
                    <hr />

                    <div className="meritial-status">
                        <h4 className="meritial-status-heading">Marital Status</h4>
                        <ul>
                            <li>Unmarried</li>
                        </ul>
                    </div>
                    <hr />

                    <div className="social">
                        <h4 className="social-heading">Social links</h4>
                        <div className="s-logo">
                            <img src={github} alt="github logo" onClick={git} />
                            <img src={linkedin_logo} alt="linkedin logo" onClick={linkedin} />
                            <img src={instagram} alt="instagram logo" onClick={ig} />
                            <img src={facebook} alt=" facebook logo" onClick={fb} />
                        </div>
                    </div>
                    <hr />

                    <div className="contact">
                        <h4 className="contact-heading">Send Me A massage</h4>
                        <div className="con-form">
                            <input type="text" placeholder="name" />
                            <input type="email" placeholder="email" />
                            <input type="text" placeholder="your massage" />
                            <button>send it</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Profile