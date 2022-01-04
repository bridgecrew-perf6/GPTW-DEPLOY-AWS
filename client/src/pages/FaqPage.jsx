import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FaqSearch from "../components/FaqSearch"

const FaqPage = () => {
  const [burgerStatus, setburgerStatus] = useState(true);
  return (
    <>
      <div
        className="flex bg-background flex-col dark:bg-primaryDark"
        style={{ display: "flex", flex: 4 }}
      >
        <Sidebar
          burgerStatus={burgerStatus}
          setburgerStatus={setburgerStatus}
        />
        <Navbar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus} />
      </div>
      <div className="w-full min-h-screen h-full dark:bg-primary pb-10">
        <FaqSearch />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default FaqPage;
