import { Component, Input } from '@angular/core';
import { InvestmentResult } from './investment.model';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentResult[];
}
