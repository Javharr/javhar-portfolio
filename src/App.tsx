/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Personal } from './components/Personal';
import { Contact } from './components/Contact';
import { StarsBackground } from './components/StarsBackground';

export default function App() {
  return (
    <div className="text-[#E0E0E0] min-h-screen selection:bg-white/10 selection:text-white font-sans">
      <StarsBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Portfolio />
        <Personal />
        <Contact />
      </main>
    </div>
  );
}
