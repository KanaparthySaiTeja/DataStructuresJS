let birthDayMap = new Map();

function getDate() {
    let startDate = new Date("1992-01-01");
    let endDate = new Date("1993-12-31");
    let date = endDate.getTime() - startDate.getTime()
    return new Date(startDate.getTime() + Math.random() * (date));
}

for(var i = 1; i < 50; i++) {
    
    let birthday = getDate();
    console.log(birthday)
    let username = "user" + i;
    let month = birthday.getMonth() +1 ;

    if(birthDayMap.has(month)) {
        let users = birthDayMap.get(month);
        users.push(username);
        birthDayMap.set(month, users);
    }else {
        let users = new Array(username)
        birthDayMap.set(month, users);
    }
}

for(let [key, value] of birthDayMap){
    console.log("Month : " + key + " --> Users : " + value);
}