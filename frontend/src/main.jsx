import ReactDom from "react";

import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import {
  Route,
  RouteProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";

//Auth

//Restricted

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {" "}
    </Route>
  )
);

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouteProvider router={router} />
  </Provider>
);
