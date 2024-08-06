import { Link } from 'react-router-dom'
import '../styles/Header.css'
import PathConstants from '../routes/pathConstants.js'

export default function Header() {
    return (
        <header>
            <div className="header-div">
                <h1 className="title">
                    <Link to={PathConstants.HOME}>CM MediGuide</Link>
                </h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={PathConstants.STAYINGHEALTHY}>
                                Staying Healthy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={PathConstants.RESOURCECENTER}>
                                Resource Center
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={PathConstants.ABOUT}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
