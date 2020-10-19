import checkVerticalWin from './check-vertical-win';

const BOARD_LENGTH = 3;

for (let i = 0; i < BOARD_LENGTH; i++) {
  let testData = [];
  for (let j = 0; j < BOARD_LENGTH; j++) {
    testData.push([j, i]);
  }

  test(`Check Row ${i} Win`, () => {
    expect(checkVerticalWin(testData, BOARD_LENGTH)).toBe(true);
  });
}
