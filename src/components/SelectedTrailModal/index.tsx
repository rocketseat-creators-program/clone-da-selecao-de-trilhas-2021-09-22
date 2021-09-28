import {
  ElixirTicket,
  NodejsTicket,
  ReactjsTicket,
  ReactNativeTicket,
} from "../../assets";
import Button from "../Button";
import { ContentModal } from "../Modal";

import { Container, Content } from "./styles";

type IconTrails = {
  [key: string]: JSX.Element;
};

const iconTrails: IconTrails = {
  React: <ReactjsTicket />,
  NodeJS: <NodejsTicket />,
  Elixir: <ElixirTicket />,
  ReactNative: <ReactNativeTicket />,
};

interface SelectedTrailModalProps {
  onCloseModal: () => void;
  onOpenModal: boolean;
  trail: string;
}

export function SelectedTrailModal({
  onCloseModal,
  onOpenModal,
  trail,
}: SelectedTrailModalProps) {
  return (
    <>
      <ContentModal
        isOpen={onOpenModal}
        onRequestClose={onCloseModal}
        className="react-modal-selected-trail"
      >
        <Container>
          <Content>
            <h2>Você escolheu</h2>

            {iconTrails[trail]}

            <p>Confirmar escolha? Não será possível trocar depois.</p>

            <footer>
              <Button onClick={onCloseModal} title="Escolher outra">
                Não, vou escolher outra
              </Button>
              <Button onClick={onCloseModal} title="Confirmar">
                Sim, Confirmar!
              </Button>
            </footer>
          </Content>
        </Container>
      </ContentModal>
    </>
  );
}
