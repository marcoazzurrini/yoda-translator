class Translation {
    constructor(text) {
        this.text = text;
    }

    traslate() {
        
    }
}


fetch(`https://crossorigin.me/http://yoda-api.appspot.com/api/v1/yodish?text=hello`)
            .then(res => res.json())
            .then(data => console.log(data));