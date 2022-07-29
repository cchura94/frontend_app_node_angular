import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administrador',
                items:[
                    {label: 'Admin',icon: 'pi pi-fw pi-home', routerLink: ['/']},
                    {label: 'Perfil',icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil']}
                ]
            },
            {
                label: 'Gestion',
                items: [
                    {label: 'Categorias', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/categoria']},
                    {label: 'Productos', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto']},
                    {label: 'Usuarios', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/usuario']},
                    
                ]
            },
            {
                label:'Gestion Pedidos',
                items:[
                    {label: 'Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido']},
                    {label: 'Nuevo Pedido', icon: 'pi pi-fw pi-globe', routerLink: ['/admin/pedido/nuevo']},
                ]
            },
            {label:'Clientes',
                items:[
                    {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/icons']},
                    {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank'},
                ]
            },
            
        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
