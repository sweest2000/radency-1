import brain from '../../../public/icons/brain-fill.svg';
import cart from '../../../public/icons/cart-fill.svg';
import lightbulb from '../../../public/icons/lightbulb-fill.svg';

const display = {
  notesDisplayed: true,
};

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
  {
    icon: brain,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    dates: '-',
  },
  {
    icon: lightbulb,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    created: 'April 27, 2021',
    category: 'Idea',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    dates: '-',
  },
  {
    icon: brain,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies.',
    dates: '-',
  },
];

const archivedNotes = [];

export { archivedNotes, display, notes };
