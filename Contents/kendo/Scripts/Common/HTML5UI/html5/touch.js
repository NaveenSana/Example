(function(b,a){a("kendo.touch",["kendo.core","kendo.userevents"],b);
}(function(){var a={id:"touch",name:"Touch",category:"mobile",description:"The kendo Touch widget provides a cross-platform compatible API for handling user-initiated touch events, multi-touch gestures and event sequences (drag, swipe, etc.). ",depends:["core","userevents"]};
(function(b,h){var d=window.kendo,i=d.ui.Widget,f=b.proxy,c=Math.abs,e=20;
var g=i.extend({init:function(j,m){var n=this;
i.fn.init.call(n,j,m);
m=n.options;
j=n.element;
n.wrapper=j;
function k(o){return function(p){n._triggerTouch(o,p);
};
}function l(o){return function(p){n.trigger(o,{touches:p.touches,distance:p.distance,center:p.center,event:p.event});
};
}n.events=new d.UserEvents(j,{filter:m.filter,surface:m.surface,minHold:m.minHold,multiTouch:m.multiTouch,allowSelection:true,fastTap:m.fastTap,press:k("touchstart"),hold:k("hold"),tap:f(n,"_tap"),gesturestart:l("gesturestart"),gesturechange:l("gesturechange"),gestureend:l("gestureend")});
if(m.enableSwipe){n.events.bind("start",f(n,"_swipestart"));
n.events.bind("move",f(n,"_swipemove"));
}else{n.events.bind("start",f(n,"_dragstart"));
n.events.bind("move",k("drag"));
n.events.bind("end",k("dragend"));
}d.notify(n);
},events:["touchstart","dragstart","drag","dragend","tap","doubletap","hold","swipe","gesturestart","gesturechange","gestureend"],options:{name:"Touch",surface:null,global:false,fastTap:false,filter:null,multiTouch:false,enableSwipe:false,minXDelta:30,maxYDelta:20,maxDuration:1000,minHold:800,doubleTapTimeout:800},cancel:function(){this.events.cancel();
},destroy:function(){this.events.destroy();
},_triggerTouch:function(k,j){if(this.trigger(k,{touch:j.touch,event:j.event})){j.preventDefault();
}},_tap:function(j){var l=this,k=l.lastTap,m=j.touch;
if(k&&m.endTime-k.endTime<l.options.doubleTapTimeout&&d.touchDelta(m,k).distance<e){l._triggerTouch("doubletap",j);
l.lastTap=null;
}else{l._triggerTouch("tap",j);
l.lastTap=m;
}},_dragstart:function(j){this._triggerTouch("dragstart",j);
},_swipestart:function(j){if(c(j.x.velocity)*2>=c(j.y.velocity)){j.sender.capture();
}},_swipemove:function(l){var n=this,m=n.options,o=l.touch,k=l.event.timeStamp-o.startTime,j=o.x.initialDelta>0?"right":"left";
if(c(o.x.initialDelta)>=m.minXDelta&&c(o.y.initialDelta)<m.maxYDelta&&k<m.maxDuration){n.trigger("swipe",{direction:j,touch:l.touch});
o.cancel();
}}});
d.ui.plugin(g);
}(window.kendo.jQuery));
return window.kendo;
},typeof define=="function"&&define.amd?define:function(a,b,c){(c||b)();
}));
