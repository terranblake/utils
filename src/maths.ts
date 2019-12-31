import { default as logger } from './logger';

function signum(decimals: any) {
	if (!decimals) {
		logger.error(`cannot get signum (+/-) from invalid input ${decimals}`);
		return;
	}

	let sign = String(decimals.slice(0, 1));
	sign = sign === '-'
		? '-'
		: Number(decimals) !== 0
			? '+'
			: '-';

	return sign;
}

function magnitude(value: string, decimals: string, sign: string) {
	// if the value ends in a zero, then it has already been
	// rounded and doesn't need to be adjusted
	if (Number(String(value).slice(value.length - 1)) === 0) {
		return Number(value);
	}

	if (!sign || decimals && !['+', '-'].includes(sign)) {
		logger.error(`cannot normalize[${value}] without +/- sign[${sign}] in decimals[${decimals}]`);
		return value;
	}

	let places = decimals.slice(1);
	let scalar =
		sign === '-'
			? Math.pow(10, Number(places))
			: places !== ''
				? Math.pow(10, Number(-1 * Number(places)))
				: 1;

	return Number(value) * scalar;
}

export default { signum, magnitude }