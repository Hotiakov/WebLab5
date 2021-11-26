import { Component } from '@angular/core';

@Component({
    selector: 'menu-comp',
    template: `
        <div class="menu__wrapper">
            <a class="btn menu__btn" routerLink="/broker">Список Брокеров</a>
            <a class="btn menu__btn" routerLink="/properties">Настройка биржи</a>
            <a class="btn menu__btn" routerLink="/stocks">Список Акций</a>
        </div>
    `,
    styles: [`
        .menu__wrapper{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .menu__btn{
            margin-bottom: 15px;
        }
    `],
    styleUrls: [`./app.styles.css`]
})
export class MenuComponent { }