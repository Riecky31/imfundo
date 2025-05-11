'use client';
import { useState } from 'react';
import Image from 'next/image';

import Header from '@/components/Header';
import About from '@/components/about';
import Contact from '@/components/contact';

export default function Home(){
  const [view, setView] = useState<'home' | 'about' | 'contact'>('home');

  return(
    <div style={{ color: 'blue' , alignItems: 'center'}}>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '20px', cursor: 'pointer' }}>
        <span onClick={() => setView('home')}>Home</span>
        <span onClick={() => setView('about')}>About</span>
        <span onClick={() => setView('contact')}>Contact</span>
      </nav>
      {view === 'home' && (
        <div>
          <h1 style={{ fontSize: '2rem' }}>Welcome to IMFUNDO</h1>
          
          <h2>home of ennovation and technology</h2>
          <Image 
        src="/home.png"  // Make sure the image is in the /public folder
        alt="home"
        width={1200}
        height={900}
        style={{ margin: '20px auto' }}
      />
        </div>
      )}

      {view === 'about' && <About />}
      {view === 'contact' && <Contact />}
    </div>
  );
}