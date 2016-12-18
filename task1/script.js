createForm();

function createForm(){
  var $form = document.createElement('form');
  $form.name = "login";
  $form.action = "google.com";
  $form.setAttribute("onsubmit", "return validate()");
  $body = document.getElementsByTagName('body')[0];
  $body.insertBefore($form, $body.childNodes[0]);
  createElements($form);
}

function createElements($form) {
  var elements = {
    age: {
      type: 'text',
      name: 'age',
      placeholder: '20' 
    },
    username: {
      type: 'text',
      name: 'username',
      placeholder: 'user_'
    },
    date: {
      type: 'text',
      name: 'date',
      placeholder: 'DD/MM/YYYY'
    },
    submit: {
      type: 'submit',
      value: 'Validate Me'
    }
  }
  for (var attribute in elements) {
    var $input = document.createElement('input');
    var attrChild = elements[attribute];
    for (var attribute in attrChild) {
      $input.setAttribute(attribute, attrChild[attribute]);
    }
    $form.appendChild($input);
  }
}

function validate(){
  var ageValid = false;
  var usernameValid = false;
  var dateValid = false;
  elements = document.forms[0].childNodes;
  $age = elements[0].value;
  $username = elements[1].value;
  $date = elements[2].value;

  if (($age.search(/([0-9])/g) !== -1 ) && ($age.search(/([a-z])/g) == -1) && ($age.search(/(\s)/g) == -1)) {
    ageValid = true;
  }else{
    alert("Сheck age input");
  }

  if (($username.search("user_") < 1) && ($username.search("user_") !== -1)) {
    usernameValid = true;
    console.log("username valid");
  }else{
    alert("Check username input");
  }

  if ($date.split("/").length == 3) {
    if (($date.split("/")[0] <= 31) && ((date.split("/")[1] > 12) || (date.split("/")[1] <= 0))) {
      dateValid = true;
    }else{
      alert("Your date ");
    } 
  }else{
    alert("Check data input");
  }


  return ageValid && usernameValid && dateValid ? true : false;
}




  



