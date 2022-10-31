import todoList from '../assets/todo.png';
import event from '../assets/event.png';
import ecom from '../assets/ecom.png';
import std from '../assets/std-mannagement.png';
import fake from '../assets/FAKE-CERTIFICATE.jpg';

import './css/project.css';

const Projects = () => {
    const git_todo = () => {
        window.open('https://github.com/jayantamahato/todolist');
    }
    const git_std = () => {
        window.open('https://github.com/jayantamahato/studentmanagment');
    }
    const git_ecom = () => {
        window.open('https://github.com/jayantamahato/ecommerce');
    }
    const git_fd = () => {
        window.open('https://github.com/jayantamahato/fakedegree');
    }
    const wed_event = () => {
        window.open('https://github.com/jayantamahato/askweddingplanner');
    }



    const loom_todo = () => {
        window.open('https://www.loom.com/share/9409cb3a032b46debe8ab86335340dfc');
    }
    const loom_event = () => {
        window.open('https://www.loom.com/share/9409cb3a032b46debe8ab86335340dfc');
    }
    const loom_std = () => {
        window.open('https://www.loom.com/share/9409cb3a032b46debe8ab86335340dfc');
    }
    const loom_ecom = () => {
        window.open('https://j1ecomerce.000webhostapp.com');
    }
    const loom_fd = () => {
        window.open('https://www.loom.com/share/9409cb3a032b46debe8ab86335340dfc');
    }
    return (
        <div className="projects">
            <div className="heading">Projects</div>
            <div className="project-card">
                <div className="project">
                    <div className="project-templates">
                        <img src={event} alt="project template" />
                    </div>
                    <div className="project-name">
                        <h6>Wedding planner Webapp</h6>
                    </div>
                    <div className="project-link">
                        <div className="git">
                            <button onClick={() => wed_event()} type="button">  Git Link </button>
                        </div>
                        <div className="loom">
                            <button onClick={() => loom_event()} type='submit'>Have a Look</button>
                        </div>
                    </div>
                </div>


                <div className="project">
                    <div className="project-templates">
                    <img src={ecom} alt="project template" />

                    </div>
                    <div className="project-name">
                        <h6>E-Commerce Web App</h6>
                    </div>
                    <div className="project-link">
                        <div className="git">
                            <button onClick={() => git_ecom()} type="button">  Git Link </button>
                        </div>
                        <div className="loom">
                            <button onClick={() => loom_ecom()}>Have a Look</button>
                        </div>
                    </div>
                </div>

                <div className="project">
                    <div className="project-templates">
                        <img src={std} alt="project template" />
                    </div>
                    <div className="project-name">
                        <h6>Student Mannagement System</h6>
                    </div>
                    <div className="project-link">
                        <div className="git">
                            <button onClick={() => git_std()} type="button">  Git Link </button>
                        </div>
                        <div className="loom">
                            <button onClick={() => loom_std()}>Have a Look</button>
                        </div>
                    </div>
                </div>


                <div className="project">
                    <div className="project-templates">
                        <img src={todoList} alt="project template" />
                    </div>
                    <div className="project-name">
                        <h6>todo list</h6>
                    </div>
                    <div className="project-link">
                        <div className="git">
                            <button onClick={() => git_todo()} type="button">  Git Link </button>
                        </div>
                        <div className="loom">
                            <button onClick={() => loom_todo()}>Have a Look</button>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-templates">
                        <img src={fake} alt="project template" />
                    </div>
                    <div className="project-name">
                        <h6>Fake Degree Detection</h6>
                    </div>
                    <div className="project-link">
                        <div className="git">
                            <button onClick={() => git_fd()} type="button">  Git Link </button>
                        </div>
                        <div className="loom">
                            <button onClick={() => loom_fd()}>Have a Look</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Projects