// import { El } from '..components/shared/El/index.js';

import { modalAdd } from '../components/modal-add';
import { editModal } from '../components/modal-edit';
import { filterModal } from '../components/modal-filter';
import { renderProducts } from '../components/page/Product/RenderProduct';
import { El } from '../components/shared/El';
import { OverlayModal } from '../components/shared/overlay';
import { header } from '../layout/header';
import { pagination } from '../layout/pagination';
import { table } from '../layout/table';

export const todo = () => {
  renderProducts();

  return El({
    element: 'div',
    children: [header(), table(), OverlayModal(), modalAdd() , filterModal() , editModal()],
  });
};
