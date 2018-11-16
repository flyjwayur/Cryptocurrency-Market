export const searchIncludes = (arr, word) => {
  return arr.filter(item => {
    return item.name.toLowerCase().includes(word);
  });
};

export const sortCoinbyNameWithOrder = (coins, sortOrder) => {
  const order = sortOrder === true ? 1 : -1;
  return [...coins].sort((a, b) => {
    let nameA = a.name.toLowerCase(); // ignore upper and lowercase
    let nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1 * order;
    } else if (nameA > nameB) {
      return 1 * order;
    } else if (nameA === nameB) {
      return 0;
    }
  });
};

export const sortCoinbyPriceWithOrder = (coins, sortOrder) => {
  const order = sortOrder === true ? 1 : -1;
  return coins.sort((a, b) => {
    let priceA = parseFloat(a.price_usd); // ignore upper and lowercase
    let priceB = parseFloat(b.price_usd);
    if (priceA < priceB) {
      return -1 * order;
    }
    if (priceA > priceB) {
      return 1 * order;
    }
    return 0;
  });
};

export const sortCoinbyRankWithOrder = (coins, sortOrder) => {
  const order = sortOrder === true ? 1 : -1;
  return coins.sort((a, b) => {
    let priceA = parseFloat(a.rank); // ignore upper and lowercase
    let priceB = parseFloat(b.rank);
    if (priceA < priceB) {
      return -1 * order;
    }
    if (priceA > priceB) {
      return 1 * order;
    }
    return 0;
  });
};

export const giveCommaEverythreeDigits = num => {
  const regex = /(\d)(?=(\d{3})+$)/g;
  let str = num.toString().split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(regex, "$1,");
  }
  return str.join(".");
};
