import React, { useContext } from "react";

import { PhonesContext } from "../../context/PhonesContext";
import Cell from "./Cell";

const Row = ({ item, index }) => {
  const { editMode, setEditMode } = useContext(PhonesContext);
  console.log(editMode);
  return (
    <tr>
      <th scope='col'>{index + 1}</th>
      <Cell item={item} dataItem={item["name"]} name='name' />
      <Cell item={item} dataItem={item["phone"]} name='phone' />
      <Cell item={item} icon={true} setEditMode={setEditMode} />
    </tr>
  );
};

export default Row;
