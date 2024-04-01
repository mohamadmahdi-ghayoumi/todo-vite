import { El } from "../shared/El";

export const modalEye = () => {
  return El({
    element: "div",
    id: "modalEye",
    className:
      "absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-2/4 h-2/4 bg-gray-200 rounded p-2 hidden ",
    children: [
      El({
        element: "form",
        className: "flex flex-col gap-y-9 p-4 ",
        children: [
          El({
            element: "lable",
            className: "flex gap-1",
            innerText: "Task Title:",
            children: [
              El({
                element: "span",
                className: "rounded-md border px-2 ",
                type: "text",
                placeholder: "Task",
                id: "eye-task-span",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex  gap-1",
            innerText: "Priority:",
            children: [
              El({
                element: "span",
                className: "rounded-md cursor-pointer px-2  flex",
                name: "Priority",
                id: "eye-priority-span",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex  gap-1",
            innerText: "Status:",
            children: [
              El({
                element: "span",
                className: "rounded-md cursor-pointer px-2 flex",
                name: "Status",
                id: "eye-status-span",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex  gap-1",
            innerText: "Deadline:",
            children: [
              El({
                element: "span",
                className: "rounded-md border px-2  ",
                type: "date",
                placeholder: "Select a date",
                id: "eye-date-span",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex  gap-1",
            innerText: "Description:",
            children: [
              El({
                element: "span",
                className: "rounded-md flex gap-1 px-2 ",
                type: "text",
                placeholder: "Description",
                id: "eye-description-span",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
