import checkHorizontalWin from './check-horizontal-win';

const BOARD_LENGTH = 3;

for (let i = 0; i < BOARD_LENGTH; i++) {
  let testData = [];
  for (let j = 0; j < BOARD_LENGTH; j++) {
    testData.push([i, j]);
  }

  test(`Check Row ${i} Win`, () => {
    expect(checkHorizontalWin(testData, BOARD_LENGTH)).toBe(true);
  });
}
