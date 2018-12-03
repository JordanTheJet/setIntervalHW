// Look up what the setInterval() function is in JavaScript (W3 Schools does a good job with this)
// Using the setInterval() function, create a class called Timer
// One of the functions of this class should countdown from 60
// Another function should call an alert or modal that alerts the user that time is up (meaning you call that function within your first function)
// In all, you should have a .html file that shows the countdown, and a .js file that executes the countdown using a class that you create called Timer

let time = 60


class Timer {
    
    timeFunction(){
        setInterval(function countdown(){
            
            if(time>=1){
            time=time-1
            let number = document.getElementById("number")
            number.innerHTML=time
            console.log(time)
            }else if(time == 0){
                alert("time's up!")
            }else{
                console.log("something went wrong")
            }
            
            
        }, 1000);
    }
}

let startTimer= new Timer();

