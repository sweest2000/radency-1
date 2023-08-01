import archive from '../../public/icons/archive-fill.svg';
import brain from '../../public/icons/brain-fill.svg';
import cart from '../../public/icons/cart-fill.svg';
import lightbulb from '../../public/icons/lightbulb-fill.svg';
import pencil from '../../public/icons/pencil-fill.svg';
import trash from '../../public/icons/trash-fill.svg';
import '../scss/styles.scss';
import {
  addNote,
  archiveAll,
  changeNote,
  deleteAll,
  deleteNote,
  moveNote,
  setModalData,
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
    dates: '3/5/2021, 5/5/2021',
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

let notesDisplayed = true;

const setSummary = (notes, archivedNotes) => {
  const cartActiveLabel = document.querySelector('.secondary-cart-active');
  const cartArchivedLabel = document.querySelector('.secondary-cart-archived');
  const lightbulbActiveLabel = document.querySelector(
    '.secondary-lightbulb-active'
  );
  const lightbulbArchivedLabel = document.querySelector(
    '.secondary-lightbulb-archived'
  );
  const brainActiveLabel = document.querySelector('.secondary-brain-active');
  const brainArchivedLabel = document.querySelector(
    '.secondary-brain-archived'
  );

  cartActiveLabel.innerHTML = notes.reduce(
    (acc, item) => (item.category === 'Task' ? acc + 1 : acc),
    0
  );
  cartArchivedLabel.innerHTML = archivedNotes.reduce(
    (acc, item) => (item.category === 'Task' ? acc + 1 : acc),
    0
  );
  lightbulbActiveLabel.innerHTML = notes.reduce(
    (acc, item) => (item.category === 'Idea' ? acc + 1 : acc),
    0
  );
  lightbulbArchivedLabel.innerHTML = archivedNotes.reduce(
    (acc, item) => (item.category === 'Idea' ? acc + 1 : acc),
    0
  );
  brainActiveLabel.innerHTML = notes.reduce(
    (acc, item) => (item.category === 'Random Thought' ? acc + 1 : acc),
    0
  );
  brainArchivedLabel.innerHTML = archivedNotes.reduce(
    (acc, item) => (item.category === 'Random Thought' ? acc + 1 : acc),
    0
  );
};

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
        const targetArray = notesDisplayed ? notes : archivedNotes;
        setModalData(
          e.target.parentElement.parentElement.parentElement.parentElement,
          targetArray
        );
        populateTable(targetArray);
      });
    });
    document.querySelectorAll('.archive-note').forEach((item) => {
      item.addEventListener('click', (e) => {
        const targetArray = notesDisplayed ? notes : archivedNotes;
        const secondaryArray = notesDisplayed ? archivedNotes : notes;
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
        const targetArray = notesDisplayed ? notes : archivedNotes;
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

document.querySelector('#submit-form').addEventListener('click', () => {
  addNote(notes);
});
document.querySelector('#submit-change').addEventListener('click', () => {
  const targetArray = notesDisplayed ? notes : archivedNotes;
  changeNote(targetArray);
  populateTable(targetArray);
});
document.querySelector('#archive-all').addEventListener('click', () => {
  const targetArray = notesDisplayed ? notes : archivedNotes;
  const secondaryArray = notesDisplayed ? archivedNotes : notes;
  archiveAll(targetArray, secondaryArray);
  populateTable(targetArray);
});
document.querySelector('#delete-all').addEventListener('click', () => {
  const targetArray = notesDisplayed ? notes : archivedNotes;
  deleteAll(targetArray);
  populateTable(targetArray);
});
document
  .querySelector('#flexSwitchCheckChecked')
  .addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    notesDisplayed ? populateTable(archivedNotes) : populateTable(notes);
    notesDisplayed = !notesDisplayed;
  });
document.querySelector('#th-archive').src = archive;
document.querySelector('#th-trash').src = trash;
document.querySelector('#secondary-cart').src = cart;
document.querySelector('#secondary-lightbulb').src = lightbulb;
document.querySelector('#secondary-brain').src = brain;

populateTable(notes);
