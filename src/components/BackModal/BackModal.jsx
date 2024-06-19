import styled from 'styled-components';
import useModalStore from '../../zustand/modal';

const BackDrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
function BackModal({ children }) {
  const { modalClose } = useModalStore();
  return <BackDrop onClick={() => modalClose()}>{children}</BackDrop>;
}

export default BackModal;
