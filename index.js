const {redux,createStore, combineReducers, applyMiddleware} = require('redux');

const bookInitialState = { numberOfBooks: 10}
const penInitialState = { numberOfPen: 20 }
function buyBook() { return { type: "Buy_Book", payload: "My First Action for Redux App" } }
function buyPen() { return { type: "Buy_Pen", payload: "My Second Action for Redux App" } }
const BookReducer = (state = bookInitialState, action) => {
    switch (action.type) {
        case "Buy_Book": return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        default: return state;
    }
}

const PenReducer = (state = penInitialState, action) => {
    switch (action.type) {
       case "Buy_Pen": return {
            ...state,
            numberOfPen: state.numberOfPen - 1
        }
        default: return state;
    }
}
const reducer=combineReducers({
    book:BookReducer,
    pen:PenReducer
});

const logger=store=>{
    return next=>{
        return action=>{
        const result=next(action);
        console.log("middleware log",result)
        return result;
        }
    }
}
 
const store = createStore(reducer,applyMiddleware(logger));
console.log("Initial State Value: ", store.getState());
const unsubscribe = store.subscribe = () => {
    console.log("Update State Value: ", store.getState());
};
store.dispatch(buyBook());
store.dispatch(buyPen());
unsubscribe();
