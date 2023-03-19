import { Typography } from "@mui/material";
import _isEqual from "lodash/isEqual";
import { useMemo } from "react";

export const useResultText = (numbers: number[]) => {
  const returnText = useMemo(() => {
    if (
      _isEqual(numbers, [0, 1, 2]) ||
      _isEqual(numbers, [0, 2, 1]) ||
      _isEqual(numbers, [1, 0, 2]) ||
      _isEqual(numbers, [1, 2, 0]) ||
      _isEqual(numbers, [2, 0, 1]) ||
      _isEqual(numbers, [2, 1, 0])
    ) {
      return (
        <Typography>
          役：ヒフミ　強さ：15位
          <br />
          一番クソザコナメクジ！
        </Typography>
      );
    } else if (_isEqual(numbers, [0, 0, 0])) {
      return (
        <Typography>
          役：ピンゾロ　強さ：1位
          <br />
          最強！！！✌
        </Typography>
      );
    } else if (_isEqual(numbers, [5, 5, 5])) {
      return (
        <Typography>
          役：ゾロ目（6）　強さ：2位
          <br />
          ゾロ目の時点で相当強い！ほぼ負けないでしょう！
        </Typography>
      );
    } else if (_isEqual(numbers, [4, 4, 4])) {
      return (
        <Typography>
          役：ゾロ目（5）　強さ：3位
          <br />
          ゾロ目の時点で相当強い！ほぼ負けないでしょう！
        </Typography>
      );
    } else if (_isEqual(numbers, [3, 3, 3])) {
      return (
        <Typography>
          役：ゾロ目（4）　強さ：4位
          <br />
          ゾロ目の時点で相当強い！ほぼ負けないでしょう！
        </Typography>
      );
    } else if (_isEqual(numbers, [2, 2, 2])) {
      return (
        <Typography>
          役：ゾロ目（3）　強さ：5位
          <br />
          ゾロ目の時点で相当強い！ほぼ負けないでしょう！
        </Typography>
      );
    } else if (_isEqual(numbers, [1, 1, 1])) {
      return (
        <Typography>
          役：ゾロ目（2）　強さ：6位
          <br />
          ゾロ目の中では弱いけど中々の引き！
        </Typography>
      );
    } else if (
      _isEqual(numbers, [3, 4, 5]) ||
      _isEqual(numbers, [3, 5, 4]) ||
      _isEqual(numbers, [4, 3, 5]) ||
      _isEqual(numbers, [4, 5, 3]) ||
      _isEqual(numbers, [5, 3, 4]) ||
      _isEqual(numbers, [5, 4, 3])
    ) {
      return (
        <Typography>
          役：シゴロ　強さ：7位
          <br />
          喧嘩でいうとボクシングジム通ってる素人ぐらい強い！
        </Typography>
      );
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
      return (
        <Typography>
          役：６の目　強さ：8位
          <br />
          そこらの凡人には勝てるでしょう！
        </Typography>
      );
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
      return (
        <Typography>
          役：５の目　強さ：9位
          <br />
          まあまあ！
        </Typography>
      );
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
      return (
        <Typography>
          役：４の目　強さ：10位
          <br />
          まあまあ...！
        </Typography>
      );
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
      return (
        <Typography>
          役：３の目　強さ：11位
          <br />
          普通かな？笑
        </Typography>
      );
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
      return (
        <Typography>
          役：２の目　強さ：12位
          <br />
          ギリギリ及第点ぐらい？
        </Typography>
      );
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
      return (
        <Typography>
          役：１の目　強さ：13位
          <br />
          下を見下す事でしか生きられないねえ
        </Typography>
      );
    } else {
      return (
        <Typography>
          役：目無し　強さ：14位
          <br />
          クソザコ！
        </Typography>
      );
    }
  }, [numbers]);

  if (numbers.length === 3) {
    return returnText;
  }
  return null;
};
