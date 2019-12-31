import { IReportedValue, IAggregate, Statement } from '../interfaces/Statement';
import IIncomeStatement from '../interfaces/IncomeStatement';

import { IS } from '../enums/IncomeStatement';

export default class IncomeStatement implements IIncomeStatement, Statement {
	Statement: IIncomeStatement;

	Revenue: IReportedValue = {
		sign: true,
		name: IS.Revenue
	}

	CostOfGoodsSold: IReportedValue=  {
		sign: false,
		name: IS.CostOfGoodsSold
	}

	GrossProfit: IAggregate = {
		name: IS.GrossProfit,
		values: [
			{ sign: true, name: IS.Revenue },
			{ sign: false, name: IS.CostOfGoodsSold }
		]
	}

	SalariesAndBenefits: IReportedValue = {
		sign: false,
		name: IS.SalariesAndBenefits
	}

	RentAndOverhead: IReportedValue = {
		sign: false,
		name: IS.RentAndOverhead
	}

	DepreciationAndAmortization: IReportedValue = {
		sign: false,
		name: IS.DepreciationAndAmortization
	}

	Interest: IReportedValue = {
		sign: false,
		name: IS.Interest
	}

	Other: IReportedValue = {
		sign: false,
		name: IS.Other
	}

	TotalExpenses: IAggregate = {
		name: IS.TotalExpenses,
		values: [
			{ sign: false, name: IS.SalariesAndBenefits },
			{ sign: false, name: IS.RentAndOverhead },
			{ sign: false, name: IS.DepreciationAndAmortization },
			{ sign: false, name: IS.Interest },
			{ sign: false, name: IS.Other },
		]
	}

	EarningsBeforeTax: IAggregate = {
		name: IS.EarningsBeforeTax,
		values: [
			{ sign: true, name: IS.GrossProfit },
			{ sign: false, name: IS.TotalExpenses },
		]
	}

	Taxes: IReportedValue = {
		sign: false,
		name: IS.Taxes
	}

	NetEarnings: IAggregate = {
		name: IS.NetEarnings,
		values: [
			{ sign: true, name: IS.Taxes },
			{ sign: false, name: IS.EarningsBeforeTax },
		]
	}

	EBITDA: IAggregate = {
		name: IS.EBITDA,
		values: [
			{ sign: false, name: IS.EarningsBeforeTax },
			{ sign: false, name: IS.DepreciationAndAmortization }
		]
	}

	constructor (Statement: IIncomeStatement) {
		this.Statement = Statement;
	}

	static describe(instance: IncomeStatement): Array<string> {
        return Object.getOwnPropertyNames(instance);
	}
	
	static toObject(instance: IncomeStatement): Object {
		const properties: string[] = IncomeStatement.describe(instance);
		return properties.map(p => { return { [p]: instance.get(p) } });
    }

	/**
	 * Returns the computed value for a name
	 * @param name 
	 * @returns computed aggregate value for name
	 */
	get (name: string) {
		return 0;
	}

	/**
	 * Computes the aggregate
	 * @param aggregate 
	 * @returns computed aggregate value
	 */
	compute (aggregate: IAggregate) {
		return 0;
	}
}