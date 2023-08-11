// function onload() {

// }
function onload() {
  addTable();
}
let editId;
let localst = [];
function myFunction() {
  let obj = {};
  console.log(obj);
  obj.firstname = document.getElementById("firstName").value;

  obj.name = document.getElementById("name").value;
  obj.number = document.getElementById("number").value;
  obj.gender = document.getElementById("gender").value;
  console.log(localst);

  if (obj.firstname == "") {
    document.getElementById("content").innerHTML = "'Name Required'";
    document.getElementById("content").style.color = "red";
  } else {
    document.getElementById("content").innerHTML = "";
  }

  if (obj.name == "") {
    document.getElementById("content2").innerHTML = "'age Required'";
    document.getElementById("content2").style.color = "red";
  } else {
    document.getElementById("content2").innerHTML = "";
  }

  if (obj.number == "") {
    document.getElementById("content3").innerHTML = "'gender Required'";
    document.getElementById("content3").style.color = "red";
  } else {
    document.getElementById("content3").innerHTML = "";
  }

  if (obj.gender == "") {
    document.getElementById("content4").innerHTML = "'address Required'";
    document.getElementById("content4").style.color = "red";
  } else {
    document.getElementById("content4").innerHTML = "";
  }

  if (
    obj.firstname == "" ||
    obj.name == "" ||
    obj.number == "" ||
    obj.gender == ""
  ) {
    return false;
  }

  if (editId != undefined) {
    localst[editId].firstName = obj.firstname;
    localst[editId].name = obj.name;
    localst[editId].number = obj.number;
    localst[editId].gender = obj.gender;
  } else {
    localst = [];
    localst.push(obj);
  }
  localStorage.setItem("array", JSON.stringify(localst));

  addTable();

  document.getElementById("firstName").value = "";
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("gender").value = "";
}

function addTable() {
  var table = "";
  localst = JSON.parse(localStorage.getItem("array"));
  if (localst !== null && localst.length > 0) {
    for (i = 0; i < localst.length; i++) {
      table += " <tr>";
      table += "<td>" + localst[i].firstname + "</td>";
      table += "<td>" + localst[i].name + "</td>";
      table += "<td>" + localst[i].number + "</td>";
      table += "<td>" + localst[i].gender + "</td>";
      table +=
        '<td><button class="btn btn-success mr-3 w-50 rounded"  style="" onclick="Edit(' +
        i +
        ')">Edit</button><button class="btn btn-danger w-50 rounded"  onclick="Delete(' +
        i +
        ')">Delete</button></td>';
      table += "</tr>";
    }
  }
  document.getElementById("demo").innerHTML = table;
}
function Edit(id) {
  editId = id;
  console.log(id);
  console.log(localst[id]);

  document.getElementById("firstName").value = localst[id].firstname;
  document.getElementById("name").value = localst[id].name;
  document.getElementById("number").value = localst[id].number;
  document.getElementById("gender").value = localst[id].gender;
}

function Delete(id) {
  console.log(id);
  localst.splice(id, 1);
  console.log(localst);
  localStorage.setItem("array", JSON.stringify(localst));
  addTable();
}
