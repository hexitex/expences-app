// action generators for filters 


//set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//set startDate
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate

})
//set endDate
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})