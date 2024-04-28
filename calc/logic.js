let display = document.getElementById('display');

function displayapp(input){
  display.value += input;
}

function clearinput(){
  display.value = '';
}

function equal(){
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function delet(){
    display.value = display.value.substring(0,display.value.length-1);
}
