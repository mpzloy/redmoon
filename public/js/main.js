// $(document).ready(function () {
//     function e() {
//         t = $(window).scrollTop(), $("main, .footer").wrapAll('<div class="bodyWrapper">')
//     }
//
//     function n() {
//         $("main, .footer").unwrap(), $(window).scrollTop(t)
//     }
//
//     var a = $(".burger"),
//         o = $(".header"),
//         t = ($("body"), 0);
//     a.magnificPopup({
//         closeOnContentClick: !1,
//         closeBtnInside: !1,
//         fixedContentPos: !0,
//         modal: !0,
//         mainClass: "mfp-no-margins mfp-with-zoom",
//         callbacks: {
//             open: function () {
//                 e()
//             },
//             close: function () {
//                 n()
//             }
//         }
//     }), a.click(function (e) {
//         o.hasClass("header--bg") ? o.removeClass("header--bg") : o.addClass("header--bg"), $(this).toggleClass("burger--active"), $(this).hasClass("burger--active") || $.magnificPopup.close()
//     })
// }),
$(function () {
    var $burgerButton = $('.burger'),
        $menuNav = $('.mobileNavigation'),
        $header = $('.header'),
        $body = $('body'),
        $moobNavWrap = $('.mobileNavigation-wrapp');

    $burgerButton.on('click', function () {

        if ($burgerButton.hasClass('burger--active')) {
            $burgerButton.removeClass('burger--active');
            $menuNav.removeClass('mobileNavigation_active');
            $header.removeClass('header--bg');
            $body.removeClass('body-rm');
            $moobNavWrap.hide();

        }
        else {
            $header.addClass('header--bg');
            $burgerButton.addClass('burger--active');
            $menuNav.addClass('mobileNavigation_active');
            $body.addClass('body-rm');
            $moobNavWrap.show();
        }
    });
});

