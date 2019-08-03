const currencyToLocale = {
    USD: 'en-US',
    BRL: 'pt-BRL',
    EUR: 'pt-EUR',
};

export const formatAsCurrency = (value, currency) => {
	const valueToTransform = value ? value : 0;
	const defaultCurrency = currency ? currency : 'USD';

	const locale = currencyToLocale[defaultCurrency];

	return valueToTransform.toLocaleString(locale, {
		style: 'currency',
		currency: defaultCurrency,
		minimumFractionDigits: 2
	});
}
