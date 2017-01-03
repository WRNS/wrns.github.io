var announcements = [
    {
      idx: 'newsletters/wrns-2017-01.pdf',
      message: 'Click here for our January newsletter.',
      url: 'newsletters/wrns-2017-01.pdf',
      icon: 'newspaper-o',
    },
    {
      idx: 'open-enrollment-2016-2017',
      message: 'Enrollment is open for the 2016-2017 school year.  Apply today!',
      url: '#enroll',
      icon: 'paperclip',
    },
    {
      idx: 'open-house-2017-01-07',
      message: 'Stop by for our next Open House, January 7th, 9:30-11:00 AM.',
      url: 'https://www.facebook.com/events/1331452993551999/',
      icon: 'calendar',
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
