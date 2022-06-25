function birthdayParty(rentHall) {

    let cake = rentHall * 0.2;
    let beverages = cake * 0.55
    let animator = rentHall / 3;

    let budget = cake + beverages + animator + Number(rentHall)

    console.log (budget)
}

birthdayParty([2250])
birthdayParty([3720])