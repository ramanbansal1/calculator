var input = document.querySelector(".input")
var output = document.querySelector(".output")

var buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    if (button.innerText == 'C') {
      // Clear All
      input.innerHTML = '&nbsp;'
      output.innerHTML = "&nbsp;"
    }

    else if (button.innerText == '=') {
      // For equal to
      
      try {
        output.innerHTML = eval(input.innerHTML.replace("&nbsp;", ''))
      } 
      
      catch (e) {
        if (e == SyntaxError) {
          alert("Invalid Input")
        } else {
          alert("Oops! An unknown error occur. Try again")
        }
      }
    }
    
    else if (button.innerText == '%') {
      // for %
      input.innerHTML += '/100'
    }
    
    else if (button.innerText == '⌫') {
      // For Backspace
      input.innerHTML = input.innerHTML.substring(0, input.innerHTML.length-1)
    }
    
    else if (button.innerText == '+/-') {
      // Negative or positive values
      if (input.innerHTML.substring(0, 7) == "(-1) * ") {
        input.innerHTML = input.innerHTML.replace('(-1) * ', '')
      } else {
        input.innerHTML = '(-1) * ' + input.innerHTML.toString()
      }
    }
    
    else {
      // For 1 2 3 4... buttons
      input.innerHTML = input.innerHTML + button.innerHTML
    }

  })
})
