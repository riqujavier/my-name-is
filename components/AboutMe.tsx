import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className=" rounded-lg p-6 w-full">
                <p className="text-grey-400 text-base mb-4">
                    Hello! I'm a passionate web developer who loves creating beautiful and functional <a className="font-bold" href='/projects'>web applications</a>. With experience in various web technologies, I enjoy learning new things every day.
                </p>
                <p className="text-grey-400 text-base mb-4">
                    In my free time, I like to read books, play video games, and explore new places. I'm always looking for new challenges and opportunities to grow as a developer.
                </p>
                <p className="text-grey-400 text-base">
                    Feel free to reach out to me if you'd like to <a className="font-bold" href='/contact'>connect</a> or collaborate on a project!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;