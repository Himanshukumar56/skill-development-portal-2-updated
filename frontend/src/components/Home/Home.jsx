import React from 'react';
import Section from '../section/Section';
import college from '../../assets/college.png';
import webdev from '../../assets/webdev.png';
import ai_ml from '../../assets/ai_ml.png';
import dsa from '../../assets/dsa.png';
import cp from '../../assets/cp.png';
import blockchain from '../../assets/blockchain.png';
import cybersecurity from '../../assets/cybersecurity.jpg';
import interview from '../../assets/interview.jpg';
import './home.css';
import Header from '../Header/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="home">
      <h1>Welcome to SkillUp</h1>
      <p>Your ultimate platform for learning and skill development</p>
      <div className="sections">
        <Section image={college} title="College Academics" />
        <Section image={webdev} title="Web Dev" />
        <Section image={ai_ml} title="AI/ML" />
        <Section image={dsa} title="Data Structures & Algorithms" />
        <Section image={cp} title="Competitive Programming" />
        <Section image={blockchain} title="Blockchain" />
        <Section image={cybersecurity} title="CyberSecurity" />
        <Section image={interview} title="Interview Preparation" />
      </div>
    </div>
    </>
    
  );
}

export default Home;
