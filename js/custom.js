// cursor
$(document).ready(function () {
    $(document).on('mousemove', function (e) {
        $('#circularcursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});

//  email handling
document.getElementById('subscribeBtn').addEventListener('click', () => {
    const to = 'curatednoise@gmail.com';
    const subject = 'SUBSCRIBE';
    const entered = document.getElementById('subscriberEmail').value || '';
    const body = `Please subscribe this address: ${entered}`;
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
});