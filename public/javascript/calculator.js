// const metricForm = document.querySelector('metric');
// const imperialForm = document.querySelector('imperial');

// function metric() {   
//     document.querySelector('.metric').style.display = "block"
//     document.querySelector('.imperial').style.display = "none"

// }


// function imperial() {   
//     document.querySelector('.metric').style.display = "none"
//     document.querySelector('.imperial').style.display = "block"

// }

// Obtém as referências para os elementos de opção de rádio
const metricOption = document.querySelector('.metric .radio-type');
const imperialOption = document.querySelector('.imperial .radio-type');


const metricRadio = document.querySelector('.metric .type-metric');
const imperialRadio = document.querySelector('.imperial .type-imperial');


// Obtém as referências para as divs que precisam ser mostradas ou ocultadas
const metricForm = document.querySelector('.form-data.metric');
const imperialForm = document.querySelector('.form-data.imperial');

// Define os eventos de clique para as opções de rádio
 function metric() {
  // Exibe a div "form-data metric" e oculta a div "form-data imperial"
  metricForm.style.display = 'block';
  imperialForm.style.display = 'none';

  metricRadio.checked = true;
  imperialOption.checked = false;
 
};

function imperial() {
  // Exibe a div "form-data imperial" e oculta a div "form-data metric"
  imperialForm.style.display = 'block';
  metricForm.style.display = 'none';

  imperialRadio.checked = true;
  metricOption.checked = false;
};