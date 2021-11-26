import { Component, OnInit } from '@angular/core';
import { Properties } from './properties';
import { PropertiesService } from './properties.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'row-comp',
    template: `
        <form class="form" #myForm="ngForm" (ngSubmit)="onSubmit(myForm)" novalidate>
            <label class="label">Время начала</label>
            <input class="input" name="start" type="datetime-local" [(ngModel)]="properties.start" required />
            <label class="label">Время конца</label>
            <input class="input" name="end" type="datetime-local" [(ngModel)]="properties.end" required />
            <label class="label">Интервал пересчета акция в минутах</label>
            <input class="input" name="capital" [(ngModel)]="properties.interval" type="number" min="1" required />
            <button class="btn" type="submit">Сохранить</button>
        </form>
        <button
            class="btn"
            routerLink=""
        >
            Вернуться в меню
        </button>
    `,
    styles: [`
        .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 16px;
        }
        .label{
            margin-bottom: 5px;
        }
        .input{
            padding: 5px;
            margin-bottom: 15px;
        }
    `],
    styleUrls: ['../app.styles.css']
})
export class PropertiesComponent implements OnInit {
    properties: Properties = new Properties();

    constructor(private propertiesService: PropertiesService) { }

    ngOnInit(){
        this.propertiesService.getData()
            .subscribe((data: any) => {this.properties = data});
    }

    onSubmit(form: NgForm) {
        this.propertiesService.addElement(this.properties)
            .subscribe((data: any) => { });
    }
}