// cursor
$(document).ready(function () {
    $(document).on('mousemove', function (e) {
        $('#circularcursor').css({
            left: e.pageX,
            top: e.pageY
        });
    })
});

const cursor = document.getElementById('circularcursor');
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
  link.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

const cursorMsg = document.getElementById('circularcursor');
const msg = document.getElementById('cursor-msg');
const workLink = Array.from(document.querySelectorAll('a.nav-link')).find(a => a.textContent.trim() === 'WORK');

if (workLink) {
  workLink.addEventListener('mouseenter', () => {
    cursor.classList.add('show-msg');
  });
  workLink.addEventListener('mouseleave', () => {
    cursor.classList.remove('show-msg');
  });
}


//  email handling
document.getElementById('subscribeBtn').addEventListener('click', () => {
    const to = 'curatednoise@protonmail.com';
    const subject = 'SUBSCRIBE';
    const entered = document.getElementById('subscriberEmail').value || '';
    const body = `Please subscribe this address: ${entered}`;
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
});

document.getElementById('getInTouch').addEventListener('click', () => {
    const to = 'curatednoise@protonmail.com';
    const subject = 'Hi There!';
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}}`;
    window.location.href = href;
});