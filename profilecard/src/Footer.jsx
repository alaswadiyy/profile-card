import { FaTwitterSquare } from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';


function Footer() {
    return (
        <div className='social'>
            <a className='icon' href="https://twitter.com/aswadiyy">
                
                    <FaTwitterSquare />
                    
            </a>
            <a className='icon' href="https://github.com/alaswadiyy"><FaGithubSquare /></a>
            <a className='icon' href="https://www.instagram.com/al_aswadiyy"><FaInstagramSquare /></a>
        </div>
    );
}

export default Footer;