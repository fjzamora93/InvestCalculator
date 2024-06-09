import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Investment } from '../investment-result/investment.model';
import { InvestmentService } from '../investment-result/investment.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    @Output() calculate = new EventEmitter();
    enteredInitialInvestment: number = 0;
    enteredAnualInvestment: number = 0;
    enteredExpectedReturn: number = 0;
    enteredDuration: number = 0;
    
    onCalculate(){
        const investment = {
            initialInvestment: this.enteredInitialInvestment,
            annualInvestment: this.enteredAnualInvestment,
            expectedReturn: this.enteredExpectedReturn,
            duration: this.enteredDuration
        };
        console.log(investment);

        this.calculate.emit(investment);
    }


}
