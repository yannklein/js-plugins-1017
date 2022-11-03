import Sortable from 'sortablejs';
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    console.log('Hello from sortable_controller.js')
    // console.log(this.testTarget)
    // this.element == the HTML element having the data-controller
    const results = this.element
    Sortable.create(results, {
      ghostClass: "ghost",
      animation: 1500,
      // onEnd: (event) => {
      //   alert(`${event.oldIndex} moved to ${event.newIndex}`)
      // }
    });
  }
}