import './sass/main.scss';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  let timerId = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };



  const refs = {
      startBtn: document.querySelector('button[data-action="start"]'),
      stopBtn: document.querySelector('button[data-action="stop"]'),
      body: document.querySelector('body')
  };

  function changeColor() {
    refs.startBtn.removeEventListener('click', changeColor);
    timerId = setInterval(() => {
     refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
    }, 1000);}

 
    refs.startBtn.addEventListener('click', changeColor);


  refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startBtn.addEventListener('click', changeColor);

  })

