import populateTable from './utils/populateTable.js';

import archive from '../../public/icons/archive-fill.svg';
import brain from '../../public/icons/brain-fill.svg';
import cart from '../../public/icons/cart-fill.svg';
import lightbulb from '../../public/icons/lightbulb-fill.svg';
import trash from '../../public/icons/trash-fill.svg';
import '../scss/styles.scss';
import { archivedNotes, display, notes } from './data/arrays.js';
import addNote from './utils/addNote.js';
import archiveAll from './utils/archiveAll';
import changeNote from './utils/changeNote.js';
import deleteAll from './utils/deleteAll';

document.querySelector('#submit-form').addEventListener('click', () => {
  addNote(notes);
  display.notesDisplayed ? populateTable(notes) : null;
});
document.querySelector('#submit-change').addEventListener('click', () => {
  const targetArray = display.notesDisplayed ? notes : archivedNotes;
  changeNote(targetArray);
  populateTable(targetArray);
});
document.querySelector('#archive-all').addEventListener('click', () => {
  const targetArray = display.notesDisplayed ? notes : archivedNotes;
  const secondaryArray = display.notesDisplayed ? archivedNotes : notes;
  archiveAll(targetArray, secondaryArray);
  populateTable(targetArray);
});
document.querySelector('#delete-all').addEventListener('click', () => {
  const targetArray = display.notesDisplayed ? notes : archivedNotes;
  deleteAll(targetArray);
  populateTable(targetArray);
});
document
  .querySelector('#flexSwitchCheckChecked')
  .addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    display.notesDisplayed
      ? populateTable(archivedNotes)
      : populateTable(notes);
    display.notesDisplayed = !display.notesDisplayed;
  });
document.querySelector('#th-archive').src = archive;
document.querySelector('#th-trash').src = trash;
document.querySelector('#secondary-cart').src = cart;
document.querySelector('#secondary-lightbulb').src = lightbulb;
document.querySelector('#secondary-brain').src = brain;

populateTable(notes);
