import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [ CommonModule ],
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

    public tools: Array<any> = [
        {
            img: 'assets/imgs/Herramientas/ICON_1.png',
            name: 'CATÁLOGO IRRESISTIBLE',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur rerum iusto nihil ratione perferendis recusandae repellat laborum nemo omnis ad, fugit, consectetur sint repellendus magni amet eveniet quis corrupti?'
        },
        {
            img: 'assets/imgs/Herramientas/ICON_2.png',
            name: 'LOOKS IRRESISTIBLES',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur rerum iusto nihil ratione perferendis recusandae repellat laborum nemo omnis ad, fugit, consectetur sint repellendus magni amet eveniet quis corrupti?'
        },
        {
            img: 'assets/imgs/Herramientas/ICON_3.png',
            name: 'PERFILES IRRESISTIBLES',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur rerum iusto nihil ratione perferendis recusandae repellat laborum nemo omnis ad, fugit, consectetur sint repellendus magni amet eveniet quis corrupti?'
        },
        {
            img: 'assets/imgs/Herramientas/ICON_4.png',
            name: 'INFOGRAFÍAS IRRESISTIBLES',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur rerum iusto nihil ratione perferendis recusandae repellat laborum nemo omnis ad, fugit, consectetur sint repellendus magni amet eveniet quis corrupti?'
        },
        {
            img: 'assets/imgs/Herramientas/ICON_5.png',
            name: 'ENTRENAMIENTOS IRRESISTIBLES',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur rerum iusto nihil ratione perferendis recusandae repellat laborum nemo omnis ad, fugit, consectetur sint repellendus magni amet eveniet quis corrupti?'
        },
        {
            img: 'assets/imgs/Herramientas/ICON_6.png',
            name: 'TOOLKIT EVENTO ABS´S',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aspernatur rerum iusto nihil ratione perferendis recusandae repellat laborum nemo omnis ad, fugit, consectetur sint repellendus magni amet eveniet quis corrupti?'
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
