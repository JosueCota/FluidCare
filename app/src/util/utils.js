//File for utility functions like data conversions

//By default, input formatted in 24, function makes sure it shows in 00:00hrs format
export function hourFormat24 (str) {
    
    let [hours, minutes]= ["", ""];

    //Currrently 12 Hour Formatted
    if (str.length > 5) {
        const [time, period] = str.split(" ");
        [hours, minutes] = time.split(":").map(Number);
        if (period === "PM" && hours < 12) {
            hours += 12;
        } else if (period === "AM" && hours === 12) {
            hours = 0;
        }
    } 
    //For Setup Info Screen Input / Changing Setup Info
    else {
        [hours, minutes] = str.split(":").map(Number);
    }
    
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    try{ 
        return hours + ":" + minutes;
    } catch(error) {
        console.log(error);
    }
}

//Formats 24Hour into 12Hour
export function hourFormat12 (str) {
    //Makes sure str is already properly formatted
    str = hourFormat24(str);
    const [hourString, minute] = str.split(":");
    const hour = + hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
}
