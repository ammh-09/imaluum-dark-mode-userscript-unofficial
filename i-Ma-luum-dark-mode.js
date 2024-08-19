// ==UserScript==
// @name         ima'luum
// @version      1.0
// @description  i-Ma'luum Dark Mode
// @author       ammh
// @match        https://imaluum.iium.edu.my/*
// @match        https://souq.iium.edu.my/*
// @icon         https://i.imgur.com/lvVUlHK.png
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function(html) {

})();

(function(jquery) {
    $("a[role='menuitem']").attr('id', 'idhover')
    $('table[class="table table-hover"]').attr('class', 'table')
    $('img[class="user-image"]').remove()
    $('li').find('a').attr('id', 'idhover1')
})();

(function(css) {
    GM_addStyle("body { cursor: default !important; }")
    GM_addStyle(".body-page { background: url(https://i.imgur.com/Rl0Clag.png) repeat center }")
    GM_addStyle("html, .navbar, .main-sidebar, .logo, .bg-green-gradient, .main-footer, .bg-aqua, .btn-primary, .dropdown-menu, div[style='padding: 20px;'], .user-header, .btn-default, .btn-info, .breadcrumb, tr[style='background-color:lightgrey;'] { background: #101010 !important; border: none !important; outline: none !important; transition: 0.3s !important; }")
    GM_addStyle("h1, li, a, strong, h3, th, td, h2, b, h4, label, p, h5, h6 { border: none !important; background: none !important; color: white !important; font-weight: 500 !important; }")
    GM_addStyle(".box, .box-footer, body, footer, .user-footer, .nav-tabs-custom, .tab-content { box-shadow: 1px 2px 5px #040404 !important; background-color: #242424 !important; border: none !important; }")
    GM_addStyle("p[style='color:#de0e0e'], font { color: #ff8989 !important; font-weight: 500 !important; }")
    GM_addStyle(".with-border, th, td { border-bottom: 1px solid #8f8f8f !important; }")
    GM_addStyle("#idhover:hover, .btn:hover, .form-control:hover { background: #090909 !important; transition: 0.3s !important; }")
    GM_addStyle(".small-box { box-shadow: 1px 2px 5px #040404 !important; }")
    GM_addStyle(".form-control { color: white !important; background-color: #484848 !important; outline: none !important; border: none !important; transition: 0.3s; }")
    GM_addStyle('img[class="img-circle"] { height: 80px !important; width: 60px !important; border-radius: 25% !important; }')
    GM_addStyle('a[data-toggle="tab"] { background-color: #242424 !important; }')
    GM_addStyle('#idhover1:hover { background: #22292c !important; transition: 0.3s !important; }')
    GM_addStyle(".sf-reset > h1 { text-align: center !important; }")
})();

(function(csssouqiium) {
    GM_addStyle('.card { background: #101010 !important; border: none !important; outline: none !important; transition: 0.3s !important; }')
    GM_addStyle('.form-select { color: white !important; background: #484848 !important; border: none !important; transition: 0.3s !important; }')

    })();
