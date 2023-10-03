import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";


function _drawMoney() {

    setText('totalMoney', AppState.money)
}

export class moneyController {

    constructor() {
        AppState.on('money', _drawMoney)
    }

    addMoney() {
        moneyService.addMoney()
    }
}