import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header__nav">
      <div className="nav__content">
        <h2 className='logo'>Newton School</h2>
        <nav>
          <ul className="nav__list">
            <li>
              <a className="nav__link" href="/home"> Home</a>
            </li>
            <li>
              <a className="nav__link" href="/courses">
                Courses
              </a>
            </li>
            <li>
              <a className="nav__link" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav__link" href="/jobs">
                Jobs
              </a>
            </li>
            <li>
              <a className="nav__link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
        <a className="btn btn-login" href="/login">
          Login
        </a>
        <a className="btn btn-signup" href="/signup">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Navbar;
