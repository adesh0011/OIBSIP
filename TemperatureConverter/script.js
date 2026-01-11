const input = document.querySelector("#converter");
const result = document.querySelector(".result");
const changeBtn = document.querySelector(".changeButton");
const resetBtn = document.querySelector(".resetButton");
const C = document.querySelector(".C");
const F = document.querySelector(".F");
const meter = document.querySelector(".fill");
const toggle = document.querySelector(".theme-toggle");

input.addEventListener("input", convert);

changeBtn.onclick = () => {
  if(C.innerHTML === "°C"){
    C.innerHTML="°F";
    F.innerHTML="°C";
    input.placeholder="Enter °F";
  }else{
    C.innerHTML="°C";
    F.innerHTML="°F";
    input.placeholder="Enter °C";
  }
  convert();
};

resetBtn.onclick = () => {
  input.value="";
  result.innerHTML="";
  meter.style.width="0%";
};

function convert(){
  let val = input.value;
  if(val === ""){
    result.innerHTML="";
    meter.style.width="0%";
    return;
  }

  if(C.innerHTML === "°C"){
    let f = (val * 1.8) + 32;
    result.innerHTML = `${val} °C = ${f.toFixed(2)} °F`;
    meter.style.width = Math.min((f/120)*100,100)+"%";
  }else{
    let c = (val - 32) / 1.8;
    result.innerHTML = `${val} °F = ${c.toFixed(2)} °C`;
    meter.style.width = Math.min((c/50)*100,100)+"%";
  }
}

toggle.onclick = ()=>{
  document.body.classList.toggle("dark");
  toggle.innerHTML = document.body.classList.contains("dark") ? "☀" : "🌙";
};
