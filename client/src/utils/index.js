export const getMoneyString = (value) => {
    return value.toLocaleString('es-ar', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2
    })
}