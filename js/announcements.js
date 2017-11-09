var announcements = [
    {
      idx: 'donate-2017',
      message: 'Make a donation to WRNS today!',
      url: 'javascript: $(\'#donate\').submit();',
      // This is a "font awesome" icon.
      // http://fontawesome.io/icons/
      icon: 'paypal'
    }
];
$.each(announcements, function(i, a) {
  if (Cookies.get(a.idx) != undefined) return;
  var blurb = '<div class="announcement alert alert-dismissible alert-danger">' +
      '<button type="button" class="close btn btn-sm mybutton_standard" data-dismiss="alert" ' +
        'onclick="javascript:Cookies.set(\'' + a.idx + '\', \'set\', {expires: 365});">' +
        '<span class="fa-stack">' +
            '<i class="fa fa-circle-thin fa-stack-2x"></i> ' +
            '<i class="fa fa-times fa-stack-1x"></i> ' +
        '</span> dismiss' +
      '</button>';
  blurb = blurb + '<p>';
  blurb = blurb + '<a href="' + a.url + '" class="alert-link">';
  if (a.icon != undefined) {
    blurb = blurb +
        '<span class="fa-stack fa-lg">' +
            '<i class="fa fa-circle-thin fa-stack-2x"></i> ' +
            '<i class="fa fa-' + a.icon + ' fa-stack-1x"></i> ' +
        '</span>';
  }
  blurb = blurb + a.message + '</a></p></div>';
  $('.intro-header').prepend(blurb);
});
