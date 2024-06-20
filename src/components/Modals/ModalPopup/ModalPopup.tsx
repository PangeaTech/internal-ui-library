import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IPopupProps {
  isOpen: boolean;
  handleClose: () => void;
  component: JSX.Element;
}

const ModalPopup: React.FC<IPopupProps> = ({
  isOpen,
  handleClose,
  component,
}) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{component}</Box>
      </Modal>
    </div>
  );
};

export default ModalPopup;
