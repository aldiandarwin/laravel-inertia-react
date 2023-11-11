function t(t, r) {
    for (var n = 0; n < r.length; n++) {
        var e = r[n];
        (e.enumerable = e.enumerable || !1),
            (e.configurable = !0),
            'value' in e && (e.writable = !0),
            Object.defineProperty(
                t,
                'symbol' ==
                    typeof (o = (function (t, r) {
                        if ('object' != typeof t || null === t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var e = n.call(t, 'string');
                            if ('object' != typeof e) return e;
                            throw new TypeError('@@toPrimitive must return a primitive value.');
                        }
                        return String(t);
                    })(e.key))
                    ? o
                    : String(o),
                e
            );
    }
    var o;
}
function r(r, n, e) {
    return n && t(r.prototype, n), e && t(r, e), Object.defineProperty(r, 'prototype', { writable: !1 }), r;
}
function n() {
    return (
        (n = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var r = 1; r < arguments.length; r++) {
                      var n = arguments[r];
                      for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                  }
                  return t;
              }),
        n.apply(this, arguments)
    );
}
function e(t) {
    return (
        (e = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              }),
        e(t)
    );
}
function o(t, r) {
    return (
        (o = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, r) {
                  return (t.__proto__ = r), t;
              }),
        o(t, r)
    );
}
function i() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
        return !1;
    }
}
function u(t, r, n) {
    return (
        (u = i()
            ? Reflect.construct.bind()
            : function (t, r, n) {
                  var e = [null];
                  e.push.apply(e, r);
                  var i = new (Function.bind.apply(t, e))();
                  return n && o(i, n.prototype), i;
              }),
        u.apply(null, arguments)
    );
}
function f(t) {
    var r = 'function' == typeof Map ? new Map() : void 0;
    return (
        (f = function (t) {
            if (null === t || -1 === Function.toString.call(t).indexOf('[native code]')) return t;
            if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== r) {
                if (r.has(t)) return r.get(t);
                r.set(t, n);
            }
            function n() {
                return u(t, arguments, e(this).constructor);
            }
            return (
                (n.prototype = Object.create(t.prototype, {
                    constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                })),
                o(n, t)
            );
        }),
        f(t)
    );
}
var a = String.prototype.replace,
    c = /%20/g,
    l = {
        default: 'RFC3986',
        formatters: {
            RFC1738: function (t) {
                return a.call(t, c, '+');
            },
            RFC3986: function (t) {
                return String(t);
            },
        },
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986',
    },
    s = Object.prototype.hasOwnProperty,
    v = Array.isArray,
    p = (function () {
        for (var t = [], r = 0; r < 256; ++r) t.push('%' + ((r < 16 ? '0' : '') + r.toString(16)).toUpperCase());
        return t;
    })(),
    y = function (t, r) {
        for (var n = r && r.plainObjects ? Object.create(null) : {}, e = 0; e < t.length; ++e)
            void 0 !== t[e] && (n[e] = t[e]);
        return n;
    },
    d = {
        arrayToObject: y,
        assign: function (t, r) {
            return Object.keys(r).reduce(function (t, n) {
                return (t[n] = r[n]), t;
            }, t);
        },
        combine: function (t, r) {
            return [].concat(t, r);
        },
        compact: function (t) {
            for (var r = [{ obj: { o: t }, prop: 'o' }], n = [], e = 0; e < r.length; ++e)
                for (var o = r[e], i = o.obj[o.prop], u = Object.keys(i), f = 0; f < u.length; ++f) {
                    var a = u[f],
                        c = i[a];
                    'object' == typeof c &&
                        null !== c &&
                        -1 === n.indexOf(c) &&
                        (r.push({ obj: i, prop: a }), n.push(c));
                }
            return (
                (function (t) {
                    for (; t.length > 1; ) {
                        var r = t.pop(),
                            n = r.obj[r.prop];
                        if (v(n)) {
                            for (var e = [], o = 0; o < n.length; ++o) void 0 !== n[o] && e.push(n[o]);
                            r.obj[r.prop] = e;
                        }
                    }
                })(r),
                t
            );
        },
        decode: function (t, r, n) {
            var e = t.replace(/\+/g, ' ');
            if ('iso-8859-1' === n) return e.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(e);
            } catch (t) {
                return e;
            }
        },
        encode: function (t, r, n, e, o) {
            if (0 === t.length) return t;
            var i = t;
            if (
                ('symbol' == typeof t
                    ? (i = Symbol.prototype.toString.call(t))
                    : 'string' != typeof t && (i = String(t)),
                'iso-8859-1' === n)
            )
                return escape(i).replace(/%u[0-9a-f]{4}/gi, function (t) {
                    return '%26%23' + parseInt(t.slice(2), 16) + '%3B';
                });
            for (var u = '', f = 0; f < i.length; ++f) {
                var a = i.charCodeAt(f);
                45 === a ||
                46 === a ||
                95 === a ||
                126 === a ||
                (a >= 48 && a <= 57) ||
                (a >= 65 && a <= 90) ||
                (a >= 97 && a <= 122) ||
                (o === l.RFC1738 && (40 === a || 41 === a))
                    ? (u += i.charAt(f))
                    : a < 128
                    ? (u += p[a])
                    : a < 2048
                    ? (u += p[192 | (a >> 6)] + p[128 | (63 & a)])
                    : a < 55296 || a >= 57344
                    ? (u += p[224 | (a >> 12)] + p[128 | ((a >> 6) & 63)] + p[128 | (63 & a)])
                    : ((a = 65536 + (((1023 & a) << 10) | (1023 & i.charCodeAt((f += 1))))),
                      (u +=
                          p[240 | (a >> 18)] +
                          p[128 | ((a >> 12) & 63)] +
                          p[128 | ((a >> 6) & 63)] +
                          p[128 | (63 & a)]));
            }
            return u;
        },
        isBuffer: function (t) {
            return !(
                !t ||
                'object' != typeof t ||
                !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
            );
        },
        isRegExp: function (t) {
            return '[object RegExp]' === Object.prototype.toString.call(t);
        },
        maybeMap: function (t, r) {
            if (v(t)) {
                for (var n = [], e = 0; e < t.length; e += 1) n.push(r(t[e]));
                return n;
            }
            return r(t);
        },
        merge: function t(r, n, e) {
            if (!n) return r;
            if ('object' != typeof n) {
                if (v(r)) r.push(n);
                else {
                    if (!r || 'object' != typeof r) return [r, n];
                    ((e && (e.plainObjects || e.allowPrototypes)) || !s.call(Object.prototype, n)) && (r[n] = !0);
                }
                return r;
            }
            if (!r || 'object' != typeof r) return [r].concat(n);
            var o = r;
            return (
                v(r) && !v(n) && (o = y(r, e)),
                v(r) && v(n)
                    ? (n.forEach(function (n, o) {
                          if (s.call(r, o)) {
                              var i = r[o];
                              i && 'object' == typeof i && n && 'object' == typeof n ? (r[o] = t(i, n, e)) : r.push(n);
                          } else r[o] = n;
                      }),
                      r)
                    : Object.keys(n).reduce(function (r, o) {
                          var i = n[o];
                          return (r[o] = s.call(r, o) ? t(r[o], i, e) : i), r;
                      }, o)
            );
        },
    },
    b = Object.prototype.hasOwnProperty,
    h = {
        brackets: function (t) {
            return t + '[]';
        },
        comma: 'comma',
        indices: function (t, r) {
            return t + '[' + r + ']';
        },
        repeat: function (t) {
            return t;
        },
    },
    m = Array.isArray,
    g = String.prototype.split,
    j = Array.prototype.push,
    w = function (t, r) {
        j.apply(t, m(r) ? r : [r]);
    },
    O = Date.prototype.toISOString,
    E = l.default,
    R = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: d.encode,
        encodeValuesOnly: !1,
        format: E,
        formatter: l.formatters[E],
        indices: !1,
        serializeDate: function (t) {
            return O.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    S = function t(r, n, e, o, i, u, f, a, c, l, s, v, p, y) {
        var b,
            h = r;
        if (
            ('function' == typeof f
                ? (h = f(n, h))
                : h instanceof Date
                ? (h = l(h))
                : 'comma' === e &&
                  m(h) &&
                  (h = d.maybeMap(h, function (t) {
                      return t instanceof Date ? l(t) : t;
                  })),
            null === h)
        ) {
            if (o) return u && !p ? u(n, R.encoder, y, 'key', s) : n;
            h = '';
        }
        if (
            'string' == typeof (b = h) ||
            'number' == typeof b ||
            'boolean' == typeof b ||
            'symbol' == typeof b ||
            'bigint' == typeof b ||
            d.isBuffer(h)
        ) {
            if (u) {
                var j = p ? n : u(n, R.encoder, y, 'key', s);
                if ('comma' === e && p) {
                    for (var O = g.call(String(h), ','), E = '', S = 0; S < O.length; ++S)
                        E += (0 === S ? '' : ',') + v(u(O[S], R.encoder, y, 'value', s));
                    return [v(j) + '=' + E];
                }
                return [v(j) + '=' + v(u(h, R.encoder, y, 'value', s))];
            }
            return [v(n) + '=' + v(String(h))];
        }
        var k,
            x = [];
        if (void 0 === h) return x;
        if ('comma' === e && m(h)) k = [{ value: h.length > 0 ? h.join(',') || null : void 0 }];
        else if (m(f)) k = f;
        else {
            var C = Object.keys(h);
            k = a ? C.sort(a) : C;
        }
        for (var T = 0; T < k.length; ++T) {
            var N = k[T],
                F = 'object' == typeof N && void 0 !== N.value ? N.value : h[N];
            if (!i || null !== F) {
                var D = m(h) ? ('function' == typeof e ? e(n, N) : n) : n + (c ? '.' + N : '[' + N + ']');
                w(x, t(F, D, e, o, i, u, f, a, c, l, s, v, p, y));
            }
        }
        return x;
    },
    k = Object.prototype.hasOwnProperty,
    x = Array.isArray,
    C = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: d.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
    },
    T = function (t) {
        return t.replace(/&#(\d+);/g, function (t, r) {
            return String.fromCharCode(parseInt(r, 10));
        });
    },
    N = function (t, r) {
        return t && 'string' == typeof t && r.comma && t.indexOf(',') > -1 ? t.split(',') : t;
    },
    F = function (t, r, n, e) {
        if (t) {
            var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
                i = /(\[[^[\]]*])/g,
                u = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                f = u ? o.slice(0, u.index) : o,
                a = [];
            if (f) {
                if (!n.plainObjects && k.call(Object.prototype, f) && !n.allowPrototypes) return;
                a.push(f);
            }
            for (var c = 0; n.depth > 0 && null !== (u = i.exec(o)) && c < n.depth; ) {
                if (((c += 1), !n.plainObjects && k.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes))
                    return;
                a.push(u[1]);
            }
            return (
                u && a.push('[' + o.slice(u.index) + ']'),
                (function (t, r, n, e) {
                    for (var o = e ? r : N(r, n), i = t.length - 1; i >= 0; --i) {
                        var u,
                            f = t[i];
                        if ('[]' === f && n.parseArrays) u = [].concat(o);
                        else {
                            u = n.plainObjects ? Object.create(null) : {};
                            var a = '[' === f.charAt(0) && ']' === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                                c = parseInt(a, 10);
                            n.parseArrays || '' !== a
                                ? !isNaN(c) &&
                                  f !== a &&
                                  String(c) === a &&
                                  c >= 0 &&
                                  n.parseArrays &&
                                  c <= n.arrayLimit
                                    ? ((u = [])[c] = o)
                                    : '__proto__' !== a && (u[a] = o)
                                : (u = { 0: o });
                        }
                        o = u;
                    }
                    return o;
                })(a, r, n, e)
            );
        }
    },
    D = function (t, r) {
        var n = (function (t) {
            if (!t) return C;
            if (null != t.decoder && 'function' != typeof t.decoder)
                throw new TypeError('Decoder has to be a function.');
            if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
            return {
                allowDots: void 0 === t.allowDots ? C.allowDots : !!t.allowDots,
                allowPrototypes: 'boolean' == typeof t.allowPrototypes ? t.allowPrototypes : C.allowPrototypes,
                arrayLimit: 'number' == typeof t.arrayLimit ? t.arrayLimit : C.arrayLimit,
                charset: void 0 === t.charset ? C.charset : t.charset,
                charsetSentinel: 'boolean' == typeof t.charsetSentinel ? t.charsetSentinel : C.charsetSentinel,
                comma: 'boolean' == typeof t.comma ? t.comma : C.comma,
                decoder: 'function' == typeof t.decoder ? t.decoder : C.decoder,
                delimiter: 'string' == typeof t.delimiter || d.isRegExp(t.delimiter) ? t.delimiter : C.delimiter,
                depth: 'number' == typeof t.depth || !1 === t.depth ? +t.depth : C.depth,
                ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                interpretNumericEntities:
                    'boolean' == typeof t.interpretNumericEntities
                        ? t.interpretNumericEntities
                        : C.interpretNumericEntities,
                parameterLimit: 'number' == typeof t.parameterLimit ? t.parameterLimit : C.parameterLimit,
                parseArrays: !1 !== t.parseArrays,
                plainObjects: 'boolean' == typeof t.plainObjects ? t.plainObjects : C.plainObjects,
                strictNullHandling:
                    'boolean' == typeof t.strictNullHandling ? t.strictNullHandling : C.strictNullHandling,
            };
        })(r);
        if ('' === t || null == t) return n.plainObjects ? Object.create(null) : {};
        for (
            var e =
                    'string' == typeof t
                        ? (function (t, r) {
                              var n,
                                  e = {},
                                  o = (r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t).split(
                                      r.delimiter,
                                      Infinity === r.parameterLimit ? void 0 : r.parameterLimit
                                  ),
                                  i = -1,
                                  u = r.charset;
                              if (r.charsetSentinel)
                                  for (n = 0; n < o.length; ++n)
                                      0 === o[n].indexOf('utf8=') &&
                                          ('utf8=%E2%9C%93' === o[n]
                                              ? (u = 'utf-8')
                                              : 'utf8=%26%2310003%3B' === o[n] && (u = 'iso-8859-1'),
                                          (i = n),
                                          (n = o.length));
                              for (n = 0; n < o.length; ++n)
                                  if (n !== i) {
                                      var f,
                                          a,
                                          c = o[n],
                                          l = c.indexOf(']='),
                                          s = -1 === l ? c.indexOf('=') : l + 1;
                                      -1 === s
                                          ? ((f = r.decoder(c, C.decoder, u, 'key')),
                                            (a = r.strictNullHandling ? null : ''))
                                          : ((f = r.decoder(c.slice(0, s), C.decoder, u, 'key')),
                                            (a = d.maybeMap(N(c.slice(s + 1), r), function (t) {
                                                return r.decoder(t, C.decoder, u, 'value');
                                            }))),
                                          a && r.interpretNumericEntities && 'iso-8859-1' === u && (a = T(a)),
                                          c.indexOf('[]=') > -1 && (a = x(a) ? [a] : a),
                                          (e[f] = k.call(e, f) ? d.combine(e[f], a) : a);
                                  }
                              return e;
                          })(t, n)
                        : t,
                o = n.plainObjects ? Object.create(null) : {},
                i = Object.keys(e),
                u = 0;
            u < i.length;
            ++u
        ) {
            var f = i[u],
                a = F(f, e[f], n, 'string' == typeof t);
            o = d.merge(o, a, n);
        }
        return d.compact(o);
    },
    I = /*#__PURE__*/ (function () {
        function t(t, r, n) {
            var e, o;
            (this.name = t),
                (this.definition = r),
                (this.bindings = null != (e = r.bindings) ? e : {}),
                (this.wheres = null != (o = r.wheres) ? o : {}),
                (this.config = n);
        }
        var n = t.prototype;
        return (
            (n.matchesUrl = function (t) {
                var r = this;
                if (!this.definition.methods.includes('GET')) return !1;
                var n = this.template
                        .replace(/(\/?){([^}?]*)(\??)}/g, function (t, n, e, o) {
                            var i,
                                u =
                                    '(?<' +
                                    e +
                                    '>' +
                                    ((null == (i = r.wheres[e]) ? void 0 : i.replace(/(^\^)|(\$$)/g, '')) || '[^/?]+') +
                                    ')';
                            return o ? '(' + n + u + ')?' : '' + n + u;
                        })
                        .replace(/^\w+:\/\//, ''),
                    e = t.replace(/^\w+:\/\//, '').split('?'),
                    o = e[0],
                    i = e[1],
                    u = new RegExp('^' + n + '/?$').exec(o);
                if (u) {
                    for (var f in u.groups)
                        u.groups[f] = 'string' == typeof u.groups[f] ? decodeURIComponent(u.groups[f]) : u.groups[f];
                    return { params: u.groups, query: D(i) };
                }
                return !1;
            }),
            (n.compile = function (t) {
                var r = this,
                    n = this.parameterSegments;
                return n.length
                    ? this.template
                          .replace(/{([^}?]+)(\??)}/g, function (e, o, i) {
                              var u, f, a;
                              if (!i && [null, void 0].includes(t[o]))
                                  throw new Error(
                                      "Ziggy error: '" + o + "' parameter is required for route '" + r.name + "'."
                                  );
                              if (n[n.length - 1].name === o && '.*' === r.wheres[o])
                                  return encodeURIComponent(null != (a = t[o]) ? a : '').replace(/%2F/g, '/');
                              if (
                                  r.wheres[o] &&
                                  !new RegExp('^' + (i ? '(' + r.wheres[o] + ')?' : r.wheres[o]) + '$').test(
                                      null != (u = t[o]) ? u : ''
                                  )
                              )
                                  throw new Error(
                                      "Ziggy error: '" +
                                          o +
                                          "' parameter does not match required format '" +
                                          r.wheres[o] +
                                          "' for route '" +
                                          r.name +
                                          "'."
                                  );
                              return encodeURIComponent(null != (f = t[o]) ? f : '');
                          })
                          .replace(this.origin + '//', this.origin + '/')
                          .replace(/\/+$/, '')
                    : this.template;
            }),
            r(t, [
                {
                    key: 'template',
                    get: function () {
                        return (this.origin + '/' + this.definition.uri).replace(/\/+$/, '');
                    },
                },
                {
                    key: 'origin',
                    get: function () {
                        return this.config.absolute
                            ? this.definition.domain
                                ? '' +
                                  this.config.url.match(/^\w+:\/\//)[0] +
                                  this.definition.domain +
                                  (this.config.port ? ':' + this.config.port : '')
                                : this.config.url
                            : '';
                    },
                },
                {
                    key: 'parameterSegments',
                    get: function () {
                        var t, r;
                        return null !=
                            (t =
                                null == (r = this.template.match(/{[^}?]+\??}/g))
                                    ? void 0
                                    : r.map(function (t) {
                                          return { name: t.replace(/{|\??}/g, ''), required: !/\?}$/.test(t) };
                                      }))
                            ? t
                            : [];
                    },
                },
            ]),
            t
        );
    })(),
    P = /*#__PURE__*/ (function (t) {
        var e, i;
        function u(r, e, o, i) {
            var u;
            if (
                (void 0 === o && (o = !0),
                ((u = t.call(this) || this).t =
                    null != i
                        ? i
                        : 'undefined' != typeof Ziggy
                        ? Ziggy
                        : null == globalThis
                        ? void 0
                        : globalThis.Ziggy),
                (u.t = n({}, u.t, { absolute: o })),
                r)
            ) {
                if (!u.t.routes[r]) throw new Error("Ziggy error: route '" + r + "' is not in the route list.");
                (u.i = new I(r, u.t.routes[r], u.t)), (u.u = u.l(e));
            }
            return u;
        }
        (i = t), ((e = u).prototype = Object.create(i.prototype)), (e.prototype.constructor = e), o(e, i);
        var f = u.prototype;
        return (
            (f.toString = function () {
                var t = this,
                    r = Object.keys(this.u)
                        .filter(function (r) {
                            return !t.i.parameterSegments.some(function (t) {
                                return t.name === r;
                            });
                        })
                        .filter(function (t) {
                            return '_query' !== t;
                        })
                        .reduce(function (r, e) {
                            var o;
                            return n({}, r, (((o = {})[e] = t.u[e]), o));
                        }, {});
                return (
                    this.i.compile(this.u) +
                    (function (t, r) {
                        var n,
                            e = t,
                            o = (function (t) {
                                if (!t) return R;
                                if (null != t.encoder && 'function' != typeof t.encoder)
                                    throw new TypeError('Encoder has to be a function.');
                                var r = t.charset || R.charset;
                                if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                                    throw new TypeError(
                                        'The charset option must be either utf-8, iso-8859-1, or undefined'
                                    );
                                var n = l.default;
                                if (void 0 !== t.format) {
                                    if (!b.call(l.formatters, t.format))
                                        throw new TypeError('Unknown format option provided.');
                                    n = t.format;
                                }
                                var e = l.formatters[n],
                                    o = R.filter;
                                return (
                                    ('function' == typeof t.filter || m(t.filter)) && (o = t.filter),
                                    {
                                        addQueryPrefix:
                                            'boolean' == typeof t.addQueryPrefix ? t.addQueryPrefix : R.addQueryPrefix,
                                        allowDots: void 0 === t.allowDots ? R.allowDots : !!t.allowDots,
                                        charset: r,
                                        charsetSentinel:
                                            'boolean' == typeof t.charsetSentinel
                                                ? t.charsetSentinel
                                                : R.charsetSentinel,
                                        delimiter: void 0 === t.delimiter ? R.delimiter : t.delimiter,
                                        encode: 'boolean' == typeof t.encode ? t.encode : R.encode,
                                        encoder: 'function' == typeof t.encoder ? t.encoder : R.encoder,
                                        encodeValuesOnly:
                                            'boolean' == typeof t.encodeValuesOnly
                                                ? t.encodeValuesOnly
                                                : R.encodeValuesOnly,
                                        filter: o,
                                        format: n,
                                        formatter: e,
                                        serializeDate:
                                            'function' == typeof t.serializeDate ? t.serializeDate : R.serializeDate,
                                        skipNulls: 'boolean' == typeof t.skipNulls ? t.skipNulls : R.skipNulls,
                                        sort: 'function' == typeof t.sort ? t.sort : null,
                                        strictNullHandling:
                                            'boolean' == typeof t.strictNullHandling
                                                ? t.strictNullHandling
                                                : R.strictNullHandling,
                                    }
                                );
                            })(r);
                        'function' == typeof o.filter ? (e = (0, o.filter)('', e)) : m(o.filter) && (n = o.filter);
                        var i = [];
                        if ('object' != typeof e || null === e) return '';
                        var u =
                            h[
                                r && r.arrayFormat in h
                                    ? r.arrayFormat
                                    : r && 'indices' in r
                                    ? r.indices
                                        ? 'indices'
                                        : 'repeat'
                                    : 'indices'
                            ];
                        n || (n = Object.keys(e)), o.sort && n.sort(o.sort);
                        for (var f = 0; f < n.length; ++f) {
                            var a = n[f];
                            (o.skipNulls && null === e[a]) ||
                                w(
                                    i,
                                    S(
                                        e[a],
                                        a,
                                        u,
                                        o.strictNullHandling,
                                        o.skipNulls,
                                        o.encode ? o.encoder : null,
                                        o.filter,
                                        o.sort,
                                        o.allowDots,
                                        o.serializeDate,
                                        o.format,
                                        o.formatter,
                                        o.encodeValuesOnly,
                                        o.charset
                                    )
                                );
                        }
                        var c = i.join(o.delimiter),
                            s = !0 === o.addQueryPrefix ? '?' : '';
                        return (
                            o.charsetSentinel &&
                                (s += 'iso-8859-1' === o.charset ? 'utf8=%26%2310003%3B&' : 'utf8=%E2%9C%93&'),
                            c.length > 0 ? s + c : ''
                        );
                    })(n({}, r, this.u._query), {
                        addQueryPrefix: !0,
                        arrayFormat: 'indices',
                        encodeValuesOnly: !0,
                        skipNulls: !0,
                        encoder: function (t, r) {
                            return 'boolean' == typeof t ? Number(t) : r(t);
                        },
                    })
                );
            }),
            (f.v = function (t) {
                var r = this;
                t ? this.t.absolute && t.startsWith('/') && (t = this.p().host + t) : (t = this.h());
                var e = {},
                    o = Object.entries(this.t.routes).find(function (n) {
                        return (e = new I(n[0], n[1], r.t).matchesUrl(t));
                    }) || [void 0, void 0];
                return n({ name: o[0] }, e, { route: o[1] });
            }),
            (f.h = function () {
                var t = this.p(),
                    r = t.pathname,
                    n = t.search;
                return (
                    (this.t.absolute
                        ? t.host + r
                        : r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ''), '').replace(/^\/+/, '/')) + n
                );
            }),
            (f.current = function (t, r) {
                var e = this.v(),
                    o = e.name,
                    i = e.params,
                    u = e.query,
                    f = e.route;
                if (!t) return o;
                var a = new RegExp('^' + t.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$').test(o);
                if ([null, void 0].includes(r) || !a) return a;
                var c = new I(o, f, this.t);
                r = this.l(r, c);
                var l = n({}, i, u);
                return (
                    !(
                        !Object.values(r).every(function (t) {
                            return !t;
                        }) ||
                        Object.values(l).some(function (t) {
                            return void 0 !== t;
                        })
                    ) ||
                    Object.entries(r).every(function (t) {
                        return l[t[0]] == t[1];
                    })
                );
            }),
            (f.p = function () {
                var t,
                    r,
                    n,
                    e,
                    o,
                    i,
                    u = 'undefined' != typeof window ? window.location : {},
                    f = u.host,
                    a = u.pathname,
                    c = u.search;
                return {
                    host: null != (t = null == (r = this.t.location) ? void 0 : r.host) ? t : void 0 === f ? '' : f,
                    pathname:
                        null != (n = null == (e = this.t.location) ? void 0 : e.pathname) ? n : void 0 === a ? '' : a,
                    search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === c ? '' : c,
                };
            }),
            (f.has = function (t) {
                return Object.keys(this.t.routes).includes(t);
            }),
            (f.l = function (t, r) {
                var e = this;
                void 0 === t && (t = {}),
                    void 0 === r && (r = this.i),
                    null != t || (t = {}),
                    (t = ['string', 'number'].includes(typeof t) ? [t] : t);
                var o = r.parameterSegments.filter(function (t) {
                    return !e.t.defaults[t.name];
                });
                if (Array.isArray(t))
                    t = t.reduce(function (t, r, e) {
                        var i, u;
                        return n(
                            {},
                            t,
                            o[e] ? (((i = {})[o[e].name] = r), i) : 'object' == typeof r ? r : (((u = {})[r] = ''), u)
                        );
                    }, {});
                else if (
                    1 === o.length &&
                    !t[o[0].name] &&
                    (t.hasOwnProperty(Object.values(r.bindings)[0]) || t.hasOwnProperty('id'))
                ) {
                    var i;
                    ((i = {})[o[0].name] = t), (t = i);
                }
                return n({}, this.m(r), this.g(t, r));
            }),
            (f.m = function (t) {
                var r = this;
                return t.parameterSegments
                    .filter(function (t) {
                        return r.t.defaults[t.name];
                    })
                    .reduce(function (t, e, o) {
                        var i,
                            u = e.name;
                        return n({}, t, (((i = {})[u] = r.t.defaults[u]), i));
                    }, {});
            }),
            (f.g = function (t, r) {
                var e = r.bindings,
                    o = r.parameterSegments;
                return Object.entries(t).reduce(function (t, r) {
                    var i,
                        u,
                        f = r[0],
                        a = r[1];
                    if (
                        !a ||
                        'object' != typeof a ||
                        Array.isArray(a) ||
                        !o.some(function (t) {
                            return t.name === f;
                        })
                    )
                        return n({}, t, (((u = {})[f] = a), u));
                    if (!a.hasOwnProperty(e[f])) {
                        if (!a.hasOwnProperty('id'))
                            throw new Error(
                                "Ziggy error: object passed as '" +
                                    f +
                                    "' parameter is missing route model binding key '" +
                                    e[f] +
                                    "'."
                            );
                        e[f] = 'id';
                    }
                    return n({}, t, (((i = {})[f] = a[e[f]]), i));
                }, {});
            }),
            (f.valueOf = function () {
                return this.toString();
            }),
            (f.check = function (t) {
                return this.has(t);
            }),
            r(u, [
                {
                    key: 'params',
                    get: function () {
                        var t = this.v();
                        return n({}, t.params, t.query);
                    },
                },
            ]),
            u
        );
    })(/*#__PURE__*/ f(String)),
    $ = {
        install: function (t, r) {
            var n = function (t, n, e, o) {
                return (
                    void 0 === o && (o = r),
                    (function (t, r, n, e) {
                        var o = new P(t, r, n, e);
                        return t ? o.toString() : o;
                    })(t, n, e, o)
                );
            };
            t.mixin({ methods: { route: n } }), parseInt(t.version) > 2 && t.provide('route', n);
        },
    };
export { $ as ZiggyVue };
