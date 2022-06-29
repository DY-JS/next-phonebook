import React, { useContext, useState } from "react";
import styled from "styled-components";

import { PhonesContext } from "./../../context/PnonesContext";
import Cell from "./Cell";
import EditForm from "./EditForm";

const Row = ({ item, index }) => {
  const {
    data,
    columns,
    selectedNote,
    setSelectedNote,
    handleAddNote,
    handleDeleteNote,
    handleEditNote,
    newNote,
    setNewNote,
    editMode,
    setEditMode,
  } = useContext(PhonesContext);
  console.log(editMode);
  return (
    <tr>
      <th scope='col'>{index + 1}</th>
      <Cell item={item} dataItem={item["name"]} name='name' />
      <Cell item={item} dataItem={item["phone"]} name='phone' />
      <Cell
        item={item}
        icon={true}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </tr>
  );
};

export default Row;
