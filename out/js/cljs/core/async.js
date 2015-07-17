// Compiled by ClojureScript 0.0-3195 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t13312 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13312 = (function (f,fn_handler,meta13313){
this.f = f;
this.fn_handler = fn_handler;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13312.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13314){
var self__ = this;
var _13314__$1 = this;
return self__.meta13313;
});

cljs.core.async.t13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13314,meta13313__$1){
var self__ = this;
var _13314__$1 = this;
return (new cljs.core.async.t13312(self__.f,self__.fn_handler,meta13313__$1));
});

cljs.core.async.t13312.cljs$lang$type = true;

cljs.core.async.t13312.cljs$lang$ctorStr = "cljs.core.async/t13312";

cljs.core.async.t13312.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13312");
});

cljs.core.async.__GT_t13312 = (function cljs$core$async$fn_handler_$___GT_t13312(f__$1,fn_handler__$1,meta13313){
return (new cljs.core.async.t13312(f__$1,fn_handler__$1,meta13313));
});

}

return (new cljs.core.async.t13312(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__13316 = buff;
if(G__13316){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__13316.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13316.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13316);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13316);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__13318 = arguments.length;
switch (G__13318) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__13321 = arguments.length;
switch (G__13321) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13323 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13323);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13323,ret){
return (function (){
return fn1.call(null,val_13323);
});})(val_13323,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__13325 = arguments.length;
switch (G__13325) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5067__auto___13327 = n;
var x_13328 = (0);
while(true){
if((x_13328 < n__5067__auto___13327)){
(a[x_13328] = (0));

var G__13329 = (x_13328 + (1));
x_13328 = G__13329;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13330 = (i + (1));
i = G__13330;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13334 = (function (flag,alt_flag,meta13335){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13335 = meta13335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13334.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13336){
var self__ = this;
var _13336__$1 = this;
return self__.meta13335;
});})(flag))
;

cljs.core.async.t13334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13336,meta13335__$1){
var self__ = this;
var _13336__$1 = this;
return (new cljs.core.async.t13334(self__.flag,self__.alt_flag,meta13335__$1));
});})(flag))
;

cljs.core.async.t13334.cljs$lang$type = true;

cljs.core.async.t13334.cljs$lang$ctorStr = "cljs.core.async/t13334";

cljs.core.async.t13334.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13334");
});})(flag))
;

cljs.core.async.__GT_t13334 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13334(flag__$1,alt_flag__$1,meta13335){
return (new cljs.core.async.t13334(flag__$1,alt_flag__$1,meta13335));
});})(flag))
;

}

return (new cljs.core.async.t13334(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13340 = (function (cb,flag,alt_handler,meta13341){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13341 = meta13341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13342){
var self__ = this;
var _13342__$1 = this;
return self__.meta13341;
});

cljs.core.async.t13340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13342,meta13341__$1){
var self__ = this;
var _13342__$1 = this;
return (new cljs.core.async.t13340(self__.cb,self__.flag,self__.alt_handler,meta13341__$1));
});

cljs.core.async.t13340.cljs$lang$type = true;

cljs.core.async.t13340.cljs$lang$ctorStr = "cljs.core.async/t13340";

cljs.core.async.t13340.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13340");
});

cljs.core.async.__GT_t13340 = (function cljs$core$async$alt_handler_$___GT_t13340(cb__$1,flag__$1,alt_handler__$1,meta13341){
return (new cljs.core.async.t13340(cb__$1,flag__$1,alt_handler__$1,meta13341));
});

}

