script = document.createElement('script');
script.setAttribute('src', 'alert.js');
script.setAttribute('crossorigin', 'anonymous');
window.top.document.getElementsByTagName('iframe')[0].contentDocument.body.appendChild(script);
    