
function onload(){
  addTable();
}

let editId;
let array = [];
function myFunction() {
  let obj = {};
  console.log(obj);

  obj.firstName = document.getElementById("firstName").value; 
  obj.name = document.getElementById("name").value;
  obj.number = document.getElementById("number").value;
  obj.gender = document.getElementById("gender").value;
  console.log(array);

  if (obj.firstName == "") {
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
    obj.firstName == "" ||
    obj.name == "" ||
    obj.number == "" ||
    obj.gender == ""
  ) {
    return false;
  }

  if (editId != undefined) {
    array[editId].firstName = obj.firstName;
    array[editId].name = obj.name;
    array[editId].number = obj.number;
    array[editId].gender = obj.gender;
  } else {
    array.push(obj);
  }
  addTable();


  document.getElementById("firstName").value = "";
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("gender").value = "";
}

function addTable() {
  var table = "";


  for (i = 0; i < array.length; i++) {
    table += " <tr>";
    table += "<td>" + array[i].firstName + "</td>";
    table += "<td>" + array[i].name + "</td>";
    table += "<td>" + array[i].number + "</td>";
    table += "<td>" + array[i].gender + "</td>";
    table +=
      '<td><button class="btn btn-success w-50 mr-3 rounded" style="" onclick="Edit(' +
      i +
      ')">Edit</button><button class="btn btn-danger w-50 rounded"  onclick="Delete(' +
      i +
      ')">Delete</button></td>';
    table += "</tr>";
  }
  document.getElementById("TAB").innerHTML = table;
}
function Edit(id) {
  editId = id;
  console.log(id);
  console.log(array[id]);
  document.getElementById("firstName").value = array[id].firstName;
  document.getElementById("name").value = array[id].name;
  document.getElementById("number").value = array[id].number;
  document.getElementById("gender").value = array[id].gender;
}

function Delete(id) {
  console.log(id);
  array.splice(id, 1);
  console.log(array);
  addTable();
}
