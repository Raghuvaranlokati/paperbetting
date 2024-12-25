"use client"; // Ensure this is a client component if you're using React interactivity

import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Fogo Paper Casino Betting</h1>
        <p style={styles.subtitle}>Your trusted platform for paper casino betting</p>
      </div>

      <div style={styles.body}>
        <p style={styles.text}>
          Welcome to <strong>Fogo</strong>, your trusted platform for <strong>paper casino betting</strong>. At Fogo, we bring the thrill of traditional casino games to a modern betting environment. Whether you're betting on a paper casino game or participating in online simulations, we guarantee a secure and exciting experience for all.
        </p>

        <p style={styles.text}>
          We offer a variety of paper-based betting games, from poker and blackjack to dice and roulette, allowing you to enjoy a classic casino experience. Our platform is designed to give you a realistic and fun betting environment while adhering to the highest standards of fairness and integrity.
        </p>

        <p style={styles.text}>
          Our goal is to make your betting experience as enjoyable as possible, offering a wide range of paper-based betting options that cater to both beginners and experienced bettors.
        </p>

        <h2 style={styles.contactHeader}>Contact Information</h2>

        <div style={styles.contactButton}>
          <Link href="mailto:zetafogo@gmail.com">
            <span style={styles.contactText}>Email: zetafogo@gmail.com</span>
          </Link>
        </div>

        <p style={styles.text}>
          If you have any questions or need support, please reach out. We're here to assist you with any inquiries you have about our paper casino betting services.
        </p>

        <p style={styles.text}>
          For more information on how to get started, visit our website or contact us using the details provided above.
        </p>

        {/* Centered Footer Section */}
        <div style={styles.footer}>
          <img 
            src="https://pbs.twimg.com/profile_images/1636189926273474560/jf6loexH_400x400.jpg" 
            alt="Raghuvaran" 
            style={styles.footerImage}
          />
          <p style={styles.footerText}>Developed by Raghuvaran</p>
        </div>
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
    marginBottom: '10px',
  },
  contactHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#333',
  },
  contactButton: {
    backgroundColor: '#ff6347', // Tomato color for buttons
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  contactText: {
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the image and text
    justifyContent: 'center',
    marginTop: '30px',
    textAlign: 'center',
    marginBottom: '10px',
  },
  footerImage: {
    width: '150px', // Adjust the size of the image
    height: '150px',
    borderRadius: '50%', // Makes the image round
    marginBottom: '10px',
  },
  footerText: {
    fontSize: '14px',
    color: '#888',
  },
};

export default About;
