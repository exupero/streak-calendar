// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('vdom.elm');
goog.require('cljs.core');
goog.require('vdom.core');
goog.require('cljs.core.async');
vdom.elm.foldp = (function vdom$elm$foldp(f,init,in$){
var out = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,out,init);

var c__6540__auto___13250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13250,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13250,out){
return (function (state_13236){
var state_val_13237 = (state_13236[(1)]);
if((state_val_13237 === (5))){
var inst_13228 = (state_13236[(7)]);
var inst_13231 = (state_13236[(2)]);
var inst_13225 = inst_13228;
var inst_13226 = inst_13231;
var state_13236__$1 = (function (){var statearr_13238 = state_13236;
(statearr_13238[(8)] = inst_13225);

(statearr_13238[(9)] = inst_13226);

return statearr_13238;
})();
var statearr_13239_13251 = state_13236__$1;
(statearr_13239_13251[(2)] = null);

(statearr_13239_13251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (4))){
var inst_13234 = (state_13236[(2)]);
var state_13236__$1 = state_13236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13236__$1,inst_13234);
} else {
if((state_val_13237 === (3))){
var inst_13225 = (state_13236[(8)]);
var inst_13226 = (state_13236[(9)]);
var inst_13228 = (state_13236[(7)]);
var inst_13228__$1 = f.call(null,inst_13225,inst_13226);
var inst_13229 = cljs.core.async.put_BANG_.call(null,out,inst_13228__$1);
var state_13236__$1 = (function (){var statearr_13240 = state_13236;
(statearr_13240[(10)] = inst_13229);

(statearr_13240[(7)] = inst_13228__$1);

return statearr_13240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13236__$1,(5),in$);
} else {
if((state_val_13237 === (2))){
var inst_13224 = (state_13236[(2)]);
var inst_13225 = init;
var inst_13226 = inst_13224;
var state_13236__$1 = (function (){var statearr_13241 = state_13236;
(statearr_13241[(8)] = inst_13225);

(statearr_13241[(9)] = inst_13226);

return statearr_13241;
})();
var statearr_13242_13252 = state_13236__$1;
(statearr_13242_13252[(2)] = null);

(statearr_13242_13252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13237 === (1))){
var state_13236__$1 = state_13236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13236__$1,(2),in$);
} else {
return null;
}
}
}
}
}
});})(c__6540__auto___13250,out))
;
return ((function (switch__6478__auto__,c__6540__auto___13250,out){
return (function() {
var vdom$elm$foldp_$_state_machine__6479__auto__ = null;
var vdom$elm$foldp_$_state_machine__6479__auto____0 = (function (){
var statearr_13246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13246[(0)] = vdom$elm$foldp_$_state_machine__6479__auto__);

(statearr_13246[(1)] = (1));

return statearr_13246;
});
var vdom$elm$foldp_$_state_machine__6479__auto____1 = (function (state_13236){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13247){if((e13247 instanceof Object)){
var ex__6482__auto__ = e13247;
var statearr_13248_13253 = state_13236;
(statearr_13248_13253[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13254 = state_13236;
state_13236 = G__13254;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$foldp_$_state_machine__6479__auto__ = function(state_13236){
switch(arguments.length){
case 0:
return vdom$elm$foldp_$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$foldp_$_state_machine__6479__auto____1.call(this,state_13236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$foldp_$_state_machine__6479__auto____0;
vdom$elm$foldp_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$foldp_$_state_machine__6479__auto____1;
return vdom$elm$foldp_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13250,out))
})();
var state__6542__auto__ = (function (){var statearr_13249 = f__6541__auto__.call(null);
(statearr_13249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13250);

return statearr_13249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13250,out))
);


return out;
});
vdom.elm.event = (function vdom$elm$event(ch,x){
return (function (e){
if(cljs.core.truth_(e.preventDefault)){
e.preventDefault();
} else {
}

return cljs.core.async.put_BANG_.call(null,ch,x);
});
});
vdom.elm.render_BANG_ = (function vdom$elm$render_BANG_(views,elem){
var render = vdom.core.renderer.call(null,elem);
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,render){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,render){
return (function (state_13283){
var state_val_13284 = (state_13283[(1)]);
if((state_val_13284 === (4))){
var inst_13277 = (state_13283[(2)]);
var inst_13278 = render.call(null,inst_13277);
var state_13283__$1 = (function (){var statearr_13285 = state_13283;
(statearr_13285[(7)] = inst_13278);

return statearr_13285;
})();
var statearr_13286_13295 = state_13283__$1;
(statearr_13286_13295[(2)] = null);

(statearr_13286_13295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13284 === (3))){
var inst_13281 = (state_13283[(2)]);
var state_13283__$1 = state_13283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13283__$1,inst_13281);
} else {
if((state_val_13284 === (2))){
var state_13283__$1 = state_13283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13283__$1,(4),views);
} else {
if((state_val_13284 === (1))){
var state_13283__$1 = state_13283;
var statearr_13287_13296 = state_13283__$1;
(statearr_13287_13296[(2)] = null);

(statearr_13287_13296[(1)] = (2));


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
var statearr_13291 = [null,null,null,null,null,null,null,null];
(statearr_13291[(0)] = vdom$elm$render_BANG__$_state_machine__6479__auto__);

(statearr_13291[(1)] = (1));

return statearr_13291;
});
var vdom$elm$render_BANG__$_state_machine__6479__auto____1 = (function (state_13283){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13292){if((e13292 instanceof Object)){
var ex__6482__auto__ = e13292;
var statearr_13293_13297 = state_13283;
(statearr_13293_13297[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13298 = state_13283;
state_13283 = G__13298;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
vdom$elm$render_BANG__$_state_machine__6479__auto__ = function(state_13283){
switch(arguments.length){
case 0:
return vdom$elm$render_BANG__$_state_machine__6479__auto____0.call(this);
case 1:
return vdom$elm$render_BANG__$_state_machine__6479__auto____1.call(this,state_13283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = vdom$elm$render_BANG__$_state_machine__6479__auto____0;
vdom$elm$render_BANG__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = vdom$elm$render_BANG__$_state_machine__6479__auto____1;
return vdom$elm$render_BANG__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,render))
})();
var state__6542__auto__ = (function (){var statearr_13294 = f__6541__auto__.call(null);
(statearr_13294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_13294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,render))
);

return c__6540__auto__;
});

//# sourceMappingURL=elm.js.map