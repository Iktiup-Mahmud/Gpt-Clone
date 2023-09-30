import React from 'react';
import { logo } from "../assets/"

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col max-w-6xl mx-auto px-5'>
            <nav className="flex justify-between items-center w-full mb-10 pt-5">
                <img src={logo} className='w-28 object-contain' alt="" />
                <button type='button' className="black_btn" onClick={() => window.open("https://github.com")}>
                    Github
                </button>
            </nav>
            <h1 className='head_text'>
                Summarize Article With <br />  <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI GPT-4</span>
            </h1>
            <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
                Simplify your reading with Summize, an open-source article summarizer
                that transforms lengthy articles into clear and concise summaries
            </h2>
        </header>
    );
};

export default Hero;