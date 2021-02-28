import { showMessage, MessageOptions } from 'react-native-flash-message';

export const showSuccessMessage = (
  message: string,
  options?: MessageOptions,
) => {
  showMessage({
    message,
    type: 'success',
    ...options,
  });
};
export const showErrorMessage = (message: string, options?: MessageOptions) => {
  showMessage({
    message,
    type: 'danger',
    ...options,
  });
};
export const showWarnMessage = (message: string, options?: MessageOptions) => {
  showMessage({
    message,
    type: 'warning',
    ...options,
  });
};
