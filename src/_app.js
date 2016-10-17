import $ from 'jquery';

$(window.document).ready(() => {
  window.setTimeout(() => {
    $.get('http://localhost:3000/api/hello/buddy')
    .done((data) => {
      $(`<h1>Changos, monos y gorilas! ${data}! </h1>`).appendTo('div#app');
    });
  }, 1000);
});
