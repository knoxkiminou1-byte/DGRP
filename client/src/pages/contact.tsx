import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import logoImg from "@assets/Untitled design (84)_1759813160799.png";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
        <div className="flex justify-between items-center px-[5%] py-6">
          <div className="h-16" data-testid="logo">
            <img src={logoImg} alt="DGRP Baysound" className="h-full w-auto" />
          </div>
          <Button
            variant="ghost"
            asChild
            data-testid="button-back"
          >
            <a href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Button>
        </div>
      </header>

      <main className="pt-32 pb-24 px-[5%] max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif font-bold text-[clamp(2.5rem,8vw,4rem)] mb-6" data-testid="text-contact-heading">
            Let's Connect
          </h1>
          <p className="text-lg text-muted-foreground max-w-[60ch] mx-auto" data-testid="text-contact-subheading">
            Interested in partnering with DGRP Baysound? Fill out the form below and we'll send you our comprehensive investor deck and schedule a private consultation.
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" data-testid="label-name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                data-testid="input-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" data-testid="label-email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                data-testid="input-email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" data-testid="label-company">Company/Organization</Label>
              <Input
                id="company"
                type="text"
                placeholder="Your company name"
                data-testid="input-company"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="interest" data-testid="label-interest">Investment Interest</Label>
              <Textarea
                id="interest"
                placeholder="Tell us about your investment goals and interests..."
                className="min-h-[120px]"
                data-testid="textarea-interest"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider"
              data-testid="button-submit"
            >
              Request Investor Deck
            </Button>
          </form>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-privacy">
            Your information is confidential and will only be used to send you our investor materials.
          </p>
        </div>
      </main>

      <footer className="text-center py-8 px-[5%] text-muted-foreground text-sm border-t border-border" data-testid="footer">
        <p data-testid="text-footer-copyright">© 2025 DGRP Baysound. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
