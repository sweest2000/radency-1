import deleteNote from './deleteNote';

const moveNote = (note, currentArray, nextArray) => {
  const targetItem = currentArray.find(
    (item) => item.name === note.getAttribute('class')
  );
  nextArray.push({ ...targetItem });
  deleteNote(note, currentArray);
};

export default moveNote;
