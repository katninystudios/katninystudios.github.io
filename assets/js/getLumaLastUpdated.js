document.addEventListener("DOMContentLoaded", () => {
   fetch("https://api.github.com/repos/lumabrowser/desktop")
      .then((response) => response.json())
      .then((json) => {
         const time = json.updated_at;
         const date = new Date(time);

         // get hours and determine am/pm
         const hours = date.getHours();
         const amPm = hours >= 12 ? "PM" : "AM";

         // convert hours to 12-hour format
         const twelveHourFormat = hours % 12 || 12;

         // format the date
         const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(-2)} at ${twelveHourFormat}:${date.getMinutes().toString().padStart(2, '0')} ${amPm}`;

         // insert date
         document.getElementById("lastUpdated").textContent = `Last Updated: ${formattedDate} (your time zone)`;
      });
});