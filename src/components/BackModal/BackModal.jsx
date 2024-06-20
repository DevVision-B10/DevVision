import styled from 'styled-components';
import useModalStore from '../../zustand/modal';

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;
function BackModal({ children }) {
  const { modalClose } = useModalStore();
  return (
    <BackDrop className="back-drop" onClick={() => modalClose()}>
      {children}
    </BackDrop>
  );
}

export default BackModal;
