$(document).ready(function () {
    var t = $(".background"), e = t.css("background-image"), i = $(".title");
    t.imagesLoaded({background: !0}, function () {
        i.css({"background-image": e}), setTimeout(function () {
            t.fadeOut(200).remove()
        }, 500)
    })
}),/*function(){var t=document.querySelectorAll(".circleRotatorContent ul li");if(t.length)for(var e=0;e<t.length;e++)t[e].style.listStyleType="none"}(),*/
    $(document).ready(function () {
    var t = $(".circleRotator"), e = $(".circleRotator--5-items");
    t.length && t.each(function () {
        function t(t, l, d) {
            e.addClass("animation");
            var u = r.length - 1, h = parseInt($(".circleRotatorPagination-item--active", s).attr("data-num")),
                f = l ? "prev" === d ? h - 1 : h + 1 : parseInt(t.attr("data-num")), f = f > u ? u : f,
                f = f < 0 ? 0 : f, m = f * c, p = "", v = "";
            0 === f ? e.addClass("circleRotator--first") : e.removeClass("circleRotator--first"), f === u ? e.addClass("circleRotator--last") : e.removeClass("circleRotator--last"), r.removeClass("circleRotatorPagination-item--active"), $('.circleRotatorPagination-item[data-num="' + f + '"]', e).addClass("circleRotatorPagination-item--active"), a.each(function (t, e) {
                var i = parseInt($(this).attr("data-num"));
                i === h && (p = $(this)), i === f && (v = $(this))
            }), p.fadeOut(200, function () {
                $(this).removeClass("circleRotatorContent-item--active").css({display: "none"}), v.fadeIn(200, function () {
                    $(this).addClass("circleRotatorContent-item--active")
                })
            }), o.length > 1 && o.removeClass("active").filter("[data-num='" + f + "']").addClass("active"), n.each(function (t, e) {
                var i = parseInt($(this).attr("data-num"));
                i === h && $(this).removeClass("circleRotator-item--active"), i === f && $(this).addClass("circleRotator-item--active")
            }), i.css({
                "-webkit-transform": "rotate(" + m + "deg)",
                "-moz-transform": "rotate(" + m + "deg)",
                "-ms-transform": "rotate(" + m + "deg)",
                "-o-transform": "rotate(" + m + "deg)",
                transform: "rotate(" + m + "deg)"
            }), setTimeout(function () {
                e.removeClass("animation")
            }, 400)
        }

        var e = $(this), i = $(".circleRotator-circle", e), n = $(".circleRotator-item", e),
            a = ($(".circleRotatorContent", e), $(".circleRotatorContent-item", e)),
            o = $(".circleRotator-description", e), s = $(".circleRotatorPagination", e),
            r = $(".circleRotatorPagination-item", e), l = $(".circleRotatorPagination-arrow", e),
            c = e.hasClass("circleRotator--5-items") ? -10.5 : -14;
        r.click(function (i) {
            i.preventDefault(), e.hasClass("animation") || t($(this), !1, !1)
        }), l.click(function (i) {
            i.preventDefault();
            var n = $(this).hasClass("circleRotatorPagination-prev") ? "prev" : "next";
            e.hasClass("animation") || t($(this), !0, n)
        }), n.click(function (i) {
            i.preventDefault(), e.hasClass("animation") || t($(this), !1, !1)
        })
    }), e.length && e.each(function () {
        var t = $(this), e = $(".circleRotatorContent-description p", t);
        e.matchHeight({byRow: !1})
    })
}), $(document).ready(function () {
    var t = $(".content-asset"), e = !1;
    $(window).resize(function (t) {
        e = $("body").width() <= 767
    }).trigger("resize"), t.click(function (t) {
        if (e && !$(this).hasClass("content-asset--zoom--no")) {
            t.preventDefault();
            var i = $(this).find(".content-img").attr("data-src"), n = window.location.host,
                a = "http://" + n + "/" + i;
            window.open(a)
        }
    })
}), $(document).ready(function () {
    var t = $(".iconSlider"),
        e = {autoPlay: !0, items: 6, navigation: !1, pagination: !1, slideSpeed: 800, paginationSpeed: 800};
    t.length && t.each(function () {
        var t = $(".iconSlider-item", $(this)), i = t.length;
        i < e.items && (e.items = i), $(".owl-carousel", $(this)).owlCarousel(e), $(".iconSlider-text", $(this)).length && $(".iconSlider-text", $(this)).matchHeight({byRow: !1}), $(this).hasClass("iconSlider--page-application-integration") && $(".owl-item", $(this)).length && $(".owl-item", $(this)).matchHeight({byRow: !1})
    }), $(window).resize(function (i) {
        t.hasClass("iconSlider--mobile-full") && ($("body").width() < 767 ? t.hasClass("slider--mobile") || (t.addClass("slider--mobile"), $(".owl-carousel", t).data("owlCarousel").destroy()) : t.hasClass("slider--mobile") && (t.removeClass("slider--mobile"), $(".owl-carousel", t).owlCarousel(e)))
    }).trigger("resize")
}), $(document).ready(function () {
    function t() {
        e.each(function () {
            $this = $(this);
            var t = $('.historyNavigation-link[href="#' + $this.attr("id") + '"]').data("number"), e = 500;
            $this.offset().top - e / 2 < $(window).scrollTop() && $this.offset().top + $this.outerHeight() - e / 2 > $(window).scrollTop() ? ($('.historyNavigation-link[data-number="' + t + '"]').addClass("historyNavigation-link--active"), $this.hasClass("history--bgcolor--dark") ? i.hasClass("historyNavigation-list--white") || i.addClass("historyNavigation-list--white") : i.hasClass("historyNavigation-list--white") && i.removeClass("historyNavigation-list--white")) : $('.historyNavigation-link[data-number="' + t + '"]').removeClass("historyNavigation-link--active")
        })
    }

    var e = $(".history"), i = $(".historyNavigation-list");
    $(".historyNavigation-link");
    e.length && $(window).on("scroll", function () {
        t()
    })
}), $(document).ready(function () {
    var t = $(".info--page-frontend-3, .info--page-win-2");
    t.length && t.waypoint(function (e) {
        "down" === e && t.addClass("animated")
    }, {offset: "50%"}), $(".info--appdev-1 h4 + p").matchHeight(), $(".info--ruby-2 .col-sm-5ths").matchHeight(), $(".info--ruby-1 .info-text p").matchHeight(), $(".info--ruby-1 .info-text").matchHeight(), $(".info--support-1 .col-sm-6 .info-text").matchHeight(), $(".info--ios-1 .info-text-element").matchHeight(), $(".info--page-net--2 .info-text").matchHeight(), $(".info--ruby-2 .info-text .col-md-5ths").matchHeight(), $(".info--cloud-1 .info-media, .info--cloud-1 .info-text").matchHeight(), $(".info--wearables-text").matchHeight();
    var e = $(".info--with-clickable-images");
    e.length && $(".info-block--visual img", e).wrap('<div class="content-asset" />').parent().click(function (t) {
        if ($("body").width() <= 767) {
            t.preventDefault();
            var e = $(this).find("img[data-src]").attr("data-src"), i = window.location.host,
                n = "http://" + i + "/" + e;
            window.open(n)
        }
    })
}), $(document).ready(function () {
    var t = $(".infoList-object");
    t.length && (t.addClass("unanimated ready"), t.waypoint(function (e) {
        "down" === e && t.removeClass("unanimated")
    }, {offset: "50%"}))
}), $(document).ready(function () {
    !function (t, e, i) {
        function n(t, e) {
            return typeof t === e
        }

        function a() {
            var t, e, i, a, o, s, r;
            for (var l in v) if (v.hasOwnProperty(l)) {
                if (t = [], e = v[l], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (a = n(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) s = t[o], r = s.split("."), 1 === r.length ? w[r[0]] = a : (!w[r[0]] || w[r[0]] instanceof Boolean || (w[r[0]] = new Boolean(w[r[0]])), w[r[0]][r[1]] = a), b.push((a ? "" : "no-") + r.join("-"))
            }
        }

        function o(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function s(t) {
            return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
                return e + i.toUpperCase()
            }).replace(/^-/, "")
        }

        function r(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }

        function l(t, e, i) {
            var a;
            for (var o in t) if (t[o] in e) return i === !1 ? t[o] : (a = e[t[o]], n(a, "function") ? r(a, i || e) : a);
            return !1
        }

        function c() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : S ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
        }

        function d() {
            var t = e.body;
            return t || (t = c(S ? "svg" : "body"), t.fake = !0), t
        }

        function u(t, i, n, a) {
            var o, s, r, l, u = "modernizr", h = c("div"), f = d();
            if (parseInt(n, 10)) for (; n--;) r = c("div"), r.id = a ? a[n] : u + (n + 1), h.appendChild(r);
            return o = c("style"), o.type = "text/css", o.id = "s" + u, (f.fake ? f : h).appendChild(o), f.appendChild(h), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)), h.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(f)), s = i(h, t), f.fake ? (f.parentNode.removeChild(f), C.style.overflow = l, C.offsetHeight) : h.parentNode.removeChild(h), !!s
        }

        function h(t) {
            return t.replace(/([A-Z])/g, function (t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function f(e, n) {
            var a = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (; a--;) if (t.CSS.supports(h(e[a]), n)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in t) {
                for (var o = []; a--;) o.push("(" + h(e[a]) + ":" + n + ")");
                return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function (t) {
                    return "absolute" == getComputedStyle(t, null).position
                })
            }
            return i
        }

        function m(t, e, a, r) {
            function l() {
                u && (delete I.style, delete I.modElem)
            }

            if (r = !n(r, "undefined") && r, !n(a, "undefined")) {
                var d = f(t, a);
                if (!n(d, "undefined")) return d
            }
            for (var u, h, m, $, p, v = ["modernizr", "tspan"]; !I.style;) u = !0, I.modElem = c(v.shift()), I.style = I.modElem.style;
            for (m = t.length, h = 0; m > h; h++) if ($ = t[h], p = I.style[$], o($, "-") && ($ = s($)), I.style[$] !== i) {
                if (r || n(a, "undefined")) return l(), "pfx" != e || $;
                try {
                    I.style[$] = a
                } catch (g) {
                }
                if (I.style[$] != p) return l(), "pfx" != e || $
            }
            return l(), !1
        }

        function $(t, e, i, a, o) {
            var s = t.charAt(0).toUpperCase() + t.slice(1), r = (t + " " + k.join(s + " ") + s).split(" ");
            return n(e, "string") || n(e, "undefined") ? m(r, e, a, o) : (r = (t + " " + T.join(s + " ") + s).split(" "), l(r, e, i))
        }

        function p(t, e, n) {
            return $(t, i, i, e, n)
        }

        var v = [], g = {
            _version: "3.3.1",
            _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
            _q: [],
            on: function (t, e) {
                var i = this;
                setTimeout(function () {
                    e(i[t])
                }, 0)
            },
            addTest: function (t, e, i) {
                v.push({name: t, fn: e, options: i})
            },
            addAsyncTest: function (t) {
                v.push({name: null, fn: t})
            }
        }, w = function () {
        };
        w.prototype = g, w = new w;
        var b = [], C = e.documentElement, y = "CSS" in t && "supports" in t.CSS, R = "supportsCSS" in t;
        w.addTest("supports", y || R);
        var x = "Moz O ms Webkit", k = g._config.usePrefixes ? x.split(" ") : [];
        g._cssomPrefixes = k;
        var T = g._config.usePrefixes ? x.toLowerCase().split(" ") : [];
        g._domPrefixes = T;
        var S = "svg" === C.nodeName.toLowerCase(), H = g.testStyles = u, z = {elem: c("modernizr")};
        w._q.push(function () {
            delete z.elem
        });
        var I = {style: z.elem.style};
        w._q.unshift(function () {
            delete I.style
        }), g.testAllProps = $, g.testAllProps = p, w.addTest("borderimage", p("borderImage", "url() 1", !0)), w.addTest("csstransforms3d", function () {
            var t = !!p("perspective", "1px", !0), e = w._config.usePrefixes;
            if (t && (!e || "webkitPerspective" in C.style)) {
                var i, n = "#modernizr{width:0;height:0}";
                w.supports ? i = "@supports (perspective: 1px)" : (i = "@media (transform-3d)", e && (i += ",(-webkit-transform-3d)")), i += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", H(n + i, function (e) {
                    t = 7 === e.offsetWidth && 18 === e.offsetHeight
                })
            }
            return t
        }), w.addTest("cssresize", p("resize", "both", !0)), a(), delete g.addTest, delete g.addAsyncTest;
        for (var P = 0; P < w._q.length; P++) w._q[P]();
        t.Modernizr = w
    }(window, document);
    var t = {
        container: $(".infoRotator-circle"),
        eclipse: $(".infoRotator-eclipse"),
        tabsBox: $(".infoRotator-box"),
        tabsLink: $(".infoRotator-link"),
        angle: "",
        timer: "",
        rotateOptions: "",
        delay: 5e3,
        progressTimer: "",
        setFileds: function () {
            var t = this;
            this.container.each(function (e, i) {
                var n = {
                    container: $(this),
                    radius: ($(this).width() / 2).toFixed(0),
                    fields: $(".infoRotator-marker", $(this))
                };
                t.distributeFields(n)
            })
        },
        distributeFields: function (t) {
            var e = t.container.width(), i = t.container.height(), n = 0, a = 2 * Math.PI / t.fields.length;
            t.fields.each(function () {
                var o = Math.round(e / 2 + t.radius * Math.cos(n) - $(this).width() / 2),
                    s = Math.round(i / 2 + t.radius * Math.sin(n) - $(this).height() / 2);
                $(this).css({left: o + "px", top: s + "px"}), n += a
            })
        },
        makeAngle: function () {
            var t = 0;
            return function () {
                return t += 360
            }
        },
        setUpListener: function () {
            var t = this, e = $(window).width();
            this.tabsLink.click(function (e) {
                e.preventDefault(), clearTimeout(t.timer);
                var i = $(this).attr("data-num");
                t.rotateOptions = {next: i}, t.rotate(), t.startRotate()
            }), $(window).resize(function () {
                $(window).width() != e && (e = $(window).width(), t.setFileds())
            })
        },
        rotate: function () {
            var t = this, e = t.tabsLink.length, i = parseInt($(".infoRotator-box.active").attr("data-num")),
                n = t.rotateOptions.next ? t.rotateOptions.next : i < e ? i + 1 : 1,
                a = $('.infoRotator-box[data-num="' + i + '"]'), o = $('.infoRotator-box[data-num="' + n + '"]');
            t.angle();
            t.tabsLink.removeClass("active"), a.fadeOut(200, function () {
                a.removeClass("active"), o.fadeIn(200).addClass("active")
            }), $('.infoRotator-link[data-num="' + n + '"]').addClass("active"), t.rotateOptions = "", t.progress()
        },
        progress: function () {
            var t = this;
            this.eclipse.hasClass("animation") && (clearTimeout(this.progressTimer), this.eclipse.fadeOut(100).removeClass("animation").fadeIn(100)), this.eclipse.addClass("animation"), this.progressTimer = setTimeout(function () {
                t.eclipse.removeClass("animation")
            }, 4e3)
        },
        startRotate: function () {
            var t = this;
            this.timer = setInterval(function () {
                t.rotate()
            }, this.delay)
        },
        init: function () {
            this.setFileds(), this.angle = this.makeAngle(), this.setUpListener(), this.startRotate()
        }
    };
    $(".infoRotator-circle").length && t.init(), Modernizr.csstransforms3d || $(".infoRotator").addClass("infoRotator--animation--false"), Modernizr.borderimage || $(".infoRotator").addClass("infoRotator--animation--false"), Modernizr.cssresize || $(".infoRotator").addClass("infoRotator--animation--false")
}), $(document).ready(function () {
    function t(t) {
        i.elem.trigger("owl.goTo", t)
    }

    var e = {
        elem: $("#mobileRotator"),
        prev: "",
        next: "",
        options: {
            items: 1,
            navigation: !0,
            singleItem: !0,
            transitionStyle: "fade",
            autoHeight: !0,
            mouseDrag: !1,
            touchDrag: !1,
            afterAction: function () {
                "" === e.prev && (e.prev = e.elem.find(".owl-prev")), "" === e.next && (e.next = e.elem.find(".owl-next")), e.prev.removeClass("owl-disabled"), e.next.removeClass("owl-disabled"), 0 === this.currentItem && e.prev.addClass("owl-disabled"), this.currentItem === this.maximumItem && e.next.addClass("owl-disabled"), t(this.owl.currentItem)
            }
        }
    }, i = {
        elem: $("#mobileRotatorDevice"),
        options: {
            items: 1,
            navigation: !1,
            pagination: !1,
            singleItem: !0,
            transitionStyle: "fade",
            mouseDrag: !1,
            touchDrag: !1
        }
    };
    e.elem.length && e.elem.owlCarousel(e.options), i.elem.length && i.elem.owlCarousel(i.options)
}),

    /*$(document).ready(function(){var t=$("section.statistics");t.each(function(e,i){var n=$(".statistics-col",t);n.matchHeight({byRow:!0})}),$("section.statistics").each(function(){$(".column",$(this)).matchHeight({byRow:!0})})}),*/

    $(document).ready(function () {
        var t = $(".table-page-application-integration .table-wrapper");
        t.length && t.each(function (e, i) {
            var n = $(".row", t);
            n.matchHeight({byRow: !1})
        })
    }), function () {
    var t = document.querySelectorAll(".tabs-text ul li");
    if (t.length) for (var e = 0; e < t.length; e++) t[e].style.listStyleType = "none"
}(), $(document).ready(function () {
    function t(t) {
        i.css({height: "auto"}), setTimeout(function () {
            var e = parseInt($(".tabs-navigation").height()), i = parseInt(t.height()),
                i = i > e ? parseInt(t.height()) : e, n = 58 * Math.ceil((i - 35) / 58) + 35;
            t.css({height: n})
        }, 0)
    }

    var e = $(".tabs-link"), i = $(".tabs-box"), n = $(".tabs-title");
    e.click(function (n) {
        n.preventDefault();
        var a = $(this).attr("data-num"), o = "", s = "";
        i.each(function () {
            $(this).hasClass("active") && (o = $(this))
        }), e.removeClass("active"), s = $('.tabs-box[data-num="' + a + '"]'), o.fadeOut(200, function () {
            o.removeClass("active"), s.fadeIn(200).addClass("active"), t(s)
        }), $(this).addClass("active")
    }), $(".tabs-link").matchHeight({byRow: !1}), $(window).resize(function (t) {
        setTimeout(function () {
            var t = n.css("margin-right");
            "-15px" !== t && $(".tabs-link.active").click()
        }, 100)
    }).trigger("resize")
}), $(document).ready(function () {
    var t = ($(".tabs1"), $(".tabs1-item")), e = $(".tabs1-box"), i = !1;
    t.click(function (n) {
        if (n.preventDefault(), !i) {
            i = !0;
            var a = $(this).attr("data-num"), o = "", s = "";
            e.each(function () {
                $(this).hasClass("active") && (o = $(this))
            }), t.removeClass("active"), s = $('.tabs1-box[data-num="' + a + '"]'), o.fadeOut(200, function () {
                o.removeClass("active"), s.fadeIn(200).addClass("active"), setTimeout(function () {
                    i = !1
                }, 100)
            }), $(this).addClass("active")
        }
    }), $(".tabs1-item .tabs1Table-cell").matchHeight({byRow: !1}), $(".tabs1-box").matchHeight({byRow: !1})
}), $(document).ready(function () {
    var t = ($(".tabs2"), $(".tabs2-item")), e = $(".tabs2-box"), i = !1;
    t.click(function (n) {
        if (n.preventDefault(), !i) {
            i = !0;
            var a = $(this).attr("data-num"), o = "", s = "";
            e.each(function () {
                $(this).hasClass("active") && (o = $(this))
            }), t.removeClass("active"), s = $('.tabs2-box[data-num="' + a + '"]'), o.fadeOut(200, function () {
                o.removeClass("active"), s.fadeIn(200).addClass("active"), setTimeout(function () {
                    i = !1
                }, 100)
            }), $(this).addClass("active")
        }
    }), $(".tabs2-box").matchHeight({byRow: !1})
}), $(document).ready(function () {
    var t = $(".tabslider"), e = $(".tabslider--page-prototyping");
    t.length && (t.each(function () {
        var t = {
            container: $(this),
            items: $(".tabslider-items", $(this)),
            tabs: $(".tabslider-tabs-item", $(this)),
            options: {
                items: 5,
                navigation: !1,
                pagination: !0,
                singleItem: !0,
                transitionStyle: "fade",
                slideSpeed: 200,
                paginationSpeed: 200,
                autoPlay: !1,
                stopOnHover: !0,
                autoHeight: !0,
                mouseDrag: !1,
                touchDrag: !0,
                afterInit: function () {
                    t.tabs.each(function (e) {
                        $(t.tabs[e]).click(function () {
                            t.items.trigger("owl.goTo", e)
                        })
                    })
                },
                afterMove: function () {
                    t.tabs.length && $(t.tabs[this.currentItem]).addClass("active").siblings().removeClass("active")
                }
            }
        };
        t.items.length && t.items.owlCarousel(t.options), t.items.matchHeight()
    }), e.length && $(".tabslider-tabs-item .tabslider-tabs-table", e).matchHeight({byRow: !0}))
}), $(document).ready(function () {
    function t() {
        a.each(function () {
            $this = $(this), $this.offset().top < $(window).scrollTop() && ($this.hasClass("tubes--on") || $this.addClass("tubes--on")), e($this)
        })
    }

    function e(t) {
        setTimeout(function () {
            t.addClass("tubes--transition")
        }, 500)
    }

    function i() {
        a.each(function () {
            $this = $(this), $this.offset().top - $(window).height() / 2 < $(window).scrollTop() && $this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop() && ($this.hasClass("tubes--on") || ($this.addClass("tubes--on"), n($this)))
        })
    }

    function n(t) {
        setTimeout(function () {
            t.removeClass("tubes--transition")
        }, 5e3)
    }

    var a = $(".tubes");
    a.length;
    t(), $(window).on("scroll", function () {
        i()
    }).trigger("scroll")
}), $(document).ready(function () {
    function t(t) {
        var i = 1;
        e.each(function () {
            var e = $(".verticalTimeline-asset", $(this)), n = $(".verticalTimeline-content", $(this));
            "forward" === t && i % 2 === 0 && n.insertAfter(e), "reverse" === t && i % 2 === 0 && e.insertAfter(n), i += 1
        })
    }

    var e = $(".verticalTimeline-row"), i = $(".verticalTimeline-wrapper"), n = "";
    $(window).resize(function (e) {
        n = i.css("max-width"), t("607px" === n ? "forward" : "reverse")
    }).trigger("resize")
});
