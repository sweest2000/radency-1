let currentNote;

const setModalData = (note, notes) => {
  const targetNote = notes.find(
    (item) => item.name === note.getAttribute('class')
  );
  document.querySelector('#changeNoteInput1').value = targetNote.name;
  document.querySelector('#changeNoteSelect1').value = targetNote.category;
  document.querySelector('#changeNoteTextarea1').value = targetNote.content;
  currentNote = targetNote;
};

export { currentNote, setModalData };
