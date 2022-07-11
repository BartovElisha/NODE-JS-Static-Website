// New Concept with class
class Watch {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let hour_deg = 0;
        let min_deg = 0;
        let sec_deg = 0;

        let currentDate = new Date();

        // get current year from date object
        let year = currentDate.getFullYear();

        // get current month from date object
        let month = currentDate.getMonth();
        switch(month) {
            case 0:
                month = 'Januar';
                break;

            case 1:
                month = 'Februar';
                break;

            case 2:
                month = 'March';
                break;

            case 3:
                month = 'April';
                break;

            case 4:
                month = 'May';
                break;

            case 5:
                month = 'Juni';
                break;

            case 6:
                month = 'July';
                break;

            case 7:
                month = 'August';
                break;

            case 8:
                month = 'Setember';
                break;

            case 9:
                month = 'October';
                break;

            case 10:
                month = 'November';
                break;

            case 11:
                month = 'December';
                break;

            default:
                break;
        }

        // get current date from date object
        let date = currentDate.getDate();
        if(date < 10) date = '0' + date;
        
        // get current day from date object
        let day = currentDate.getDay(); 
        
        switch(day) {
            case 0:
                day = 'Sunday';
                break;
            
            case 1:
                day = 'Monday';
                break;

            case 2:
                day = 'Tuesday';
                break;

            case 3:
                day = 'Wednesday';
                break;

            case 4:
                day = 'Thursday';
                break;

            case 5:
                day = 'Friday';
                break;

            case 6:
                day = 'Saturday';
                break;

            default:
                break;
        }

        // get current hours from date object
        let hours = currentDate.getHours();

        // get current minutes from data object
        let minutes = currentDate.getMinutes();

        // get current seconds from date object
        let seconds = currentDate.getSeconds();

        // move hours, minutes and seconds arrows on analog watch
        sec_deg = seconds*6;  // 1 second = 6 Deg
        if(sec_deg == 360)
        {
            sec_deg = 0;
        }

        min_deg = minutes*6;  // 1 minute = 6 Deg
        if(min_deg == 360)
        {
            min_deg = 0;
        }

        hour_deg = hours*30 + minutes*0.5;  // 1 hour = 30 Deg, total 12 hours in 360 degs

        document.querySelector('.seconds-arrow').style.transform = 'rotate('+sec_deg+'deg)';
        document.querySelector('.minutes-arrow').style.transform = 'rotate('+min_deg+'deg)';
        document.querySelector('.hours-arrow').style.transform = 'rotate('+hour_deg+'deg)';

        // display digital watch section
        if(hours < 10) hours = '0' + hours;
        if(minutes < 10) minutes = '0' + minutes;
        if(seconds < 10) seconds = '0' + seconds;

        let output = this.template
                    .replace('yyyy',year)
                    .replace('mm',month)
                    .replace('dd',date)
                    .replace('ww',day)
                    .replace('hh',hours)
                    .replace('mm',minutes)
                    .replace('ss',seconds);

        printDateTime(output);            
    }

    start() {
        this.render();
        this.timer = setInterval(() => {this.render()}, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

let watch = new Watch({template: 'dd mm yyyy (ww) hh:mm:ss'});

window.onload = function() {
    watch.start();
}

function printDateTime(dateTime) {
    let divElement = document.getElementById("date-time");
    let hElement = document.getElementById("last-date-time");

    hElement.remove();
    divElement.innerHTML += `<h1 id="last-date-time">${dateTime}</h1>`;
}


// First Version of watch without class
// window.onload = function(){
//     setInterval(fSec,100);

//     let d = new Date();
//     let seconds = d.getSeconds();
//     let minutes = d.getMinutes();
//     let hours = d.getHours();

//     function fSec(){
//         // Get Seconds from Data Object 
//         d = new Date();
//         seconds = d.getSeconds();
//         sec_deg = seconds*6;  // 1 second = 6 Deg
//          if(sec_deg == 360)
//          {
//              sec_deg = 0;
//          }

//         minutes = d.getMinutes();
//         min_deg = minutes*6;  // 1 minute = 6 Deg
//         if(min_deg == 360)
//         {
//             min_deg = 0;
//         }

//         hours = d.getHours();
//         hour_deg = hours*30 + minutes*0.5;  // 1 hour = 30 Deg, total 12 hours in 360 degs

//         document.querySelector('.seconds-arrow').style.transform = 'rotate('+sec_deg+'deg)';
//         document.querySelector('.minutes-arrow').style.transform = 'rotate('+min_deg+'deg)';
//         document.querySelector('.hours-arrow').style.transform = 'rotate('+hour_deg+'deg)';

//         // Print Date and Time
//         printDateTime(d);
//     }
// }

// function printDateTime(date) {
//     let divElement = document.getElementById("date-time");
//     let hElement = document.getElementById("last-date-time");

//     hElement.remove();
//     divElement.innerHTML += `<h1 id="last-date-time">${date}</h1>`;
// }