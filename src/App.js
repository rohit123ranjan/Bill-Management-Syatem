import { Provider } from "react-redux";
import { makeStore } from "./Store";
import Dashboard from "./Pages/Dashboard/index";
import "./App.css";

const store = makeStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;
