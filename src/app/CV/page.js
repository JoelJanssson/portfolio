import React from 'react';

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="min-w-screen bg-white shadow-md rounded-lg p-7">
                <h1 className="text-3xl font-bold text-center mb-4">Personal Information</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-slate-300 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Name</h2>
                        <p className="mt-2">Joel Jansson</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <p className="mt-2">076-762 11 42</p>
                        <p className="mt-2">jjj.jansson@live.se</p>

                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold">Birth date</h2>
                        <p className="mt-2">2004-04-28</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Work Experiences</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold">Bildemo (recurring)</h2>
                            <h2 className="mt-2 text-xs">3 April 2023 - 4 Maj 2023</h2>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold">Uppsala vatten</h2>
                            <h2 className="mt-2 text-xs">Juni 2022 – Aug 2022</h2>
                        </div>
                        {/* <!-- Add more job experience boxes as needed --> */}
                    </div>
                </div>
                <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Software Knowledge</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">HTML</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">CSS</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">tailwind</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">JS</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">NextJS</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">React</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">C#</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">GitHub</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow text-center">Python</div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Attained skills</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold">Problem solving</h2>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold">Teamwork</h2>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold">Time management</h2>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold">Communication</h2>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold">customer service</h2>
                        </div>
                    </div>
                </div>
                <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4 text-center">Language profiency</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold">Swedish</h2>
                            <p className="text-xl">Native</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow flex justify-between">
                            <h2 className="text-xl font-semibold">English</h2>
                            <p className="text-xl">Fluent</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-3xl font-bold mb-4 text-center">Academics</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-center">TE4 - NTI Gymnasiet</h2>
                        <p className="text-xs text-center">19 Aug 2024 - 4 Juni 2025</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold text-center">NTI Gymnasiet</h2>
                        <p className="text-xs text-center">Aug 2020 - 2 Juni 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


