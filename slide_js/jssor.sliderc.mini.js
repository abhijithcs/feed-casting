﻿(function(g,f,b,e,c,d,q){/*! Jssor */
$Jssor$=g.$Jssor$=g.$Jssor$||{};new(function(){});var m=function(){var b=this,a={};b.$On=b.addEventListener=function(b,c){if(typeof c!="function")return;if(!a[b])a[b]=[];a[b].push(c)};b.$Off=b.removeEventListener=function(e,d){var b=a[e];if(typeof d!="function")return;else if(!b)return;for(var c=0;c<b.length;c++)if(d==b[c]){b.splice(c,1);return}};b.h=function(e){var c=a[e],d=[];if(!c)return;for(var b=1;b<arguments.length;b++)d.push(arguments[b]);for(var b=0;b<c.length;b++)try{c[b].apply(g,d)}catch(f){}}},h;(function(){h=function(a,b){this.x=typeof a=="number"?a:0;this.y=typeof b=="number"?b:0};})();var l=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-l.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?l.$EaseInBounce(a*2)*.5:l.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},i={Ce:function(a){return(a&3)==1},He:function(a){return(a&3)==2},Ge:function(a){return(a&12)==4},Fe:function(a){return(a&12)==8}},r={Le:37,De:39},o,n={Me:0,Ne:1,Ie:2,Je:3,Ke:4,Be:5},z=1,v=2,x=3,w=4,y=5,j,a=new function(){var i=this,m=n.Me,j=0,s=0,T=0,B=0,fb=navigator.appName,k=navigator.userAgent;function F(){if(!m)if(fb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");m=n.Ne;s=parseFloat(k.substring(d+5,k.indexOf(";",d)));/*@cc_on T=@_jscript_version@*/;j=f.documentMode||s}else if(fb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){m=n.Ie;j=parseFloat(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");m=h>=0?n.Ke:n.Je;j=parseFloat(k.substring(i+1,a))}if(b>=0)B=parseFloat(k.substring(b+12))}else{var e=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(e){m=n.Be;j=parseFloat(e[2])}}}function r(){F();return m==z}function I(){return r()&&(j<6||f.compatMode=="BackCompat")}function Z(){F();return m==v}function O(){F();return m==x}function lb(){F();return m==w}function nb(){F();return m==y}function V(){return O()&&B>534&&B<535}function A(){return r()&&j<9}var D;function t(a){if(!D){p(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(!i.Lb(a.style[b])){D=b;return c}});D=D||"transform"}return D}function db(a){return Object.prototype.toString.call(a)}var L;function p(a,c){if(db(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(c(a[b],b,a))break}else for(var d in a)if(c(a[d],d,a))break}function ob(){if(!L){L={};p(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){L["[object "+a+"]"]=a.toLowerCase()})}return L}function C(a){return a==e?String(a):ob()[db(a)]||"object"}function eb(b,a){setTimeout(b,a||0)}function K(b,d,c){var a=!b||b=="inherit"?"":b;p(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function ab(b,a){if(j<9)b.style.filter=a}function ib(b,a,c){if(T<9){var e=b.style.filter,g=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),f=a?"progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0]+", M12="+a[0][1]+", M21="+a[1][0]+", M22="+a[1][1]+", SizingMethod='auto expand')":"",d=K(e,[g],f);ab(b,d);i.ic(b,c.y);i.gc(b,c.x)}}i.Zb=r;i.Hb=lb;i.Fb=nb;i.Ab=A;i.Z=function(){return j};i.sc=function(){return B};i.$Delay=eb;i.F=function(a){if(i.rc(a))a=f.getElementById(a);return a};i.Yb=function(a){return a?a:g.event};i.tc=function(a){a=i.Yb(a);var b=new h;if(a.type=="DOMMouseScroll"&&Z()&&j<3){b.x=a.screenX;b.y=a.screenY}else if(typeof a.pageX=="number"){b.x=a.pageX;b.y=a.pageY}else if(typeof a.clientX=="number"){b.x=a.clientX+f.body.scrollLeft+f.documentElement.scrollLeft;b.y=a.clientY+f.body.scrollTop+f.documentElement.scrollTop}return b};function G(c,d,a){if(a!=q)c.style[d]=a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&g.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,e);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function Q(b,c,a,d){if(a!=q){d&&(a+="px");G(b,c,a)}else return parseFloat(G(b,c))}function l(d,a){var b=a&2,c=a?Q:G;return function(e,a){return c(e,d,a,b)}}function kb(b){if(r()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?parseFloat(a[1])/100:1}else return parseFloat(b.style.opacity||"1")}function mb(c,a,f){if(r()&&s<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=K(h,[i],d);ab(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100}function S(g,c){var f=c.$Rotate||0,d=c.$Scale||1;if(A()){var k=i.pe(f/180*b.PI,d,d);ib(g,!f&&d==1?e:k,i.qe(k,c.jb,c.ab))}else{var h=t(g);if(h){var j="rotate("+f%360+"deg) scale("+d+")";if(a.Hb()&&B>535)j+=" perspective(2000px)";g.style[h]=j}}}i.re=function(b,a){if(V())eb(i.p(e,S,b,a));else S(b,a)};i.ye=function(b,c){var a=t(b);if(a)b.style[a+"Origin"]=c};i.ze=function(a,c){if(r()&&s<9||s<10&&I())a.style.zoom=c==1?"":c;else{var b=t(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=K(e,[g],f);a.style[b]=d}}};i.Ae=function(a){if(!a.style[t(a)]||a.style[t(a)]=="none")a.style[t(a)]="perspective(2000px)"};i.g=function(a,c,d,b){a=i.F(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.ve=function(a,c,d,b){a=i.F(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.we=function(b,a){i.g(A()?f:g,"mouseup",b,a)};i.cb=function(a){a=i.Yb(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=d};i.p=function(e,d){for(var b=[],a=2;a<arguments.length;a++)b.push(arguments[a]);var c=function(){for(var c=b.concat([]),a=0;a<arguments.length;a++)c.push(arguments[a]);return d.apply(e,c)};return c};i.xe=function(a,c){var b=f.createTextNode(c);i.vc(a);a.appendChild(b)};i.vc=function(a){a.innerHTML=""};i.hb=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function R(a,c,b,f){if(!b)b="u";for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(i.w(a,b)==c)return a;if(f){var d=R(a,c,b,f);if(d)return d}}}i.o=R;function W(a,c,d){for(a=a?a.firstChild:e;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(d){var b=W(a,c,d);if(b)return b}}}i.Ue=W;i.Se=function(b,a){return b.getElementsByTagName(a)};i.i=function(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c};i.Lb=function(a){return C(a)=="undefined"};i.Qe=function(a){return C(a)=="function"};i.Sb=Array.isArray||function(a){return C(a)=="array"};i.rc=function(a){return C(a)=="string"};i.Oe=function(a){return!isNaN(parseFloat(a))&&isFinite(a)};i.b=p;i.zb=function(a){return i.nc("DIV",a)};i.Pe=function(a){return i.nc("SPAN",a)};i.nc=function(b,a){a=a||f;return a.createElement(b)};i.T=function(){};i.wc=function(a,b){return a.getAttribute(b)};i.w=function(a,b){return i.wc(a,b)||i.wc(a,"data-"+b)};i.Te=function(b,c,a){b.setAttribute(c,a)};i.mc=function(a){return a.className};i.jc=function(b,a){b.className=a||""};i.N=function(a){return a.parentNode};i.C=function(a){i.O(a,"none")};i.r=function(a,b){i.O(a,b==d?"none":"")};i.Vb=function(b,a){b.removeAttribute(a)};i.Re=function(){return r()&&j<10};i.oe=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=K(g,f,"");a.Rb(d,e)}};i.y=function(){return+new Date};i.x=function(b,a){b.appendChild(a)};i.tb=function(c,b,a){c.insertBefore(b,a)};i.fb=function(b,a){b.removeChild(a)};i.yd=function(b,a){p(a,function(a){i.fb(b,a)})};i.xd=function(a){i.yd(a,i.hb(a))};i.rd=function(b,a){return parseInt(b,a||10)};i.oc=function(a){return parseFloat(a)};i.pc=function(b,a){var c=f.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(e){return d}return b==a};i.t=function(b,a){return b.cloneNode(a)};function N(b,a,c){a.onload=e;a.abort=e;b&&b(a,c)}i.lb=function(d,b){if(i.Fb()&&j<11.6||!d)N(b,e);else{var a=new Image;a.onload=i.p(e,N,b,a);a.onabort=i.p(e,N,b,a,c);a.src=d}};i.bd=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}a.b(e,function(b){a.lb(b.src,c)});c()};i.kc=function(d,k,j,i){if(i)d=a.t(d,c);for(var h=a.Se(d,k),f=h.length-1;f>-1;f--){var b=h[f],e=a.t(j,c);a.jc(e,a.mc(b));a.Rb(e,b.style.cssText);var g=a.N(b);a.tb(g,e,b);a.fb(g,b)}return d};var E;function qb(b){var g=this,h,e,j;function f(){var c=h;if(e)c+="dn";else if(j)c+="av";a.jc(b,c)}function k(){E.push(g);e=c;f()}g.hd=function(){e=d;f()};g.lc=function(a){j=a;f()};b=i.F(b);if(!E){i.we(function(){var a=E;E=[];p(a,function(a){a.hd()})});E=[]}h=i.mc(b);a.g(b,"mousedown",k)}i.yb=function(a){return new qb(a)};i.uc=G;i.X=l("overflow");i.Rb=l("cssText");i.k=l("top",2);i.l=l("left",2);i.e=l("width",2);i.f=l("height",2);i.gc=l("marginLeft",2);i.ic=l("marginTop",2);i.v=l("position");i.O=l("display");i.B=l("zIndex",1);i.Nb=function(b,a,c){if(a!=q)mb(b,a,c);else return kb(b)};var P={$Opacity:i.Nb,$Top:i.k,$Left:i.l,dc:i.e,cc:i.f,V:i.v,bg:i.O,$ZIndex:i.B},u;function J(){if(!u)u=i.i({dg:i.ic,cg:i.gc,$Clip:i.oe,qb:i.re},P);return u}function Y(){J();u.qb=u.qb;return u}i.fe=J;i.Ud=Y;i.Hd=function(c,b){J();var a={};p(b,function(d,b){if(P[b])a[b]=P[b](c)});return a};i.Q=function(c,b){var a=J();p(b,function(d,b){a[b]&&a[b](c,d)})};o=new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.nb=function(d,c){var a=b(d,[[c.x],[c.y]]);return new h(a[0][0],a[1][0])}};i.pe=function(d,a,c){var e=b.cos(d),f=b.sin(d);return[[e*a,-f*c],[f*a,e*c]]};i.qe=function(d,c,a){var e=o.nb(d,new h(-c/2,-a/2)),f=o.nb(d,new h(c/2,-a/2)),g=o.nb(d,new h(c/2,a/2)),i=o.nb(d,new h(-c/2,a/2));return new h(b.min(e.x,f.x,g.x,i.x)+c/2,b.min(e.y,f.y,g.y,i.y)+a/2)}};j=function(n,m,g,O,z,x){n=n||0;var f=this,r,o,p,y,A=0,C,M,L,D,j=0,t=0,E,k=n,i,h,q,u=[],B;function I(b){i+=b;h+=b;k+=b;j+=b;t+=b;a.b(u,function(a){a,a.$Shift(b)})}function N(a,b){var c=a-i+n*b;I(c);return h}function w(w,G){var n=w;if(q&&(n>=h||n<=i))n=((n-i)%q+q)%q+i;if(!E||y||G||j!=n){var p=b.min(n,h);p=b.max(p,i);if(!E||y||G||p!=t){if(x){var d=x;if(z){var s=(p-k)/(m||1);if(g.Ad&&a.Hb()&&m)s=b.round(s*m/16)/m*16;if(g.$Reverse)s=1-s;d={};for(var o in x){var R=M[o]||1,J=L[o]||[0,1],l=(s-J[0])/J[1];l=b.min(b.max(l,0),1);l=l*R;var H=b.floor(l);if(l!=H)l-=H;var Q=C[o]||C.L,I=Q(l),r,K=z[o],F=x[o];if(a.Oe(F))r=K+(F-K)*I;else{r=a.i({J:{}},z[o]);a.b(F.J,function(c,b){var a=c*I;r.J[b]=a;r[b]+=a})}d[o]=r}}if(z.$Zoom)d.qb={$Rotate:d.$Rotate||0,$Scale:d.$Zoom,jb:g.jb,ab:g.ab};if(x.$Clip&&g.$Move){var v=d.$Clip.J,D=(v.$Top||0)+(v.$Bottom||0),A=(v.$Left||0)+(v.$Right||0);d.$Left=(d.$Left||0)+A;d.$Top=(d.$Top||0)+D;d.$Clip.$Left-=A;d.$Clip.$Right-=A;d.$Clip.$Top-=D;d.$Clip.$Bottom-=D}if(d.$Clip&&a.Re()&&!d.$Clip.$Top&&!d.$Clip.$Left&&d.$Clip.$Right==g.jb&&d.$Clip.$Bottom==g.ab)d.$Clip=e;a.b(d,function(b,a){B[a]&&B[a](O,b)})}f.Db(t-k,p-k)}t=p;a.b(u,function(b,c){var a=w<j?u[u.length-c-1]:b;a.D(w,G)});var P=j,N=w;j=n;E=c;f.rb(P,N)}}function F(a,c){c&&a.sb(h,1);h=b.max(h,a.S());u.push(a)}function H(){if(r){var d=a.y(),e=b.min(d-A,a.Fb()?80:20),c=j+e*p;A=d;if(c*p>=o*p)c=o;w(c);if(!y&&c*p>=o*p)J(D);else a.$Delay(H,g.$Interval)}}function v(d,e,g){if(!r){r=c;y=g;D=e;d=b.max(d,i);d=b.min(d,h);o=d;p=o<j?-1:1;f.Tc();A=a.y();H()}}function J(a){if(r){y=r=D=d;f.Wc();a&&a()}}f.$Play=function(a,b,c){v(a?j+a:h,b,c)};f.Qc=function(b,a,c){v(b,a,c)};f.G=function(){J()};f.Nd=function(a){v(a)};f.K=function(){return j};f.Vc=function(){return o};f.Bb=function(){return t};f.D=w;f.Wb=function(){w(i,c)};f.$Move=function(a){w(j+a)};f.$IsPlaying=function(){return r};f.Ld=function(a){q=a};f.sb=N;f.$Shift=I;f.I=function(a){F(a,0)};f.Gb=function(a){F(a,1)};f.S=function(){return h};f.rb=a.T;f.Tc=a.T;f.Wc=a.T;f.Db=a.T;f.Cb=a.y();g=a.i({$Interval:15},g);q=g.Uc;B=a.i({},a.fe(),g.Sc);i=k=n;h=n+m;var M=g.$Round||{},L=g.$During||{};C=a.i({L:a.Qe(g.$Easing)&&g.$Easing||l.$EaseSwing},g.$Easing)};var s;new function(){;function n(o,ac){var k=this;function wc(){var a=this;j.call(a,-1e8,2e8);a.Cd=function(){var c=a.Bb(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{U:f,Dd:d,V:e}};a.rb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Ob(e,c);k.h(n.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function vc(){var b=this;j.call(b,0,0,{Uc:s});a.b(C,function(a){S&1&&a.Ld(s);b.Gb(a);a.$Shift(sb/Vb)})}function uc(){var a=this,b=Nb.$Elmt;j.call(a,-1,2,{$Easing:l.$EaseLinear,Sc:{V:Tb},Uc:s},b,{V:1},{V:-1});a.mb=b}function ic(o,m){var a=this,f,g,h,l,b;j.call(a,-1e8,2e8);a.Tc=function(){P=c;U=e;k.h(n.$EVT_SWIPE_START,u(x.K()),x.K())};a.Wc=function(){P=d;l=d;var a=x.Cd();k.h(n.$EVT_SWIPE_END,u(x.K()),x.K());!a.V&&yc(a.Dd,q)};a.rb=function(d,c){var a;if(l)a=b;else{a=g;if(h)a=i.$SlideEasing(c/h)*(g-f)+f}x.D(a)};a.ob=function(b,d,c,e){f=b;g=d;h=c;x.D(b);a.D(0);a.Qc(c,e)};a.Fd=function(d){l=c;b=d;a.$Play(d,e,c)};a.he=function(a){b=a};x=new wc;x.I(o);x.I(m)}function jc(){var c=this,b=Sb();a.B(b,0);c.$Elmt=b;c.pb=function(){a.C(b);a.vc(b)}}function tc(p,o){var f=this,t,w,K,x,g,y=[],V,r,X,I,P,F,l,v,h;j.call(f,-B,B+1,{});function E(a){w&&w.ac();t&&t.ac();W(p,a);F=c;t=new M.$Class(p,M,1);w=new M.$Class(p,M);w.Wb();t.Wb()}function bb(){t.Cb<M.Cb&&E()}function L(o,q,m){if(!I){I=c;if(g&&m){var e=m.width,b=m.height,l=e,j=b;if(e&&b&&i.$FillMode){if(i.$FillMode&3&&(!(i.$FillMode&4)||e>J||b>H)){var h=d,p=J/H*b/e;if(i.$FillMode&1)h=p>1;else if(i.$FillMode&2)h=p<1;l=h?e*H/b:J;j=h?H:b*J/e}a.e(g,l);a.f(g,j);a.k(g,(H-j)/2);a.l(g,(J-l)/2)}a.v(g,"absolute");k.h(n.$EVT_LOAD_END,Yb)}}a.C(q);o&&o(f)}function Y(b,c,d,e){if(e==U&&q==o&&Q)if(!xc){var a=u(b);z.Rd(a,o,c,f,d);c.ge();Z.sb(a,1);Z.D(a);A.ob(b,b,0)}}function eb(b){if(b==U&&q==o){if(!l){var a=e;if(z)if(z.U==o)a=z.Kd();else z.pb();bb();l=new rc(o,a,f.je(),f.me());l.Kc(h)}!l.$IsPlaying()&&l.Xb()}}function S(d,c){if(d==o){if(d!=c)C[c]&&C[c].ne();h&&h.$Enable();var k=U=a.y();f.lb(a.p(e,eb,k))}else{var j=b.abs(o-d),g=B+i.$LazyLoading;(!P||j<=g||s-j<=g)&&f.lb()}}function fb(){if(q==o&&l){l.G();h&&h.$Quit();h&&h.$Disable();l.Ic()}}function gb(){q==o&&l&&l.G()}function O(b){if(T)a.cb(b);else k.h(n.$EVT_CLICK,o,b)}function N(){h=v.pInstance;l&&l.Kc(h)}f.lb=function(d,b){b=b||x;if(y.length&&!I){a.r(b);if(!X){X=c;k.h(n.$EVT_LOAD_START);a.b(y,function(b){if(!b.src){b.src=a.w(b,"src2");a.O(b,b["display-origin"])}})}a.bd(y,g,a.p(e,L,d,b))}else L(d,b)};f.Wd=function(){if(z){var b=z.Qd(s);if(b){var f=U=a.y(),c=o+1,d=C[u(c)];return d.lb(a.p(e,Y,c,d,b,f),x)}}ab(q+i.$AutoPlaySteps)};f.Ob=function(){S(o,o)};f.ne=function(){h&&h.$Quit();h&&h.$Disable();f.Fc();l&&l.ce();l=e;E()};f.ge=function(){a.C(p)};f.Fc=function(){a.r(p)};f.de=function(){h&&h.$Enable()};function W(b,f,e){if(b["jssor-slider"])return;e=e||0;if(!F){if(b.tagName=="IMG"){y.push(b);if(!b.src){P=c;b["display-origin"]=a.O(b);a.C(b)}}a.Ab()&&a.B(b,(a.B(b)||0)+1);if(i.$HWA&&a.sc()>0)(!G||a.sc()<534||!db)&&a.Ae(b)}var h=a.hb(b);a.b(h,function(h){var j=a.w(h,"u");if(j=="player"&&!v){v=h;if(v.pInstance)N();else a.g(v,"dataavailable",N)}if(j=="caption"){if(!a.Zb()&&!f){var i=a.t(h,c);a.tb(b,i,h);a.fb(b,h);h=i;f=c}}else if(!F&&!e&&!g&&a.w(h,"u")=="image"){g=h;if(g){if(g.tagName=="A"){V=g;a.Q(V,R);r=a.t(g,d);a.g(r,"click",O);a.Q(r,R);a.O(r,"block");a.Nb(r,0);a.uc(r,"backgroundColor","#000");g=a.Ue(g,"IMG")}g.border=0;a.Q(g,R)}}W(h,f,e+1)})}f.Db=function(c,b){var a=B-b;Tb(K,a)};f.je=function(){return t};f.me=function(){return w};f.U=o;m.call(f);var D=a.o(p,"thumb");if(D){f.be=a.t(D,c);a.Vb(D,"id");a.C(D)}a.r(p);x=a.t(cb,c);a.B(x,1e3);a.g(p,"click",O);E(c);f.Cc=g;f.Hc=r;f.mb=K=p;a.x(K,x);k.$On(203,S);k.$On(22,gb);k.$On(24,fb)}function rc(g,r,v,u){var b=this,m=0,x=0,o,h,e,f,l,s,w,t,p=C[g];j.call(b,0,0);function y(){a.xd(N);Zb&&l&&p.Hc&&a.x(N,p.Hc);a.r(N,l||!p.Cc)}function A(){if(s){s=d;k.h(n.$EVT_ROLLBACK_END,g,e,m,h,e,f);b.D(h)}b.Xb()}function B(a){t=a;b.G();b.Xb()}b.Xb=function(){var a=b.Bb();if(!I&&!P&&!t&&q==g){if(!a){if(o&&!l){l=c;b.Ic(c);k.h(n.$EVT_SLIDESHOW_START,g,m,x,o,f)}y()}var d,j=n.$EVT_STATE_CHANGE;if(a!=f)if(a==e)d=f;else if(a==h)d=e;else if(!a)d=h;else if(a>e){s=c;d=e;j=n.$EVT_ROLLBACK_START}else d=b.Vc();k.h(j,g,a,m,h,e,f);var i=Q&&(!Qb||Y);if(a==f)i&&p.Wd();else(i||a!=e)&&b.Qc(d,A)}};b.ce=function(){z&&z.U==g&&z.pb();var a=b.Bb();a<f&&k.h(n.$EVT_STATE_CHANGE,g,-a-1,m,h,e,f)};b.Ic=function(b){r&&a.X(gb,b&&r.bb.$Outside?"":"hidden")};b.Db=function(b,a){if(l&&a>=o){l=d;y();p.Fc();z.pb();k.h(n.$EVT_SLIDESHOW_END,g,m,x,o,f)}k.h(n.$EVT_PROGRESS_CHANGE,g,a,m,h,e,f)};b.Kc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.Md,B)}};r&&b.Gb(r);o=b.S();b.S();b.Gb(v);h=v.S();e=h+i.$AutoPlayInterval;u.$Shift(e);b.I(u);f=b.S()}function Tb(c,g){var f=w>0?w:i.$PlayOrientation,d=b.round(xb*g*(f&1)),e=b.round(yb*g*(f>>1&1));if(a.Zb()&&a.Z()>=10&&a.Z()<11)c.style.msTransform="translate("+d+"px, "+e+"px)";else if(a.Hb()&&a.Z()>=30&&a.Z()<34){c.style.WebkitTransition="transform 0s";c.style.WebkitTransform="translate3d("+d+"px, "+e+"px, 0px) perspective(2000px)"}else{a.l(c,d);a.k(c,e)}}function pc(a){T=0;!K&&mc()&&oc(a)}function oc(b){mb=P;I=c;wb=d;U=e;a.g(f,kb,Wb);a.y();Fb=A.Vc();A.G();if(!mb)w=0;if(G){var h=b.touches[0];qb=h.clientX;rb=h.clientY}else{var g=a.tc(b);qb=g.x;rb=g.y;a.cb(b)}E=0;bb=0;fb=0;D=x.K();k.h(n.$EVT_DRAG_START,u(D),D,b)}function Wb(e){if(I&&(!a.Ab()||e.button)){var f;if(G){var n=e.touches;if(n&&n.length>0)f=new h(n[0].clientX,n[0].clientY)}else f=a.tc(e);if(f){var l=f.x-qb,m=f.y-rb;if(b.floor(D)!=D)w=w||i.$PlayOrientation&K;if((l||m)&&!w){if(K==3)if(b.abs(m)>b.abs(l))w=2;else w=1;else w=K;if(G&&w==1&&b.abs(m)-b.abs(l)>3)wb=c}if(w){var d=m,k=yb;if(w==1){d=l;k=xb}if(!(S&1)){if(d>0){var g=k*q,j=d-g;if(j>0)d=g+b.sqrt(j)*5}if(d<0){var g=k*(s-B-q),j=-d-g;if(j>0)d=-g-b.sqrt(j)*5}}if(E-bb<-2)fb=1;else if(E-bb>2)fb=0;bb=E;E=d;ob=D-E/k/(jb||1);if(E&&w&&!wb){a.cb(e);if(!P)A.Fd(ob);else A.he(ob)}else a.Ab()&&a.cb(e)}}}else Bb(e)}function Bb(h){kc();if(I){I=d;a.y();a.ve(f,kb,Wb);T=E;T&&a.cb(h);A.G();var e=x.K();k.h(n.$EVT_DRAG_END,u(e),e,u(D),D,h);var c=b.floor(D);if(b.abs(E)>=i.$MinDragOffsetToSlide){c=b.floor(e);c+=fb}if(!(S&1))c=b.min(s-B,b.max(c,0));var g=b.abs(c-e);g=1-b.pow(1-g,5);if(!T&&mb)A.Nd(Fb);else if(e==c){pb.de();pb.Ob()}else A.ob(e,c,g*Pb)}}function hc(a){C[q];q=u(a);pb=C[q];Ob(a);return q}function yc(a,b){w=0;hc(a);k.h(n.$EVT_PARK,u(a),b)}function Ob(b,c){ub=b;a.b(O,function(a){a.Kb(u(b),b,c)})}function mc(){var b=n.Jc||0,a=i.$DragOrientation;if(G)a&1&&(a&=1);n.Jc|=a;return K=a&~b}function kc(){if(K){n.Jc&=~i.$DragOrientation;K=0}}function Sb(){var b=a.zb();a.Q(b,R);a.v(b,"absolute");return b}function u(a){return(a%s+s)%s}function ec(a,c){if(c)if(!S){a=b.min(b.max(a+ub,0),s-1);c=d}else if(S&2){a=u(a+ub);c=d}ab(a,i.$SlideDuration,c)}function vb(){a.b(O,function(a){a.Tb(a.wb.$ChanceToShow>Y)})}function cc(b){b=a.Yb(b);var c=b.target?b.target:b.srcElement,d=b.relatedTarget?b.relatedTarget:b.toElement;if(!a.pc(o,c)||a.pc(o,d))return;Y=1;vb();C[q].Ob()}function bc(){Y=0;vb()}function dc(){R={dc:J,cc:H,$Top:0,$Left:0};a.b(W,function(b){a.Q(b,R);a.v(b,"absolute");a.X(b,"hidden");a.C(b)});a.Q(cb,R)}function hb(b,a){ab(b,a,c)}function ab(h,g,l){if(Lb&&(!I||i.$NaviQuitDrag)){P=c;I=d;A.G();if(a.Lb(g))g=Pb;var f=Cb.Bb(),e=h;if(l){e=f+h;if(h>0)e=b.ceil(e);else e=b.floor(e)}if(!(S&1)){e=u(e);e=b.max(0,b.min(e,s-B))}var k=(e-f)%s;e=f+k;var j=f==e?0:g*b.abs(k);j=b.min(j,g*B*1.5);A.ob(f,e,j||1)}}k.$PlayTo=ab;k.$GoTo=function(a){ab(a,1)};k.$Next=function(){hb(1)};k.$Prev=function(){hb(-1)};k.$Pause=function(){Q=d};k.$Play=function(){if(!Q){Q=c;C[q]&&C[q].Ob()}};k.$SetSlideshowTransitions=function(a){i.$SlideshowOptions.$Transitions=a};k.$SetCaptionTransitions=function(b){M.$CaptionTransitions=b;M.Cb=a.y()};k.$SlidesCount=function(){return W.length};k.$CurrentIndex=function(){return q};k.$IsAutoPlaying=function(){return Q};k.$IsDragging=function(){return I};k.$IsSliding=function(){return P};k.$IsMouseOver=function(){return!Y};k.$LastDragSucceded=function(){return T};k.$GetOriginalWidth=function(){return a.e(v||o)};k.$GetOriginalHeight=function(){return a.f(v||o)};k.$GetScaleWidth=function(){return a.e(o)};k.$GetScaleHeight=function(){return a.f(o)};k.$SetScaleWidth=function(c){if(!v){var b=a.t(o,d);a.Vb(b,"id");a.v(b,"relative");a.k(b,0);a.l(b,0);a.X(b,"visible");v=a.t(o,d);a.Vb(v,"id");a.Rb(v,"");a.v(v,"absolute");a.k(v,0);a.l(v,0);a.e(v,a.e(o));a.f(v,a.f(o));a.ye(v,"0 0");a.x(v,b);var f=a.hb(o);a.x(o,v);var e={navigator:X&&X.$Scale==d,arrowleft:L&&L.$Scale==d,arrowright:L&&L.$Scale==d,thumbnavigator:F&&F.$Scale==d,thumbwrapper:F&&F.$Scale==d};a.b(f,function(c){a.x(e[a.w(c,"u")]?o:b,c)});a.r(b);a.r(v)}jb=c/a.e(v);a.ze(v,jb);a.e(o,c);a.f(o,jb*a.f(v));a.b(O,function(a){a.Qb()})};k.yc=function(a){var d=b.ceil(u(sb/Vb)),c=u(a-q+d);if(c>B){if(a-q>s/2)a-=s;else if(a-q<=-s/2)a+=s}else a=q+c-d;return a};m.call(this);k.$Elmt=o=a.F(o);var i=a.i({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:d,$Loop:1,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:l.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},ac),eb=i.$SlideshowOptions,M=a.i({$Class:t,$PlayInMode:1,$PlayOutMode:1},i.$CaptionSliderOptions),X=i.$BulletNavigatorOptions,L=i.$ArrowNavigatorOptions,F=i.$ThumbnailNavigatorOptions,V=i.$UISearchMode,v,y=a.o(o,"slides",e,V),cb=a.o(o,"loading",e,V)||a.zb(f),Hb=a.o(o,"navigator",e,V),Xb=a.o(o,"arrowleft",e,V),Ub=a.o(o,"arrowright",e,V),Eb=a.o(o,"thumbnavigator",e,V),gc=a.e(y),fc=a.f(y),R,W=[],qc=a.hb(y);a.b(qc,function(b){b.tagName=="DIV"&&!a.w(b,"u")&&W.push(b)});var q=-1,ub,pb,s=W.length,J=i.$SlideWidth||gc,H=i.$SlideHeight||fc,Rb=i.$SlideSpacing,xb=J+Rb,yb=H+Rb,Vb=i.$PlayOrientation==1?xb:yb,B=b.min(i.$DisplayPieces,s),gb,w,K,wb,G,O=[],Kb,Mb,Jb,Zb,xc,Q,Qb=i.$PauseOnHover,Pb=i.$SlideDuration,nb,db,sb,Lb=B<s,S=Lb?i.$Loop:0;if(!(S&1))i.$ParkingPosition=0;if(i.$DisplayPieces>1||i.$ParkingPosition)i.$DragOrientation&=i.$PlayOrientation;var nc=i.$DragOrientation,T,Y=1,P,I,U,qb=0,rb=0,E,bb,fb,Cb,x,Z,A,Nb=new jc,jb;Q=i.$AutoPlay;k.wb=ac;dc();o["jssor-slider"]=c;a.B(y,a.B(y)||0);a.v(y,"absolute");gb=a.t(y);a.tb(a.N(y),gb,y);if(eb){Zb=eb.$ShowLink;nb=eb.$Class;db=B==1&&s>1&&nb&&(!a.Zb()||a.Z()>=8)}sb=db||B>=s?0:i.$ParkingPosition;var tb=y,C=[],z,N,Ab="mousedown",kb="mousemove",Db="mouseup",ib,D,mb,Fb,ob;if(g.navigator.msPointerEnabled){Ab="MSPointerDown";kb="MSPointerMove";Db="MSPointerUp";ib="MSPointerCancel";if(i.$DragOrientation){var zb="none";if(i.$DragOrientation==1)zb="pan-y";else if(i.$DragOrientation==2)zb="pan-x";a.Te(tb.style,"-ms-touch-action",zb)}}else if("ontouchstart"in g||"createTouch"in f){G=c;Ab="touchstart";kb="touchmove";Db="touchend";ib="touchcancel"}Z=new uc;if(db)z=new nb(Nb,J,H,eb,G);a.x(gb,Z.mb);a.X(y,"hidden");N=Sb();a.uc(N,"backgroundColor","#000");a.Nb(N,0);a.tb(tb,N,tb.firstChild);for(var lb=0;lb<W.length;lb++){var sc=W[lb],Yb=new tc(sc,lb);C.push(Yb)}a.C(cb);Cb=new vc;A=new ic(Cb,Z);if(nc){a.g(y,Ab,pc);a.g(f,Db,Bb);ib&&a.g(f,ib,Bb)}Qb&=G?2:1;if(Hb&&X){Kb=new X.$Class(Hb,X);O.push(Kb)}if(L&&Xb&&Ub){Mb=new L.$Class(Xb,Ub,L);O.push(Mb)}if(Eb&&F){F.$StartIndex=i.$StartIndex;Jb=new F.$Class(Eb,F);O.push(Jb)}a.b(O,function(a){a.Mb(s,C,cb);a.$On(p.xb,ec)});k.$SetScaleWidth(k.$GetOriginalWidth());a.g(o,"mouseout",cc);a.g(o,"mouseover",bc);vb();i.$ArrowKeyNavigation&&a.g(f,"keydown",function(a){if(a.keyCode==r.Le)hb(-1);else a.keyCode==r.De&&hb(1)});A.ob(i.$StartIndex,i.$StartIndex,0)}n.$EVT_CLICK=21;n.$EVT_DRAG_START=22;n.$EVT_DRAG_END=23;n.$EVT_SWIPE_START=24;n.$EVT_SWIPE_END=25;n.$EVT_LOAD_START=26;n.$EVT_LOAD_END=27;n.$EVT_POSITION_CHANGE=202;n.$EVT_PARK=203;n.$EVT_SLIDESHOW_START=206;n.$EVT_SLIDESHOW_END=207;n.$EVT_PROGRESS_CHANGE=208;n.$EVT_STATE_CHANGE=209;n.$EVT_ROLLBACK_START=210;n.$EVT_ROLLBACK_END=211;g.$JssorSlider$=s=n};var p={xb:1};g.$JssorBulletNavigator$=function(f,D){var h=this;m.call(h);f=a.F(f);var t,u,s,r,l=0,g,n,k,y,z,j,i,q,o,C=[],A=[];function x(a){a!=-1&&A[a].lc(a==l)}function v(a){h.h(p.xb,a*n)}h.$Elmt=f;h.Kb=function(a){if(a!=r){var d=l,c=b.floor(a/n);l=c;r=a;x(d);x(c)}};h.Tb=function(b){a.r(f,b)};var B;h.Qb=function(){if(!B||g.$Scale==d){g.$AutoCenter&1&&a.l(f,(a.e(a.N(f))-u)/2);g.$AutoCenter&2&&a.k(f,(a.f(a.N(f))-s)/2);B=c}};var w;h.Mb=function(D){if(!w){t=b.ceil(D/n);l=0;var p=q+y,r=o+z,m=b.ceil(t/k)-1;u=q+p*(!j?m:k-1);s=o+r*(j?m:k-1);a.e(f,u);a.f(f,s);for(var d=0;d<t;d++){var B=a.Pe();a.xe(B,d+1);var h=a.kc(i,"NumberTemplate",B,c);a.v(h,"absolute");var x=d%(m+1);a.l(h,!j?p*x:d%k*p);a.k(h,j?r*x:b.floor(d/(m+1))*r);a.x(f,h);C[d]=h;g.$ActionMode&1&&a.g(h,"click",a.p(e,v,d));g.$ActionMode&2&&a.g(h,"mouseover",a.p(e,v,d));A[d]=a.yb(h)}w=c}};h.wb=g=a.i({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},D);i=a.o(f,"prototype");q=a.e(i);o=a.f(i);a.fb(f,i);n=g.$Steps||1;k=g.$Lanes||1;y=g.$SpacingX;z=g.$SpacingY;j=g.$Orientation-1};g.$JssorArrowNavigator$=function(b,g,s){var f=this;m.call(f);var h,j,q=a.N(b),o=a.e(b),l=a.f(b);function k(a){f.h(p.xb,a,c)}f.Kb=function(b,a,c){if(c);};f.Tb=function(c){a.r(b,c);a.r(g,c)};var r;f.Qb=function(){if(!r||h.$Scale==d){var f=a.e(q),e=a.f(q);if(h.$AutoCenter&1){a.l(b,(f-o)/2);a.l(g,(f-o)/2)}if(h.$AutoCenter&2){a.k(b,(e-l)/2);a.k(g,(e-l)/2)}r=c}};var n;f.Mb=function(d){if(!n){a.g(b,"click",a.p(e,k,-j));a.g(g,"click",a.p(e,k,j));a.yb(b);a.yb(g);n=c}};f.wb=h=a.i({$Steps:1},s);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,l,e,u=[],y,w,f,n,o,t,r,k,q,g,j;m.call(h);i=a.F(i);function z(n,d){var g=this,b,m,k;function o(){m.lc(l==d)}function i(){if(!q.$LastDragSucceded()){var a=(f-d%f)%f,b=q.yc((d+a)/f),c=b*f-a;h.h(p.xb,c)}}g.U=d;g.Oc=o;k=n.be||n.Cc||a.zb();g.mb=b=a.kc(j,"ThumbnailTemplate",k,c);m=a.yb(b);e.$ActionMode&1&&a.g(b,"click",i);e.$ActionMode&2&&a.g(b,"mouseover",i)}h.Kb=function(c,d,e){var a=l;l=c;a!=-1&&u[a].Oc();u[c].Oc();!e&&q.$PlayTo(q.yc(b.floor(d/f)))};h.Tb=function(b){a.r(i,b)};h.Qb=a.T;var v;h.Mb=function(F,D){if(!v){x=F;b.ceil(x/f);l=-1;k=b.min(k,D.length);var h=e.$Orientation&1,p=t+(t+n)*(f-1)*(1-h),m=r+(r+o)*(f-1)*h,C=p+(p+n)*(k-1)*h,A=m+(m+o)*(k-1)*(1-h);a.v(g,"absolute");a.X(g,"hidden");e.$AutoCenter&1&&a.l(g,(y-C)/2);e.$AutoCenter&2&&a.k(g,(w-A)/2);a.e(g,C);a.f(g,A);var j=[];a.b(D,function(l,e){var i=new z(l,e),d=i.mb,c=b.floor(e/f),k=e%f;a.l(d,(t+n)*k*(1-h));a.k(d,(r+o)*k*h);if(!j[c]){j[c]=a.zb();a.x(g,j[c])}a.x(j[c],d);u.push(i)});var E=a.i({$AutoPlay:d,$NaviQuitDrag:d,$SlideWidth:p,$SlideHeight:m,$SlideSpacing:n*h+o*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$PlayOrientation:e.$Orientation,$DragOrientation:e.$DisableDrag?0:e.$Orientation},e);q=new s(i,E);v=c}};h.wb=e=a.i({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.e(i);w=a.f(i);g=a.o(i,"slides");j=a.o(g,"prototype");t=a.e(j);r=a.f(j);a.fb(g,j);f=e.$Lanes||1;n=e.$SpacingX;o=e.$SpacingY;k=e.$DisplayPieces};function t(){j.call(this,0,0);this.ac=a.T}g.$JssorCaptionSlider$=function(p,k,g){var d=this,h,f=k.$CaptionTransitions,o={bb:"t",$Delay:"d",$Duration:"du",$ScaleHorizontal:"x",$ScaleVertical:"y",$Rotate:"r",$Zoom:"z",$Opacity:"f",R:"b"},e={L:function(b,a){if(!isNaN(a.M))b=a.M;else b*=a.Yc;return b},$Opacity:function(b,a){return this.L(b-1,a)}};e.$Zoom=e.$Opacity;j.call(d,0,0);function m(r,n){var l=[],i,j=[],c=[];function h(c,d){var b={};a.b(o,function(g,h){var e=a.w(c,g+(d||""));if(e){var f={};if(g=="t")f.M=e;else if(e.indexOf("%")+1)f.Yc=a.oc(e)/100;else f.M=a.oc(e);b[h]=f}});return b}function p(){return f[b.floor(b.random()*f.length)]}function d(g){var h;if(g=="*")h=p();else if(g){var e=f[a.rd(g)]||f[g];if(a.Sb(e)){if(g!=i){i=g;c[g]=0;j[g]=e[b.floor(b.random()*e.length)]}else c[g]++;e=j[g];if(a.Sb(e)){e=e.length&&e[c[g]%e.length];if(a.Sb(e))e=e[b.floor(b.random()*e.length)]}}h=e;if(a.rc(h))h=d(h)}return h}var q=a.hb(r);a.b(q,function(b){var c=[];c.$Elmt=b;var f=a.w(b,"u")=="caption";a.b(g?[0,3]:[2],function(o,p){if(f){var l,i;if(o!=2||!a.w(b,"t3")){i=h(b,o);if(o==2&&!i.bb){i.$Delay=i.$Delay||{M:0};i=a.i(h(b,0),i)}}if(i&&i.bb){l=d(i.bb.M);if(l){var j=a.i({$Delay:0,$ScaleHorizontal:1,$ScaleVertical:1},l);a.b(i,function(c,a){var b=(e[a]||e.L).apply(e,[j[a],i[a]]);if(!isNaN(b))j[a]=b});if(!p)if(i.R)j.R=i.R.M||0;else if((g?k.$PlayInMode:k.$PlayOutMode)&2)j.R=0}}c.push(j)}if(n%2&&!p)c.dd=m(b,n+1)});l.push(c)});return l}function n(E,d,F){var h={$Easing:d.$Easing,$Round:d.$Round,$During:d.$During,$Reverse:g&&!F,Ad:c},k=E,y=a.N(E),o=a.e(k),n=a.f(k),u=a.e(y),t=a.f(y),f={},l={},m=d.$ScaleClip||1;if(d.$Opacity)f.$Opacity=2-d.$Opacity;h.jb=o;h.ab=n;if(d.$Zoom||d.$Rotate){f.$Zoom=d.$Zoom?d.$Zoom-1:1;if(a.Ab()||a.Fb())f.$Zoom=b.min(f.$Zoom,2);l.$Zoom=1;var s=d.$Rotate||0;if(s==c)s=1;f.$Rotate=s*360;l.$Rotate=0}else if(d.$Clip){var z={$Top:0,$Right:o,$Bottom:n,$Left:0},D=a.i({},z),e=D.J={},C=d.$Clip&4,v=d.$Clip&8,A=d.$Clip&1,x=d.$Clip&2;if(C&&v){e.$Top=n/2*m;e.$Bottom=-e.$Top}else if(C)e.$Bottom=-n*m;else if(v)e.$Top=n*m;if(A&&x){e.$Left=o/2*m;e.$Right=-e.$Left}else if(A)e.$Right=-o*m;else if(x)e.$Left=o*m;h.$Move=d.$Move;f.$Clip=D;l.$Clip=z}var p=d.$FlyDirection,q=0,r=0,w=d.$ScaleHorizontal,B=d.$ScaleVertical;if(i.Ce(p))q-=u*w;else if(i.He(p))q+=u*w;if(i.Ge(p))r-=t*B;else if(i.Fe(p))r+=t*B;if(q||r||h.$Move){f.$Left=q+a.l(k);f.$Top=r+a.k(k)}var G=d.$Duration;l=a.i(l,a.Hd(k,f));h.Sc=a.Ud();return new j(d.$Delay,G,h,k,l,f)}function l(b,c){a.b(c,function(c){var f,i=c.$Elmt,e=c[0],j=c[1];if(e){f=n(i,e);b=f.sb(a.Lb(e.R)?b:e.R,1)}b=l(b,c.dd);if(j){var g=n(i,j,1);g.sb(b,1);d.I(g);h.I(g)}f&&d.I(f)});return b}d.ac=function(){d.D(d.S()*(g||0));h.Wb()};h=new j(0,0);l(0,m(p,1))}})(window,document,Math,null,true,false)