import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  // Moods for UI filter
  moods = [
    { label: 'Adventurous', value: 'adventurous' },
    { label: 'Tired', value: 'tired' },
    { label: 'Romantic', value: 'romantic' },
    { label: 'Bored', value: 'bored' }
  ];

  // Suggestions
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
    {
      destination: 'City Explorer',
      activities: ['Museum visit', 'Café hopping', 'Street art tour'],
      days: 2,
      food: 'Trendy brunch, food trucks',
      packing: 'Comfortable shoes, camera, city map',
      mood: 'bored',
    },
    {
      destination: 'Winery Weekend',
      activities: ['Vineyard tour', 'Wine tasting', 'Picnic on the hills'],
      days: 2,
      food: 'Charcuterie, artisan cheese',
      packing: 'Sunglasses, picnic blanket, light sweater',
      mood: 'romantic',
    },
    {
      destination: 'Forest Cabin Escape',
      activities: ['Reading by the fire', 'Forest stroll'],
      days: 2,
      food: 'Home-cooked comfort food',
      packing: 'Books, warm socks, board games',
      mood: 'tired',
    },
    {
      destination: 'Lakeside Daycation',
      activities: ['Kayaking', 'Sunbathing', 'Fishing'],
      days: 1,
      food: 'Packed lunch, lemonade',
      packing: 'Swimsuit, paddle, fishing rod',
      mood: 'adventurous',
    },
    {
      destination: 'Historic Town Ramble',
      activities: ['Antique shopping', 'Local guided tour', 'Boutique browsing'],
      days: 1,
      food: 'Bakery treats, farmer’s market lunch',
      packing: 'Shoulder bag, walking shoes, notebook',
      mood: 'bored',
    },
    {
      destination: 'Spa and Wellness Retreat',
      activities: ['Massage', 'Hot springs soak', 'Yoga session'],
      days: 2,
      food: 'Nourishing salads, herbal teas',
      packing: 'Bathrobe, yoga mat, skincare kit',
      mood: 'tired',
    },
    {
      destination: 'Countryside Cycle Ride',
      activities: ['Bicycle tour', 'Picnic in fields'],
      days: 1,
      food: 'Sandwiches, fresh fruit',
      packing: 'Bicycle, helmet, energy bar',
      mood: 'adventurous',
    },
    {
      destination: 'Art & Culture Hop',
      activities: ['Gallery visit', 'Indie film matinee', 'Open mic night'],
      days: 2,
      food: 'Fusion cuisine, coffee breaks',
      packing: 'Notepad, stylish outfit, tickets',
      mood: 'bored',
    },
    {
      destination: 'Secluded Beach Picnic',
      activities: ['Seashell collecting', 'Sunset photos', 'Sandcastle contest'],
      days: 1,
      food: 'Fresh fruit, juice, wraps',
      packing: 'Beach blanket, hat, speaker for music',
      mood: 'romantic',
    },
    {
      destination: 'Sleep-in Staycation',
      activities: ['Netflix binge', 'Ordering takeout', 'Bubble bath'],
      days: 1,
      food: 'Comfort takeout, hot cocoa',
      packing: 'Pajamas, bath salts, face mask',
      mood: 'tired',
    },
    {
      destination: 'Local Food Adventure',
      activities: ['Farmers market tour', 'Cooking class', 'Food crawl'],
      days: 1,
      food: 'Self-made treats, street snacks',
      packing: 'Shopping tote, recipe book, portable utensils',
      mood: 'adventurous',
    }
  ];

  constructor(public router: Router) {}

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

  // For SSR-safe nav state
  get currentRoute(): string {
    return this.router.url;
  }
}
