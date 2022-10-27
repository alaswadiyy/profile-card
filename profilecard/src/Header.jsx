import Asiwaji from '../src/assets/images/Abdulmuiz.png';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <div>
                <img className="img" src={Asiwaji} alt="aswad"/>
            </div>
            <h1>Abdulmuiz Olayemi</h1>
            <p className="title">Frontend Developer</p>
            <a className='git' href="https://github.com/alaswadiyy">abdulmuiz.website</a>
            <div className="btns">
                <button className="btn1"><AiOutlineMail />&nbsp; Email</button>
                <button className="btn2"><BsLinkedin />&nbsp;Linkedin</button>
            </div>
        </div>
    )
}

export default Header;