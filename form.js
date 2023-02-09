function buat_login() {
  var e = document.getElementById("X");
  e.parentElement.removeChild(e);

  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silahkan Mendaftar";
  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("form");
  element.appendChild(form);

  var labelx = document.createElement("label");
  labelx.innerHTML = "Nomor Handphone";
  form.appendChild(labelx);
  var input_no = document.createElement("input");
  input_no.type = "number";
  input_no.name = "number";
  input_no.className = "form_login";
  input_no.placeholder = "Nomor Handphone";
  form.appendChild(input_no);

  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);
  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email";
  form.appendChild(input_username);

  var label2 = document.createElement("label");
  label2.innerHTML = "Password";
  form.appendChild(label2);
  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password..";

  form.appendChild(input_password);
  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
