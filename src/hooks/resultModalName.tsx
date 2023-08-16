import _isEqual from "lodash/isEqual";

export const resultModalName = (numbers: number[]) => {
  if (
    _isEqual(numbers, [0, 1, 2]) ||
    _isEqual(numbers, [0, 2, 1]) ||
    _isEqual(numbers, [1, 0, 2]) ||
    _isEqual(numbers, [1, 2, 0]) ||
    _isEqual(numbers, [2, 0, 1]) ||
    _isEqual(numbers, [2, 1, 0])
  ) {
    return "ヒフミ";
  } else if (_isEqual(numbers, [0, 0, 0])) {
    return "ピンゾロ";
  } else if (_isEqual(numbers, [5, 5, 5])) {
    return "ゾロ目（6）";
  } else if (_isEqual(numbers, [4, 4, 4])) {
    return "ゾロ目（5）";
  } else if (_isEqual(numbers, [3, 3, 3])) {
    return "ゾロ目（4）";
  } else if (_isEqual(numbers, [2, 2, 2])) {
    return "ゾロ目（3）";
  } else if (_isEqual(numbers, [1, 1, 1])) {
    return "ゾロ目（2）";
  } else if (
    _isEqual(numbers, [3, 4, 5]) ||
    _isEqual(numbers, [3, 5, 4]) ||
    _isEqual(numbers, [4, 3, 5]) ||
    _isEqual(numbers, [4, 5, 3]) ||
    _isEqual(numbers, [5, 3, 4]) ||
    _isEqual(numbers, [5, 4, 3])
  ) {
    return "シゴロ";
  } else if (
    _isEqual(numbers, [0, 0, 5]) ||
    _isEqual(numbers, [0, 5, 0]) ||
    _isEqual(numbers, [5, 0, 0]) ||
    _isEqual(numbers, [1, 1, 5]) ||
    _isEqual(numbers, [1, 5, 1]) ||
    _isEqual(numbers, [5, 1, 1]) ||
    _isEqual(numbers, [2, 2, 5]) ||
    _isEqual(numbers, [2, 5, 2]) ||
    _isEqual(numbers, [5, 2, 2]) ||
    _isEqual(numbers, [3, 3, 5]) ||
    _isEqual(numbers, [3, 5, 3]) ||
    _isEqual(numbers, [5, 3, 3]) ||
    _isEqual(numbers, [4, 4, 5]) ||
    _isEqual(numbers, [4, 5, 4]) ||
    _isEqual(numbers, [5, 4, 4])
  ) {
    return "６の目";
  } else if (
    _isEqual(numbers, [0, 0, 4]) ||
    _isEqual(numbers, [0, 4, 0]) ||
    _isEqual(numbers, [4, 0, 0]) ||
    _isEqual(numbers, [1, 1, 4]) ||
    _isEqual(numbers, [1, 4, 1]) ||
    _isEqual(numbers, [4, 1, 1]) ||
    _isEqual(numbers, [2, 2, 4]) ||
    _isEqual(numbers, [2, 4, 2]) ||
    _isEqual(numbers, [4, 2, 2]) ||
    _isEqual(numbers, [3, 3, 4]) ||
    _isEqual(numbers, [3, 4, 3]) ||
    _isEqual(numbers, [4, 3, 3]) ||
    _isEqual(numbers, [5, 5, 4]) ||
    _isEqual(numbers, [5, 4, 5]) ||
    _isEqual(numbers, [4, 5, 5])
  ) {
    return "５の目";
  } else if (
    _isEqual(numbers, [0, 0, 3]) ||
    _isEqual(numbers, [0, 3, 0]) ||
    _isEqual(numbers, [3, 0, 0]) ||
    _isEqual(numbers, [1, 1, 3]) ||
    _isEqual(numbers, [1, 3, 1]) ||
    _isEqual(numbers, [3, 1, 1]) ||
    _isEqual(numbers, [2, 2, 3]) ||
    _isEqual(numbers, [2, 3, 2]) ||
    _isEqual(numbers, [3, 2, 2]) ||
    _isEqual(numbers, [4, 4, 3]) ||
    _isEqual(numbers, [4, 3, 4]) ||
    _isEqual(numbers, [3, 4, 4]) ||
    _isEqual(numbers, [5, 5, 3]) ||
    _isEqual(numbers, [5, 3, 5]) ||
    _isEqual(numbers, [3, 5, 5])
  ) {
    return "４の目";
  } else if (
    _isEqual(numbers, [0, 0, 2]) ||
    _isEqual(numbers, [0, 2, 0]) ||
    _isEqual(numbers, [2, 0, 0]) ||
    _isEqual(numbers, [1, 1, 2]) ||
    _isEqual(numbers, [1, 2, 1]) ||
    _isEqual(numbers, [2, 1, 1]) ||
    _isEqual(numbers, [3, 3, 2]) ||
    _isEqual(numbers, [3, 2, 3]) ||
    _isEqual(numbers, [2, 3, 3]) ||
    _isEqual(numbers, [4, 4, 2]) ||
    _isEqual(numbers, [4, 2, 4]) ||
    _isEqual(numbers, [2, 4, 4]) ||
    _isEqual(numbers, [5, 5, 2]) ||
    _isEqual(numbers, [5, 2, 5]) ||
    _isEqual(numbers, [2, 5, 5])
  ) {
    return "３の目";
  } else if (
    _isEqual(numbers, [0, 0, 1]) ||
    _isEqual(numbers, [0, 1, 0]) ||
    _isEqual(numbers, [1, 0, 0]) ||
    _isEqual(numbers, [2, 2, 1]) ||
    _isEqual(numbers, [2, 1, 2]) ||
    _isEqual(numbers, [1, 2, 2]) ||
    _isEqual(numbers, [3, 3, 1]) ||
    _isEqual(numbers, [3, 1, 3]) ||
    _isEqual(numbers, [1, 3, 3]) ||
    _isEqual(numbers, [4, 4, 1]) ||
    _isEqual(numbers, [4, 1, 4]) ||
    _isEqual(numbers, [1, 4, 4]) ||
    _isEqual(numbers, [5, 5, 1]) ||
    _isEqual(numbers, [5, 1, 5]) ||
    _isEqual(numbers, [1, 5, 5])
  ) {
    return "２の目";
  } else if (
    _isEqual(numbers, [1, 1, 0]) ||
    _isEqual(numbers, [1, 0, 1]) ||
    _isEqual(numbers, [0, 1, 1]) ||
    _isEqual(numbers, [2, 2, 0]) ||
    _isEqual(numbers, [2, 0, 2]) ||
    _isEqual(numbers, [0, 2, 2]) ||
    _isEqual(numbers, [3, 3, 0]) ||
    _isEqual(numbers, [3, 0, 3]) ||
    _isEqual(numbers, [0, 3, 3]) ||
    _isEqual(numbers, [4, 4, 0]) ||
    _isEqual(numbers, [4, 0, 4]) ||
    _isEqual(numbers, [0, 4, 4]) ||
    _isEqual(numbers, [5, 5, 0]) ||
    _isEqual(numbers, [5, 0, 5]) ||
    _isEqual(numbers, [0, 5, 5])
  ) {
    return "１の目";
  } else {
    return "目無し";
  }
};
