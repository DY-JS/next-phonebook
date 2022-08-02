import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { PhonesContext } from '../../context/PhonesContext';

const Container = styled.div`
  /* display: ${({ editMode }) => (editMode ? 'flex' : 'none')}; */
  /* transform: ${({ editMode }) => (editMode ? 'scale(1)' : 'scale(0)')}; */
  /* transform: ${({ editMode }) =>
    editMode ? 'translate(0px, 0px)' : 'translate(0px, -100%)'}; */
  opacity: ${({ editMode }) => (editMode ? '1' : '0')};
  pointer-events: ${({ editMode }) => (editMode ? 'all' : 'none')};
  /*opacity c pointer-events обязательно */
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(17, 24, 39, 0.15);
  backdrop-filter: blur(2px);
  z-index: 3;
  transition: all 0.8s ease 0s;
`;

const Form = styled.div`
  width: 50%;
  height: 50%;
  background: #374151;
  padding: 10px;
  border-radius: 6px;
  /* transform: ${({ editMode }) => (editMode ? 'scale(1)' : 'scale(0)')}; */
  transform: ${({ editMode }) =>
    // editMode ? 'translate(0px, 0%)' : 'translate(0px, -200%)'};
    editMode
      ? 'perspective(600px) translate(0px, 0%) rotateX(0deg)'
      : 'perspective(600px) translate(0px, -200%) rotateX(85deg)'};
  transition: all 0.8s ease 0s;

  @media (max-width: 568px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  color: #10b981;
  width: max-content;
  margin: 10px auto;
`;

const Buttons = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 568px) {
    width: 95%;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;

// const Container = styled.div`
//   display: ${({ editMode }) => (editMode ? 'flex' : 'none')};
//   position: absolute;
//   top: 25%;
//   right: 25%;
//   width: 500px;
//   height: 300px;
//   padding: 15px;
//   background: #374151;
//   color: #111827;
//   border: none;
//   border-radius: 3px;

//   @media (max-width: 756px) {
//     width: 300px;
//     right: 10%;
//   }
// `;

const StyledInput = styled.input`
  width: 90%;
  height: 35px;
  margin: 10px;
  padding-left: 10px;
  background: #c7d2fe;
  color: #111827;
  border: none;
  border-radius: 3px;
  font-size: 14px;

  @media (max-width: 568px) {
    margin-bottom: 10px;
  }
`;

const StyledButton = styled.button`
  height: 35px;
  margin: 50px auto;
  color: #111827;
  background: ${({ actionType }) =>
    actionType === 'ok' ? '#2563eb' : '#DC2626'};
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:active,
  :focus {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    color: #fff;
    background: ${({ actionType }) => actionType === 'ok' && '#2884f6'};
  }
`;

const EditForm = () => {
  const {
    selectedNote,
    setSelectedNote,
    handleEditNote,
    editMode,
    setEditMode,
  } = useContext(PhonesContext);
  // console.log(editMode);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    handleEditNote(selectedNote);
    setIsSuccess(true);
  };

  const canselEditMode = () => setEditMode(false);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const prepearedValue =
      name === 'phone' ? value.replace(/[^\d]/g, '') : value;
    setSelectedNote({
      ...selectedNote,
      [name]: prepearedValue,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setEditMode(false);
      }, 1000);
      return () => {
        setIsSuccess(false);
        clearTimeout(timer);
      };
    }
  }, [isSuccess, editMode]);

  return (
    <Container editMode={editMode}>
      <Form editMode={editMode}>
        <Title>EDIT CONTACT</Title>
        <StyledInput
          name="name"
          value={selectedNote && selectedNote['name']}
          type="text"
          placeholder="Type name"
          onChange={handleChange}
        />
        <StyledInput
          name="phone"
          value={selectedNote && selectedNote['phone']}
          type="text"
          placeholder="Type phone number"
          onChange={handleChange}
        />
        {isSuccess ? (
          <Title>SUCCESSFULLY UPDATED</Title>
        ) : (
          <Buttons>
            <StyledButton
              actionType={'cancel'}
              onClick={canselEditMode}
              type="button"
            >
              Cancel
            </StyledButton>
            <StyledButton actionType={'ok'} onClick={handleClick} type="button">
              Save
            </StyledButton>
          </Buttons>
        )}
      </Form>
    </Container>
  );
};

export default EditForm;
