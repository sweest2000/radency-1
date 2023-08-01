const deleteNote = (note, notes) => {
  const deletedItemIndex = notes.findIndex(
    (item) => item.name === note.getAttribute('class')
  );
  notes.splice(deletedItemIndex, 1);
  note.remove();
};

export default deleteNote;
