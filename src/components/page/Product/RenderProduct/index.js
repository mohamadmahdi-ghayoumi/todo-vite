import { getTableRow } from '../../../../api/get';
import { createTableRow } from '../../../TableRow';
import { El } from '../../../shared/El';

// export const renderProducts = () => {
//   getTableRow().then((data) => {
//     console.log(data);
//     const containerTbody = document.getElementById('tableTbody');
//     containerTbody.innerText = '';
//     const tableRowDiv = El({
//       element: 'tbody',
//       id: 'tableRowDiv',
//       children: data.map((item) => createTableRow(item)),
//     });
//     containerTbody.replaceWith(tableRowDiv);
//   });
// };

//another way

/*write the code with fetch and then*/

export const renderProducts = (findItem = '', page, filters) => {
  getTableRow(findItem, page, filters).then((data) => {
    // console   .log(data.data);
    const containerTbody = document.getElementById('table-one');
    const tableTbody = document.getElementById('tableTbody');
    tableTbody.innerText = '';
    // tableTbody.innerText=""
    let tableRowDiv = El({
      element: 'tbody',
      id: 'tableRowDiv',
      children: data.data.map((item) => createTableRow(item)),
    });
    containerTbody.append(tableRowDiv);
  });
};

/*write the code with async await*/

// export const renderProducts = async (findItem = '', page) => {
//   try {
//     const data = await getTableRow(findItem, page);
//     // console.log(data.data, "tgk");
//     const containerTbody = document.getElementById('table-one');
//     const tableTbody = document.getElementById('tableTbody');
//     tableTbody.innerText = '';
//     // tableTbody.innerText=""
//     let tableRowDiv = El({
//       element: 'tbody',
//       id: 'tableRowDiv',
//       children: data.data.map((item) => createTableRow(item)),
//     });
//     containerTbody.append(tableRowDiv);
//   } catch (error) {
//     console.error('Error:', error);
//     // Handle error if needed
//   }
// };
