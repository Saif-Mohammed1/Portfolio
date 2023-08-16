import { Suspense, lazy } from "react";
import Spinner from "./components/spinner/spinner.component.jsx";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/collection/collection.component";
const Nav = lazy(() => import("./components/route/nav/nav.component"));
// const Header = lazy(() => import("./components/header/header.component"));
const About = lazy(() => import("./components/about/about.component"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Collection />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
