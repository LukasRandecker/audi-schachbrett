import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
 return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
