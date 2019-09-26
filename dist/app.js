// ASSIGN DOM ELEMENTS TO VARIABLES
const humanInput = document.getElementById('human-input');
const yodishOutput = document.getElementById('yoda-output');
class Translation {
    constructor(text) {
        this.text = text;
    }

    translate() {     
    fetch(`https://cors-anywhere.herokuapp.com/http://yoda-api.appspot.com/api/v1/yodish?text=${humanInput.value}`)
        .then(res => res.json())
        .then(data => {
            yodishOutput.value = data.yodish;
        })
        .catch(err => console.log(err));
    }
}

// LIST FOR KEYUP HUMAN INPUT
humanInput.addEventListener('keyup', () => {
    const newTranwslate = new Translation(humanInput.value);
    newTranwslate.translate();
})

