import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
                <p className="text-gray-700 text-base mb-4">
                    Hello! I'm Riquelme, a passionate web developer with a love for creating beautiful and functional web applications. I have experience in various web technologies and enjoy learning new things every day.
                </p>
                <p className="text-gray-700 text-base mb-4">
                    In my free time, I like to read books, play video games, and explore new places. I'm always looking for new challenges and opportunities to grow as a developer.
                </p>
                <p className="text-gray-700 text-base">
                    Feel free to reach out to me if you'd like to connect or collaborate on a project!
                </p>
            </div>
        </div>
    );
};

export default AboutMe;