function calculateAge(birthDate){
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDays() - birthDate.getDays();

 if(days<0){
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days = days + prevMonth.getDate();
 }
 if(months<0){
    years--;
    months = months+12;
 }
return{years, months, days};

}

const form = document.getElementById("form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const yearError = document.getElementById("year-error");
const monthError = document.getElementById("month-error");
const dayError = document.getElementById("day-error");

const yearOut = documnet.getElementById("year");
const monthOut = documnet.getElementById("month");
const dayOut = document.getElementById("day");

// Validation of the
function validateInput(day, month, year){
   let valid = true;
   const today = new Date();

   dayError.textContent = "";
   monthError.textContent = "";
   yearError.textContent = "";

   if(!day || day < 0 || day > 31){
      dayError.textContent = "Please enter a valid day (1-31)";
      valid = false;
   }

   if(!month || month < 0 || month > 12){
    monthError.textContent = "Please enter a valid month (1-12)";
    valid = false;
   }

   if(!year || year < 1900 || year > today.getFullYear()){
    yearError.textContent = `Enter a valid Year (1900-${today.getFullYear()})`;
    valid = false;
   }

   if(valid){
    const testDate = new Date(year, month-1, day);
    if(
      testDate.getFullYear() !== Number(year) ||
      testDate.getMonth() !== Number(month-1) ||
      testDate.getDate() !== Number(day)
      )
      {
          dayError.textContent = "Invalid Date."
          valid = false;
      }
   
   if(testDate>today){
    yearError.textContent = "Test Date cannot be in the future";
    valid = false;
   }
}
   return valid;
}

// submit
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    if(!validateInput(day, month, year)){
        yearOut.textContent = monthOut.textContent = dayOut.textContent = "--";
        return;
    }

    const birthDate = new(date, month-1, year);
    const age = calculateAge(birthDate);

    yearOut.textContent = age.years;
    monthOut.textContent = age.months;
    dayOut.textContent = day.days;
});

//reset
form.addEventListener("reset", function(e){
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";

    yearOut.textContent = monthOut.textContent = dayOut.textContent = "--";
});




