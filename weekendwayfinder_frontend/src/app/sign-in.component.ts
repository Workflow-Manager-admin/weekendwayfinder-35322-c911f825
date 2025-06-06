/* global setTimeout */
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="wwf-signin-bg">
      <div class="wwf-overlay"></div>
      <!-- Themed Travel Illustration -->
      <img
        src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=520&q=80"
        alt="Travel suitcase and destination icons"
        class="wwf-travel-illustration"
        aria-hidden="true"
      />
      <form
        class="wwf-input-card wwf-signin-card"
        (ngSubmit)="onSubmit(signInForm)"
        #signInForm="ngForm"
        autocomplete="off"
        aria-label="Sign in to WeekendWayfinder"
        novalidate
      >
        <h1 class="wwf-signin-welcome">
          🧭 Welcome Back, Explorer!
        </h1>
        <div class="wwf-signin-info">
          <span aria-live="polite">
            <strong>Sign in to your WeekendWayfinder adventure!</strong>
            <br>
            <span class="wwf-highlight">Your next micro-trip is just moments away.</span><br>
            <span class="wwf-howto">No account yet? No worries—most features are available without logging in.<br>Sign in for personalized trip history, exclusive travel tips, and special event highlights!</span>
          </span>
        </div>
        <ul class="wwf-signin-benefits" aria-label="Benefits of signing in">
          <li><span aria-label="star">⭐</span> Save favorite weekend plans & access past adventures</li>
          <li><span aria-label="compass">🧭</span> Get AI-powered suggestions tailored just for you</li>
          <li><span aria-label="plane">✈️</span> Unlock new destinations and travel deals</li>
          <li><span aria-label="check">✅</span> Exclusive packing tips for your mood & style</li>
        </ul>
        <div class="wwf-signin-instructions">
          <div class="wwf-instructions-title" id="instructions-title"><strong>How to sign in:</strong></div>
          <ol aria-labelledby="instructions-title">
            <li>Enter your <strong>Email</strong> address</li>
            <li>Type your <strong>Password</strong> (min 5 characters)</li>
            <li>Click <span style="color:#1E90FF;font-weight:600;">Sign In →</span> to begin your adventure!</li>
          </ol>
          <span style="display:block; font-size:0.97rem; color:#377CBA; margin-top:4px;">Forgot your password? <a class="wwf-forgot-link" tabindex="0" href="#" (click)="openForgotDialog($event)">Reset here</a></span>
        </div>

        <!-- Forgot password dialog (pseudo-modal for demo; not real password logic) -->
        <section
          class="wwf-forgot-modal"
          *ngIf="forgotOpen"
          role="dialog"
          aria-modal="true"
          aria-labelledby="forgot-title"
        >
          <div class="wwf-forgot-content">
            <div id="forgot-title" class="wwf-forgot-title">🔑 Forgot Password</div>
            <p class="wwf-forgot-desc">Password recovery is currently disabled for demo accounts.<br>
              Please try signing in with any test credentials.
            </p>
            <button type="button" class="wwf-theme-btn wwf-forgot-close" (click)="closeForgotDialog()">
              Close
            </button>
          </div>
        </section>

        <!-- Email Field with thematic helper, hint, and validation error -->
        <div class="wwf-field">
          <label for="sign-in-email">Email<br>
            <span class="wwf-accessibility-desc">Required for sign-in</span>
          </label>
          <input
            id="sign-in-email"
            name="email"
            type="email"
            [(ngModel)]="email"
            #emailRef="ngModel"
            required
            placeholder="e.g. wanderer@weekends.com"
            aria-describedby="email-helper email-error"
            autocomplete="username email"
            (blur)="markTouched('email')"
            [ngClass]="{'wwf-field-error': touched.email && emailRef.invalid}"
            spellcheck="false"
          />
          <div id="email-helper" class="wwf-field-helper">
            We'll send itinerary inspiration to your inbox!
          </div>
          <div
            id="email-error"
            class="wwf-signin-inline-error"
            aria-live="polite"
            *ngIf="touched.email && emailRef.invalid"
          >
            <ng-container *ngIf="emailRef.errors?.['required']"
              >Email is required.</ng-container
            >
            <ng-container *ngIf="emailRef.errors?.['email'] && !emailRef.errors?.['required']"
              >Please enter a valid email address.</ng-container
            >
          </div>
        </div>

        <!-- Password Field with thematic helper and validation error -->
        <div class="wwf-field">
          <label for="sign-in-password">Password<br>
            <span class="wwf-accessibility-desc">Required (min 5 characters)</span>
          </label>
          <input
            id="sign-in-password"
            name="password"
            type="password"
            [(ngModel)]="password"
            #passwordRef="ngModel"
            required
            minlength="5"
            placeholder="Travel password (min 5 chars)"
            aria-describedby="password-helper password-error"
            autocomplete="current-password"
            (blur)="markTouched('password')"
            [ngClass]="{'wwf-field-error': touched.password && passwordRef.invalid}"
          />
          <div id="password-helper" class="wwf-field-helper">
            For demo: any password (min 5 chars) – secure your adventures!
          </div>
          <div
            id="password-error"
            class="wwf-signin-inline-error"
            aria-live="polite"
            *ngIf="touched.password && passwordRef.invalid"
          >
            <ng-container *ngIf="passwordRef.errors?.['required']"
              >Password is required.</ng-container
            >
            <ng-container *ngIf="passwordRef.errors?.['minlength'] && !passwordRef.errors?.['required']"
              >Password must be at least 5 characters.</ng-container
            >
          </div>
        </div>

        <!-- Feedback/error messages (general/form error) -->
        <div
          *ngIf="error"
          class="wwf-signin-error"
          aria-live="polite"
        >
          {{ error }}
        </div>

        <!-- Sign-In Button, live feedback for loading, disables during submission -->
        <button
          type="submit"
          class="wwf-signin-btn"
          [disabled]="loading"
          [attr.aria-disabled]="loading"
        >
          <span *ngIf="!loading">Sign In &rarr;</span>
          <span *ngIf="loading">
            <span class="wwf-signin-spinner" aria-hidden="true"></span>
            Signing In...
          </span>
        </button>

        <!-- Navigation: Home/Planner, themed and accessible -->
        <div class="wwf-signin-nav-row">
          <a class="wwf-theme-btn" routerLink="/">Main Planner</a>
          <a class="wwf-theme-btn" routerLink="/">Home</a>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .wwf-signin-bg {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background: linear-gradient(to bottom right, rgba(30,144,255,0.16), rgba(255,179,71,0.07)),
        url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1280&q=80') center/cover no-repeat;
    }
    .wwf-travel-illustration {
      position: absolute;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
      width: 86px;
      height: 86px;
      border-radius: 21px;
      box-shadow: 0 6px 32px #1E90FF34;
      z-index: 3;
      object-fit: cover;
      background: #fff;
      outline: 4px solid #FFF;
      border: 1.5px solid #1E90FF19;
      pointer-events: none;
      opacity: 0.98;
      transition: box-shadow 0.2s;
    }
    @media (max-width:530px) {
      .wwf-travel-illustration { width: 52px; height: 52px; top: 2.8%; }
    }
    .wwf-signin-card {
      margin-top: 60px;
      width: 100%;
      max-width: 410px;
      background: rgba(255,255,255, 0.89);
      box-shadow: 0 8px 36px #1E90FF24, 0 2px 14px #1e90ff15;
      border-radius: 30px;
      padding: 2.2rem 2.2rem 1.44rem 2.2rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      z-index: 2;
      animation: cardFadeIn 0.8s cubic-bezier(.24,.79,.54,1.05) forwards;
      opacity: 0;
      transform: translateY(26px) scale(0.97);
    }
    .wwf-signin-card h1,
    .wwf-signin-welcome {
      color: #1E90FF;
      font-size: 2.03rem;
      letter-spacing: -0.041em;
      margin-bottom: 8px;
      font-weight: 700;
      text-align: center;
      text-shadow: 0 2px 10px #1E90FF30;
    }
    .wwf-signin-info {
      color: #3372ba;
      margin-bottom: 13px;
      text-align: center;
      font-size: 1.14rem;
      font-weight: 500;
      line-height: 1.45;
    }
    .wwf-signin-benefits {
      margin: 0;
      margin-bottom: 12px;
      padding: 0 0 0 19px;
      font-size: 1.07rem;
      color: #1E90FFdd;
      list-style-type: star;
      line-height: 1.6;
    }
    .wwf-signin-benefits li {
      margin-bottom: 2px;
      font-weight: 500;
      letter-spacing: 0.01em;
      text-align: left;
    }
    .wwf-signin-instructions {
      font-size: 1.07rem;
      color: #225a9d;
      background: #E8F6FF33;
      border-radius: 9px;
      padding: 8px 11px 8px 17px;
      margin-bottom: 9px;
      margin-top: 9px;
      line-height: 1.48;
      box-shadow: 0 2px 8px #1E90FF14;
    }
    .wwf-instructions-title {
      color: #1E90FF;
      font-size: 1.09rem;
      margin-bottom: 2px;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
    .wwf-signin-instructions ol {
      font-size: 0.99rem;
      margin: 0 0 4px 23px;
      padding: 0;
      color: #2b3455;
    }
    .wwf-forgot-link {
      color: #1E90FF;
      font-weight: 600;
      text-decoration: underline;
      cursor: pointer;
      margin-left: 2px;
    }
    .wwf-forgot-link:hover, .wwf-forgot-link:focus {
      color: #FFB347;
      outline: none;
    }
    .wwf-highlight {
      color: #FFB347;
      font-weight: 600;
      background: #ffb34722;
      padding: 2px 9px;
      border-radius: 10px;
      font-size:1.03rem;
      margin-left: 3px;
    }
    .wwf-accessibility-desc {
      font-size: 0.97rem;
      color: #888;
      font-weight: 400;
      letter-spacing: 0.01em;
      display:inline-block;
      margin: 0 0 0 6px;
    }
    .wwf-howto {
      font-size: 0.97rem;
      color: #3d7cb7;
      font-weight: 400;
      display: block;
      margin-top: 8px;
      margin-bottom: 3px;
      letter-spacing: 0.01em;
    }
    .wwf-forgot-modal {
      background: rgba(30,144,255,0.18);
      border-radius: 18px;
      box-shadow: 0 9px 30px #1E90FF45;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 34;
      animation: modalFadeIn 0.31s cubic-bezier(.28, .7, .63, 1.1);
    }
    .wwf-forgot-content {
      background: #fff;
      border-radius: 13px;
      max-width: 340px;
      min-width: 235px;
      padding: 1.4rem 1.25rem 1.1rem 1.25rem;
      box-shadow: 0 5px 22px #1E90FF18;
      text-align: center;
    }
    .wwf-forgot-title {
      font-size: 1.19rem;
      font-weight: 700;
      color: #1E90FF;
      margin-bottom: 0.7rem;
      text-shadow: 0 2px 10px #1E90FF09;
    }
    .wwf-forgot-desc {
      color: #2B3455;
      font-size: 1rem;
      margin-bottom: 1.1rem;
      line-height: 1.48;
    }
    .wwf-forgot-close {
      margin-top: 5px;
      background: linear-gradient(110deg, #1E90FF 90%, #FFB347 116%);
      color: #fff;
      border: none;
      border-radius: 14px;
      padding: 0.47rem 1.07rem;
      font-weight: 600;
      cursor: pointer;
      box-shadow: 0 2.5px 8px #1E90FF22;
      font-size: 1.01rem;
      transition: background 0.14s, box-shadow 0.14s;
    }
    .wwf-forgot-close:focus, .wwf-forgot-close:hover {
      filter: brightness(1.11);
      background: linear-gradient(105deg, #1E90FF 100%, #FFB347 120%);
      outline: none;
    }
    .wwf-field {
      margin-bottom: 18px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .wwf-field label {
      color: #1E90FF;
      font-weight: 500;
      margin-bottom: 2px;
      font-size: 1.08rem;
    }
    .wwf-field input {
      border-radius: 16px;
      border: 1.2px solid #DDD;
      height: 2.22rem;
      font-size: 1.13rem;
      padding: 0.38rem 1.1rem;
      background: #fff;
      transition: border 0.16s;
    }
    .wwf-field input:focus {
      border: 1.7px solid #1E90FF;
      outline: none;
    }
    .wwf-field-helper {
      color: #1E90FFCC;
      font-size: 0.97rem;
      margin-top: 2.2px;
    }
    .wwf-signin-inline-error {
      margin-top: 1px;
      color: #df3542;
      background: none;
      font-size: 0.94rem;
      padding-left: 1px;
      padding-bottom: 0;
      padding-top: 0;
    }
    .wwf-field-error {
      border: 1.6px solid #df3542 !important;
      background: #ffeceb;
    }
    .wwf-signin-btn {
      background: linear-gradient(90deg, #1E90FF 85%, #FFB347 110%);
      color: #fff;
      border: none;
      border-radius: 22px;
      font-size: 1.19rem;
      font-weight: 600;
      padding: 0.85rem 0;
      margin-top: 4px;
      margin-bottom: 12px;
      box-shadow: 0 3px 10px #1E90FF22;
      cursor: pointer;
      transition: background 0.16s, box-shadow 0.16s, opacity 0.1s;
    }
    .wwf-signin-btn:disabled, .wwf-signin-btn[aria-disabled="true"] {
      opacity: 0.68;
      cursor: not-allowed;
    }
    .wwf-signin-spinner {
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      border: 2.2px solid #FFB34733;
      border-top: 2.2px solid #1E90FF;
      border-radius: 50%;
      margin-right: 8px;
      vertical-align: sub;
      animation: signinSpin 0.85s linear infinite;
    }
    @keyframes signinSpin {
      0% { transform: rotate(0deg);}
      100% { transform: rotate(360deg);}
    }
    .wwf-signin-nav-row {
      display: flex;
      gap: 11px;
      justify-content: center;
      margin-top: 14px;
    }
    .wwf-theme-btn {
      display: inline-block;
      background: linear-gradient(90deg,#1e90ff 70%,#ffb347 170%);
      color: #fff !important;
      border: none;
      border-radius: 18px;
      font-size: 1.02rem;
      font-weight: 600;
      padding: 0.6rem 1.16rem;
      margin: 0 1px;
      box-shadow: 0 2.5px 10px #1E90FF22;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.14s, box-shadow 0.14s;
      letter-spacing: 0.01em;
    }
    .wwf-theme-btn:hover, .wwf-theme-btn:focus {
      filter: brightness(1.08);
      background: linear-gradient(90deg,#1e90ff 85%,#ffb347 130%);
      box-shadow: 0 4px 14px #1E90FF27;
      outline: none;
      color: #fff;
    }
    .wwf-signin-error {
      background: #ffb34718;
      color: #df3542;
      font-size: 1.07rem;
      border-radius: 10px;
      padding: 7px 12px 5px 12px;
      margin-top: 6px;
      text-align: center;
      border: 1px solid #FFB34730;
      font-weight: 500;
      letter-spacing: 0.02em;
    }
    @media (max-width: 600px) {
      .wwf-signin-card {
        padding: 1.13rem 0.69rem 0.92rem 0.69rem;
        border-radius: 15px;
      }
      .wwf-signin-info { font-size: 1.01rem;}
      .wwf-signin-nav-row {
        flex-direction: column;
        gap: 7px;
      }
      .wwf-theme-btn {
        font-size: 0.97rem;
        padding: 0.49rem 0.93rem;
        border-radius: 12px;
      }
    }
    @keyframes cardFadeIn {
      to {
        opacity: 1;
        transform: none;
      }
    }
  `]
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  loading = false;
  error = '';
  touched = { email: false, password: false };

  forgotOpen = false;

  // PUBLIC_INTERFACE
  markTouched(field: 'email' | 'password') {
    /** Mark a specific field as touched (for showing validation errors on blur) */
    this.touched[field] = true;
  }

  // PUBLIC_INTERFACE
  openForgotDialog(ev?: Event) {
    /** Opens the forgot password demo modal */
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    this.forgotOpen = true;
  }

  // PUBLIC_INTERFACE
  closeForgotDialog() {
    /** Closes the forgot password modal */
    this.forgotOpen = false;
  }

  // PUBLIC_INTERFACE
  onSubmit(form: NgForm) {
    /**
     * Handles form submission (demo: disables real authentication).
     * Validates required fields and shows proper error feedback.
     * Displays loading feedback.
     */
    this.error = '';
    this.touched.email = true;
    this.touched.password = true;

    if (form.invalid) {
      this.error = "Please fix the highlighted fields before signing in.";
      return;
    }

    // Simulate loading and a generic error for demo (no backend)
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.error = 'Sign-in is disabled in demo mode. (Try the main planner instead!)';
    }, 1100);
  }
}
