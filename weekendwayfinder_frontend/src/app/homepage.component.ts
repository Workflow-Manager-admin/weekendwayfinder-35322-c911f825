import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="homepage-main">
      <h1 class="homepage-title">Welcome to WeekendWayfinder!</h1>
      <p class="homepage-intro">
        Discover personalized micro-trip plans for your perfect weekend escape.<br>
        Input your location, budget, and mood to get inspired ideas—no signup required.<br>
        <span class="homepage-highlight">Start planning your getaway now!</span>
      </p>
      <div class="homepage-actions">
        <a
          class="wwf-theme-btn"
          routerLink="/"
          *ngIf="currentRoute !== '/' && currentRoute !== ''"
        >Main Trip Planner</a>
        <a
          class="wwf-theme-btn"
          routerLink="/sign-in"
        >Sign In</a>
      </div>
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
    .homepage-actions {
      margin-bottom: 20px;
      margin-top: 12px;
      display: flex;
      gap: 18px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .wwf-theme-btn {
      display: inline-block;
      background: linear-gradient(90deg,#1e90ff 70%,#ffb347 170%);
      color: #fff;
      border: none;
      border-radius: 21px;
      font-size: 1.13rem;
      font-weight: 600;
      padding: 0.75rem 1.68rem;
      margin: 2px 7px;
      box-shadow: 0 3px 17px #1E90FF32;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.17s, box-shadow 0.16s;
      letter-spacing: 0.02em;
    }
    .wwf-theme-btn:hover, .wwf-theme-btn:focus {
      filter: brightness(1.08);
      background: linear-gradient(90deg,#1e90ff 85%,#ffb347 140%);
      box-shadow: 0 5px 16px #1E90FF37;
      outline: none;
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
      .homepage-actions {
        flex-direction: column;
        gap: 11px;
      }
      .wwf-theme-btn {
        font-size: 1rem;
        padding: 0.6rem 1.25rem;
      }
    }
  `]
})
export class HomepageComponent {
  constructor(public router: Router) {}

  get currentRoute(): string {
    return this.router.url;
  }
}
