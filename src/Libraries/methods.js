export const searchIncludes = (arr, word) => {
    return arr.filter(item => {
      return item.name.toLowerCase().includes(word);
    });
}