import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { SwiperModule } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Navigation, Mousewheel, Virtual } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Mousewheel, Virtual ]);

declare var simpleParallax: any;
 

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, SwiperModule],
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

    public ingredients: Array<any> = [
        {
            img: 'assets/imgs/ingredient1.png',
            name: 'Espinaca',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient2.png',
            name: 'Rábano',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient3.png',
            name: 'Zanahoria',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient4.png',
            name: 'Arándano',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient5.png',
            name: 'Soya, Trigo y Gisantes',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient6.png',
            name: 'Algas marina calcificadas',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient7.png',
            name: 'Sierra, Anchoa y Sardina',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient8.png',
            name: 'L-Cisteína',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient9.png',
            name: 'Espirulina',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient10.png',
            name: 'Cereza Acerola',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        }
    ];
    public ingredients2: Array<any> = [
        {
            img: 'assets/imgs/ingredient5.png',
            name: 'Soya, Trigo y Gisantes',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient6.png',
            name: 'Algas marina calcificadas',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient7.png',
            name: 'Sierra, Anchoa y Sardina',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient8.png',
            name: 'L-Cisteína',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient9.png',
            name: 'Espirulina',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        },
        {
            img: 'assets/imgs/ingredient10.png',
            name: 'Cereza Acerola',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet dolores aliquid voluptas adipisci quam commodi cum asperiores, quia voluptate quo dolor temporibus provident rerum voluptates!'
        }
    ];
    public certifications: Array<any> = [
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit animi esse, neque molestias laboriosam in placeat officiis doloribus deleniti beatae id, assumenda ab sequi. Inventore, consequuntur accusantium. Dolorem repellendus tempora harum vero, quae laborum totam sunt ab aliquid dolore, ex autem saepe. Fugiat quod rem quae animi, nesciunt consequuntur?'
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit animi esse, neque molestias laboriosam in placeat officiis doloribus deleniti beatae id, assumenda ab sequi. Inventore, consequuntur accusantium. Dolorem repellendus tempora harum vero, quae laborum totam sunt ab aliquid dolore, ex autem saepe. Fugiat quod rem quae animi, nesciunt consequuntur?'
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sit animi esse, neque molestias laboriosam in placeat officiis doloribus deleniti beatae id, assumenda ab sequi. Inventore, consequuntur accusantium. Dolorem repellendus tempora harum vero, quae laborum totam sunt ab aliquid dolore, ex autem saepe. Fugiat quod rem quae animi, nesciunt consequuntur?'
        }
    ];

    public tab: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(){
        window.addEventListener("mousemove", this.mouseAnimations);
        window.addEventListener('scroll', this.scrollAnimations, true);
    }
    
    ngOnDestroy() {
        window.removeEventListener("mousemove", this.mouseAnimations);
        window.removeEventListener('scroll', this.scrollAnimations, true);
    }

    scrollAnimations(){
        let parallax1: any = document.getElementById('parallax1');
        let parallax2: any = document.getElementById('parallax2');

        let parallax3: any = document.getElementById('parallax3');
        let parallax4: any = document.getElementById('parallax4');

        parallax1.style.top = - (window.pageYOffset * 0.4) + 'px';

        parallax2.style.top = + (window.pageYOffset * 0.2) + 'px';
        parallax2.style.right = - (window.pageYOffset * 0.2) + 'px';

        parallax3.style.bottom = + (window.pageYOffset * 0.2) + 'px';
        parallax3.style.left = - (window.pageYOffset * 0.4) + 'px';

        parallax4.style.bottom = - (window.pageYOffset * 0.3) + 'px';
        parallax4.style.right = - (window.pageYOffset * 0.4) + 'px';
        
    }
    
    mouseAnimations(event: any) {
        let parallax1: any = document.getElementById('parallax1');
        let parallax2: any = document.getElementById('parallax2');

        let parallax3: any = document.getElementById('parallax3');
        let parallax4: any = document.getElementById('parallax4');

        const position = parallax1.getAttribute("value");

        const x = (window.innerWidth - event.pageX * position) / 250;
        const y = (window.innerHeight - event.pageY * position) / 250;

        if(event.pageX < (window.innerWidth / 2)){
            parallax1.style.left = - x + 'px';
            parallax3.style.left = - x + 'px';
            parallax2.style.right = - x + 'px';
            parallax4.style.right = - x + 'px';
        }else {
            parallax1.style.left = + x + 'px';
            parallax3.style.left = + x + 'px';
            parallax2.style.right = + x + 'px';
            parallax4.style.right = + x + 'px';
        }

        if(event.pageY < (window.innerHeight / 2)){
            parallax1.style.top = - y + 'px';
            parallax3.style.bottom = - y + 'px'; //
            parallax2.style.top = - y + 'px';
            parallax4.style.bottom = - y + 'px'; //
        }else {
            parallax1.style.top = + y + 'px';
            parallax3.style.bottom = + y + 'px'; //
            parallax2.style.top = + y + 'px';
            parallax4.style.bottom = + y + 'px'; //
        }
    }
}
