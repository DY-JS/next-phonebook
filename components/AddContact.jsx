import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { PhonesContext } from "./../context/PhonesContext";
import vercel from "./../public/vercel.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  height: 35px;
  width: 30%;
`;

const ImgContainer = styled.div`
  height: 35px;
  padding: 5px;
  color: #111827;
  border: none;
  border-radius: 3px;
`;

// const III = styled(ImgContainer)`
//   height: 105px;
//   background: #c7d2fe;
// `;

const Title = styled.h4`
  width: 50%;
  text-align: right;
`;
const AddContact = () => {
  const { addMode, setAddMode } = useContext(PhonesContext);

  return (
    <Container onClick={() => setAddMode(true)}>
      <ImgContainer>
        <Image src={vercel} alt='Add' />
      </ImgContainer>
      <Title>ADD NEW CONTACT</Title>
    </Container>
  );
};

export default AddContact;
