var announcements = [
    {
      idx: 'open-house-20200120',
      message: 'Winton Road Open House on Saturday (1/25/2020) from 9:30 AM – 11 AM. See you there!',
      url: 'https://www.facebook.com/events/505083236780644/',
      icon: 'home',
      expires: new Date(2020, 01, 27)
    },  
    {
      idx: 'open-enrollment-2022-2023',
      message: 'Enrollment is open for the 2022-2023 school year.  Apply today!',
      url: 'forms/wrns-application.pdf',
      icon: 'paperclip'
    }  
];
$.each(announcements, function(i, a) {
  if (Cookies.get(a.idx) != undefined) return;
  if (a.expires < Date.now()) return;
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
