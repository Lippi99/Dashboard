import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps, AlertColor } from "@mui/material/Alert";
import React from "react";

interface MessageProps {
  message?: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  severity: AlertColor;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarMessage = ({
  message,
  severity,
  open,
  setOpen,
}: MessageProps) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: "400px" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
