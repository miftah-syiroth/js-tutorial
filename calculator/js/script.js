const initApp = () => {
    const currentValueElem = document.querySelector('.currentvalue'); //input element
    const previousValueElem = document.querySelector('.previousvalue');
    const itemArray = [];
    const equationArray = [];
    let newNumberFlag = false;

    const inputButtons = document.querySelectorAll('.number');
    inputButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            const newInput = event.target.textContent; //get number from button that clicked
            if (newNumberFlag) { // kalau ga ada value pada input atau nilai awal adalah 0
                currentValueElem.value = newInput;
                newNumberFlag = false;
            } else { // kalau udh ada value, misal 2. jika masukkan angka 3 maka jadi 23.
                currentValueElem.value =
                    currentValueElem.value == 0
                        ? newInput
                        : `${currentValueElem.value}${newInput}`;
            }
        })
    })

    const clearButtons = document.querySelectorAll('.clear, .clearEntry');
    clearButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            currentValueElem.value = 0;

            if (event.target.classList.contains('clear')) {
                previousValueElem.textContent = '';
                itemArray = [];
            }
        })
    })

    const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        // mulai dari 0 dan semuanya kecuali karakter terakhir
        currentValueElem.value = currentValueElem.value.slice(0, -1);
    })
}

document.addEventListener("DOMContentLoaded", initApp);