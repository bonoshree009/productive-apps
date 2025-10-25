import React from 'react';
import logoimg from '../assets/logo.png'
import { Github } from 'lucide-react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
const Header = () => {


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to ="/">Home</Link> </li>
        <li><NavLink to='/apps'>Apps</NavLink> </li>
        <li><a>Installation</a></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-blue-700"> <img src={logoimg} alt="" className='h-7' />Hero.Io</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to ="/">Home</Link> </li>
        <li><NavLink to='./apps'>Apps</NavLink> </li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a  href= "https://github.com/bonoshree009" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">  <Github></Github> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Header;