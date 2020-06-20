console.log('-- manaba-linkpopup-disabler --')
Array.from(
    document.querySelectorAll('a[href*="link_iframe_balloon?url="]'),
    el => {
        el.onclick = void 0
        const re = /link_iframe_balloon\?url=(.+)/
        el.href = decodeURIComponent(el.href.match(re)[1])
    }
)