import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: JSX.Element;
  className?: string;
}

export function ContentModal({
  isOpen,
  onRequestClose,
  children,
  className,
}: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className={className}
    >
      {children}
    </Modal>
  );
}
