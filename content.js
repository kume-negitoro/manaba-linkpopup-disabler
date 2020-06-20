const s = document.createElement('script');
s.src = chrome.extension.getURL('patch.js');
document.documentElement.appendChild(s);
s.parentNode.removeChild(s);
