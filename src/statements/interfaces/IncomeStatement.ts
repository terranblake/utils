import { IReportedValue, IAggregate } from '../interfaces/Statement';

export default interface IIncomeStatement {
	Revenue: IReportedValue;
	CostOfGoodsSold: IReportedValue;
	GrossProfit: IAggregate | IReportedValue;

	SalariesAndBenefits: IReportedValue;
	RentAndOverhead: IReportedValue;
	DepreciationAndAmortization: IReportedValue;
	Interest: IReportedValue;
	Other: IReportedValue;
	TotalExpenses: IAggregate | IReportedValue;

	// GrossProfit
	// TotalExpenses
	EarningsBeforeTax: IAggregate | IReportedValue;

	Taxes: IReportedValue;

	// Taxes
	// EarningsBeforeTax
	NetEarnings: IAggregate | IReportedValue;

	// EarningsBeforeTax
	// DepreciationAndAmortization
	EBITDA: IAggregate | IReportedValue;
}