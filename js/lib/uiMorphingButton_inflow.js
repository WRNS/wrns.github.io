;(function(window){'use strict';var transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'},transEndEventName=transEndEventNames[Modernizr.prefixed('transition')],support={transitions:Modernizr.csstransitions};function extend(a,b){for(var key in b){if(b.hasOwnProperty(key)){a[key]=b[key];}}
return a;}
function UIMorphingButton(el,options){this.el=el;this.options=extend({},this.options);extend(this.options,options);this._init();}
UIMorphingButton.prototype.options={closeEl:'',onBeforeOpen:function(){return false;},onAfterOpen:function(){return false;},onBeforeClose:function(){return false;},onAfterClose:function(){return false;}}
UIMorphingButton.prototype._init=function(){this.elH=this.el.offsetHeight;this.button=this.el.querySelector('button');this.expanded=false;this.contentEl=this.el.querySelector('.morph-content');this._initEvents();}
UIMorphingButton.prototype._initEvents=function(){var self=this;this.button.addEventListener('click',function(){self.toggle();});if(this.options.closeEl!==''){var closeEl=this.el.querySelector(this.options.closeEl);if(closeEl){closeEl.addEventListener('click',function(){self.toggle();});}}}
UIMorphingButton.prototype.toggle=function(){if(this.isAnimating)return false;if(this.expanded){this.options.onBeforeClose();}
else{classie.addClass(this.el,'active');this.options.onBeforeOpen();}
this.isAnimating=true;var self=this,onEndTransitionFn=function(ev){if(ev.target!==this)return false;if(support.transitions){this.removeEventListener(transEndEventName,onEndTransitionFn);}
self.isAnimating=false;if(self.expanded){classie.removeClass(self.el,'active');self.options.onAfterClose();}
else{self.options.onAfterOpen();}
self.expanded=!self.expanded;};if(support.transitions){this.el.addEventListener(transEndEventName,onEndTransitionFn);}
else{onEndTransitionFn();}
this.el.style.height=this.expanded?this.elH+'px':this.contentEl.offsetHeight+'px';if(this.expanded){classie.removeClass(this.el,'open');}
else{classie.addClass(this.el,'open');}}
window.UIMorphingButton=UIMorphingButton;})(window);