import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule],
  template: `
    <main class="homepage-main-hero">
      <!-- Decorative Themed Icons -->
      <div class="themed-hero-icons" aria-hidden="true">
        <span class="icon-suitcase">🧳</span>
        <span class="icon-compass">🧭</span>
        <span class="icon-plane">✈️</span>
        <span class="icon-camera">📸</span>
        <span class="icon-map">🗺️</span>
      </div>
      <!-- Main Welcome -->
      <div class="homepage-welcome-card" aria-label="WeekendWayfinder Welcome">
        <img 
          class="homepage-big-hero-img"
          src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=900&q=80"
          alt="Travel inspiration: suitcase, journeys, maps"
        />
        <h1 class="homepage-title">
          Welcome to <span class="gradient-accent">WeekendWayfinder</span>
        </h1>
        <p class="homepage-lead">
          Your smart micro-trip planner for memorable weekends.<br>
          <span class="homepage-highlight">Let adventure find you—customized for your mood, style, and budget.</span>
        </p>
        <div class="homepage-actions">
          <a class="wwf-theme-btn" routerLink="/">Try the Trip Planner</a>
          <a class="wwf-theme-btn" routerLink="/sign-in">Sign In</a>
        </div>
        <div class="features-section">
          <h2 class="features-title">Key Features</h2>
          <ul class="features-list">
            <li><span class="feat-icon">🌎</span> <strong>Plan your perfect weekend getaway</strong> with a few quick clicks.</li>
            <li><span class="feat-icon">✨</span> Personalized, AI-powered trip ideas based on <strong>location, budget, and mood</strong>.</li>
            <li><span class="feat-icon">🎒</span> <strong>Packing lists, food, activities,</strong> and destination secrets—instantly!</li>
            <li><span class="feat-icon">🚫</span> <strong>No login needed</strong> (but sign in for bonus travel features & tips!)</li>
            <li><span class="feat-icon">🔄</span> <strong>Instant, dynamic suggestions</strong> as you plan—see ideas update live.</li>
            <li><span class="feat-icon">📱</span> Modern, mobile-ready, and <strong>travel-themed for every explorer</strong>.</li>
          </ul>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .homepage-main-hero {
      min-height: 100vh;
      background: linear-gradient(120deg, #E8F6FF 0%, #FFF6E2 90%);
      padding: 0;
      position: relative;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }
    .homepage-welcome-card {
      background: rgba(255,255,255,0.96);
      border-radius: 32px;
      max-width: 480px;
      width: 97vw;
      gap: 0.9rem;
      margin: 64px auto 0 auto;
      box-shadow: 0 7px 44px #1E90FF28, 0 2px 18px #FFB34723;
      padding: 2.8rem 2.4rem 2rem 2.4rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 4;
      animation: cardFadeIn 0.7s cubic-bezier(.24,.79,.54,1.05) 0.07s forwards;
      opacity: 0;
      transform: translateY(33px) scale(0.98);
    }
    @keyframes cardFadeIn {
      to {
        opacity: 1;
        transform: none;
      }
    }
    .homepage-title {
      font-size: 2.7rem;
      font-weight: 750;
      color: #1E90FF;
      letter-spacing: -0.035em;
      margin-bottom: 6px;
      margin-top: 18px;
      line-height: 1.13;
      text-shadow: 0 5px 21px #1E90FF17;
    }
    .gradient-accent {
      background: linear-gradient(90deg,#1e90ff 65%,#ffb347 136%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      font-weight: 800;
      text-shadow: 0 3px 11px #1e90ff26;
    }
    .homepage-lead {
      font-size: 1.20rem;
      color: #264d77bb;
      margin-top: 3px;
      margin-bottom: 22px;
      max-width: 388px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.62;
    }
    .homepage-highlight {
      display: inline-block;
      background: #FFB34723;
      color: #FFB347;
      font-weight: 600;
      padding: 3px 12px;
      border-radius: 10px;
      margin-top: 9px;
      font-size: 1.09rem;
      margin-bottom: 8px;
    }
    .homepage-actions {
      display: flex;
      justify-content: center;
      gap: 18px;
      margin-bottom: 20px;
      margin-top: 2px;
      flex-wrap: wrap;
    }
    .wwf-theme-btn {
      display: inline-block;
      background: linear-gradient(90deg,#1e90ff 70%,#ffb347 170%);
      color: #fff !important;
      border: none;
      border-radius: 21px;
      font-size: 1.15rem;
      font-weight: 700;
      padding: 0.77rem 1.61rem;
      box-shadow: 0 3px 17px #1E90FF23;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.17s, box-shadow 0.15s;
      letter-spacing: 0.018em;
      margin: 2px 4px;
    }
    .wwf-theme-btn:hover, .wwf-theme-btn:focus {
      filter: brightness(1.085);
      background: linear-gradient(90deg,#1e90ff 85%,#ffb347 135%);
      box-shadow: 0 10px 30px #1E90FF28;
      outline: none;
    }
    .homepage-big-hero-img {
      width: 92px;
      height: 92px;
      border-radius: 38px;
      margin-top: -57px;
      margin-bottom: 5px;
      box-shadow: 0 10px 40px #1E90FF14, 0 2px 12px #FFB34715;
      object-fit: cover;
      border: 2.5px solid #fff;
      background: #fff;
      z-index: 6;
      transition: box-shadow 0.17s;
    }
    @media (max-width: 530px) {
      .homepage-welcome-card { padding: 1.06rem 0.51rem 1.33rem 0.51rem; border-radius: 19px; }
      .homepage-title { font-size: 1.44rem; margin-top: 11px; }
      .homepage-lead { font-size: 1.05rem; }
      .homepage-actions { flex-direction: column; gap: 10px; }
      .homepage-big-hero-img { width: 57px; height: 57px; }
      .features-section { margin-top: 20px; }
    }
    /* Feature Highlights Section */
    .features-section {
      margin-top: 30px;
      background: linear-gradient(120deg,#fff6e2aa 0%,#e8f6ffcc 90%);
      border-radius: 16px;
      box-shadow: 0 3px 14px #ffb34711, 0 1.2px 5px #1e90ff13;
      padding: 1.13rem 1.2rem 1rem 1.2rem;
      text-align: left;
      max-width: 352px;
      margin-left: auto;
      margin-right: auto;
      font-size: 1.07rem;
    }
    .features-title {
      color: #1E90FF;
      font-weight: bold;
      font-size: 1.14rem;
      margin: 0 0 10px 0;
      letter-spacing: 0.8px;
      text-align: center;
    }
    .features-list {
      list-style: none;
      padding-left: 0;
      margin: 0;
      color: #222b;
      display: flex;
      flex-direction: column;
      gap: 7.5px;
    }
    .feat-icon {
      font-size: 1.15rem;
      margin-right: 7px;
      filter: drop-shadow(0 2px 6px #1e90ff21);
    }
    /* Decorative Adventure Icons Row */
    .themed-hero-icons {
      position: absolute;
      top: 19px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: row;
      gap: 24px;
      font-size: 2.4rem;
      z-index: 7;
      filter: drop-shadow(0 9px 22px #1e90ff19);
      opacity: 0.92;
      pointer-events: none;
      user-select: none;
    }
    .icon-suitcase, .icon-compass, .icon-plane, .icon-camera, .icon-map {
      text-shadow: 0 6px 10px #1e90ff20;
    }
    @media (max-width: 430px) {
      .themed-hero-icons { font-size: 1.3rem; gap: 8px; top: 10px;}
    }
  `]
})
export class HomepageComponent {
  // Route stub for conditionally hiding buttons (not actual route logic)
  get currentRoute(): string {
    return '/';
  }
}
