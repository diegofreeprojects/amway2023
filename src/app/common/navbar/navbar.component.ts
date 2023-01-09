import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

declare var $: any;
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Output() public isOpenSidebar = new EventEmitter<any>();
    @Input() public isOpen: boolean = false;
    public dropdown: any = null;
    public isOpenSubMenu: boolean = false;

    constructor() { }

    ngOnInit(): void {
        let dropdownEl = $('.dropdown-menu')[0]; 
        this.dropdown = new bootstrap.Dropdown(dropdownEl);
    }

    toggle(){
        this.isOpen = !this.isOpen;
        this.isOpenSidebar.next(this.isOpen);
    }

    openSubMenu(){
        this.dropdown.show();
    }

    closeSubMenu(){
        this.dropdown.hide();
    }

}
