import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import antdconfig from "./ant-config";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./services/Store";

const { darkAlgorithm } = theme;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ConfigProvider
      // {...antdconfig}
      theme={{
        ...antdconfig,
        algorithm: darkAlgorithm,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>,

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
