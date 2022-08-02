import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(3px);
  opacity: ${({ active }) => (active ? '1' : '0')};
  pointer-events: ${({ active }) => (active ? 'all' : 'none')};
  /* transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')}; */
  transition: 0.8s;
  z-index: 5;
`;

export const ModalContent = styled.div`
  position: fixed;
  width: 50%;
  height: 30%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  border-radius: 5px;
  /* transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0)')}; */
  transform: ${({ active }) =>
    active
      ? 'perspective(600px) translate(0px, 0%) rotateX(0deg)'
      : 'perspective(600px) translate(0px, -200%) rotateX(85deg)'};
  transition: 0.8s all;
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

export function Modal({ active, handleOk, handleClose, children }) {
  return (
    <ModalContainer active={active}>
      <ModalContent active={active}>
        {children}
        <Buttons>
          <StyledButton
            actionType={'cancel'}
            onClick={handleClose}
            type="button"
          >
            Cancel
          </StyledButton>
          <StyledButton actionType={'ok'} onClick={handleOk} type="button">
            Delete
          </StyledButton>
        </Buttons>
      </ModalContent>
    </ModalContainer>
  );
}
