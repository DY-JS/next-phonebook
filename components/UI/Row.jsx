import React, { useContext, useState } from "react";
import styled from "styled-components";

import { PhonesContext } from "../../context/PhonesContext";
import Cell from "./Cell";
import EditForm from "./EditForm";

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
