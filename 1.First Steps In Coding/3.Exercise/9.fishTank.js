function fishTank(input) {
    let length = Number(input[0])
    let width = Number(input[1])
    let height=Number(input[2])
    let persent=Number(input[3])
    let volumeInCm=length*width*height
    let volumeLt=volumeInCm*0.001

    let volumeOthers=volumeLt*persent/100

    let totalLt=volumeLt-volumeOthers

    console.log(totalLt);

}

fishTank(["85 ",
    "75 ",
    "47 ",
    "17 "
])
fishTank(["105 ",
    "77 ",
    "89 ",
    "18.5 "
])