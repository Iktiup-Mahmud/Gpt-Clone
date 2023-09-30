import React, { useEffect, useState } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

const Lower = () => {

    const [article, setArticle] = useState({
        url: "",
        summery: ""
    });

    const handelSubmit = (e) => {
        
        e.preventDefault();


        const test = e.target.abc.value

        console.log(test)
        alert("Submited")
    }




    return (
        <section className='text-center mt-16 max-w-xl mx-auto'>
            <div className='flex flex-col w-full gap-2'>
                <form
                    className='relative flex justify-center items-center'
                    onSubmit={handelSubmit}
                >
                    <img
                        src={linkIcon}
                        alt='link-icon'
                        className='absolute left-0 my-2 ml-3 w-5'
                    />

                    <input
                        type='url'
                        placeholder='Paste the article link'
                        name='abc'
                        // value={"1"}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        // onKeyDown={handleKeyDown}
                        required
                        className='block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
                    />
                    <button
                        type='submit'
                        className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 submit_btn'
                    >
                        ↵
                    </button>

                </form>
            </div>

        </section>
    );
};

export default Lower;