import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store.jsx";
import { HashRouter } from "react-router-dom";
import './index.css'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Provider store ={store}>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>,
);
