function Current_Time(){
    var CurrentDate = new Date();
    //Instead of using getYear(), using getFullYear can return the exact year.
    var Year = CurrentDate.getFullYear();
    
    //getMonth can only get from 0 to 11, add 1 later
    var Month = CurrentDate.getMonth();

    //The number of weekday from 0 to 6, add 1 later
    var Day = CurrentDate.getDay();

    //The number of the day of the month
    var Date_day = CurrentDate.getDate();

    //Month Array
    var Month_array = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    //Date_day array
    var DD_array = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    
    //HMS: Hour, Minues, Second
    //00:00:00
    var Hour = CurrentDate.getHours();
    var Minute = CurrentDate.getMinutes();
    var Second = CurrentDate.getSeconds();
    var tmp;// for after midnight and pass Midday
        if(Hour==24){
            Hour=0;
        }
        if(Hour<12){
            tmp = "am";
        }
        if(Hour>=12){
            tmp = "pm";
        }
        
        //English Greeting:
        var English_Greeting;
        if(Hour>=5&&Hour<12){
            English_Greeting = "Good Morning!";
        }
        if(Hour>=12&&Hour<17){
            English_Greeting = "Good Afternoon!";
        }
        if(Hour>=17||Hour<5){
            English_Greeting = "Good Evening!";
        }

        if(Hour<10){
            Hour='0'+Hour;
        }
        if(Minute<10){
            Minute='0'+Minute;
        }
        if(Second<10){
            Second='0'+Second;
        } 
        
        var Digital_Clock = document.getElementById("clockDisplay");
        Digital_Clock.textContent=""+ DD_array[Day] +", " + Month_array[Month] +" "+ Date_day + ", " + Year +"\n"+English_Greeting +" "+Hour + ":"+ Minute + ":"+ Second + " " +tmp;
        Digital_Clock.innerText=""+ DD_array[Day] +", " + Month_array[Month] +" "+ Date_day + ", " + Year +"\n"+English_Greeting +" "+Hour + ":"+ Minute + ":"+ Second + " " +tmp;

        setTimeout("Current_Time()", 1000);
}
Current_Time();

function myEmail(){alert("mait6@mcmaster.ca");}