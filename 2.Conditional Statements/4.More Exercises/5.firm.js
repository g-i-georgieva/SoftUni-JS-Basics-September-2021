function firm(input) {
    let neededHours = Number(input[0]);
    let daysOnDisposal = Number(input[1]);
    let numEmloyees = Number(input[2]);

    let daysForWork = daysOnDisposal * 0.90
    let hoursForWork = daysForWork * 8;
    let additionalHours = numEmloyees * 2 * daysOnDisposal
    let totalHours = Math.floor(additionalHours + hoursForWork)
    if (totalHours >= neededHours) {
        console.log(`Yes!${Math.floor(totalHours-neededHours)} hours left.`)
    } else {
        console.log(`Not enough time!${Math.floor(neededHours-totalHours)} hours needed.`)
    }
}


firm([99, 3, 1])