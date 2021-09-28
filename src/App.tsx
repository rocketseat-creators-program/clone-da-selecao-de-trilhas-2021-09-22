import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/globals";
import Modal from "react-modal";

Modal.setAppElement("#root");

export function App() {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
