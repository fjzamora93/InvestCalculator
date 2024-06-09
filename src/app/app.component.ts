import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { UserInputComponent } from './user-input/user-input.component';
import { type Investment } from './investment-result/investment.model';
import { InvestmentService } from './investment-result/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultComponent, UserInputComponent]
})

export class AppComponent {
    investmentService: InvestmentService = new InvestmentService();
    
    onCalculateInvestment(investment: Investment){
        this.investmentService.calculateInvestmentResults(investment);
        console.log(`Recibiendo Inversión en el padre: ${JSON.stringify(this.investmentService.annualData[0])}`);
    }

}
