function movieTickets(input) {
  let a1 = Number(input[0]);
  let a2 = Number(input[1]);
  let n = Number(input[2]);

  for (let i = a1; i <= a2 - 1; i++) {
    n1 = String.fromCharCode(i);
    n4 = i;
    for (let i2 = 1; i2 <= n - 1; i2++) {
      let n2 = i2;
      for (let i3 = 1; i3 <= n / 2 - 1; i3++) {
        n3 = i3;
        if (i % 2 != 0 && (n2 + n3 + n4) % 2 != 0) {
          console.log(`${n1}-${n2}${n3}${n4}`);
        }
      }
    }
  }
}
movieTickets([71, 74, 6]);
