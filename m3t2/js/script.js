{
  const myInput = document.querySelector('#myInput');
  const myOutput= document.querySelector('#myOutput');

  const outputFunc = (text) => {
    myOutput.textContent = text;
  };
  
  myInput.addEventListener('input', e => {    
    setTimeout(outputFunc, 300, e.target.value);
  });
}
