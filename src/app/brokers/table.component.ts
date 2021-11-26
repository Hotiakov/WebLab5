import { Component, OnInit } from '@angular/core';
import { Broker } from './brokers';
import { BrokersService } from './brokers.service';

@Component({
    selector: 'table-comp',
    template:`
        <div [ngClass]="{ brokers: true }">
            <div [ngClass]="{ brokers__table: true }" (click)="openModal($event)">
                <row-comp  [ngClass]="{ brokers__row: true }" *ngFor="let item of brokersList"
                    [brokerName]="item.name"
                    [brokerCapital]="item.capital"
                ></row-comp>
            </div>
            <button 
                [ngClass]="{ brokers__btn: true, btn: true }"
                (click)="openModal($event)"
            >
                Добавить брокера
            </button>
            <modal-comp
                [modalVisable]="visable"
                [modalTarget]="modalTarget"
                (addUser)="addUser($event)"
                (updateUser)="updateUser($event)"
                (close)="close()"
                (delete)="delete($event)"
            ></modal-comp>
        </div>
        <button
            class="btn"
            routerLink=""
        >
            Вернуться в меню
        </button>
    `,
    styles: [`
        .brokers__table{
            padding: 10px;
            width: 60%;
            margin: 0 auto;
        }
        .brokers__row{
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            border-bottom: 1px solid #000;
            cursor: pointer;
        }
        .brokers__row:nth-child(2n){
            background-color: #9dd9fc;
        }
    `],
    styleUrls: ['../app.styles.css']
})
export class TableBrokersComponent implements OnInit{
    brokersList: Array<Broker> = [];
    visable: boolean = false;
    modalTarget: any;

    constructor(private brokersService: BrokersService) {}

    ngOnInit() {
        this.brokersService.getData().subscribe(
            (data: any) => { this.brokersList = data }, 
            error => console.log(error)
        );
    }

    openModal(event: any){
        this.modalTarget = event.target;
        this.visable = true;
    }

    addUser(user: Broker){
        this.brokersService.addElement(user)
            .subscribe((data: any) => this.brokersList = data);
    }

    updateUser(user: Broker) {
        this.brokersService.updateElement(user)
            .subscribe((data: any) => this.brokersList = data);
    }

    close(){
        this.visable = false;
    }
    
    delete(user: string){
        this.brokersService.removeElement(user)
            .subscribe((data: any) => this.brokersList = data);
    }
}
