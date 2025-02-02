import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className=" text-white py-4">
            <div className="container max-w-4xl mx-auto px-4 md:px-14 py-8 text-left">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="mt-2 ">
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;