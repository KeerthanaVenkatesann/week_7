
function addform() {
  window.location.href = "workersform.html";
}
function backform(){
  window.location.href = "index.html";
}

let localst = [];
let editId;
function onload() {
  gettable();
}
function gettable() {
  editId = undefined;
  let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees"

  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      // Printing our response
      // console.log(string);
     
      console.log(string);
      localst = string;
      addTable();
      // Printing our field of our response
      console.log(`Title of our response :  ${localst.firstname}`);
    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function addTable() {
  var table = "";
console.log(localst);

  for (i = 0; i < localst.length; i++) {
    table += " <tr>";
    table += "<td>" + localst[i].Name+ "</td>";
    table += "<td>" + localst[i].Age + "</td>";
    table += "<td>" + localst[i].Gender + "</td>";
    table += "<td>" + localst[i].Address + "</td>";
    table += "<td>" + localst[i].Phoneno + "</td>";
    table += "<td>" + localst[i].Email + "</td>";
    table +=
      '<td><button class="btn btn-success mr-3 w-50 rounded"  style="" onclick="Edit(' +
      localst[i].id +
      ')">Edit</button><button class="btn btn-danger w-50 rounded"  onclick="Delete(' +
      localst[i].id +
      ')">Delete</button></td>';

    table += "</tr>";


    // }
  }
  document.getElementById("work").innerHTML = table;
}


function Delete(id) {
 

  let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees"

  fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((Result) => Result.json())
    .then((string) => {
      gettable();
      console.log(`Title of our response :  ${string.Name}`);

    })
    .catch((errorMsg) => {
      console.log(errorMsg);
    });
}
function Edit(id) {
  editId = id;
  window.location.href = "workersform.html?id=" + id;
}