const redux = require('redux');
const createStore = redux.createStore;
const initialState = { numberOfBooks: 10, numberOfPen: 20 }
function buyBook() { return { type: "Buy_Book", payload: "My First Action for Redux App" } }
function buyPen() { return { type: "Buy_Pen", payload: "My Second Action for Redux App" } }
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Buy_Book": return {
            ...state,
            numberOfBooks: state.numberOfBooks - 1
        }
        case "Buy_Pen": return {
            ...state,
            numberOfPen: state.numberOfPen - 1
        }
        default: return state;
    }
}
const store = createStore(Reducer);
console.log("Initial State Value: ", store.getState());
const unsubscribe = store.subscribe = () => {
    console.log("Update State Value: ", store.getState());
};
store.dispatch(buyBook());
store.dispatch(buyPen());
unsubscribe();