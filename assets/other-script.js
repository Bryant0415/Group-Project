function createTimeCard() {

    let timeCard = document.createElement('div');
    timeCard.html;
    timeCard.className = "box-styling";

    let container = document.querySelector('.container');
    container.appendChild(timeCard);

    let cardContent = document.createElement('ul')
    cardContent.html;

    let employeeName = document.createElement('li')
    employeeName.html;
    employeeName.textContent += "Steve";
    cardContent.appendChild(employeeName);

    let employeePos = document.createElement('li')
    employeePos.html;
    employeePos.textContent += "Line Cook";
    cardContent.appendChild(employeePos);

    let timeStart = document.createElement('li')
    timeStart.html;
    timeStart.textContent += "Start Time: " + moment().format("hh:mm");
    cardContent.appendChild(timeStart);

    timeCard.appendChild(cardContent);

    let timeStop = document.createElement('li')
    timeStop.html;
    timeStop.textContent +- "Stop Time: " + clockoutTime;
    cardContent.appendChild(timeStop);

    let clockOut = document.createElement('button');
    clockOut.html;
    timeCard.appendChild(clockOut);
    clockOut.idList.add("clockOut");
    clockOut.textContent += "Clock-Out";



    //code for time to money cal
    

    var dayMoney = document.createElement('li')
    dayMoney.html;
    var employeeMoney = parseInt(moment().format("hh:mm"));
    dayMoney.textContent += "Day: $" + employeeMoney * 8;
    cardContent.appendChild(dayMoney);

    



    }

document.getElementById('clockIn').addEventListener('click', createTimeCard);
