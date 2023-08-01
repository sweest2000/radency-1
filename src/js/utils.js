import brain from '../../public/icons/brain-fill.svg';
import cart from '../../public/icons/cart-fill.svg';
import lightbulb from '../../public/icons/lightbulb-fill.svg';

let currentNote;

const addNote = (notes) => {
  const name = document.querySelector('#FormControlInput1').value;
  const category = document.querySelector('#FormControlSelect1').value;
  const content = document.querySelector('#FormControlTextarea1').value;
  const icon =
    category === 'Task' ? cart : category === 'Idea' ? lightbulb : brain;
  notes.push({
    icon,
    name,
    created: new Date().toLocaleDateString('en-us', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }),
    category,
    content,
    dates: content.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/g)?.join(', ') || '-',
  });
};

const setModalData = (note, notes) => {
  const targetNote = notes.find(
    (item) => item.name === note.getAttribute('class')
  );
  document.querySelector('#changeNoteInput1').value = targetNote.name;
  document.querySelector('#changeNoteSelect1').value = targetNote.category;
  document.querySelector('#changeNoteTextarea1').value = targetNote.content;
  currentNote = targetNote;
};

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
  };
};

const moveNote = (note, currentArray, nextArray) => {
  const targetItem = currentArray.find(
    (item) => item.name === note.getAttribute('class')
  );
  nextArray.push({ ...targetItem });
  deleteNote(note, currentArray);
};

const archiveAll = (currentArray, nextArray) => {
  nextArray.push(...currentArray), currentArray.splice(0, currentArray.length);
};

const deleteNote = (note, notes) => {
  const deletedItemIndex = notes.findIndex(
    (item) => item.name === note.getAttribute('class')
  );
  notes.splice(deletedItemIndex, 1);
  note.remove();
};

const deleteAll = (notes) => {
  notes.splice(0, notes.length);
};

export {
  addNote,
  archiveAll,
  changeNote,
  deleteAll,
  deleteNote,
  moveNote,
  setModalData,
};
