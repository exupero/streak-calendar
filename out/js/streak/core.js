// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('streak.core');
goog.require('cljs.core');
goog.require('vdom.elm');
goog.require('cljsjs.vdom');
goog.require('cljsjs.d3');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
streak.core.day = d3.time.format("%w");
streak.core.week = d3.time.format("%U");
streak.core.month = d3.time.format("%B");
streak.core.month_path = (function streak$core$month_path(t0){
var t1 = (new Date(t0.getFullYear(),(t0.getMonth() + (1)),(0)));
var d0 = parseInt(streak.core.day.call(null,t0));
var w0 = parseInt(streak.core.week.call(null,t0));
var d1 = parseInt(streak.core.day.call(null,t1));
var w1 = parseInt(streak.core.week.call(null,t1));
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",d0,w0,"H",(7),"V",w1,"H",(d1 + (1)),"V",(w1 + (1)),"H",(0),"V",(w0 + (1)),"H",d0,"Z"], null);
});
streak.core.scale = (function streak$core$scale(ps,x){
return cljs.core.map.call(null,(function (p1__13147_SHARP_){
if(typeof p1__13147_SHARP_ === 'number'){
return (x * p1__13147_SHARP_);
} else {
return p1__13147_SHARP_;
}
}),ps);
});
streak.core.path = (function streak$core$path(ps){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,ps,cljs.core.repeat.call(null," ")));
});
streak.core.spy = (function streak$core$spy(x){
cljs.core.println.call(null,x);

return x;
});
streak.core.ui = (function streak$core$ui(actions){
return (function (p__13162){
var map__13163 = p__13162;
var map__13163__$1 = ((cljs.core.seq_QMARK_.call(null,map__13163))?cljs.core.apply.call(null,cljs.core.hash_map,map__13163):map__13163);
var year = cljs.core.get.call(null,map__13163__$1,new cljs.core.Keyword(null,"year","year",335913393));
var width = (164);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"download",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"download","download",-300081668))], null),"Download"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"decrement-year",new cljs.core.Keyword(null,"className","className",-1983287057),"change-year",new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"previous-year","previous-year",1794338910))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"increment-year",new cljs.core.Keyword(null,"className","className",-1983287057),"change-year",new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"next-year","next-year",-1541587170))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"calendar",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null),(function (){var start = (new Date(year,(0),(1)));
var stop = (new Date((year + (1)),(0),(1)));
var size = (18);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1,1)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str(((14) + (size * (7)))),cljs.core.str(",0) rotate(90)")].join(''),new cljs.core.Keyword(null,"dy","dy",1719547243),(-5)], null),year], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4936__auto__ = ((function (start,stop,size,width,map__13163,map__13163__$1,year){
return (function streak$core$ui_$_iter__13164(s__13165){
return (new cljs.core.LazySeq(null,((function (start,stop,size,width,map__13163,map__13163__$1,year){
return (function (){
var s__13165__$1 = s__13165;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13165__$1);
if(temp__4126__auto__){
var s__13165__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13165__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__13165__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__13167 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__13166 = (0);
while(true){
if((i__13166 < size__4935__auto__)){
var m = cljs.core._nth.call(null,c__4934__auto__,i__13166);
var d = (new Date(year,m,(1)));
var offset = (((parseInt(streak.core.day.call(null,d)) === (0)))?cljs.core.identity:cljs.core.inc);
cljs.core.chunk_append.call(null,b__13167,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str((offset.call(null,parseInt(streak.core.week.call(null,d))) * size)),cljs.core.str(") rotate(-90)")].join(''),new cljs.core.Keyword(null,"dy","dy",1719547243),(12),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null),streak.core.month.call(null,d)], null));

var G__13176 = (i__13166 + (1));
i__13166 = G__13176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13167),streak$core$ui_$_iter__13164.call(null,cljs.core.chunk_rest.call(null,s__13165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13167),null);
}
} else {
var m = cljs.core.first.call(null,s__13165__$2);
var d = (new Date(year,m,(1)));
var offset = (((parseInt(streak.core.day.call(null,d)) === (0)))?cljs.core.identity:cljs.core.inc);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str((offset.call(null,parseInt(streak.core.week.call(null,d))) * size)),cljs.core.str(") rotate(-90)")].join(''),new cljs.core.Keyword(null,"dy","dy",1719547243),(12),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null),streak.core.month.call(null,d)], null),streak$core$ui_$_iter__13164.call(null,cljs.core.rest.call(null,s__13165__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,size,width,map__13163,map__13163__$1,year))
,null,null));
});})(start,stop,size,width,map__13163,map__13163__$1,year))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,(12)));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(17,0)"], null),(function (){var iter__4936__auto__ = ((function (start,stop,size,width,map__13163,map__13163__$1,year){
return (function streak$core$ui_$_iter__13168(s__13169){
return (new cljs.core.LazySeq(null,((function (start,stop,size,width,map__13163,map__13163__$1,year){
return (function (){
var s__13169__$1 = s__13169;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13169__$1);
if(temp__4126__auto__){
var s__13169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13169__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__13169__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__13171 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__13170 = (0);
while(true){
if((i__13170 < size__4935__auto__)){
var d = cljs.core._nth.call(null,c__4934__auto__,i__13170);
cljs.core.chunk_append.call(null,b__13171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"day",new cljs.core.Keyword(null,"x","x",2099068185),(size * streak.core.day.call(null,d)),new cljs.core.Keyword(null,"y","y",-1757859776),(size * streak.core.week.call(null,d)),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null)], null));

var G__13177 = (i__13170 + (1));
i__13170 = G__13177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13171),streak$core$ui_$_iter__13168.call(null,cljs.core.chunk_rest.call(null,s__13169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13171),null);
}
} else {
var d = cljs.core.first.call(null,s__13169__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"day",new cljs.core.Keyword(null,"x","x",2099068185),(size * streak.core.day.call(null,d)),new cljs.core.Keyword(null,"y","y",-1757859776),(size * streak.core.week.call(null,d)),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null)], null),streak$core$ui_$_iter__13168.call(null,cljs.core.rest.call(null,s__13169__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,size,width,map__13163,map__13163__$1,year))
,null,null));
});})(start,stop,size,width,map__13163,map__13163__$1,year))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,d3.time.days(start,stop)));
})(),(function (){var iter__4936__auto__ = ((function (start,stop,size,width,map__13163,map__13163__$1,year){
return (function streak$core$ui_$_iter__13172(s__13173){
return (new cljs.core.LazySeq(null,((function (start,stop,size,width,map__13163,map__13163__$1,year){
return (function (){
var s__13173__$1 = s__13173;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13173__$1);
if(temp__4126__auto__){
var s__13173__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13173__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__13173__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__13175 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__13174 = (0);
while(true){
if((i__13174 < size__4935__auto__)){
var m = cljs.core._nth.call(null,c__4934__auto__,i__13174);
cljs.core.chunk_append.call(null,b__13175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"d","d",1972142424),streak.core.path.call(null,streak.core.scale.call(null,streak.core.month_path.call(null,m),size))], null)], null));

var G__13178 = (i__13174 + (1));
i__13174 = G__13178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13175),streak$core$ui_$_iter__13172.call(null,cljs.core.chunk_rest.call(null,s__13173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13175),null);
}
} else {
var m = cljs.core.first.call(null,s__13173__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"d","d",1972142424),streak.core.path.call(null,streak.core.scale.call(null,streak.core.month_path.call(null,m),size))], null)], null),streak$core$ui_$_iter__13172.call(null,cljs.core.rest.call(null,s__13173__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,size,width,map__13163,map__13163__$1,year))
,null,null));
});})(start,stop,size,width,map__13163,map__13163__$1,year))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,d3.time.months(start,stop)));
})()], null)], null);
})()], null)], null)], null);
});
});
streak.core.step = (function streak$core$step(model,action){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"no-op","no-op",-93046065))){
return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e13185){if((e13185 instanceof Error)){
var e__12352__auto__ = e13185;
if((e__12352__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"previous-year","previous-year",1794338910))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null),cljs.core.dec);
} else {
throw cljs.core.match.backtrack;

}
}catch (e13186){if((e13186 instanceof Error)){
var e__12352__auto____$1 = e13186;
if((e__12352__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"next-year","next-year",-1541587170))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e13187){if((e13187 instanceof Error)){
var e__12352__auto____$2 = e13187;
if((e__12352__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"download","download",-300081668))){
saveSvgAsPng(document.getElementById("calendar"),[cljs.core.str("calendar-"),cljs.core.str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(model)),cljs.core.str(".png")].join(''));

return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e13188){if((e13188 instanceof Error)){
var e__12352__auto____$3 = e13188;
if((e__12352__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__12352__auto____$3;
}
} else {
throw e13188;

}
}} else {
throw e__12352__auto____$2;
}
} else {
throw e13187;

}
}} else {
throw e__12352__auto____$1;
}
} else {
throw e13186;

}
}} else {
throw e__12352__auto__;
}
} else {
throw e13185;

}
}});
var actions_13189 = cljs.core.async.chan.call(null);
var initial_model_13190 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"year","year",335913393),(new Date()).getFullYear()], null);
var models_13191 = vdom.elm.foldp.call(null,streak.core.step,initial_model_13190,actions_13189);
vdom.elm.render_BANG_.call(null,cljs.core.async.map.call(null,streak.core.ui.call(null,actions_13189),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [models_13191], null)),document.body);

//# sourceMappingURL=core.js.map