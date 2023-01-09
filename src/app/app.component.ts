import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public isOpen: boolean = false;

    constructor(private router: Router){}

    toggle(isOpen: any){
        if(isOpen)
            this.isOpen = isOpen;
        else
            this.isOpen = !this.isOpen; 

        if(this.isOpen)
            $('body').addClass('no-overflow');
        else
            $('body').removeClass('no-overflow');
    }

    navigateTo(route: Array<any>){
        this.router.navigate(route);
    }
}
