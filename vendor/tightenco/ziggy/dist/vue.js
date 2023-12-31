!(function (t, r) {
    'object' == typeof exports && 'undefined' != typeof module
        ? r(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], r)
        : r(((t || self).ZiggyVue = {}));
})(this, function (t) {
    function r(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(
                    t,
                    'symbol' ==
                        typeof (o = (function (t, r) {
                            if ('object' != typeof t || null === t) return t;
                            var e = t[Symbol.toPrimitive];
                            if (void 0 !== e) {
                                var n = e.call(t, 'string');
                                if ('object' != typeof n) return n;
                                throw new TypeError('@@toPrimitive must return a primitive value.');
                            }
                            return String(t);
                        })(n.key))
                        ? o
                        : String(o),
                    n
                );
        }
        var o;
    }
    function e(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, 'prototype', { writable: !1 }), t;
    }
    function n() {
        return (
            (n = Object.assign
                ? Object.assign.bind()
                : function (t) {
                      for (var r = 1; r < arguments.length; r++) {
                          var e = arguments[r];
                          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                      }
                      return t;
                  }),
            n.apply(this, arguments)
        );
    }
    function o(t) {
        return (
            (o = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            o(t)
        );
    }
    function i(t, r) {
        return (
            (i = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, r) {
                      return (t.__proto__ = r), t;
                  }),
            i(t, r)
        );
    }
    function u() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
            return !1;
        }
    }
    function f(t, r, e) {
        return (
            (f = u()
                ? Reflect.construct.bind()
                : function (t, r, e) {
                      var n = [null];
                      n.push.apply(n, r);
                      var o = new (Function.bind.apply(t, n))();
                      return e && i(o, e.prototype), o;
                  }),
            f.apply(null, arguments)
        );
    }
    function a(t) {
        var r = 'function' == typeof Map ? new Map() : void 0;
        return (
            (a = function (t) {
                if (null === t || -1 === Function.toString.call(t).indexOf('[native code]')) return t;
                if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
                if (void 0 !== r) {
                    if (r.has(t)) return r.get(t);
                    r.set(t, e);
                }
                function e() {
                    return f(t, arguments, o(this).constructor);
                }
                return (
                    (e.prototype = Object.create(t.prototype, {
                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                    i(e, t)
                );
            }),
            a(t)
        );
    }
    var c = String.prototype.replace,
        l = /%20/g,
        s = 'RFC3986',
        v = {
            default: s,
            formatters: {
                RFC1738: function (t) {
                    return c.call(t, l, '+');
                },
                RFC3986: function (t) {
                    return String(t);
                },
            },
            RFC1738: 'RFC1738',
            RFC3986: s,
        },
        p = Object.prototype.hasOwnProperty,
        y = Array.isArray,
        d = (function () {
            for (var t = [], r = 0; r < 256; ++r) t.push('%' + ((r < 16 ? '0' : '') + r.toString(16)).toUpperCase());
            return t;
        })(),
        b = function (t, r) {
            for (var e = r && r.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n)
                void 0 !== t[n] && (e[n] = t[n]);
            return e;
        },
        h = {
            arrayToObject: b,
            assign: function (t, r) {
                return Object.keys(r).reduce(function (t, e) {
                    return (t[e] = r[e]), t;
                }, t);
            },
            combine: function (t, r) {
                return [].concat(t, r);
            },
            compact: function (t) {
                for (var r = [{ obj: { o: t }, prop: 'o' }], e = [], n = 0; n < r.length; ++n)
                    for (var o = r[n], i = o.obj[o.prop], u = Object.keys(i), f = 0; f < u.length; ++f) {
                        var a = u[f],
                            c = i[a];
                        'object' == typeof c &&
                            null !== c &&
                            -1 === e.indexOf(c) &&
                            (r.push({ obj: i, prop: a }), e.push(c));
                    }
                return (
                    (function (t) {
                        for (; t.length > 1; ) {
                            var r = t.pop(),
                                e = r.obj[r.prop];
                            if (y(e)) {
                                for (var n = [], o = 0; o < e.length; ++o) void 0 !== e[o] && n.push(e[o]);
                                r.obj[r.prop] = n;
                            }
                        }
                    })(r),
                    t
                );
            },
            decode: function (t, r, e) {
                var n = t.replace(/\+/g, ' ');
                if ('iso-8859-1' === e) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(n);
                } catch (t) {
                    return n;
                }
            },
            encode: function (t, r, e, n, o) {
                if (0 === t.length) return t;
                var i = t;
                if (
                    ('symbol' == typeof t
                        ? (i = Symbol.prototype.toString.call(t))
                        : 'string' != typeof t && (i = String(t)),
                    'iso-8859-1' === e)
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
                    (o === v.RFC1738 && (40 === a || 41 === a))
                        ? (u += i.charAt(f))
                        : a < 128
                        ? (u += d[a])
                        : a < 2048
                        ? (u += d[192 | (a >> 6)] + d[128 | (63 & a)])
                        : a < 55296 || a >= 57344
                        ? (u += d[224 | (a >> 12)] + d[128 | ((a >> 6) & 63)] + d[128 | (63 & a)])
                        : ((a = 65536 + (((1023 & a) << 10) | (1023 & i.charCodeAt((f += 1))))),
                          (u +=
                              d[240 | (a >> 18)] +
                              d[128 | ((a >> 12) & 63)] +
                              d[128 | ((a >> 6) & 63)] +
                              d[128 | (63 & a)]));
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
                if (y(t)) {
                    for (var e = [], n = 0; n < t.length; n += 1) e.push(r(t[n]));
                    return e;
                }
                return r(t);
            },
            merge: function t(r, e, n) {
                if (!e) return r;
                if ('object' != typeof e) {
                    if (y(r)) r.push(e);
                    else {
                        if (!r || 'object' != typeof r) return [r, e];
                        ((n && (n.plainObjects || n.allowPrototypes)) || !p.call(Object.prototype, e)) && (r[e] = !0);
                    }
                    return r;
                }
                if (!r || 'object' != typeof r) return [r].concat(e);
                var o = r;
                return (
                    y(r) && !y(e) && (o = b(r, n)),
                    y(r) && y(e)
                        ? (e.forEach(function (e, o) {
                              if (p.call(r, o)) {
                                  var i = r[o];
                                  i && 'object' == typeof i && e && 'object' == typeof e
                                      ? (r[o] = t(i, e, n))
                                      : r.push(e);
                              } else r[o] = e;
                          }),
                          r)
                        : Object.keys(e).reduce(function (r, o) {
                              var i = e[o];
                              return (r[o] = p.call(r, o) ? t(r[o], i, n) : i), r;
                          }, o)
                );
            },
        },
        m = Object.prototype.hasOwnProperty,
        g = {
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
        j = Array.isArray,
        w = String.prototype.split,
        O = Array.prototype.push,
        E = function (t, r) {
            O.apply(t, j(r) ? r : [r]);
        },
        R = Date.prototype.toISOString,
        S = v.default,
        x = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: 'utf-8',
            charsetSentinel: !1,
            delimiter: '&',
            encode: !0,
            encoder: h.encode,
            encodeValuesOnly: !1,
            format: S,
            formatter: v.formatters[S],
            indices: !1,
            serializeDate: function (t) {
                return R.call(t);
            },
            skipNulls: !1,
            strictNullHandling: !1,
        },
        T = function t(r, e, n, o, i, u, f, a, c, l, s, v, p, y) {
            var d,
                b = r;
            if (
                ('function' == typeof f
                    ? (b = f(e, b))
                    : b instanceof Date
                    ? (b = l(b))
                    : 'comma' === n &&
                      j(b) &&
                      (b = h.maybeMap(b, function (t) {
                          return t instanceof Date ? l(t) : t;
                      })),
                null === b)
            ) {
                if (o) return u && !p ? u(e, x.encoder, y, 'key', s) : e;
                b = '';
            }
            if (
                'string' == typeof (d = b) ||
                'number' == typeof d ||
                'boolean' == typeof d ||
                'symbol' == typeof d ||
                'bigint' == typeof d ||
                h.isBuffer(b)
            ) {
                if (u) {
                    var m = p ? e : u(e, x.encoder, y, 'key', s);
                    if ('comma' === n && p) {
                        for (var g = w.call(String(b), ','), O = '', R = 0; R < g.length; ++R)
                            O += (0 === R ? '' : ',') + v(u(g[R], x.encoder, y, 'value', s));
                        return [v(m) + '=' + O];
                    }
                    return [v(m) + '=' + v(u(b, x.encoder, y, 'value', s))];
                }
                return [v(e) + '=' + v(String(b))];
            }
            var S,
                T = [];
            if (void 0 === b) return T;
            if ('comma' === n && j(b)) S = [{ value: b.length > 0 ? b.join(',') || null : void 0 }];
            else if (j(f)) S = f;
            else {
                var k = Object.keys(b);
                S = a ? k.sort(a) : k;
            }
            for (var C = 0; C < S.length; ++C) {
                var N = S[C],
                    D = 'object' == typeof N && void 0 !== N.value ? N.value : b[N];
                if (!i || null !== D) {
                    var F = j(b) ? ('function' == typeof n ? n(e, N) : e) : e + (c ? '.' + N : '[' + N + ']');
                    E(T, t(D, F, n, o, i, u, f, a, c, l, s, v, p, y));
                }
            }
            return T;
        },
        k = Object.prototype.hasOwnProperty,
        C = Array.isArray,
        N = {
            allowDots: !1,
            allowPrototypes: !1,
            arrayLimit: 20,
            charset: 'utf-8',
            charsetSentinel: !1,
            comma: !1,
            decoder: h.decode,
            delimiter: '&',
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
        },
        D = function (t) {
            return t.replace(/&#(\d+);/g, function (t, r) {
                return String.fromCharCode(parseInt(r, 10));
            });
        },
        F = function (t, r) {
            return t && 'string' == typeof t && r.comma && t.indexOf(',') > -1 ? t.split(',') : t;
        },
        I = function (t, r, e, n) {
            if (t) {
                var o = e.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
                    i = /(\[[^[\]]*])/g,
                    u = e.depth > 0 && /(\[[^[\]]*])/.exec(o),
                    f = u ? o.slice(0, u.index) : o,
                    a = [];
                if (f) {
                    if (!e.plainObjects && k.call(Object.prototype, f) && !e.allowPrototypes) return;
                    a.push(f);
                }
                for (var c = 0; e.depth > 0 && null !== (u = i.exec(o)) && c < e.depth; ) {
                    if (
                        ((c += 1), !e.plainObjects && k.call(Object.prototype, u[1].slice(1, -1)) && !e.allowPrototypes)
                    )
                        return;
                    a.push(u[1]);
                }
                return (
                    u && a.push('[' + o.slice(u.index) + ']'),
                    (function (t, r, e, n) {
                        for (var o = n ? r : F(r, e), i = t.length - 1; i >= 0; --i) {
                            var u,
                                f = t[i];
                            if ('[]' === f && e.parseArrays) u = [].concat(o);
                            else {
                                u = e.plainObjects ? Object.create(null) : {};
                                var a = '[' === f.charAt(0) && ']' === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                                    c = parseInt(a, 10);
                                e.parseArrays || '' !== a
                                    ? !isNaN(c) &&
                                      f !== a &&
                                      String(c) === a &&
                                      c >= 0 &&
                                      e.parseArrays &&
                                      c <= e.arrayLimit
                                        ? ((u = [])[c] = o)
                                        : '__proto__' !== a && (u[a] = o)
                                    : (u = { 0: o });
                            }
                            o = u;
                        }
                        return o;
                    })(a, r, e, n)
                );
            }
        },
        P = function (t, r) {
            var e = (function (t) {
                if (!t) return N;
                if (null != t.decoder && 'function' != typeof t.decoder)
                    throw new TypeError('Decoder has to be a function.');
                if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
                return {
                    allowDots: void 0 === t.allowDots ? N.allowDots : !!t.allowDots,
                    allowPrototypes: 'boolean' == typeof t.allowPrototypes ? t.allowPrototypes : N.allowPrototypes,
                    arrayLimit: 'number' == typeof t.arrayLimit ? t.arrayLimit : N.arrayLimit,
                    charset: void 0 === t.charset ? N.charset : t.charset,
                    charsetSentinel: 'boolean' == typeof t.charsetSentinel ? t.charsetSentinel : N.charsetSentinel,
                    comma: 'boolean' == typeof t.comma ? t.comma : N.comma,
                    decoder: 'function' == typeof t.decoder ? t.decoder : N.decoder,
                    delimiter: 'string' == typeof t.delimiter || h.isRegExp(t.delimiter) ? t.delimiter : N.delimiter,
                    depth: 'number' == typeof t.depth || !1 === t.depth ? +t.depth : N.depth,
                    ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                    interpretNumericEntities:
                        'boolean' == typeof t.interpretNumericEntities
                            ? t.interpretNumericEntities
                            : N.interpretNumericEntities,
                    parameterLimit: 'number' == typeof t.parameterLimit ? t.parameterLimit : N.parameterLimit,
                    parseArrays: !1 !== t.parseArrays,
                    plainObjects: 'boolean' == typeof t.plainObjects ? t.plainObjects : N.plainObjects,
                    strictNullHandling:
                        'boolean' == typeof t.strictNullHandling ? t.strictNullHandling : N.strictNullHandling,
                };
            })(r);
            if ('' === t || null == t) return e.plainObjects ? Object.create(null) : {};
            for (
                var n =
                        'string' == typeof t
                            ? (function (t, r) {
                                  var e,
                                      n = {},
                                      o = (r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t).split(
                                          r.delimiter,
                                          Infinity === r.parameterLimit ? void 0 : r.parameterLimit
                                      ),
                                      i = -1,
                                      u = r.charset;
                                  if (r.charsetSentinel)
                                      for (e = 0; e < o.length; ++e)
                                          0 === o[e].indexOf('utf8=') &&
                                              ('utf8=%E2%9C%93' === o[e]
                                                  ? (u = 'utf-8')
                                                  : 'utf8=%26%2310003%3B' === o[e] && (u = 'iso-8859-1'),
                                              (i = e),
                                              (e = o.length));
                                  for (e = 0; e < o.length; ++e)
                                      if (e !== i) {
                                          var f,
                                              a,
                                              c = o[e],
                                              l = c.indexOf(']='),
                                              s = -1 === l ? c.indexOf('=') : l + 1;
                                          -1 === s
                                              ? ((f = r.decoder(c, N.decoder, u, 'key')),
                                                (a = r.strictNullHandling ? null : ''))
                                              : ((f = r.decoder(c.slice(0, s), N.decoder, u, 'key')),
                                                (a = h.maybeMap(F(c.slice(s + 1), r), function (t) {
                                                    return r.decoder(t, N.decoder, u, 'value');
                                                }))),
                                              a && r.interpretNumericEntities && 'iso-8859-1' === u && (a = D(a)),
                                              c.indexOf('[]=') > -1 && (a = C(a) ? [a] : a),
                                              (n[f] = k.call(n, f) ? h.combine(n[f], a) : a);
                                      }
                                  return n;
                              })(t, e)
                            : t,
                    o = e.plainObjects ? Object.create(null) : {},
                    i = Object.keys(n),
                    u = 0;
                u < i.length;
                ++u
            ) {
                var f = i[u],
                    a = I(f, n[f], e, 'string' == typeof t);
                o = h.merge(o, a, e);
            }
            return h.compact(o);
        },
        $ = /*#__PURE__*/ (function () {
            function t(t, r, e) {
                var n, o;
                (this.name = t),
                    (this.definition = r),
                    (this.bindings = null != (n = r.bindings) ? n : {}),
                    (this.wheres = null != (o = r.wheres) ? o : {}),
                    (this.config = e);
            }
            var r = t.prototype;
            return (
                (r.matchesUrl = function (t) {
                    var r = this;
                    if (!this.definition.methods.includes('GET')) return !1;
                    var e = this.template
                            .replace(/(\/?){([^}?]*)(\??)}/g, function (t, e, n, o) {
                                var i,
                                    u =
                                        '(?<' +
                                        n +
                                        '>' +
                                        ((null == (i = r.wheres[n]) ? void 0 : i.replace(/(^\^)|(\$$)/g, '')) ||
                                            '[^/?]+') +
                                        ')';
                                return o ? '(' + e + u + ')?' : '' + e + u;
                            })
                            .replace(/^\w+:\/\//, ''),
                        n = t.replace(/^\w+:\/\//, '').split('?'),
                        o = n[0],
                        i = n[1],
                        u = new RegExp('^' + e + '/?$').exec(o);
                    if (u) {
                        for (var f in u.groups)
                            u.groups[f] =
                                'string' == typeof u.groups[f] ? decodeURIComponent(u.groups[f]) : u.groups[f];
                        return { params: u.groups, query: P(i) };
                    }
                    return !1;
                }),
                (r.compile = function (t) {
                    var r = this,
                        e = this.parameterSegments;
                    return e.length
                        ? this.template
                              .replace(/{([^}?]+)(\??)}/g, function (n, o, i) {
                                  var u, f, a;
                                  if (!i && [null, void 0].includes(t[o]))
                                      throw new Error(
                                          "Ziggy error: '" + o + "' parameter is required for route '" + r.name + "'."
                                      );
                                  if (e[e.length - 1].name === o && '.*' === r.wheres[o])
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
                e(t, [
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
        A = /*#__PURE__*/ (function (t) {
            var r, o;
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
                    (u.i = new $(r, u.t.routes[r], u.t)), (u.u = u.l(e));
                }
                return u;
            }
            (o = t), ((r = u).prototype = Object.create(o.prototype)), (r.prototype.constructor = r), i(r, o);
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
                            var e,
                                n = t,
                                o = (function (t) {
                                    if (!t) return x;
                                    if (null != t.encoder && 'function' != typeof t.encoder)
                                        throw new TypeError('Encoder has to be a function.');
                                    var r = t.charset || x.charset;
                                    if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                                        throw new TypeError(
                                            'The charset option must be either utf-8, iso-8859-1, or undefined'
                                        );
                                    var e = v.default;
                                    if (void 0 !== t.format) {
                                        if (!m.call(v.formatters, t.format))
                                            throw new TypeError('Unknown format option provided.');
                                        e = t.format;
                                    }
                                    var n = v.formatters[e],
                                        o = x.filter;
                                    return (
                                        ('function' == typeof t.filter || j(t.filter)) && (o = t.filter),
                                        {
                                            addQueryPrefix:
                                                'boolean' == typeof t.addQueryPrefix
                                                    ? t.addQueryPrefix
                                                    : x.addQueryPrefix,
                                            allowDots: void 0 === t.allowDots ? x.allowDots : !!t.allowDots,
                                            charset: r,
                                            charsetSentinel:
                                                'boolean' == typeof t.charsetSentinel
                                                    ? t.charsetSentinel
                                                    : x.charsetSentinel,
                                            delimiter: void 0 === t.delimiter ? x.delimiter : t.delimiter,
                                            encode: 'boolean' == typeof t.encode ? t.encode : x.encode,
                                            encoder: 'function' == typeof t.encoder ? t.encoder : x.encoder,
                                            encodeValuesOnly:
                                                'boolean' == typeof t.encodeValuesOnly
                                                    ? t.encodeValuesOnly
                                                    : x.encodeValuesOnly,
                                            filter: o,
                                            format: e,
                                            formatter: n,
                                            serializeDate:
                                                'function' == typeof t.serializeDate
                                                    ? t.serializeDate
                                                    : x.serializeDate,
                                            skipNulls: 'boolean' == typeof t.skipNulls ? t.skipNulls : x.skipNulls,
                                            sort: 'function' == typeof t.sort ? t.sort : null,
                                            strictNullHandling:
                                                'boolean' == typeof t.strictNullHandling
                                                    ? t.strictNullHandling
                                                    : x.strictNullHandling,
                                        }
                                    );
                                })(r);
                            'function' == typeof o.filter ? (n = (0, o.filter)('', n)) : j(o.filter) && (e = o.filter);
                            var i = [];
                            if ('object' != typeof n || null === n) return '';
                            var u =
                                g[
                                    r && r.arrayFormat in g
                                        ? r.arrayFormat
                                        : r && 'indices' in r
                                        ? r.indices
                                            ? 'indices'
                                            : 'repeat'
                                        : 'indices'
                                ];
                            e || (e = Object.keys(n)), o.sort && e.sort(o.sort);
                            for (var f = 0; f < e.length; ++f) {
                                var a = e[f];
                                (o.skipNulls && null === n[a]) ||
                                    E(
                                        i,
                                        T(
                                            n[a],
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
                                l = !0 === o.addQueryPrefix ? '?' : '';
                            return (
                                o.charsetSentinel &&
                                    (l += 'iso-8859-1' === o.charset ? 'utf8=%26%2310003%3B&' : 'utf8=%E2%9C%93&'),
                                c.length > 0 ? l + c : ''
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
                            return (e = new $(n[0], n[1], r.t).matchesUrl(t));
                        }) || [void 0, void 0];
                    return n({ name: o[0] }, e, { route: o[1] });
                }),
                (f.h = function () {
                    var t = this.p(),
                        r = t.pathname,
                        e = t.search;
                    return (
                        (this.t.absolute
                            ? t.host + r
                            : r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ''), '').replace(/^\/+/, '/')) + e
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
                    var c = new $(o, f, this.t);
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
                        e,
                        n,
                        o,
                        i,
                        u = 'undefined' != typeof window ? window.location : {},
                        f = u.host,
                        a = u.pathname,
                        c = u.search;
                    return {
                        host: null != (t = null == (r = this.t.location) ? void 0 : r.host) ? t : void 0 === f ? '' : f,
                        pathname:
                            null != (e = null == (n = this.t.location) ? void 0 : n.pathname)
                                ? e
                                : void 0 === a
                                ? ''
                                : a,
                        search:
                            null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === c ? '' : c,
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
                                o[e]
                                    ? (((i = {})[o[e].name] = r), i)
                                    : 'object' == typeof r
                                    ? r
                                    : (((u = {})[r] = ''), u)
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
                e(u, [
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
        })(/*#__PURE__*/ a(String));
    t.ZiggyVue = {
        install: function (t, r) {
            var e = function (t, e, n, o) {
                return (
                    void 0 === o && (o = r),
                    (function (t, r, e, n) {
                        var o = new A(t, r, e, n);
                        return t ? o.toString() : o;
                    })(t, e, n, o)
                );
            };
            t.mixin({ methods: { route: e } }), parseInt(t.version) > 2 && t.provide('route', e);
        },
    };
});
