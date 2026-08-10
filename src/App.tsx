/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemStrip } from "./components/ProblemStrip";
import { Services } from "./components/Services";
import { TrustStrip } from "./components/TrustStrip";
import { CTA } from "./components/CTA";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Header />
      <main id="top">
        <Hero />
        <ProblemStrip />
        <Services />
        <TrustStrip />
        <CTA />
      </main>
      <footer className="py-[40px] border-t border-paper-line">
        <div className="max-w-[1180px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <a href="#top" className="no-underline">
            <Logo size="sm" />
          </a>
          <p className="font-mono text-[12.5px] text-slate">
            © {new Date().getFullYear()} Al-Aahnaf IT Consulting. All rights reserved.
          </p>
          <div className="flex gap-[26px] font-mono text-[12.5px] text-slate">
            <a href="#services" className="hover:text-amber-dark no-underline">Services</a>
            <a href="#book" className="hover:text-amber-dark no-underline">Book a consult</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

