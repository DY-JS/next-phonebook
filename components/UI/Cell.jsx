import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { PhonesContext } from "./../../context/PhonesContext";
import vercel from "./../../public/vercel.svg";

const StyledCell = styled.td`
  display: ${({ icon }) => icon && "flex"};
  justify-content: center;
  align-items: center;
  width: ${({ icon }) => icon && "130px"};
  margin: ${({ icon }) => icon && "13px"};
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  margin: 0 5px;
  padding: 0 5px;
  background: #c7d2fe;
  color: #111827;
  border: none;
  border-radius: 3px;
`;

const Vertical = styled.div`
  height: 100%;
  width: 2px;
  background: #000;
`;

export const StyledP = styled.p`
  width: 100%;
  height: 35px;
  margin: 10px;
  padding-left: 10px;
  background: #c7d2fe;
  color: #111827;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  line-height: 35px;

  @media (max-width: 568px) {
    width: 55%;
    margin-bottom: 10px;
  }
`;

const Cell = ({ item, dataItem, icon, setEditMode }) => {
  const { selectedNote, setSelectedNote, handleDeleteNote } =
    useContext(PhonesContext);

  useEffect(() => {
    // console.log(selectedNote);
  }, [selectedNote]);
  return (
    <StyledCell icon={icon} onClick={() => setSelectedNote(item)}>
      {icon ? (
        <>
          <ImgContainer onClick={() => handleDeleteNote(selectedNote.id)}>
            <Image src={vercel} alt='Delete' />
          </ImgContainer>
          <Vertical></Vertical>
          <ImgContainer onClick={() => setEditMode(true)}>
            <Image src={vercel} alt='edit' />
          </ImgContainer>
        </>
      ) : (
        <StyledP>{dataItem}</StyledP>
      )}
    </StyledCell>
  );
};

export default Cell;
