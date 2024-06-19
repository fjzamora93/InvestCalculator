import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { UserInputComponent } from './user-input/user-input.component';

import { InvestmentService } from './investment-result/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultComponent, UserInputComponent]
})

export class AppComponent {
    investment?: InvestmentService;

    onCalculateInvestment(investment: InvestmentService){
        this.investment = investment;
        this.investment.calculateInvestmentResults();
        console.log(`Recibiendo Inversión en el padre: ${JSON.stringify(investment)}`);
    }

}
