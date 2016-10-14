import $ from 'jquery';

$(window.document).ready(() => {
  window.setTimeout(() => {
    $.get('http://localhost:3000/api/hello/buddy')
    .done((data) => {
      $(`<h1>${data}! Changos, monos y gorilas!</h1>`).appendTo('div#app');
    });
  }, 2000);
});
