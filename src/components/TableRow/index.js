import axios from "axios";
import { deleteData } from "../../api/delete";
import { editModal } from "../modal-edit";
import { renderProducts } from "../page/Product/RenderProduct";
import { El } from "../shared/El";
import { updateTodo } from "../../api/put";
import { BASE_URL } from "../../api/const";

export const createTableRow = (data) => {
  const editButton = document.getElementById("edit-btn");
  // console.log(editButton);

  const editRow = (e) => {
    const overlayModal = document.getElementById("overlayModal");
    const modalEdit = document.getElementById("modalEdit");
    overlayModal.classList.remove("hidden");
    modalEdit.classList.remove("hidden");
    const selectedForEdit = e.target.id;

    axios.get(`${BASE_URL}/todo/${selectedForEdit}`).then((response) => {
      const data = response.data;
      document.getElementById("edit-task-input").value = data.title;
      document.getElementById("edit-description_input").value =
        data.description;
      document.getElementById("edit-date-input").value = data.deadline;
      document.getElementById("edit-priority_select").value = data.priority;
      document.getElementById("edit-status_select").value = data.status;
      // console.log(data);
      editButton.addEventListener("click", () => {
        const prioritySelectEdit = document.getElementById(
          "edit-priority_select"
        );
        const statusSelectEdit = document.getElementById("edit-status_select");

        function changeStatus() {
          let statusColor = "";

          switch (statusSelectEdit.value) {
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
          switch (prioritySelectEdit.value) {
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
        let updatedData = {
          title: document.getElementById("edit-task-input").value,
          deadline: document.getElementById("edit-date-input").value,
          priority: document.getElementById("edit-priority_select").value,
          status: document.getElementById("edit-status_select").value,
          description: document.getElementById("edit-description_input").value,
          priorityColor: `${changePriority()}`,
          statusColor: `${changeStatus()}`,
          id: data.id,
        };
        console.log(updatedData);
        updateTodo(updatedData);
      });
    });
  };

  const deleteRow = () => {
    deleteData(data.id).then((res) => {
      const tableTbody = document.getElementById("tableTbody");
      tableTbody.innerHTML = "loading...";
      const tableRowDiv = document.getElementById("tableRowDiv");
      tableRowDiv.remove();

      let currentPage = document.getElementById("page").innerText;
      console.log(data);
      console.log(currentPage);

      renderProducts("", currentPage);
    });
    // .catch((err) => console.error(err));
  };

  return El({
    element: "tr",
    className: " p-4 text-center h-[20px]",
    id: data.id,
    children: [
      El({
        element: "td",
        className: "text-left border border-slate-300 px-3",
        innerText: data.title,
      }),
      El({
        element: "td",
        className: "border border-slate-300",
        children: [
          El({
            element: "span",
            className: `px-3 py-1 rounded-2xl  ${data.priorityColor} `,
            innerText: data.priority,
          }),
        ],
      }),
      El({
        element: "td",
        className: "border border-slate-300 ",
        children: [
          El({
            element: "span",
            className: `px-3 py-1 rounded-2xl ${data.statusColor}`,
            innerText: data.status,
          }),
        ],
      }),
      El({
        element: "td",
        className: "border border-slate-300 ",
        children: [
          El({
            element: "span",
            className: `border rounded-2xl px-2 py-1 border-blue-500 `,
            innerText: data.deadline,
          }),
        ],
      }),
      El({
        element: "td",
        className: "flex gap-3 justify-center p-5 border border-slate-300 ",
        children: [
          El({
            element: "img",
            className: "w-6 cursor-pointer bg-red-500 rounded",
            src: "../../src/assets/image/trash-solid.svg",
            eventListener: [
              {
                event: "click",
                callback: deleteRow,
              },
            ],
          }),
          El({
            element: "img",
            className: "w-6 cursor-pointer bg-blue-500 rounded",
            src: "../../src/assets/image/edit-solid.svg",
            id: data.id,
            eventListener: [
              {
                event: "click",
                callback: editRow,
              },
            ],
          }),
          El({
            element: "img",
            className: "w-6 cursor-pointer bg-gray-500 rounded",
            src: "../../src/assets/image/eye-solid.svg",
            // eventListener:[{
            //     event:'click',
            //     callback:
            // }]
          }),
        ],
      }),
    ],
  });
};
