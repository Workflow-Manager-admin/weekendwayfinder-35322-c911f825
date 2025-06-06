/* global setTimeout */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="wwf-signin-bg">
      <div class="wwf-overlay"></div>
      <form class="wwf-input-card wwf-signin-card" (ngSubmit)="onSubmit()" autocomplete="off">
        <h1>Sign In</h1>
        <div class="wwf-field">
          <label for="sign-in-email">Email</label>
          <input id="sign-in-email" name="email" type="email" [(ngModel)]="email" required
                 placeholder="your@email.com" autocomplete="username email" />
        </div>
        <div class="wwf-field">
          <label for="sign-in-password">Password</label>
          <input id="sign-in-password" name="password" type="password" [(ngModel)]="password" required
                 placeholder="Enter your password" autocomplete="current-password" />
        </div>
        <button type="submit" class="wwf-signin-btn" [disabled]="loading">
          {{ loading ? 'Signing In...' : 'Sign In' }}
        </button>
        <div *ngIf="error" class="wwf-signin-error">{{ error }}</div>
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
    .wwf-signin-card {
      margin-top: 0;
      width: 100%;
      max-width: 410px;
      background: rgba(255,255,255, 0.87);
      box-shadow: 0 8px 36px #1E90FF24, 0 2px 14px #1e90ff15;
      border-radius: 30px;
      padding: 2.2rem 2.2rem 1.44rem 2.2rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      z-index: 2;
      animation: cardFadeIn 0.9s cubic-bezier(.24,.79,.54,1.05) forwards;
      opacity: 0;
      transform: translateY(36px) scale(0.97);
    }
    @keyframes cardFadeIn {
      to {
        opacity: 1;
        transform: none;
      }
    }
    .wwf-signin-card h1 {
      color: #1E90FF;
      font-size: 2.003rem;
      letter-spacing: -0.041em;
      margin-bottom: 12px;
      font-weight: 700;
      text-align: center;
      text-shadow: 0 2px 10px #1E90FF30;
    }
    .wwf-field {
      margin-bottom: 17px;
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
      border: 1.3px solid #DDD;
      height: 2.2rem;
      font-size: 1.13rem;
      padding: 0.4rem 1.1rem;
      background: #fff;
      transition: border 0.19s;
    }
    .wwf-field input:focus {
      border: 1.5px solid #1E90FF;
      outline: none;
    }
    .wwf-signin-btn {
      background: linear-gradient(90deg, #1E90FF 85%, #FFB347 110%);
      color: #fff;
      border: none;
      border-radius: 22px;
      font-size: 1.14rem;
      font-weight: 600;
      padding: 0.82rem 0;
      margin-top: 2px;
      margin-bottom: 8px;
      box-shadow: 0 3px 10px #1E90FF22;
      cursor: pointer;
      transition: background 0.19s, box-shadow 0.17s, opacity 0.1s;
    }
    .wwf-signin-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    .wwf-signin-error {
      background: #ffb34718;
      color: #df3542;
      font-size: 0.99rem;
      border-radius: 10px;
      padding: 7px 12px 5px 12px;
      margin-top: 7px;
      text-align: center;
      border: 1px solid #FFB34730;
      font-weight: 500;
    }
    @media (max-width: 500px) {
      .wwf-signin-card {
        padding: 1.13rem 0.65rem 0.75rem 0.65rem;
        border-radius: 16px;
      }
    }
  `]
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  loading = false;
  error = '';

  // PUBLIC_INTERFACE
  onSubmit() {
    /** Dummy submission for demo; no real authentication. Shows error if email/password are empty. */
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Please enter both email and password.';
      return;
    }
    this.loading = true;
    setTimeout(() => {
      // Simulate "invalid" (as no backend in this demo)
      this.loading = false;
      this.error = 'Sign-in is disabled in demo mode.';
    }, 1100);
  }
}
