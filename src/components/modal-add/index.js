import { addTodo } from "../../api/set";
import { renderProducts } from "../page/Product/RenderProduct";
import { El } from "../shared/El";
import { closeModal } from "../shared/closeModal";
import { OverlayModal } from "../shared/overlay";
import { validateInputs } from "../shared/validateInput";

export const modalAdd = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      const taskInput = document.getElementById("task-input");
      const descriptionInput = document.getElementById("description_input");
      const dateInput = document.getElementById("date-input");
      const prioritySelect = document.getElementById("priority_select");
      const statusSelect = document.getElementById("status_select");

      function changeStatus() {
        let statusColor = "";

        switch (statusSelect.value) {
          case "ToDo":
            statusColor = "bg-red-500 text-white";
            break;
          case "Doing":
            statusColor = "bg-yellow-500";
            break;
          case "Done":
            statusColor = "bg-green-600 text-white";
            break;
        }
        return statusColor;
      }

      function changePriority() {
        let priorityColor = "";
        switch (prioritySelect.value) {
          case "Low":
            priorityColor = "bg-slate-300";
            break;
          case "Medium":
            priorityColor = "bg-yellow-500";
            break;
          case "High":
            priorityColor = "bg-red-500 text-white";
            break;
        }
        return priorityColor;
      }

      let data = {
        title: `${taskInput.value}`,
        deadline: `${dateInput.value}`,
        priority: `${prioritySelect.value}`,
        status: `${statusSelect.value}`,
        description: `${descriptionInput.value}`,
        priorityColor: `${changePriority()}`,
        statusColor: `${changeStatus()}`,
      };
      addTodo(data);
      const tableRowDiv = document.getElementById("tableRowDiv");
      tableRowDiv.remove();
      closeModal();
      let currentPage = document.getElementById("page").innerText;
      location.reload();
      renderProducts("", currentPage);
    }
  };

  return El({
    element: "div",
    id: "modalAdd",
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
                id: "task-input",
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Priority:",
            children: [
              El({
                element: "select",
                className:
                  "rounded-md cursor-pointer px-2 py-1 flex flex-col h-[35px]",
                name: "Priority",
                id: "priority_select",
                children: [
                  El({
                    element: "option",
                    value: "Low",
                    innerText: "Low",
                  }),
                  El({
                    element: "option",
                    value: "Medium",
                    innerText: "Medium",
                  }),
                  El({
                    element: "option",
                    value: "High",
                    innerText: "High",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "lable",
            className: "flex flex-col gap-1",
            innerText: "Status:",
            children: [
              El({
                element: "select",
                className:
                  "rounded-md cursor-pointer px-2 py-1 flex flex-col h-[35px]",
                name: "Status",
                id: "status_select",
                children: [
                  El({
                    element: "option",
                    value: "ToDo",
                    innerText: "ToDo",
                  }),
                  El({
                    element: "option",
                    value: "Doing",
                    innerText: "Doing",
                  }),
                  El({
                    element: "option",
                    value: "Done",
                    innerText: "Done",
                  }),
                ],
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
                id: "date-input",
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
                placeholder: "description",
                id: "description_input",
              }),
            ],
          }),

          El({
            element: "button",
            className:
              "absolute bottom-14 bg-green-300 px-3 py-1 rounded-md hover:bg-green-700 hover:text-white transition-all",
            type: "submit",
            innerText: "Submit",
            onclick: submitHandler,
          }),
        ],
      }),
    ],
  });
};
