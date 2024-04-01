import { El } from "../shared/El";

export const modalEye = () => {
  return El({
    element: "div",
    id: "modalEye",
    className:
      "absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-2/4 h-2/4 bg-gray-200 rounded p-2 hidden",
    children: [
      El({
        element: "form",
        className: "flex flex-wrap gap-1 justify-evenly gap-y-3",
        children: [
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Task Title:",
            children: [
              El({
                element: "input",
                className: "rounded-md border px-2 py-1",
                type: "text",
                placeholder: "Task",
                id: "eye-task-input",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Priority:",
            children: [
              El({
                element: "input",
                className:
                  "rounded-md cursor-pointer px-2 py-1 flex flex-col h-[35px]",
                name: "Priority",
                id: "eye-priority_select",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Status:",
            children: [
              El({
                element: "input",
                className:
                  "rounded-md cursor-pointer px-2 py-1 flex flex-col h-[35px]",
                name: "Status",
                id: "eye-status_select",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Deadline:",
            children: [
              El({
                element: "input",
                className: "rounded-md border px-2 py-1 h-[35px]",
                type: "date",
                placeholder: "Select a date",
                id: "eye-date-input",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Description:",
            children: [
              El({
                element: "input",
                className: "rounded-md p-5 flex flex-col gap-1",
                type: "text",
                placeholder: "Description",
                id: "eye-description_input",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
