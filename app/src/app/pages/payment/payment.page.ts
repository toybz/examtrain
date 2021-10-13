import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
    selector: 'app-payment',
    templateUrl: './payment.page.html',
    styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

    amount;

    constructor(configService: ConfigService) {
        this.amount = configService.SUB_AMOUNT
    }

    ngOnInit() {
    }


    call(number) {
        window.open(`tel:${number}`)
    }
}

