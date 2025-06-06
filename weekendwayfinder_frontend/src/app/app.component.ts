import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AppComponent {
  // Placeholder state for user input
  location: string = '';
  budget: number | '' = '';
  mood: string = '';

  // Placeholder moods
  moods = [
    { label: 'Adventurous', value: 'adventurous' },
    { label: 'Tired', value: 'tired' },
    { label: 'Romantic', value: 'romantic' },
    { label: 'Bored', value: 'bored' }
  ];

  // Placeholder trip suggestions (would be replaced by dynamic/AI data later)
  suggestions = [
    {
      destination: 'Coastal Getaway',
      activities: ['Beach walk', 'Seafood dining'],
      days: 2,
      food: 'Coastal cuisine',
      packing: 'Swimsuit, sunscreen, sandals',
      mood: 'romantic',
    },
    {
      destination: 'Mountain Adventure',
      activities: ['Hike', 'Campfire night'],
      days: 1,
      food: 'BBQ, local pub',
      packing: 'Hiking boots, jacket, snacks',
      mood: 'adventurous',
    },
  ];

  // Simulates dynamic filter for animated cards (future: would be reactive)
  get filteredSuggestions() {
    if (!this.mood) return this.suggestions;
    return this.suggestions.filter(s => s.mood === this.mood);
  }

  // PUBLIC_INTERFACE
  getMoodLabel(moodValue: string): string {
    /** Looks up human mood label for a given mood value. */
    const found = this.moods.find(x => x.value === moodValue);
    return found ? found.label : '';
  }
}
