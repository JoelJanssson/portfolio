import React from 'react';

export default function Page() {
    return (
        <div className="min-h-screen bg-[#f9f9f9] p-4">
            <div className="min-w-screen bg-white shadow-md rounded-lg p-7 border-solid border-2 border-gold">
                <h1 className="text-3xl font-bold text-center mb-4 text-dark-navy">Personal Information</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-soft-navy-blue p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-dark-navy">Name</h2>
                        <p className="mt-2 text-dark-navy">Joel Jansson</p>
                    </div>
                    <div className="bg-soft-navy-blue p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-dark-navy">Contact Information</h2>
                        <p className="mt-2 text-dark-navy">076-762 11 42</p>
                        <p className="mt-2 text-dark-navy">jjj.jansson@live.se</p>

                    </div>
                    <div className="bg-soft-navy-blue p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-dark-navy">Birth date</h2>
                        <p className="mt-2 text-dark-navy">2004-04-28</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Work Experiences</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-soft-navy-blue p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold text-dark-navy">Bildemo (recurring)</h2>
                            <h2 className="mt-2 text-xs text-dark-navy">3 April 2023 - Present time</h2>
                        </div>
                        <div className="bg-soft-navy-blue p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold text-dark-navy">Uppsala vatten</h2>
                            <h2 className="mt-2 text-xs text-dark-navy">Juni 2022 – Aug 2022</h2>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Software Knowledge</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">HTML</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">CSS</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">tailwind</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">JS</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">NextJS</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">React</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">C#</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">GitHub</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Python</div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Language profiency</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-soft-navy-blue p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold text-dark-navy">Swedish</h2>
                            <p className="text-xl">Native</p>
                        </div>
                        <div className="bg-soft-navy-blue p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold text-dark-navy">English</h2>
                            <p className="text-xl text-dark-navy">Fluent</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Attained skills</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Teamwork</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Time management</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">Communication</div>
                        <div className="bg-soft-navy-blue text-l font-semibold p-4 rounded-lg shadow text-center text-dark-navy">customer service</div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Academics</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div className="bg-soft-navy-blue p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-center text-dark-navy">TE4 - NTI Gymnasiet</h2>
                        <p className="text-xs text-center text-dark-navy">19 Aug 2024 - 4 Juni 2025</p>
                    </div>
                    <div className="bg-soft-navy-blue p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-center text-dark-navy">NTI Gymnasiet</h2>
                        <p className="text-xs text-center text-dark-navy">Aug 2020 - 2 Juni 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
