
/**
 * show an error message to the user
 */
error = function(text) {
  let error = $('#error');

  if (error.length) {
    error.removeClass('show').find('span').text(text);
  }
  else {
    error = $('<div id="error"><span>' + text + '</span></div>');
    $('body').append(error);
  };

  setTimeout(function() {
    error.addClass('show');
  }, 200);

  setTimeout(function() {
    error.removeClass('show');
  }, 4200);

};


/**
 * show a short info message to the user
 */
info = function(text) {
  let info = $('#info');

  if (info.length) {
    info.removeClass('show').find('span').text(text);
  }
  else {
    info = $('<div id="info"><span>' + text + '</span></div>');
    $('body').append(info);
  };

  setTimeout(function() {
    info.addClass('show');
  }, 200);

  setTimeout(function() {
    info.removeClass('show');
  }, 4200);

};


/**
 * show a confirmation dialog to the user
 * @param text The text to be shown to the user
 * @param confirmCallback Callback function to be triggered when user confirms
 * @param cancelCallback Callback function to be triggered when user cancels
 */
confirmDialog = function(text, confirmCallback, cancelCallback) {
  $('#confirm').remove();
  $confirm = $('<div id="confirm"><p>' + text + '</p> <button class="confirm">Confirm</button> <button class="cancel">Cancel</button></div>');
  $('body').append($confirm);
  $confirm
    .hide().fadeIn(200)
    .find('.cancel').on('click', function() {
      $confirm.fadeOut(200);
      if (cancelCallback) cancelCallback();
    });
  $confirm.find('.confirm').on('click', function() {
       if (confirmCallback) confirmCallback();
       $confirm.fadeOut(200);
    });

};
