function t() {
    return (
        (t = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var r = arguments[e];
                      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                  }
                  return t;
              }),
        t.apply(this, arguments)
    );
}
var e = String.prototype.replace,
    r = /%20/g,
    n = {
        default: 'RFC3986',
        formatters: {
            RFC1738: function (t) {
                return e.call(t, r, '+');
            },
            RFC3986: function (t) {
                return String(t);
            },
        },
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986',
    },
    o = Object.prototype.hasOwnProperty,
    i = Array.isArray,
    u = (function () {
        for (var t = [], e = 0; e < 256; ++e) t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
        return t;
    })(),
    a = function (t, e) {
        for (var r = e && e.plainObjects ? Object.create(null) : {}, n = 0; n < t.length; ++n)
            void 0 !== t[n] && (r[n] = t[n]);
        return r;
    },
    s = {
        arrayToObject: a,
        assign: function (t, e) {
            return Object.keys(e).reduce(function (t, r) {
                return (t[r] = e[r]), t;
            }, t);
        },
        combine: function (t, e) {
            return [].concat(t, e);
        },
        compact: function (t) {
            for (var e = [{ obj: { o: t }, prop: 'o' }], r = [], n = 0; n < e.length; ++n)
                for (var o = e[n], u = o.obj[o.prop], a = Object.keys(u), s = 0; s < a.length; ++s) {
                    var f = a[s],
                        c = u[f];
                    'object' == typeof c &&
                        null !== c &&
                        -1 === r.indexOf(c) &&
                        (e.push({ obj: u, prop: f }), r.push(c));
                }
            return (
                (function (t) {
                    for (; t.length > 1; ) {
                        var e = t.pop(),
                            r = e.obj[e.prop];
                        if (i(r)) {
                            for (var n = [], o = 0; o < r.length; ++o) void 0 !== r[o] && n.push(r[o]);
                            e.obj[e.prop] = n;
                        }
                    }
                })(e),
                t
            );
        },
        decode: function (t, e, r) {
            var n = t.replace(/\+/g, ' ');
            if ('iso-8859-1' === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(n);
            } catch (t) {
                return n;
            }
        },
        encode: function (t, e, r, o, i) {
            if (0 === t.length) return t;
            var a = t;
            if (
                ('symbol' == typeof t
                    ? (a = Symbol.prototype.toString.call(t))
                    : 'string' != typeof t && (a = String(t)),
                'iso-8859-1' === r)
            )
                return escape(a).replace(/%u[0-9a-f]{4}/gi, function (t) {
                    return '%26%23' + parseInt(t.slice(2), 16) + '%3B';
                });
            for (var s = '', f = 0; f < a.length; ++f) {
                var c = a.charCodeAt(f);
                45 === c ||
                46 === c ||
                95 === c ||
                126 === c ||
                (c >= 48 && c <= 57) ||
                (c >= 65 && c <= 90) ||
                (c >= 97 && c <= 122) ||
                (i === n.RFC1738 && (40 === c || 41 === c))
                    ? (s += a.charAt(f))
                    : c < 128
                    ? (s += u[c])
                    : c < 2048
                    ? (s += u[192 | (c >> 6)] + u[128 | (63 & c)])
                    : c < 55296 || c >= 57344
                    ? (s += u[224 | (c >> 12)] + u[128 | ((c >> 6) & 63)] + u[128 | (63 & c)])
                    : ((c = 65536 + (((1023 & c) << 10) | (1023 & a.charCodeAt((f += 1))))),
                      (s +=
                          u[240 | (c >> 18)] +
                          u[128 | ((c >> 12) & 63)] +
                          u[128 | ((c >> 6) & 63)] +
                          u[128 | (63 & c)]));
            }
            return s;
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
        maybeMap: function (t, e) {
            if (i(t)) {
                for (var r = [], n = 0; n < t.length; n += 1) r.push(e(t[n]));
                return r;
            }
            return e(t);
        },
        merge: function t(e, r, n) {
            if (!r) return e;
            if ('object' != typeof r) {
                if (i(e)) e.push(r);
                else {
                    if (!e || 'object' != typeof e) return [e, r];
                    ((n && (n.plainObjects || n.allowPrototypes)) || !o.call(Object.prototype, r)) && (e[r] = !0);
                }
                return e;
            }
            if (!e || 'object' != typeof e) return [e].concat(r);
            var u = e;
            return (
                i(e) && !i(r) && (u = a(e, n)),
                i(e) && i(r)
                    ? (r.forEach(function (r, i) {
                          if (o.call(e, i)) {
                              var u = e[i];
                              u && 'object' == typeof u && r && 'object' == typeof r ? (e[i] = t(u, r, n)) : e.push(r);
                          } else e[i] = r;
                      }),
                      e)
                    : Object.keys(r).reduce(function (e, i) {
                          var u = r[i];
                          return (e[i] = o.call(e, i) ? t(e[i], u, n) : u), e;
                      }, u)
            );
        },
    },
    f = Object.prototype.hasOwnProperty,
    c = {
        brackets: function (t) {
            return t + '[]';
        },
        comma: 'comma',
        indices: function (t, e) {
            return t + '[' + e + ']';
        },
        repeat: function (t) {
            return t;
        },
    },
    l = Array.isArray,
    p = String.prototype.split,
    h = Array.prototype.push,
    y = function (t, e) {
        h.apply(t, l(e) ? e : [e]);
    },
    d = Date.prototype.toISOString,
    b = n.default,
    v = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: s.encode,
        encodeValuesOnly: !1,
        format: b,
        formatter: n.formatters[b],
        indices: !1,
        serializeDate: function (t) {
            return d.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
    },
    m = function t(e, r, n, o, i, u, a, f, c, h, d, b, m, g) {
        var j,
            w = e;
        if (
            ('function' == typeof a
                ? (w = a(r, w))
                : w instanceof Date
                ? (w = h(w))
                : 'comma' === n &&
                  l(w) &&
                  (w = s.maybeMap(w, function (t) {
                      return t instanceof Date ? h(t) : t;
                  })),
            null === w)
        ) {
            if (o) return u && !m ? u(r, v.encoder, g, 'key', d) : r;
            w = '';
        }
        if (
            'string' == typeof (j = w) ||
            'number' == typeof j ||
            'boolean' == typeof j ||
            'symbol' == typeof j ||
            'bigint' == typeof j ||
            s.isBuffer(w)
        ) {
            if (u) {
                var O = m ? r : u(r, v.encoder, g, 'key', d);
                if ('comma' === n && m) {
                    for (var $ = p.call(String(w), ','), E = '', S = 0; S < $.length; ++S)
                        E += (0 === S ? '' : ',') + b(u($[S], v.encoder, g, 'value', d));
                    return [b(O) + '=' + E];
                }
                return [b(O) + '=' + b(u(w, v.encoder, g, 'value', d))];
            }
            return [b(r) + '=' + b(String(w))];
        }
        var R,
            C = [];
        if (void 0 === w) return C;
        if ('comma' === n && l(w)) R = [{ value: w.length > 0 ? w.join(',') || null : void 0 }];
        else if (l(a)) R = a;
        else {
            var x = Object.keys(w);
            R = f ? x.sort(f) : x;
        }
        for (var N = 0; N < R.length; ++N) {
            var k = R[N],
                T = 'object' == typeof k && void 0 !== k.value ? k.value : w[k];
            if (!i || null !== T) {
                var _ = l(w) ? ('function' == typeof n ? n(r, k) : r) : r + (c ? '.' + k : '[' + k + ']');
                y(C, t(T, _, n, o, i, u, a, f, c, h, d, b, m, g));
            }
        }
        return C;
    },
    g = Object.prototype.hasOwnProperty,
    j = Array.isArray,
    w = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: s.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
    },
    O = function (t) {
        return t.replace(/&#(\d+);/g, function (t, e) {
            return String.fromCharCode(parseInt(e, 10));
        });
    },
    $ = function (t, e) {
        return t && 'string' == typeof t && e.comma && t.indexOf(',') > -1 ? t.split(',') : t;
    },
    E = function (t, e, r, n) {
        if (t) {
            var o = r.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
                i = /(\[[^[\]]*])/g,
                u = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
                a = u ? o.slice(0, u.index) : o,
                s = [];
            if (a) {
                if (!r.plainObjects && g.call(Object.prototype, a) && !r.allowPrototypes) return;
                s.push(a);
            }
            for (var f = 0; r.depth > 0 && null !== (u = i.exec(o)) && f < r.depth; ) {
                if (((f += 1), !r.plainObjects && g.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes))
                    return;
                s.push(u[1]);
            }
            return (
                u && s.push('[' + o.slice(u.index) + ']'),
                (function (t, e, r, n) {
                    for (var o = n ? e : $(e, r), i = t.length - 1; i >= 0; --i) {
                        var u,
                            a = t[i];
                        if ('[]' === a && r.parseArrays) u = [].concat(o);
                        else {
                            u = r.plainObjects ? Object.create(null) : {};
                            var s = '[' === a.charAt(0) && ']' === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                f = parseInt(s, 10);
                            r.parseArrays || '' !== s
                                ? !isNaN(f) &&
                                  a !== s &&
                                  String(f) === s &&
                                  f >= 0 &&
                                  r.parseArrays &&
                                  f <= r.arrayLimit
                                    ? ((u = [])[f] = o)
                                    : '__proto__' !== s && (u[s] = o)
                                : (u = { 0: o });
                        }
                        o = u;
                    }
                    return o;
                })(s, e, r, n)
            );
        }
    },
    S = function (t, e) {
        var r = (function (t) {
            if (!t) return w;
            if (null != t.decoder && 'function' != typeof t.decoder)
                throw new TypeError('Decoder has to be a function.');
            if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
            return {
                allowDots: void 0 === t.allowDots ? w.allowDots : !!t.allowDots,
                allowPrototypes: 'boolean' == typeof t.allowPrototypes ? t.allowPrototypes : w.allowPrototypes,
                arrayLimit: 'number' == typeof t.arrayLimit ? t.arrayLimit : w.arrayLimit,
                charset: void 0 === t.charset ? w.charset : t.charset,
                charsetSentinel: 'boolean' == typeof t.charsetSentinel ? t.charsetSentinel : w.charsetSentinel,
                comma: 'boolean' == typeof t.comma ? t.comma : w.comma,
                decoder: 'function' == typeof t.decoder ? t.decoder : w.decoder,
                delimiter: 'string' == typeof t.delimiter || s.isRegExp(t.delimiter) ? t.delimiter : w.delimiter,
                depth: 'number' == typeof t.depth || !1 === t.depth ? +t.depth : w.depth,
                ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
                interpretNumericEntities:
                    'boolean' == typeof t.interpretNumericEntities
                        ? t.interpretNumericEntities
                        : w.interpretNumericEntities,
                parameterLimit: 'number' == typeof t.parameterLimit ? t.parameterLimit : w.parameterLimit,
                parseArrays: !1 !== t.parseArrays,
                plainObjects: 'boolean' == typeof t.plainObjects ? t.plainObjects : w.plainObjects,
                strictNullHandling:
                    'boolean' == typeof t.strictNullHandling ? t.strictNullHandling : w.strictNullHandling,
            };
        })(e);
        if ('' === t || null == t) return r.plainObjects ? Object.create(null) : {};
        for (
            var n =
                    'string' == typeof t
                        ? (function (t, e) {
                              var r,
                                  n = {},
                                  o = (e.ignoreQueryPrefix ? t.replace(/^\?/, '') : t).split(
                                      e.delimiter,
                                      Infinity === e.parameterLimit ? void 0 : e.parameterLimit
                                  ),
                                  i = -1,
                                  u = e.charset;
                              if (e.charsetSentinel)
                                  for (r = 0; r < o.length; ++r)
                                      0 === o[r].indexOf('utf8=') &&
                                          ('utf8=%E2%9C%93' === o[r]
                                              ? (u = 'utf-8')
                                              : 'utf8=%26%2310003%3B' === o[r] && (u = 'iso-8859-1'),
                                          (i = r),
                                          (r = o.length));
                              for (r = 0; r < o.length; ++r)
                                  if (r !== i) {
                                      var a,
                                          f,
                                          c = o[r],
                                          l = c.indexOf(']='),
                                          p = -1 === l ? c.indexOf('=') : l + 1;
                                      -1 === p
                                          ? ((a = e.decoder(c, w.decoder, u, 'key')),
                                            (f = e.strictNullHandling ? null : ''))
                                          : ((a = e.decoder(c.slice(0, p), w.decoder, u, 'key')),
                                            (f = s.maybeMap($(c.slice(p + 1), e), function (t) {
                                                return e.decoder(t, w.decoder, u, 'value');
                                            }))),
                                          f && e.interpretNumericEntities && 'iso-8859-1' === u && (f = O(f)),
                                          c.indexOf('[]=') > -1 && (f = j(f) ? [f] : f),
                                          (n[a] = g.call(n, a) ? s.combine(n[a], f) : f);
                                  }
                              return n;
                          })(t, r)
                        : t,
                o = r.plainObjects ? Object.create(null) : {},
                i = Object.keys(n),
                u = 0;
            u < i.length;
            ++u
        ) {
            var a = i[u],
                f = E(a, n[a], r, 'string' == typeof t);
            o = s.merge(o, f, r);
        }
        return s.compact(o);
    };
