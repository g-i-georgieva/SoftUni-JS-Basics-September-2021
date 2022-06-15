function moving(input) {
    let index = 0
    let w = Number(input[index]);
    index++
    let l = Number(input[index]);
    index++
    let h = Number(input[index]);
    index++

    let volume = h * l * w

    let command = input[index];
    index++

    while (command !== "Done") {
        let currentBox=Number(command);
        volume-=currentBox

        if (volume<=0){
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
            break;
        }

        command=input[index];
        index++
    }

    if (command==="Done"){
        console.log(`${volume} Cubic meters left.`)
    }

}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"
])
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"
])