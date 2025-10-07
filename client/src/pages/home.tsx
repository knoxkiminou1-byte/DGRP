import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, TrendingUp, Users } from "lucide-react";
import gmwaChoirImg from "@assets/Untitled design (77)_1759804753362.png";
import stephenPreeImg from "@assets/Untitled design (78)_1759804753368.png";
import eloisDrewImg from "@assets/Untitled design (79)_1759804753368.png";
import brenoBrownImg from "@assets/Untitled design (80)_1759804753369.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-[5%] py-6">
          <div className="font-serif text-2xl font-semibold text-foreground" data-testid="text-logo">
            DGRP Baysound
          </div>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("manifesto")}
              className="font-semibold text-foreground relative group transition-colors hover:text-foreground"
              data-testid="button-nav-mission"
            >
              Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("roster")}
              className="font-semibold text-foreground relative group transition-colors hover:text-foreground"
              data-testid="button-nav-roster"
            >
              Roster
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("founder")}
              className="font-semibold text-foreground relative group transition-colors hover:text-foreground"
              data-testid="button-nav-visionary"
            >
              The Visionary
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-semibold text-foreground relative group transition-colors hover:text-foreground"
              data-testid="button-nav-invest"
            >
              Invest
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex justify-center items-center text-center px-[5%] relative bg-gradient-to-b from-primary/10 via-background to-background"
        data-testid="section-hero"
      >
        <div className="max-w-[1000px]">
          <h1 className="font-serif font-bold text-[clamp(3rem,8vw,6rem)] leading-[1.1]" data-testid="text-hero-title">
            Architecting the Future of Sound.
          </h1>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-[50px] bg-border" data-testid="scroll-indicator">
          <span className="block w-full h-full bg-foreground animate-scroll-anim"></span>
        </div>
      </section>

      {/* Mission/Manifesto Section */}
      <section
        id="manifesto"
        data-animate
        className={`py-24 px-[5%] max-w-[1400px] mx-auto border-b border-border transition-all duration-800 ${
          visibleSections.has("manifesto") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-testid="section-mission"
      >
        <h2 className="font-serif font-bold text-[clamp(2rem,6vw,3.5rem)] mb-8 text-center" data-testid="text-mission-title">
          Our Mission
        </h2>
        <p className="text-lg max-w-[70ch] mx-auto mb-16 text-center" data-testid="text-mission-description">
          DGRP Baysound is a new-era record label dedicated to discovering, developing, and amplifying the voices that will define the next generation of music. We operate at the intersection of artistic integrity and innovative strategy to build sustainable, global careers for our artists.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          <Card className="p-8 text-center hover-elevate transition-transform duration-300 hover:-translate-y-2" data-testid="card-stat-market">
            <h3 className="font-serif text-5xl font-bold text-primary mb-2" data-testid="text-stat-market-value">$100B+</h3>
            <p className="text-foreground" data-testid="text-stat-market-description">Projected Global Music Market by 2030</p>
          </Card>
          <Card className="p-8 text-center hover-elevate transition-transform duration-300 hover:-translate-y-2" data-testid="card-stat-streaming">
            <h3 className="font-serif text-5xl font-bold text-primary mb-2" data-testid="text-stat-streaming-value">84%</h3>
            <p className="text-foreground" data-testid="text-stat-streaming-description">Industry Revenue from Streaming</p>
          </Card>
          <Card className="p-8 text-center hover-elevate transition-transform duration-300 hover:-translate-y-2" data-testid="card-stat-streams">
            <h3 className="font-serif text-5xl font-bold text-primary mb-2" data-testid="text-stat-streams-value">3.2T</h3>
            <p className="text-foreground" data-testid="text-stat-streams-description">Annual Global Music Streams</p>
          </Card>
        </div>
      </section>

      {/* Artist Roster Section */}
      <section
        id="roster"
        data-animate
        className={`py-24 px-[5%] max-w-[1400px] mx-auto border-b border-border transition-all duration-800 ${
          visibleSections.has("roster") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-testid="section-roster"
      >
        <h2 className="font-serif font-bold text-[clamp(2rem,6vw,3.5rem)] mb-8 text-center" data-testid="text-roster-title">
          Our Roster
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <div className="relative overflow-hidden rounded-xl min-h-[400px] group" data-testid="card-artist-gmwa">
            <img
              src={gmwaChoirImg}
              alt="Northern California Chapter GMWA Fresno Choir"
              className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              data-testid="img-artist-gmwa"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 pt-12 transition-transform duration-400 translate-y-[20%] group-hover:translate-y-0">
              <h3 className="font-serif text-[clamp(1.2rem,3vw,1.5rem)] mb-2" data-testid="text-artist-gmwa-name">GMWA Fresno Choir</h3>
              <p className="text-muted-foreground" data-testid="text-artist-gmwa-description">Northern California Chapter</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl min-h-[400px] group" data-testid="card-artist-stephen">
            <img
              src={stephenPreeImg}
              alt="Stephen Pree"
              className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              data-testid="img-artist-stephen"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 pt-12 transition-transform duration-400 translate-y-[20%] group-hover:translate-y-0">
              <h3 className="font-serif text-[clamp(1.2rem,3vw,1.5rem)] mb-2" data-testid="text-artist-stephen-name">Stephen Pree</h3>
              <p className="text-muted-foreground" data-testid="text-artist-stephen-description">Visionary Artist</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl min-h-[400px] group" data-testid="card-artist-elois">
            <img
              src={eloisDrewImg}
              alt="Elois Drew"
              className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              data-testid="img-artist-elois"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 pt-12 transition-transform duration-400 translate-y-[20%] group-hover:translate-y-0">
              <h3 className="font-serif text-[clamp(1.2rem,3vw,1.5rem)] mb-2" data-testid="text-artist-elois-name">Elois Drew</h3>
              <p className="text-muted-foreground" data-testid="text-artist-elois-description">Powerful Voice</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl min-h-[400px] group" data-testid="card-artist-breno">
            <img
              src={brenoBrownImg}
              alt="Breno Brown"
              className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
              data-testid="img-artist-breno"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 pt-12 transition-transform duration-400 translate-y-[20%] group-hover:translate-y-0">
              <h3 className="font-serif text-[clamp(1.2rem,3vw,1.5rem)] mb-2" data-testid="text-artist-breno-name">Breno Brown</h3>
              <p className="text-muted-foreground" data-testid="text-artist-breno-description">Rising Star</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder/Visionary Section */}
      <section
        id="founder"
        data-animate
        className={`py-24 px-[5%] max-w-[1400px] mx-auto border-b border-border transition-all duration-800 ${
          visibleSections.has("founder") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-testid="section-founder"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:flex-1 rounded-xl overflow-hidden" data-testid="img-founder">
            <img
              src={stephenPreeImg}
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:flex-1">
            <h2 className="font-serif font-bold text-[clamp(2rem,6vw,3.5rem)] mb-8 text-center md:text-left" data-testid="text-founder-title">
              The Visionary
            </h2>
            <p className="text-lg max-w-[70ch] mx-auto md:mx-0" data-testid="text-founder-bio">
              Led by the creative vision of a Grammy-award winning producer and cultural architect known for a 'Black Liberace' approach to artistry—blending virtuosic talent with unforgettable presentation. DGRP Baysound operates at the nexus of artistic innovation and commercial strategy, building a legacy of quality and cultural impact.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section
        id="strategy"
        data-animate
        className={`py-24 px-[5%] max-w-[1400px] mx-auto border-b border-border transition-all duration-800 ${
          visibleSections.has("strategy") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-testid="section-strategy"
      >
        <h2 className="font-serif font-bold text-[clamp(2rem,6vw,3.5rem)] mb-16 text-center" data-testid="text-strategy-title">
          The DGRP Difference
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <Card className="p-10 hover-elevate transition-transform duration-300 hover:-translate-y-2" data-testid="card-strategy-development">
            <div className="w-12 h-12 mb-6 mx-auto text-primary">
              <Users className="w-full h-full" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-center" data-testid="text-strategy-development-title">
              Artist-Centric Development
            </h3>
            <p className="text-center text-muted-foreground" data-testid="text-strategy-development-description">
              We invest in long-term growth, providing our artists with the resources and creative freedom to realize their full potential.
            </p>
          </Card>
          <Card className="p-10 hover-elevate transition-transform duration-300 hover:-translate-y-2" data-testid="card-strategy-marketing">
            <div className="w-12 h-12 mb-6 mx-auto text-primary">
              <TrendingUp className="w-full h-full" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-center" data-testid="text-strategy-marketing-title">
              Innovative Digital Marketing
            </h3>
            <p className="text-center text-muted-foreground" data-testid="text-strategy-marketing-description">
              Our data-driven approach to digital marketing ensures our artists connect with a global audience in meaningful ways.
            </p>
          </Card>
          <Card className="p-10 hover-elevate transition-transform duration-300 hover:-translate-y-2" data-testid="card-strategy-licensing">
            <div className="w-12 h-12 mb-6 mx-auto text-primary">
              <Music className="w-full h-full" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-center" data-testid="text-strategy-licensing-title">
              High-Margin Sync Licensing
            </h3>
            <p className="text-center text-muted-foreground" data-testid="text-strategy-licensing-description">
              We proactively pursue high-value synchronization opportunities in film, television, and advertising to diversify artist revenue.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact/Invest Section */}
      <section
        id="contact"
        data-animate
        className={`py-20 px-[5%] max-w-[1400px] mx-auto transition-all duration-800 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        data-testid="section-contact"
      >
        <Card className="text-center p-20">
          <h2 className="font-serif font-bold text-[clamp(2rem,6vw,3.5rem)] mb-8" data-testid="text-contact-title">
            Join Us in Shaping the Future of Music.
          </h2>
          <p className="text-lg mb-10 max-w-[70ch] mx-auto" data-testid="text-contact-description">
            We are seeking strategic partners to accelerate our growth and expand our impact. For access to our comprehensive investor deck and to schedule a private consultation, please connect with us.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:-translate-y-1"
            data-testid="button-contact"
          >
            Request Investor Deck
          </Button>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-[5%] text-muted-foreground text-sm" data-testid="footer">
        <p data-testid="text-footer-copyright">© 2025 DGRP Baysound. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
