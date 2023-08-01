import archive from '../../public/icons/archive-fill.svg';
import brain from '../../public/icons/brain-fill.svg';
import cart from '../../public/icons/cart-fill.svg';
import lightbulb from '../../public/icons/lightbulb-fill.svg';
import pencil from '../../public/icons/pencil-fill.svg';
import trash from '../../public/icons/trash-fill.svg';
import '../scss/styles.scss';
import {
  addNote,
  archiveNote,
  changeNote,
  deleteNote,
  setModalData,
  setSummary,
} from './utils';

const notes = [
  {
    icon: cart,
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: '-',
  },
  {
    icon: brain,
    name: 'The theory of evolution',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    dates: '-',
  },
  {
    icon: lightbulb,
    name: 'New Feature',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new things on 3/5/2021 and 5/5/2021',
    dates: '-',
  },
  {
    icon: cart,
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Task',
    content: 'The Lean Startup',
    dates: '-',
  },
];
const archivedNotes = [];

const populateTable = () => {
  document.querySelector('#table-body').innerHTML = '';
  notes.map((item) => {
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

  try {
    setSummary(notes, archivedNotes);
    document.querySelectorAll('.change-note').forEach((item) => {
      item.addEventListener('click', (e) =>
        setModalData(
          e.target.parentElement.parentElement.parentElement.parentElement,
          notes
        )
      );
    });
    document.querySelectorAll('.archive-note').forEach((item) => {
      item.addEventListener('click', (e) =>
        archiveNote(
          e.target.parentElement.parentElement.parentElement.parentElement,
          notes,
          archivedNotes
        )
      );
    });
    document.querySelectorAll('.delete-note').forEach((item) => {
      item.addEventListener('click', (e) =>
        deleteNote(
          e.target.parentElement.parentElement.parentElement.parentElement,
          notes
        )
      );
    });
  } catch (e) {
    console.error(e.message);
  }
};

document
  .querySelector('#submit-form')
  .addEventListener('click', () => addNote(notes));
document
  .querySelector('#submit-change')
  .addEventListener('click', () => changeNote(notes));
document.querySelector('#th-archive').src = archive;
document.querySelector('#th-trash').src = trash;
document.querySelector('#secondary-cart').src = cart;
document.querySelector('#secondary-lightbulb').src = lightbulb;
document.querySelector('#secondary-brain').src = brain;

populateTable();

export default populateTable;
