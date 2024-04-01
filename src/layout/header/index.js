import { getTableRow } from '../../api/get';
import { El } from '../../components/shared/El';
import { renderProducts } from '../../components/page/Product/RenderProduct';
import { debounce } from 'lodash';
import { filterModal } from '../../components/modal-filter';

export const header = () => {
  const searchProduct = (event) => {
    const tableRowDiv = document.getElementById('tableRowDiv');
    tableRowDiv.remove();
    // location.reload()
    let currentPage = '1';
    document.getElementById('page').innerHTML = currentPage;

    let findItem = event.target.value;
    // console.log(findItem);

    // console.log(tableRowDiv);

    renderProducts(findItem);
    // debounce(() => renderProducts(findItem), 2000);
  };
const openFilterModal = ()=>{
  const modalFilter = document.getElementById("modalFilter")
modalFilter.classList.remove("hidden")
}


  const openAddModal = () => {
    const overlayModal = document.getElementById('overlayModal');
    const modalAdd = document.getElementById('modalAdd');
    overlayModal.classList.remove('hidden');
    modalAdd.classList.remove('hidden');
  };
  return El({
    element: 'div',
    className: 'text-white  bg-[#6900e8] flex justify-between p-2 py-4 h-[60px]',
    children: [
      El({
        element: 'div',
        className: 'flex gap-2 justify-center items-center',
        children: [
          El({
            element: 'img',
            className: 'w-7 h-5',
            src: '../../src/assets/image/icon-menu.png',
          }),
          El({
            element: 'span',
            className: 'text-[15px]',
            innerText: 'My To-Do Tasks',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-2 items-center justify-end w-[50%]',
        children: [
          El({
            element: 'div',
            className: 'flex justify-end',
            children: [
              El({
                element: 'img',
                className: ' bg-[#8220eb] rounded-l-[5px] pl-1 w-7',
                src: '../../src/assets/image/icon-search.png',
              }),
              El({
                element: 'input',
                className:
                  ' outline-none bg-[#8220eb] w-[80%] text-[13px] end-0 rounded-r-[5px] cursor-text',
                type: 'text',
                placeholder: 'search',
                id: 'input',
                onkeyup: searchProduct,
              }),
            ],
          }),
          El({
            element: 'img',
            src: '../../src/assets/image/icon-filter.png',
            className: 'w-7 h-7 cursor-pointer',
            onclick : openFilterModal,
          }),
          El({
            element: 'img',
            src: '../../src/assets/image/icon-add.png',
            className: 'w-7 h-7 cursor-pointer',
            id: 'icon-add',
            eventListener: [
              {
                event: 'click',
                callback: openAddModal,
              },
            ],
          }),
        ],
      }),
    ],
  });
};
