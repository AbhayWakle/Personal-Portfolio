import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodechef } from "react-icons/si";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {


    const navigate = useNavigate();

    const homePage = () => {
        navigate('/');
    }

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="mx-2 w-20 cursor-pointer"
                    src={logo}
                    alt="logo"
                    onClick={homePage}
                />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/abhay-wakle-559a96228/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/AbhayWakle" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/abhay_xiv/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
                    <FaInstagram />
                </a>
                <a href="https://codeforces.com/profile/abhay_xiv" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
                    <SiCodeforces />
                </a>
                <a href="https://leetcode.com/u/abhay_xiv/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                    <TbBrandLeetcode />
                </a>
                <a href="https://www.codechef.com/users/abhay_xiv" target="_blank" rel="noopener noreferrer" className="hover:text-slate-500">
                    <SiCodechef />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
