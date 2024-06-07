import { Component } from '@angular/core';
import { InvestmentService } from './investment-results/investment.service';
import {
  InvestmentInput,
  InvestmentResult,
} from './investment-results/investment.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  private _investmentService = new InvestmentService();
  resultData?: InvestmentResult[];

  onCalculator(data: InvestmentInput) {
    this.resultData = this._investmentService.calculateInvestmentResults(data);
  }
}
