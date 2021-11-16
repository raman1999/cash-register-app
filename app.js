const billAmount = document.querySelector("#billAmount");
const cashGiven = document.querySelector("#cashGivenu");

const cashGivenGroup = document.querySelector("#cashGivenGroup");

const btnNext = document.querySelector("#btnNext");
const btnCheck = document.querySelector("#btnCheck");

const errorMessage = document.querySelector("#message");
const returnAmountDisplay = document.querySelector("#returnAmount");

const output = document.querySelector("#output");

const noOfNotes = document.querySelectorAll(".noOfNotes");
const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

btnNext.addEventListener("click", () => {
 error("");//to clear error occured previously
  const bill = billAmount.value;
  if (bill > 0) {
    btnNext.classList.add("hidden");
    cashGivenGroup.classList.remove("hidden");
  } else {
    error("Enter a valid bill amount.");
  }
});

btnCheck.addEventListener("click", () => {
 error("");
  const cashValue = cashGiven.value;
  const billValue = billAmount.value;
  if (billValue > 0 && cashValue > 0) {
    let returnAmount = cashValue - billValue;
    if (returnAmount ==0) {
      error("No amount should be returned.");
      output.classList.add("hidden");
    } else if(returnAmount<0)
    {
      error("Cash given is less than bill value");
      output.classList.add("hidden");
    }
    
    else {
      output.classList.remove("hidden");
      returnAmountDisplay.textContent = returnAmount;
      calculateChange(cashValue, billValue);
    }
  } else {
    error("Enter a valid bill amount and cash given amount.");
  }
});

function calculateChange(cash, bill) {
  let restAmount = cash - bill;
  for (let i = 0; i < notesAvailable.length; i++) {
    let notes = Math.floor(restAmount / notesAvailable[i]);

    restAmount = restAmount - notes * notesAvailable[i];
    noOfNotes[i].innerText = notes;
  }
}
function error(message) {
  errorMessage.textContent = message;
}



