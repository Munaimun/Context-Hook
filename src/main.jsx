import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "./context/books.jsx";

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
