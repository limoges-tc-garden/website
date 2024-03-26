import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import NavBar from "./components/NavBar";

export default function App () {
  return (
    <Router
      root={props => (
        <>
          <NavBar />

          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
