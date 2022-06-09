function solve(input) {
    let n = Number(input[0]);
    let sumP1 = 0
    let sumP2 = 0
    let sumP3 = 0
    let sumP4 = 0
    let sumP5 = 0

    for (let i = 1; i <= n; i++) {
        let x = Number(input[i])

        if (x < 200) {
            sumP1++
        } else if (x >= 200 && x <= 399) {
            sumP2++
        } else if (x >= 400 && x <= 599) {
            sumP3++
        } else if (x >= 600 && x <= 799) {
            sumP4++
        } else {
            sumP5++
        }
    }
    let p1 = sumP1 / n * 100
    let p2 = sumP2 / n * 100
    let p3 = sumP3 / n * 100
    let p4 = sumP4 / n * 100
    let p5 = sumP5 / n * 100

    console.log(p1.toFixed(2) + "%" );
    console.log(p2.toFixed(2) + "%" );
    console.log(p3.toFixed(2) + "%" );
    console.log(p4.toFixed(2) + "%"  );
    console.log(p5.toFixed(2) + "%" );
}
solve(["3",
    "1",
    "2",
    "999"
])