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
    document.querySelector("#steak").innerHTML += `<li>Steak ready!</li>`;
    document.querySelector("#steakImg").hidden = false;
  })

  .catch((reject) => {
    document.querySelector("#steak").innerHTML += `<li>${reject}</li>`;
  });

// Iteration 3 using async/await

const makeBrocoli = async () => {
  try {
    const response = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${response}</li>`;
    const response1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;
    const response2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;
    const response3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;
    const response4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;
    const response5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;
    const response6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli ready!</li>`;
    document.querySelector("#broccoliImg").hidden = false;
  } catch (reject) {
    return reject;
  }
};
makeBrocoli();

// obtain para pasos

// Bonus 2 - Promise all

Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  //(document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`),
  obtainInstruction("brusselsSprouts", 1),
  // (document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
]).then((resolve) => {
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[0]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[1]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[2]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[3]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[4]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[5]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[6]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${resolve[7]}</li>`;
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li> Brussels sprouts are ready!</li>`;

  document.querySelector("#brusselsSproutsImg").hidden = false;
});
