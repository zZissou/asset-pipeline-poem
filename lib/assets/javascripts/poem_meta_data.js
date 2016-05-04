$(document).on('ready', function(){

  var data,
      metadata = {},
      $metaDiv = $('<div>', { class: 'meta' });

  metadata.words = $('body span').map(function (index, element) {
    return $(element).text().split(' ');
  }).length;

  metadata.characters = $('body span').text().replace(/\s/g, '').length;

  for (data in metadata) {
    $metaDiv.append(data + ': ' + metadata[data] + '<br>');
  }

  $('body').append($metaDiv);

});
