import brain from '../../../public/icons/brain-fill.svg';
import cart from '../../../public/icons/cart-fill.svg';
import lightbulb from '../../../public/icons/lightbulb-fill.svg';
import { currentNote } from './setModalData';

const changeNote = (notes) => {
  let item = notes.find((item) => item.name === currentNote.name);
  let targetIndex = notes.findIndex((item) => item.name === currentNote.name);
  const newName = document.querySelector('#changeNoteInput1').value;
  const newCategory = document.querySelector('#changeNoteSelect1').value;
  const newContent = document.querySelector('#changeNoteTextarea1').value;
  notes[targetIndex] = {
    ...item,
    name: newName,
    category: newCategory,
    content: newContent,
    icon:
      newCategory === 'Task'
        ? cart
        : newCategory === 'Idea'
        ? lightbulb
        : brain,
    dates: newContent.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/g)?.join(', ') || '-',
  };
};

export default changeNote;