class R {
    constructor(t, e, r) {
        var n, o;
        (this.name = t),
            (this.definition = e),
            (this.bindings = null != (n = e.bindings) ? n : {}),
            (this.wheres = null != (o = e.wheres) ? o : {}),
            (this.config = r);
    }
    get template() {
        return `${this.origin}/${this.definition.uri}`.replace(/\/+$/, '');
    }
    get origin() {
        return this.config.absolute
            ? this.definition.domain
                ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${
                      this.config.port ? `:${this.config.port}` : ''
                  }`
                : this.config.url
            : '';
    }
    get parameterSegments() {
        var t, e;
        return null !=
            (t =
                null == (e = this.template.match(/{[^}?]+\??}/g))
                    ? void 0
                    : e.map((t) => ({ name: t.replace(/{|\??}/g, ''), required: !/\?}$/.test(t) })))
            ? t
            : [];
    }
    matchesUrl(t) {
        if (!this.definition.methods.includes('GET')) return !1;
        const e = this.template
                .replace(/(\/?){([^}?]*)(\??)}/g, (t, e, r, n) => {
                    var o;
                    const i = `(?<${r}>${
                        (null == (o = this.wheres[r]) ? void 0 : o.replace(/(^\^)|(\$$)/g, '')) || '[^/?]+'
                    })`;
                    return n ? `(${e}${i})?` : `${e}${i}`;
                })
                .replace(/^\w+:\/\//, ''),
            [r, n] = t.replace(/^\w+:\/\//, '').split('?'),
            o = new RegExp(`^${e}/?$`).exec(r);
        if (o) {
            for (const t in o.groups)
                o.groups[t] = 'string' == typeof o.groups[t] ? decodeURIComponent(o.groups[t]) : o.groups[t];
            return { params: o.groups, query: S(n) };
        }
        return !1;
    }
    compile(t) {
        const e = this.parameterSegments;
        return e.length
            ? this.template
                  .replace(/{([^}?]+)(\??)}/g, (r, n, o) => {
                      var i, u, a;
                      if (!o && [null, void 0].includes(t[n]))
                          throw new Error(`Ziggy error: '${n}' parameter is required for route '${this.name}'.`);
                      if (e[e.length - 1].name === n && '.*' === this.wheres[n])
                          return encodeURIComponent(null != (a = t[n]) ? a : '').replace(/%2F/g, '/');
                      if (
                          this.wheres[n] &&
                          !new RegExp(`^${o ? `(${this.wheres[n]})?` : this.wheres[n]}$`).test(
                              null != (i = t[n]) ? i : ''
                          )
                      )
                          throw new Error(
                              `Ziggy error: '${n}' parameter does not match required format '${this.wheres[n]}' for route '${this.name}'.`
                          );
                      return encodeURIComponent(null != (u = t[n]) ? u : '');
                  })
                  .replace(`${this.origin}//`, `${this.origin}/`)
                  .replace(/\/+$/, '')
            : this.template;
    }
}
class C extends String {
    constructor(e, r, n = !0, o) {
        if (
            (super(),
            (this.t =
                null != o ? o : 'undefined' != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy),
            (this.t = t({}, this.t, { absolute: n })),
            e)
        ) {
            if (!this.t.routes[e]) throw new Error(`Ziggy error: route '${e}' is not in the route list.`);
            (this.i = new R(e, this.t.routes[e], this.t)), (this.u = this.l(r));
        }
    }
    toString() {
        const e = Object.keys(this.u)
            .filter((t) => !this.i.parameterSegments.some(({ name: e }) => e === t))
            .filter((t) => '_query' !== t)
            .reduce((e, r) => t({}, e, { [r]: this.u[r] }), {});
        return (
            this.i.compile(this.u) +
            (function (t, e) {
                var r,
                    o = t,
                    i = (function (t) {
                        if (!t) return v;
                        if (null != t.encoder && 'function' != typeof t.encoder)
                            throw new TypeError('Encoder has to be a function.');
                        var e = t.charset || v.charset;
                        if (void 0 !== t.charset && 'utf-8' !== t.charset && 'iso-8859-1' !== t.charset)
                            throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
                        var r = n.default;
                        if (void 0 !== t.format) {
                            if (!f.call(n.formatters, t.format)) throw new TypeError('Unknown format option provided.');
                            r = t.format;
                        }
                        var o = n.formatters[r],
                            i = v.filter;
                        return (
                            ('function' == typeof t.filter || l(t.filter)) && (i = t.filter),
                            {
                                addQueryPrefix:
                                    'boolean' == typeof t.addQueryPrefix ? t.addQueryPrefix : v.addQueryPrefix,
                                allowDots: void 0 === t.allowDots ? v.allowDots : !!t.allowDots,
                                charset: e,
                                charsetSentinel:
                                    'boolean' == typeof t.charsetSentinel ? t.charsetSentinel : v.charsetSentinel,
                                delimiter: void 0 === t.delimiter ? v.delimiter : t.delimiter,
                                encode: 'boolean' == typeof t.encode ? t.encode : v.encode,
                                encoder: 'function' == typeof t.encoder ? t.encoder : v.encoder,
                                encodeValuesOnly:
                                    'boolean' == typeof t.encodeValuesOnly ? t.encodeValuesOnly : v.encodeValuesOnly,
                                filter: i,
                                format: r,
                                formatter: o,
                                serializeDate: 'function' == typeof t.serializeDate ? t.serializeDate : v.serializeDate,
                                skipNulls: 'boolean' == typeof t.skipNulls ? t.skipNulls : v.skipNulls,
                                sort: 'function' == typeof t.sort ? t.sort : null,
                                strictNullHandling:
                                    'boolean' == typeof t.strictNullHandling
                                        ? t.strictNullHandling
                                        : v.strictNullHandling,
                            }
                        );
                    })(e);
                'function' == typeof i.filter ? (o = (0, i.filter)('', o)) : l(i.filter) && (r = i.filter);
                var u = [];
                if ('object' != typeof o || null === o) return '';
                var a =
                    c[
                        e && e.arrayFormat in c
                            ? e.arrayFormat
                            : e && 'indices' in e
                            ? e.indices
                                ? 'indices'
                                : 'repeat'
                            : 'indices'
                    ];
                r || (r = Object.keys(o)), i.sort && r.sort(i.sort);
                for (var s = 0; s < r.length; ++s) {
                    var p = r[s];
                    (i.skipNulls && null === o[p]) ||
                        y(
                            u,
                            m(
                                o[p],
                                p,
                                a,
                                i.strictNullHandling,
                                i.skipNulls,
                                i.encode ? i.encoder : null,
                                i.filter,
                                i.sort,
                                i.allowDots,
                                i.serializeDate,
                                i.format,
                                i.formatter,
                                i.encodeValuesOnly,
                                i.charset
                            )
                        );
                }
                var h = u.join(i.delimiter),
                    d = !0 === i.addQueryPrefix ? '?' : '';
                return (
                    i.charsetSentinel && (d += 'iso-8859-1' === i.charset ? 'utf8=%26%2310003%3B&' : 'utf8=%E2%9C%93&'),
                    h.length > 0 ? d + h : ''
                );
            })(t({}, e, this.u._query), {
                addQueryPrefix: !0,
                arrayFormat: 'indices',
                encodeValuesOnly: !0,
                skipNulls: !0,
                encoder: (t, e) => ('boolean' == typeof t ? Number(t) : e(t)),
            })
        );
    }
    p(e) {
        e ? this.t.absolute && e.startsWith('/') && (e = this.h().host + e) : (e = this.v());
        let r = {};
        const [n, o] = Object.entries(this.t.routes).find(([t, n]) => (r = new R(t, n, this.t).matchesUrl(e))) || [
            void 0,
            void 0,
        ];
        return t({ name: n }, r, { route: o });
    }
    v() {
        const { host: t, pathname: e, search: r } = this.h();
        return (
            (this.t.absolute ? t + e : e.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ''), '').replace(/^\/+/, '/')) + r
        );
    }
    current(e, r) {
        const { name: n, params: o, query: i, route: u } = this.p();
        if (!e) return n;
        const a = new RegExp(`^${e.replace(/\./g, '\\.').replace(/\*/g, '.*')}$`).test(n);
        if ([null, void 0].includes(r) || !a) return a;
        const s = new R(n, u, this.t);
        r = this.l(r, s);
        const f = t({}, o, i);
        return (
            !(!Object.values(r).every((t) => !t) || Object.values(f).some((t) => void 0 !== t)) ||
            Object.entries(r).every(([t, e]) => f[t] == e)
        );
    }
    h() {
        var t, e, r, n, o, i;
        const { host: u = '', pathname: a = '', search: s = '' } = 'undefined' != typeof window ? window.location : {};
        return {
            host: null != (t = null == (e = this.t.location) ? void 0 : e.host) ? t : u,
            pathname: null != (r = null == (n = this.t.location) ? void 0 : n.pathname) ? r : a,
            search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : s,
        };
    }
    get params() {
        const { params: e, query: r } = this.p();
        return t({}, e, r);
    }
    has(t) {
        return Object.keys(this.t.routes).includes(t);
    }
    l(e = {}, r = this.i) {
        null != e || (e = {}), (e = ['string', 'number'].includes(typeof e) ? [e] : e);
        const n = r.parameterSegments.filter(({ name: t }) => !this.t.defaults[t]);
        return (
            Array.isArray(e)
                ? (e = e.reduce(
                      (e, r, o) => t({}, e, n[o] ? { [n[o].name]: r } : 'object' == typeof r ? r : { [r]: '' }),
                      {}
                  ))
                : 1 !== n.length ||
                  e[n[0].name] ||
                  (!e.hasOwnProperty(Object.values(r.bindings)[0]) && !e.hasOwnProperty('id')) ||
                  (e = { [n[0].name]: e }),
            t({}, this.m(r), this.g(e, r))
        );
    }
    m(e) {
        return e.parameterSegments
            .filter(({ name: t }) => this.t.defaults[t])
            .reduce((e, { name: r }, n) => t({}, e, { [r]: this.t.defaults[r] }), {});
    }
    g(e, { bindings: r, parameterSegments: n }) {
        return Object.entries(e).reduce((e, [o, i]) => {
            if (!i || 'object' != typeof i || Array.isArray(i) || !n.some(({ name: t }) => t === o))
                return t({}, e, { [o]: i });
            if (!i.hasOwnProperty(r[o])) {
                if (!i.hasOwnProperty('id'))
                    throw new Error(
                        `Ziggy error: object passed as '${o}' parameter is missing route model binding key '${r[o]}'.`
                    );
                r[o] = 'id';
            }
            return t({}, e, { [o]: i[r[o]] });
        }, {});
    }
    valueOf() {
        return this.toString();
    }
    check(t) {
        return this.has(t);
    }
}
function x(t, e, r, n) {
    const o = new C(t, e, r, n);
    return t ? o.toString() : o;
}
export { x as default };
