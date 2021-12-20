
// filter and sort output

export default getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((exp) => {
        const startDateMatch = typeof startDate !== 'number' || exp.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || exp.createdAt <= endDate;
        let textMatch = true;

        if (text && exp.description) {
            textMatch = exp.description.toLowerCase().includes(text.toLowerCase());
        }

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1;
        }
        else if  (sortBy === 'amount'){
            return a.amount > b.amount ? -1 : 1;
        }
    });
}