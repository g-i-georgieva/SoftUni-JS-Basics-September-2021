function sceleton(input) {
  let minutesControla = Number(input[0]);
  let secondsControla = Number(input[1]);
  let lengthControla = Number(input[2]);
  let secondFor100Metres = Number(input[3]);

  let controlaToReachSec = minutesControla * 60 + secondsControla;
  let reduceTime = (lengthControla / 120) * 2.5;
  let result = ((lengthControla / 100) * secondFor100Metres) - reduceTime;
  if (result <= controlaToReachSec) {
    console.log(
      `Marin Bangiev won an Olympic quota!\nHis time is ${result.toFixed(3)}.`
    );
  }else{
    console.log(`No, Marin failed! He was ${(result-controlaToReachSec).toFixed(3)} second slower.`)
  }
}

sceleton([1,20,1546,12]);
