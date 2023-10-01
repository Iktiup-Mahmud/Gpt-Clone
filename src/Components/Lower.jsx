import React, { useEffect, useState } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummeryQuery } from '../Services/Article';

const Lower = () => {

    const [article, setArticle] = useState({
        url: "",
        summery: ""
    });
    const [allArticles, setAllArticles] = useState([]);
    const [copied, setCopied] = useState("");

    const [getSummery, { error, isFetching }] = useLazyGetSummeryQuery();

    useEffect(() => {
        const articlesFromLocalStorage =  JSON.parse(localStorage.getItem("articles"))

        if (articlesFromLocalStorage) {
            setAllArticles(articlesFromLocalStorage);
        }
    }, [ ])

    const handelSubmit =async (e) => {

        e.preventDefault();

        // const existingArticle = allArticles.find(
        //     (item) => item.url === article.url
        // );

        // if (existingArticle) return setArticle(existingArticle);

        // console.log(e.target.abc.value)

        const { data } = await getSummery({ articleUrl: article.url });
        // console.log(data)
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            console.log(newArticle)
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
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
                        // name='abc'
                        value={article.url}
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


            {/* history part */}
            <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
                {allArticles.reverse().map((item, index) => (
                    <div
                        key={`link-${index}`}
                        onClick={() => setArticle(item)}
                        className='p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer'
                    >
                        <div className=' w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199, 199, 199, 0.2)] backdrop-blur flex justify-center items-center cursor-pointer' onClick={() => handleCopy(item.url)}>
                            <img
                                src={copied === item.url ? tick : copy}
                                alt={copied === item.url ? "tick_icon" : "copy_icon"}
                                className='w-[40%] h-[40%] object-contain'
                            />
                        </div>
                        <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                            {item.url}
                        </p>
                    </div>
                ))}
            </div>



            {/* Display Result */}
            <div className='my-10 max-w-full flex justify-center items-center'>
                {isFetching ? (
                    <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
                ) : error ? (
                    <p className='font-inter font-bold text-black text-center'>
                        Well, that wasn't supposed to happen...
                        <br />
                        <span className='font-satoshi font-normal text-gray-700'>
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className='flex flex-col gap-3'>
                            <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                                Article <span className='blue_gradient'>Summary</span>
                            </h2>
                            <div className='summary_box'>
                                <p className='font-inter font-medium text-sm text-gray-700'>
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>

        </section>
    );
};

export default Lower;