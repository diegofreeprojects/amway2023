import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

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
            img: 'assets/imgs/Ingredientes/IMG_14.png',
            name: 'Alfalfa',
            description: 'Contiene vitamina A la cual es liposoluble y contribuye a la formación y mantenimiento de dientes, tejidos, membranas y piel sanos, además de tener importantes funciones en la vista.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_6.png',
            name: 'Algas marinas calcificadas',
            description: 'Las algas calcificadas de cultivo en su entorno natural, que se encuentran en la costa de Islandia, son una de las fuentes más concentradas de calcio y magnesio naturales. '
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_4.png',
            name: 'Arándano',
            description: 'Contiene ácido elágico que contribuye a la restauración del sistema celular y antocinidina el cual es un grupo de fitonutrientes que tiene fuertes propiedades antioxidantes que contribuyen a la salud del corazón. '
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_15.png',
            name: 'Berro',
            description: 'Contiene fitonutrientes como Isotiocianato, luteína, zeaxantina, isoflavonas y EGCG, los cuales entre otras cosas ayudan a mantener saludables los niveles de colesterol en la sangre y favorece la función vascular y un saludable crecimiento celular.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_10.png',
            name: 'Cereza Acerola',
            description: 'Cultivado en la Fazenda Amway Nutrilite™ do Brasil. Estas cerezas crean un extracto excepcionalmente rico en antioxidantes, vitamina C y otros fitonutrientes. Entre sus beneficios está la reducción de fatiga, formación de colágeno, apoya en la cicatrización y ayuda a regular el estrés.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_1.png',
            name: 'Espinaca',
            description: 'La espinaca contiene una mezcla rica en nutrientes de carotenoides, vitamina C, vitamina K, ácido fólico, hierro y calcio, así como luteína, kaempferol, nitratos y otros compuestos vegetales para apoyar una salud óptima.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_9.png',
            name: 'Espirulina',
            description: 'Alga microscópica que posee forma de espiral, de color azul verdoso, es rica en proteínas y hierro por lo que es ideal para vegetarianos, además de su alto contenido en vitamina B12, Betacaroteno, Calcio, Fosforo y Vitamina E.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_17.png',
            name: 'Extracto de semilla de uva',
            description: 'Contiene altos niveles de fitonutrientes y son ricas en ingredientes antioxidantes que ayudan a proteger a tu cuerpo de los radicales libres, además contienen resveratrol que contribuye a la salud del corazón.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_8.png',
            name: 'L-Cisteína',
            description: 'Aminoácido presente en la proteína que ayuda a la formación de la piel y es básico en los procesos de desintoxicación.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_21.png',
            name: 'Levadura de cerveza',
            description: 'Es una de las mejores fuentes naturales de vitaminas del complejo B, ayudaa en el funcionamiento del sistema nervioso. Interviene en el metabolismo y en el crecimiento ymantenimiento de la piel.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_20.png',
            name: 'Limón',
            description: 'Contiene fitonutrientes como el betacaroteno y el alfacaroteno los cuáles contribuyen a la salud de la visión, ayudan a mantener la hidratación de la piel y favorecen un saludable funcionamiento del sistema inmunológico.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_19.png',
            name: 'Mandarina',
            description: 'Contiene Hesperidina la cual es parte de la familia de los Fitonutrientes conocidos como flavonoides y favorece el buen funcionamiento del sistema cardiovascular.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_16.png',
            name: 'Perejil',
            description: 'Entre sus fitonutrientes encontramos isoflavonas los cuales tienen propiedades antioxidantes muy importantes y ayudan a la salud del corazón, de los huesos y al crecimiento celular.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_2.png',
            name: 'Rábano',
            description: 'El rábano es rico en vitamina C, potasio y una poderosa fuente de fibra, al contener vitamina nos ayuda a protegernos de los radicales libres. '
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_7.png',
            name: 'Sierra, Anchoa y Sardina',
            description: 'Estos peces de agua fría encuentras ácidos grasos con EPA y DHA los cuales contribuyen al funcionamiento normal del corazón, además la sustitución de grasas saturadas por grasas insaturadas en la dieta contribuye a mantener niveles normales de colesterol sanguíneo poliinsaturados son grasas.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_5.png',
            name: 'Soya, Trigo y Gisantes',
            description: 'Al combinarse estos tres ingredientes pueden formar una proteína de alto valor biológico, con el beneficio extra de ser libres de grasas saturadas y colesterol y de fácil digestión.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_18.png',
            name: 'Toronja',
            description: 'Contiene licopeno el cual ofrece importantes beneficios antioxidante y ayuda a mejorar la salud hepática.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_3.png',
            name: 'Zanahoria',
            description: 'La zanahoria es una hortaliza que destaca por su contenido en vitamina A, la cual contribuye a la salud de la vista y ayuda a mantener la hidratación de la piel. '
        },
        
        
        
        
        
    ];
    public ingredients2: Array<any> = [
        {
            img: 'assets/imgs/Ingredientes/IMG_13.png',
            name: 'Micelas',
            description: 'Moléculas similares a un imán que atraen y eliminan las impurezas.'
        },
        {
            
            img: 'assets/imgs/Ingredientes/IMG_11.png',
            name: 'Sandía',
            description: 'Un extracto de fruta que ayuda a proteger la piel de los daños causados por los radicales libres.'
        },
        {
            img: 'assets/imgs/Ingredientes/IMG_12.png',
            name: 'Semilla de chía blanca',
            description: 'Cultivada en el Rancho El Petacal, México. Uno de los superalimentos más ricos de la naturaleza y el ingrediente héroe en los productos de Artistry™. Sus fitonutrientes ayudan a nutrir y proteger visiblemente la belleza cuidada de la piel.'
        },  
        
    ];
    public ingredients3: Array<any> = [
        {
            img: 'assets/imgs/Ingredientes/IMG_13.png',
            name: 'Micelas',
            description: 'Moléculas similares a un imán que atraen y eliminan las impurezas.'
        },
        {
            
            img: 'assets/imgs/Ingredientes/IMG_11.png',
            name: 'Sandía',
            description: 'Un extracto de fruta que ayuda a proteger la piel de los daños causados por los radicales libres.'
        },
    ];
    public certifications: Array<any> = [
        {
            title: 'Ingredientes con certificación orgánica',
            description: 'Estos extraordinarios fitonutrientes provienen de plantas cultivadas en granjas Nutrilite™ con certificación orgánica en todo el mundo. <br><br> Cada uno de ellos es totalmente rastreable desde la semilla hasta el producto. Conoce más de trazabilidad <b>aquí.<b>',
            route: ['tool', 7],
        },
        {
            title: '¡Todos nuestros ingredientes naturales tienen certificación de NutriCert™!',
            description: '<b>NutriCert™</b> es nuestro programa de certificación agrícola que garantiza que las granjas asociadas cumplan con los mismos estándares de calidad (pureza, seguridad y efectividad) que cumplimos en nuestras propias granjas. <br><br> Requiere que sean rastreables, ecológicamente sostenibles y socialmente responsables. Controlando todo el proceso, desde la semilla hasta el complemento, asegurando que solo los ingredientes de la más alta calidad se utilicen en los productos Nutrilite™.',
            route: null,
        },
        {
            title: 'Granjas Nutrilite',
            description: 'Las Granjas Nutrilite cuentan con certificación orgánica y están distribuidas en más de 26 millones de metros cuadrados de tierra en Estados Unidos, México y Brasil. <br><br>Es ahí donde nacen todos nuestros ingredientes.',
            route: null,
        },
        {
            title: 'Ingredientes Botánicos',
            description: 'Usar los recursos de la naturaleza a la hora de crear nuestros productos es la mejor forma de asegurar fórmulas <b>puras, seguras y efectivas</b>. <br><br>Nuestros fitonutrientes de origen botánico provienen de lo mejor de la naturaleza; las plantas y merecen tu mayor confianza.',
            route: null,
        }
    ];

    public tab: number = 1;
    public view: number = 1;

    constructor(private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params && params['id']){
                this.view = params['id'];
            }
        });
    }

    navigateTo(route: any){
        if(route)
            this.router.navigate(route);
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

        const position = -1;

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
