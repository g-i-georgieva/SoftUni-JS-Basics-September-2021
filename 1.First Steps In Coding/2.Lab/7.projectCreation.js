function projectCreation (input){
    let name=input[0];
    let projectNumbers=input[1];
    let expectedHours=projectNumbers*3

    console.log(`The architect ${name} will need ${expectedHours} hours to complete ${projectNumbers} project/s.`);
}

projectCreation (["Sanya", 9,])