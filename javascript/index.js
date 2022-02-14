// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })

  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    return (document.querySelector(
      "#steak"
    ).innerHTML += `<li>Steak ready!</li>`);
  })

  .catch((reject) => {
    document.querySelector("#steak").innerHTML += `<li>${reject}</li>`;
  });

// Iteration 3 using async/await

const stepsBrusel = async () => {
  try {
    const response = await obtainInstruction("brusselsSprouts", 0);
    const response1 = await obtainInstruction("brusselsSprouts", 1);
    const response2 = await obtainInstruction("brusselsSprouts", 2);
    const response3 = await obtainInstruction("brusselsSprouts", 3);
    const response4 = await obtainInstruction("brusselsSprouts", 4);
    const response5 = await obtainInstruction("brusselsSprouts", 5);
    const response6 = await obtainInstruction("brusselsSprouts", 6);
    const response7 = await obtainInstruction("brusselsSprouts", 7);

    return (document.querySelector("#brusselsSprouts").innerHTML +=
      `<li>${response}</li>` +
      `<li>${response1}</li>` +
      `<li>${response2}</li>` +
      `<li>${response3}</li>` +
      `<li>${response4}</li>` +
      `<li>${response5}</li>` +
      `<li>${response6}</li>` +
      `<li>${response7}</li>` +
      `<li>Brussels Sprouts ready!</li>`);
  } catch (reject) {
    return reject;
  }
};

stepsBrusel();
// obtain para pasos

// return una string " brocoli is ready"

// Bonus 2 - Promise all
// ...
