export const searchIncludes = (arr, word) => {
    return arr.filter(item => {
      return item.name.toLowerCase().includes(word);
    });
}

export const sortCoinbyNameWithOrder = (coins, sortOrder) => {

  const order = (sortOrder === "ascending") ? 1 : -1;
  return coins.sort((a, b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase();
      if(nameA < nameB) {
          return -1 * order;
      }
      else if (nameA > nameB){
          return 1 * order;
            
      } else if (nameA === nameB){
          return  0;
      }  
  });
  
}
