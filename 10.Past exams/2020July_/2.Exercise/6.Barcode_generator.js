function barcode(input) {
  let startRange = input[0].toString().split("");
  let endRange = input[1].toString().split("");
  let result = [];

  for (let n1 = startRange[0]; n1 <= endRange[0]; n1++) {
    for (let n2 = startRange[1]; n2 <= endRange[1]; n2++) {
      for (let n3 = startRange[2]; n3 <= endRange[2]; n3++) {
        for (let n4 = startRange[3]; n4 <= endRange[3]; n4++) {
          if (n1 % 2 !== 0 && n2 % 2 !== 0 && n3 % 2 !== 0 && n4 % 2 !== 0) {
            result.push(`${n1}${n2}${n3}${n4}`);
          }
        }
      }
    }
  }
  console.log(result.join(" "));
}

barcode([2345, 6789]);
