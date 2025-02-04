import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cart: any;
  searchQuery: string = ''; // A keresett kifejezés
  searchResult: any[] = [];  // A keresés eredményei

  // Például egy termék lista, amit kereshetünk
  products = [
    { name: 'Chipsek', category: 'Snack' },
    { name: 'Gumicukrok', category: 'Candy' },
    { name: 'Üdítők', category: 'Beverage' },
    { name: 'Sós Chipsek', category: 'Snack' },
    { name: 'Csípős Chipsek', category: 'Snack' },
    // További termékek...
  ];

  constructor(private cartServ: CartService) {
    this.cartServ.getCart().subscribe((res) => this.cart = res);
  }

  addOrder() {
    this.cartServ.order();
    console.log('Kosárba tett egy terméket');
  }

  // Keresési funkció
  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.searchResult = [];
    } else {
      this.searchResult = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    if (this.searchResult.length === 0) {
      alert('Nincs találat a keresésre!');
    }
  }
}
