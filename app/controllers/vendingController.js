import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnackList() {

    const snacks = AppState.snacks
    console.log('snacks', snacks)
    let content = ''
    snacks.forEach(snack => content += snack.SnackList)
    setHTML('snacks', content)
}


export class SnacksController {

    constructor() {
        console.log('Snacks controller loaded')
        _drawSnackList()

    }

    buySnack(name) {
        console.log(name)
        if (AppState.money < AppState) {
            return
        }
    }


}

