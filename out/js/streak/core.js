// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('streak.core');
goog.require('cljs.core');
goog.require('vdom.elm');
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
return cljs.core.map.call(null,(function (p1__18310_SHARP_){
if(typeof p1__18310_SHARP_ === 'number'){
return (x * p1__18310_SHARP_);
} else {
return p1__18310_SHARP_;
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
return (function (p__18325){
var map__18326 = p__18325;
var map__18326__$1 = ((cljs.core.seq_QMARK_.call(null,map__18326))?cljs.core.apply.call(null,cljs.core.hash_map,map__18326):map__18326);
var year = cljs.core.get.call(null,map__18326__$1,new cljs.core.Keyword(null,"year","year",335913393));
var width = (147);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"download",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"download","download",-300081668))], null),"Download"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"decrement-year",new cljs.core.Keyword(null,"className","className",-1983287057),"change-year",new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"previous-year","previous-year",1794338910))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"increment-year",new cljs.core.Keyword(null,"className","className",-1983287057),"change-year",new cljs.core.Keyword(null,"onclick","onclick",1297553739),vdom.elm.event.call(null,actions,new cljs.core.Keyword(null,"next-year","next-year",-1541587170))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"calendar",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null),(function (){var start = (new Date(year,(0),(1)));
var stop = (new Date((year + (1)),(0),(1)));
var size = (18);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1,14)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4936__auto__ = ((function (start,stop,size,width,map__18326,map__18326__$1,year){
return (function streak$core$ui_$_iter__18327(s__18328){
return (new cljs.core.LazySeq(null,((function (start,stop,size,width,map__18326,map__18326__$1,year){
return (function (){
var s__18328__$1 = s__18328;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18328__$1);
if(temp__4126__auto__){
var s__18328__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18328__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__18328__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__18330 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__18329 = (0);
while(true){
if((i__18329 < size__4935__auto__)){
var m = cljs.core._nth.call(null,c__4934__auto__,i__18329);
var d = (new Date(year,m,(1)));
var offset = (((parseInt(streak.core.day.call(null,d)) === (0)))?cljs.core.identity:cljs.core.inc);
cljs.core.chunk_append.call(null,b__18330,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str((offset.call(null,parseInt(streak.core.week.call(null,d))) * size)),cljs.core.str(") rotate(-90)")].join(''),new cljs.core.Keyword(null,"dy","dy",1719547243),(12),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null),streak.core.month.call(null,d)], null));

var G__18339 = (i__18329 + (1));
i__18329 = G__18339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18330),streak$core$ui_$_iter__18327.call(null,cljs.core.chunk_rest.call(null,s__18328__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18330),null);
}
} else {
var m = cljs.core.first.call(null,s__18328__$2);
var d = (new Date(year,m,(1)));
var offset = (((parseInt(streak.core.day.call(null,d)) === (0)))?cljs.core.identity:cljs.core.inc);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate(0,"),cljs.core.str((offset.call(null,parseInt(streak.core.week.call(null,d))) * size)),cljs.core.str(") rotate(-90)")].join(''),new cljs.core.Keyword(null,"dy","dy",1719547243),(12),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"end"], null),streak.core.month.call(null,d)], null),streak$core$ui_$_iter__18327.call(null,cljs.core.rest.call(null,s__18328__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,size,width,map__18326,map__18326__$1,year))
,null,null));
});})(start,stop,size,width,map__18326,map__18326__$1,year))
;
return iter__4936__auto__.call(null,cljs.core.range.call(null,(12)));
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(17,0)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(((7) * size) / (2)),new cljs.core.Keyword(null,"dy","dy",1719547243),(-2),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null),year], null),(function (){var iter__4936__auto__ = ((function (start,stop,size,width,map__18326,map__18326__$1,year){
return (function streak$core$ui_$_iter__18331(s__18332){
return (new cljs.core.LazySeq(null,((function (start,stop,size,width,map__18326,map__18326__$1,year){
return (function (){
var s__18332__$1 = s__18332;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18332__$1);
if(temp__4126__auto__){
var s__18332__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18332__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__18332__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__18334 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__18333 = (0);
while(true){
if((i__18333 < size__4935__auto__)){
var d = cljs.core._nth.call(null,c__4934__auto__,i__18333);
cljs.core.chunk_append.call(null,b__18334,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"day",new cljs.core.Keyword(null,"x","x",2099068185),(size * streak.core.day.call(null,d)),new cljs.core.Keyword(null,"y","y",-1757859776),(size * streak.core.week.call(null,d)),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null)], null));

var G__18340 = (i__18333 + (1));
i__18333 = G__18340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18334),streak$core$ui_$_iter__18331.call(null,cljs.core.chunk_rest.call(null,s__18332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18334),null);
}
} else {
var d = cljs.core.first.call(null,s__18332__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"day",new cljs.core.Keyword(null,"x","x",2099068185),(size * streak.core.day.call(null,d)),new cljs.core.Keyword(null,"y","y",-1757859776),(size * streak.core.week.call(null,d)),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size], null)], null),streak$core$ui_$_iter__18331.call(null,cljs.core.rest.call(null,s__18332__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,size,width,map__18326,map__18326__$1,year))
,null,null));
});})(start,stop,size,width,map__18326,map__18326__$1,year))
;
return iter__4936__auto__.call(null,cljs.core.js__GT_clj.call(null,d3.time.days(start,stop)));
})(),(function (){var iter__4936__auto__ = ((function (start,stop,size,width,map__18326,map__18326__$1,year){
return (function streak$core$ui_$_iter__18335(s__18336){
return (new cljs.core.LazySeq(null,((function (start,stop,size,width,map__18326,map__18326__$1,year){
return (function (){
var s__18336__$1 = s__18336;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18336__$1);
if(temp__4126__auto__){
var s__18336__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18336__$2)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,s__18336__$2);
var size__4935__auto__ = cljs.core.count.call(null,c__4934__auto__);
var b__18338 = cljs.core.chunk_buffer.call(null,size__4935__auto__);
if((function (){var i__18337 = (0);
while(true){
if((i__18337 < size__4935__auto__)){
var m = cljs.core._nth.call(null,c__4934__auto__,i__18337);
cljs.core.chunk_append.call(null,b__18338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"d","d",1972142424),streak.core.path.call(null,streak.core.scale.call(null,streak.core.month_path.call(null,m),size))], null)], null));

var G__18341 = (i__18337 + (1));
i__18337 = G__18341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18338),streak$core$ui_$_iter__18335.call(null,cljs.core.chunk_rest.call(null,s__18336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18338),null);
}
} else {
var m = cljs.core.first.call(null,s__18336__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"month",new cljs.core.Keyword(null,"d","d",1972142424),streak.core.path.call(null,streak.core.scale.call(null,streak.core.month_path.call(null,m),size))], null)], null),streak$core$ui_$_iter__18335.call(null,cljs.core.rest.call(null,s__18336__$2)));
}
} else {
return null;
}
break;
}
});})(start,stop,size,width,map__18326,map__18326__$1,year))
,null,null));
});})(start,stop,size,width,map__18326,map__18326__$1,year))
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
}catch (e18348){if((e18348 instanceof Error)){
var e__10199__auto__ = e18348;
if((e__10199__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"previous-year","previous-year",1794338910))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null),cljs.core.dec);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18349){if((e18349 instanceof Error)){
var e__10199__auto____$1 = e18349;
if((e__10199__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"next-year","next-year",-1541587170))){
return cljs.core.update_in.call(null,model,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null),cljs.core.inc);
} else {
throw cljs.core.match.backtrack;

}
}catch (e18350){if((e18350 instanceof Error)){
var e__10199__auto____$2 = e18350;
if((e__10199__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,action,new cljs.core.Keyword(null,"download","download",-300081668))){
saveSvgAsPng(document.getElementById("calendar"),[cljs.core.str("calendar-"),cljs.core.str(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(model)),cljs.core.str(".png")].join(''));

return model;
} else {
throw cljs.core.match.backtrack;

}
}catch (e18351){if((e18351 instanceof Error)){
var e__10199__auto____$3 = e18351;
if((e__10199__auto____$3 === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(action)].join('')));
} else {
throw e__10199__auto____$3;
}
} else {
throw e18351;

}
}} else {
throw e__10199__auto____$2;
}
} else {
throw e18350;

}
}} else {
throw e__10199__auto____$1;
}
} else {
throw e18349;

}
}} else {
throw e__10199__auto__;
}
} else {
throw e18348;

}
}});
var c__6473__auto___18375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6473__auto___18375){
return (function (){
var f__6474__auto__ = (function (){var switch__6452__auto__ = ((function (c__6473__auto___18375){
return (function (state_18366){
var state_val_18367 = (state_18366[(1)]);
if((state_val_18367 === (1))){
var inst_18352 = cljs.core.async.chan.call(null);
var inst_18353 = [new cljs.core.Keyword(null,"year","year",335913393)];
var inst_18354 = (new Date());
var inst_18355 = inst_18354.getFullYear();
var inst_18356 = [inst_18355];
var inst_18357 = cljs.core.PersistentHashMap.fromArrays(inst_18353,inst_18356);
var inst_18358 = vdom.elm.foldp.call(null,streak.core.step,inst_18357,inst_18352);
var inst_18359 = streak.core.ui.call(null,inst_18352);
var inst_18360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18361 = [inst_18358];
var inst_18362 = (new cljs.core.PersistentVector(null,1,(5),inst_18360,inst_18361,null));
var inst_18363 = cljs.core.async.map.call(null,inst_18359,inst_18362);
var inst_18364 = vdom.elm.render_BANG_.call(null,inst_18363,document.body);
var state_18366__$1 = state_18366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18366__$1,inst_18364);
} else {
return null;
}
});})(c__6473__auto___18375))
;
return ((function (switch__6452__auto__,c__6473__auto___18375){
return (function() {
var streak$core$state_machine__6453__auto__ = null;
var streak$core$state_machine__6453__auto____0 = (function (){
var statearr_18371 = [null,null,null,null,null,null,null];
(statearr_18371[(0)] = streak$core$state_machine__6453__auto__);

(statearr_18371[(1)] = (1));

return statearr_18371;
});
var streak$core$state_machine__6453__auto____1 = (function (state_18366){
while(true){
var ret_value__6454__auto__ = (function (){try{while(true){
var result__6455__auto__ = switch__6452__auto__.call(null,state_18366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6455__auto__;
}
break;
}
}catch (e18372){if((e18372 instanceof Object)){
var ex__6456__auto__ = e18372;
var statearr_18373_18376 = state_18366;
(statearr_18373_18376[(5)] = ex__6456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18377 = state_18366;
state_18366 = G__18377;
continue;
} else {
return ret_value__6454__auto__;
}
break;
}
});
streak$core$state_machine__6453__auto__ = function(state_18366){
switch(arguments.length){
case 0:
return streak$core$state_machine__6453__auto____0.call(this);
case 1:
return streak$core$state_machine__6453__auto____1.call(this,state_18366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
streak$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$0 = streak$core$state_machine__6453__auto____0;
streak$core$state_machine__6453__auto__.cljs$core$IFn$_invoke$arity$1 = streak$core$state_machine__6453__auto____1;
return streak$core$state_machine__6453__auto__;
})()
;})(switch__6452__auto__,c__6473__auto___18375))
})();
var state__6475__auto__ = (function (){var statearr_18374 = f__6474__auto__.call(null);
(statearr_18374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6473__auto___18375);

return statearr_18374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6475__auto__);
});})(c__6473__auto___18375))
);


//# sourceMappingURL=core.js.map