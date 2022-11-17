var clockInBtn = document.getElementById('clockInBtn');
var startTime = document.getElementById('inTime');
var endTime = document.getElementById('outTime');
var timeWorked = document.getElementById('totalTime');

clockInBtn.addEventListener("click", timeStamp);


function timeStamp (event){
  
  var timeStamp = moment().format("[Date: ]DD/MM/YYYY [Time: ] HH:mm:ss");
  var id = event.target.id;
  
  if(id === 'clockOutBtn') {
    var localclockInBtn = localStorage.getItem("clockInBtn");
    var clockOut = moment().format("DD/MM/YYYY HH:mm:ss");

    var diff = moment.utc(moment(clockOut, "DD/MM/YYYY HH:mm:ss").diff(moment(localclockInBtn, "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");

    var node = document.createElement('li');
      node.append(timeStamp);
      document.getElementById("outTime").appendChild(node);
    
    var node = document.createElement('li');
      node.append("Total: " + diff);
      document.getElementById("totalTime").appendChild(node);
    
      document.getElementById('clockOut').id = 'clockInBtn';

    
  } else {
      localStorage.setItem(id, timeStamp);
      var node = document.createElement('li');
      node.append(timeStamp);
      document.getElementById("inTime").appendChild(node);
      clockInBtn.id = 'clockOutBtn';
  }
  
}




