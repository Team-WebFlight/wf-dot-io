$(document).ready(() => {
  $('#feedback-link').click(function() {
    $('.form').dialog('open');
  });

  $('.form').dialog({
    width: 400,
    autoOpen: false,
    modal: true,
    show: 'clip',
    closeOnEscape: true
  });

  $('#submit').on('click', function() {
    alert('Thanks for submitting your feedback!');
    $('.form').dialog('close');
  });

  $('#close').on('click', function() {
    $('.form').dialog('close');
  });
});
