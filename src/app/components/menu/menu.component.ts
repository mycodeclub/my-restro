import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../interfaces/menu-item';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  categories = ['Starters', 'Main Course', 'Desserts', 'Beverages'];
  selectedCategory = this.categories[0]; // Default to first category

  menuItems: MenuItem[] = [
    {
      id: 1,
      image: 'assets/images/menu/soup.jpg',
      title: 'Tomato Basil Soup',
      description: 'Fresh tomatoes blended with aromatic basil',
      fullPrice: 12.99,
      halfPrice: 7.99,
      category: 'Starters'
    },
    {
      id: 1,
      image: 'assets/images/menu/soup.jpg',
      title: 'Tomato Basil Soup',
      description: 'Fresh tomatoes blended with aromatic basil',
      fullPrice: 12.99,
      halfPrice: 7.99,
      category: 'Starters'
    },
    {
      id: 1,
      image: 'assets/images/menu/soup.jpg',
      title: 'Tomato Basil Soup',
      description: 'Fresh tomatoes blended with aromatic basil',
      fullPrice: 12.99,
      halfPrice: 7.99,
      category: 'Starters'
    },
    // Add more items as needed
  ];

  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }
}
