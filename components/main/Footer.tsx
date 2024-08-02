import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './MagicButton';


const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 bg-[#030014] text-white" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold lg:max-w-[45vw] text-center mb-5">
                    Ready to take <span className="text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">your digital</span>
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-5 my-5 text-lg text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:himu09854@gmail.com" className="no-underline">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
