let startBtn = document.querySelector(".start-btn");
let refreshBtn = document.querySelector(".refresh-btn");

let CarN1 = document.querySelector(".car_n1");
let CarN2 = document.querySelector(".car_n2");
let CarN3 = document.querySelector(".car_n3");

let count1 = 0;
let count2 = 0;
let count3 = 0;

startBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  let interval = setInterval(() => {
    // randoms
    let random1 = Math.floor(Math.random() * 100);
    let random2 = Math.floor(Math.random() * 100);
    let random3 = Math.floor(Math.random() * 100);
    //add pixls

    let addPx = (count1 += random1);
    let addPx2 = (count2 += random2);
    let addPx3 = (count3 += random3);

    if (random1 > 0 && random2 > 0 && random3 > 0) {
      CarN1.style.transform = `translate(${addPx}px)`;
      CarN2.style.transform = `translate(${addPx2}px)`;
      CarN3.style.transform = `translate(${addPx3}px)`;
    } else if ((random1 == 0) & (random2 == 0) & (random3 == 0)) {
      count1 = 0;
      count2 = 0;
      count3 = 0;
      CarN1.style.transform = `translate(${count1}px)`;
      CarN2.style.transform = `translate(${count2}px)`;
      CarN3.style.transform = `translate(${count3}px)`;
    }
    if (addPx > 1590) {
      alert("Ko`k Avtomobile Go`lib");
      clearInterval(interval);
    } else if (addPx2 > 1590) {
      alert("Qizil Avtomobile Go`lib");
      clearInterval(interval);
    } else if (addPx3 > 1590) {
      alert("Yashil Avtomobile Go`lib");
      clearInterval(interval);
    }
  }, 1000);
});

refreshBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  location.reload();
});
