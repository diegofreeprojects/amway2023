import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

    public tools: Array<any> = [
        {
            id: 1,
            img: 'assets/imgs/Herramientas/ICON_1.png',
            name: 'CATÁLOGO IRRESISTIBLE',
            description: 'Para mostrarle a tus clientes la variedad de productos que tenemos para ellos, te recomendamos tener el catálogo de productos Irresistibles en tu celular, listo para mostrarlo.'
        },
        {
            id: 2,
            img: 'assets/imgs/Herramientas/ICON_2.png',
            name: 'LOOKS IRRESISTIBLES',
            description: 'Si quieres vender productos Naturalmente Irresistibles, vístete irresistible. En este paquete de recursos vas a encontrar fondos de pantalla, fondos para llamadas y otros elementos que identifican estos productos.'
        },
        {
            id: 3,
            img: 'assets/imgs/Herramientas/ICON_3.png',
            name: 'PERFILES IRRESISTIBLES',
            description: 'Lleva la información de tus posibles clientes a todo lugar descargando los siete perfiles, que diseñamos para ti, en tu celular.'
        },
        {
            id: 4,
            img: 'assets/imgs/Herramientas/ICON_4.png',
            name: 'INFOGRAFÍAS IRRESISTIBLES',
            description: 'Vuélvete experto con los beneficios de los ingredientes de los Naturalmente Irresistibles.'
        },
        {
            id: 5,
            img: 'assets/imgs/Herramientas/ICON_5.png',
            name: 'REPOSITORIO',
            description: 'Conoce los atributos de tus productos Naturalmente Irresistibles en un solo lugar.'
        },
        {
            id: 6,
            img: 'assets/imgs/Herramientas/ICON_6.png',
            name: 'TOOLKIT EVENTO ABS´S',
            description: 'Saber vender es algo que se aprende y se practica. Para formarte tenemos los Entrenamientos INA. Descarga el calendario de los próximos eventos y participa.'
        }
    ]

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    navigateTo(route: Array<string>){
        this.router.navigate(route);
    }

}
