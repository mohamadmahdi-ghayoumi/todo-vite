import { El } from '../El';
import { clearInputs } from '../clearInputs';
import { closeModal } from '../closeModal';

export const OverlayModal = () => {
  const close = () => {
    closeModal();
  };
  return El({
    element: 'div',
    id: 'overlayModal',
    className:
      'absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-full bg-gray-500 bg-opacity-70 hidden ',
    onclick: close,
  });
};
