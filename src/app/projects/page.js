import React from 'react';
import Image from 'next/image';

export default function Page() {
    return (
        <div className="min-h-screen bg-[#f9f9f9] p-4">
            <div className="bg-white shadow-md rounded-lg p-7 border-solid border-2 border-gold">
                <div className="grid grid-cols-3 sm:text-3xl text-base font-bold text-start text-dark-navy">
                    <a href="/portfolio">
                        <button className="border-solid border-2 border-dark-navy px-2 py-2 rounded-md text-black text-base shadow-sm hover:bg-gray-100 whitespace-nowrap">
                            Back to Homepage
                        </button>
                    </a>
                    <div className="text-3xl font-bold text-center text-dark-navy mb-4 hidden sm:block">Projects</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                    {/* Peoject 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h1 className="text-3xl font-bold mb-4 text-center text-dark-navy">Point of Sale system</h1>
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow">
                            <h2 className="text-l font-semibold text-dark-navy">Description</h2>
                            <p className="text-dark-navy">This ongoing project involves developing a Point of Sale (POS) system for a fictitious restaurant.</p>
                        </div>
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow mt-4">
                            <h2 className="text-l font-semibold text-dark-navy">Technologies Used</h2>
                            <p className="text-dark-navy">C#, WPF, JavaScript, MySQL, SQLite, Sequelize</p>
                        </div>
                        <div className="bg-steel-blue-tint p-4 rounded-lg shadow mt-4">
                            <p className="text-dark-navy font-semibold">GitHub repository</p>
                            <a href="https://github.com/NTIG-Uppsala/JIC-P.O.S" target="_blank" className="text-dark-navy hover:underline">Click me!</a>
                        </div>
                    </div>
                    <Image
                        src="/images/pos.png"
                        alt="Image of PoS system"
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>
        </div>
    );
}