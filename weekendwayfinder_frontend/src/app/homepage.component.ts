import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-homepage',
  standalone: true,
  template: `
    <section class="homepage-main">
      <h1 class="homepage-title">Welcome to WeekendWayfinder!</h1>
      <p class="homepage-intro">
        Discover personalized micro-trip plans for your perfect weekend escape.<br>
        Input your location, budget, and mood to get inspired ideas—no signup required.<br>
        <span class="homepage-highlight">Start planning your getaway now!</span>
      </p>
      <img class="homepage-hero" alt="Travel theme illustration" src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1000&q=80" />
    </section>
  `,
  styles: [`
    .homepage-main {
      min-height: 100vh;
      background: linear-gradient(to bottom right, #E8F6FF 0%, #FFF6E2 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 80px;
      padding-bottom: 50px;
    }
    .homepage-title {
      font-size: 2.7rem;
      font-weight: 700;
      color: #1E90FF;
      text-shadow: 0 3px 16px #1E90FF26;
      margin-bottom: 18px;
      margin-top: 48px;
      text-align: center;
      letter-spacing: -0.04em;
    }
    .homepage-intro {
      max-width: 500px;
      font-size: 1.26rem;
      color: #222a;
      text-align: center;
      margin-bottom: 24px;
      line-height: 1.65;
    }
    .homepage-highlight {
      display: inline-block;
      background: #FFB34718;
      color: #FFB347;
      font-weight: 500;
      padding: 2.5px 10px;
      border-radius: 12px;
      margin-top: 11px;
      font-size: 1.13rem;
      margin-bottom: 7px;
    }
    .homepage-hero {
      width: 360px;
      max-width: 96vw;
      border-radius: 19px;
      margin-top: 9px;
      box-shadow: 0 5px 36px #1E90FF18, 0 2px 12px #FFB34722;
      border: 1px solid #1E90FF12;
      object-fit: cover;
      background: #fff;
    }
    @media (max-width: 710px) {
      .homepage-title { font-size: 2rem; }
      .homepage-intro { font-size: 1.05rem; }
      .homepage-hero { width: 99vw; }
    }
  `]
})
export class HomepageComponent {}
