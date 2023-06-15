import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="like-post"
export default class extends Controller {
  static targets = ['likes', 'form']
  connect() {
    // console.log(this.likesTarget);
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }


  create(event) {
    event.preventDefault()
    console.log('submittt');
    fetch(this.formTarget.action, {
      method: 'post',
      headers: { "Accept": "application/json" , "X-CSRF-Token": this.csrfToken }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      this.likesTarget.outerHTML = data.likes
    })
  }
}
