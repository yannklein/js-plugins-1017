import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'clickme' ]

  connect() {
    console.log('Hello from disable_button_controller.js')
    console.log(this.resetTarget)
    console.log(this)
  }

  disable(event) {
    console.log("disbaled")
    const clickedButton = event.currentTarget
    clickedButton.innerText = "☠️"
    clickedButton.setAttribute('disabled','')
    // show the reset button!
    this.resetTarget.classList.remove('d-none')
  }

  enable() {
    console.log("enabled")
    this.resetTarget.classList.add('d-none')
    this.clickmeTarget.innerText = "Click me again"
    this.clickmeTarget.setAttribute('disabled','false')
  }
}