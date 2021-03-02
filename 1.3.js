const find = (array, number) => {
  const positions = [];
  let i = 0;

  while(i < array.length) {
    const element = array[i];

    if (element === number) {
      positions.push(i);
    }

    i++
  }

  return positions;
};

const array = [1,2,1,1,3];
const number = 1;

console.log(find(array, number));
