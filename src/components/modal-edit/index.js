import { getTableRow } from '../../api/get';
import { addTodo } from '../../api/set';
import { renderProducts } from '../page/Product/RenderProduct';
import { El } from '../shared/El';
import { closeModal } from '../shared/closeModal';
import { OverlayModal } from '../shared/overlay';
import { validateInputs } from '../shared/validateInput';

export const editModal = () => {


  return El({
    element: 'div',
    id: 'modalEdit',
    className:
      'absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-2/4 h-2/4 bg-gray-200 rounded p-2 hidden',
    children: [
      El({
        element: 'form',
        className: 'flex flex-wrap gap-1 justify-evenly gap-y-3',
        children: [
          El({
            element: 'lable',
            className: 'flex flex-col gap-1',
            innerText: 'Task Title:',
            children: [
              El({
                element: 'input',
                className: 'rounded-md border px-2 py-1',
                type: 'text',
                placeholder: 'Task',
                id: 'edit-task-input',
              }),
            ],
          }),
          El({
            element: 'lable',
            className: 'flex flex-col gap-1',
            innerText: 'Priority:',
            children: [
              El({
                element: 'select',
                className:
                  'rounded-md cursor-pointer px-2 py-1 flex flex-col h-[35px]',
                name: 'Priority',
                id: 'edit-priority_select',
                children: [
                  El({
                    element: 'option',
                    value: 'Low',
                    innerText: 'Low',
                  }),
                  El({
                    element: 'option',
                    value: 'Medium',
                    innerText: 'Medium',
                  }),
                  El({
                    element: 'option',
                    value: 'High',
                    innerText: 'High',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'lable',
            className: 'flex flex-col gap-1',
            innerText: 'Status:',
            children: [
              El({
                element: 'select',
                className:
                  'rounded-md cursor-pointer px-2 py-1 flex flex-col h-[35px]',
                name: 'Status',
                id: 'edit-status_select',
                children: [
                  El({
                    element: 'option',
                    value: 'ToDo',
                    innerText: 'ToDo',
                  }),
                  El({
                    element: 'option',
                    value: 'Doing',
                    innerText: 'Doing',
                  }),
                  El({
                    element: 'option',
                    value: 'Done',
                    innerText: 'Done',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'lable',
            className: 'flex flex-col gap-1',
            innerText: 'Deadline:',
            children: [
              El({
                element: 'input',
                className: 'rounded-md border px-2 py-1 h-[35px]',
                type: 'date',
                placeholder: 'Select a date',
                id: 'edit-date-input',
              }),
            ],
          }),
          El({
            element: 'lable',
            className: 'flex flex-col gap-1',
            innerText: 'Description:',
            children: [
              El({
                element: 'input',
                className: 'rounded-md p-5 flex flex-col gap-1',
                type: 'text',
                placeholder: 'description',
                id: 'edit-description_input',
              }),
            ],
          }),

          El({
            element: 'button',
            className:
              'absolute bottom-14 bg-green-300 px-3 py-1 rounded-md hover:bg-green-700 hover:text-white transition-all',
            innerText: 'Save Changes',
            id: 'edit-btn',
          }),
        ],
      }),
    ],
  });
};
