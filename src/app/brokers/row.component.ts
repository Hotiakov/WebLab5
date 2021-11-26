import { Input, Component } from '@angular/core';

@Component({
    selector: 'row-comp',
    template: `
        <p [ngClass]="{ brokers__item: true }">{{brokerName}}</p>
        <p [ngClass]="{ brokers__item: true }">{{brokerCapital}}</p>
    `,
    styles: [`
        .brokers__item{
            font-size: 14px;
            margin-bottom: 10px;
        }
    `]
})
export class RowComponent {
    @Input() brokerName: string
    @Input() brokerCapital: number
}
