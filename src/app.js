import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app"
    data: {
      currencies: []
    }, // data brackets
    methods: {
      fetchCurrencies: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(fetchedCurrencies => this.currencies = fetchedCurrencies)
      } //fetchCurrencies brackets
    } // methods brackets
  }) // new Vue brackets
}) // document brackets
