import { Provider } from "react-redux";
import Mystore from "./MyStore";
import store from "../Redux/Store";

const App = () => {

  return (
    <Provider store={store}>
      <div>
        <Mystore />
      </div>
    </Provider>
  )
}

export default App;
