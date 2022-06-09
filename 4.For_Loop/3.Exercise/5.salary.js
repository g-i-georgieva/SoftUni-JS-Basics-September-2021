function solve(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1])
    let isHaveMoney=true

    for (let i = 2; i <= openTabs+1; i++) {
        let openWebSite = input[i]

        if (openWebSite == "Facebook") {
            salary -= 150
        } else if (openWebSite == "Instagram") {
            salary -= 100
        } else if (openWebSite == "Reddit") {
            salary -= 50
        }

        if (salary<=0){
            isHaveMoney=false
            console.log(`You have lost your salary.`);
            break;
        }

    }
    if(isHaveMoney){
        console.log(salary);
    }
    
}
solve(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
])
solve (["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
solve (['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg', ''])