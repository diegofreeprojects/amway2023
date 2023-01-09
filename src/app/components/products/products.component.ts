import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SwiperModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    public products: Array<any> = [
        { id: 1, name: 'Daily Plus', img: 'assets/imgs/Productos/IMG_7.png' },
        { id: 2, name: 'Cal Mag D', img: 'assets/imgs/Productos/IMG_8.png' },
        { id: 3, name: 'Proteina Vegetal', img: 'assets/imgs/Productos/IMG_9.png' },
        { id: 4, name: 'Omega 3 Plus', img: 'assets/imgs/Productos/IMG_10.png' },
        { id: 5, name: 'C Plus', img: 'assets/imgs/Productos/IMG_11.png' },
        { id: 6, name: 'B Plus', img: 'assets/imgs/Productos/IMG_1.png' },
        { id: 7, name: 'HSN', img: 'assets/imgs/Productos/IMG_2.png' },
        { id: 8, name: 'Agua Micelar', img: 'assets/imgs/Productos/IMG_3.png' },
        { id: 9, name: 'Pasta de Dientes', img: 'assets/imgs/Productos/IMG_4.png' },
        { id: 10, name: 'L.O.C. Limpiador Multiusos', img: 'assets/imgs/Productos/IMG_5.png' }
    ];
    
    public breakpoints: any = {
        '300': { slidesPerView: 1, spaceBetween: 20 },
        '375': { slidesPerView: 1, spaceBetween: 20 },
        '500': { slidesPerView: 1, spaceBetween: 20 },
        '700': { slidesPerView: 3, spaceBetween: 20 },
        '1024': { slidesPerView: 4, spaceBetween: 20 },
        '1200': { slidesPerView: 5, spaceBetween: 20 },
    };

    constructor(private router: Router) { }

    ngOnInit(): void {
    }
    
    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }

}
