import { Input, Component } from '@angular/core';

@Component({
    selector: 'row-comp',
    template: `
        <p class="stocks__item">{{stockId}}</p>
        <p class="stocks__item">{{stockName}}</p>
        <p class="stocks__item">{{stockMax}}</p>
        <p class="stocks__item">{{stockAmount}}</p>
        <p class="stocks__item">{{stockMin}}</p>
        <p class="stocks__item">{{stockDistribution}}</p>
    `,
    styles: [`
        .stocks__item{
            font-size: 14px;
            margin-bottom: 10px;
            flex: 0 0 16.6666%;
        }
    `]
})
export class RowComponent {
    @Input() stockId: string
    @Input() stockName: string
    @Input() stockMax: number
    @Input() stockAmount: number
    @Input() stockMin: number
    @Input() stockDistribution: string
}