$(document).ready(function () {
    function e() {
        o && ($(window).scrollTop() > 50 ? n.hasClass("header--small") || n.addClass("header--small") : n.hasClass("header--small") && n.removeClass("header--small"))
    }

    var n = $(".header"),
        a = $(".burger"),
        o = !0,
        t = $(window).width();
    $(window).resize(function (e) {
        if ($(window).width() != t) {
            t = $(window).width();
            var o = $(".navigationList-item:eq(1)").css("display");
            "none" !== o && (a.removeClass("burger--active"))
        }
    }), $(window).scroll(function () {
        e()
    })
}),
// $(document).ready(function () {
//     var e = $(".grayscale"),
//         n = function (e) {
//             var n = "",
//                 a = "",
//                 o = "",
//                 t = "",
//                 s = 0;
//             for (s; s < e.length; s += 4) n = e[s], a = e[s + 1], o = e[s + 2], t = .2126 * n + .7152 * a + .0722 * o, e[s] = t, e[s + 1] = t, e[s + 2] = t;
//             return e
//         },
//         a = function (e) {
//             $('<canvas class="grayscale-canvas"></canvas>').appendTo(e);
//             var a = $(".grayscale-item", e),
//                 o = $(".grayscale-canvas", e)[0],
//                 t = o.getContext("2d"),
//                 s = a.width();
//             ch = a.height(), o.width = s, o.height = ch, t.drawImage(a[0], 0, 0, s, ch);
//             try {
//                 var i = t.getImageData(0, 0, s, ch),
//                     r = i.data;
//                 i.data = n(r), t.putImageData(i, 0, 0), e.addClass("grayscale--ready")
//             } catch (d) {
//                 console.log("Error " + d.name + ":" + d.message + "\n" + d.stack)
//             }
//         };
//     e && e.each(function (e, n) {
//         var o = $(this);
//         o.imagesLoaded(function () {
//             a(o)
//         })
//     })
// }),
    $(document).ready(function () {
        !function (e, n, a) {
            function o(e, n) {
                return typeof e === n
            }

            function t() {
                var e, n, a, t, s, i, r;
                for (var l in d)
                    if (d.hasOwnProperty(l)) {
                        if (e = [], n = d[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                            for (a = 0; a < n.options.aliases.length; a++) e.push(n.options.aliases[a].toLowerCase());
                        for (t = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], r = i.split("."), 1 === r.length ? c[r[0]] = t : (!c[r[0]] || c[r[0]] instanceof Boolean || (c[r[0]] = new Boolean(c[r[0]])), c[r[0]][r[1]] = t), f.push((t ? "" : "no-") + r.join("-"))
                    }
            }

            function s() {
                return "function" != typeof n.createElement ? n.createElement(arguments[0]) : p ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
            }

            function i() {
                var e = n.body;
                return e || (e = s(p ? "svg" : "body"), e.fake = !0), e
            }

            function r(e, a, o, t) {
                var r, d, l, c, f = "modernizr",
                    u = s("div"),
                    p = i();
                if (parseInt(o, 10))
                    for (; o--;) l = s("div"), l.id = t ? t[o] : f + (o + 1), u.appendChild(l);
                return r = s("style"), r.type = "text/css", r.id = "s" + f, (p.fake ? p : u).appendChild(r), p.appendChild(u), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), u.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = h.style.overflow, h.style.overflow = "hidden", h.appendChild(p)), d = a(u, e), p.fake ? (p.parentNode.removeChild(p), h.style.overflow = c, h.offsetHeight) : u.parentNode.removeChild(u), !!d
            }

            var d = [],
                l = {
                    _version: "3.3.1",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function (e, n) {
                        var a = this;
                        setTimeout(function () {
                            n(a[e])
                        }, 0)
                    },
                    addTest: function (e, n, a) {
                        d.push({
                            name: e,
                            fn: n,
                            options: a
                        })
                    },
                    addAsyncTest: function (e) {
                        d.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                c = function () {
                };
            c.prototype = l, c = new c;
            var f = [],
                u = l._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            l._prefixes = u;
            var h = n.documentElement,
                p = "svg" === h.nodeName.toLowerCase(),
                m = l.testStyles = r;
            c.addTest("touchevents", function () {
                var a;
                if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) a = !0;
                else {
                    var o = ["@media (", u.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    m(o, function (e) {
                        a = 9 === e.offsetTop
                    })
                }
                return a
            }), t(), delete l.addTest, delete l.addAsyncTest;
            for (var v = 0; v < c._q.length; v++) c._q[v]();
            e.Modernizr = c
        }(window, document);
        var e = $(".navigation"),
            n = $(".navigationList-item");
        n.hover(function () {
            $(this).addClass("navigationList-item--dropdown--show")
        }, function () {
            $(this).removeClass("navigationList-item--dropdown--show")
        });
        var a = $(window).width();
        Modernizr.touchevents && a <= 1300 ? e.addClass("navigation_touch") : e.addClass("navigation_normal")
    }),

    /* PORALUX */
    $(function () {
        $(window).scroll(function () {
            var $st = $(this).scrollTop();

            // $('.title-name').css({"transform" : "translate(0%, " + st / 2 + "%"});
            $('.background-home img').css({"transform": "translate(0%, " + $st / 20 + "%"});
        });
    });

/* MOBILE MENU ON CLICK */
$(document).ready(function () {
    var e = $(".mobileNavigationList-dropdown");
    e.click(function (e) {
        e.preventDefault();
        var t = $(this).siblings("ul");
        t.slideToggle(200)
    })
});

/* ARROW HIDE ON SCROLL*/
$(document).ready(function () {
    var $arrow = $('#arrowAnim');

    $(document).on('scroll', function () {
        var $stt = $(this).scrollTop();

        if ($arrow && $stt > 200) {
            $arrow.hide();
        }
        else if ($arrow && $stt < 400) {
            $arrow.show();
        }
    });

});

/*scrollTop*/
var $button = $('.scroll_top');
var $button_show = false;

$(document).on('scroll', function () {
    var $topScroll = $(this).scrollTop();

    if (!$button_show && $topScroll > 200) {
        $button.fadeIn();
        $button_show = true;
    }
    else if ($button_show && $topScroll < 500) {
        $button.fadeOut();
        $button_show = false;
    }
});

$button.on('click', function () {
    $('html,body').animate({scrollTop: 0}, 100);
});

/*year*/
$(function () {
    var $footerYear = $('.footer-year');
    var $mdate = new Date();

    $footerYear.html($mdate.getFullYear());
});

/*NUMBER*/
var timeout = 1,
    counters = $('.number');
counters.each(function () {
    var that = $(this),
        num = that.html();
    that.html(0);
    that.attr('data-num', num);
});
$(window).on('scroll', function () {
    var scrolltop = $(this).scrollTop(),
        wh = $(this).height();
    counters.each(function () {
        var that = $(this);
        if (!that.data('start') && scrolltop >= that.offset().top - wh) {
            that.attr('data-start', true);
            var i = 1,
                num = that.data('num'),
                step = Math.round(2000 * timeout / num),
                int = setInterval(function () {
                    if (i <= num) {
                        that.html(i);
                    }
                    else {
                        clearInterval(int);
                    }
                    i++;
                }, step);
        }
    });
});

/**/
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Проверьте все ли поля заполнены");
    } else {
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "../includes/action.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

// function submitMSG(valid, msg){
//     if(valid){
//         var msgClasses = "h3 text-center tada animated text-success";
//     } else {
//         var msgClasses = "h3 text-center text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }

function submitMSG(valid, msg){
    if(valid){
        $("#msgSubmit").removeClass().addClass("h3 text-center tada animated text-success").text(msg);
    } else {
        $("#msgSubmit").removeClass().addClass("h3 text-center text-danger").text(msg);
    }
}

// $('#form').validator().on('submit', function (event) {
//   if (event.isDefaultPrevented()) {
//      $("#msgSubmit").removeClass().addClass("h3 text-center tada animated text-success").text(msg);
//   } else {
//     $("#msgSubmit").removeClass().addClass("h3 text-center text-danger").text(msg);
//   }
// })


/**/
$(document).ready(function () {
    var $contactFormInput = $('.contactForm-input');
    var $contactFormTextarea = $('.contactForm-textarea');


    $contactFormInput.each(function () {
        "" === $(this).val() ? $(this).addClass("inactive") : $(this).removeClass("inactive")
    }),
    $contactFormInput.each(function () {

        $(this).focus(function () {
            "" === $(this).val() && $(this).removeClass("inactive")
        }).blur(function () {
            "" === $(this).val() ? $(this).addClass("inactive") : $(this).removeClass("inactive")
        })
    });

    $contactFormTextarea.each(function () {
        "" === $(this).val() ? $(this).addClass("inactive") : $(this).removeClass("inactive")
    }),
        $contactFormTextarea.each(function () {

            $(this).focus(function () {
                "" === $(this).val() && $(this).removeClass("inactive")
            }).blur(function () {
                "" === $(this).val() ? $(this).addClass("inactive") : $(this).removeClass("inactive")
            })
        });
});


/********************************************/
function contactSelectInit() {
    var e = $(".contactForm-line select");
    e.chosen(), e.on("chosen:showing_dropdown", function() {
        var e = $(".chosen-results"),
            t = e.find(".result-selected").index(),
            n = parseInt(40 * t);
        n && e.scrollTop(n)
    })
}

function placeholderInit() {
    $(".contactForm-input, .contactForm-textarea").each(function(e, t) {
        "" === $(this).val() ? $(this).addClass("inactive") : $(this).removeClass("inactive")
    }), $(".contactForm-input, .contactForm-textarea").each(function(e, t) {
        $(this).focus(function() {
            "" === $(this).val() && $(this).removeClass("inactive")
        }).blur(function() {
            "" === $(this).val() ? $(this).addClass("inactive") : $(this).removeClass("inactive")
        })
    })
}

function fileFocusInit() {
    var e = $(".contactForm-attachTrigger-input"),
        t = e.closest(".contactForm-attachTrigger");
    e.on("focus", function() {
        t.addClass("contactForm-file--focus")
    }), e.on("blur", function() {
        t.removeClass("contactForm-file--focus")
    })
}

$(document).ready(function() {
    contactSelectInit(), placeholderInit(), fileFocusInit()
});

/****************************************/
$(document).ready(function () {
    var t = $(".cards,  .cards5"),
        e = {
            element: "",
            cardImg: ""
        },
        a = $(window).width(),
        i = !1;
    $(".cards--portfolio .tags").length && $(".cards--portfolio .tags").matchHeight({
        byRow: !1
    }), t.each(function () {
        function t() {
            var t = $(".cards-item-link-image", $(this)).attr("data-background");
            e.element = $(".row-background--" + t), e.cardImg = $(this), $(".cards-item").not(this).addClass("inactive"), e.cardImg.addClass("active"), e.element.css({
                "z-index": 2
            }).addClass("active")
        }

        function c() {
            var t = e.element,
                a = e.cardImg;
            setTimeout(function (t) {
                return function () {
                    t.removeClass("active")
                }
            }(a), 0), setTimeout(function (t) {
                return function () {
                    t.css({
                        "z-index": 1
                    }).removeClass("active"), $(".cards--page-main-2 .cards-item.active").length || $(".cards--page-main-2 .cards-item").removeClass("inactive")
                }
            }(t), 400)
        }

        $(this).hasClass("cards--page-requirements-engineering-1") && $(".cards-wrapper", $(this)).matchHeight({
            byRow: !0
        }), $(this).hasClass("cards--ruby-2") && $(".cards-name", $(this)).matchHeight(), $(".cards-item", $(this)).matchHeight({
            byRow: !1
        }), $(".cards-text--top", $(this)).matchHeight({
            byRow: !1
        }), $(".cards5-item", $(this)).matchHeight({
            byRow: !0
        }), $(".cards--portfolio .cards-name h4").matchHeight({
            byRow: !1
        }), $(".cards--portfolio .cards-text").matchHeight({
            byRow: !1
        }), $(".cards--portfolio .cards-item, .cards--portfolio .cards-text").matchHeight({
            byRow: !1
        }), $(".cards--mobile-1 .cards-name h4").matchHeight({
            byRow: !1
        }), $(".cards--page-main-2 .cards-item").hoverIntent(t, c, 400), $(window).resize(function () {
            if ($(window).width() != a) {
                a = $(window).width();
                var e = $(".cards--page-main-2 .column").css("margin-bottom");
                "-1px" !== e ? i || ($(".cards--page-main-2 .cards-item").hoverIntent(t, c, 400), i = !0) : ($(".cards--page-main-2 .cards-item").off(), i = !1)
            }
        })
    })
}), $(document).ready(function () {
    $(".cards4-item").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    $(".cards6-item").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    $(".cards9-item").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    $(".scheme-item").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    $(".scheme1-item").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    var t = $(".scheme3"),
        e = 0,
        a = $(".heading", t),
        i = 0,
        c = 0,
        n = $(".tubes-circle", t),
        s = 0;
    $(window).resize(function (r) {
        a.length && n.length && (e = parseInt(t.css("padding-top").replace("px", "")), i = a.height(), c = parseInt(a.css("margin-bottom").replace("px", "")), s = e + i + c + 5, n.css({
            top: s
        }))
    }).trigger("resize"), $(".scheme3-list li").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    $(".scheme4-item").matchHeight({
        byRow: !1
    })
}), $(document).ready(function () {
    $(".scheme5-item").matchHeight({
        byRow: !1
    })
// }), $(document).ready(function () {
//     var t = $(".sphere");
//     t.length && t.each(function (t, e) {
//         var a = $(".sphere-item", $(this));
//         a.matchHeight({
//             byRow: !1
//         })
//     })
});


/******************************************/
