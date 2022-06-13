function sequence(input) {
    let target = Number(input[0]);
    let count = 1;


    while (count <= target) {
        console.log(count);
        count=2*count+1

    }

}

sequence(["3"])
sequence(["8"])
sequence(["17"])
sequence(["31"])
