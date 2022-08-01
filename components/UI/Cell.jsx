import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { PhonesContext } from './../../context/PhonesContext';

import { Modal } from './Modal';
import pencil from './../../public/pencil.svg';
import deleteIcon from './../../public/deleteIcon.svg';

const StyledCell = styled.td`
  display: ${({ icon }) => icon && 'flex'};
  justify-content: center;
  align-items: center;
  width: ${({ icon }) => icon && '180px'};
  margin-top: ${({ icon }) => icon && '13px'};
  margin-right: ${({ icon }) => icon && '-100px'};

  @media (max-width: 768px) {
    width: ${({ icon }) => (icon ? '180px' : '250px')};
    margin-right: ${({ icon }) => icon && '-10px'};
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
  z-index: 2;

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

const Title = styled.h2`
  color: #10b981;
  width: max-content;
  margin: 10px auto;
`;

const Cell = ({ item, dataItem, icon, setEditMode }) => {
  const { setSelectedNote, handleDeleteNote } = useContext(PhonesContext);
  const [active, setActiveModal] = useState(false);

  const makeNotActiveModal = () => setActiveModal(false);
  const handleDelete = () => {
    handleDeleteNote(item.id);
  };

  return (
    <StyledCell icon={icon} onClick={() => setSelectedNote(item)}>
      {icon ? (
        <>
          <ImgContainer onClick={() => setActiveModal(true)}>
            <Image src={deleteIcon} alt="Delete" />
          </ImgContainer>
          <Vertical />
          <ImgContainer onClick={() => setEditMode(true)}>
            <Image src={pencil} alt="Edit" />
          </ImgContainer>
        </>
      ) : (
        <ContactInfo>{dataItem}</ContactInfo>
      )}
      <Modal
        active={active}
        handleClose={makeNotActiveModal}
        handleOk={handleDelete}
      >
        <Title>You are about delete note</Title>
        <Title>Are you sure?</Title>
      </Modal>
    </StyledCell>
  );
};

export default Cell;
