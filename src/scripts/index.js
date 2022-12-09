/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import $ from 'jquery';
// eslint-disable-next-line import/no-unresolved
import '/src/scripts/containerfluid.js';

// import world covid datas
$.ajax({
  // eslint-disable-next-line linebreak-style
  url: 'https://api.covid19api.com/summary',
  success(data) {
    // entry point variable
    const globalData = data.Global;
    const countriesData = data.Countries;

    // entry variable to DOM
    const positive = globalData.TotalConfirmed;
    const death = globalData.TotalDeaths;
    const recovered = globalData.TotalRecovered;
    document.getElementById('summary-value-positive').innerText = positive;
    document.getElementById('summary-value-death').innerText = death;
    document.getElementById('summary-value-recovered').innerText = recovered;

    // fetch data to  table
    const myArray = countriesData;
    // eslint-disable-next-line no-use-before-define
    // eslint-disable-next-line no-shadow
    const buildTable = (data) => {
      const table = document.getElementById('myTable');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 5; i++) {
        const row = `<tr>
                                    <td>${data[i].Country}</td>
                                    <td>${data[i].TotalConfirmed}</td>
                                    <td>${data[i].TotalDeaths}</td>
                                    <td>${data[i].TotalRecovered}</td>
                            </tr>`;
        table.innerHTML += row;
      }
    };
    buildTable(myArray);
  },
});
