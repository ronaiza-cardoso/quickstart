var currencyToLocale = {
    USD: 'en-USD',
    BRL: 'pt-BRL',
    EUR: 'pt-EUR',
};

export const formatAsCurrency = (value, currency) => {
	const locale = currencyToLocale[currency];
	const valueToTransform = value ? value : 0;
	return valueToTransform.toLocaleString(locale, {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2
	});
}
