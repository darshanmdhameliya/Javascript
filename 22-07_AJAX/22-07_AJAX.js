/* javascript AJAX */

{
  var https = new XMLHttpRequest();

  https.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log("Page Not Found!");
    }
  };

  https.open("GET", "./input.txt", true);
  https.send();
}

{
  var https = new XMLHttpRequest();

  https.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
    if (this.readyState == 4 && this.status == 404) {
      console.log("Page Not Found!");
    }
  };

  https.open("GET", "./input.txt", true);
  https.send();
}

/* javascript Function Method */

/* Apply ,call ,Bind */

// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).


// apply(thisArg)
// apply(thisArg, argsArray)

{
    let profile = {
        firstname:'darshan',
        lastname:'dhameliya'
    }


    function profileapply(a,b){
        console.log(`${a}=${b}  ${this.firstname} = ${this.lastname}`);
    }

    let Funcapply = profileapply.apply(profile, ['hi','how are you!'])

    console.log(Funcapply);
}

