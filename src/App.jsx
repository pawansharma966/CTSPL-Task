
import React from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Center from "./components/Center.jsx";
import Right from "./components/Right.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
<>
<Header />
<div className="flex bg-gray-100 min-h-screen p-5">

<Sidebar />
<Center />
<Right />
</div>
<Footer />
</>
  

  )
}

export default App;

