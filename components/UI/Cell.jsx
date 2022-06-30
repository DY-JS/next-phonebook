import React, { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";

import { PhonesContext } from "./../../context/PhonesContext";
import pencil from "./../../public/pencil.svg";
import deleteIcon from "./../../public/deleteIcon.svg";

const StyledCell = styled.td`
  display: ${({ icon }) => icon && "flex"};
  justify-content: center;
  align-items: center;
  width: ${({ icon }) => icon && "180px"};
  margin-top: ${({ icon }) => icon && "13px"};
  margin-right: ${({ icon }) => icon && "-100px"};

  @media (max-width: 768px) {
    width: ${({ icon }) => (icon ? "180px" : "250px")};
    margin-right: ${({ icon }) => icon && "-10px"};
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 23px;
  margin: 5px 20px;
  padding: 0 10px;
  background: #c7d2fe;
  color: #111827;
  border: none;
  border-radius: 3px;
  transform: scale(1.5);
  cursor: pointer;

  @media (max-width: 1000px) {
    transform: scale(1.3);
    margin: 5px 10px;
  }

  @media (max-width: 768px) {
    transform: scale(1.1);
  }
`;

const Vertical = styled.div`
  height: 100%;
  width: 2px;
  background: #000;
`;

export const ContactInfo = styled.p`
  width: 90%;
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
    width: 100%;
    margin-bottom: 10px;
    font-size: 13px;
  }
`;

const Cell = ({ item, dataItem, icon, setEditMode }) => {
  const { setSelectedNote, handleDeleteNote } = useContext(PhonesContext);

  return (
    <StyledCell icon={icon} onClick={() => setSelectedNote(item)}>
      {icon ? (
        <>
          <ImgContainer onClick={() => handleDeleteNote(item.id)}>
            <Image src={deleteIcon} alt='Delete' />
          </ImgContainer>
          <Vertical></Vertical>
          <ImgContainer onClick={() => setEditMode(true)}>
            <Image src={pencil} alt='Edit' />
          </ImgContainer>
        </>
      ) : (
        <ContactInfo>{dataItem}</ContactInfo>
      )}
    </StyledCell>
  );
};

export default Cell;
