(function() {
    var _0xdcc3x1 = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
    var _0xdcc3x2 = self['Prism'] = {
        languages: {
            insertBefore: function(_0xdcc3x3, _0xdcc3x4, _0xdcc3x5, _0xdcc3x6) {
                _0xdcc3x6 = _0xdcc3x6 || _0xdcc3x2['languages'];
                var _0xdcc3x7 = _0xdcc3x6[_0xdcc3x3];
                var _0xdcc3x8 = {};
                for (var _0xdcc3x9 in _0xdcc3x7) {
                    if (_0xdcc3x7['hasOwnProperty'](_0xdcc3x9)) {
                        if (_0xdcc3x9 == _0xdcc3x4) {
                            for (var _0xdcc3xa in _0xdcc3x5) {
                                if (_0xdcc3x5['hasOwnProperty'](_0xdcc3xa)) {
                                    _0xdcc3x8[_0xdcc3xa] = _0xdcc3x5[_0xdcc3xa]
                                }
                            }
                        };
                        _0xdcc3x8[_0xdcc3x9] = _0xdcc3x7[_0xdcc3x9];
                    }
                };
                return _0xdcc3x6[_0xdcc3x3] = _0xdcc3x8;
            },
            DFS: function(_0xdcc3xb, _0xdcc3xc) {
                for (var _0xdcc3xd in _0xdcc3xb) {
                    _0xdcc3xc['call'](_0xdcc3xb, _0xdcc3xd, _0xdcc3xb[_0xdcc3xd]);
                    if (Object['prototype']['toString']['call'](_0xdcc3xb) === '[object Object]') {
                        _0xdcc3x2['languages'].DFS(_0xdcc3xb[_0xdcc3xd], _0xdcc3xc)
                    };
                }
            }
        },
        highlightAll: function(_0xdcc3xe, _0xdcc3xc) {
            var _0xdcc3xf = document['querySelectorAll']('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
            for (var _0xdcc3xd = 0, _0xdcc3x10; _0xdcc3x10 = _0xdcc3xf[_0xdcc3xd++];) {
                _0xdcc3x2['highlightElement'](_0xdcc3x10, _0xdcc3xe === true, _0xdcc3xc)
            };
        },
        highlightElement: function(_0xdcc3x10, _0xdcc3xe, _0xdcc3xc) {
            var _0xdcc3x11, _0xdcc3x7, _0xdcc3x12 = _0xdcc3x10;
            while (_0xdcc3x12 && !_0xdcc3x1['test'](_0xdcc3x12['className'])) {
                _0xdcc3x12 = _0xdcc3x12['parentNode']
            };
            if (_0xdcc3x12) {
                _0xdcc3x11 = (_0xdcc3x12['className']['match'](_0xdcc3x1) || [, ''])[1];
                _0xdcc3x7 = _0xdcc3x2['languages'][_0xdcc3x11];
            };
            if (!_0xdcc3x7) {
                return
            };
            _0xdcc3x10['className'] = _0xdcc3x10['className']['replace'](_0xdcc3x1, '')['replace'](/\s+/g, ' ') + ' language-' + _0xdcc3x11;
            _0xdcc3x12 = _0xdcc3x10['parentNode'];
            if (/pre/i ['test'](_0xdcc3x12['nodeName'])) {
                _0xdcc3x12['className'] = _0xdcc3x12['className']['replace'](_0xdcc3x1, '')['replace'](/\s+/g, ' ') + ' language-' + _0xdcc3x11
            };
            var _0xdcc3x13 = _0xdcc3x10['textContent']['trim']();
            if (!_0xdcc3x13) {
                return
            };
            _0xdcc3x13 = _0xdcc3x13['replace'](/&/g, '&amp;')['replace'](/</g, '&lt;')['replace'](/>/g, '&gt;')['replace'](/\u00a0/g, ' ');
            var _0xdcc3x14 = {
                element: _0xdcc3x10,
                language: _0xdcc3x11,
                grammar: _0xdcc3x7,
                code: _0xdcc3x13
            };
            _0xdcc3x2['hooks']['run']('before-highlight', _0xdcc3x14);
            if (_0xdcc3xe && self['Worker']) {
                var _0xdcc3x15 = new Worker(_0xdcc3x2['filename']);
                _0xdcc3x15['onmessage'] = function(_0xdcc3x16) {
                    _0xdcc3x14['highlightedCode'] = _0xdcc3x18['stringify'](JSON['parse'](_0xdcc3x16['data']));
                    _0xdcc3x14['element']['innerHTML'] = _0xdcc3x14['highlightedCode'];
                    _0xdcc3xc && _0xdcc3xc['call'](_0xdcc3x14['element']);
                    _0xdcc3x2['hooks']['run']('after-highlight', _0xdcc3x14);
                };
                _0xdcc3x15['postMessage'](JSON['stringify']({
                    language: _0xdcc3x14['language'],
                    code: _0xdcc3x14['code']
                }));
            } else {
                _0xdcc3x14['highlightedCode'] = _0xdcc3x2['highlight'](_0xdcc3x14['code'], _0xdcc3x14['grammar']);
                _0xdcc3x14['element']['innerHTML'] = _0xdcc3x14['highlightedCode'];
                _0xdcc3xc && _0xdcc3xc['call'](_0xdcc3x10);
                _0xdcc3x2['hooks']['run']('after-highlight', _0xdcc3x14);
            };
        },
        highlight: function(_0xdcc3x17, _0xdcc3x7) {
            return _0xdcc3x18['stringify'](_0xdcc3x2['tokenize'](_0xdcc3x17, _0xdcc3x7))
        },
        tokenize: function(_0xdcc3x17, _0xdcc3x7) {
            var _0xdcc3x18 = _0xdcc3x2['Token'];
            var _0xdcc3x19 = [_0xdcc3x17];
            var _0xdcc3x1a = _0xdcc3x7['rest'];
            if (_0xdcc3x1a) {
                for (var _0xdcc3x9 in _0xdcc3x1a) {
                    _0xdcc3x7[_0xdcc3x9] = _0xdcc3x1a[_0xdcc3x9]
                };
                delete _0xdcc3x7['rest'];
            };
            tokenloop: for (var _0xdcc3x9 in _0xdcc3x7) {
                if (!_0xdcc3x7['hasOwnProperty'](_0xdcc3x9) || !_0xdcc3x7[_0xdcc3x9]) {
                    continue
                };
                var _0xdcc3x1b = _0xdcc3x7[_0xdcc3x9],
                    _0xdcc3x3 = _0xdcc3x1b['inside'],
                    _0xdcc3x1c = !!_0xdcc3x1b['lookbehind'] || 0;
                _0xdcc3x1b = _0xdcc3x1b['pattern'] || _0xdcc3x1b;
                for (var _0xdcc3xd = 0; _0xdcc3xd < _0xdcc3x19['length']; _0xdcc3xd++) {
                    var _0xdcc3x1d = _0xdcc3x19[_0xdcc3xd];
                    if (_0xdcc3x19['length'] > _0xdcc3x17['length']) {
                        break tokenloop
                    };
                    if (_0xdcc3x1d instanceof _0xdcc3x18) {
                        continue
                    };
                    _0xdcc3x1b['lastIndex'] = 0;
                    var _0xdcc3x1e = _0xdcc3x1b['exec'](_0xdcc3x1d);
                    if (_0xdcc3x1e) {
                        if (_0xdcc3x1c) {
                            _0xdcc3x1c = _0xdcc3x1e[1]['length']
                        };
                        var _0xdcc3x1f = _0xdcc3x1e['index'] - 1 + _0xdcc3x1c,
                            _0xdcc3x1e = _0xdcc3x1e[0]['slice'](_0xdcc3x1c),
                            _0xdcc3x20 = _0xdcc3x1e['length'],
                            _0xdcc3x21 = _0xdcc3x1f + _0xdcc3x20,
                            _0xdcc3x4 = _0xdcc3x1d['slice'](0, _0xdcc3x1f + 1),
                            _0xdcc3x22 = _0xdcc3x1d['slice'](_0xdcc3x21 + 1);
                        var _0xdcc3x23 = [_0xdcc3xd, 1];
                        if (_0xdcc3x4) {
                            _0xdcc3x23['push'](_0xdcc3x4)
                        };
                        var _0xdcc3x24 = new _0xdcc3x18(_0xdcc3x9, _0xdcc3x3 ? _0xdcc3x2['tokenize'](_0xdcc3x1e, _0xdcc3x3) : _0xdcc3x1e);
                        _0xdcc3x23['push'](_0xdcc3x24);
                        if (_0xdcc3x22) {
                            _0xdcc3x23['push'](_0xdcc3x22)
                        };
                        Array['prototype']['splice']['apply'](_0xdcc3x19, _0xdcc3x23);
                    };
                };
            };
            return _0xdcc3x19;
        },
        hooks: {
            all: {},
            add: function(_0xdcc3x25, _0xdcc3xc) {
                var _0xdcc3x26 = _0xdcc3x2['hooks']['all'];
                _0xdcc3x26[_0xdcc3x25] = _0xdcc3x26[_0xdcc3x25] || [];
                _0xdcc3x26[_0xdcc3x25]['push'](_0xdcc3xc);
            },
            run: function(_0xdcc3x25, _0xdcc3x14) {
                var _0xdcc3x27 = _0xdcc3x2['hooks']['all'][_0xdcc3x25];
                if (!_0xdcc3x27 || !_0xdcc3x27['length']) {
                    return
                };
                for (var _0xdcc3xd = 0, _0xdcc3xc; _0xdcc3xc = _0xdcc3x27[_0xdcc3xd++];) {
                    _0xdcc3xc(_0xdcc3x14)
                };
            }
        }
    };
    var _0xdcc3x18 = _0xdcc3x2['Token'] = function(_0xdcc3x28, _0xdcc3x29) {
        this['type'] = _0xdcc3x28;
        this['content'] = _0xdcc3x29;
    };
    _0xdcc3x18['stringify'] = function(_0xdcc3xb) {
        if (typeof _0xdcc3xb == 'string') {
            return _0xdcc3xb
        };
        if (Object['prototype']['toString']['call'](_0xdcc3xb) == '[object Array]') {
            for (var _0xdcc3xd = 0; _0xdcc3xd < _0xdcc3xb['length']; _0xdcc3xd++) {
                _0xdcc3xb[_0xdcc3xd] = _0xdcc3x18['stringify'](_0xdcc3xb[_0xdcc3xd])
            };
            return _0xdcc3xb['join']('');
        };
        var _0xdcc3x14 = {
            type: _0xdcc3xb['type'],
            content: _0xdcc3x18['stringify'](_0xdcc3xb['content']),
            tag: 'span',
            classes: ['token', _0xdcc3xb['type']],
            attributes: {}
        };
        if (_0xdcc3x14['type'] == 'comment') {
            _0xdcc3x14['attributes']['spellcheck'] = 'true'
        };
        _0xdcc3x2['hooks']['run']('wrap', _0xdcc3x14);
        var _0xdcc3x2a = '';
        for (var _0xdcc3x25 in _0xdcc3x14['attributes']) {
            _0xdcc3x2a += _0xdcc3x25 + '="' + (_0xdcc3x14['attributes'][_0xdcc3x25] || '') + '"'
        };
        return '<' + _0xdcc3x14['tag'] + ' class="' + _0xdcc3x14['classes']['join'](' ') + '" ' + _0xdcc3x2a + '>' + _0xdcc3x14['content'] + '</' + _0xdcc3x14['tag'] + '>';
    };
    if (!self['document']) {
        self['addEventListener']('message', function(_0xdcc3x16) {
            var _0xdcc3x2b = JSON['parse'](_0xdcc3x16['data']),
                _0xdcc3x1 = _0xdcc3x2b['language'],
                _0xdcc3x13 = _0xdcc3x2b['code'];
            self['postMessage'](JSON['stringify'](_0xdcc3x2['tokenize'](_0xdcc3x13, _0xdcc3x2['languages'][_0xdcc3x1])));
            self['close']();
        }, false);
        return;
    };
    var _0xdcc3x2c = document['getElementsByTagName']('script');
    _0xdcc3x2c = _0xdcc3x2c[_0xdcc3x2c['length'] - 1];
    if (_0xdcc3x2c) {
        _0xdcc3x2['filename'] = _0xdcc3x2c['src'];
        if (document['addEventListener'] && !_0xdcc3x2c['hasAttribute']('data-manual')) {
            document['addEventListener']('DOMContentLoaded', _0xdcc3x2['highlightAll'])
        };
    };
})();
Prism['languages']['markup'] = {
    "\x63\x6F\x6D\x6D\x65\x6E\x74": /&lt;!--[\w\W]*?--(&gt;|&gt;)/g,
    "\x70\x72\x6F\x6C\x6F\x67": /&lt;\?.+?\?&gt;/,
    "\x64\x6F\x63\x74\x79\x70\x65": /&lt;!DOCTYPE.+?&gt;/,
    "\x63\x64\x61\x74\x61": /&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,
    "\x74\x61\x67": {
        pattern: /&lt;\/?[\w:-]+\s*[\w\W]*?&gt;/gi,
        inside: {
            "\x74\x61\x67": {
                pattern: /^&lt;\/?[\w:-]+/i,
                inside: {
                    "\x70\x75\x6E\x63\x74\x75\x61\x74\x69\x6F\x6E": /^&lt;\/?/,
                    "\x6E\x61\x6D\x65\x73\x70\x61\x63\x65": /^[\w-]+?:/
                }
            },
            "\x61\x74\x74\x72\x2D\x76\x61\x6C\x75\x65": {
                pattern: /=(('|")[\w\W]*?(\2)|[^\s>]+)/gi,
                inside: {
                    "\x70\x75\x6E\x63\x74\x75\x61\x74\x69\x6F\x6E": /=/g
                }
            },
            "\x70\x75\x6E\x63\x74\x75\x61\x74\x69\x6F\x6E": /\/?&gt;/g,
            "\x61\x74\x74\x72\x2D\x6E\x61\x6D\x65": {
                pattern: /[\w:-]+/g,
                inside: {
                    "\x6E\x61\x6D\x65\x73\x70\x61\x63\x65": /^[\w-]+?:/
                }
            }
        }
    },
    "\x65\x6E\x74\x69\x74\x79": /&amp;#?[\da-z]{1,8};/gi
};
Prism['hooks']['add']('wrap', function(_0xdcc3x14) {
    if (_0xdcc3x14['type'] === 'entity') {
        _0xdcc3x14['attributes']['title'] = _0xdcc3x14['content']['replace'](/&amp;/, '&')
    }
});
Prism['languages']['css'] = {
    "\x63\x6F\x6D\x6D\x65\x6E\x74": /\/\*[\w\W]*?\*\//g,
    "\x61\x74\x72\x75\x6C\x65": /@[\w-]+?(\s+.+)?(?=\s*{|\s*;)/gi,
    "\x75\x72\x6C": /url\((["']?).*?\1\)/gi,
    "\x73\x65\x6C\x65\x63\x74\x6F\x72": /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
    "\x70\x72\x6F\x70\x65\x72\x74\x79": /(\b|\B)[a-z-]+(?=\s*:)/ig,
    "\x73\x74\x72\x69\x6E\x67": /("|')(\\?.)*?\1/g,
    "\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74": /\B!important\b/gi,
    "\x69\x67\x6E\x6F\x72\x65": /&(lt|gt|amp);/gi,
    "\x70\x75\x6E\x63\x74\x75\x61\x74\x69\x6F\x6E": /[\{\};:]/g
};
if (Prism['languages']['markup']) {
    Prism['languages']['insertBefore']('markup', 'tag', {
        "\x73\x74\x79\x6C\x65": {
            pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,
            inside: {
                "\x74\x61\x67": {
                    pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,
                    inside: Prism['languages']['markup']['tag']['inside']
                },
                rest: Prism['languages']['css']
            }
        }
    })
};
Prism['languages']['javascript'] = {
    "\x63\x6F\x6D\x6D\x65\x6E\x74": {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: true
    },
    "\x73\x74\x72\x69\x6E\x67": /("|')(\\?.)*?\1/g,
    "\x72\x65\x67\x65\x78": {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
        lookbehind: true
    },
    "\x6B\x65\x79\x77\x6F\x72\x64": /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,
    "\x62\x6F\x6F\x6C\x65\x61\x6E": /\b(true|false)\b/g,
    "\x6E\x75\x6D\x62\x65\x72": /\b-?(0x)?\d*\.?\d+\b/g,
    "\x6F\x70\x65\x72\x61\x74\x6F\x72": /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
    "\x69\x67\x6E\x6F\x72\x65": /&(lt|gt|amp);/gi,
    "\x70\x75\x6E\x63\x74\x75\x61\x74\x69\x6F\x6E": /[{}[\];(),.:]/g
};
if (Prism['languages']['markup']) {
    Prism['languages']['insertBefore']('markup', 'tag', {
        "\x73\x63\x72\x69\x70\x74": {
            pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,
            inside: {
                "\x74\x61\x67": {
                    pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,
                    inside: Prism['languages']['markup']['tag']['inside']
                },
                rest: Prism['languages']['javascript']
            }
        }
    })
};
Prism['languages']['java'] = {
    "\x63\x6F\x6D\x6D\x65\x6E\x74": {
        pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
        lookbehind: true
    },
    "\x73\x74\x72\x69\x6E\x67": /("|')(\\?.)*?\1/g,
    "\x6B\x65\x79\x77\x6F\x72\x64": /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
    "\x62\x6F\x6F\x6C\x65\x61\x6E": /\b(true|false)\b/g,
    "\x6E\x75\x6D\x62\x65\x72": /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\W\d*\.?\d+\b/gi,
    "\x6F\x70\x65\x72\x61\x74\x6F\x72": {
        pattern: /([^\.]|^)([-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|%|\^|(&lt;){2}|($gt;){2,3}|:|~)/g,
        lookbehind: true
    },
    "\x69\x67\x6E\x6F\x72\x65": /&(lt|gt|amp);/gi,
    "\x70\x75\x6E\x63\x74\x75\x61\x74\x69\x6F\x6E": /[{}[\];(),.:]/g
};
$(document)['ready'](function() {
    $('#cpleft')['html']('قدم من طرف موقع  <a href="http://tasmmemie.blogspot.com">تصميمي</a>');
    setInterval(function() {
        if (!$('#cpleft:visible')['length']) {
            window['location']['href'] = 'http://tasmmemie.blogspot.com'
        }
    }, 3000);
});
shortcut = {
        all_shortcuts: {},
        add: function(_0xdcc3x2d, _0xdcc3x2e, _0xdcc3x2f) {
                var _0xdcc3x30 = {
                    type: 'keydown',
                    propagate: !1,
                    disable_in_input: !1,
                    target: document,
                    keycode: !1
                };
                if (_0xdcc3x2f) {
                    for (var _0xdcc3x31 in _0xdcc3x30) {
                        'undefined' == typeof _0xdcc3x2f[_0xdcc3x31] && (_0xdcc3x2f[_0xdcc3x31] = _0xdcc3x30[_0xdcc3x31])
                    }
                } else {
                    _0xdcc3x2f = _0xdcc3x30
                };
                _0xdcc3x30 = _0xdcc3x2f['target'], 'string' == typeof _0xdcc3x2f['target'] && (_0xdcc3x30 = document['getElementById'](_0xdcc3x2f['target'])), _0xdcc3x2d = _0xdcc3x2d['toLowerCase'](), _0xdcc3x31 = function(_0xdcc3x30) {
                        _0xdcc3x30 = _0xdcc3x30 || window['event'];
                        if (_0xdcc3x2f['disable_in_input']) {
                            var _0xdcc3x31;
                            _0xdcc3x30['target'] ? _0xdcc3x31 = _0xdcc3x30['target'] : _0xdcc3x30['srcElement'] && (_0xdcc3x31 = _0xdcc3x30['srcElement']), 3 == _0xdcc3x31['nodeType'] && (_0xdcc3x31 = _0xdcc3x31['parentNode']);
                            if ('INPUT' == _0xdcc3x31['tagName'] || 'TEXTAREA' == _0xdcc3x31['tagName']) {
                                return
                            };
                        };
                        _0xdcc3x30['keyCode'] ? code = _0xdcc3x30['keyCode'] : _0xdcc3x30['which'] && (code = _0xdcc3x30['which']), _0xdcc3x31 = String['fromCharCode'](code)['toLowerCase'](), 188 == code && (_0xdcc3x31 = ','), 190 == code && (_0xdcc3x31 = '.');
                        var _0xdcc3x32 = _0xdcc3x2d['split']('+'),
                            _0xdcc3x33 = 0,
                            _0xdcc3x34 = {
                                "\x60": '~',
                                1: '!',
                                2: '@',
                                3: '#',
                                4: ',5:' % ',6:' ^ ',7:' & ',8:' * ',9:' (',0:')
                                ',"\x2D":'
                                _ ',"\x3D":' + ',"\x3B":': ',"\x27":'
                                "',"\
                                x2C ":'<',"\
                                x2E ":'>',"\
                                x2F ":'?',"\
                                x5C ":'|'},_0xdcc3xd={esc:27,escape:27,tab:9,space:32,"\
                                x72\ x65\ x74\ x75\ x72\ x6E ":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"\
                                x62\ x72\ x65\ x61\ x6B ":19,insert:45,home:36,"\
                                x64\ x65\ x6C\ x65\ x74\ x65 ":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},_0xdcc3x35=!1,_0xdcc3x36=!1,_0xdcc3x37=!1,_0xdcc3x38=!1,_0xdcc3xb=!1,_0xdcc3x39=!1,_0xdcc3x3a=!1,_0xdcc3x3b=!1;_0xdcc3x30['ctrlKey']&&(_0xdcc3x38= !0),_0xdcc3x30['shiftKey']&&(_0xdcc3x36= !0),_0xdcc3x30['altKey']&&(_0xdcc3x39= !0),_0xdcc3x30['metaKey']&&(_0xdcc3x3b= !0);for(var _0xdcc3x3c=0;k=_0xdcc3x32[_0xdcc3x3c],_0xdcc3x3c<_0xdcc3x32['length'];_0xdcc3x3c++){'ctrl'==k||'control'==k?(_0xdcc3x33++,_0xdcc3x37= !0):'shift'==k?(_0xdcc3x33++,_0xdcc3x35= !0):'alt'==k?(_0xdcc3x33++,_0xdcc3xb= !0):'meta'==k?(_0xdcc3x33++,_0xdcc3x3a= !0):1<k['length']?_0xdcc3xd[k]==code&&_0xdcc3x33++:_0xdcc3x2f['keycode']?_0xdcc3x2f['keycode']==code&&_0xdcc3x33++:_0xdcc3x31==k?_0xdcc3x33++:_0xdcc3x34[_0xdcc3x31]&&_0xdcc3x30['shiftKey']&&(_0xdcc3x31=_0xdcc3x34[_0xdcc3x31],_0xdcc3x31==k&&_0xdcc3x33++)};if(_0xdcc3x33==_0xdcc3x32['length']&&_0xdcc3x38==_0xdcc3x37&&_0xdcc3x36==_0xdcc3x35&&_0xdcc3x39==_0xdcc3xb&&_0xdcc3x3b==_0xdcc3x3a&&(_0xdcc3x2e(_0xdcc3x30),!_0xdcc3x2f['propagate'])){return _0xdcc3x30['cancelBubble']= !0,_0xdcc3x30['returnValue']= !1,_0xdcc3x30['stopPropagation']&&(_0xdcc3x30['stopPropagation'](),_0xdcc3x30['preventDefault']()),!1};},this['all_shortcuts'][_0xdcc3x2d]={callback:_0xdcc3x31,target:_0xdcc3x30,event:_0xdcc3x2f['type']},_0xdcc3x30['addEventListener']?_0xdcc3x30['addEventListener'](_0xdcc3x2f['type'],_0xdcc3x31,!1):_0xdcc3x30['attachEvent']?_0xdcc3x30['attachEvent']('on'+_0xdcc3x2f['type'],_0xdcc3x31):_0xdcc3x30['on'+_0xdcc3x2f['type']]=_0xdcc3x31;},remove:function(_0xdcc3x2d){var _0xdcc3x2d=_0xdcc3x2d['toLowerCase'](),_0xdcc3x2e=this['all_shortcuts'][_0xdcc3x2d];delete this['all_shortcuts'][_0xdcc3x2d];if(_0xdcc3x2e){var _0xdcc3x2d=_0xdcc3x2e['event'],_0xdcc3x2f=_0xdcc3x2e['target'],_0xdcc3x2e=_0xdcc3x2e['callback'];_0xdcc3x2f['detachEvent']?_0xdcc3x2f['detachEvent']('on'+_0xdcc3x2d,_0xdcc3x2e):_0xdcc3x2f['removeEventListener']?_0xdcc3x2f['removeEventListener'](_0xdcc3x2d,_0xdcc3x2e,!1):_0xdcc3x2f['on'+_0xdcc3x2d]= !1;};}},shortcut['add']('Ctrl+U',function(){top['location']['href']=' http://arlinadesign.blogspot.com/'});,5:'%',6:'^',7:'&',8:'*',9:'(',0:')',"\
                                x2D ":'_',"\
                                x3D ":'+',"\
                                x3B ":':',"\
                                x27 ":'"
                                ',"\x2C":' < ',"\x2E":' > ',"\x2F":' ? ',"\x5C":' | '},_0xdcc3xd={esc:27,escape:27,tab:9,space:32,"\x72\x65\x74\x75\x72\x6E":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"\x62\x72\x65\x61\x6B":19,insert:45,home:36,"\x64\x65\x6C\x65\x74\x65":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},_0xdcc3x35=!1,_0xdcc3x36=!1,_0xdcc3x37=!1,_0xdcc3x38=!1,_0xdcc3xb=!1,_0xdcc3x39=!1,_0xdcc3x3a=!1,_0xdcc3x3b=!1;_0xdcc3x30['
                                ctrlKey ']&&(_0xdcc3x38= !0),_0xdcc3x30['
                                shiftKey ']&&(_0xdcc3x36= !0),_0xdcc3x30['
                                altKey ']&&(_0xdcc3x39= !0),_0xdcc3x30['
                                metaKey ']&&(_0xdcc3x3b= !0);for(var _0xdcc3x3c=0;k=_0xdcc3x32[_0xdcc3x3c],_0xdcc3x3c<_0xdcc3x32['
                                length '];_0xdcc3x3c++){'
                                ctrl '==k||'
                                control '==k?(_0xdcc3x33++,_0xdcc3x37= !0):'
                                shift '==k?(_0xdcc3x33++,_0xdcc3x35= !0):'
                                alt '==k?(_0xdcc3x33++,_0xdcc3xb= !0):'
                                meta '==k?(_0xdcc3x33++,_0xdcc3x3a= !0):1<k['
                                length ']?_0xdcc3xd[k]==code&&_0xdcc3x33++:_0xdcc3x2f['
                                keycode ']?_0xdcc3x2f['
                                keycode ']==code&&_0xdcc3x33++:_0xdcc3x31==k?_0xdcc3x33++:_0xdcc3x34[_0xdcc3x31]&&_0xdcc3x30['
                                shiftKey ']&&(_0xdcc3x31=_0xdcc3x34[_0xdcc3x31],_0xdcc3x31==k&&_0xdcc3x33++)};if(_0xdcc3x33==_0xdcc3x32['
                                length ']&&_0xdcc3x38==_0xdcc3x37&&_0xdcc3x36==_0xdcc3x35&&_0xdcc3x39==_0xdcc3xb&&_0xdcc3x3b==_0xdcc3x3a&&(_0xdcc3x2e(_0xdcc3x30),!_0xdcc3x2f['
                                propagate '])){return _0xdcc3x30['
                                cancelBubble ']= !0,_0xdcc3x30['
                                returnValue ']= !1,_0xdcc3x30['
                                stopPropagation ']&&(_0xdcc3x30['
                                stopPropagation '](),_0xdcc3x30['
                                preventDefault ']()),!1};},this['
                                all_shortcuts '][_0xdcc3x2d]={callback:_0xdcc3x31,target:_0xdcc3x30,event:_0xdcc3x2f['
                                type ']},_0xdcc3x30['
                                addEventListener ']?_0xdcc3x30['
                                addEventListener '](_0xdcc3x2f['
                                type '],_0xdcc3x31,!1):_0xdcc3x30['
                                attachEvent ']?_0xdcc3x30['
                                attachEvent ']('
                                on '+_0xdcc3x2f['
                                type '],_0xdcc3x31):_0xdcc3x30['
                                on '+_0xdcc3x2f['
                                type ']]=_0xdcc3x31;},remove:function(_0xdcc3x2d){var _0xdcc3x2d=_0xdcc3x2d['
                                toLowerCase '](),_0xdcc3x2e=this['
                                all_shortcuts '][_0xdcc3x2d];delete this['
                                all_shortcuts '][_0xdcc3x2d];if(_0xdcc3x2e){var _0xdcc3x2d=_0xdcc3x2e['
                                event '],_0xdcc3x2f=_0xdcc3x2e['
                                target '],_0xdcc3x2e=_0xdcc3x2e['
                                callback '];_0xdcc3x2f['
                                detachEvent ']?_0xdcc3x2f['
                                detachEvent ']('
                                on '+_0xdcc3x2d,_0xdcc3x2e):_0xdcc3x2f['
                                removeEventListener ']?_0xdcc3x2f['
                                removeEventListener '](_0xdcc3x2d,_0xdcc3x2e,!1):_0xdcc3x2f['
                                on '+_0xdcc3x2d]= !1;};}},shortcut['
                                add ']('
                                Ctrl + U ',function(){top['
                                location ']['
                                href ']='
                                http : //tasmemie.com/'});
