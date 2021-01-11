import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Logger} from './base/logger-service';

const log = new Logger(`auth`);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private textChange$: Subject<any> = new Subject<any>();
    romanNumbers: string[] = ['M', 'XM', 'CM', 'D', 'XD', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    arabNumbers: number[] = [1000, 990, 900, 500, 490, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    result: any = '';

    ngOnInit(): void {
        this.textChange$.subscribe(resp => {
            this.toRoman(resp);
        });
    }

    public toRoman(num: any) {
        this.result = '';
        let i = 0;
        while (num > 0 || this.arabNumbers.length === (i - 1)) {
            while ((num - this.arabNumbers[i]) >= 0) {
                num -= this.arabNumbers[i];
                this.result += this.romanNumbers[i];
            }
            i++;
        }
    }
}
