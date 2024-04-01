import { getTableRow } from '../../api/get';
import { El } from '../shared/El';
import { renderProducts } from '../page/Product/RenderProduct';

export const filterModal = () => {
  const closeFilter = () => {
    const modalFilter = document.getElementById('modalFilter');
    modalFilter.classList.add('hidden');
  };
  const submitFilter = (e) => {
    const priorityFilter = document.getElementById('priority_filter');
    const statusFilter = document.getElementById('status_filter');
    const dateFilter = document.getElementById('date_filter');

    const filterData = {
      ...(!!priorityFilter.value && { priority: priorityFilter.value }), // ...{ priority: priorityFilter.value },
      ...(!!statusFilter.value && { status: statusFilter.value }),
      ...(!!dateFilter.value && { deadline: dateFilter.value }),
      // deadline : dateFilter.value
    };
    console.log(filterData);
    const tableRowDiv = document.getElementById('tableRowDiv');
    tableRowDiv.remove();
    renderProducts('', 1, filterData);

    // RendersPr("" , 1 , filterData)
  };

  // const changePriority = (event) => {
  //   const priorityFilter = document.getElementById("priority_filter");
  //   console.log(priorityFilter);

  //   // return priorityFilter.value || "";
  // };
  // const changeStatus = () => {
  //   const statusFilter = document.getElementById("status_filter");
  //   return console.log(statusFilter);
  // };
  // changeStatus();
  // changePriority();

  // const userFilter= {
  // priority : priorityFilter.value
  // status :

  //       }

  // const changeDate = () => {
  //   const dateFilter = document.getElementById("date_filter");
  //   return dateFilter.value || "";
  // };
  // const filterData = {
  //   priority: changePriority(),
  // status: changeStatus(),
  // deadline: changeDate(),
  // };

  // getTableRow("" , 1 , filterData)

  return El({
    element: 'div',
    id: 'modalFilter',

    className:
      'hidden flex flex-col h-full gap-8 w-[40%] absolute end-0  top-0  bg-blue-100 p-4 my-[60px]',
    children: [
      El({
        element: 'div',
        className: 'justify-between flex',
        children: [
          El({
            element: 'span',
            className: 'font-bold',
            innerText: 'Filter',
          }),
          El({
            element: 'span',
            className: 'cursor-pointer font-bold',
            innerText: 'X',
            onclick: closeFilter,
          }),
        ],
      }),
      El({
        element: 'span',
        className: '',
        innerText: 'Priority :',
      }),
      El({
        element: 'select',
        className: 'rounded-md cursor-pointer px-2 py-1 h-[40px]',
        name: 'Priority',
        id: 'priority_filter',
        // onchange: changePriority,
        children: [
          El({
            element: 'option',
            value: '',
            innerText: 'All',
          }),
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
      El({
        element: 'span',
        className: '',
        innerText: 'Status :',
      }),
      El({
        element: 'select',
        className: 'rounded-md cursor-pointer px-2 py-1  h-[40px]',
        name: 'Status',
        id: 'status_filter',
        // onchange: changeStatus,
        children: [
          El({
            element: 'option',
            value: '',
            innerText: 'All',
          }),
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
      El({
        element: 'span',
        className: '',
        innerText: 'Deadline',
      }),
      El({
        element: 'input',
        className: 'rounded-md border px-2 py-1 h-[40px]',
        type: 'date',
        // onchange: changeDate,
        placeholder: 'Select a date',
        id: 'date_filter',
      }),
      El({
        element: 'button',
        className: 'rounded-md bg-blue-300',
        innerText: 'Filter',
        onclick: submitFilter,
      }),
    ],
  });
};
