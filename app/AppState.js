import { Snack } from "./models/Snack.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  money = 0

  snacks = [
    new Snack({ name: 'Fruit Snacks', price: 1.50, imgUrl: 'https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/bulk-welch-s-fruit-snacks-sup----sup-mixed-fruit-packs-250-pc-~k1420-b' }),
    new Snack({ name: 'Cheetos', price: 2.50, imgUrl: 'https://preview.redd.it/jfr6ayg1k2771.jpg?width=1080&crop=smart&auto=webp&s=7ef8c531bda68ea86a17c8845ac5cada70a2c8fb' }),
  ]
  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
