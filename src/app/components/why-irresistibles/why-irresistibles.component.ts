import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-why-irresistibles',
  templateUrl: './why-irresistibles.component.html',
  styleUrls: ['./why-irresistibles.component.scss']
})
export class WhyIrresistiblesComponent implements OnInit {

    public whyIrresistibles: Array<any> = [
        {
            img: '/assets/imgs/Por_Que_Naturales/IMG_1.png',
            smallTitle: 'Son',
            bigTitle: 'Tendencia',
            icon: '/assets/imgs/irresistiblesIcon1.png',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.'
        },
        {
            img: '/assets/imgs/Por_Que_Naturales/IMG_2.png',
            smallTitle: 'Ingredientes',
            bigTitle: 'Naturales',
            icon: '/assets/imgs/irresistiblesIcon1.png',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.'
        },
        {
            img: '/assets/imgs/Por_Que_Naturales/IMG_3.png',
            smallTitle: 'Alta',
            bigTitle: 'Calidad',
            icon: '/assets/imgs/irresistiblesIcon1.png',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.'
        },
        {
            img: '/assets/imgs/Por_Que_Naturales/IMG_4.png',
            smallTitle: 'Promueve una vida',
            bigTitle: 'Saludable',
            icon: '/assets/imgs/irresistiblesIcon1.png',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.'
        }
    ]

    constructor() { }

    ngOnInit(): void {

    }

   
}
