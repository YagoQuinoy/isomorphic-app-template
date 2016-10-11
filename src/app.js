import $ from 'jquery';

$(window.document).ready(() => {
  $.get('http://localhost:8080/api/hello/buddy')
    .done((data) => {
      $(`<h1>${data}</h1>`).appendTo('body');
    });
})
