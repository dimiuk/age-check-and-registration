let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let age = 18;

if (age >= 18 && earlyRegistration) {
  raceNumber += 1000;
}
if (age > 18 && earlyRegistration) {
  console.log(`you will race at 9:30 with race number ${raceNumber}`);
} else if (age > 18 && !earlyRegistration) {
  console.log(`you will race at 11:00 am with race number ${raceNumber}`);
} else if (age < 18) {
  console.log(`you will race at 12:30 pm with race number ${raceNumber}`);
} else {
  console.log("Please see registration desk");
}
