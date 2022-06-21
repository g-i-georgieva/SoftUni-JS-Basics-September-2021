function oscarsCeremony(input) {
    let rentHall = Number(input[0]);

    let prize = rentHall * 0.70
    let catering = prize * 0.85;
    let sound = catering / 2

    let totalprice = rentHall + prize + catering + sound

    console.log(totalprice.toFixed(2))
}
oscarsCeremony([3500])