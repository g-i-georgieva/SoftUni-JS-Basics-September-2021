function bookList (input){
    let currentBookPages=Number(input[0]);
    let pagesPerHour=Number(input[1]);
    let daysForBook=Number(input[2]);

    let totalHoursForReading=(currentBookPages/pagesPerHour)/daysForBook

    console.log(totalHoursForReading);
}

bookList (["212","20","2"]);
bookList (["432","15","4"]);