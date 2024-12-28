import { FallbackHeader } from "./FallbackHeader";
import { lazy, Suspense } from "react";
import Header from "header/header";

const Footer = lazy(() => import("./footer"));

const App = () => {
  return (
    <div className="content">
      <Suspense fallback={<FallbackHeader />}>
        <Header />
      </Suspense>
      <h1>Main App</h1>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
