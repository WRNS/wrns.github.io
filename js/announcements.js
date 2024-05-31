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
      icon: 'paperclip',
      expires: new Date(2022, 08, 31)
  },
  {
    idx: '2024-teacher-hiring',
    message: 'Now hiring for an assistant teacher! Click here for a job description and details on how to apply.',
    url: 'https://docs.google.com/document/d/1f-1ELAiKT4wn36mK0X6_EcJkuUjfsn7_HlLbqBKCYCg/edit?usp=sharing',
    icon: 'handshake-o',
    type: 'news',
    expires: new Date("February 11, 2024 12:00:00")
  },
  {
    idx: '2024-enrollment-preview',
    type: 'info',
    message: 'Enrollment opens soon for the 2024–2025 school year!',
    url: '#enroll',
    icon: 'file-text',
    expires: new Date("February 8, 2024 01:00:00"),
    type: 'info'
  },
  {
    idx: '2024-enrollment',
    type: 'info',
    message: 'Enrollment is open for the 2024–2025 school year!',
    url: '#enroll',
    icon: 'file-text',
    expires: new Date("March 20, 2024 01:00:00"),
    type: 'info'
  },
  {
    idx: '2024-05-yn-job-posting',
    message: 'Winton Road is looking for a lead teacher in our Young Nursery! Click here for details.',
    url: 'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing',
    icon: 'handshake-o',
    type: 'news',
    expires: new Date("June 15, 2024 0:00:00")
  },
  {
    idx: '2024-05-om-job-posting',
    message: 'Winton Road is looking for a new Operations Manager – click here for details.',
    url: 'https://docs.google.com/document/d/16bWWnGb_KztmLi-yvjydzhZIyy8g8GD4_8vPFI3L2Kg/view?usp=sharing',
    icon: 'handshake-o',
    type: 'news',
    expires: new Date("June 24, 2024 0:00:00")
  }
];
$.each(announcements, function(i, a) {
  if (Cookies.get(a.idx) != undefined) return;
  if (a.expires < Date.now()) return;
  var blurb = ' ';
  if (a.type == undefined) {
    blurb = blurb + '<div class="announcement info alert-dismissible">';
  };
  if (a.type == 'news') {
    blurb = blurb + '<div class="announcement warning alert-dismissible alert-news">';
  };
  if (a.type == 'info') {
    blurb = blurb + '<div class="announcement warning alert-dismissible alert-info">';
  };
  if (a.type == 'alert') {
    blurb = blurb + '<div class="announcement warning alert-dismissible alert-danger">';
  };
  blurb = blurb +
        '<button type="button" class="close btn btn-sm mybutton_standard" data-dismiss="alert" ' +
          'onclick="javascript:Cookies.set(\'' + a.idx + '\', \'set\', {expires: 365});">' +
          '<span class="fa-stack">' +
              '<i class="fa fa-circle-thin fa-stack-2x"></i> ' +
              '<i class="fa fa-times fa-stack-1x"></i> ' +
          '</span>' +
        '</button>';
  blurb = blurb + '<p>';
  if (a.url != undefined) {
    blurb = blurb + '<a href="' + a.url + '" class="alert-link">';
  }
  if (a.icon != undefined) {
    blurb = blurb +
        '<span class="fa-stack fa-lg">' +
            '<i class="fa fa-circle-thin fa-stack-2x"></i> ' +
            '<i class="fa fa-' + a.icon + ' fa-stack-1x"></i> ' +
        '</span>';
  }
  blurb = blurb + a.message;
  if (a.url != undefined) {
    blurb = blurb + '</a>';
  }
  blurb = blurb + '</p></div>';
  $('#announcement-area').prepend(blurb);
});
