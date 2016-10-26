var announcements = [
    {
      idx: 'open-enrollment-2016-2017',
      message: 'Enrollment is open for the 2016-2017 school year.  Apply today!',
      url: 'forms/wrns-application.pdf',
    },
    {
      idx: 'under-construction',
      message: "This site is under construction.  Email me at webmaster@wintonroad.org with suggestions, please!",
      url: 'mailto:webmaster@wintonroad.org',
    },
];
$.each(announcements, function(i, a) {
  if (Cookies.get(a.idx) != undefined) return;
  var blurb = '<div class="announcement alert alert-dismissible alert-danger">' +
      '<button type="button" class="close" data-dismiss="alert" ' +
        'onclick="javascript:Cookies.set(\'' + a.idx + '\', \'set\');">' +
        '<i class="fa fa-times"></i> <small>dismiss</small>' +
      '</button>';
  blurb = blurb + '<a href="' + a.url + '" class="alert-link">';
  blurb = blurb + a.message + '</a></div>';
  $('.intro-header').prepend(blurb);
});
