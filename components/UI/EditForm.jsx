import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { PhonesContext } from "./../../context/PnonesContext";
import vercel from "./../../public/vercel.svg";
import { StyledInput } from "./Cell";
import Button from "./Button";

const Form = styled.div`
  width: 100%;
`;

const Success = styled.h1`
  color: #fff;
`;

const Buttons = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: ${({ editMode }) => (editMode ? "flex" : "none")};
  position: absolute;
  top: 25%;
  right: 25%;
  width: 500px;
  height: 300px;
  padding: 15px;
  background: #000;
  color: #111827;
  border: none;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  height: 35px;
  margin: 50px auto;
  color: #111827;
  background: #2563eb;
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
    background: #2884f6;
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
  console.log(editMode);

  const [isSuccess, setIsSuccess] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    handleEditNote(selectedNote);
    setIsSuccess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setSelectedNote({
      ...selectedNote,
      [name]: value,
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
  }, [isSuccess]);

  return (
    <Container editMode={editMode}>
      <Form>
        {isSuccess && <Success>SUCCESSFULLY UPDATED</Success>}
        <StyledInput
          name='name'
          value={selectedNote["name"]}
          type='text'
          onChange={handleChange}
        />
        <StyledInput
          name='phone'
          value={selectedNote["phone"]}
          type='text'
          onChange={handleChange}
        />
        <Buttons>
          <StyledButton type='button' onClick={() => setEditMode(false)}>
            Cancel
          </StyledButton>
          <StyledButton type='button' onClick={handleClick}>
            Save
          </StyledButton>
        </Buttons>
      </Form>
    </Container>
  );
};

export default EditForm;
