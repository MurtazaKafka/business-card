import React from "react";
import ReactDOM from "react-dom";

const page = (
    <div className="container">
        <img src="./portrait.jpg" alt="Murtaza wearing a suit" />
        <h2>Murtaza Nikzad</h2>
        <h4>Frontend developer</h4>
        <a href="https://murtazanikzad.netlify.app"><p className="web-url">murtazanikzad.netlify.app</p></a>
        <div className="social">
            <a className="email" href="mailto:murtazanikzad1@gmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
            <a className="linkedin" href="https://af.linkedin.com/in/murtaza-nikzad-877722158"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
        <div className="about">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        
        <div className="interests">
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <footer>
        
        <a href="https://twitter.com/NikzadMurtaza"><i className="fa-brands fa-twitter"></i></a>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <a href="#"><i className="fa-brands fa-github"></i></a>
        </footer>
    </div>
);

ReactDOM.render(page, document.getElementById("root"));
