import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import RenderTodo from "./mainComponent";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RenderTodo></RenderTodo>
  </Provider>
);
