let localst = [];
let infor = {};
let editId;
function addform() {
  window.location.href = "workerstab.html";
}
function submit() {
  var Name = document.getElementById("Name").value;
  var Age = document.getElementById("Age").value;
  var Gender = document.getElementById("Gender").value;
  var Address = document.getElementById("Address").value;
  var Phoneno = document.getElementById("Phoneno").value;
  var Email = document.getElementById("Email").value;

  console.log(Name);
  console.log(Age);
  console.log(Gender);
  console.log(Address);
  console.log(Phoneno);
  console.log(Email);

  if (Name == "") {
    document.getElementById("content").innerHTML = "'Name Required'";
    document.getElementById("content").style.color = "red";
   document.getElementById("Name").style.border ="1px solid red"
  } else {
    document.getElementById("content").innerHTML = "";
    document.getElementById("Name").style.border ="1px solid green"
  }

  if (Age == "") {
    document.getElementById("content2").innerHTML = "'age Required'";
    document.getElementById("content2").style.color = "red";
    document.getElementById("Age").style.border ="1px solid red";
  } else {
    document.getElementById("content2").innerHTML = "";
    document.getElementById("Age").style.border ="1px solid green";
  }

  if (Gender == "") {
    document.getElementById("content3").innerHTML = "'gender Required'";
    document.getElementById("content3").style.color = "red";
    document.getElementById("Gender").style.border ="1px solid red"
  } else {
    document.getElementById("content3").innerHTML = "";
    document.getElementById("Gender").style.border ="1px solid green"
  }

  if (Address == "") {
    document.getElementById("content4").innerHTML = "'address Required'";
    document.getElementById("content4").style.color = "red";
    document.getElementById("Address").style.border ="1px solid red";
  } else {
    document.getElementById("content4").innerHTML = "";
    document.getElementById("Address").style.border ="1px solid green";
  }
  let must = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (Phoneno == "") {
    document.getElementById("content5").innerHTML = "' Mobile number Required'";
    document.getElementById("content5").style.color = "red";
    document.getElementById("Phoneno").style.border ="1px solid red"
  } else if (!must.test(Phoneno)) {
    document.getElementById("content5").innerHTML =
      "The mobile number is not valid ";
      document.getElementById("Phoneno").style.border ="1px solid red"
  } else {
    document.getElementById("content5").innerHTML = "";
    document.getElementById("Phoneno").style.border ="1px solid green"
  }

  let mail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (Email == "") {
    document.getElementById("content6").innerHTML = "'email Required'";
    document.getElementById("content6").style.color = "red";
    document.getElementById("Email").style.border ="1px solid red"
  } else if (!mail.test(Email)) {
    document.getElementById("content6").innerHTML = "Your Email id not valid";
    document.getElementById("Email").style.border ="1px solid red"
  } else {
    document.getElementById("content6").innerHTML = "";
    document.getElementById("Email").style.border ="1px solid green"
  }



  if (
    Name == "" ||
    Age == "" ||
    Gender == "" ||
    Address == "" ||
    Phoneno == "" ||
    Email == ""
  ) {
    return false;
  }
  infor["Name"] = Name;
  infor["Age"] = Age;
  infor["Gender"] = Gender;
  infor["Address"] = Address;
  infor["Phoneno"] = Phoneno;
  infor["Email"] = Email;

  if (editId != undefined) {
    let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";
    fetch(url + "/" + editId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infor),
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        window.location.replace("workerstab.html");
        // getList();
        // Printing our field of our response
        console.log(`Title of our response :  ${string.Name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  } else {
    let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infor),
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        window.location.replace("workerstab.html");
        // getList();
        // Printing our field of our response
        console.log(`Title of our response :  ${string.Name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }

  document.getElementById("Name").value = "";
  document.getElementById("Age").value = "";
  document.getElementById("Gender").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Phoneno").value = "";
  document.getElementById("Email").value = "";
}

function onload() {
  Edit();
}
function Edit() {
  console.log(window);
  var url_string = window.location.href.toLocaleLowerCase();
  console.log(url_string);
  var url1 = new URL(url_string);
  console.log(url1);
  var id = url1.searchParams.get("id");
  console.log(id);
  editId = id;
  if (id) {
    let url = "https://64d5b92a613ee4426d978db0.mockapi.io/workers/employees";
    fetch(url + "/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((Result) => Result.json())
      .then((string) => {
        // Printing our response
        console.log(string);
        localst = string;
        console.log(localst);
        // Printing our field of our response

        document.getElementById("Name").value = localst.Name;
        document.getElementById("Age").value = localst.Age;
        document.getElementById("Gender").value = localst.Gender;
        document.getElementById("Address").value = localst.Address;
        document.getElementById("Phoneno").value = localst.Phoneno;
        document.getElementById("Email").value = localst.Email;

        console.log(`Title of our response :  ${localst.Name}`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });
  }
}
