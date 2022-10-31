import './css/nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link to='/' className="nav-link active" >Home</Link></li>
                            <li className="nav-item"><Link to='/projects' className="nav-link active" >Projects</Link></li>
                            <li className="nav-item"><Link to='/profile' className="nav-link active" >Profile</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;