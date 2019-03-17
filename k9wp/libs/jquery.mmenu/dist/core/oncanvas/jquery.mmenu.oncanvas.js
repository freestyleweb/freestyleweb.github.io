/*!
 * jQuery mmenu v7.3.2
 * @requires jQuery 1.7.0 or later
 *
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(t){var e,n,i,s,a,r="mmenu";t[r]&&t[r].version>"7.3.2"||(t[r]=function(t,e,n){return this.$menu=t,this._api=["bind","getInstance","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=e,this.conf=n,this.vars={},this.cbck={},this.mtch={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initWrappers(),this._initAddons(),this._initExtensions(),this._initHooks(),this._initMenu(),this._initPanels(),this._initOpened(),this._initAnchors(),this._initMatchMedia(),"function"==typeof this.___debug&&this.___debug(),this},t[r].version="7.3.2",t[r].uniqueId=0,t[r].wrappers={},t[r].addons={},t[r].defaults={hooks:{},extensions:[],wrappers:[],navbar:{add:!0,title:"Menu",titleLink:"parent"},onClick:{setSelected:!0},slidingSubmenus:!0},t[r].configuration={classNames:{divider:"Divider",inset:"Inset",nolistview:"NoListview",nopanel:"NoPanel",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,language:null,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},t[r].prototype={getInstance:function(){return this},initPanels:function(t){this._initPanels(t)},openPanel:function(e,s){if(this.trigger("openPanel:before",e),e&&e.length&&(e.is("."+n.panel)||(e=e.closest("."+n.panel)),e.is("."+n.panel))){var a=this;if("boolean"!=typeof s&&(s=!0),e.parent("."+n.listitem+"_vertical").length)e.parents("."+n.listitem+"_vertical").addClass(n.listitem+"_opened").children("."+n.panel).removeClass(n.hidden),this.openPanel(e.parents("."+n.panel).not(function(){return t(this).parent("."+n.listitem+"_vertical").length}).first()),this.trigger("openPanel:start",e),this.trigger("openPanel:finish",e);else{if(e.hasClass(n.panel+"_opened"))return;var l=this.$pnls.children("."+n.panel),o=this.$pnls.children("."+n.panel+"_opened");if(!t[r].support.csstransitions)return o.addClass(n.hidden).removeClass(n.panel+"_opened"),e.removeClass(n.hidden).addClass(n.panel+"_opened"),this.trigger("openPanel:start",e),void this.trigger("openPanel:finish",e);l.not(e).removeClass(n.panel+"_opened-parent");for(var d=e.data(i.parent);d;)(d=d.closest("."+n.panel)).parent("."+n.listitem+"_vertical").length||d.addClass(n.panel+"_opened-parent"),d=d.data(i.parent);l.removeClass(n.panel+"_highest").not(o).not(e).addClass(n.hidden),e.removeClass(n.hidden);var c=function(){o.removeClass(n.panel+"_opened"),e.addClass(n.panel+"_opened"),e.hasClass(n.panel+"_opened-parent")?(o.addClass(n.panel+"_highest"),e.removeClass(n.panel+"_opened-parent")):(o.addClass(n.panel+"_opened-parent"),e.addClass(n.panel+"_highest")),a.trigger("openPanel:start",e)},h=function(){o.removeClass(n.panel+"_highest").addClass(n.hidden),e.removeClass(n.panel+"_highest"),a.trigger("openPanel:finish",e)};s&&!e.hasClass(n.panel+"_noanimation")?setTimeout(function(){a.__transitionend(e,function(){h()},a.conf.transitionDuration),c()},a.conf.openingInterval):(c(),h())}this.trigger("openPanel:after",e)}},closePanel:function(t){this.trigger("closePanel:before",t);var e=t.parent();e.hasClass(n.listitem+"_vertical")&&(e.removeClass(n.listitem+"_opened"),t.addClass(n.hidden),this.trigger("closePanel",t)),this.trigger("closePanel:after",t)},closeAllPanels:function(t){this.trigger("closeAllPanels:before"),this.$pnls.find("."+n.listview).children().removeClass(n.listitem+"_selected").filter("."+n.listitem+"_vertical").removeClass(n.listitem+"_opened");var e=this.$pnls.children("."+n.panel),i=t&&t.length?t:e.first();this.$pnls.children("."+n.panel).not(i).removeClass(n.panel+"_opened").removeClass(n.panel+"_opened-parent").removeClass(n.panel+"_highest").addClass(n.hidden),this.openPanel(i,!1),this.trigger("closeAllPanels:after")},togglePanel:function(t){var e=t.parent();e.hasClass(n.listitem+"_vertical")&&this[e.hasClass(n.listitem+"_opened")?"closePanel":"openPanel"](t)},setSelected:function(t){this.trigger("setSelected:before",t),this.$menu.find("."+n.listitem+"_selected").removeClass(n.listitem+"_selected"),t.addClass(n.listitem+"_selected"),this.trigger("setSelected:after",t)},bind:function(t,e){this.cbck[t]=this.cbck[t]||[],this.cbck[t].push(e)},trigger:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();if(this.cbck[e])for(var n=0,i=this.cbck[e].length;n<i;n++)this.cbck[e][n].apply(this,t)},matchMedia:function(t,e,n){var i={yes:e,no:n};this.mtch[t]=this.mtch[t]||[],this.mtch[t].push(i)},i18n:function(e){return t[r].i18n(e,this.conf.language)},_initHooks:function(){for(var t in this.opts.hooks)this.bind(t,this.opts.hooks[t])},_initWrappers:function(){this.trigger("initWrappers:before");for(var e=0;e<this.opts.wrappers.length;e++){var n=t[r].wrappers[this.opts.wrappers[e]];"function"==typeof n&&n.call(this)}this.trigger("initWrappers:after")},_initAddons:function(){var e;for(e in this.trigger("initAddons:before"),t[r].addons)t[r].addons[e].add.call(this),t[r].addons[e].add=function(){};for(e in t[r].addons)t[r].addons[e].setup.call(this);this.trigger("initAddons:after")},_initExtensions:function(){this.trigger("initExtensions:before");var t=this;for(var e in this.opts.extensions.constructor===Array&&(this.opts.extensions={all:this.opts.extensions}),this.opts.extensions)this.opts.extensions[e]=this.opts.extensions[e].length?n.menu+"_"+this.opts.extensions[e].join(" "+n.menu+"_"):"",this.opts.extensions[e]&&function(e){t.matchMedia(e,function(){this.$menu.addClass(this.opts.extensions[e])},function(){this.$menu.removeClass(this.opts.extensions[e])})}(e);this.trigger("initExtensions:after")},_initMenu:function(){this.trigger("initMenu:before");this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){t(this).attr("id",n.mm(t(this).attr("id")))})),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=t('<div class="'+n.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.addClass(n.menu).parent().addClass(n.wrapper),this.trigger("initMenu:after")},_initPanels:function(e){this.trigger("initPanels:before",e),e=e||this.$pnls.children(this.conf.panelNodetype);var i=t(),s=this,a=function(e){e.filter(s.conf.panelNodetype).each(function(e){var r=s._initPanel(t(this));if(r){s._initNavbar(r),s._initListview(r),i=i.add(r);var l=r.children("."+n.listview).children("li").children(s.conf.panelNodetype).add(r.children("."+s.conf.classNames.panel));l.length&&a(l)}})};a(e),this.trigger("initPanels:after",i)},_initPanel:function(t){this.trigger("initPanel:before",t);if(t.hasClass(n.panel))return t;if(this.__refactorClass(t,this.conf.classNames.panel,n.panel),this.__refactorClass(t,this.conf.classNames.nopanel,n.nopanel),this.__refactorClass(t,this.conf.classNames.inset,n.listview+"_inset"),t.filter("."+n.listview+"_inset").addClass(n.nopanel),t.hasClass(n.nopanel))return!1;var e=t.hasClass(this.conf.classNames.vertical)||!this.opts.slidingSubmenus;t.removeClass(this.conf.classNames.vertical);var s=t.attr("id")||this.__getUniqueId();t.is("ul, ol")&&(t.removeAttr("id"),t.wrap("<div />"),t=t.parent()),t.attr("id",s),t.addClass(n.panel+" "+n.hidden);var a=t.parent("li");return e?a.addClass(n.listitem+"_vertical"):t.appendTo(this.$pnls),a.length&&(a.data(i.child,t),t.data(i.parent,a)),this.trigger("initPanel:after",t),t},_initNavbar:function(e){if(this.trigger("initNavbar:before",e),!e.children("."+n.navbar).length){var s=e.data(i.parent),a=t('<div class="'+n.navbar+'" />'),r=this.__getPanelTitle(e,this.opts.navbar.title),l="";if(s&&s.length){if(s.hasClass(n.listitem+"_vertical"))return;if(s.parent().is("."+n.listview))var o=s.children("a, span").not("."+n.btn+"_next");else o=s.closest("."+n.panel).find('a[href="#'+e.attr("id")+'"]');var d=(s=(o=o.first()).closest("."+n.panel)).attr("id");switch(r=this.__getPanelTitle(e,t("<span>"+o.text()+"</span>").text()),this.opts.navbar.titleLink){case"anchor":l=o.attr("href")||"";break;case"parent":l="#"+d}a.append('<a class="'+n.btn+" "+n.btn+"_prev "+n.navbar+'__btn" href="#'+d+'" />')}else if(!this.opts.navbar.title)return;this.opts.navbar.add&&e.addClass(n.panel+"_has-navbar"),a.append('<a class="'+n.navbar+'__title"'+(l.length?' href="'+l+'"':"")+">"+r+"</a>").prependTo(e),this.trigger("initNavbar:after",e)}},_initListview:function(e){this.trigger("initListview:before",e);var s=this.__childAddBack(e,"ul, ol");this.__refactorClass(s,this.conf.classNames.nolistview,n.nolistview);var a=s.not("."+n.nolistview).addClass(n.listview).children().addClass(n.listitem);this.__refactorClass(a,this.conf.classNames.selected,n.listitem+"_selected"),this.__refactorClass(a,this.conf.classNames.divider,n.listitem+"_divider"),this.__refactorClass(a,this.conf.classNames.spacer,n.listitem+"_spacer"),a.children("a, span").not("."+n.btn).addClass(n.listitem+"__text");var r=e.data(i.parent);if(r&&r.is("."+n.listitem)&&!r.children("."+n.btn).length){var l=r.children("a, span").first(),o=t('<a class="'+n.btn+" "+n.btn+"_next "+n.listitem+'__btn" href="#'+e.attr("id")+'" />');o.insertAfter(l),l.is("span")&&(o.addClass(n.listitem+"__text").html(l.html()),l.remove())}this.trigger("initListview:after",e)},_initOpened:function(){this.trigger("initOpened:before");var t=this.$pnls.find("."+n.listitem+"_selected").removeClass(n.listitem+"_selected").last().addClass(n.listitem+"_selected"),e=t.length?t.closest("."+n.panel):this.$pnls.children("."+n.panel).first();this.openPanel(e,!1),this.trigger("initOpened:after")},_initAnchors:function(){this.trigger("initAnchors:before");var e=this;a.$body.on(s.click+"-oncanvas","a[href]",function(i){var s=t(this),a=s.attr("href"),l=e.$menu.find(s).length,o=s.is("."+n.listitem+" > a"),d=s.is('[rel="external"]')||s.is('[target="_blank"]');if(l&&a.length>1&&"#"==a.slice(0,1))try{var c=e.$menu.find(a);if(c.is("."+n.panel))return e[s.parent().hasClass(n.listitem+"_vertical")?"togglePanel":"openPanel"](c),void i.preventDefault()}catch(t){}var h={close:null,setSelected:null,preventDefault:"#"==a.slice(0,1)};for(var p in t[r].addons){var f=t[r].addons[p].clickAnchor.call(e,s,l,o,d);if(f){if("boolean"==typeof f)return void i.preventDefault();"object"==typeof f&&(h=t.extend({},h,f))}}l&&o&&!d&&(e.__valueOrFn(s,e.opts.onClick.setSelected,h.setSelected)&&e.setSelected(t(i.target).parent()),e.__valueOrFn(s,e.opts.onClick.preventDefault,h.preventDefault)&&i.preventDefault(),e.__valueOrFn(s,e.opts.onClick.close,h.close)&&e.opts.offCanvas&&"function"==typeof e.close&&e.close())}),this.trigger("initAnchors:after")},_initMatchMedia:function(){var t=this;for(var e in this.mtch)!function(){var n=e,i=window.matchMedia(n);t._fireMatchMedia(n,i),i.addListener(function(e){t._fireMatchMedia(n,e)})}()},_fireMatchMedia:function(t,e){for(var n=e.matches?"yes":"no",i=0;i<this.mtch[t].length;i++)this.mtch[t][i][n].call(this)},_getOriginalMenuId:function(){var t=this.$menu.attr("id");return this.conf.clone&&t&&t.length&&(t=n.umm(t)),t},__api:function(){var e=this,n={};return t.each(this._api,function(t){var i=this;n[i]=function(){var t=e[i].apply(e,arguments);return void 0===t?n:t}}),n},__valueOrFn:function(t,e,n){if("function"==typeof e){var i=e.call(t[0]);if(void 0!==i)return i}return"function"!=typeof e&&void 0!==e||void 0===n?e:n},__getPanelTitle:function(e,n){var s;return"function"==typeof this.opts.navbar.title&&(s=this.opts.navbar.title.call(e[0])),void 0===s&&(s=e.data(i.title)),void 0!==s?s:"string"==typeof n?this.i18n(n):this.i18n(t[r].defaults.navbar.title)},__refactorClass:function(t,e,n){return t.filter("."+e).removeClass(e).addClass(n)},__findAddBack:function(t,e){return t.find(e).add(t.filter(e))},__childAddBack:function(t,e){return t.children(e).add(t.filter(e))},__filterListItems:function(t){return t.not("."+n.listitem+"_divider").not("."+n.hidden)},__filterListItemAnchors:function(t){return this.__filterListItems(t).children("a").not("."+n.btn+"_next")},__openPanelWoAnimation:function(t){t.hasClass(n.panel+"_noanimation")||(t.addClass(n.panel+"_noanimation"),this.__transitionend(t,function(){t.removeClass(n.panel+"_noanimation")},this.conf.openingInterval),this.openPanel(t))},__transitionend:function(t,e,n){var i=!1,a=function(n){void 0!==n&&n.target!=t[0]||(i||(t.off(s.transitionend),t.off(s.webkitTransitionEnd),e.call(t[0])),i=!0)};t.on(s.transitionend,a),t.on(s.webkitTransitionEnd,a),setTimeout(a,1.1*n)},__getUniqueId:function(){return n.mm(t[r].uniqueId++)}},t.fn[r]=function(e,l){!function(){if(t[r].glbl)return;a={$wndw:t(window),$docu:t(document),$html:t("html"),$body:t("body")},n={},i={},s={},t.each([n,i,s],function(t,e){e.add=function(t){t=t.split(" ");for(var n=0,i=t.length;n<i;n++)e[t[n]]=e.mm(t[n])}}),n.mm=function(t){return"mm-"+t},n.add("wrapper menu panels panel nopanel navbar listview nolistview listitem btn hidden"),n.umm=function(t){return"mm-"==t.slice(0,3)&&(t=t.slice(3)),t},i.mm=function(t){return"mm-"+t},i.add("parent child title"),s.mm=function(t){return t+".mm"},s.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"),t[r]._c=n,t[r]._d=i,t[r]._e=s,t[r].glbl=a}();var o=t();return this.each(function(){var n=t(this);if(!n.data(r)){var i=jQuery.extend(!0,{},t[r].defaults,e),s=jQuery.extend(!0,{},t[r].configuration,l),a=new t[r](n,i,s);a.$menu.data(r,a.__api()),o=o.add(a.$menu)}}),o},t[r].i18n=(e={},function(n,i){switch(typeof n){case"object":return"string"==typeof i&&(void 0===e[i]&&(e[i]={}),t.extend(e[i],n)),e;case"string":return"string"==typeof i&&void 0!==e[i]&&e[i][n]||n;case"undefined":default:return e}}),t[r].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:"undefined"==typeof Modernizr||void 0===Modernizr.csstransitions||Modernizr.csstransitions})}(jQuery);