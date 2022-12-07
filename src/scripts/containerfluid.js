/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line func-names
(function () {
  class container_fluid extends HTMLElement {
    connectedCallback() {
      this.judul = this.getAttribute('judul') || '';
      this.lead = this.getAttribute('lead') || '';
      this.button = this.getAttribute('button') || '';
      this.spesifik = this.getAttribute('spesifik') || '';
      this.opsi = this.getAttribute('opsi') || '';

      this.innerHTML = `
    <div class="p-5 my-4  rounded-3" style="margin-bottom:10px auto ;margin: 0 auto; width: 92%;">
        <h1>${this.judul}</h1>
        <p class="lead"><span>${this.lead}</span></p>
        
        <p><a href="${this.button} " class="btn btn-black btn-lg">learn more&raquo;</a></p>
        

    </div>
    `;
    }
  }

  window.customElements.define('create-fluid', container_fluid);
}());
