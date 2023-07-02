// ==UserScript==
// @name         wolvesvillehelper v1.0
// @author       RedScorpion
// @run-at       document-start
// @match        *://*.wolvesville.com/*
// @match        *://googleads.g.doubleclick.net/pagead/*
// @description  Group of scripts that make wolvesville easier
// @namespace    https://github.com/redscorpionx/wolvesvillehelper
// @homepageURL  https://github.com/redscorpionx/wolvesvillehelper
// @icon         https://img.icons8.com/external-icongeek26-outline-icongeek26/100/000000/external-wolf-animal-faces-icongeek26-outline-icongeek26.png
// @updateURL    https://gist.github.com/redscorpionx/62b74ab0b9cac6782570e318ff829ec5/raw/wolvesvillehelper.user.js
// @downloadURL  https://gist.github.com/redscorpionx/62b74ab0b9cac6782570e318ff829ec5/raw/wolvesvillehelper.user.js
// @license      GPL-3.0-or-later
// @version      1.9.8.1
// @grant        none
// @copyright    2022, RedScorpion
// ==/UserScript==
//final beta test 2

console.log("Script started");
window.addEventListener('load', function () {
    console.log("script loaded");
    var adCount = 0
    var checkExist = setInterval(function () {
        function _0x937e() {
            var _0x1361ae = ['getElementsByClassName', 'log', 'closed ad box', '1822800CHvffd', '32xDxhow', '8aimOhC', 'dismiss-button-element', '272981waqSNK', '4515740XzcPPV', '7579439ingHSH', 'click', '1068NOsRvj', 'undefined', 'newBtnId', 'count-down-text', 'getElementById', '47295VnKDXc', '9252YLttNE', '8800130avTAyW', 'css-1dbjc4n r-1kihuf0 r-1mlwlqe r-1d2f490 r-1udh08x r-zchlnj'];
            _0x937e = function () { return _0x1361ae; }; return _0x937e();
        }
        var _0x408141 = _0x1351;
        (function (_0x97678a, _0x5afa26) {
            var _0x1ab7f6 = _0x1351
                , _0x4e8284 = _0x97678a(); while (!![]) {
                    try {
                        var _0x3ec340 = parseInt(_0x1ab7f6(0x12b)) / 0x1 * (-parseInt(_0x1ab7f6(0x129)) / 0x2) + -parseInt(_0x1ab7f6(0x11b)) / 0x3 * (parseInt(_0x1ab7f6(0x121)) / 0x4) + parseInt(_0x1ab7f6(0x12c)) / 0x5 + -parseInt(_0x1ab7f6(0x127)) / 0x6 + parseInt(_0x1ab7f6(0x119)) / 0x7 + parseInt(_0x1ab7f6(0x128)) / 0x8 * (-parseInt(_0x1ab7f6(0x120)) / 0x9) + parseInt(_0x1ab7f6(0x122)) / 0xa; if (_0x3ec340 === _0x5afa26) break;
                        else _0x4e8284['push'](_0x4e8284['shift']());
                    } catch (_0x4b3b46) { _0x4e8284['push'](_0x4e8284['shift']()); }
                }
        }(_0x937e, 0x98c66));
        var adBox = document[_0x408141(0x11f)]('ad_position_box')
            , arrow = document[_0x408141(0x124)](_0x408141(0x123))['length']
            , ctBtn = document[_0x408141(0x11f)](_0x408141(0x11d));

        function _0x1351(_0x3f0cd4, _0x31c4e4) { var _0x937e28 = _0x937e(); return _0x1351 = function (_0x1351fe, _0x510e20) { _0x1351fe = _0x1351fe - 0x119; var _0x1d8167 = _0x937e28[_0x1351fe]; return _0x1d8167; }, _0x1351(_0x3f0cd4, _0x31c4e4); }
        if (typeof adBox != _0x408141(0x11c) && adBox != null) {
            var count_down_text = document[_0x408141(0x11f)](_0x408141(0x11e))['innerHTML']
                , dismiss_button_element = document[_0x408141(0x11f)](_0x408141(0x12a)); if (count_down_text == 'Reward in 1 seconds') var timeOut = setTimeout(function () {
                    var _0x1d3e98 = _0x408141;
                    dismiss_button_element[_0x1d3e98(0x11a)](), console[_0x1d3e98(0x125)](_0x1d3e98(0x126)), adCount++;
                }, 0x3e8);
        }


        if (arrow) {
            if (ctBtn == null || ctBtn == 'undefined') {
                function _0xd8be(_0x4e5d1c, _0x2d2d34) { const _0x4faba0 = _0x4fab(); return _0xd8be = function (_0xd8be01, _0x5373e7) { _0xd8be01 = _0xd8be01 - 0x15f; let _0x40481a = _0x4faba0[_0xd8be01]; return _0x40481a; }, _0xd8be(_0x4e5d1c, _0x2d2d34); }
                const _0x5b8b92 = _0xd8be;
                (function (_0x2b38f3, _0x40a61c) {
                    const _0x31ad59 = _0xd8be
                    , _0x50ed3b = _0x2b38f3(); while (!![]) {
                        try {
                            const _0x205564 = -parseInt(_0x31ad59(0x15f)) / 0x1 + parseInt(_0x31ad59(0x16b)) / 0x2 * (-parseInt(_0x31ad59(0x16d)) / 0x3) + parseInt(_0x31ad59(0x16a)) / 0x4 + parseInt(_0x31ad59(0x16f)) / 0x5 * (parseInt(_0x31ad59(0x161)) / 0x6) + parseInt(_0x31ad59(0x171)) / 0x7 * (parseInt(_0x31ad59(0x165)) / 0x8) + parseInt(_0x31ad59(0x163)) / 0x9 + parseInt(_0x31ad59(0x166)) / 0xa; if (_0x205564 === _0x40a61c) break;
                            else _0x50ed3b['push'](_0x50ed3b['shift']());
                        } catch (_0x53656d) { _0x50ed3b['push'](_0x50ed3b['shift']()); }
                    }
                }(_0x4fab, 0xb1bd2));

                function _0x4fab() {
                    const _0x4bb8db = ['28zMbGkm', 'append', '1431400RGxmac', 'createContextualFragment', '1170GsKOLd', 'body', '10890819aHuZGy', 'createElement', '586984mVzZwg', '11464740nTGqcy', 'appendChild', 'childNodes', 'css-1dbjc4n r-1awozwy r-18u37iz r-o4qtl5 r-12vffkv r-13qz1uu r-1g40b8q', '1171844nYArOX', '150uwWuLn', 'getElementsByClassName', '32280pzlyCE', 'createRange', '600ksCAtJ', 'innerHTML'];
                    _0x4fab = function () { return _0x4bb8db; }; return _0x4fab();
                }
                const insertHTML = (_0x42b3e1, _0x3ecebc, _0x71a0e8 = document[_0x5b8b92(0x162)]) => {
                    const _0x450918 = _0x5b8b92
                    , _0x3e3806 = document[_0x450918(0x164)]('div');
                    _0x3e3806[_0x450918(0x170)] = _0x42b3e1, document[_0x450918(0x16c)](_0x450918(0x169))[0x2][_0x450918(0x168)][0x1][_0x450918(0x167)](_0x3e3806), document[_0x450918(0x16c)](_0x450918(0x169))[0x2][_0x450918(0x168)][0x1][_0x450918(0x172)](document[_0x450918(0x16e)]()[_0x450918(0x160)](_0x3ecebc));
                };


                const domHTML = `<button data-modal-target='#modal' id="newBtnId"><img
                src='https://i.ibb.co/bJ9pZC8/kisspng-digital-marketing-online-advertising-promotional-m-ad-icon-5b376e6d4125d9-188261301530359140.png'
                width='50' height='50'></button>
        <div class='modal' id='modal'>
            <div class='modal-header'>
                <div class='title'>Wolvesville Helper</div>
                <button data-close-button class='close-button'>&times;</button>
            </div>
            <div class='modal-body'>
    
                <div class="modal-body-main">
                    <h4 style="height: 1px; color: white;">Standard Settings</h4>
                    <div class="modal-body-main-standard">
                        <button id="standard-buttons" class="start-button" onclick="starter()">Start</button>
                        <button id="standard-buttons" class="stop-button">Stop</button>
                        <button id="standard-buttons" class="update-button">Update</button>
                    </div>
    
                    <h4 style="height: 1px; color: white;">Advanced Statistics</h4>
                    <div class="modal-body-main-advanced">
                        Total Ads Watched: <br>
                        Total Gold Earned: <br>
                        Total Rose Earned: <br>
                    </div>
    
                    <h4 style="height: 1px; color: white;">Socials and Other</h4>
                    <div class="modal-body-main-other">
    
                        <a href="https://www.youtube.com/channel/UCldtxjrCMtRHJzCUuA8b3kw?sub_confirmation=1"
                            target="_blank"><img src="https://img.icons8.com/color/1x/youtube-play.png" alt=""></a>
    
                        <a href="https://discord.gg/prp8vGKGdy" target="_blank"><img
                                src="https://img.icons8.com/color/1x/discord--v2.png" alt=""></a>
    
                        <a href="https://steamcommunity.com/id/mrRedScorpion/" target="_blank"><img
                                src="https://img.icons8.com/fluency/1x/steam.png" alt=""></a>
    
                        <a href="https://www.paypal.com/donate?hosted_button_id=FM8WEPNHK5XAE" target="_blank"><img
                                src="https://img.icons8.com/color/1x/paypal.png" alt=""></a>
    
                    </div>
                    <p style="text-align: center;">By RedScorpion</p>
                </div>
            </div>
        </div>
        <div id='overlay'></div>`;
                const scriptHTML = `<style>
                *,
                *::after,
                *::before {
                    box-sizing: border-box;
                    font-size: x-large;
                }
        
                .modal {
                    color: #dcdcdc;
                    background-color: #292929;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    transition: 200ms ease-in-out;
                    border: 1px solid rgb(117, 117, 117);
                    border-radius: 10px;
                    z-index: 10;
                    width: auto;
                    max-width: 80%;
                    cursor: auto;
        
                }
        
                .modal.active {
                    transform: translate(-50%, -50%) scale(1);
                }
        
                .modal-header {
                    padding: 10px 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid rgb(255, 255, 255);
                    color: #dcdcdc;
                    background-color: #1b1b1b;
                    border-radius: 10px;
        
                }
        
                .modal-header .title {
                    font-size: 1.25rem;
                    font-weight: bold;
        
                }
        
                .modal-header .close-button {
                    color: #6d6d6d;
                    background-color: #292929;
                    cursor: pointer;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 1.25rem;
                    font-weight: bold;
                }
        
                .modal-body {
                    padding: 10px 15px;
                }
        
                #overlay {
                    position: fixed;
                    opacity: 0;
                    transition: 200ms ease-in-out;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, .5);
                    pointer-events: none;
                }
        
                #overlay.active {
                    opacity: 1;
                    pointer-events: all;
                }
        
                .modal-body-main-standard {
                    background-color: rgba(0, 0, 0, .2);
                    display: flex;
                    justify-content: space-between;
                    /*border: 2px solid black;*/
        
        
                }
        
                .modal-body-main-advanced {
                    background-color: rgba(0, 0, 0, .2);
                    padding-top: 5px;
                    padding-left: 5px;
                    padding-bottom: 5px;
                }
        
                .modal-body-main-other {
                    display: flex;
                    justify-content: space-between;
                    background-color: rgba(0, 0, 0, .2);
                    padding-top: 5px;
        
        
                }
                
        
                #standard-buttons {
                    color: #dcdcdc;
                    background-color: #292929;
                    border: 1px solid rgb(126, 126, 126);
                    cursor: pointer;
                    border-radius: 5px;
                }
        
                #newBtnId {
                    text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
                    pointer-events: auto;
                    -webkit-box-direction: normal;
                    -webkit-box-orient: vertical;
                    border: 0px solid black;
                    box-sizing: border-box;
                    display: flex;
                    flex-basis: auto;
                    flex-direction: column;
                    flex-shrink: 0;
                    min-height: 0px;
                    padding: 0px;
                    position: relative;
                    z-index: 0;
                    border-radius: 6px;
                    margin: 8px;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    user-select: none;
                    cursor: pointer;
                    touch-action: manipulation;
                    background-color: rgba(0, 0, 0, 0.44);
                    height: 50px;
                    min-width: 50px;
                    padding-left: 16px;
                    padding-right: 16px;
                }
            </style>
                <script>
                function _0x5b3f() { var _0x48b4c6 = ['css-1dbjc4n r-1awozwy r-18u37iz r-o4qtl5 r-12vffkv r-13qz1uu r-1g40b8q', '__reactResponderId', 'addEventListener', 'css-901oao r-1niwhzg r-1vr29t4 r-q4m81j', '22675KPsBAx', 'ad not over yet, report to redscorpion', 'childNodes', '8440WlUDZq', '67676zEYmXs', 'add', 'querySelector', 'innerText', '352542QjSFfZ', 'modalTarget', 'getElementById', 'log', 'getElementsByClassName', 'https://gist.github.com/redscorpionx/62b74ab0b9cac6782570e318ff829ec5/', 'forEach', 'clicked watch/spin', 'open-page', 'start butoon error, report to redscorpion', 'classList', 'Congratulations, you have watched all ads today! Come back tomorrow for more rewards.', 'multi tab not functioning, report to redscorpion', 'overlay', 'bot unstoppable, report to redscorpion', 'modal-body-main-advanced', '6408blzpyo', 'Total Ads Watched: ', '1326759TwXSJo', 'modal problem, report to redscorpion', 'remove', 'onclick', 'waiting for watch/spin button', 'css-1dbjc4n r-66fd6s r-1p0dtai r-izkp9k r-1d2f490 r-12vffkv r-u8s1d r-zchlnj r-ipm5af r-1sg8ghl', 'active', '[data-modal-target]', '175075EoZMAi', 'innerHTML', 'css-1dbjc4n r-1xfd6ze r-1loqt21 r-edyy15 r-1otgn73 r-lrvibr', 'closest', '<br>Total Rose Earned: ', '820371msNMoE', '.modal.active', 'update error, report to redscorpion', '260jzbRAc', 'querySelectorAll', 'click'];
    _0x5b3f = function () { return _0x48b4c6; }; return _0x5b3f(); }
var _0x43aadf = _0x3367;
(function (_0xd3c44d, _0x496152) { var _0x5293e8 = _0x3367
        , _0x1e260b = _0xd3c44d(); while (!![]) { try { var _0x4f9f78 = parseInt(_0x5293e8(0x9c)) / 0x1 + parseInt(_0x5293e8(0xaf)) / 0x2 + parseInt(_0x5293e8(0xa1)) / 0x3 + -parseInt(_0x5293e8(0xa4)) / 0x4 * (-parseInt(_0x5293e8(0xab)) / 0x5) + -parseInt(_0x5293e8(0xb3)) / 0x6 + parseInt(_0x5293e8(0xc5)) / 0x7 + -parseInt(_0x5293e8(0xae)) / 0x8 * (parseInt(_0x5293e8(0xc3)) / 0x9); if (_0x4f9f78 === _0x496152) break;
            else _0x1e260b['push'](_0x1e260b['shift']()); } catch (_0x15c1b1) { _0x1e260b['push'](_0x1e260b['shift']()); } } }(_0x5b3f, 0x2645d));
try { var openModalButtons = document['querySelectorAll'](_0x43aadf(0x9b))
        , closeModalButtons = document[_0x43aadf(0xa5)]('[data-close-button]')
        , overlay = document[_0x43aadf(0xb5)](_0x43aadf(0xc0));
    openModalButtons['forEach'](_0x3cf5ea => { var _0xd26014 = _0x43aadf;
        _0x3cf5ea[_0xd26014(0xa9)](_0xd26014(0xa6), () => { var _0x42ad5f = _0xd26014
                , _0x471452 = document[_0x42ad5f(0xb1)](_0x3cf5ea['dataset'][_0x42ad5f(0xb4)]);
            openModal(_0x471452); }); }), overlay['addEventListener'](_0x43aadf(0xa6), () => { var _0x1082aa = _0x43aadf
            , _0x44ec39 = document[_0x1082aa(0xa5)](_0x1082aa(0xa2));
        _0x44ec39[_0x1082aa(0xb9)](_0x4e3ff4 => { closeModal(_0x4e3ff4); }); }), closeModalButtons[_0x43aadf(0xb9)](_0x50feae => { var _0x4330f4 = _0x43aadf;
        _0x50feae['addEventListener'](_0x4330f4(0xa6), () => { var _0x33e09f = _0x4330f4
                , _0x4bc33c = _0x50feae[_0x33e09f(0x9f)]('.modal');
            closeModal(_0x4bc33c); }); });
    
    function openModal(_0x3bd39c) { var _0x201277 = _0x43aadf; if (_0x3bd39c == null) return;
        _0x3bd39c[_0x201277(0xbd)][_0x201277(0xb0)](_0x201277(0x9a)), overlay[_0x201277(0xbd)][_0x201277(0xb0)]('active'); }
    
    function closeModal(_0x340816) { var _0x2ba0ca = _0x43aadf; if (_0x340816 == null) return;
        _0x340816['classList'][_0x2ba0ca(0xc7)](_0x2ba0ca(0x9a)), overlay['classList'][_0x2ba0ca(0xc7)](_0x2ba0ca(0x9a)); } } catch (_0x1b6884) { console[_0x43aadf(0xb6)](_0x43aadf(0xc6)); }
try {} catch (_0x2d07e6) { console[_0x43aadf(0xb6)](_0x43aadf(0xbc)); }

function starter() { var _0x49031b = _0x43aadf;
    console[_0x49031b(0xb6)]('started'), watchBtn(), closeModal(modal); }
try { var updateBtn = document[_0x43aadf(0xb7)]('update-button')[0x0];
    updateBtn[_0x43aadf(0xa9)]('click', () => { var _0x4f98af = _0x43aadf;
        console[_0x4f98af(0xb6)]('update initiated'), open(_0x4f98af(0xb8)), closeModal(modal); }); } catch (_0x96e11f) { console['log'](_0x43aadf(0xa3)); }
try {
    (function () { var _0x16cd0d = localStorage['setItem'];
        localStorage['setItem'] = function (_0x2ae5c5, _0x596425) { var _0x1fffb7 = _0x3367; if (_0x2ae5c5 == _0x1fffb7(0xbb)) { localStorage['removeItem'](_0x2ae5c5), console[_0x1fffb7(0xb6)]('Tried to detect multi window, blocked'); return; } _0x16cd0d['apply'](this, arguments); }; }()); } catch (_0x31a5c2) { console[_0x43aadf(0xb6)](_0x43aadf(0xbf)); }

function _0x3367(_0x36d935, _0x38ac82) { var _0x5b3f6d = _0x5b3f(); return _0x3367 = function (_0x336773, _0x16c65e) { _0x336773 = _0x336773 - 0x98; var _0x1d8b81 = _0x5b3f6d[_0x336773]; return _0x1d8b81; }, _0x3367(_0x36d935, _0x38ac82); }

function watchBtn() { var _0x4e8397 = _0x43aadf
        , _0x15a571 = 0x0
        , _0x24b09e;
    _0x24b09e = setInterval(function () { var _0x367eef = _0x3367; try { var _0x5094c1 = document[_0x367eef(0xb7)](_0x367eef(0x9e))[0x0][_0x367eef(0xa8)]
                , _0x4237fe = document[_0x367eef(0xb7)](_0x367eef(0xaa))[0x0];
            typeof _0x5094c1 != 'undefined' && _0x5094c1 != null ? (_0x4237fe[_0x367eef(0xa6)](), _0x15a571 += 0.5, console[_0x367eef(0xb6)](_0x367eef(0xba))) : console[_0x367eef(0xb6)]('Watch Video Unclickable, report to redscorpion'); } catch (_0x3bb691) { console[_0x367eef(0xb6)](_0x367eef(0x98)); } }, 0x3e8); try { var _0x24d5df = document[_0x4e8397(0xb7)](_0x4e8397(0xa7))[0x2][_0x4e8397(0xad)][0x1][_0x4e8397(0xad)][0x0][_0x4e8397(0xad)][0x0][_0x4e8397(0xad)][0x0]['innerText']
            , _0x577b41 = document[_0x4e8397(0xb7)](_0x4e8397(0xa7))[0x2][_0x4e8397(0xad)][0x1][_0x4e8397(0xad)][0x0][_0x4e8397(0xad)][0x0][_0x4e8397(0xad)][0x1][_0x4e8397(0xb2)]
            , _0x40d708 = document[_0x4e8397(0xb7)]('stop-button')[0x0];
        _0x40d708[_0x4e8397(0xc8)] = function () { var _0x481279 = _0x4e8397;
            clearInterval(_0x24b09e), console[_0x481279(0xb6)]('stopped'); var _0x3799a7 = document[_0x481279(0xb7)]('css-1dbjc4n r-1awozwy r-18u37iz r-o4qtl5 r-12vffkv r-13qz1uu r-1g40b8q')[0x2][_0x481279(0xad)][0x1][_0x481279(0xad)][0x0]['childNodes'][0x0][_0x481279(0xad)][0x0][_0x481279(0xb2)]
                , _0x17f6df = document[_0x481279(0xb7)]('css-1dbjc4n r-1awozwy r-18u37iz r-o4qtl5 r-12vffkv r-13qz1uu r-1g40b8q')[0x2]['childNodes'][0x1][_0x481279(0xad)][0x0][_0x481279(0xad)][0x0][_0x481279(0xad)][0x1][_0x481279(0xb2)]
                , _0x2d6182 = document[_0x481279(0xb7)](_0x481279(0xc2))[0x0];
            goldFinnal = _0x3799a7 - _0x24d5df, roseFinnal = _0x17f6df - _0x577b41, _0x2d6182['innerHTML'] = _0x481279(0xc4) + _0x15a571, _0x2d6182['innerHTML'] += '<br>Total Gold Earned: ' + goldFinnal, _0x2d6182[_0x481279(0x9d)] += _0x481279(0xa0) + roseFinnal; try { document[_0x481279(0xb7)](_0x481279(0x99))[0x0][_0x481279(0xad)][0x0][_0x481279(0xad)][0x0]['childNodes'][0x0][_0x481279(0xad)][0x0][_0x481279(0xad)][0x0][_0x481279(0xb2)] == _0x481279(0xbe) && (_0x40d708['click'](), openModal()); } catch (_0xfa8dee) { console[_0x481279(0xb6)](_0x481279(0xac)); } }; } catch (_0x477aa0) { console[_0x4e8397(0xb6)](_0x4e8397(0xc1)); } }

                </script>`;
                insertHTML(domHTML, scriptHTML);
            }
        }
    }, 1000);
})