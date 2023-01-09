import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.scss']
})
export class SolutionDetailComponent implements OnInit {

    public solutions: Array<any> = [
        {
            name: 'MOVIMIENTO CONSTANTE',
            img: 'assets/imgs/Soluciones/IMG_1.png',
            icon: 'assets/imgs/Soluciones/ICON_6.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_5.png',
            personName: 'Héctor',
            personJob: 'Contador',
            personAge: 35,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti. A error fugiat, minima magnam cumque nostrum est quis beatae amet illo magni vero soluta delectus numquam quasi tenetur sint eius temporibus libero, possimus omnis, ullam itaque. Repellat vel tempore, at velit explicabo sed esse quo debitis alias ab a.',
            reverse: false,
            products: [
                {
                    name: 'Nutrilite Daily Plus (90 tabs)',
                    img: 'assets/imgs/solution_product1.png'
                },
                {
                    name: 'Nutrilite Cal Mag D (90 tabs)',
                    img: 'assets/imgs/solution_product2.png'
                },
                {
                    name: 'Nutrilite Proteina Vegetal (450 gr)',
                    img: 'assets/imgs/solution_product3.png'
                }
            ]
        },
        {
            name: 'DESAFÍA TUS IDEAS',
            img: 'assets/imgs/Soluciones/IMG_2.png',
            icon: 'assets/imgs/Soluciones/ICON_1.png',
            solutionImg: 'assets/imgs/Soluciones/ICON_2.png',
            personName: 'Angélica',
            personJob: 'Madre',
            personAge: 35,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, corrupti. A error fugiat, minima magnam cumque nostrum est quis beatae amet illo magni vero soluta delectus numquam quasi tenetur sint eius temporibus libero, possimus omnis, ullam itaque. Repellat vel tempore, at velit explicabo sed esse quo debitis alias ab a.',
            reverse: true,
            products: [
                {
                    name: 'Nutrilite Omega 3 Plus (90 tabs)',
                    img: 'assets/imgs/solution_product4.png'
                },
                {
                    name: 'Nutrilite Daily Plus (90 tabs)',
                    img: 'assets/imgs/solution_product5.png'
                },
                {
                    name: 'Nutrilite C Plus (60 tabs)',
                    img: 'assets/imgs/solution_product6.png'
                }
            ]
        }
    ];

    public solution: any = {};


    constructor(private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params && params['id']){
                this.solution = this.solutions[params['id'] - 1];
            }else {
                this.navigateTo(['solutions']);
            }
        });
    }

    toggle(){
        let solutionCard: any = document.getElementById('solution_detail_card');

        solutionCard.classList.toggle('open');
    }

    navigateTo(route: Array<string>){
        this.router.navigate(route);
    }

}
