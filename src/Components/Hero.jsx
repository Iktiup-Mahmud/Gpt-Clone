import React from 'react';
import { logo } from "../assets/"

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col max-w-6xl mx-auto'>
            <nav className="flex justify-between items-center w-full mb-10 pt-5">
                <img src={logo} className='w-28 object-contain' alt="" />
                <button type='button' className="black_btn" onClick={() => window.open("https://github.com")}>
                    Github
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Article With <br />  <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI GPT-4</span>
            </h1>
        </header>
    );
};

export default Hero;