
// exspenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'EDIT_EXPENSE':
            return state.map((exp) => {
                if (exp.id === action.id) {
                    return { ...exp, ...action.updates }
                }
                else {
                    return exp;
                }

            })
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        //default
        default: return state;
    }
}
export default expensesReducer;
