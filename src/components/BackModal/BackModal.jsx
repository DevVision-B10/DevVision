import useModalStore from '../../zustand/modal';
import { BackDrop } from './BackModalStyle';

function BackModal({ children }) {
  const { modalClose } = useModalStore();
  return (
    <BackDrop className="back-drop" onClick={() => modalClose()}>
      {children}
    </BackDrop>
  );
}

export default BackModal;
