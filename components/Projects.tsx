import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of project one.',
        link: '#'
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of project two.',
        link: '#'
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of project three.',
        link: '#'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a href={project.link} className="text-blue-500 hover:underline">
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;