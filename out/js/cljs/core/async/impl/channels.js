// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t15914 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t15914 = (function (val,box,meta15915){
this.val = val;
this.box = box;
this.meta15915 = meta15915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t15914.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t15914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15916){
var self__ = this;
var _15916__$1 = this;
return self__.meta15915;
});

cljs.core.async.impl.channels.t15914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15916,meta15915__$1){
var self__ = this;
var _15916__$1 = this;
return (new cljs.core.async.impl.channels.t15914(self__.val,self__.box,meta15915__$1));
});

cljs.core.async.impl.channels.t15914.cljs$lang$type = true;

cljs.core.async.impl.channels.t15914.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t15914";

cljs.core.async.impl.channels.t15914.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async.impl.channels/t15914");
});

cljs.core.async.impl.channels.__GT_t15914 = (function cljs$core$async$impl$channels$box_$___GT_t15914(val__$1,box__$1,meta15915){
return (new cljs.core.async.impl.channels.t15914(val__$1,box__$1,meta15915));
});

}

return (new cljs.core.async.impl.channels.t15914(val,cljs$core$async$impl$channels$box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj15918 = {};
return obj15918;
})();

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((function (){var and__4170__auto__ = this$;
if(and__4170__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__4170__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4818__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4182__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__4170__auto__ = self__.buf;
if(cljs.core.truth_(and__4170__auto__)){
return (self__.puts.length === (0));
} else {
return and__4170__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_15919 = self__.takes.pop();
if((taker_15919 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_15919)){
var take_cb_15920 = cljs.core.async.impl.protocols.commit.call(null,taker_15919);
var val_15921 = (cljs.core.truth_((function (){var and__4170__auto__ = self__.buf;
if(cljs.core.truth_(and__4170__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4170__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_15920,val_15921,taker_15919,this$__$1){
return (function (){
return take_cb_15920.call(null,val_15921);
});})(take_cb_15920,val_15921,taker_15919,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var _ = cljs.core.async.impl.protocols.commit.call(null,handler);
var retval = cljs.core.async.impl.channels.box.call(null,cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf));
while(true){
if(cljs.core.truth_(cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))){
} else {
var putter_15922 = self__.puts.pop();
if((putter_15922 == null)){
} else {
var put_handler_15923 = putter_15922.handler;
var val_15924 = putter_15922.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_15923)){
var put_cb_15925 = cljs.core.async.impl.protocols.commit.call(null,put_handler_15923);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_15925,put_handler_15923,val_15924,putter_15922,_,retval,this$__$1){
return (function (){
return put_cb_15925.call(null,true);
});})(put_cb_15925,put_handler_15923,val_15924,putter_15922,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val_15924))){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__4170__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__4170__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__4170__auto__;
}
})())){
var has_val = (function (){var and__4170__auto__ = self__.buf;
if(cljs.core.truth_(and__4170__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__4170__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}


self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__4170__auto__ = self__.buf;
if(cljs.core.truth_(and__4170__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__4170__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker_15926 = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_15926)){
var take_cb_15927 = cljs.core.async.impl.protocols.commit.call(null,taker_15926);
var val_15928__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_15927,val_15928__$1,taker_15926,done_QMARK_,closed__$1,this$__$1){
return (function (){
return take_cb_15927.call(null,val_15928__$1);
});})(take_cb_15927,val_15928__$1,taker_15926,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}


self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_15929 = self__.puts.pop();
if((putter_15929 == null)){
} else {
var put_handler_15930 = putter_15929.handler;
var val_15931 = putter_15929.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_15930)){
var put_cb_15932 = cljs.core.async.impl.protocols.commit.call(null,put_handler_15930);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_15932,put_handler_15930,val_15931,putter_15929,this$__$1){
return (function (){
return put_cb_15932.call(null,true);
});})(put_cb_15932,put_handler_15930,val_15931,putter_15929,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__4182__auto__ = exh;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(){
var G__15934 = arguments.length;
switch (G__15934) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__15938 = null;
var G__15938__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e15935){var t = e15935;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__15938__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e15936){var t = e15936;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__15938 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__15938__1.call(this,buf__$1);
case 2:
return G__15938__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15938.cljs$core$IFn$_invoke$arity$1 = G__15938__1;
G__15938.cljs$core$IFn$_invoke$arity$2 = G__15938__2;
return G__15938;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=channels.js.map