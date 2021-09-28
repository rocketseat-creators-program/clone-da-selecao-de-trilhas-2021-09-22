import { ContentModal } from "../Modal";

import { Container, Content, VideoWrapper } from "./styles";

interface VideoTrailModalProps {
  onCloseModal: () => void;
  onOpenModal: boolean;
}

export function VideoTrailModal({
  onCloseModal,
  onOpenModal,
}: VideoTrailModalProps) {
  return (
    <ContentModal
      isOpen={onOpenModal}
      onRequestClose={onCloseModal}
      className="react-modal-content"
    >
      <Container>
        <Content>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/f7jMO95AHmA"
              width="100%"
              height="480"
              frameBorder="0"
              allowFullScreen
              title="Video de trilha"
            />
          </VideoWrapper>
        </Content>
      </Container>
    </ContentModal>
  );
}
