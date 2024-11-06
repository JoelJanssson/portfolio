import React from 'react';

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">Work Experiences</h1>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold">Bildemo</h2>
                            <p className="mt-2">Däckskifte.</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">
                            <h2 className="text-xl font-semibold">Återviningscentral</h2>
                            <p className="mt-2">Slänga sopor.</p>
                        </div>
                        {/* <!-- Add more job experience boxes as needed --> */}
                    </div>
                </div>
                <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">Software Knowledge</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-blue-100 p-4 rounded-lg shadow">HTML</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">CSS</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">Javascript</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">React</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">C#</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">GitHub</div>
                        <div className="bg-blue-100 p-4 rounded-lg shadow">Python</div>

                    </div>
                </div>
            </div>
            <div className="min-w-screen mx-auto bg-white shadow-md rounded-lg p-6 mt-5">
                <h1 className="text-3xl font-bold text-center mb-4">Personal Information</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg shadow">
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
        </div>
    );
}

