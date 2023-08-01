const archiveAll = (currentArray, nextArray) => {
  nextArray.push(...currentArray), currentArray.splice(0, currentArray.length);
};

export default archiveAll;
