export interface SnackbarState {
  status: boolean;
  message: string;
  timeout: number;
  color: string;
}

export interface GeneralState {
  snackbar: SnackbarState;
}
