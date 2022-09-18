const numeralText = document.querySelector('#numeral');
const convertBtn = document.querySelector('button');
const integerDisplay = document.querySelector('#integer');

convertBtn.addEventListener('click', () => {
    const integer = romanToInt(numeralText.value);
    integerDisplay.textContent = `${numeralText.value} is ${integer} in Arabic numerals`;
    numeralText.value = '';
    numeralText.setAttribute('placeholder', '');
    });

numeralText.addEventListener('input', () => {
    numeralText.value = numeralText.value.toUpperCase();
    numeralText.value = numeralText.value.replace(/[^IVXLCDM]/, '');
});

function romanToInt(s) {
	let numeral = [];
	for (char of s) {
	    switch(char) {
            case 'I':
                numeral.push(1);
                break;
            case 'V':
                numeral.push(5);
                break;
            case 'X':
                numeral.push(10);
                break;
            case 'L':
                numeral.push(50);
                break;
            case 'C':
                numeral.push(100);
                break;
            case 'D':
                numeral.push(500);
                break;
            case 'M':
                numeral.push(1000);
                break;
            }
    }
    return sumNumeral(numeral);
};

function sumNumeral(array) {
	let integer = 0;
	for (let i = array.length - 1; i >= 0; i--) {
        if (array[i + 1] > array[i]) integer -= array[i];
        else integer += array[i];
    }
    return integer;
}