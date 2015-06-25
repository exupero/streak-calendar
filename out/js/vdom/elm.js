// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6540__auto___13341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13341,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13341,out){
return (function (state_13327){
var state_val_13328 = (state_13327[(1)]);
if((state_val_13328 === (5))){
var inst_13319 = (state_13327[(7)]);
var inst_13322 = (state_13327[(2)]);
var inst_13316 = inst_13319;
var inst_13317 = inst_13322;
var state_13327__$1 = (function (){var statearr_13329 = state_13327;
(statearr_13329[(8)] = inst_13317);

(statearr_13329[(9)] = inst_13316);

return statearr_13329;
})();
var statearr_13330_13342 = state_13327__$1;
(statearr_13330_13342[(2)] = null);

(statearr_13330_13342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13328 === (4))){
var inst_13325 = (state_13327[(2)]);
var state_13327__$1 = state_13327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13327__$1,inst_13325);
} else {
if((state_val_13328 === (3))){
var inst_13317 = (state_13327[(8)]);
var inst_13319 = (state_13327[(7)]);
var inst_13316 = (state_13327[(9)]);
var inst_13319__$1 = f.call(null,inst_13316,inst_13317);
var inst_13320 = cljs.core.async.put_BANG_.call(null,out,inst_13319__$1);
var state_13327__$1 = (function (){var statearr_13331 = state_13327;
(statearr_13331[(10)] = inst_13320);

(statearr_13331[(7)] = inst_13319__$1);

return statearr_13331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13327__$1,(5),in$);
} else {
if((state_val_13328 === (2))){
var inst_13315 = (state_13327[(2)]);
var inst_13316 = init;
var inst_13317 = inst_13315;
var state_13327__$1 = (function (){var statearr_13332 = state_13327;
(statearr_13332[(8)] = inst_13317);

(statearr_13332[(9)] = inst_13316);

return statearr_13332;
})();
var statearr_13333_13343 = state_13327__$1;
(statearr_13333_13343[(2)] = null);

(statearr_13333_13343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13328 === (1))){
var state_13327__$1 = state_13327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13327__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6540__auto___13341,out))
;
return ((function (switch__6478__auto__,c__6540__auto___13341,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6479__auto__ = null;
var vdom$elm$foldp_$_state_machine__6479__auto____0 = (function (){
var statearr_13337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13337[(0)] = vdom$elm$foldp_$_state_machine__6479__auto__);

(statearr_13337[(1)] = (1));

return statearr_13337;
});
var vdom$elm$foldp_$_state_machine__6479__auto____1 = (function (state_13327){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13338){if((e13338 instanceof Object)){
var ex__6482__auto__ = e13338;
var statearr_13339_13344 = state_13327;
(statearr_13339_13344[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13345 = state_13327;
state_13327 = G__13345;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6479__auto__ = function(state_13327){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6479__auto____1.call(this,state_13327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6479__auto____0;
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6479__auto____1;
return vdom$elm$foldp_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13341,out))
})();
var state__6542__auto__ = (function (){var statearr_13340 = f__6541__auto__.call(null);
(statearr_13340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13341);

return statearr_13340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13341,out))
);


return out;
});
vdom.elm.event = (function vdom$elm$event(ch,x){
return (function (e){
e.preventDefault();

return cljs.core.async.put_BANG_.call(null,ch,x);
});
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,render){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,render){
return (function (state_13374){
var state_val_13375 = (state_13374[(1)]);
if((state_val_13375 === (4))){
var inst_13368 = (state_13374[(2)]);
var inst_13369 = render.call(null,inst_13368);
var state_13374__$1 = (function (){var statearr_13376 = state_13374;
(statearr_13376[(7)] = inst_13369);

return statearr_13376;
})();
var statearr_13377_13386 = state_13374__$1;
(statearr_13377_13386[(2)] = null);

(statearr_13377_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (3))){
var inst_13372 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13374__$1,inst_13372);
} else {
if((state_val_13375 === (2))){
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13374__$1,(4),views);
} else {
if((state_val_13375 === (1))){
var state_13374__$1 = state_13374;
var statearr_13378_13387 = state_13374__$1;
(statearr_13378_13387[(2)] = null);

(statearr_13378_13387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6540__auto__,render))
;
return ((function (switch__6478__auto__,c__6540__auto__,render){
return (function() {
var vdom$elm$render_BANG__$_state_machine__6479__auto__ = null;
var vdom$elm$render_BANG__$_state_machine__6479__auto____0 = (function (){
var statearr_13382 = [null,null,null,null,null,null,null,null];
(statearr_13382[(0)] = vdom$elm$render_BANG__$_state_machine__6479__auto__);

(statearr_13382[(1)] = (1));

return statearr_13382;
});
var vdom$elm$render_BANG__$_state_machine__6479__auto____1 = (function (state_13374){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13383){if((e13383 instanceof Object)){
var ex__6482__auto__ = e13383;
var statearr_13384_13388 = state_13374;
(statearr_13384_13388[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13389 = state_13374;
state_13374 = G__13389;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6479__auto__ = function(state_13374){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6479__auto____1.call(this,state_13374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6479__auto____0;
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6479__auto____1;
return vdom$elm$render_BANG__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,render))
})();
var state__6542__auto__ = (function (){var statearr_13385 = f__6541__auto__.call(null);
(statearr_13385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_13385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,render))
);

return c__6540__auto__;
});

//# sourceMappingURL=elm.js.map