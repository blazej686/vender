import { AppState } from "../AppState.js";


class MoneyService {

    addMoney() {
        AppState.money += .25
        console.log('Service console update money', AppState.money)

    }
}

export const moneyService = new MoneyService()