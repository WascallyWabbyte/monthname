var month, answer, looper = true, year = new Date().getFullYear();



while(looper){
  month = prompt("Enter a month");                             // ask the user to enter a month
  monthNum = new Date(month + " 1, " + year).getMonth() + 1;   // get month number by concatenating the input from the
                                                               // user and todays year into a format readable by the
                                                               // Date object then using the getMonth method

  if (!Number.isNaN(monthNum)) {                  //conditional uses isNaN to check whether a number is stored in
                                                  //monthNum. A number will only be stored if the user entered an actual
                                                  //month, as the Date constructor above wont accept anything else

    answer = new Date(year, monthNum, 0).getDate(); // if you create a Date object with this format and with the values
                                                    // 2021, 6, 1 (if the user wants the number of days in June) you'll get July 1 (as the months are zero based), but if you use 0 as the day value then you'd get the last day of the previous month (5) and the last day of a month is the number of days in that month
    document.getElementById('content').innerHTML = "The are " + answer + " days in " + month;
    looper = false;
  }else {
    alert("Enter an actual month!!!!");
  }
}
