const drawButton = document.getElementById('draw-button');
const numbersContainer = document.getElementById('numbers');

const lottoNumbers = [];
const colors = ['#ff7675', '#74b9ff', '#fdcb6e', '#55efc4', '#a29bfe', '#fd79a8'];

function paintNumber(number) {
    const eachNum = document.createElement('div');
    eachNum.classList.add('ball');
    eachNum.textContent = number;
    const colorIndex = Math.floor(number / 10);
    eachNum.style.backgroundColor = colors[colorIndex];
    numbersContainer.appendChild(eachNum);
}

drawButton.addEventListener('click', function() {
    lottoNumbers.length = 0;
    numbersContainer.innerHTML = '';
    
    const numberSet = new Set();
    while(numberSet.size < 6) {
        const random = Math.floor(Math.random() * 45) + 1;
        numberSet.add(random);
    }
    
    const sortedNumbers = Array.from(numberSet).sort((a,b) => a - b);
    
    sortedNumbers.forEach(number => {
        lottoNumbers.push(number);
        paintNumber(number);
    });
});