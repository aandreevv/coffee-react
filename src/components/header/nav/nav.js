import './nav.scss'
import image from './coffee-beans.png';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="./coffee-beans.png">
                        <img src={image} alt="logotype"/>Coffee house
                    </a>
                </li>
                <li>
                    <a href="./coffee-beans.png">
                        Our coffee</a>
                </li>
                <li>
                    <a href="./coffee-beans.png">
                        For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;