import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

    public countries: Array<any> = [
        'assets/imgs/Compras/IMG_1.png',
        'assets/imgs/Compras/IMG_2.png',
        'assets/imgs/Compras/IMG_3.png',
        'assets/imgs/Compras/IMG_4.png',
        'assets/imgs/Compras/IMG_5.png',
        'assets/imgs/Compras/IMG_6.png',
        'assets/imgs/Compras/IMG_7.png',
        'assets/imgs/Compras/IMG_8.png',
        'assets/imgs/Compras/IMG_9.png',
        'assets/imgs/Compras/IMG_10.png'
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
