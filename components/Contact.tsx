import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
                <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="message"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                            rows={5}
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;