return (new cljs.core.async.t13340(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13343_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13343_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13344_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4182__auto__ = wport;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13345 = (i + (1));
i = G__13345;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4182__auto__ = ret;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4170__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4170__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4170__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5218__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5218__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13348){
var map__13349 = p__13348;
var map__13349__$1 = ((cljs.core.seq_QMARK_.call(null,map__13349))?cljs.core.apply.call(null,cljs.core.hash_map,map__13349):map__13349);
var opts = map__13349__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13346){
var G__13347 = cljs.core.first.call(null,seq13346);
var seq13346__$1 = cljs.core.next.call(null,seq13346);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13347,seq13346__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13351 = arguments.length;
switch (G__13351) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__6540__auto___13400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13400){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13400){
return (function (state_13375){
var state_val_13376 = (state_13375[(1)]);
if((state_val_13376 === (7))){
var inst_13371 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
var statearr_13377_13401 = state_13375__$1;
(statearr_13377_13401[(2)] = inst_13371);

(statearr_13377_13401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (1))){
var state_13375__$1 = state_13375;
var statearr_13378_13402 = state_13375__$1;
(statearr_13378_13402[(2)] = null);

(statearr_13378_13402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (4))){
var inst_13354 = (state_13375[(7)]);
var inst_13354__$1 = (state_13375[(2)]);
var inst_13355 = (inst_13354__$1 == null);
var state_13375__$1 = (function (){var statearr_13379 = state_13375;
(statearr_13379[(7)] = inst_13354__$1);

return statearr_13379;
})();
if(cljs.core.truth_(inst_13355)){
var statearr_13380_13403 = state_13375__$1;
(statearr_13380_13403[(1)] = (5));

} else {
var statearr_13381_13404 = state_13375__$1;
(statearr_13381_13404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (13))){
var state_13375__$1 = state_13375;
var statearr_13382_13405 = state_13375__$1;
(statearr_13382_13405[(2)] = null);

(statearr_13382_13405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (6))){
var inst_13354 = (state_13375[(7)]);
var state_13375__$1 = state_13375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13375__$1,(11),to,inst_13354);
} else {
if((state_val_13376 === (3))){
var inst_13373 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13375__$1,inst_13373);
} else {
if((state_val_13376 === (12))){
var state_13375__$1 = state_13375;
var statearr_13383_13406 = state_13375__$1;
(statearr_13383_13406[(2)] = null);

(statearr_13383_13406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (2))){
var state_13375__$1 = state_13375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13375__$1,(4),from);
} else {
if((state_val_13376 === (11))){
var inst_13364 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
if(cljs.core.truth_(inst_13364)){
var statearr_13384_13407 = state_13375__$1;
(statearr_13384_13407[(1)] = (12));

} else {
var statearr_13385_13408 = state_13375__$1;
(statearr_13385_13408[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (9))){
var state_13375__$1 = state_13375;
var statearr_13386_13409 = state_13375__$1;
(statearr_13386_13409[(2)] = null);

(statearr_13386_13409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (5))){
var state_13375__$1 = state_13375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13387_13410 = state_13375__$1;
(statearr_13387_13410[(1)] = (8));

} else {
var statearr_13388_13411 = state_13375__$1;
(statearr_13388_13411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (14))){
var inst_13369 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
var statearr_13389_13412 = state_13375__$1;
(statearr_13389_13412[(2)] = inst_13369);

(statearr_13389_13412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (10))){
var inst_13361 = (state_13375[(2)]);
var state_13375__$1 = state_13375;
var statearr_13390_13413 = state_13375__$1;
(statearr_13390_13413[(2)] = inst_13361);

(statearr_13390_13413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13376 === (8))){
var inst_13358 = cljs.core.async.close_BANG_.call(null,to);
var state_13375__$1 = state_13375;
var statearr_13391_13414 = state_13375__$1;
(statearr_13391_13414[(2)] = inst_13358);

(statearr_13391_13414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___13400))
;
return ((function (switch__6478__auto__,c__6540__auto___13400){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_13395 = [null,null,null,null,null,null,null,null];
(statearr_13395[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_13395[(1)] = (1));

return statearr_13395;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_13375){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13396){if((e13396 instanceof Object)){
var ex__6482__auto__ = e13396;
var statearr_13397_13415 = state_13375;
(statearr_13397_13415[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13416 = state_13375;
state_13375 = G__13416;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_13375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_13375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13400))
})();
var state__6542__auto__ = (function (){var statearr_13398 = f__6541__auto__.call(null);
(statearr_13398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13400);

return statearr_13398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13400))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13600){
var vec__13601 = p__13600;
var v = cljs.core.nth.call(null,vec__13601,(0),null);
var p = cljs.core.nth.call(null,vec__13601,(1),null);
var job = vec__13601;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6540__auto___13783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13783,res,vec__13601,v,p,job,jobs,results){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13783,res,vec__13601,v,p,job,jobs,results){
return (function (state_13606){
var state_val_13607 = (state_13606[(1)]);
if((state_val_13607 === (2))){
var inst_13603 = (state_13606[(2)]);
var inst_13604 = cljs.core.async.close_BANG_.call(null,res);
var state_13606__$1 = (function (){var statearr_13608 = state_13606;
(statearr_13608[(7)] = inst_13603);

return statearr_13608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13606__$1,inst_13604);
} else {
if((state_val_13607 === (1))){
var state_13606__$1 = state_13606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13606__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6540__auto___13783,res,vec__13601,v,p,job,jobs,results))
;
return ((function (switch__6478__auto__,c__6540__auto___13783,res,vec__13601,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13612 = [null,null,null,null,null,null,null,null];
(statearr_13612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13612[(1)] = (1));

return statearr_13612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13606){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13613){if((e13613 instanceof Object)){
var ex__6482__auto__ = e13613;
var statearr_13614_13784 = state_13606;
(statearr_13614_13784[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13785 = state_13606;
state_13606 = G__13785;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13783,res,vec__13601,v,p,job,jobs,results))
})();
var state__6542__auto__ = (function (){var statearr_13615 = f__6541__auto__.call(null);
(statearr_13615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13783);

return statearr_13615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13783,res,vec__13601,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13616){
var vec__13617 = p__13616;
var v = cljs.core.nth.call(null,vec__13617,(0),null);
var p = cljs.core.nth.call(null,vec__13617,(1),null);
var job = vec__13617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5067__auto___13786 = n;
var __13787 = (0);
while(true){
if((__13787 < n__5067__auto___13786)){
var G__13618_13788 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13618_13788) {
case "async":
var c__6540__auto___13790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13787,c__6540__auto___13790,G__13618_13788,n__5067__auto___13786,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__13787,c__6540__auto___13790,G__13618_13788,n__5067__auto___13786,jobs,results,process,async){
return (function (state_13631){
var state_val_13632 = (state_13631[(1)]);
if((state_val_13632 === (7))){
var inst_13627 = (state_13631[(2)]);
var state_13631__$1 = state_13631;
var statearr_13633_13791 = state_13631__$1;
(statearr_13633_13791[(2)] = inst_13627);

(statearr_13633_13791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (6))){
var state_13631__$1 = state_13631;
var statearr_13634_13792 = state_13631__$1;
(statearr_13634_13792[(2)] = null);

(statearr_13634_13792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (5))){
var state_13631__$1 = state_13631;
var statearr_13635_13793 = state_13631__$1;
(statearr_13635_13793[(2)] = null);

(statearr_13635_13793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (4))){
var inst_13621 = (state_13631[(2)]);
var inst_13622 = async.call(null,inst_13621);
var state_13631__$1 = state_13631;
if(cljs.core.truth_(inst_13622)){
var statearr_13636_13794 = state_13631__$1;
(statearr_13636_13794[(1)] = (5));

} else {
var statearr_13637_13795 = state_13631__$1;
(statearr_13637_13795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13632 === (3))){
var inst_13629 = (state_13631[(2)]);
var state_13631__$1 = state_13631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13631__$1,inst_13629);
} else {
if((state_val_13632 === (2))){
var state_13631__$1 = state_13631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13631__$1,(4),jobs);
} else {
if((state_val_13632 === (1))){
var state_13631__$1 = state_13631;
var statearr_13638_13796 = state_13631__$1;
(statearr_13638_13796[(2)] = null);

(statearr_13638_13796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13787,c__6540__auto___13790,G__13618_13788,n__5067__auto___13786,jobs,results,process,async))
;
return ((function (__13787,switch__6478__auto__,c__6540__auto___13790,G__13618_13788,n__5067__auto___13786,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13642 = [null,null,null,null,null,null,null];
(statearr_13642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13642[(1)] = (1));

return statearr_13642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13631){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13643){if((e13643 instanceof Object)){
var ex__6482__auto__ = e13643;
var statearr_13644_13797 = state_13631;
(statearr_13644_13797[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13798 = state_13631;
state_13631 = G__13798;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__13787,switch__6478__auto__,c__6540__auto___13790,G__13618_13788,n__5067__auto___13786,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13645 = f__6541__auto__.call(null);
(statearr_13645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13790);

return statearr_13645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__13787,c__6540__auto___13790,G__13618_13788,n__5067__auto___13786,jobs,results,process,async))
);


break;
case "compute":
var c__6540__auto___13799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13787,c__6540__auto___13799,G__13618_13788,n__5067__auto___13786,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__13787,c__6540__auto___13799,G__13618_13788,n__5067__auto___13786,jobs,results,process,async){
return (function (state_13658){
var state_val_13659 = (state_13658[(1)]);
if((state_val_13659 === (7))){
var inst_13654 = (state_13658[(2)]);
var state_13658__$1 = state_13658;
var statearr_13660_13800 = state_13658__$1;
(statearr_13660_13800[(2)] = inst_13654);

(statearr_13660_13800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (6))){
var state_13658__$1 = state_13658;
var statearr_13661_13801 = state_13658__$1;
(statearr_13661_13801[(2)] = null);

(statearr_13661_13801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (5))){
var state_13658__$1 = state_13658;
var statearr_13662_13802 = state_13658__$1;
(statearr_13662_13802[(2)] = null);

(statearr_13662_13802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (4))){
var inst_13648 = (state_13658[(2)]);
var inst_13649 = process.call(null,inst_13648);
var state_13658__$1 = state_13658;
if(cljs.core.truth_(inst_13649)){
var statearr_13663_13803 = state_13658__$1;
(statearr_13663_13803[(1)] = (5));

} else {
var statearr_13664_13804 = state_13658__$1;
(statearr_13664_13804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13659 === (3))){
var inst_13656 = (state_13658[(2)]);
var state_13658__$1 = state_13658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13658__$1,inst_13656);
} else {
if((state_val_13659 === (2))){
var state_13658__$1 = state_13658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13658__$1,(4),jobs);
} else {
if((state_val_13659 === (1))){
var state_13658__$1 = state_13658;
var statearr_13665_13805 = state_13658__$1;
(statearr_13665_13805[(2)] = null);

(statearr_13665_13805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13787,c__6540__auto___13799,G__13618_13788,n__5067__auto___13786,jobs,results,process,async))
;
return ((function (__13787,switch__6478__auto__,c__6540__auto___13799,G__13618_13788,n__5067__auto___13786,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13669 = [null,null,null,null,null,null,null];
(statearr_13669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13669[(1)] = (1));

return statearr_13669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13658){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13670){if((e13670 instanceof Object)){
var ex__6482__auto__ = e13670;
var statearr_13671_13806 = state_13658;
(statearr_13671_13806[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13807 = state_13658;
state_13658 = G__13807;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13658){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__13787,switch__6478__auto__,c__6540__auto___13799,G__13618_13788,n__5067__auto___13786,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13672 = f__6541__auto__.call(null);
(statearr_13672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13799);

return statearr_13672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__13787,c__6540__auto___13799,G__13618_13788,n__5067__auto___13786,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13808 = (__13787 + (1));
__13787 = G__13808;
continue;
} else {
}
break;
}

var c__6540__auto___13809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13809,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13809,jobs,results,process,async){
return (function (state_13694){
var state_val_13695 = (state_13694[(1)]);
if((state_val_13695 === (9))){
var inst_13687 = (state_13694[(2)]);
var state_13694__$1 = (function (){var statearr_13696 = state_13694;
(statearr_13696[(7)] = inst_13687);

return statearr_13696;
})();
var statearr_13697_13810 = state_13694__$1;
(statearr_13697_13810[(2)] = null);

(statearr_13697_13810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (8))){
var inst_13680 = (state_13694[(8)]);
var inst_13685 = (state_13694[(2)]);
var state_13694__$1 = (function (){var statearr_13698 = state_13694;
(statearr_13698[(9)] = inst_13685);

return statearr_13698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13694__$1,(9),results,inst_13680);
} else {
if((state_val_13695 === (7))){
var inst_13690 = (state_13694[(2)]);
var state_13694__$1 = state_13694;
var statearr_13699_13811 = state_13694__$1;
(statearr_13699_13811[(2)] = inst_13690);

(statearr_13699_13811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (6))){
var inst_13680 = (state_13694[(8)]);
var inst_13675 = (state_13694[(10)]);
var inst_13680__$1 = cljs.core.async.chan.call(null,(1));
var inst_13681 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13682 = [inst_13675,inst_13680__$1];
var inst_13683 = (new cljs.core.PersistentVector(null,2,(5),inst_13681,inst_13682,null));
var state_13694__$1 = (function (){var statearr_13700 = state_13694;
(statearr_13700[(8)] = inst_13680__$1);

return statearr_13700;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13694__$1,(8),jobs,inst_13683);
} else {
if((state_val_13695 === (5))){
var inst_13678 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13694__$1 = state_13694;
var statearr_13701_13812 = state_13694__$1;
(statearr_13701_13812[(2)] = inst_13678);

(statearr_13701_13812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (4))){
var inst_13675 = (state_13694[(10)]);
var inst_13675__$1 = (state_13694[(2)]);
var inst_13676 = (inst_13675__$1 == null);
var state_13694__$1 = (function (){var statearr_13702 = state_13694;
(statearr_13702[(10)] = inst_13675__$1);

return statearr_13702;
})();
if(cljs.core.truth_(inst_13676)){
var statearr_13703_13813 = state_13694__$1;
(statearr_13703_13813[(1)] = (5));

} else {
var statearr_13704_13814 = state_13694__$1;
(statearr_13704_13814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13695 === (3))){
var inst_13692 = (state_13694[(2)]);
var state_13694__$1 = state_13694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13694__$1,inst_13692);
} else {
if((state_val_13695 === (2))){
var state_13694__$1 = state_13694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13694__$1,(4),from);
} else {
if((state_val_13695 === (1))){
var state_13694__$1 = state_13694;
var statearr_13705_13815 = state_13694__$1;
(statearr_13705_13815[(2)] = null);

(statearr_13705_13815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___13809,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto___13809,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13709[(1)] = (1));

return statearr_13709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13694){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13710){if((e13710 instanceof Object)){
var ex__6482__auto__ = e13710;
var statearr_13711_13816 = state_13694;
(statearr_13711_13816[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13817 = state_13694;
state_13694 = G__13817;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13809,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13712 = f__6541__auto__.call(null);
(statearr_13712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13809);

return statearr_13712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13809,jobs,results,process,async))
);


var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,jobs,results,process,async){
return (function (state_13750){
var state_val_13751 = (state_13750[(1)]);
if((state_val_13751 === (7))){
var inst_13746 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
var statearr_13752_13818 = state_13750__$1;
(statearr_13752_13818[(2)] = inst_13746);

(statearr_13752_13818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (20))){
var state_13750__$1 = state_13750;
var statearr_13753_13819 = state_13750__$1;
(statearr_13753_13819[(2)] = null);

(statearr_13753_13819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (1))){
var state_13750__$1 = state_13750;
var statearr_13754_13820 = state_13750__$1;
(statearr_13754_13820[(2)] = null);

(statearr_13754_13820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (4))){
var inst_13715 = (state_13750[(7)]);
var inst_13715__$1 = (state_13750[(2)]);
var inst_13716 = (inst_13715__$1 == null);
var state_13750__$1 = (function (){var statearr_13755 = state_13750;
(statearr_13755[(7)] = inst_13715__$1);

return statearr_13755;
})();
if(cljs.core.truth_(inst_13716)){
var statearr_13756_13821 = state_13750__$1;
(statearr_13756_13821[(1)] = (5));

} else {
var statearr_13757_13822 = state_13750__$1;
(statearr_13757_13822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (15))){
var inst_13728 = (state_13750[(8)]);
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13750__$1,(18),to,inst_13728);
} else {
if((state_val_13751 === (21))){
var inst_13741 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
var statearr_13758_13823 = state_13750__$1;
(statearr_13758_13823[(2)] = inst_13741);

(statearr_13758_13823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (13))){
var inst_13743 = (state_13750[(2)]);
var state_13750__$1 = (function (){var statearr_13759 = state_13750;
(statearr_13759[(9)] = inst_13743);

return statearr_13759;
})();
var statearr_13760_13824 = state_13750__$1;
(statearr_13760_13824[(2)] = null);

(statearr_13760_13824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (6))){
var inst_13715 = (state_13750[(7)]);
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13750__$1,(11),inst_13715);
} else {
if((state_val_13751 === (17))){
var inst_13736 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
if(cljs.core.truth_(inst_13736)){
var statearr_13761_13825 = state_13750__$1;
(statearr_13761_13825[(1)] = (19));

} else {
var statearr_13762_13826 = state_13750__$1;
(statearr_13762_13826[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (3))){
var inst_13748 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13750__$1,inst_13748);
} else {
if((state_val_13751 === (12))){
var inst_13725 = (state_13750[(10)]);
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13750__$1,(14),inst_13725);
} else {
if((state_val_13751 === (2))){
var state_13750__$1 = state_13750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13750__$1,(4),results);
} else {
if((state_val_13751 === (19))){
var state_13750__$1 = state_13750;
var statearr_13763_13827 = state_13750__$1;
(statearr_13763_13827[(2)] = null);

(statearr_13763_13827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (11))){
var inst_13725 = (state_13750[(2)]);
var state_13750__$1 = (function (){var statearr_13764 = state_13750;
(statearr_13764[(10)] = inst_13725);

return statearr_13764;
})();
var statearr_13765_13828 = state_13750__$1;
(statearr_13765_13828[(2)] = null);

(statearr_13765_13828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (9))){
var state_13750__$1 = state_13750;
var statearr_13766_13829 = state_13750__$1;
(statearr_13766_13829[(2)] = null);

(statearr_13766_13829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (5))){
var state_13750__$1 = state_13750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13767_13830 = state_13750__$1;
(statearr_13767_13830[(1)] = (8));

} else {
var statearr_13768_13831 = state_13750__$1;
(statearr_13768_13831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (14))){
var inst_13730 = (state_13750[(11)]);
var inst_13728 = (state_13750[(8)]);
var inst_13728__$1 = (state_13750[(2)]);
var inst_13729 = (inst_13728__$1 == null);
var inst_13730__$1 = cljs.core.not.call(null,inst_13729);
var state_13750__$1 = (function (){var statearr_13769 = state_13750;
(statearr_13769[(11)] = inst_13730__$1);

(statearr_13769[(8)] = inst_13728__$1);

return statearr_13769;
})();
if(inst_13730__$1){
var statearr_13770_13832 = state_13750__$1;
(statearr_13770_13832[(1)] = (15));

} else {
var statearr_13771_13833 = state_13750__$1;
(statearr_13771_13833[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (16))){
var inst_13730 = (state_13750[(11)]);
var state_13750__$1 = state_13750;
var statearr_13772_13834 = state_13750__$1;
(statearr_13772_13834[(2)] = inst_13730);

(statearr_13772_13834[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (10))){
var inst_13722 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
var statearr_13773_13835 = state_13750__$1;
(statearr_13773_13835[(2)] = inst_13722);

(statearr_13773_13835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (18))){
var inst_13733 = (state_13750[(2)]);
var state_13750__$1 = state_13750;
var statearr_13774_13836 = state_13750__$1;
(statearr_13774_13836[(2)] = inst_13733);

(statearr_13774_13836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13751 === (8))){
var inst_13719 = cljs.core.async.close_BANG_.call(null,to);
var state_13750__$1 = state_13750;
var statearr_13775_13837 = state_13750__$1;
(statearr_13775_13837[(2)] = inst_13719);

(statearr_13775_13837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto__,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13779[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13779[(1)] = (1));

return statearr_13779;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13750){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13780){if((e13780 instanceof Object)){
var ex__6482__auto__ = e13780;
var statearr_13781_13838 = state_13750;
(statearr_13781_13838[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13839 = state_13750;
state_13750 = G__13839;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13782 = f__6541__auto__.call(null);
(statearr_13782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_13782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__,jobs,results,process,async))
);

return c__6540__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__13841 = arguments.length;
switch (G__13841) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__13844 = arguments.length;
switch (G__13844) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__13847 = arguments.length;
switch (G__13847) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6540__auto___13899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13899,tc,fc){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13899,tc,fc){
return (function (state_13873){
var state_val_13874 = (state_13873[(1)]);
if((state_val_13874 === (7))){
var inst_13869 = (state_13873[(2)]);
var state_13873__$1 = state_13873;
var statearr_13875_13900 = state_13873__$1;
(statearr_13875_13900[(2)] = inst_13869);

(statearr_13875_13900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (1))){
var state_13873__$1 = state_13873;
var statearr_13876_13901 = state_13873__$1;
(statearr_13876_13901[(2)] = null);

(statearr_13876_13901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (4))){
var inst_13850 = (state_13873[(7)]);
var inst_13850__$1 = (state_13873[(2)]);
var inst_13851 = (inst_13850__$1 == null);
var state_13873__$1 = (function (){var statearr_13877 = state_13873;
(statearr_13877[(7)] = inst_13850__$1);

return statearr_13877;
})();
if(cljs.core.truth_(inst_13851)){
var statearr_13878_13902 = state_13873__$1;
(statearr_13878_13902[(1)] = (5));

} else {
var statearr_13879_13903 = state_13873__$1;
(statearr_13879_13903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (13))){
var state_13873__$1 = state_13873;
var statearr_13880_13904 = state_13873__$1;
(statearr_13880_13904[(2)] = null);

(statearr_13880_13904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (6))){
var inst_13850 = (state_13873[(7)]);
var inst_13856 = p.call(null,inst_13850);
var state_13873__$1 = state_13873;
if(cljs.core.truth_(inst_13856)){
var statearr_13881_13905 = state_13873__$1;
(statearr_13881_13905[(1)] = (9));

} else {
var statearr_13882_13906 = state_13873__$1;
(statearr_13882_13906[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (3))){
var inst_13871 = (state_13873[(2)]);
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13873__$1,inst_13871);
} else {
if((state_val_13874 === (12))){
var state_13873__$1 = state_13873;
var statearr_13883_13907 = state_13873__$1;
(statearr_13883_13907[(2)] = null);

(statearr_13883_13907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (2))){
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13873__$1,(4),ch);
} else {
if((state_val_13874 === (11))){
var inst_13850 = (state_13873[(7)]);
var inst_13860 = (state_13873[(2)]);
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13873__$1,(8),inst_13860,inst_13850);
} else {
if((state_val_13874 === (9))){
var state_13873__$1 = state_13873;
var statearr_13884_13908 = state_13873__$1;
(statearr_13884_13908[(2)] = tc);

(statearr_13884_13908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (5))){
var inst_13853 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13854 = cljs.core.async.close_BANG_.call(null,fc);
var state_13873__$1 = (function (){var statearr_13885 = state_13873;
(statearr_13885[(8)] = inst_13853);

return statearr_13885;
})();
var statearr_13886_13909 = state_13873__$1;
(statearr_13886_13909[(2)] = inst_13854);

(statearr_13886_13909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (14))){
var inst_13867 = (state_13873[(2)]);
var state_13873__$1 = state_13873;
var statearr_13887_13910 = state_13873__$1;
(statearr_13887_13910[(2)] = inst_13867);

(statearr_13887_13910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (10))){
var state_13873__$1 = state_13873;
var statearr_13888_13911 = state_13873__$1;
(statearr_13888_13911[(2)] = fc);

(statearr_13888_13911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13874 === (8))){
var inst_13862 = (state_13873[(2)]);
var state_13873__$1 = state_13873;
if(cljs.core.truth_(inst_13862)){
var statearr_13889_13912 = state_13873__$1;
(statearr_13889_13912[(1)] = (12));

} else {
var statearr_13890_13913 = state_13873__$1;
(statearr_13890_13913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___13899,tc,fc))
;
return ((function (switch__6478__auto__,c__6540__auto___13899,tc,fc){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_13894 = [null,null,null,null,null,null,null,null,null];
(statearr_13894[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_13894[(1)] = (1));

return statearr_13894;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_13873){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13895){if((e13895 instanceof Object)){
var ex__6482__auto__ = e13895;
var statearr_13896_13914 = state_13873;
(statearr_13896_13914[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13915 = state_13873;
state_13873 = G__13915;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_13873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_13873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13899,tc,fc))
})();
var state__6542__auto__ = (function (){var statearr_13897 = f__6541__auto__.call(null);
(statearr_13897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13899);

return statearr_13897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13899,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_13962){
var state_val_13963 = (state_13962[(1)]);
if((state_val_13963 === (7))){
var inst_13958 = (state_13962[(2)]);
var state_13962__$1 = state_13962;
var statearr_13964_13980 = state_13962__$1;
(statearr_13964_13980[(2)] = inst_13958);

(statearr_13964_13980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13963 === (6))){
var inst_13948 = (state_13962[(7)]);
var inst_13951 = (state_13962[(8)]);
var inst_13955 = f.call(null,inst_13948,inst_13951);
var inst_13948__$1 = inst_13955;
var state_13962__$1 = (function (){var statearr_13965 = state_13962;
(statearr_13965[(7)] = inst_13948__$1);

return statearr_13965;
})();
var statearr_13966_13981 = state_13962__$1;
(statearr_13966_13981[(2)] = null);

(statearr_13966_13981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13963 === (5))){
var inst_13948 = (state_13962[(7)]);
var state_13962__$1 = state_13962;
var statearr_13967_13982 = state_13962__$1;
(statearr_13967_13982[(2)] = inst_13948);

(statearr_13967_13982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13963 === (4))){
var inst_13951 = (state_13962[(8)]);
var inst_13951__$1 = (state_13962[(2)]);
var inst_13952 = (inst_13951__$1 == null);
var state_13962__$1 = (function (){var statearr_13968 = state_13962;
(statearr_13968[(8)] = inst_13951__$1);

return statearr_13968;
})();
if(cljs.core.truth_(inst_13952)){
var statearr_13969_13983 = state_13962__$1;
(statearr_13969_13983[(1)] = (5));

} else {
var statearr_13970_13984 = state_13962__$1;
(statearr_13970_13984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13963 === (3))){
var inst_13960 = (state_13962[(2)]);
var state_13962__$1 = state_13962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13962__$1,inst_13960);
} else {
if((state_val_13963 === (2))){
var state_13962__$1 = state_13962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13962__$1,(4),ch);
} else {
if((state_val_13963 === (1))){
var inst_13948 = init;
var state_13962__$1 = (function (){var statearr_13971 = state_13962;
(statearr_13971[(7)] = inst_13948);

return statearr_13971;
})();
var statearr_13972_13985 = state_13962__$1;
(statearr_13972_13985[(2)] = null);

(statearr_13972_13985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6479__auto____0 = (function (){
var statearr_13976 = [null,null,null,null,null,null,null,null,null];
(statearr_13976[(0)] = cljs$core$async$reduce_$_state_machine__6479__auto__);

(statearr_13976[(1)] = (1));

return statearr_13976;
});
var cljs$core$async$reduce_$_state_machine__6479__auto____1 = (function (state_13962){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13977){if((e13977 instanceof Object)){
var ex__6482__auto__ = e13977;
var statearr_13978_13986 = state_13962;
(statearr_13978_13986[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13987 = state_13962;
state_13962 = G__13987;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6479__auto__ = function(state_13962){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6479__auto____1.call(this,state_13962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6479__auto____0;
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6479__auto____1;
return cljs$core$async$reduce_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_13979 = f__6541__auto__.call(null);
(statearr_13979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_13979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__13989 = arguments.length;
switch (G__13989) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_14014){
var state_val_14015 = (state_14014[(1)]);
if((state_val_14015 === (7))){
var inst_13996 = (state_14014[(2)]);
var state_14014__$1 = state_14014;
var statearr_14016_14040 = state_14014__$1;
(statearr_14016_14040[(2)] = inst_13996);

(statearr_14016_14040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (1))){
var inst_13990 = cljs.core.seq.call(null,coll);
var inst_13991 = inst_13990;
var state_14014__$1 = (function (){var statearr_14017 = state_14014;
(statearr_14017[(7)] = inst_13991);

return statearr_14017;
})();
var statearr_14018_14041 = state_14014__$1;
(statearr_14018_14041[(2)] = null);

(statearr_14018_14041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (4))){
var inst_13991 = (state_14014[(7)]);
var inst_13994 = cljs.core.first.call(null,inst_13991);
var state_14014__$1 = state_14014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14014__$1,(7),ch,inst_13994);
} else {
if((state_val_14015 === (13))){
var inst_14008 = (state_14014[(2)]);
var state_14014__$1 = state_14014;
var statearr_14019_14042 = state_14014__$1;
(statearr_14019_14042[(2)] = inst_14008);

(statearr_14019_14042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (6))){
var inst_13999 = (state_14014[(2)]);
var state_14014__$1 = state_14014;
if(cljs.core.truth_(inst_13999)){
var statearr_14020_14043 = state_14014__$1;
(statearr_14020_14043[(1)] = (8));

} else {
var statearr_14021_14044 = state_14014__$1;
(statearr_14021_14044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (3))){
var inst_14012 = (state_14014[(2)]);
var state_14014__$1 = state_14014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14014__$1,inst_14012);
} else {
if((state_val_14015 === (12))){
var state_14014__$1 = state_14014;
var statearr_14022_14045 = state_14014__$1;
(statearr_14022_14045[(2)] = null);

(statearr_14022_14045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (2))){
var inst_13991 = (state_14014[(7)]);
var state_14014__$1 = state_14014;
if(cljs.core.truth_(inst_13991)){
var statearr_14023_14046 = state_14014__$1;
(statearr_14023_14046[(1)] = (4));

} else {
var statearr_14024_14047 = state_14014__$1;
(statearr_14024_14047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (11))){
var inst_14005 = cljs.core.async.close_BANG_.call(null,ch);
var state_14014__$1 = state_14014;
var statearr_14025_14048 = state_14014__$1;
(statearr_14025_14048[(2)] = inst_14005);

(statearr_14025_14048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (9))){
var state_14014__$1 = state_14014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14026_14049 = state_14014__$1;
(statearr_14026_14049[(1)] = (11));

} else {
var statearr_14027_14050 = state_14014__$1;
(statearr_14027_14050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (5))){
var inst_13991 = (state_14014[(7)]);
var state_14014__$1 = state_14014;
var statearr_14028_14051 = state_14014__$1;
(statearr_14028_14051[(2)] = inst_13991);

(statearr_14028_14051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (10))){
var inst_14010 = (state_14014[(2)]);
var state_14014__$1 = state_14014;
var statearr_14029_14052 = state_14014__$1;
(statearr_14029_14052[(2)] = inst_14010);

(statearr_14029_14052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14015 === (8))){
var inst_13991 = (state_14014[(7)]);
var inst_14001 = cljs.core.next.call(null,inst_13991);
var inst_13991__$1 = inst_14001;
var state_14014__$1 = (function (){var statearr_14030 = state_14014;
(statearr_14030[(7)] = inst_13991__$1);

return statearr_14030;
})();
var statearr_14031_14053 = state_14014__$1;
(statearr_14031_14053[(2)] = null);

(statearr_14031_14053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_14035 = [null,null,null,null,null,null,null,null];
(statearr_14035[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_14035[(1)] = (1));

return statearr_14035;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_14014){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14036){if((e14036 instanceof Object)){
var ex__6482__auto__ = e14036;
var statearr_14037_14054 = state_14014;
(statearr_14037_14054[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14055 = state_14014;
state_14014 = G__14055;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_14014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_14014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_14038 = f__6541__auto__.call(null);
(statearr_14038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_14038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj14057 = {};
return obj14057;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4170__auto__ = _;
if(and__4170__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4818__auto__ = (((_ == null))?null:_);
return (function (){var or__4182__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14059 = {};
return obj14059;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t14281 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14281 = (function (cs,ch,mult,meta14282){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14282 = meta14282;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14281.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14281.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14283){
var self__ = this;
var _14283__$1 = this;
return self__.meta14282;
});})(cs))
;

cljs.core.async.t14281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14283,meta14282__$1){
var self__ = this;
var _14283__$1 = this;
return (new cljs.core.async.t14281(self__.cs,self__.ch,self__.mult,meta14282__$1));
});})(cs))
;

cljs.core.async.t14281.cljs$lang$type = true;

cljs.core.async.t14281.cljs$lang$ctorStr = "cljs.core.async/t14281";

cljs.core.async.t14281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14281");
});})(cs))
;

cljs.core.async.__GT_t14281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14281(cs__$1,ch__$1,mult__$1,meta14282){
return (new cljs.core.async.t14281(cs__$1,ch__$1,mult__$1,meta14282));
});})(cs))
;

}

return (new cljs.core.async.t14281(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6540__auto___14502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14502,cs,m,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14502,cs,m,dchan,dctr,done){
return (function (state_14414){
var state_val_14415 = (state_14414[(1)]);
if((state_val_14415 === (7))){
var inst_14410 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14416_14503 = state_14414__$1;
(statearr_14416_14503[(2)] = inst_14410);

(statearr_14416_14503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (20))){
var inst_14315 = (state_14414[(7)]);
var inst_14325 = cljs.core.first.call(null,inst_14315);
var inst_14326 = cljs.core.nth.call(null,inst_14325,(0),null);
var inst_14327 = cljs.core.nth.call(null,inst_14325,(1),null);
var state_14414__$1 = (function (){var statearr_14417 = state_14414;
(statearr_14417[(8)] = inst_14326);

return statearr_14417;
})();
if(cljs.core.truth_(inst_14327)){
var statearr_14418_14504 = state_14414__$1;
(statearr_14418_14504[(1)] = (22));

} else {
var statearr_14419_14505 = state_14414__$1;
(statearr_14419_14505[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (27))){
var inst_14355 = (state_14414[(9)]);
var inst_14286 = (state_14414[(10)]);
var inst_14357 = (state_14414[(11)]);
var inst_14362 = (state_14414[(12)]);
var inst_14362__$1 = cljs.core._nth.call(null,inst_14355,inst_14357);
var inst_14363 = cljs.core.async.put_BANG_.call(null,inst_14362__$1,inst_14286,done);
var state_14414__$1 = (function (){var statearr_14420 = state_14414;
(statearr_14420[(12)] = inst_14362__$1);

return statearr_14420;
})();
if(cljs.core.truth_(inst_14363)){
var statearr_14421_14506 = state_14414__$1;
(statearr_14421_14506[(1)] = (30));

} else {
var statearr_14422_14507 = state_14414__$1;
(statearr_14422_14507[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (1))){
var state_14414__$1 = state_14414;
var statearr_14423_14508 = state_14414__$1;
(statearr_14423_14508[(2)] = null);

(statearr_14423_14508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (24))){
var inst_14315 = (state_14414[(7)]);
var inst_14332 = (state_14414[(2)]);
var inst_14333 = cljs.core.next.call(null,inst_14315);
var inst_14295 = inst_14333;
var inst_14296 = null;
var inst_14297 = (0);
var inst_14298 = (0);
var state_14414__$1 = (function (){var statearr_14424 = state_14414;
(statearr_14424[(13)] = inst_14332);

(statearr_14424[(14)] = inst_14298);

(statearr_14424[(15)] = inst_14296);

(statearr_14424[(16)] = inst_14297);

(statearr_14424[(17)] = inst_14295);

return statearr_14424;
})();
var statearr_14425_14509 = state_14414__$1;
(statearr_14425_14509[(2)] = null);

(statearr_14425_14509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (39))){
var state_14414__$1 = state_14414;
var statearr_14429_14510 = state_14414__$1;
(statearr_14429_14510[(2)] = null);

(statearr_14429_14510[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (4))){
var inst_14286 = (state_14414[(10)]);
var inst_14286__$1 = (state_14414[(2)]);
var inst_14287 = (inst_14286__$1 == null);
var state_14414__$1 = (function (){var statearr_14430 = state_14414;
(statearr_14430[(10)] = inst_14286__$1);

return statearr_14430;
})();
if(cljs.core.truth_(inst_14287)){
var statearr_14431_14511 = state_14414__$1;
(statearr_14431_14511[(1)] = (5));

} else {
var statearr_14432_14512 = state_14414__$1;
(statearr_14432_14512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (15))){
var inst_14298 = (state_14414[(14)]);
var inst_14296 = (state_14414[(15)]);
var inst_14297 = (state_14414[(16)]);
var inst_14295 = (state_14414[(17)]);
var inst_14311 = (state_14414[(2)]);
var inst_14312 = (inst_14298 + (1));
var tmp14426 = inst_14296;
var tmp14427 = inst_14297;
var tmp14428 = inst_14295;
var inst_14295__$1 = tmp14428;
var inst_14296__$1 = tmp14426;
var inst_14297__$1 = tmp14427;
var inst_14298__$1 = inst_14312;
var state_14414__$1 = (function (){var statearr_14433 = state_14414;
(statearr_14433[(18)] = inst_14311);

(statearr_14433[(14)] = inst_14298__$1);

(statearr_14433[(15)] = inst_14296__$1);

(statearr_14433[(16)] = inst_14297__$1);

(statearr_14433[(17)] = inst_14295__$1);

return statearr_14433;
})();
var statearr_14434_14513 = state_14414__$1;
(statearr_14434_14513[(2)] = null);

(statearr_14434_14513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (21))){
var inst_14336 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14438_14514 = state_14414__$1;
(statearr_14438_14514[(2)] = inst_14336);

(statearr_14438_14514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (31))){
var inst_14362 = (state_14414[(12)]);
var inst_14366 = done.call(null,null);
var inst_14367 = cljs.core.async.untap_STAR_.call(null,m,inst_14362);
var state_14414__$1 = (function (){var statearr_14439 = state_14414;
(statearr_14439[(19)] = inst_14366);

return statearr_14439;
})();
var statearr_14440_14515 = state_14414__$1;
(statearr_14440_14515[(2)] = inst_14367);

(statearr_14440_14515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (32))){
var inst_14355 = (state_14414[(9)]);
var inst_14356 = (state_14414[(20)]);
var inst_14357 = (state_14414[(11)]);
var inst_14354 = (state_14414[(21)]);
var inst_14369 = (state_14414[(2)]);
var inst_14370 = (inst_14357 + (1));
var tmp14435 = inst_14355;
var tmp14436 = inst_14356;
var tmp14437 = inst_14354;
var inst_14354__$1 = tmp14437;
var inst_14355__$1 = tmp14435;
var inst_14356__$1 = tmp14436;
var inst_14357__$1 = inst_14370;
var state_14414__$1 = (function (){var statearr_14441 = state_14414;
(statearr_14441[(9)] = inst_14355__$1);

(statearr_14441[(20)] = inst_14356__$1);

(statearr_14441[(11)] = inst_14357__$1);

(statearr_14441[(21)] = inst_14354__$1);

(statearr_14441[(22)] = inst_14369);

return statearr_14441;
})();
var statearr_14442_14516 = state_14414__$1;
(statearr_14442_14516[(2)] = null);

(statearr_14442_14516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (40))){
var inst_14382 = (state_14414[(23)]);
var inst_14386 = done.call(null,null);
var inst_14387 = cljs.core.async.untap_STAR_.call(null,m,inst_14382);
var state_14414__$1 = (function (){var statearr_14443 = state_14414;
(statearr_14443[(24)] = inst_14386);

return statearr_14443;
})();
var statearr_14444_14517 = state_14414__$1;
(statearr_14444_14517[(2)] = inst_14387);

(statearr_14444_14517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (33))){
var inst_14373 = (state_14414[(25)]);
var inst_14375 = cljs.core.chunked_seq_QMARK_.call(null,inst_14373);
var state_14414__$1 = state_14414;
if(inst_14375){
var statearr_14445_14518 = state_14414__$1;
(statearr_14445_14518[(1)] = (36));

} else {
var statearr_14446_14519 = state_14414__$1;
(statearr_14446_14519[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (13))){
var inst_14305 = (state_14414[(26)]);
var inst_14308 = cljs.core.async.close_BANG_.call(null,inst_14305);
var state_14414__$1 = state_14414;
var statearr_14447_14520 = state_14414__$1;
(statearr_14447_14520[(2)] = inst_14308);

(statearr_14447_14520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (22))){
var inst_14326 = (state_14414[(8)]);
var inst_14329 = cljs.core.async.close_BANG_.call(null,inst_14326);
var state_14414__$1 = state_14414;
var statearr_14448_14521 = state_14414__$1;
(statearr_14448_14521[(2)] = inst_14329);

(statearr_14448_14521[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (36))){
var inst_14373 = (state_14414[(25)]);
var inst_14377 = cljs.core.chunk_first.call(null,inst_14373);
var inst_14378 = cljs.core.chunk_rest.call(null,inst_14373);
var inst_14379 = cljs.core.count.call(null,inst_14377);
var inst_14354 = inst_14378;
var inst_14355 = inst_14377;
var inst_14356 = inst_14379;
var inst_14357 = (0);
var state_14414__$1 = (function (){var statearr_14449 = state_14414;
(statearr_14449[(9)] = inst_14355);

(statearr_14449[(20)] = inst_14356);

(statearr_14449[(11)] = inst_14357);

(statearr_14449[(21)] = inst_14354);

return statearr_14449;
})();
var statearr_14450_14522 = state_14414__$1;
(statearr_14450_14522[(2)] = null);

(statearr_14450_14522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (41))){
var inst_14373 = (state_14414[(25)]);
var inst_14389 = (state_14414[(2)]);
var inst_14390 = cljs.core.next.call(null,inst_14373);
var inst_14354 = inst_14390;
var inst_14355 = null;
var inst_14356 = (0);
var inst_14357 = (0);
var state_14414__$1 = (function (){var statearr_14451 = state_14414;
(statearr_14451[(9)] = inst_14355);

(statearr_14451[(20)] = inst_14356);

(statearr_14451[(27)] = inst_14389);

(statearr_14451[(11)] = inst_14357);

(statearr_14451[(21)] = inst_14354);

return statearr_14451;
})();
var statearr_14452_14523 = state_14414__$1;
(statearr_14452_14523[(2)] = null);

(statearr_14452_14523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (43))){
var state_14414__$1 = state_14414;
var statearr_14453_14524 = state_14414__$1;
(statearr_14453_14524[(2)] = null);

(statearr_14453_14524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (29))){
var inst_14398 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14454_14525 = state_14414__$1;
(statearr_14454_14525[(2)] = inst_14398);

(statearr_14454_14525[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (44))){
var inst_14407 = (state_14414[(2)]);
var state_14414__$1 = (function (){var statearr_14455 = state_14414;
(statearr_14455[(28)] = inst_14407);

return statearr_14455;
})();
var statearr_14456_14526 = state_14414__$1;
(statearr_14456_14526[(2)] = null);

(statearr_14456_14526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (6))){
var inst_14346 = (state_14414[(29)]);
var inst_14345 = cljs.core.deref.call(null,cs);
var inst_14346__$1 = cljs.core.keys.call(null,inst_14345);
var inst_14347 = cljs.core.count.call(null,inst_14346__$1);
var inst_14348 = cljs.core.reset_BANG_.call(null,dctr,inst_14347);
var inst_14353 = cljs.core.seq.call(null,inst_14346__$1);
var inst_14354 = inst_14353;
var inst_14355 = null;
var inst_14356 = (0);
var inst_14357 = (0);
var state_14414__$1 = (function (){var statearr_14457 = state_14414;
(statearr_14457[(9)] = inst_14355);

(statearr_14457[(20)] = inst_14356);

(statearr_14457[(30)] = inst_14348);

(statearr_14457[(29)] = inst_14346__$1);

(statearr_14457[(11)] = inst_14357);

(statearr_14457[(21)] = inst_14354);

return statearr_14457;
})();
var statearr_14458_14527 = state_14414__$1;
(statearr_14458_14527[(2)] = null);

(statearr_14458_14527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (28))){
var inst_14373 = (state_14414[(25)]);
var inst_14354 = (state_14414[(21)]);
var inst_14373__$1 = cljs.core.seq.call(null,inst_14354);
var state_14414__$1 = (function (){var statearr_14459 = state_14414;
(statearr_14459[(25)] = inst_14373__$1);

return statearr_14459;
})();
if(inst_14373__$1){
var statearr_14460_14528 = state_14414__$1;
(statearr_14460_14528[(1)] = (33));

} else {
var statearr_14461_14529 = state_14414__$1;
(statearr_14461_14529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (25))){
var inst_14356 = (state_14414[(20)]);
var inst_14357 = (state_14414[(11)]);
var inst_14359 = (inst_14357 < inst_14356);
var inst_14360 = inst_14359;
var state_14414__$1 = state_14414;
if(cljs.core.truth_(inst_14360)){
var statearr_14462_14530 = state_14414__$1;
(statearr_14462_14530[(1)] = (27));

} else {
var statearr_14463_14531 = state_14414__$1;
(statearr_14463_14531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (34))){
var state_14414__$1 = state_14414;
var statearr_14464_14532 = state_14414__$1;
(statearr_14464_14532[(2)] = null);

(statearr_14464_14532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (17))){
var state_14414__$1 = state_14414;
var statearr_14465_14533 = state_14414__$1;
(statearr_14465_14533[(2)] = null);

(statearr_14465_14533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (3))){
var inst_14412 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14414__$1,inst_14412);
} else {
if((state_val_14415 === (12))){
var inst_14341 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14466_14534 = state_14414__$1;
(statearr_14466_14534[(2)] = inst_14341);

(statearr_14466_14534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (2))){
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14414__$1,(4),ch);
} else {
if((state_val_14415 === (23))){
var state_14414__$1 = state_14414;
var statearr_14467_14535 = state_14414__$1;
(statearr_14467_14535[(2)] = null);

(statearr_14467_14535[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (35))){
var inst_14396 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14468_14536 = state_14414__$1;
(statearr_14468_14536[(2)] = inst_14396);

(statearr_14468_14536[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (19))){
var inst_14315 = (state_14414[(7)]);
var inst_14319 = cljs.core.chunk_first.call(null,inst_14315);
var inst_14320 = cljs.core.chunk_rest.call(null,inst_14315);
var inst_14321 = cljs.core.count.call(null,inst_14319);
var inst_14295 = inst_14320;
var inst_14296 = inst_14319;
var inst_14297 = inst_14321;
var inst_14298 = (0);
var state_14414__$1 = (function (){var statearr_14469 = state_14414;
(statearr_14469[(14)] = inst_14298);

(statearr_14469[(15)] = inst_14296);

(statearr_14469[(16)] = inst_14297);

(statearr_14469[(17)] = inst_14295);

return statearr_14469;
})();
var statearr_14470_14537 = state_14414__$1;
(statearr_14470_14537[(2)] = null);

(statearr_14470_14537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (11))){
var inst_14315 = (state_14414[(7)]);
var inst_14295 = (state_14414[(17)]);
var inst_14315__$1 = cljs.core.seq.call(null,inst_14295);
var state_14414__$1 = (function (){var statearr_14471 = state_14414;
(statearr_14471[(7)] = inst_14315__$1);

return statearr_14471;
})();
if(inst_14315__$1){
var statearr_14472_14538 = state_14414__$1;
(statearr_14472_14538[(1)] = (16));

} else {
var statearr_14473_14539 = state_14414__$1;
(statearr_14473_14539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (9))){
var inst_14343 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14474_14540 = state_14414__$1;
(statearr_14474_14540[(2)] = inst_14343);

(statearr_14474_14540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (5))){
var inst_14293 = cljs.core.deref.call(null,cs);
var inst_14294 = cljs.core.seq.call(null,inst_14293);
var inst_14295 = inst_14294;
var inst_14296 = null;
var inst_14297 = (0);
var inst_14298 = (0);
var state_14414__$1 = (function (){var statearr_14475 = state_14414;
(statearr_14475[(14)] = inst_14298);

(statearr_14475[(15)] = inst_14296);

(statearr_14475[(16)] = inst_14297);

(statearr_14475[(17)] = inst_14295);

return statearr_14475;
})();
var statearr_14476_14541 = state_14414__$1;
(statearr_14476_14541[(2)] = null);

(statearr_14476_14541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (14))){
var state_14414__$1 = state_14414;
var statearr_14477_14542 = state_14414__$1;
(statearr_14477_14542[(2)] = null);

(statearr_14477_14542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (45))){
var inst_14404 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14478_14543 = state_14414__$1;
(statearr_14478_14543[(2)] = inst_14404);

(statearr_14478_14543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (26))){
var inst_14346 = (state_14414[(29)]);
var inst_14400 = (state_14414[(2)]);
var inst_14401 = cljs.core.seq.call(null,inst_14346);
var state_14414__$1 = (function (){var statearr_14479 = state_14414;
(statearr_14479[(31)] = inst_14400);

return statearr_14479;
})();
if(inst_14401){
var statearr_14480_14544 = state_14414__$1;
(statearr_14480_14544[(1)] = (42));

} else {
var statearr_14481_14545 = state_14414__$1;
(statearr_14481_14545[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (16))){
var inst_14315 = (state_14414[(7)]);
var inst_14317 = cljs.core.chunked_seq_QMARK_.call(null,inst_14315);
var state_14414__$1 = state_14414;
if(inst_14317){
var statearr_14482_14546 = state_14414__$1;
(statearr_14482_14546[(1)] = (19));

} else {
var statearr_14483_14547 = state_14414__$1;
(statearr_14483_14547[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (38))){
var inst_14393 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14484_14548 = state_14414__$1;
(statearr_14484_14548[(2)] = inst_14393);

(statearr_14484_14548[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (30))){
var state_14414__$1 = state_14414;
var statearr_14485_14549 = state_14414__$1;
(statearr_14485_14549[(2)] = null);

(statearr_14485_14549[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (10))){
var inst_14298 = (state_14414[(14)]);
var inst_14296 = (state_14414[(15)]);
var inst_14304 = cljs.core._nth.call(null,inst_14296,inst_14298);
var inst_14305 = cljs.core.nth.call(null,inst_14304,(0),null);
var inst_14306 = cljs.core.nth.call(null,inst_14304,(1),null);
var state_14414__$1 = (function (){var statearr_14486 = state_14414;
(statearr_14486[(26)] = inst_14305);

return statearr_14486;
})();
if(cljs.core.truth_(inst_14306)){
var statearr_14487_14550 = state_14414__$1;
(statearr_14487_14550[(1)] = (13));

} else {
var statearr_14488_14551 = state_14414__$1;
(statearr_14488_14551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (18))){
var inst_14339 = (state_14414[(2)]);
var state_14414__$1 = state_14414;
var statearr_14489_14552 = state_14414__$1;
(statearr_14489_14552[(2)] = inst_14339);

(statearr_14489_14552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (42))){
var state_14414__$1 = state_14414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14414__$1,(45),dchan);
} else {
if((state_val_14415 === (37))){
var inst_14382 = (state_14414[(23)]);
var inst_14373 = (state_14414[(25)]);
var inst_14286 = (state_14414[(10)]);
var inst_14382__$1 = cljs.core.first.call(null,inst_14373);
var inst_14383 = cljs.core.async.put_BANG_.call(null,inst_14382__$1,inst_14286,done);
var state_14414__$1 = (function (){var statearr_14490 = state_14414;
(statearr_14490[(23)] = inst_14382__$1);

return statearr_14490;
})();
if(cljs.core.truth_(inst_14383)){
var statearr_14491_14553 = state_14414__$1;
(statearr_14491_14553[(1)] = (39));

} else {
var statearr_14492_14554 = state_14414__$1;
(statearr_14492_14554[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14415 === (8))){
var inst_14298 = (state_14414[(14)]);
var inst_14297 = (state_14414[(16)]);
var inst_14300 = (inst_14298 < inst_14297);
var inst_14301 = inst_14300;
var state_14414__$1 = state_14414;
if(cljs.core.truth_(inst_14301)){
var statearr_14493_14555 = state_14414__$1;
(statearr_14493_14555[(1)] = (10));

} else {
var statearr_14494_14556 = state_14414__$1;
(statearr_14494_14556[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___14502,cs,m,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___14502,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6479__auto__ = null;
var cljs$core$async$mult_$_state_machine__6479__auto____0 = (function (){
var statearr_14498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14498[(0)] = cljs$core$async$mult_$_state_machine__6479__auto__);

(statearr_14498[(1)] = (1));

return statearr_14498;
});
var cljs$core$async$mult_$_state_machine__6479__auto____1 = (function (state_14414){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14499){if((e14499 instanceof Object)){
var ex__6482__auto__ = e14499;
var statearr_14500_14557 = state_14414;
(statearr_14500_14557[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14558 = state_14414;
state_14414 = G__14558;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6479__auto__ = function(state_14414){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6479__auto____1.call(this,state_14414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6479__auto____0;
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6479__auto____1;
return cljs$core$async$mult_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14502,cs,m,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_14501 = f__6541__auto__.call(null);
(statearr_14501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14502);

return statearr_14501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14502,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__14560 = arguments.length;
switch (G__14560) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14563 = {};
return obj14563;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4170__auto__ = m;
if(and__4170__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4818__auto__ = (((m == null))?null:m);
return (function (){var or__4182__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5218__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5218__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14568){
var map__14569 = p__14568;
var map__14569__$1 = ((cljs.core.seq_QMARK_.call(null,map__14569))?cljs.core.apply.call(null,cljs.core.hash_map,map__14569):map__14569);
var opts = map__14569__$1;
var statearr_14570_14573 = state;
(statearr_14570_14573[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14569,map__14569__$1,opts){
return (function (val){
var statearr_14571_14574 = state;
(statearr_14571_14574[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14569,map__14569__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14572_14575 = state;
(statearr_14572_14575[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14564){
var G__14565 = cljs.core.first.call(null,seq14564);
var seq14564__$1 = cljs.core.next.call(null,seq14564);
var G__14566 = cljs.core.first.call(null,seq14564__$1);
var seq14564__$2 = cljs.core.next.call(null,seq14564__$1);
var G__14567 = cljs.core.first.call(null,seq14564__$2);
var seq14564__$3 = cljs.core.next.call(null,seq14564__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14565,G__14566,G__14567,seq14564__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14695 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14695 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14696){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14696 = meta14696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14695.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14697){
var self__ = this;
var _14697__$1 = this;
return self__.meta14696;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14697,meta14696__$1){
var self__ = this;
var _14697__$1 = this;
return (new cljs.core.async.t14695(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14696__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14695.cljs$lang$type = true;

cljs.core.async.t14695.cljs$lang$ctorStr = "cljs.core.async/t14695";

cljs.core.async.t14695.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14695");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14695 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14695(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14696){
return (new cljs.core.async.t14695(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14696));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14695(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___14814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14767){
var state_val_14768 = (state_14767[(1)]);
if((state_val_14768 === (7))){
var inst_14711 = (state_14767[(7)]);
var inst_14716 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14711);
var state_14767__$1 = state_14767;
var statearr_14769_14815 = state_14767__$1;
(statearr_14769_14815[(2)] = inst_14716);

(statearr_14769_14815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (20))){
var inst_14726 = (state_14767[(8)]);
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14767__$1,(23),out,inst_14726);
} else {
if((state_val_14768 === (1))){
var inst_14701 = (state_14767[(9)]);
var inst_14701__$1 = calc_state.call(null);
var inst_14702 = cljs.core.seq_QMARK_.call(null,inst_14701__$1);
var state_14767__$1 = (function (){var statearr_14770 = state_14767;
(statearr_14770[(9)] = inst_14701__$1);

return statearr_14770;
})();
if(inst_14702){
var statearr_14771_14816 = state_14767__$1;
(statearr_14771_14816[(1)] = (2));

} else {
var statearr_14772_14817 = state_14767__$1;
(statearr_14772_14817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (24))){
var inst_14719 = (state_14767[(10)]);
var inst_14711 = inst_14719;
var state_14767__$1 = (function (){var statearr_14773 = state_14767;
(statearr_14773[(7)] = inst_14711);

return statearr_14773;
})();
var statearr_14774_14818 = state_14767__$1;
(statearr_14774_14818[(2)] = null);

(statearr_14774_14818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (4))){
var inst_14701 = (state_14767[(9)]);
var inst_14707 = (state_14767[(2)]);
var inst_14708 = cljs.core.get.call(null,inst_14707,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14709 = cljs.core.get.call(null,inst_14707,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14710 = cljs.core.get.call(null,inst_14707,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14711 = inst_14701;
var state_14767__$1 = (function (){var statearr_14775 = state_14767;
(statearr_14775[(11)] = inst_14709);

(statearr_14775[(7)] = inst_14711);

(statearr_14775[(12)] = inst_14708);

(statearr_14775[(13)] = inst_14710);

return statearr_14775;
})();
var statearr_14776_14819 = state_14767__$1;
(statearr_14776_14819[(2)] = null);

(statearr_14776_14819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (15))){
var state_14767__$1 = state_14767;
var statearr_14777_14820 = state_14767__$1;
(statearr_14777_14820[(2)] = null);

(statearr_14777_14820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (21))){
var inst_14719 = (state_14767[(10)]);
var inst_14711 = inst_14719;
var state_14767__$1 = (function (){var statearr_14778 = state_14767;
(statearr_14778[(7)] = inst_14711);

return statearr_14778;
})();
var statearr_14779_14821 = state_14767__$1;
(statearr_14779_14821[(2)] = null);

(statearr_14779_14821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (13))){
var inst_14763 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14780_14822 = state_14767__$1;
(statearr_14780_14822[(2)] = inst_14763);

(statearr_14780_14822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (22))){
var inst_14761 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14781_14823 = state_14767__$1;
(statearr_14781_14823[(2)] = inst_14761);

(statearr_14781_14823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (6))){
var inst_14765 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14767__$1,inst_14765);
} else {
if((state_val_14768 === (25))){
var state_14767__$1 = state_14767;
var statearr_14782_14824 = state_14767__$1;
(statearr_14782_14824[(2)] = null);

(statearr_14782_14824[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (17))){
var inst_14741 = (state_14767[(14)]);
var state_14767__$1 = state_14767;
var statearr_14783_14825 = state_14767__$1;
(statearr_14783_14825[(2)] = inst_14741);

(statearr_14783_14825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (3))){
var inst_14701 = (state_14767[(9)]);
var state_14767__$1 = state_14767;
var statearr_14784_14826 = state_14767__$1;
(statearr_14784_14826[(2)] = inst_14701);

(statearr_14784_14826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (12))){
var inst_14722 = (state_14767[(15)]);
var inst_14741 = (state_14767[(14)]);
var inst_14727 = (state_14767[(16)]);
var inst_14741__$1 = inst_14722.call(null,inst_14727);
var state_14767__$1 = (function (){var statearr_14785 = state_14767;
(statearr_14785[(14)] = inst_14741__$1);

return statearr_14785;
})();
if(cljs.core.truth_(inst_14741__$1)){
var statearr_14786_14827 = state_14767__$1;
(statearr_14786_14827[(1)] = (17));

} else {
var statearr_14787_14828 = state_14767__$1;
(statearr_14787_14828[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (2))){
var inst_14701 = (state_14767[(9)]);
var inst_14704 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14701);
var state_14767__$1 = state_14767;
var statearr_14788_14829 = state_14767__$1;
(statearr_14788_14829[(2)] = inst_14704);

(statearr_14788_14829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (23))){
var inst_14752 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
if(cljs.core.truth_(inst_14752)){
var statearr_14789_14830 = state_14767__$1;
(statearr_14789_14830[(1)] = (24));

} else {
var statearr_14790_14831 = state_14767__$1;
(statearr_14790_14831[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (19))){
var inst_14749 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
if(cljs.core.truth_(inst_14749)){
var statearr_14791_14832 = state_14767__$1;
(statearr_14791_14832[(1)] = (20));

} else {
var statearr_14792_14833 = state_14767__$1;
(statearr_14792_14833[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (11))){
var inst_14726 = (state_14767[(8)]);
var inst_14732 = (inst_14726 == null);
var state_14767__$1 = state_14767;
if(cljs.core.truth_(inst_14732)){
var statearr_14793_14834 = state_14767__$1;
(statearr_14793_14834[(1)] = (14));

} else {
var statearr_14794_14835 = state_14767__$1;
(statearr_14794_14835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (9))){
var inst_14719 = (state_14767[(10)]);
var inst_14719__$1 = (state_14767[(2)]);
var inst_14720 = cljs.core.get.call(null,inst_14719__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14721 = cljs.core.get.call(null,inst_14719__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14722 = cljs.core.get.call(null,inst_14719__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14767__$1 = (function (){var statearr_14795 = state_14767;
(statearr_14795[(15)] = inst_14722);

(statearr_14795[(17)] = inst_14721);

(statearr_14795[(10)] = inst_14719__$1);

return statearr_14795;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14767__$1,(10),inst_14720);
} else {
if((state_val_14768 === (5))){
var inst_14711 = (state_14767[(7)]);
var inst_14714 = cljs.core.seq_QMARK_.call(null,inst_14711);
var state_14767__$1 = state_14767;
if(inst_14714){
var statearr_14796_14836 = state_14767__$1;
(statearr_14796_14836[(1)] = (7));

} else {
var statearr_14797_14837 = state_14767__$1;
(statearr_14797_14837[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (14))){
var inst_14727 = (state_14767[(16)]);
var inst_14734 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14727);
var state_14767__$1 = state_14767;
var statearr_14798_14838 = state_14767__$1;
(statearr_14798_14838[(2)] = inst_14734);

(statearr_14798_14838[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (26))){
var inst_14757 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14799_14839 = state_14767__$1;
(statearr_14799_14839[(2)] = inst_14757);

(statearr_14799_14839[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (16))){
var inst_14737 = (state_14767[(2)]);
var inst_14738 = calc_state.call(null);
var inst_14711 = inst_14738;
var state_14767__$1 = (function (){var statearr_14800 = state_14767;
(statearr_14800[(7)] = inst_14711);

(statearr_14800[(18)] = inst_14737);

return statearr_14800;
})();
var statearr_14801_14840 = state_14767__$1;
(statearr_14801_14840[(2)] = null);

(statearr_14801_14840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (10))){
var inst_14726 = (state_14767[(8)]);
var inst_14727 = (state_14767[(16)]);
var inst_14725 = (state_14767[(2)]);
var inst_14726__$1 = cljs.core.nth.call(null,inst_14725,(0),null);
var inst_14727__$1 = cljs.core.nth.call(null,inst_14725,(1),null);
var inst_14728 = (inst_14726__$1 == null);
var inst_14729 = cljs.core._EQ_.call(null,inst_14727__$1,change);
var inst_14730 = (inst_14728) || (inst_14729);
var state_14767__$1 = (function (){var statearr_14802 = state_14767;
(statearr_14802[(8)] = inst_14726__$1);

(statearr_14802[(16)] = inst_14727__$1);

return statearr_14802;
})();
if(cljs.core.truth_(inst_14730)){
var statearr_14803_14841 = state_14767__$1;
(statearr_14803_14841[(1)] = (11));

} else {
var statearr_14804_14842 = state_14767__$1;
(statearr_14804_14842[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (18))){
var inst_14722 = (state_14767[(15)]);
var inst_14727 = (state_14767[(16)]);
var inst_14721 = (state_14767[(17)]);
var inst_14744 = cljs.core.empty_QMARK_.call(null,inst_14722);
var inst_14745 = inst_14721.call(null,inst_14727);
var inst_14746 = cljs.core.not.call(null,inst_14745);
var inst_14747 = (inst_14744) && (inst_14746);
var state_14767__$1 = state_14767;
var statearr_14805_14843 = state_14767__$1;
(statearr_14805_14843[(2)] = inst_14747);

(statearr_14805_14843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (8))){
var inst_14711 = (state_14767[(7)]);
var state_14767__$1 = state_14767;
var statearr_14806_14844 = state_14767__$1;
(statearr_14806_14844[(2)] = inst_14711);

(statearr_14806_14844[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___14814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6478__auto__,c__6540__auto___14814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6479__auto__ = null;
var cljs$core$async$mix_$_state_machine__6479__auto____0 = (function (){
var statearr_14810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14810[(0)] = cljs$core$async$mix_$_state_machine__6479__auto__);

(statearr_14810[(1)] = (1));

return statearr_14810;
});
var cljs$core$async$mix_$_state_machine__6479__auto____1 = (function (state_14767){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14811){if((e14811 instanceof Object)){
var ex__6482__auto__ = e14811;
var statearr_14812_14845 = state_14767;
(statearr_14812_14845[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14846 = state_14767;
state_14767 = G__14846;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6479__auto__ = function(state_14767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6479__auto____1.call(this,state_14767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6479__auto____0;
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6479__auto____1;
return cljs$core$async$mix_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6542__auto__ = (function (){var statearr_14813 = f__6541__auto__.call(null);
(statearr_14813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14814);

return statearr_14813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj14848 = {};
return obj14848;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__14850 = arguments.length;
switch (G__14850) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4170__auto__ = p;
if(and__4170__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4170__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4818__auto__ = (((p == null))?null:p);
return (function (){var or__4182__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4818__auto__)]);
if(or__4182__auto__){
return or__4182__auto__;
} else {
var or__4182__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4182__auto____$1){
return or__4182__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__14854 = arguments.length;
switch (G__14854) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4182__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4182__auto__,mults){
return (function (p1__14852_SHARP_){
if(cljs.core.truth_(p1__14852_SHARP_.call(null,topic))){
return p1__14852_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14852_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14855 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14856){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14856 = meta14856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14855.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14855.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14855.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14855.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14855.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14855.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14855.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14855.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14857){
var self__ = this;
var _14857__$1 = this;
return self__.meta14856;
});})(mults,ensure_mult))
;

cljs.core.async.t14855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14857,meta14856__$1){
var self__ = this;
var _14857__$1 = this;
return (new cljs.core.async.t14855(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14856__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14855.cljs$lang$type = true;

cljs.core.async.t14855.cljs$lang$ctorStr = "cljs.core.async/t14855";

cljs.core.async.t14855.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14855");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14855 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14855(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14856){
return (new cljs.core.async.t14855(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14856));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14855(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___14978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14978,mults,ensure_mult,p){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14978,mults,ensure_mult,p){
return (function (state_14929){
var state_val_14930 = (state_14929[(1)]);
if((state_val_14930 === (7))){
var inst_14925 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14931_14979 = state_14929__$1;
(statearr_14931_14979[(2)] = inst_14925);

(statearr_14931_14979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (20))){
var state_14929__$1 = state_14929;
var statearr_14932_14980 = state_14929__$1;
(statearr_14932_14980[(2)] = null);

(statearr_14932_14980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (1))){
var state_14929__$1 = state_14929;
var statearr_14933_14981 = state_14929__$1;
(statearr_14933_14981[(2)] = null);

(statearr_14933_14981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (24))){
var inst_14908 = (state_14929[(7)]);
var inst_14917 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14908);
var state_14929__$1 = state_14929;
var statearr_14934_14982 = state_14929__$1;
(statearr_14934_14982[(2)] = inst_14917);

(statearr_14934_14982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (4))){
var inst_14860 = (state_14929[(8)]);
var inst_14860__$1 = (state_14929[(2)]);
var inst_14861 = (inst_14860__$1 == null);
var state_14929__$1 = (function (){var statearr_14935 = state_14929;
(statearr_14935[(8)] = inst_14860__$1);

return statearr_14935;
})();
if(cljs.core.truth_(inst_14861)){
var statearr_14936_14983 = state_14929__$1;
(statearr_14936_14983[(1)] = (5));

} else {
var statearr_14937_14984 = state_14929__$1;
(statearr_14937_14984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (15))){
var inst_14902 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14938_14985 = state_14929__$1;
(statearr_14938_14985[(2)] = inst_14902);

(statearr_14938_14985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (21))){
var inst_14922 = (state_14929[(2)]);
var state_14929__$1 = (function (){var statearr_14939 = state_14929;
(statearr_14939[(9)] = inst_14922);

return statearr_14939;
})();
var statearr_14940_14986 = state_14929__$1;
(statearr_14940_14986[(2)] = null);

(statearr_14940_14986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (13))){
var inst_14884 = (state_14929[(10)]);
var inst_14886 = cljs.core.chunked_seq_QMARK_.call(null,inst_14884);
var state_14929__$1 = state_14929;
if(inst_14886){
var statearr_14941_14987 = state_14929__$1;
(statearr_14941_14987[(1)] = (16));

} else {
var statearr_14942_14988 = state_14929__$1;
(statearr_14942_14988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (22))){
var inst_14914 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14914)){
var statearr_14943_14989 = state_14929__$1;
(statearr_14943_14989[(1)] = (23));

} else {
var statearr_14944_14990 = state_14929__$1;
(statearr_14944_14990[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (6))){
var inst_14908 = (state_14929[(7)]);
var inst_14860 = (state_14929[(8)]);
var inst_14910 = (state_14929[(11)]);
var inst_14908__$1 = topic_fn.call(null,inst_14860);
var inst_14909 = cljs.core.deref.call(null,mults);
var inst_14910__$1 = cljs.core.get.call(null,inst_14909,inst_14908__$1);
var state_14929__$1 = (function (){var statearr_14945 = state_14929;
(statearr_14945[(7)] = inst_14908__$1);

(statearr_14945[(11)] = inst_14910__$1);

return statearr_14945;
})();
if(cljs.core.truth_(inst_14910__$1)){
var statearr_14946_14991 = state_14929__$1;
(statearr_14946_14991[(1)] = (19));

} else {
var statearr_14947_14992 = state_14929__$1;
(statearr_14947_14992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (25))){
var inst_14919 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14948_14993 = state_14929__$1;
(statearr_14948_14993[(2)] = inst_14919);

(statearr_14948_14993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (17))){
var inst_14884 = (state_14929[(10)]);
var inst_14893 = cljs.core.first.call(null,inst_14884);
var inst_14894 = cljs.core.async.muxch_STAR_.call(null,inst_14893);
var inst_14895 = cljs.core.async.close_BANG_.call(null,inst_14894);
var inst_14896 = cljs.core.next.call(null,inst_14884);
var inst_14870 = inst_14896;
var inst_14871 = null;
var inst_14872 = (0);
var inst_14873 = (0);
var state_14929__$1 = (function (){var statearr_14949 = state_14929;
(statearr_14949[(12)] = inst_14872);

(statearr_14949[(13)] = inst_14895);

(statearr_14949[(14)] = inst_14873);

(statearr_14949[(15)] = inst_14870);

(statearr_14949[(16)] = inst_14871);

return statearr_14949;
})();
var statearr_14950_14994 = state_14929__$1;
(statearr_14950_14994[(2)] = null);

(statearr_14950_14994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (3))){
var inst_14927 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14929__$1,inst_14927);
} else {
if((state_val_14930 === (12))){
var inst_14904 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14951_14995 = state_14929__$1;
(statearr_14951_14995[(2)] = inst_14904);

(statearr_14951_14995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (2))){
var state_14929__$1 = state_14929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14929__$1,(4),ch);
} else {
if((state_val_14930 === (23))){
var state_14929__$1 = state_14929;
var statearr_14952_14996 = state_14929__$1;
(statearr_14952_14996[(2)] = null);

(statearr_14952_14996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (19))){
var inst_14860 = (state_14929[(8)]);
var inst_14910 = (state_14929[(11)]);
var inst_14912 = cljs.core.async.muxch_STAR_.call(null,inst_14910);
var state_14929__$1 = state_14929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14929__$1,(22),inst_14912,inst_14860);
} else {
if((state_val_14930 === (11))){
var inst_14884 = (state_14929[(10)]);
var inst_14870 = (state_14929[(15)]);
var inst_14884__$1 = cljs.core.seq.call(null,inst_14870);
var state_14929__$1 = (function (){var statearr_14953 = state_14929;
(statearr_14953[(10)] = inst_14884__$1);

return statearr_14953;
})();
if(inst_14884__$1){
var statearr_14954_14997 = state_14929__$1;
(statearr_14954_14997[(1)] = (13));

} else {
var statearr_14955_14998 = state_14929__$1;
(statearr_14955_14998[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (9))){
var inst_14906 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14956_14999 = state_14929__$1;
(statearr_14956_14999[(2)] = inst_14906);

(statearr_14956_14999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (5))){
var inst_14867 = cljs.core.deref.call(null,mults);
var inst_14868 = cljs.core.vals.call(null,inst_14867);
var inst_14869 = cljs.core.seq.call(null,inst_14868);
var inst_14870 = inst_14869;
var inst_14871 = null;
var inst_14872 = (0);
var inst_14873 = (0);
var state_14929__$1 = (function (){var statearr_14957 = state_14929;
(statearr_14957[(12)] = inst_14872);

(statearr_14957[(14)] = inst_14873);

(statearr_14957[(15)] = inst_14870);

(statearr_14957[(16)] = inst_14871);

return statearr_14957;
})();
var statearr_14958_15000 = state_14929__$1;
(statearr_14958_15000[(2)] = null);

(statearr_14958_15000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (14))){
var state_14929__$1 = state_14929;
var statearr_14962_15001 = state_14929__$1;
(statearr_14962_15001[(2)] = null);

(statearr_14962_15001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (16))){
var inst_14884 = (state_14929[(10)]);
var inst_14888 = cljs.core.chunk_first.call(null,inst_14884);
var inst_14889 = cljs.core.chunk_rest.call(null,inst_14884);
var inst_14890 = cljs.core.count.call(null,inst_14888);
var inst_14870 = inst_14889;
var inst_14871 = inst_14888;
var inst_14872 = inst_14890;
var inst_14873 = (0);
var state_14929__$1 = (function (){var statearr_14963 = state_14929;
(statearr_14963[(12)] = inst_14872);

(statearr_14963[(14)] = inst_14873);

(statearr_14963[(15)] = inst_14870);

(statearr_14963[(16)] = inst_14871);

return statearr_14963;
})();
var statearr_14964_15002 = state_14929__$1;
(statearr_14964_15002[(2)] = null);

(statearr_14964_15002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (10))){
var inst_14872 = (state_14929[(12)]);
var inst_14873 = (state_14929[(14)]);
var inst_14870 = (state_14929[(15)]);
var inst_14871 = (state_14929[(16)]);
var inst_14878 = cljs.core._nth.call(null,inst_14871,inst_14873);
var inst_14879 = cljs.core.async.muxch_STAR_.call(null,inst_14878);
var inst_14880 = cljs.core.async.close_BANG_.call(null,inst_14879);
var inst_14881 = (inst_14873 + (1));
var tmp14959 = inst_14872;
var tmp14960 = inst_14870;
var tmp14961 = inst_14871;
var inst_14870__$1 = tmp14960;
var inst_14871__$1 = tmp14961;
var inst_14872__$1 = tmp14959;
var inst_14873__$1 = inst_14881;
var state_14929__$1 = (function (){var statearr_14965 = state_14929;
(statearr_14965[(12)] = inst_14872__$1);

(statearr_14965[(14)] = inst_14873__$1);

(statearr_14965[(17)] = inst_14880);

(statearr_14965[(15)] = inst_14870__$1);

(statearr_14965[(16)] = inst_14871__$1);

return statearr_14965;
})();
var statearr_14966_15003 = state_14929__$1;
(statearr_14966_15003[(2)] = null);

(statearr_14966_15003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (18))){
var inst_14899 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14967_15004 = state_14929__$1;
(statearr_14967_15004[(2)] = inst_14899);

(statearr_14967_15004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (8))){
var inst_14872 = (state_14929[(12)]);
var inst_14873 = (state_14929[(14)]);
var inst_14875 = (inst_14873 < inst_14872);
var inst_14876 = inst_14875;
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14876)){
var statearr_14968_15005 = state_14929__$1;
(statearr_14968_15005[(1)] = (10));

} else {
var statearr_14969_15006 = state_14929__$1;
(statearr_14969_15006[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___14978,mults,ensure_mult,p))
;
return ((function (switch__6478__auto__,c__6540__auto___14978,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_14973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14973[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_14973[(1)] = (1));

return statearr_14973;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_14929){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14974){if((e14974 instanceof Object)){
var ex__6482__auto__ = e14974;
var statearr_14975_15007 = state_14929;
(statearr_14975_15007[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15008 = state_14929;
state_14929 = G__15008;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_14929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_14929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14978,mults,ensure_mult,p))
})();
var state__6542__auto__ = (function (){var statearr_14976 = f__6541__auto__.call(null);
(statearr_14976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14978);

return statearr_14976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14978,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__15010 = arguments.length;
switch (G__15010) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__15013 = arguments.length;
switch (G__15013) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__15016 = arguments.length;
switch (G__15016) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6540__auto___15086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15055){
var state_val_15056 = (state_15055[(1)]);
if((state_val_15056 === (7))){
var state_15055__$1 = state_15055;
var statearr_15057_15087 = state_15055__$1;
(statearr_15057_15087[(2)] = null);

(statearr_15057_15087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (1))){
var state_15055__$1 = state_15055;
var statearr_15058_15088 = state_15055__$1;
(statearr_15058_15088[(2)] = null);

(statearr_15058_15088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (4))){
var inst_15019 = (state_15055[(7)]);
var inst_15021 = (inst_15019 < cnt);
var state_15055__$1 = state_15055;
if(cljs.core.truth_(inst_15021)){
var statearr_15059_15089 = state_15055__$1;
(statearr_15059_15089[(1)] = (6));

} else {
var statearr_15060_15090 = state_15055__$1;
(statearr_15060_15090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (15))){
var inst_15051 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
var statearr_15061_15091 = state_15055__$1;
(statearr_15061_15091[(2)] = inst_15051);

(statearr_15061_15091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (13))){
var inst_15044 = cljs.core.async.close_BANG_.call(null,out);
var state_15055__$1 = state_15055;
var statearr_15062_15092 = state_15055__$1;
(statearr_15062_15092[(2)] = inst_15044);

(statearr_15062_15092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (6))){
var state_15055__$1 = state_15055;
var statearr_15063_15093 = state_15055__$1;
(statearr_15063_15093[(2)] = null);

(statearr_15063_15093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (3))){
var inst_15053 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15055__$1,inst_15053);
} else {
if((state_val_15056 === (12))){
var inst_15041 = (state_15055[(8)]);
var inst_15041__$1 = (state_15055[(2)]);
var inst_15042 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15041__$1);
var state_15055__$1 = (function (){var statearr_15064 = state_15055;
(statearr_15064[(8)] = inst_15041__$1);

return statearr_15064;
})();
if(cljs.core.truth_(inst_15042)){
var statearr_15065_15094 = state_15055__$1;
(statearr_15065_15094[(1)] = (13));

} else {
var statearr_15066_15095 = state_15055__$1;
(statearr_15066_15095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (2))){
var inst_15018 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15019 = (0);
var state_15055__$1 = (function (){var statearr_15067 = state_15055;
(statearr_15067[(7)] = inst_15019);

(statearr_15067[(9)] = inst_15018);

return statearr_15067;
})();
var statearr_15068_15096 = state_15055__$1;
(statearr_15068_15096[(2)] = null);

(statearr_15068_15096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (11))){
var inst_15019 = (state_15055[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15055,(10),Object,null,(9));
var inst_15028 = chs__$1.call(null,inst_15019);
var inst_15029 = done.call(null,inst_15019);
var inst_15030 = cljs.core.async.take_BANG_.call(null,inst_15028,inst_15029);
var state_15055__$1 = state_15055;
var statearr_15069_15097 = state_15055__$1;
(statearr_15069_15097[(2)] = inst_15030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (9))){
var inst_15019 = (state_15055[(7)]);
var inst_15032 = (state_15055[(2)]);
var inst_15033 = (inst_15019 + (1));
var inst_15019__$1 = inst_15033;
var state_15055__$1 = (function (){var statearr_15070 = state_15055;
(statearr_15070[(7)] = inst_15019__$1);

(statearr_15070[(10)] = inst_15032);

return statearr_15070;
})();
var statearr_15071_15098 = state_15055__$1;
(statearr_15071_15098[(2)] = null);

(statearr_15071_15098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (5))){
var inst_15039 = (state_15055[(2)]);
var state_15055__$1 = (function (){var statearr_15072 = state_15055;
(statearr_15072[(11)] = inst_15039);

return statearr_15072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15055__$1,(12),dchan);
} else {
if((state_val_15056 === (14))){
var inst_15041 = (state_15055[(8)]);
var inst_15046 = cljs.core.apply.call(null,f,inst_15041);
var state_15055__$1 = state_15055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15055__$1,(16),out,inst_15046);
} else {
if((state_val_15056 === (16))){
var inst_15048 = (state_15055[(2)]);
var state_15055__$1 = (function (){var statearr_15073 = state_15055;
(statearr_15073[(12)] = inst_15048);

return statearr_15073;
})();
var statearr_15074_15099 = state_15055__$1;
(statearr_15074_15099[(2)] = null);

(statearr_15074_15099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (10))){
var inst_15023 = (state_15055[(2)]);
var inst_15024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15055__$1 = (function (){var statearr_15075 = state_15055;
(statearr_15075[(13)] = inst_15023);

return statearr_15075;
})();
var statearr_15076_15100 = state_15055__$1;
(statearr_15076_15100[(2)] = inst_15024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15056 === (8))){
var inst_15037 = (state_15055[(2)]);
var state_15055__$1 = state_15055;
var statearr_15077_15101 = state_15055__$1;
(statearr_15077_15101[(2)] = inst_15037);

(statearr_15077_15101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15081[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15081[(1)] = (1));

return statearr_15081;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15055){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15082){if((e15082 instanceof Object)){
var ex__6482__auto__ = e15082;
var statearr_15083_15102 = state_15055;
(statearr_15083_15102[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15103 = state_15055;
state_15055 = G__15103;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_15084 = f__6541__auto__.call(null);
(statearr_15084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15086);

return statearr_15084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15086,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__15106 = arguments.length;
switch (G__15106) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___15161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15161,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15161,out){
return (function (state_15136){
var state_val_15137 = (state_15136[(1)]);
if((state_val_15137 === (7))){
var inst_15116 = (state_15136[(7)]);
var inst_15115 = (state_15136[(8)]);
var inst_15115__$1 = (state_15136[(2)]);
var inst_15116__$1 = cljs.core.nth.call(null,inst_15115__$1,(0),null);
var inst_15117 = cljs.core.nth.call(null,inst_15115__$1,(1),null);
var inst_15118 = (inst_15116__$1 == null);
var state_15136__$1 = (function (){var statearr_15138 = state_15136;
(statearr_15138[(9)] = inst_15117);

(statearr_15138[(7)] = inst_15116__$1);

(statearr_15138[(8)] = inst_15115__$1);

return statearr_15138;
})();
if(cljs.core.truth_(inst_15118)){
var statearr_15139_15162 = state_15136__$1;
(statearr_15139_15162[(1)] = (8));

} else {
var statearr_15140_15163 = state_15136__$1;
(statearr_15140_15163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (1))){
var inst_15107 = cljs.core.vec.call(null,chs);
var inst_15108 = inst_15107;
var state_15136__$1 = (function (){var statearr_15141 = state_15136;
(statearr_15141[(10)] = inst_15108);

return statearr_15141;
})();
var statearr_15142_15164 = state_15136__$1;
(statearr_15142_15164[(2)] = null);

(statearr_15142_15164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (4))){
var inst_15108 = (state_15136[(10)]);
var state_15136__$1 = state_15136;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15136__$1,(7),inst_15108);
} else {
if((state_val_15137 === (6))){
var inst_15132 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15143_15165 = state_15136__$1;
(statearr_15143_15165[(2)] = inst_15132);

(statearr_15143_15165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (3))){
var inst_15134 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15136__$1,inst_15134);
} else {
if((state_val_15137 === (2))){
var inst_15108 = (state_15136[(10)]);
var inst_15110 = cljs.core.count.call(null,inst_15108);
var inst_15111 = (inst_15110 > (0));
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15111)){
var statearr_15145_15166 = state_15136__$1;
(statearr_15145_15166[(1)] = (4));

} else {
var statearr_15146_15167 = state_15136__$1;
(statearr_15146_15167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (11))){
var inst_15108 = (state_15136[(10)]);
var inst_15125 = (state_15136[(2)]);
var tmp15144 = inst_15108;
var inst_15108__$1 = tmp15144;
var state_15136__$1 = (function (){var statearr_15147 = state_15136;
(statearr_15147[(10)] = inst_15108__$1);

(statearr_15147[(11)] = inst_15125);

return statearr_15147;
})();
var statearr_15148_15168 = state_15136__$1;
(statearr_15148_15168[(2)] = null);

(statearr_15148_15168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (9))){
var inst_15116 = (state_15136[(7)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15136__$1,(11),out,inst_15116);
} else {
if((state_val_15137 === (5))){
var inst_15130 = cljs.core.async.close_BANG_.call(null,out);
var state_15136__$1 = state_15136;
var statearr_15149_15169 = state_15136__$1;
(statearr_15149_15169[(2)] = inst_15130);

(statearr_15149_15169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (10))){
var inst_15128 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15150_15170 = state_15136__$1;
(statearr_15150_15170[(2)] = inst_15128);

(statearr_15150_15170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15137 === (8))){
var inst_15108 = (state_15136[(10)]);
var inst_15117 = (state_15136[(9)]);
var inst_15116 = (state_15136[(7)]);
var inst_15115 = (state_15136[(8)]);
var inst_15120 = (function (){var c = inst_15117;
var v = inst_15116;
var vec__15113 = inst_15115;
var cs = inst_15108;
return ((function (c,v,vec__15113,cs,inst_15108,inst_15117,inst_15116,inst_15115,state_val_15137,c__6540__auto___15161,out){
return (function (p1__15104_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15104_SHARP_);
});
;})(c,v,vec__15113,cs,inst_15108,inst_15117,inst_15116,inst_15115,state_val_15137,c__6540__auto___15161,out))
})();
var inst_15121 = cljs.core.filterv.call(null,inst_15120,inst_15108);
var inst_15108__$1 = inst_15121;
var state_15136__$1 = (function (){var statearr_15151 = state_15136;
(statearr_15151[(10)] = inst_15108__$1);

return statearr_15151;
})();
var statearr_15152_15171 = state_15136__$1;
(statearr_15152_15171[(2)] = null);

(statearr_15152_15171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15161,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15161,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15156 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15156[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15156[(1)] = (1));

return statearr_15156;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15136){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15157){if((e15157 instanceof Object)){
var ex__6482__auto__ = e15157;
var statearr_15158_15172 = state_15136;
(statearr_15158_15172[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15173 = state_15136;
state_15136 = G__15173;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15161,out))
})();
var state__6542__auto__ = (function (){var statearr_15159 = f__6541__auto__.call(null);
(statearr_15159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15161);

return statearr_15159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15161,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__15175 = arguments.length;
switch (G__15175) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___15223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15223,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15223,out){
return (function (state_15199){
var state_val_15200 = (state_15199[(1)]);
if((state_val_15200 === (7))){
var inst_15181 = (state_15199[(7)]);
var inst_15181__$1 = (state_15199[(2)]);
var inst_15182 = (inst_15181__$1 == null);
var inst_15183 = cljs.core.not.call(null,inst_15182);
var state_15199__$1 = (function (){var statearr_15201 = state_15199;
(statearr_15201[(7)] = inst_15181__$1);

return statearr_15201;
})();
if(inst_15183){
var statearr_15202_15224 = state_15199__$1;
(statearr_15202_15224[(1)] = (8));

} else {
var statearr_15203_15225 = state_15199__$1;
(statearr_15203_15225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (1))){
var inst_15176 = (0);
var state_15199__$1 = (function (){var statearr_15204 = state_15199;
(statearr_15204[(8)] = inst_15176);

return statearr_15204;
})();
var statearr_15205_15226 = state_15199__$1;
(statearr_15205_15226[(2)] = null);

(statearr_15205_15226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (4))){
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15199__$1,(7),ch);
} else {
if((state_val_15200 === (6))){
var inst_15194 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15206_15227 = state_15199__$1;
(statearr_15206_15227[(2)] = inst_15194);

(statearr_15206_15227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (3))){
var inst_15196 = (state_15199[(2)]);
var inst_15197 = cljs.core.async.close_BANG_.call(null,out);
var state_15199__$1 = (function (){var statearr_15207 = state_15199;
(statearr_15207[(9)] = inst_15196);

return statearr_15207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15199__$1,inst_15197);
} else {
if((state_val_15200 === (2))){
var inst_15176 = (state_15199[(8)]);
var inst_15178 = (inst_15176 < n);
var state_15199__$1 = state_15199;
if(cljs.core.truth_(inst_15178)){
var statearr_15208_15228 = state_15199__$1;
(statearr_15208_15228[(1)] = (4));

} else {
var statearr_15209_15229 = state_15199__$1;
(statearr_15209_15229[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (11))){
var inst_15176 = (state_15199[(8)]);
var inst_15186 = (state_15199[(2)]);
var inst_15187 = (inst_15176 + (1));
var inst_15176__$1 = inst_15187;
var state_15199__$1 = (function (){var statearr_15210 = state_15199;
(statearr_15210[(8)] = inst_15176__$1);

(statearr_15210[(10)] = inst_15186);

return statearr_15210;
})();
var statearr_15211_15230 = state_15199__$1;
(statearr_15211_15230[(2)] = null);

(statearr_15211_15230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (9))){
var state_15199__$1 = state_15199;
var statearr_15212_15231 = state_15199__$1;
(statearr_15212_15231[(2)] = null);

(statearr_15212_15231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (5))){
var state_15199__$1 = state_15199;
var statearr_15213_15232 = state_15199__$1;
(statearr_15213_15232[(2)] = null);

(statearr_15213_15232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (10))){
var inst_15191 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15214_15233 = state_15199__$1;
(statearr_15214_15233[(2)] = inst_15191);

(statearr_15214_15233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (8))){
var inst_15181 = (state_15199[(7)]);
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15199__$1,(11),out,inst_15181);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15223,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15223,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15218[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15218[(1)] = (1));

return statearr_15218;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15199){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15219){if((e15219 instanceof Object)){
var ex__6482__auto__ = e15219;
var statearr_15220_15234 = state_15199;
(statearr_15220_15234[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15235 = state_15199;
state_15199 = G__15235;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15223,out))
})();
var state__6542__auto__ = (function (){var statearr_15221 = f__6541__auto__.call(null);
(statearr_15221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15223);

return statearr_15221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15223,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15243 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15243 = (function (ch,f,map_LT_,meta15244){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15244 = meta15244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15246 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15246 = (function (fn1,_,meta15244,map_LT_,f,ch,meta15247){
this.fn1 = fn1;
this._ = _;
this.meta15244 = meta15244;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15247 = meta15247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15246.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15236_SHARP_){
return f1.call(null,(((p1__15236_SHARP_ == null))?null:self__.f.call(null,p1__15236_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15248){
var self__ = this;
var _15248__$1 = this;
return self__.meta15247;
});})(___$1))
;

cljs.core.async.t15246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15248,meta15247__$1){
var self__ = this;
var _15248__$1 = this;
return (new cljs.core.async.t15246(self__.fn1,self__._,self__.meta15244,self__.map_LT_,self__.f,self__.ch,meta15247__$1));
});})(___$1))
;

cljs.core.async.t15246.cljs$lang$type = true;

cljs.core.async.t15246.cljs$lang$ctorStr = "cljs.core.async/t15246";

cljs.core.async.t15246.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15246");
});})(___$1))
;

cljs.core.async.__GT_t15246 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15246(fn1__$1,___$2,meta15244__$1,map_LT___$1,f__$1,ch__$1,meta15247){
return (new cljs.core.async.t15246(fn1__$1,___$2,meta15244__$1,map_LT___$1,f__$1,ch__$1,meta15247));
});})(___$1))
;

}

return (new cljs.core.async.t15246(fn1,___$1,self__.meta15244,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4170__auto__ = ret;
if(cljs.core.truth_(and__4170__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4170__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15245){
var self__ = this;
var _15245__$1 = this;
return self__.meta15244;
});

cljs.core.async.t15243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15245,meta15244__$1){
var self__ = this;
var _15245__$1 = this;
return (new cljs.core.async.t15243(self__.ch,self__.f,self__.map_LT_,meta15244__$1));
});

cljs.core.async.t15243.cljs$lang$type = true;

cljs.core.async.t15243.cljs$lang$ctorStr = "cljs.core.async/t15243";

cljs.core.async.t15243.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15243");
});

cljs.core.async.__GT_t15243 = (function cljs$core$async$map_LT__$___GT_t15243(ch__$1,f__$1,map_LT___$1,meta15244){
return (new cljs.core.async.t15243(ch__$1,f__$1,map_LT___$1,meta15244));
});

}

return (new cljs.core.async.t15243(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15252 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15252 = (function (ch,f,map_GT_,meta15253){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15253 = meta15253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15252.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15252.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15252.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15254){
var self__ = this;
var _15254__$1 = this;
return self__.meta15253;
});

cljs.core.async.t15252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15254,meta15253__$1){
var self__ = this;
var _15254__$1 = this;
return (new cljs.core.async.t15252(self__.ch,self__.f,self__.map_GT_,meta15253__$1));
});

cljs.core.async.t15252.cljs$lang$type = true;

cljs.core.async.t15252.cljs$lang$ctorStr = "cljs.core.async/t15252";

cljs.core.async.t15252.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15252");
});

cljs.core.async.__GT_t15252 = (function cljs$core$async$map_GT__$___GT_t15252(ch__$1,f__$1,map_GT___$1,meta15253){
return (new cljs.core.async.t15252(ch__$1,f__$1,map_GT___$1,meta15253));
});

}

return (new cljs.core.async.t15252(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15258 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15258 = (function (ch,p,filter_GT_,meta15259){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15259 = meta15259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15258.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15260){
var self__ = this;
var _15260__$1 = this;
return self__.meta15259;
});

cljs.core.async.t15258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15260,meta15259__$1){
var self__ = this;
var _15260__$1 = this;
return (new cljs.core.async.t15258(self__.ch,self__.p,self__.filter_GT_,meta15259__$1));
});

cljs.core.async.t15258.cljs$lang$type = true;

cljs.core.async.t15258.cljs$lang$ctorStr = "cljs.core.async/t15258";

cljs.core.async.t15258.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15258");
});

cljs.core.async.__GT_t15258 = (function cljs$core$async$filter_GT__$___GT_t15258(ch__$1,p__$1,filter_GT___$1,meta15259){
return (new cljs.core.async.t15258(ch__$1,p__$1,filter_GT___$1,meta15259));
});

}

return (new cljs.core.async.t15258(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__15262 = arguments.length;
switch (G__15262) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___15305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15305,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15305,out){
return (function (state_15283){
var state_val_15284 = (state_15283[(1)]);
if((state_val_15284 === (7))){
var inst_15279 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15285_15306 = state_15283__$1;
(statearr_15285_15306[(2)] = inst_15279);

(statearr_15285_15306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (1))){
var state_15283__$1 = state_15283;
var statearr_15286_15307 = state_15283__$1;
(statearr_15286_15307[(2)] = null);

(statearr_15286_15307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (4))){
var inst_15265 = (state_15283[(7)]);
var inst_15265__$1 = (state_15283[(2)]);
var inst_15266 = (inst_15265__$1 == null);
var state_15283__$1 = (function (){var statearr_15287 = state_15283;
(statearr_15287[(7)] = inst_15265__$1);

return statearr_15287;
})();
if(cljs.core.truth_(inst_15266)){
var statearr_15288_15308 = state_15283__$1;
(statearr_15288_15308[(1)] = (5));

} else {
var statearr_15289_15309 = state_15283__$1;
(statearr_15289_15309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (6))){
var inst_15265 = (state_15283[(7)]);
var inst_15270 = p.call(null,inst_15265);
var state_15283__$1 = state_15283;
if(cljs.core.truth_(inst_15270)){
var statearr_15290_15310 = state_15283__$1;
(statearr_15290_15310[(1)] = (8));

} else {
var statearr_15291_15311 = state_15283__$1;
(statearr_15291_15311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (3))){
var inst_15281 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15283__$1,inst_15281);
} else {
if((state_val_15284 === (2))){
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15283__$1,(4),ch);
} else {
if((state_val_15284 === (11))){
var inst_15273 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15292_15312 = state_15283__$1;
(statearr_15292_15312[(2)] = inst_15273);

(statearr_15292_15312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (9))){
var state_15283__$1 = state_15283;
var statearr_15293_15313 = state_15283__$1;
(statearr_15293_15313[(2)] = null);

(statearr_15293_15313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (5))){
var inst_15268 = cljs.core.async.close_BANG_.call(null,out);
var state_15283__$1 = state_15283;
var statearr_15294_15314 = state_15283__$1;
(statearr_15294_15314[(2)] = inst_15268);

(statearr_15294_15314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (10))){
var inst_15276 = (state_15283[(2)]);
var state_15283__$1 = (function (){var statearr_15295 = state_15283;
(statearr_15295[(8)] = inst_15276);

return statearr_15295;
})();
var statearr_15296_15315 = state_15283__$1;
(statearr_15296_15315[(2)] = null);

(statearr_15296_15315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (8))){
var inst_15265 = (state_15283[(7)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15283__$1,(11),out,inst_15265);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15305,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15305,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15300 = [null,null,null,null,null,null,null,null,null];
(statearr_15300[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15300[(1)] = (1));

return statearr_15300;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15283){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15301){if((e15301 instanceof Object)){
var ex__6482__auto__ = e15301;
var statearr_15302_15316 = state_15283;
(statearr_15302_15316[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15317 = state_15283;
state_15283 = G__15317;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15305,out))
})();
var state__6542__auto__ = (function (){var statearr_15303 = f__6541__auto__.call(null);
(statearr_15303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15305);

return statearr_15303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15305,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15319 = arguments.length;
switch (G__15319) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__){
return (function (state_15486){
var state_val_15487 = (state_15486[(1)]);
if((state_val_15487 === (7))){
var inst_15482 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15488_15529 = state_15486__$1;
(statearr_15488_15529[(2)] = inst_15482);

(statearr_15488_15529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (20))){
var inst_15452 = (state_15486[(7)]);
var inst_15463 = (state_15486[(2)]);
var inst_15464 = cljs.core.next.call(null,inst_15452);
var inst_15438 = inst_15464;
var inst_15439 = null;
var inst_15440 = (0);
var inst_15441 = (0);
var state_15486__$1 = (function (){var statearr_15489 = state_15486;
(statearr_15489[(8)] = inst_15439);

(statearr_15489[(9)] = inst_15438);

(statearr_15489[(10)] = inst_15441);

(statearr_15489[(11)] = inst_15440);

(statearr_15489[(12)] = inst_15463);

return statearr_15489;
})();
var statearr_15490_15530 = state_15486__$1;
(statearr_15490_15530[(2)] = null);

(statearr_15490_15530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (1))){
var state_15486__$1 = state_15486;
var statearr_15491_15531 = state_15486__$1;
(statearr_15491_15531[(2)] = null);

(statearr_15491_15531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (4))){
var inst_15427 = (state_15486[(13)]);
var inst_15427__$1 = (state_15486[(2)]);
var inst_15428 = (inst_15427__$1 == null);
var state_15486__$1 = (function (){var statearr_15492 = state_15486;
(statearr_15492[(13)] = inst_15427__$1);

return statearr_15492;
})();
if(cljs.core.truth_(inst_15428)){
var statearr_15493_15532 = state_15486__$1;
(statearr_15493_15532[(1)] = (5));

} else {
var statearr_15494_15533 = state_15486__$1;
(statearr_15494_15533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (15))){
var state_15486__$1 = state_15486;
var statearr_15498_15534 = state_15486__$1;
(statearr_15498_15534[(2)] = null);

(statearr_15498_15534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (21))){
var state_15486__$1 = state_15486;
var statearr_15499_15535 = state_15486__$1;
(statearr_15499_15535[(2)] = null);

(statearr_15499_15535[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (13))){
var inst_15439 = (state_15486[(8)]);
var inst_15438 = (state_15486[(9)]);
var inst_15441 = (state_15486[(10)]);
var inst_15440 = (state_15486[(11)]);
var inst_15448 = (state_15486[(2)]);
var inst_15449 = (inst_15441 + (1));
var tmp15495 = inst_15439;
var tmp15496 = inst_15438;
var tmp15497 = inst_15440;
var inst_15438__$1 = tmp15496;
var inst_15439__$1 = tmp15495;
var inst_15440__$1 = tmp15497;
var inst_15441__$1 = inst_15449;
var state_15486__$1 = (function (){var statearr_15500 = state_15486;
(statearr_15500[(8)] = inst_15439__$1);

(statearr_15500[(9)] = inst_15438__$1);

(statearr_15500[(14)] = inst_15448);

(statearr_15500[(10)] = inst_15441__$1);

(statearr_15500[(11)] = inst_15440__$1);

return statearr_15500;
})();
var statearr_15501_15536 = state_15486__$1;
(statearr_15501_15536[(2)] = null);

(statearr_15501_15536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (22))){
var state_15486__$1 = state_15486;
var statearr_15502_15537 = state_15486__$1;
(statearr_15502_15537[(2)] = null);

(statearr_15502_15537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (6))){
var inst_15427 = (state_15486[(13)]);
var inst_15436 = f.call(null,inst_15427);
var inst_15437 = cljs.core.seq.call(null,inst_15436);
var inst_15438 = inst_15437;
var inst_15439 = null;
var inst_15440 = (0);
var inst_15441 = (0);
var state_15486__$1 = (function (){var statearr_15503 = state_15486;
(statearr_15503[(8)] = inst_15439);

(statearr_15503[(9)] = inst_15438);

(statearr_15503[(10)] = inst_15441);

(statearr_15503[(11)] = inst_15440);

return statearr_15503;
})();
var statearr_15504_15538 = state_15486__$1;
(statearr_15504_15538[(2)] = null);

(statearr_15504_15538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (17))){
var inst_15452 = (state_15486[(7)]);
var inst_15456 = cljs.core.chunk_first.call(null,inst_15452);
var inst_15457 = cljs.core.chunk_rest.call(null,inst_15452);
var inst_15458 = cljs.core.count.call(null,inst_15456);
var inst_15438 = inst_15457;
var inst_15439 = inst_15456;
var inst_15440 = inst_15458;
var inst_15441 = (0);
var state_15486__$1 = (function (){var statearr_15505 = state_15486;
(statearr_15505[(8)] = inst_15439);

(statearr_15505[(9)] = inst_15438);

(statearr_15505[(10)] = inst_15441);

(statearr_15505[(11)] = inst_15440);

return statearr_15505;
})();
var statearr_15506_15539 = state_15486__$1;
(statearr_15506_15539[(2)] = null);

(statearr_15506_15539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (3))){
var inst_15484 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15486__$1,inst_15484);
} else {
if((state_val_15487 === (12))){
var inst_15472 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15507_15540 = state_15486__$1;
(statearr_15507_15540[(2)] = inst_15472);

(statearr_15507_15540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (2))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15486__$1,(4),in$);
} else {
if((state_val_15487 === (23))){
var inst_15480 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15508_15541 = state_15486__$1;
(statearr_15508_15541[(2)] = inst_15480);

(statearr_15508_15541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (19))){
var inst_15467 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15509_15542 = state_15486__$1;
(statearr_15509_15542[(2)] = inst_15467);

(statearr_15509_15542[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (11))){
var inst_15438 = (state_15486[(9)]);
var inst_15452 = (state_15486[(7)]);
var inst_15452__$1 = cljs.core.seq.call(null,inst_15438);
var state_15486__$1 = (function (){var statearr_15510 = state_15486;
(statearr_15510[(7)] = inst_15452__$1);

return statearr_15510;
})();
if(inst_15452__$1){
var statearr_15511_15543 = state_15486__$1;
(statearr_15511_15543[(1)] = (14));

} else {
var statearr_15512_15544 = state_15486__$1;
(statearr_15512_15544[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (9))){
var inst_15474 = (state_15486[(2)]);
var inst_15475 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15486__$1 = (function (){var statearr_15513 = state_15486;
(statearr_15513[(15)] = inst_15474);

return statearr_15513;
})();
if(cljs.core.truth_(inst_15475)){
var statearr_15514_15545 = state_15486__$1;
(statearr_15514_15545[(1)] = (21));

} else {
var statearr_15515_15546 = state_15486__$1;
(statearr_15515_15546[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (5))){
var inst_15430 = cljs.core.async.close_BANG_.call(null,out);
var state_15486__$1 = state_15486;
var statearr_15516_15547 = state_15486__$1;
(statearr_15516_15547[(2)] = inst_15430);

(statearr_15516_15547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (14))){
var inst_15452 = (state_15486[(7)]);
var inst_15454 = cljs.core.chunked_seq_QMARK_.call(null,inst_15452);
var state_15486__$1 = state_15486;
if(inst_15454){
var statearr_15517_15548 = state_15486__$1;
(statearr_15517_15548[(1)] = (17));

} else {
var statearr_15518_15549 = state_15486__$1;
(statearr_15518_15549[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (16))){
var inst_15470 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15519_15550 = state_15486__$1;
(statearr_15519_15550[(2)] = inst_15470);

(statearr_15519_15550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (10))){
var inst_15439 = (state_15486[(8)]);
var inst_15441 = (state_15486[(10)]);
var inst_15446 = cljs.core._nth.call(null,inst_15439,inst_15441);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15486__$1,(13),out,inst_15446);
} else {
if((state_val_15487 === (18))){
var inst_15452 = (state_15486[(7)]);
var inst_15461 = cljs.core.first.call(null,inst_15452);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15486__$1,(20),out,inst_15461);
} else {
if((state_val_15487 === (8))){
var inst_15441 = (state_15486[(10)]);
var inst_15440 = (state_15486[(11)]);
var inst_15443 = (inst_15441 < inst_15440);
var inst_15444 = inst_15443;
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15444)){
var statearr_15520_15551 = state_15486__$1;
(statearr_15520_15551[(1)] = (10));

} else {
var statearr_15521_15552 = state_15486__$1;
(statearr_15521_15552[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto__))
;
return ((function (switch__6478__auto__,c__6540__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_15525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15525[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__);

(statearr_15525[(1)] = (1));

return statearr_15525;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1 = (function (state_15486){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15526){if((e15526 instanceof Object)){
var ex__6482__auto__ = e15526;
var statearr_15527_15553 = state_15486;
(statearr_15527_15553[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15554 = state_15486;
state_15486 = G__15554;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_15528 = f__6541__auto__.call(null);
(statearr_15528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_15528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto__))
);

return c__6540__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15556 = arguments.length;
switch (G__15556) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__15559 = arguments.length;
switch (G__15559) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__15562 = arguments.length;
switch (G__15562) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___15612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15612,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15612,out){
return (function (state_15586){
var state_val_15587 = (state_15586[(1)]);
if((state_val_15587 === (7))){
var inst_15581 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15588_15613 = state_15586__$1;
(statearr_15588_15613[(2)] = inst_15581);

(statearr_15588_15613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (1))){
var inst_15563 = null;
var state_15586__$1 = (function (){var statearr_15589 = state_15586;
(statearr_15589[(7)] = inst_15563);

return statearr_15589;
})();
var statearr_15590_15614 = state_15586__$1;
(statearr_15590_15614[(2)] = null);

(statearr_15590_15614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (4))){
var inst_15566 = (state_15586[(8)]);
var inst_15566__$1 = (state_15586[(2)]);
var inst_15567 = (inst_15566__$1 == null);
var inst_15568 = cljs.core.not.call(null,inst_15567);
var state_15586__$1 = (function (){var statearr_15591 = state_15586;
(statearr_15591[(8)] = inst_15566__$1);

return statearr_15591;
})();
if(inst_15568){
var statearr_15592_15615 = state_15586__$1;
(statearr_15592_15615[(1)] = (5));

} else {
var statearr_15593_15616 = state_15586__$1;
(statearr_15593_15616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (6))){
var state_15586__$1 = state_15586;
var statearr_15594_15617 = state_15586__$1;
(statearr_15594_15617[(2)] = null);

(statearr_15594_15617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (3))){
var inst_15583 = (state_15586[(2)]);
var inst_15584 = cljs.core.async.close_BANG_.call(null,out);
var state_15586__$1 = (function (){var statearr_15595 = state_15586;
(statearr_15595[(9)] = inst_15583);

return statearr_15595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15586__$1,inst_15584);
} else {
if((state_val_15587 === (2))){
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15586__$1,(4),ch);
} else {
if((state_val_15587 === (11))){
var inst_15566 = (state_15586[(8)]);
var inst_15575 = (state_15586[(2)]);
var inst_15563 = inst_15566;
var state_15586__$1 = (function (){var statearr_15596 = state_15586;
(statearr_15596[(10)] = inst_15575);

(statearr_15596[(7)] = inst_15563);

return statearr_15596;
})();
var statearr_15597_15618 = state_15586__$1;
(statearr_15597_15618[(2)] = null);

(statearr_15597_15618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (9))){
var inst_15566 = (state_15586[(8)]);
var state_15586__$1 = state_15586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15586__$1,(11),out,inst_15566);
} else {
if((state_val_15587 === (5))){
var inst_15566 = (state_15586[(8)]);
var inst_15563 = (state_15586[(7)]);
var inst_15570 = cljs.core._EQ_.call(null,inst_15566,inst_15563);
var state_15586__$1 = state_15586;
if(inst_15570){
var statearr_15599_15619 = state_15586__$1;
(statearr_15599_15619[(1)] = (8));

} else {
var statearr_15600_15620 = state_15586__$1;
(statearr_15600_15620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (10))){
var inst_15578 = (state_15586[(2)]);
var state_15586__$1 = state_15586;
var statearr_15601_15621 = state_15586__$1;
(statearr_15601_15621[(2)] = inst_15578);

(statearr_15601_15621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (8))){
var inst_15563 = (state_15586[(7)]);
var tmp15598 = inst_15563;
var inst_15563__$1 = tmp15598;
var state_15586__$1 = (function (){var statearr_15602 = state_15586;
(statearr_15602[(7)] = inst_15563__$1);

return statearr_15602;
})();
var statearr_15603_15622 = state_15586__$1;
(statearr_15603_15622[(2)] = null);

(statearr_15603_15622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15612,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15612,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15607 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15607[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15607[(1)] = (1));

return statearr_15607;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15586){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15608){if((e15608 instanceof Object)){
var ex__6482__auto__ = e15608;
var statearr_15609_15623 = state_15586;
(statearr_15609_15623[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15624 = state_15586;
state_15586 = G__15624;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15612,out))
})();
var state__6542__auto__ = (function (){var statearr_15610 = f__6541__auto__.call(null);
(statearr_15610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15612);

return statearr_15610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15612,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15626 = arguments.length;
switch (G__15626) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___15695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15695,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15695,out){
return (function (state_15664){
var state_val_15665 = (state_15664[(1)]);
if((state_val_15665 === (7))){
var inst_15660 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
var statearr_15666_15696 = state_15664__$1;
(statearr_15666_15696[(2)] = inst_15660);

(statearr_15666_15696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (1))){
var inst_15627 = (new Array(n));
var inst_15628 = inst_15627;
var inst_15629 = (0);
var state_15664__$1 = (function (){var statearr_15667 = state_15664;
(statearr_15667[(7)] = inst_15629);

(statearr_15667[(8)] = inst_15628);

return statearr_15667;
})();
var statearr_15668_15697 = state_15664__$1;
(statearr_15668_15697[(2)] = null);

(statearr_15668_15697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (4))){
var inst_15632 = (state_15664[(9)]);
var inst_15632__$1 = (state_15664[(2)]);
var inst_15633 = (inst_15632__$1 == null);
var inst_15634 = cljs.core.not.call(null,inst_15633);
var state_15664__$1 = (function (){var statearr_15669 = state_15664;
(statearr_15669[(9)] = inst_15632__$1);

return statearr_15669;
})();
if(inst_15634){
var statearr_15670_15698 = state_15664__$1;
(statearr_15670_15698[(1)] = (5));

} else {
var statearr_15671_15699 = state_15664__$1;
(statearr_15671_15699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (15))){
var inst_15654 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
var statearr_15672_15700 = state_15664__$1;
(statearr_15672_15700[(2)] = inst_15654);

(statearr_15672_15700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (13))){
var state_15664__$1 = state_15664;
var statearr_15673_15701 = state_15664__$1;
(statearr_15673_15701[(2)] = null);

(statearr_15673_15701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (6))){
var inst_15629 = (state_15664[(7)]);
var inst_15650 = (inst_15629 > (0));
var state_15664__$1 = state_15664;
if(cljs.core.truth_(inst_15650)){
var statearr_15674_15702 = state_15664__$1;
(statearr_15674_15702[(1)] = (12));

} else {
var statearr_15675_15703 = state_15664__$1;
(statearr_15675_15703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (3))){
var inst_15662 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15664__$1,inst_15662);
} else {
if((state_val_15665 === (12))){
var inst_15628 = (state_15664[(8)]);
var inst_15652 = cljs.core.vec.call(null,inst_15628);
var state_15664__$1 = state_15664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15664__$1,(15),out,inst_15652);
} else {
if((state_val_15665 === (2))){
var state_15664__$1 = state_15664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15664__$1,(4),ch);
} else {
if((state_val_15665 === (11))){
var inst_15644 = (state_15664[(2)]);
var inst_15645 = (new Array(n));
var inst_15628 = inst_15645;
var inst_15629 = (0);
var state_15664__$1 = (function (){var statearr_15676 = state_15664;
(statearr_15676[(7)] = inst_15629);

(statearr_15676[(10)] = inst_15644);

(statearr_15676[(8)] = inst_15628);

return statearr_15676;
})();
var statearr_15677_15704 = state_15664__$1;
(statearr_15677_15704[(2)] = null);

(statearr_15677_15704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (9))){
var inst_15628 = (state_15664[(8)]);
var inst_15642 = cljs.core.vec.call(null,inst_15628);
var state_15664__$1 = state_15664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15664__$1,(11),out,inst_15642);
} else {
if((state_val_15665 === (5))){
var inst_15629 = (state_15664[(7)]);
var inst_15628 = (state_15664[(8)]);
var inst_15632 = (state_15664[(9)]);
var inst_15637 = (state_15664[(11)]);
var inst_15636 = (inst_15628[inst_15629] = inst_15632);
var inst_15637__$1 = (inst_15629 + (1));
var inst_15638 = (inst_15637__$1 < n);
var state_15664__$1 = (function (){var statearr_15678 = state_15664;
(statearr_15678[(11)] = inst_15637__$1);

(statearr_15678[(12)] = inst_15636);

return statearr_15678;
})();
if(cljs.core.truth_(inst_15638)){
var statearr_15679_15705 = state_15664__$1;
(statearr_15679_15705[(1)] = (8));

} else {
var statearr_15680_15706 = state_15664__$1;
(statearr_15680_15706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (14))){
var inst_15657 = (state_15664[(2)]);
var inst_15658 = cljs.core.async.close_BANG_.call(null,out);
var state_15664__$1 = (function (){var statearr_15682 = state_15664;
(statearr_15682[(13)] = inst_15657);

return statearr_15682;
})();
var statearr_15683_15707 = state_15664__$1;
(statearr_15683_15707[(2)] = inst_15658);

(statearr_15683_15707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (10))){
var inst_15648 = (state_15664[(2)]);
var state_15664__$1 = state_15664;
var statearr_15684_15708 = state_15664__$1;
(statearr_15684_15708[(2)] = inst_15648);

(statearr_15684_15708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15665 === (8))){
var inst_15628 = (state_15664[(8)]);
var inst_15637 = (state_15664[(11)]);
var tmp15681 = inst_15628;
var inst_15628__$1 = tmp15681;
var inst_15629 = inst_15637;
var state_15664__$1 = (function (){var statearr_15685 = state_15664;
(statearr_15685[(7)] = inst_15629);

(statearr_15685[(8)] = inst_15628__$1);

return statearr_15685;
})();
var statearr_15686_15709 = state_15664__$1;
(statearr_15686_15709[(2)] = null);

(statearr_15686_15709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15695,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15695,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15690[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15690[(1)] = (1));

return statearr_15690;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15664){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15691){if((e15691 instanceof Object)){
var ex__6482__auto__ = e15691;
var statearr_15692_15710 = state_15664;
(statearr_15692_15710[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15711 = state_15664;
state_15664 = G__15711;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15695,out))
})();
var state__6542__auto__ = (function (){var statearr_15693 = f__6541__auto__.call(null);
(statearr_15693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15695);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15695,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15713 = arguments.length;
switch (G__15713) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6540__auto___15786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15786,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15786,out){
return (function (state_15755){
var state_val_15756 = (state_15755[(1)]);
if((state_val_15756 === (7))){
var inst_15751 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
var statearr_15757_15787 = state_15755__$1;
(statearr_15757_15787[(2)] = inst_15751);

(statearr_15757_15787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (1))){
var inst_15714 = [];
var inst_15715 = inst_15714;
var inst_15716 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15755__$1 = (function (){var statearr_15758 = state_15755;
(statearr_15758[(7)] = inst_15715);

(statearr_15758[(8)] = inst_15716);

return statearr_15758;
})();
var statearr_15759_15788 = state_15755__$1;
(statearr_15759_15788[(2)] = null);

(statearr_15759_15788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (4))){
var inst_15719 = (state_15755[(9)]);
var inst_15719__$1 = (state_15755[(2)]);
var inst_15720 = (inst_15719__$1 == null);
var inst_15721 = cljs.core.not.call(null,inst_15720);
var state_15755__$1 = (function (){var statearr_15760 = state_15755;
(statearr_15760[(9)] = inst_15719__$1);

return statearr_15760;
})();
if(inst_15721){
var statearr_15761_15789 = state_15755__$1;
(statearr_15761_15789[(1)] = (5));

} else {
var statearr_15762_15790 = state_15755__$1;
(statearr_15762_15790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (15))){
var inst_15745 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
var statearr_15763_15791 = state_15755__$1;
(statearr_15763_15791[(2)] = inst_15745);

(statearr_15763_15791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (13))){
var state_15755__$1 = state_15755;
var statearr_15764_15792 = state_15755__$1;
(statearr_15764_15792[(2)] = null);

(statearr_15764_15792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (6))){
var inst_15715 = (state_15755[(7)]);
var inst_15740 = inst_15715.length;
var inst_15741 = (inst_15740 > (0));
var state_15755__$1 = state_15755;
if(cljs.core.truth_(inst_15741)){
var statearr_15765_15793 = state_15755__$1;
(statearr_15765_15793[(1)] = (12));

} else {
var statearr_15766_15794 = state_15755__$1;
(statearr_15766_15794[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (3))){
var inst_15753 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15755__$1,inst_15753);
} else {
if((state_val_15756 === (12))){
var inst_15715 = (state_15755[(7)]);
var inst_15743 = cljs.core.vec.call(null,inst_15715);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15755__$1,(15),out,inst_15743);
} else {
if((state_val_15756 === (2))){
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15755__$1,(4),ch);
} else {
if((state_val_15756 === (11))){
var inst_15723 = (state_15755[(10)]);
var inst_15719 = (state_15755[(9)]);
var inst_15733 = (state_15755[(2)]);
var inst_15734 = [];
var inst_15735 = inst_15734.push(inst_15719);
var inst_15715 = inst_15734;
var inst_15716 = inst_15723;
var state_15755__$1 = (function (){var statearr_15767 = state_15755;
(statearr_15767[(7)] = inst_15715);

(statearr_15767[(8)] = inst_15716);

(statearr_15767[(11)] = inst_15733);

(statearr_15767[(12)] = inst_15735);

return statearr_15767;
})();
var statearr_15768_15795 = state_15755__$1;
(statearr_15768_15795[(2)] = null);

(statearr_15768_15795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (9))){
var inst_15715 = (state_15755[(7)]);
var inst_15731 = cljs.core.vec.call(null,inst_15715);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15755__$1,(11),out,inst_15731);
} else {
if((state_val_15756 === (5))){
var inst_15723 = (state_15755[(10)]);
var inst_15716 = (state_15755[(8)]);
var inst_15719 = (state_15755[(9)]);
var inst_15723__$1 = f.call(null,inst_15719);
var inst_15724 = cljs.core._EQ_.call(null,inst_15723__$1,inst_15716);
var inst_15725 = cljs.core.keyword_identical_QMARK_.call(null,inst_15716,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15726 = (inst_15724) || (inst_15725);
var state_15755__$1 = (function (){var statearr_15769 = state_15755;
(statearr_15769[(10)] = inst_15723__$1);

return statearr_15769;
})();
if(cljs.core.truth_(inst_15726)){
var statearr_15770_15796 = state_15755__$1;
(statearr_15770_15796[(1)] = (8));

} else {
var statearr_15771_15797 = state_15755__$1;
(statearr_15771_15797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (14))){
var inst_15748 = (state_15755[(2)]);
var inst_15749 = cljs.core.async.close_BANG_.call(null,out);
var state_15755__$1 = (function (){var statearr_15773 = state_15755;
(statearr_15773[(13)] = inst_15748);

return statearr_15773;
})();
var statearr_15774_15798 = state_15755__$1;
(statearr_15774_15798[(2)] = inst_15749);

(statearr_15774_15798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (10))){
var inst_15738 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
var statearr_15775_15799 = state_15755__$1;
(statearr_15775_15799[(2)] = inst_15738);

(statearr_15775_15799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (8))){
var inst_15715 = (state_15755[(7)]);
var inst_15723 = (state_15755[(10)]);
var inst_15719 = (state_15755[(9)]);
var inst_15728 = inst_15715.push(inst_15719);
var tmp15772 = inst_15715;
var inst_15715__$1 = tmp15772;
var inst_15716 = inst_15723;
var state_15755__$1 = (function (){var statearr_15776 = state_15755;
(statearr_15776[(7)] = inst_15715__$1);

(statearr_15776[(8)] = inst_15716);

(statearr_15776[(14)] = inst_15728);

return statearr_15776;
})();
var statearr_15777_15800 = state_15755__$1;
(statearr_15777_15800[(2)] = null);

(statearr_15777_15800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6540__auto___15786,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15786,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15781[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15781[(1)] = (1));

return statearr_15781;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15755){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15782){if((e15782 instanceof Object)){
var ex__6482__auto__ = e15782;
var statearr_15783_15801 = state_15755;
(statearr_15783_15801[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15802 = state_15755;
state_15755 = G__15802;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15786,out))
})();
var state__6542__auto__ = (function (){var statearr_15784 = f__6541__auto__.call(null);
(statearr_15784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15786);

return statearr_15784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15786,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map