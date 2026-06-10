/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { StarsBackground } from './components/StarsBackground';

export default function App() {
  return (
    <div className="text-[#E0E0E0] min-h-screen selection:bg-white/10 selection:text-white font-sans">
      <StarsBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
