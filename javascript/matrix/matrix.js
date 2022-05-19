// @format
export const Matrix = class {
  constructor(str) {
    // very nice and clean code from AldairMC
    this.rows = str.split('\n').map(x => x.split(' ').map(Number));

    // anoer example of clean code from LouisDelbosc
    // const columns = Array.from(Array(rows.length).keys()).map(index =>
    //   rows.map(row => row[index]),
    // );

    this.columns = this.cols(this.rows);
  }

  getCol(arr, n) {
    arr.map(x => x[n]);
  }

  cols(rows) {
    let tmp = [];
    rows.forEach( () => tmp.push([]));
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        tmp[j][i] = rows[i][j];
      }
    }
    // let i = 0;
    // while (i < rows[0].length) {
    //   tmp.push([this.getCol(rows, i)]);
    //   i++;
    // }
    return tmp;
  }
};
