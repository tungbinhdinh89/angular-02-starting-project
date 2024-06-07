import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentInput } from '../investment-results/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculator = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    const investmentInput: InvestmentInput = {
      initialInvestment: parseFloat(this.enteredInitialInvestment),
      annualInvestment: parseFloat(this.enteredAnnualInvestment),
      expectedReturn: parseFloat(this.enteredExpectedReturn),
      duration: parseFloat(this.enteredDuration),
    };

    this.calculator.emit(investmentInput);
  }
}
