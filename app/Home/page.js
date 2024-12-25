"use client"; // Add this to make the component a Client Component

import React from 'react';
import Link from 'next/link';

const Home = () => {
  const handleDownload = () => {
    const fileUrl = '/path-to-your-app-file.zip'; // Replace with the actual file URL (e.g., APK, EXE, etc.)
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'FogoCasinoApp'; // Customize with your app's name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to Fogo Paper Casino Betting</h1>
        <p style={styles.subtitle}>The ultimate platform for exciting paper casino betting games</p>
      </div>

      <div style={styles.body}>
        <p style={styles.text}>
          Join Fogo today and experience the thrill of traditional casino betting with the convenience of modern technology. Whether you're into poker, blackjack, roulette, or dice, we've got you covered with a secure and immersive betting experience.
        </p>

        <div style={styles.downloadSection}>
          <p style={styles.text}>Download our app to get started:</p>
          <button onClick={handleDownload} style={styles.downloadButton}>
            Download App
          </button>
        </div>

        <div style={styles.infoSection}>
          <p style={styles.text}>Explore the wide range of paper casino betting games available on Fogo:</p>
          <ul style={styles.gameList}>
            <li>color trading</li>
            <li>aviator game</li>
            <li>heads and tails</li>
            <li>more</li>
          </ul>
        </div>

        <p style={styles.text}>Start betting and make your moves on the go with Fogo's mobile app.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666',
    marginTop: '5px',
  },
  body: {
    marginTop: '20px',
  },
  text: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '15px',
  },
  downloadSection: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  downloadButton: {
    backgroundColor: '#ff6347', // Tomato color for the button
    color: '#fff',
    padding: '15px 30px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  infoSection: {
    marginTop: '20px',
  },
  gameList: {
    listStyleType: 'none',
    padding: '0',
    fontSize: '16px',
  },
};

export default Home;
