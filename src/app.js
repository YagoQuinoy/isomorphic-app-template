import $ from 'jquery';

$(window.document).ready(() => {
  $.get('http://localhost:3000/api/hello/buddy')
    .done((data) => {
      $(`<h1>${data} - changos, monos y gorilas!</h1>`).appendTo('body');
    });
})
