import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StocksService } from './stocks.service';

@Component({
    selector: 'table-comp',
    template:`
        <div [ngClass]="{ brokers: true }">
            <div class="stocks__table" (click)="openModal($event)">
                <row-comp  class="stocks__row" *ngFor="let item of stocksList"
                    [stockId]="item.id"
                    [stockName]="item.name"
                    [stockMax]="item.max"
                    [stockAmount]="item.amount"
                    [stockMin]="item.min"
                    [stockDistribution]="item.distribution"
                ></row-comp>
            </div>
            <button 
                class="btn"
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
        .stocks__table{
            padding: 10px;
            width: 100%;
        }
        .stocks__row{
            display: flex;
            justify-content: space-between;
            padding: 0 15px;
            border-bottom: 1px solid #000;
            cursor: pointer;
        }
        .stocks__row:nth-child(2n){
            background-color: #9dd9fc;
        }
    `],
    styleUrls: ['../app.styles.css']
})
export class TableStocksComponent implements OnInit{
    stocksList: Array<Stock> = [];
    visable: boolean = false;
    modalTarget: any;

    constructor(private stocksService: StocksService) {}

    ngOnInit() {
        this.stocksService.getData().subscribe(
            (data: any) => { this.stocksList = data },
            error => console.log(error)
        );
    }

    openModal(event: any){
        this.modalTarget = event.target;
        this.visable = true;
    }

    addUser(user: Stock){
        this.stocksService.addElement(user)
            .subscribe((data: any) => this.stocksList = data);
    }

    updateUser(user: Stock) {
        this.stocksService.updateElement(user)
            .subscribe((data: any) => this.stocksList = data);
    }

    close(){
        this.visable = false;
    }
    
    delete(user: string){
        this.stocksService.removeElement(user)
            .subscribe((data: any) => this.stocksList = data);
    }
}
