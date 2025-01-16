import React from 'react';

export default function Page() {
    return (
        <div className="min-h-screen bg-[#f9f9f9] p-4">
            <div className="bg-white shadow-md rounded-lg p-7 border-solid border-2 border-gold">
                <div className="grid grid-cols-3 sm:text-3xl text-base font-bold text-start text-dark-navy">
                    <div className="text-3xl font-bold text-center text-dark-navy mb-4 hidden sm:block">Personal Information</div>
                    <div className="text-3xl mb-4 font-bold text-center text-dark-navy">
                        <a href="/portfolio">
                            <button className="border-solid border-2 border-dark-navy px-2 py-2 rounded-md text-black text-base shadow-sm hover:bg-gray-100 whitespace-nowrap">
                                Back to Homepage
                            </button>
                        </a>
                    
                    </div>
                    <div className="sm:text-3xl text-base font-bold text-end text-dark-navy hidden sm:block mb-4">Academics</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="bg-steel-blue-tint p-4 mb-1 rounded-lg shadow flex flex-col mr-1">
                        <div className="p-4 rounded-lg shadow border-solid border-2 border-dark-navy flex flex-col sm:flex-row justify-between mb-2">
                          <div className="font-semibold text-dark-navy text-base sm:text-lg">Name</div>
                          <p className="text-dark-navy text-base sm:text-sm">Joel Jansson</p>
                        </div>
                        <div className="p-4 rounded-lg shadow border-solid border-2 border-dark-navy flex flex-col sm:flex-row justify-between mb-2">
                          <div className="font-semibold text-dark-navy text-base sm:text-lg">Phone Number</div>
                          <p className="text-dark-navy text-base sm:text-sm">076-762 11 42</p>
                        </div>
                        <div className="p-4 rounded-lg shadow border-solid border-2 border-dark-navy flex flex-col sm:flex-row justify-between">
                          <div className="font-semibold text-dark-navy text-base sm:text-lg">E-Mail</div>
                          <p className="text-dark-navy text-base sm:text-sm">jjj.jansson@live.se</p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold text-center text-dark-navy">Technical High School Engineer</h2>
                            <p className="text-xs text-center text-dark-navy">NTI Gymnasiet</p>
                            <p className="text-xs text-center text-dark-navy">19 Aug 2024 - 4 June 2025</p>
                        </div>
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold text-center text-dark-navy">Technology Program - Software Engineering</h2>
                            <p className="text-xs text-center text-dark-navy">NTI Gymnasiet</p>
                            <p className="text-xs text-center text-dark-navy">Aug 2020 - 2 June 2023</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Work Experiences</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow flex justify-between items-start">
                            <div>
                                <h2 className="text-l font-semibold text-dark-navy">Bildemo (recurring)</h2>
                                <p className="text-dark-navy">Changing tires and mounting new tires</p>
                            </div>
                            <h2 className="mt-2 text-xs text-dark-navy">3 April 2023 - 23 Nov 2024</h2>
                        </div>
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow flex justify-between items-start">
                            <div>
                                <h2 className="text-l font-semibold text-dark-navy">Uppsala vatten</h2>
                                <p className="text-dark-navy">Directing customers at recycling centers</p>
                            </div>
                            <h2 className="mt-2 text-xs text-dark-navy">June 2022 – Aug 2022</h2>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Software Knowledge</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Agile Workflow (SCRUM)</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">HTML & CSS</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Test Automation</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Git</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Python</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">JavaScript</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">NextJS</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">tailwind</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Bootstrap 5</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">React</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">SQLite</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">MySQL</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Sequelize</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">C#</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">WPF</div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Language Profiency</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-l font-semibold text-dark-navy">Swedish</h2>
                            <p className="text-l text-dark-navy">Native</p>
                        </div>
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-l font-semibold text-dark-navy">English</h2>
                            <p className="text-l text-dark-navy">Fluent</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Soft skills</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Teamwork</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Time management</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Communication</div>
                        <div className="bg-steel-blue-tint text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Customer service</div>
                    </div>
                </div>
            </div>
        </div>
    );
}