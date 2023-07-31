import brain from '../../public/icons/brain-fill.svg';
import cart from '../../public/icons/cart-fill.svg';
import lightbulb from '../../public/icons/lightbulb-fill.svg';
import populateTable from './main';

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
  populateTable();
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
  populateTable();
};

const archiveNote = (note, notes, archivedNotes) => {
  archivedNotes.push({
    ...notes.find((item) => item.name === note.getAttribute('class')),
  });
  deleteNote(note, notes);
};

const deleteNote = (note, notes) => {
  const deletedItemIndex = notes.findIndex(
    (item) => item.name === note.getAttribute('class')
  );
  notes.splice(deletedItemIndex, 1);
  note.remove();
};

export { addNote, archiveNote, changeNote, deleteNote, setModalData };
