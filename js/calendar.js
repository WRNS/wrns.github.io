$(document).ready(function() {
    $('#calendar').fullCalendar({
        navLinks: true, // can click day/week names to navigate views
        // http://fullcalendar.io/docs/google_calendar/
        googleCalendarApiKey: 'AIzaSyAePS43FCcfuIafbhHa6viwDJ40jLLW-sE',
        eventSources: [{
            googleCalendarId: 'wintonroad.org_3u7355plrhfse3sfjb0cgsods8@group.calendar.google.com',
            className: 'board-meetings',
        }, {
            googleCalendarId: 'wintonroad.org_ft37u5b6np28du780ijku12jb0@group.calendar.google.com',
            className: 'morning-art-project',
        }, {
            googleCalendarId: 'wintonroad.org_ec2ibpfnn2lsqecp2u1onr4jr8@group.calendar.google.com',
            className: 'afternoon-art-project',
        }, {
            googleCalendarId: 'wintonroad.org_ik8kre6udmcq2k57bg1p67mo9s@group.calendar.google.com',
            className: 'school-year',
        }],
        eventClick: function(event) {
            // opens events in a popup window
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        },
    });
});
