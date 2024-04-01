import { renderProducts } from "../../components/page/Product/RenderProduct";
import { El } from "../../components/shared/El";
import { getTableRow } from "../../api/get";

let currentPage = 1;

const totalPage = await getTableRow();
export const pagination = () => {
  const prevPage = () => {
    document.getElementById("page").innerHTML = currentPage;
    if (currentPage === 1) return;
    document.getElementById("page").innerHTML = --currentPage;
    const tableTbody = document.querySelector("#tableTbody");
    tableTbody.innerHTML = "loading...";
    const tableRowDiv = document.getElementById("tableRowDiv");
    tableRowDiv.remove();
    // console.log(currentPage);
    renderProducts("", currentPage);
  };
  const nextPage = () => {
    // if (currentPage === 1) return ;
    // console.log(`total = ${totalPage.totalPage
    // }`);
    if (currentPage >= totalPage.totalPage) return;

    document.getElementById("page").innerHTML = ++currentPage;
    // console.log(currentPage);
    // const tableTbody = document.querySelector("#tableTbody");
    // tableTbody.innerHTML = "loading...";
    const tableRowDiv = document.getElementById("tableRowDiv");
    tableRowDiv.remove();
    renderProducts("", currentPage);
  };
  //   renderProducts("", currentPage);

  return El({
    element: "div",
    className: "flex gap-2",
    children: [
      El({
        element: "span",
        innerText: "<",
        className: "cursor-pointer text-lg",
        eventListener: [
          {
            event: "click",
            callback: prevPage,
          },
        ],
      }),
      El({
        element: "span",
        innerText: currentPage,
        className: "text-lg",
        id: "page",
      }),
      El({
        element: "span",
        innerText: ">",
        className: "cursor-pointer text-lg",
        eventListener: [
          {
            event: "click",
            callback: nextPage,
          },
        ],
      }),
    ],
  });
};
