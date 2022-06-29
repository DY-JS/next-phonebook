import { useState } from "react";
import Table from "./UI/Table";
import AddContact from "./AddContact";
import Header from "./Header";
import phones from "../pages/api/data.json";
import Cell from "./UI/Cell";
import { PhonesContextProvider } from "./../context/PhonesContext";

const Layout = ({ children }) => {
  //   const columns = ["name", "phone"];
  //   const [data, setData] = useState(phones);
  return (
    <PhonesContextProvider>
      <Header />
      <AddContact />
      <Table />
    </PhonesContextProvider>
  );
};

export default Layout;
