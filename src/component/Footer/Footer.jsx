import icon from '../../assets/loco.png'
import { FaFacebookSquare,FaPhone,FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
              <img className='w-28' src={icon} alt="" />
                <p>The toy car is a sleek and shiny <br /> model inspired by classic sports cars</p>
            </div>
            <div>
                <span className="footer-title">Extras</span>
                <a className="link link-hover">Gift Cards</a>
                <a className="link link-hover">HBP Rewards</a>
                <a className="link link-hover">Comporate Gift Service</a>
                <a className="link link-hover">It Takes a village Compaign</a>
            </div>
            <div>
                <span className="footer-title">Customer Care</span>
                <a className="link link-hover">Find a stare</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Order Status</a>
            </div>
            <div>
                <a className='my-4'><FaFacebookSquare /></a>
                <a className='my-4'><FaPhone/></a>
                <a><FaRegEnvelope/></a>
                
            </div>
        </footer>
    );
};

export default Footer;