import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { PhonesContext } from "./../context/PhonesContext";
import AddForm from "./UI/AddForm";
import Plus from "./../public/Plus.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  height: 35px;
  width: 250px;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  height: 35px;
  padding: 5px;
  color: #111827;
  border: none;
  border-radius: 3px;
`;

const Title = styled.h4`
  width: max-content;
  margin-left: 15px;
  text-align: right;
`;
const AddContact = () => {
  const { addMode, setAddMode } = useContext(PhonesContext);

  return (
    <>
      {addMode ? (
        <AddForm />
      ) : (
        <Container onClick={() => setAddMode(true)}>
          <ImgContainer>
            <Image src={Plus} alt='Add' />
          </ImgContainer>
          <Title>ADD NEW CONTACT</Title>
        </Container>
      )}
    </>
  );
};

export default AddContact;
