import React, { createContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

type SnackbarProviderProps = {
  children: React.ReactNode;
};
export enum SnackbarSeverity {
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning",
}

export const SnackbarContext = createContext<{
  openSnackbar: (message: string, severity: SnackbarSeverity) => void;
  closeSnackbar: () => void;
}>({
  openSnackbar: () => {},
  closeSnackbar: () => {},
});

type SnackbarState = {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
};

export const SnackbarProvider = ({
  children,
}: SnackbarProviderProps): JSX.Element => {
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: SnackbarSeverity.Info,
  });

  const openSnackbar = (message: string, severity: SnackbarSeverity) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const closeSnackbar = () => {
    setSnackbar({
      open: false,
      message: "",
      severity: SnackbarSeverity.Info,
    });
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};
