function whileDemo (input){

    let index = 0
    let name = input[index]

    while (name!=="Stop") {
        console.log(name)
        index++;
        name=input[index]
    }
}

whileDemo (["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
