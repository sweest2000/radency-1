import archive from '../../../public/icons/archive-fill.svg';
import pencil from '../../../public/icons/pencil-fill.svg';
import trash from '../../../public/icons/trash-fill.svg';
import deleteNote from './deleteNote';
import moveNote from './moveNote';
import { setModalData } from './setModalData';
import setSummary from './setSummary';

import { archivedNotes, display, notes } from '../data/arrays';

const populateTable = (currentNotes) => {
  document.querySelector('#table-body').innerHTML = '';
  currentNotes.map((item) => {
    document.querySelector('#table-body').insertAdjacentHTML(
      'beforeend',
      `<tr class="${item.name}">
      <td scope="row" class="icon"><img src='${item.icon}' width="25" height="25" /></td>
      <td class="name"><div class="text-wrapper">${item.name}</div></td>
      <td><div class="text-wrapper">${item.created}</div></td>
      <td><div class="text-wrapper">${item.category}</div></td>
      <td><div class="text-wrapper">${item.content}</div></td>
      <td><div class="text-wrapper">${item.dates}</div></td>
      <td>
      <div class="container-sm">
      <button>
      <img src="${pencil}" width="25" height="25" class="change-note" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      </button>
      <button>
      <img src="${archive}" width="25" height="25" class="archive-note" />
      </button>
      <button>
      <img src="${trash}" width="25" height="25" class="delete-note" />
      </button>
      </div>
      </td>
    </tr>`
    );
  });

  setSummary(notes, archivedNotes);

  try {
    document.querySelectorAll('.change-note').forEach((item) => {
      item.addEventListener('click', (e) => {
        const targetArray = display.notesDisplayed ? notes : archivedNotes;
        setModalData(
          e.target.parentElement.parentElement.parentElement.parentElement,
          targetArray
        );
        populateTable(targetArray);
      });
    });
    document.querySelectorAll('.archive-note').forEach((item) => {
      item.addEventListener('click', (e) => {
        const targetArray = display.notesDisplayed ? notes : archivedNotes;
        const secondaryArray = display.notesDisplayed ? archivedNotes : notes;
        moveNote(
          e.target.parentElement.parentElement.parentElement.parentElement,
          targetArray,
          secondaryArray
        );
        populateTable(targetArray);
      });
    });
    document.querySelectorAll('.delete-note').forEach((item) => {
      item.addEventListener('click', (e) => {
        const targetArray = display.notesDisplayed ? notes : archivedNotes;
        deleteNote(
          e.target.parentElement.parentElement.parentElement.parentElement,
          targetArray
        );
        populateTable(targetArray);
      });
    });
  } catch (e) {
    console.error(e.message);
  }
};

export default populateTable;
