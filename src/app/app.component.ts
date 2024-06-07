import { Component, signal } from '@angular/core';
import { InvestmentService } from './investment-results/investment.service';
import {
  InvestmentInput,
  InvestmentResult,
} from './investment-results/investment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Pointing to the HTML template file
})
export class AppComponent {
  private _investmentService = new InvestmentService();
  resultData = signal<InvestmentResult[] | undefined>(undefined);

  onCalculator(data: InvestmentInput) {
    this.resultData.set(
      this._investmentService.calculateInvestmentResults(data)
    );
  }
}
