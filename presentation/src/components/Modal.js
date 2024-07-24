import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .95);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 0px;
  padding-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
`;

const FooterText = styled.span`
  flex: 1;
  text-align: center;
  color: black;
  `;

const Image = styled.img`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  padding: ${props => !props.width && !props.height ? '50px' : '0'};
`;

const Modal = ({ imageUrl, width, height, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Image src={imageUrl} width={width} height={height} />
        <Footer>
          <FooterText>Old</FooterText>
          <FooterText>New</FooterText>
        </Footer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;