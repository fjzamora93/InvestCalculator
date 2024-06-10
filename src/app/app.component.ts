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
    investmentService?: InvestmentService;
    
    onCalculateInvestment(investment: InvestmentService){
        this.investmentService = investment;
        this.investmentService.calculateInvestmentResults();
        console.log(`Recibiendo Inversión en el padre: ${JSON.stringify(this.investmentService)}`);
    }

}
