{
  let data = [];

  let num;

  function push_() {
    if (data == "") {
      alert("Array is Empty...");
      num = prompt("enter the data");
      data.push(num);
      document.getElementById("text").innerHTML = data;
    } else {
      num = prompt("enter the data");
      data.push(num);
      document.getElementById("text").innerHTML = data;
    }
  }

  function pop_() {
    if (data == "") {
      alert("Array is Empty...");
    } else {
      data.pop();
      document.getElementById("text").innerHTML = data;

    }
  }
}
