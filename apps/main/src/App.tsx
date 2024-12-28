import { FallbackHeader } from "./FallbackHeader";
import { Suspense } from "react";
import Header from "header/header";

const App = () => {
  return (
    <div className="content">
      <Suspense fallback={<FallbackHeader />}>
        <Header />
      </Suspense>
      <h1>Main App</h1>
    </div>
  );
};

export default App;
