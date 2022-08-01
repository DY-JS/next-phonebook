import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { PhonesContext } from '../../context/PhonesContext';
import EditForm from './EditForm';
import Row from './Row';

const AppTable = styled.table`
  width: 70%;
  margin: 50px auto;
  padding: 10px;
  padding-right: 0;
  background-color: #bebebe;

  @media (max-width: 1100px) {
    width: 85%;
  }

  @media (max-width: 800px) {
    width: 95%;
  }
`;

function Table() {
  const { data, setData, lsKey, columns, editMode, setEditMode } = useContext(
    PhonesContext
  );

  useEffect(() => {
    const getDataFromLS = (key) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data));
      }
    };
    const dataFromLS = getDataFromLS(lsKey);
    dataFromLS?.length > 0 && setData(dataFromLS);
  }, []);

  return (
    <>
      <AppTable>
        <thead>
          <tr>
            <th scope="col">#</th>
            {columns?.map((columnTitle) => {
              if (columnTitle !== 'id') {
                return (
                  <th key={columnTitle} scope="col">
                    {columnTitle.toUpperCase()}
                  </th>
                );
              }
            })}
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <Row key={item.phone} item={item} index={index} />
          ))}
        </tbody>
      </AppTable>
      {/* {editMode && <EditForm />} */}
      <EditForm />
    </>
  );
}

export default Table;
