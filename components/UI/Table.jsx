import React, { useContext } from "react";
import styled from "styled-components";

import { PhonesContext } from "./../../context/PnonesContext";
import EditForm from "./EditForm";

const AppTable = styled.table`
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  background-color: gray;
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
            <th scope='col'></th>
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
