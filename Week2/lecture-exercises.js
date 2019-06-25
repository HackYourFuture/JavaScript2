async function getRandomAdvice() {
  const adviceReq = fetch('https://api.adviceslip.com/advice'); // send request
  const adviceResponse = await adviceReq; // wait until something comes back
  // const jsonString = await adviceResponse.text();
  // return jsonString
  // const adviceData = JSON.parse(jsonString)
  // return jsonString
  const adviceData = await adviceResponse.json(); // parses JSON string into native JavaScript object
  return adviceData.slip.advice;
}

async function setRandomAdvice() {
  const adviceEl = document.getElementById('advice');
  adviceEl.innerText = await getRandomAdvice();
}

setRandomAdvice();
