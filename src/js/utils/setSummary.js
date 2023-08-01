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

export default setSummary;
