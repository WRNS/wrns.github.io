var announcements = [
    {
      idx: 'open-enrollment-2016-2017',
      message: 'Enrollment is open for the 2016-2017 school year.  Apply today!',
      url: 'forms/wrns-application.pdf',
    },
    {
      idx: 'mabels-labels-2017',
      message: "Click here to support our Mabel's Labels campaign.",
      url: 'http://mabelslabels.com/c/?type=fundraiser&b=2601',
    },
];
$.each(announcements, function(i, a) {
  if (Cookies.get(a.idx) != undefined) return;
  var blurb = '<div class="alert alert-dismissible alert-danger">' +
      '<button type="button" class="close" data-dismiss="alert" ' +
        'onclick="javascript:Cookies.set(\'' + a.idx + '\', \'set\');">' +
        '<i class="fa fa-times"></i> <small>dismiss</small>' +
      '</button>';
  blurb = blurb + '<a href="' + a.url + '" class="alert-link">';
  blurb = blurb + a.message + '</a></div>';
  $('.intro-header').prepend(blurb);
});
