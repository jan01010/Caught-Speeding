// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Speed & Speed Limit Inputs
  let d1Speed = +document.getElementById("d1-speed").value;
  let d1Limit = +document.getElementById("d1-limit").value;
  let d2Speed = +document.getElementById("d2-speed").value;
  let d2Limit = +document.getElementById("d2-limit").value;
  let d3Speed = +document.getElementById("d3-speed").value;
  let d3Limit = +document.getElementById("d3-limit").value;

  // Calculate & Output Ticket Types
  // Driver 1
  document.getElementById("d1-ticket").innerHTML = tickets(d1Speed, d1Limit);
  document.getElementById("d2-ticket").innerHTML = tickets(d2Speed, d2Limit);
  document.getElementById("d3-ticket").innerHTML = tickets(d3Speed, d3Limit);
}

function tickets(dSpeed, dLimit) {
  let dTicket;
  if (dSpeed > dLimit + 40) {
    dTicket = "Really Big Ticket";
  } else if (dSpeed > dLimit + 20) {
    dTicket = "Big Ticket";
  } else if (dSpeed > dLimit) {
    dTicket = "Small Ticket";
  } else {
    dTicket = "No Ticket";
  }
  return dTicket;
}
