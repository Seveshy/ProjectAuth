import Routes from "../src/routes";
import GlobalStyles from "./styles/GlobalStyles";
import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
