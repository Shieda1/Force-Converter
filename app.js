// https://www.omnicalculator.com/conversion/force-conversion

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kNRadio = document.getElementById('kNRadio');
const NRadio = document.getElementById('NRadio');

let kN;
let N = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

kNRadio.addEventListener('click', function() {
  variable1.textContent = 'N';
  N = v1;
  result.textContent = '';
});

NRadio.addEventListener('click', function() {
  variable1.textContent = 'kN';
  kN = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kNRadio.checked)
    result.textContent = `kN = ${computekN().toFixed(5)}`;

  else if(NRadio.checked)
    result.textContent = `N = ${computeN().toFixed(5)}`;
})

// calculation

function computekN() {
  return Number(N.value) / 1000;
}

function computeN() {
  return Number(kN.value) * 1000;
}