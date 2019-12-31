import { IS } from '../enums/IncomeStatement';

export interface IReportedValue {
	sign: boolean;
	// todo: make this field generic
	name: IS;
}

export interface IAggregate {
	// todo: make this field generic
	name: IS,
	values: Array<IReportedValue>
}

export interface Statement {
	get: (name: string) => number;
	compute: (aggregate: IAggregate) => number
}