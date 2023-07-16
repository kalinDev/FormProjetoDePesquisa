import { Modal, Box} from "@mui/material";
import {ModalBlockStyle } from './ModalBlockStyle'
import React from "react";

interface ModalProps {
  label: string;
  title: string;
  content: string[];
}

export function ModalBlock({ label, title, content }: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span style={ModalBlockStyle.labelStyle} onClick={handleOpen}>{label}</span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...ModalBlockStyle.boxStyle }}>
          <h2 id="parent-modal-title">{title}</h2>
          {content.map(paragraph => {
            return (
              <p key={paragraph}>
                {paragraph}
              </p>
            )
          })}
        </Box>
      </Modal>
    </div>
  );
}