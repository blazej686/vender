export class Snack {


    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }


    get SnackList() {
        return `<div class="col-3 text-center">
        <img class="img-fluid" src="${this.imgUrl}" alt="${this.name}">
        <button onclick="app.SnacksController.buySnack(${this.name})"
          class="btn btn-primary">${this.price}</button>
        </div>
        `
    }
}