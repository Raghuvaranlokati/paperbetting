"use client"; // Add this to make the component a Client Component

import React from 'react';

const Home = () => {
  const handleDownload = () => {
    const fileUrl = '/casinopaper-bet.apk'; // Replace with the actual file URL (e.g., APK, EXE, etc.)
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'FogoCasinoApp'; // Customize with your app's name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="p-6 bg-gray-100 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Fogo Paper Casino Betting</h1>
        <p className="text-lg text-gray-600 mt-2">The ultimate platform for exciting paper casino betting games</p>
      </div>

      <div>
        <p className="text-base text-gray-700 mb-6">
          Join Fogo today and experience the thrill of traditional casino betting with the convenience of modern technology. Whether you're into poker, blackjack, roulette, or dice, we've got you covered with a secure and immersive betting experience.
        </p>

        <div className="text-center mb-10">
          <p className="text-base text-gray-700 mb-4">Download our app to get started:</p>
          <button
            onClick={handleDownload}
            className="bg-red-500 text-white py-3 px-8 text-lg rounded-lg hover:bg-red-600 transition duration-200"
          >
            Download App
          </button>
        </div>

        <div>
          <p className="text-base text-gray-700 mb-4">Explore the wide range of paper casino betting games available on Fogo:</p>
          <ul className="space-y-4">
            <li className="flex items-center bg-white text-gray-800 shadow-md rounded-lg p-4">
              <span className="text-2xl mr-4"></span> <span className="text-lg font-medium">Color Trading</span>
            </li>
            <li className="flex items-center bg-white text-gray-800 shadow-md rounded-lg p-4">
              <span className="text-2xl mr-4"></span> <span className="text-lg font-medium">Aviator Game</span>
            </li>
            <li className="flex items-center bg-white text-gray-800 shadow-md rounded-lg p-4">
              <span className="text-2xl mr-4"></span> <span className="text-lg font-medium">Heads and Tails</span>
            </li>
            <li className="flex items-center bg-white text-gray-800 shadow-md rounded-lg p-4">
              <span className="text-2xl mr-4"></span> <span className="text-lg font-medium">More</span>
            </li>
          </ul>
        </div>

        <p className="text-base text-gray-700 mt-8">
          Start betting and make your moves on the go with Fogo's mobile app.
        </p>
      </div>
    </div>
  );
};

export default Home;
