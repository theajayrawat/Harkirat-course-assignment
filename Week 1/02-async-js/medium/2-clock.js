// <!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->

function formatTime(value){
    return value.toString().padStart(2,'0');
}


function printMachineTime(){
    let Time = "";
    let date = new Date();
    let min = formatTime(date.getMinutes());
    let sec = formatTime(date.getSeconds());
    let hrs = formatTime(date.getHours());

    if(hrs < 12 ){
          Time = "AM";
    }
    else{
          hrs = hrs - 12;
          Time = "PM"
    }
    const answer = hrs+":"+min+":"+sec+" "+Time;
    console.log(answer);
}


function printTime(){
    console.clear();
    printMachineTime();
}

setInterval(printTime,1000);
