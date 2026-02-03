import { createStore } from "redux";
import fruitReducer from "./Fruit/fruitReducer";

const store = createStore(fruitReducer)

export default store;