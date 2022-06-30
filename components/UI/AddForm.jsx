import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { PhonesContext } from "../../context/PhonesContext";

const Form = styled.div`
  width: 100%;
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
`;

const Container = styled.div`
  width: 500px;
  height: 300px;
  margin: 0 auto;
  padding: 15px;
  background: #374151;
  color: #111827;
  border: none;
  border-radius: 3px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  margin: 10px;
  padding-left: 10px;
  background: #c7d2fe;
  color: #111827;
  border: none;
  border-radius: 3px;
  font-size: 14px;

  @media (max-width: 568px) {
    width: 55%;
    margin-bottom: 10px;
  }
`;

const StyledButton = styled.button`
  height: 35px;
  margin: 50px auto;
  color: #111827;
  background: ${({ actionType }) =>
    actionType === "ok" ? "#2563eb" : "#DC2626"};
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
    background: ${({ actionType }) => actionType === "ok" && "#2884f6"};
  }
`;

const AddForm = () => {
  const {
    data,
    newNote,
    setNewNote,
    addMode,
    setAddMode,
    handleAddNote,
    initialData,
  } = useContext(PhonesContext);

  console.log(newNote);

  const [isSuccess, setIsSuccess] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setNewNote(newNote);
    handleAddNote(newNote);
    setIsSuccess(true);
    setNewNote(initialData);
  };

  const cancelAddMode = () => setAddMode(false);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const prepearedValue =
      name === "phone" ? value.replace(/[^\d]/g, "") : value;

    name === "phone"
      ? setNewNote({
          ...newNote,
          [name]: Number(prepearedValue),
          id: Number(prepearedValue),
        })
      : setNewNote({
          ...newNote,
          [name]: prepearedValue,
        });
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setAddMode(false);
        console.log(data);
      }, 1000);
      return () => {
        setIsSuccess(false);
        clearTimeout(timer);
      };
    }
  }, [isSuccess]);

  return (
    <Container>
      <Form>
        <Title>ADD CONTACT</Title>
        <StyledInput
          name='name'
          value={newNote["name"]}
          type='text'
          placeholder='Type name'
          onChange={handleChange}
        />
        <StyledInput
          name='phone'
          value={newNote["phone"]}
          type='text'
          placeholder='Type phone number'
          onChange={handleChange}
        />
        {isSuccess ? (
          <Title>SUCCESSFULLY ADDED</Title>
        ) : (
          <Buttons>
            <StyledButton
              actionType={"cancel"}
              onClick={cancelAddMode}
              type='button'
            >
              Cancel
            </StyledButton>
            <StyledButton actionType={"ok"} type='button' onClick={handleClick}>
              Save
            </StyledButton>
          </Buttons>
        )}
      </Form>
    </Container>
  );
};

export default AddForm;
