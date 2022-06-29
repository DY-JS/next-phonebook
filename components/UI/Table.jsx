import React, { useContext } from "react";
import styled from "styled-components";

import { PhonesContext } from "../../context/PhonesContext";
import EditForm from "./EditForm";

const AppTable = styled.table`
  width: 70%;
  margin: 50px auto;
  padding: 10px;
  padding-right: 0;
  background-color: #bebebe;

  /* th {
    background-color: blue;
    width: 300px;
  }
  th:first-child {
    width: 20px;
  } */
`;

import Row from "./Row";

function Table() {
  const { data, columns, editMode } = useContext(PhonesContext);

  return (
    <>
      <AppTable>
        <thead>
          <tr>
            <th scope='col'>#</th>
            {columns?.map((columnTitle) => {
              if (columnTitle !== "id") {
                return (
                  <th key={columnTitle} scope='col'>
                    {columnTitle.toUpperCase()}
                  </th>
                );
              }
            })}
            <th scope='col'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Row key={item.phone} item={item} index={index} />
          ))}
        </tbody>
      </AppTable>
      {editMode && <EditForm />}
    </>
  );
}

export default Table;
