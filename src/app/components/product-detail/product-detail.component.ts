import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {

    public products: Array<any> = [
        { 
            id: 1, name: 'Daily Plus', 
            slogan: 'El plus que necesitas todos los días', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="orange">Repellat explicabo perspiciatis</span> doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit <br><br> obcaecati atque vero sequi <span class="orange">quibusdam vitae perferendis reprehenderit.</span> Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, <span class="orange">repellendus placeat.</span>', 
            img: 'assets/imgs/Daily_Plus/ELEMENT_1.png',
            icon: 'assets/imgs/Daily_Plus/ICON_7.png',
            footer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.',
            reverse: false, 
            color: '#f97c22',
            imgs: [
                'assets/imgs/Daily_Plus/ICON_5.png',
                'assets/imgs/Daily_Plus/ICON_4.png',
                'assets/imgs/Daily_Plus/ICON_5.png',
                'assets/imgs/Daily_Plus/ICON_3.png'
            ]
        },
        { 
            id: 2, name: 'Cal Mag D', 
            slogan: 'Eleva tu calcio, eleva tu vida', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/Cal_Mag_D/ELEMENT_1.png',
            icon: 'assets/imgs/Cal_Mag_D/ICON_4.png',
            footer: '',
            reverse: true, 
            color: '#6e6697',
            imgs: [
                'assets/imgs/Cal_Mag_D/ICON_5.png',
                'assets/imgs/Cal_Mag_D/ICON_6.png',
                'assets/imgs/Cal_Mag_D/ICON_5.png',
                'assets/imgs/Cal_Mag_D/ICON_6.png'
            ]
        },
        { 
            id: 3, name: 'Proteína Vegetal', 
            slogan: 'Para dar el 100% todos los días', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="green">Repellat explicabo</span> perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit <br><br> Obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. <span class="green">Omnis ipsam est corporis.</span> Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.`, 
            img: 'assets/imgs/Proteina_Vegetal/ICON_5.png',
            icon: 'assets/imgs/Proteina_Vegetal/ICON_4.png',
            footer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.',
            reverse: false, 
            color: '#0b7c15',
            imgs: [
                'assets/imgs/Proteina_Vegetal/ICON_8.png',
                'assets/imgs/Proteina_Vegetal/ICON_7.png',
                'assets/imgs/Proteina_Vegetal/ICON_8.png',
                'assets/imgs/Proteina_Vegetal/ICON_6.png'
            ]
        },
        { 
            id: 4, name: 'Omega 3 Plus',
            slogan: 'Complementa tu bienestar con lo mejor del océano', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/Omega_3_Plus/ICON_5.png',
            icon: 'assets/imgs/Omega_3_Plus/ICON_4.png',
            footer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.',
            reverse: true, 
            color: '#275994',
            imgs: [
                'assets/imgs/Omega_3_Plus/ICON_6.png',
                'assets/imgs/Omega_3_Plus/ICON_9.png',
                'assets/imgs/Omega_3_Plus/ICON_7.png',
                'assets/imgs/Omega_3_Plus/ICON_8.png'
            ]
        },
        { 
            id: 5, name: 'C Plus',
            slogan: 'Liberación constante de Vitamina C durante 8 horas', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/C_Plus/ICON_5.png',
            icon: 'assets/imgs/C_Plus/ICON_4.png',
            footer: '',
            reverse: false, 
            color: '#ba1a2e',
            imgs: [
                'assets/imgs/C_Plus/ICON_6.png',
                'assets/imgs/C_Plus/ICON_7.png',
                'assets/imgs/C_Plus/ICON_6.png',
                'assets/imgs/C_Plus/ICON_7.png'
            ]
        },
        { 
            id: 6, name: 'B Plus', 
            slogan: 'Con 8 vitaminas del complejo B', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/B_Plus/ICON_5.png',
            icon: 'assets/imgs/B_Plus/ICON_4.png',
            footer: '',
            reverse: true, 
            color: '#0b7c15',
            imgs: [
                'assets/imgs/B_Plus/ICON_6.png',
                'assets/imgs/B_Plus/ICON_7.png',
                'assets/imgs/B_Plus/ICON_6.png',
                'assets/imgs/B_Plus/ICON_7.png'
            ]
        },
        { 
            id: 7, name: 'HSN', 
            slogan: 'Belleza de adentro hacia afuera', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/HSN/ICON_5.png',
            icon: 'assets/imgs/HSN/ICON_4.png',
            footer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.',
            reverse: false, 
            color: '#b83b61',
            imgs: [
                'assets/imgs/HSN/ICON_8.png',
                'assets/imgs/HSN/ICON_9.png',
                'assets/imgs/HSN/ICON_7.png',
                'assets/imgs/HSN/ICON_6.png'
            ]
        },
        { 
            id: 8, name: 'Agua Micelar', smallName: 'Aristry Skin Nutrition',
            slogan: 'Dale a tu piel lo que se merece', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/Agua_Micelar/ICON_5.png',
            icon: 'assets/imgs/Agua_Micelar/ICON_4.png',
            footer: '',
            reverse: true, 
            color: '#ba1a2e',
            imgs: [
                'assets/imgs/Agua_Micelar/ICON_8.png',
                'assets/imgs/Agua_Micelar/ICON_6.png',
                'assets/imgs/Agua_Micelar/ICON_7.png',
                'assets/imgs/Agua_Micelar/ICON_8.png'
            ]
        },
        { 
            id: 9, name: 'Glister Pasta de Dientes',
            slogan: 'Consigue una sonrisa radiante donde quiera que vallas', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/Pasta_de_dientes/ICON_5.png',
            icon: 'assets/imgs/Pasta_de_dientes/ICON_4.png',
            footer: '',
            reverse: false, 
            color: '#f97c22',
            imgs: [
                'assets/imgs/Pasta_de_dientes/ICON_6.png',
                'assets/imgs/Pasta_de_dientes/ICON_7.png',
                'assets/imgs/Pasta_de_dientes/ICON_6.png',
                'assets/imgs/Pasta_de_dientes/ICON_7.png'
            ]
        },
        { 
            id: 10, name: 'L.O.C.', smallName: 'Limpiador Multiusos', 
            slogan: '!El limpiado de superficies más versátil¡', 
            modeOfUse: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis obcaecati dolorem quibusdam quae pariatur molestias amet sed eaque vel facere.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat explicabo perspiciatis doloremque quia debitis quos ipsam excepturi, nemo quam est rem labore fugit voluptatibus iusto voluptate vel suscipit odit obcaecati atque vero sequi quibusdam vitae perferendis reprehenderit. Omnis ipsam est corporis. Blanditiis, tenetur! Voluptates iure assumenda similique commodi, repellendus placeat.', 
            img: 'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_5.png',
            icon: 'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_4.png',
            footer: '',
            reverse: true, 
            color: '#265894',
            imgs: [
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_8.png',
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_7.png',
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_6.png',
                'assets/imgs/L.O.C._Limpiador_Multiusos/ICON_8.png'
            ]
        }
    ];
    public product: any = {};

    public modal: any = null;
    
    constructor(private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params && params['id']){
                this.product = this.products[params['id'] - 1];
                this.modal = new bootstrap.Modal(document.getElementById('product-detail'), {});
            }else {
                this.navigateTo(['products']);
            }
        });
    }

    openModal(){
        this.modal.show();
    }

    closeModal(){
        this.modal.hide();
    }

    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }

}
