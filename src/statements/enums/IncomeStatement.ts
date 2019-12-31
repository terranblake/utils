export enum IS {
	Revenue,
	CostOfGoodsSold,
	GrossProfit,

	SalariesAndBenefits,
	RentAndOverhead,
	DepreciationAndAmortization,
	Interest,
	Other,
	TotalExpenses,

	// GrossProfit
	// TotalExpenses
	EarningsBeforeTax,

	Taxes,

	// Taxes
	// EarningsBeforeTax
	NetEarnings,

	// EarningsBeforeTax
	// DepreciationAndAmortization
	EBITDA,
}