//Getting Aircraft from Database
function retrieve_Aircraft() {
fetch("./database.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
})
}

retrieve_Aircraft()

var aircraft_data = response.json()


//Printing aircraft information to console

function Aircraft() {
  let input = document.getElementById("search_bar").value
  if (input == "B737") {
    console.log(aircraft_data)
  }
  else {
    console.log(B747)
  }
}