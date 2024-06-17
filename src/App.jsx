import LogIn from './components/LogIn/LogIn';
import { GlobalStyle } from './styles/GlobalStyle/GlobalStyle';
import useModalStore from './zustand/modal';

function App() {
  const { isVisible, modalOpen } = useModalStore();
  return (
    <main>
      <GlobalStyle />
      <button onClick={() => modalOpen()}>로그인</button>
      {isVisible && <LogIn />}
    </main>
  );
}

export default App;
