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
if(typeof cljs.core.async.t13403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13403 = (function (f,fn_handler,meta13404){
this.f = f;
this.fn_handler = fn_handler;
this.meta13404 = meta13404;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13405){
var self__ = this;
var _13405__$1 = this;
return self__.meta13404;
});

cljs.core.async.t13403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13405,meta13404__$1){
var self__ = this;
var _13405__$1 = this;
return (new cljs.core.async.t13403(self__.f,self__.fn_handler,meta13404__$1));
});

cljs.core.async.t13403.cljs$lang$type = true;

cljs.core.async.t13403.cljs$lang$ctorStr = "cljs.core.async/t13403";

cljs.core.async.t13403.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13403");
});

cljs.core.async.__GT_t13403 = (function cljs$core$async$fn_handler_$___GT_t13403(f__$1,fn_handler__$1,meta13404){
return (new cljs.core.async.t13403(f__$1,fn_handler__$1,meta13404));
});

}

return (new cljs.core.async.t13403(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13407 = buff;
if(G__13407){
var bit__4856__auto__ = null;
if(cljs.core.truth_((function (){var or__4182__auto__ = bit__4856__auto__;
if(cljs.core.truth_(or__4182__auto__)){
return or__4182__auto__;
} else {
return G__13407.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13407.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13407);
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
var G__13409 = arguments.length;
switch (G__13409) {
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
var G__13412 = arguments.length;
switch (G__13412) {
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
var val_13414 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13414);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13414,ret){
return (function (){
return fn1.call(null,val_13414);
});})(val_13414,ret))
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
var G__13416 = arguments.length;
switch (G__13416) {
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
var n__5067__auto___13418 = n;
var x_13419 = (0);
while(true){
if((x_13419 < n__5067__auto___13418)){
(a[x_13419] = (0));

var G__13420 = (x_13419 + (1));
x_13419 = G__13420;
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

var G__13421 = (i + (1));
i = G__13421;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13425 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13425 = (function (flag,alt_flag,meta13426){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13426 = meta13426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13425.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13427){
var self__ = this;
var _13427__$1 = this;
return self__.meta13426;
});})(flag))
;

cljs.core.async.t13425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13427,meta13426__$1){
var self__ = this;
var _13427__$1 = this;
return (new cljs.core.async.t13425(self__.flag,self__.alt_flag,meta13426__$1));
});})(flag))
;

cljs.core.async.t13425.cljs$lang$type = true;

cljs.core.async.t13425.cljs$lang$ctorStr = "cljs.core.async/t13425";

cljs.core.async.t13425.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13425");
});})(flag))
;

cljs.core.async.__GT_t13425 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13425(flag__$1,alt_flag__$1,meta13426){
return (new cljs.core.async.t13425(flag__$1,alt_flag__$1,meta13426));
});})(flag))
;

}

return (new cljs.core.async.t13425(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13431 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13431 = (function (cb,flag,alt_handler,meta13432){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13432 = meta13432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13433){
var self__ = this;
var _13433__$1 = this;
return self__.meta13432;
});

cljs.core.async.t13431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13433,meta13432__$1){
var self__ = this;
var _13433__$1 = this;
return (new cljs.core.async.t13431(self__.cb,self__.flag,self__.alt_handler,meta13432__$1));
});

cljs.core.async.t13431.cljs$lang$type = true;

cljs.core.async.t13431.cljs$lang$ctorStr = "cljs.core.async/t13431";

cljs.core.async.t13431.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t13431");
});

cljs.core.async.__GT_t13431 = (function cljs$core$async$alt_handler_$___GT_t13431(cb__$1,flag__$1,alt_handler__$1,meta13432){
return (new cljs.core.async.t13431(cb__$1,flag__$1,alt_handler__$1,meta13432));
});

}

return (new cljs.core.async.t13431(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13434_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13434_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13435_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13435_SHARP_,port], null));
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
var G__13436 = (i + (1));
i = G__13436;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13439){
var map__13440 = p__13439;
var map__13440__$1 = ((cljs.core.seq_QMARK_.call(null,map__13440))?cljs.core.apply.call(null,cljs.core.hash_map,map__13440):map__13440);
var opts = map__13440__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13437){
var G__13438 = cljs.core.first.call(null,seq13437);
var seq13437__$1 = cljs.core.next.call(null,seq13437);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13438,seq13437__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13442 = arguments.length;
switch (G__13442) {
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
var c__6540__auto___13491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13491){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13491){
return (function (state_13466){
var state_val_13467 = (state_13466[(1)]);
if((state_val_13467 === (7))){
var inst_13462 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
var statearr_13468_13492 = state_13466__$1;
(statearr_13468_13492[(2)] = inst_13462);

(statearr_13468_13492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (1))){
var state_13466__$1 = state_13466;
var statearr_13469_13493 = state_13466__$1;
(statearr_13469_13493[(2)] = null);

(statearr_13469_13493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (4))){
var inst_13445 = (state_13466[(7)]);
var inst_13445__$1 = (state_13466[(2)]);
var inst_13446 = (inst_13445__$1 == null);
var state_13466__$1 = (function (){var statearr_13470 = state_13466;
(statearr_13470[(7)] = inst_13445__$1);

return statearr_13470;
})();
if(cljs.core.truth_(inst_13446)){
var statearr_13471_13494 = state_13466__$1;
(statearr_13471_13494[(1)] = (5));

} else {
var statearr_13472_13495 = state_13466__$1;
(statearr_13472_13495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (13))){
var state_13466__$1 = state_13466;
var statearr_13473_13496 = state_13466__$1;
(statearr_13473_13496[(2)] = null);

(statearr_13473_13496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (6))){
var inst_13445 = (state_13466[(7)]);
var state_13466__$1 = state_13466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13466__$1,(11),to,inst_13445);
} else {
if((state_val_13467 === (3))){
var inst_13464 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13466__$1,inst_13464);
} else {
if((state_val_13467 === (12))){
var state_13466__$1 = state_13466;
var statearr_13474_13497 = state_13466__$1;
(statearr_13474_13497[(2)] = null);

(statearr_13474_13497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (2))){
var state_13466__$1 = state_13466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13466__$1,(4),from);
} else {
if((state_val_13467 === (11))){
var inst_13455 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
if(cljs.core.truth_(inst_13455)){
var statearr_13475_13498 = state_13466__$1;
(statearr_13475_13498[(1)] = (12));

} else {
var statearr_13476_13499 = state_13466__$1;
(statearr_13476_13499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (9))){
var state_13466__$1 = state_13466;
var statearr_13477_13500 = state_13466__$1;
(statearr_13477_13500[(2)] = null);

(statearr_13477_13500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (5))){
var state_13466__$1 = state_13466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13478_13501 = state_13466__$1;
(statearr_13478_13501[(1)] = (8));

} else {
var statearr_13479_13502 = state_13466__$1;
(statearr_13479_13502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (14))){
var inst_13460 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
var statearr_13480_13503 = state_13466__$1;
(statearr_13480_13503[(2)] = inst_13460);

(statearr_13480_13503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (10))){
var inst_13452 = (state_13466[(2)]);
var state_13466__$1 = state_13466;
var statearr_13481_13504 = state_13466__$1;
(statearr_13481_13504[(2)] = inst_13452);

(statearr_13481_13504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13467 === (8))){
var inst_13449 = cljs.core.async.close_BANG_.call(null,to);
var state_13466__$1 = state_13466;
var statearr_13482_13505 = state_13466__$1;
(statearr_13482_13505[(2)] = inst_13449);

(statearr_13482_13505[(1)] = (10));


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
});})(c__6540__auto___13491))
;
return ((function (switch__6478__auto__,c__6540__auto___13491){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_13486 = [null,null,null,null,null,null,null,null];
(statearr_13486[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_13486[(1)] = (1));

return statearr_13486;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_13466){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13487){if((e13487 instanceof Object)){
var ex__6482__auto__ = e13487;
var statearr_13488_13506 = state_13466;
(statearr_13488_13506[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13507 = state_13466;
state_13466 = G__13507;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_13466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_13466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13491))
})();
var state__6542__auto__ = (function (){var statearr_13489 = f__6541__auto__.call(null);
(statearr_13489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13491);

return statearr_13489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13491))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13691){
var vec__13692 = p__13691;
var v = cljs.core.nth.call(null,vec__13692,(0),null);
var p = cljs.core.nth.call(null,vec__13692,(1),null);
var job = vec__13692;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6540__auto___13874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13874,res,vec__13692,v,p,job,jobs,results){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13874,res,vec__13692,v,p,job,jobs,results){
return (function (state_13697){
var state_val_13698 = (state_13697[(1)]);
if((state_val_13698 === (2))){
var inst_13694 = (state_13697[(2)]);
var inst_13695 = cljs.core.async.close_BANG_.call(null,res);
var state_13697__$1 = (function (){var statearr_13699 = state_13697;
(statearr_13699[(7)] = inst_13694);

return statearr_13699;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13697__$1,inst_13695);
} else {
if((state_val_13698 === (1))){
var state_13697__$1 = state_13697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13697__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6540__auto___13874,res,vec__13692,v,p,job,jobs,results))
;
return ((function (switch__6478__auto__,c__6540__auto___13874,res,vec__13692,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13703 = [null,null,null,null,null,null,null,null];
(statearr_13703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13703[(1)] = (1));

return statearr_13703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13697){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13704){if((e13704 instanceof Object)){
var ex__6482__auto__ = e13704;
var statearr_13705_13875 = state_13697;
(statearr_13705_13875[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13876 = state_13697;
state_13697 = G__13876;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13874,res,vec__13692,v,p,job,jobs,results))
})();
var state__6542__auto__ = (function (){var statearr_13706 = f__6541__auto__.call(null);
(statearr_13706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13874);

return statearr_13706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13874,res,vec__13692,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13707){
var vec__13708 = p__13707;
var v = cljs.core.nth.call(null,vec__13708,(0),null);
var p = cljs.core.nth.call(null,vec__13708,(1),null);
var job = vec__13708;
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
var n__5067__auto___13877 = n;
var __13878 = (0);
while(true){
if((__13878 < n__5067__auto___13877)){
var G__13709_13879 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13709_13879) {
case "async":
var c__6540__auto___13881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13878,c__6540__auto___13881,G__13709_13879,n__5067__auto___13877,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__13878,c__6540__auto___13881,G__13709_13879,n__5067__auto___13877,jobs,results,process,async){
return (function (state_13722){
var state_val_13723 = (state_13722[(1)]);
if((state_val_13723 === (7))){
var inst_13718 = (state_13722[(2)]);
var state_13722__$1 = state_13722;
var statearr_13724_13882 = state_13722__$1;
(statearr_13724_13882[(2)] = inst_13718);

(statearr_13724_13882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (6))){
var state_13722__$1 = state_13722;
var statearr_13725_13883 = state_13722__$1;
(statearr_13725_13883[(2)] = null);

(statearr_13725_13883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (5))){
var state_13722__$1 = state_13722;
var statearr_13726_13884 = state_13722__$1;
(statearr_13726_13884[(2)] = null);

(statearr_13726_13884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (4))){
var inst_13712 = (state_13722[(2)]);
var inst_13713 = async.call(null,inst_13712);
var state_13722__$1 = state_13722;
if(cljs.core.truth_(inst_13713)){
var statearr_13727_13885 = state_13722__$1;
(statearr_13727_13885[(1)] = (5));

} else {
var statearr_13728_13886 = state_13722__$1;
(statearr_13728_13886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13723 === (3))){
var inst_13720 = (state_13722[(2)]);
var state_13722__$1 = state_13722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13722__$1,inst_13720);
} else {
if((state_val_13723 === (2))){
var state_13722__$1 = state_13722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13722__$1,(4),jobs);
} else {
if((state_val_13723 === (1))){
var state_13722__$1 = state_13722;
var statearr_13729_13887 = state_13722__$1;
(statearr_13729_13887[(2)] = null);

(statearr_13729_13887[(1)] = (2));


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
});})(__13878,c__6540__auto___13881,G__13709_13879,n__5067__auto___13877,jobs,results,process,async))
;
return ((function (__13878,switch__6478__auto__,c__6540__auto___13881,G__13709_13879,n__5067__auto___13877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13733 = [null,null,null,null,null,null,null];
(statearr_13733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13733[(1)] = (1));

return statearr_13733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13722){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13734){if((e13734 instanceof Object)){
var ex__6482__auto__ = e13734;
var statearr_13735_13888 = state_13722;
(statearr_13735_13888[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13889 = state_13722;
state_13722 = G__13889;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__13878,switch__6478__auto__,c__6540__auto___13881,G__13709_13879,n__5067__auto___13877,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13736 = f__6541__auto__.call(null);
(statearr_13736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13881);

return statearr_13736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__13878,c__6540__auto___13881,G__13709_13879,n__5067__auto___13877,jobs,results,process,async))
);


break;
case "compute":
var c__6540__auto___13890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13878,c__6540__auto___13890,G__13709_13879,n__5067__auto___13877,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (__13878,c__6540__auto___13890,G__13709_13879,n__5067__auto___13877,jobs,results,process,async){
return (function (state_13749){
var state_val_13750 = (state_13749[(1)]);
if((state_val_13750 === (7))){
var inst_13745 = (state_13749[(2)]);
var state_13749__$1 = state_13749;
var statearr_13751_13891 = state_13749__$1;
(statearr_13751_13891[(2)] = inst_13745);

(statearr_13751_13891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13750 === (6))){
var state_13749__$1 = state_13749;
var statearr_13752_13892 = state_13749__$1;
(statearr_13752_13892[(2)] = null);

(statearr_13752_13892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13750 === (5))){
var state_13749__$1 = state_13749;
var statearr_13753_13893 = state_13749__$1;
(statearr_13753_13893[(2)] = null);

(statearr_13753_13893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13750 === (4))){
var inst_13739 = (state_13749[(2)]);
var inst_13740 = process.call(null,inst_13739);
var state_13749__$1 = state_13749;
if(cljs.core.truth_(inst_13740)){
var statearr_13754_13894 = state_13749__$1;
(statearr_13754_13894[(1)] = (5));

} else {
var statearr_13755_13895 = state_13749__$1;
(statearr_13755_13895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13750 === (3))){
var inst_13747 = (state_13749[(2)]);
var state_13749__$1 = state_13749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13749__$1,inst_13747);
} else {
if((state_val_13750 === (2))){
var state_13749__$1 = state_13749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13749__$1,(4),jobs);
} else {
if((state_val_13750 === (1))){
var state_13749__$1 = state_13749;
var statearr_13756_13896 = state_13749__$1;
(statearr_13756_13896[(2)] = null);

(statearr_13756_13896[(1)] = (2));


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
});})(__13878,c__6540__auto___13890,G__13709_13879,n__5067__auto___13877,jobs,results,process,async))
;
return ((function (__13878,switch__6478__auto__,c__6540__auto___13890,G__13709_13879,n__5067__auto___13877,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13760 = [null,null,null,null,null,null,null];
(statearr_13760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13760[(1)] = (1));

return statearr_13760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13749){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13761){if((e13761 instanceof Object)){
var ex__6482__auto__ = e13761;
var statearr_13762_13897 = state_13749;
(statearr_13762_13897[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13898 = state_13749;
state_13749 = G__13898;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(__13878,switch__6478__auto__,c__6540__auto___13890,G__13709_13879,n__5067__auto___13877,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13763 = f__6541__auto__.call(null);
(statearr_13763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13890);

return statearr_13763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(__13878,c__6540__auto___13890,G__13709_13879,n__5067__auto___13877,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13899 = (__13878 + (1));
__13878 = G__13899;
continue;
} else {
}
break;
}

var c__6540__auto___13900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13900,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13900,jobs,results,process,async){
return (function (state_13785){
var state_val_13786 = (state_13785[(1)]);
if((state_val_13786 === (9))){
var inst_13778 = (state_13785[(2)]);
var state_13785__$1 = (function (){var statearr_13787 = state_13785;
(statearr_13787[(7)] = inst_13778);

return statearr_13787;
})();
var statearr_13788_13901 = state_13785__$1;
(statearr_13788_13901[(2)] = null);

(statearr_13788_13901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (8))){
var inst_13771 = (state_13785[(8)]);
var inst_13776 = (state_13785[(2)]);
var state_13785__$1 = (function (){var statearr_13789 = state_13785;
(statearr_13789[(9)] = inst_13776);

return statearr_13789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13785__$1,(9),results,inst_13771);
} else {
if((state_val_13786 === (7))){
var inst_13781 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
var statearr_13790_13902 = state_13785__$1;
(statearr_13790_13902[(2)] = inst_13781);

(statearr_13790_13902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (6))){
var inst_13766 = (state_13785[(10)]);
var inst_13771 = (state_13785[(8)]);
var inst_13771__$1 = cljs.core.async.chan.call(null,(1));
var inst_13772 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13773 = [inst_13766,inst_13771__$1];
var inst_13774 = (new cljs.core.PersistentVector(null,2,(5),inst_13772,inst_13773,null));
var state_13785__$1 = (function (){var statearr_13791 = state_13785;
(statearr_13791[(8)] = inst_13771__$1);

return statearr_13791;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13785__$1,(8),jobs,inst_13774);
} else {
if((state_val_13786 === (5))){
var inst_13769 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13785__$1 = state_13785;
var statearr_13792_13903 = state_13785__$1;
(statearr_13792_13903[(2)] = inst_13769);

(statearr_13792_13903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (4))){
var inst_13766 = (state_13785[(10)]);
var inst_13766__$1 = (state_13785[(2)]);
var inst_13767 = (inst_13766__$1 == null);
var state_13785__$1 = (function (){var statearr_13793 = state_13785;
(statearr_13793[(10)] = inst_13766__$1);

return statearr_13793;
})();
if(cljs.core.truth_(inst_13767)){
var statearr_13794_13904 = state_13785__$1;
(statearr_13794_13904[(1)] = (5));

} else {
var statearr_13795_13905 = state_13785__$1;
(statearr_13795_13905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13786 === (3))){
var inst_13783 = (state_13785[(2)]);
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13785__$1,inst_13783);
} else {
if((state_val_13786 === (2))){
var state_13785__$1 = state_13785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13785__$1,(4),from);
} else {
if((state_val_13786 === (1))){
var state_13785__$1 = state_13785;
var statearr_13796_13906 = state_13785__$1;
(statearr_13796_13906[(2)] = null);

(statearr_13796_13906[(1)] = (2));


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
});})(c__6540__auto___13900,jobs,results,process,async))
;
return ((function (switch__6478__auto__,c__6540__auto___13900,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0 = (function (){
var statearr_13800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13800[(1)] = (1));

return statearr_13800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13785){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13801){if((e13801 instanceof Object)){
var ex__6482__auto__ = e13801;
var statearr_13802_13907 = state_13785;
(statearr_13802_13907[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13908 = state_13785;
state_13785 = G__13908;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13900,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13803 = f__6541__auto__.call(null);
(statearr_13803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13900);

return statearr_13803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13900,jobs,results,process,async))
);


var c__6540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto__,jobs,results,process,async){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto__,jobs,results,process,async){
return (function (state_13841){
var state_val_13842 = (state_13841[(1)]);
if((state_val_13842 === (7))){
var inst_13837 = (state_13841[(2)]);
var state_13841__$1 = state_13841;
var statearr_13843_13909 = state_13841__$1;
(statearr_13843_13909[(2)] = inst_13837);

(statearr_13843_13909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (20))){
var state_13841__$1 = state_13841;
var statearr_13844_13910 = state_13841__$1;
(statearr_13844_13910[(2)] = null);

(statearr_13844_13910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (1))){
var state_13841__$1 = state_13841;
var statearr_13845_13911 = state_13841__$1;
(statearr_13845_13911[(2)] = null);

(statearr_13845_13911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (4))){
var inst_13806 = (state_13841[(7)]);
var inst_13806__$1 = (state_13841[(2)]);
var inst_13807 = (inst_13806__$1 == null);
var state_13841__$1 = (function (){var statearr_13846 = state_13841;
(statearr_13846[(7)] = inst_13806__$1);

return statearr_13846;
})();
if(cljs.core.truth_(inst_13807)){
var statearr_13847_13912 = state_13841__$1;
(statearr_13847_13912[(1)] = (5));

} else {
var statearr_13848_13913 = state_13841__$1;
(statearr_13848_13913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (15))){
var inst_13819 = (state_13841[(8)]);
var state_13841__$1 = state_13841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13841__$1,(18),to,inst_13819);
} else {
if((state_val_13842 === (21))){
var inst_13832 = (state_13841[(2)]);
var state_13841__$1 = state_13841;
var statearr_13849_13914 = state_13841__$1;
(statearr_13849_13914[(2)] = inst_13832);

(statearr_13849_13914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (13))){
var inst_13834 = (state_13841[(2)]);
var state_13841__$1 = (function (){var statearr_13850 = state_13841;
(statearr_13850[(9)] = inst_13834);

return statearr_13850;
})();
var statearr_13851_13915 = state_13841__$1;
(statearr_13851_13915[(2)] = null);

(statearr_13851_13915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (6))){
var inst_13806 = (state_13841[(7)]);
var state_13841__$1 = state_13841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13841__$1,(11),inst_13806);
} else {
if((state_val_13842 === (17))){
var inst_13827 = (state_13841[(2)]);
var state_13841__$1 = state_13841;
if(cljs.core.truth_(inst_13827)){
var statearr_13852_13916 = state_13841__$1;
(statearr_13852_13916[(1)] = (19));

} else {
var statearr_13853_13917 = state_13841__$1;
(statearr_13853_13917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (3))){
var inst_13839 = (state_13841[(2)]);
var state_13841__$1 = state_13841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13841__$1,inst_13839);
} else {
if((state_val_13842 === (12))){
var inst_13816 = (state_13841[(10)]);
var state_13841__$1 = state_13841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13841__$1,(14),inst_13816);
} else {
if((state_val_13842 === (2))){
var state_13841__$1 = state_13841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13841__$1,(4),results);
} else {
if((state_val_13842 === (19))){
var state_13841__$1 = state_13841;
var statearr_13854_13918 = state_13841__$1;
(statearr_13854_13918[(2)] = null);

(statearr_13854_13918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (11))){
var inst_13816 = (state_13841[(2)]);
var state_13841__$1 = (function (){var statearr_13855 = state_13841;
(statearr_13855[(10)] = inst_13816);

return statearr_13855;
})();
var statearr_13856_13919 = state_13841__$1;
(statearr_13856_13919[(2)] = null);

(statearr_13856_13919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (9))){
var state_13841__$1 = state_13841;
var statearr_13857_13920 = state_13841__$1;
(statearr_13857_13920[(2)] = null);

(statearr_13857_13920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (5))){
var state_13841__$1 = state_13841;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13858_13921 = state_13841__$1;
(statearr_13858_13921[(1)] = (8));

} else {
var statearr_13859_13922 = state_13841__$1;
(statearr_13859_13922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (14))){
var inst_13821 = (state_13841[(11)]);
var inst_13819 = (state_13841[(8)]);
var inst_13819__$1 = (state_13841[(2)]);
var inst_13820 = (inst_13819__$1 == null);
var inst_13821__$1 = cljs.core.not.call(null,inst_13820);
var state_13841__$1 = (function (){var statearr_13860 = state_13841;
(statearr_13860[(11)] = inst_13821__$1);

(statearr_13860[(8)] = inst_13819__$1);

return statearr_13860;
})();
if(inst_13821__$1){
var statearr_13861_13923 = state_13841__$1;
(statearr_13861_13923[(1)] = (15));

} else {
var statearr_13862_13924 = state_13841__$1;
(statearr_13862_13924[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (16))){
var inst_13821 = (state_13841[(11)]);
var state_13841__$1 = state_13841;
var statearr_13863_13925 = state_13841__$1;
(statearr_13863_13925[(2)] = inst_13821);

(statearr_13863_13925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (10))){
var inst_13813 = (state_13841[(2)]);
var state_13841__$1 = state_13841;
var statearr_13864_13926 = state_13841__$1;
(statearr_13864_13926[(2)] = inst_13813);

(statearr_13864_13926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (18))){
var inst_13824 = (state_13841[(2)]);
var state_13841__$1 = state_13841;
var statearr_13865_13927 = state_13841__$1;
(statearr_13865_13927[(2)] = inst_13824);

(statearr_13865_13927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13842 === (8))){
var inst_13810 = cljs.core.async.close_BANG_.call(null,to);
var state_13841__$1 = state_13841;
var statearr_13866_13928 = state_13841__$1;
(statearr_13866_13928[(2)] = inst_13810);

(statearr_13866_13928[(1)] = (10));


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
var statearr_13870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__);

(statearr_13870[(1)] = (1));

return statearr_13870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1 = (function (state_13841){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13871){if((e13871 instanceof Object)){
var ex__6482__auto__ = e13871;
var statearr_13872_13929 = state_13841;
(statearr_13872_13929[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13930 = state_13841;
state_13841 = G__13930;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__ = function(state_13841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1.call(this,state_13841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__,jobs,results,process,async))
})();
var state__6542__auto__ = (function (){var statearr_13873 = f__6541__auto__.call(null);
(statearr_13873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_13873;
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
var G__13932 = arguments.length;
switch (G__13932) {
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
var G__13935 = arguments.length;
switch (G__13935) {
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
var G__13938 = arguments.length;
switch (G__13938) {
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
var c__6540__auto___13990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___13990,tc,fc){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___13990,tc,fc){
return (function (state_13964){
var state_val_13965 = (state_13964[(1)]);
if((state_val_13965 === (7))){
var inst_13960 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
var statearr_13966_13991 = state_13964__$1;
(statearr_13966_13991[(2)] = inst_13960);

(statearr_13966_13991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (1))){
var state_13964__$1 = state_13964;
var statearr_13967_13992 = state_13964__$1;
(statearr_13967_13992[(2)] = null);

(statearr_13967_13992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (4))){
var inst_13941 = (state_13964[(7)]);
var inst_13941__$1 = (state_13964[(2)]);
var inst_13942 = (inst_13941__$1 == null);
var state_13964__$1 = (function (){var statearr_13968 = state_13964;
(statearr_13968[(7)] = inst_13941__$1);

return statearr_13968;
})();
if(cljs.core.truth_(inst_13942)){
var statearr_13969_13993 = state_13964__$1;
(statearr_13969_13993[(1)] = (5));

} else {
var statearr_13970_13994 = state_13964__$1;
(statearr_13970_13994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (13))){
var state_13964__$1 = state_13964;
var statearr_13971_13995 = state_13964__$1;
(statearr_13971_13995[(2)] = null);

(statearr_13971_13995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (6))){
var inst_13941 = (state_13964[(7)]);
var inst_13947 = p.call(null,inst_13941);
var state_13964__$1 = state_13964;
if(cljs.core.truth_(inst_13947)){
var statearr_13972_13996 = state_13964__$1;
(statearr_13972_13996[(1)] = (9));

} else {
var statearr_13973_13997 = state_13964__$1;
(statearr_13973_13997[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (3))){
var inst_13962 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13964__$1,inst_13962);
} else {
if((state_val_13965 === (12))){
var state_13964__$1 = state_13964;
var statearr_13974_13998 = state_13964__$1;
(statearr_13974_13998[(2)] = null);

(statearr_13974_13998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (2))){
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13964__$1,(4),ch);
} else {
if((state_val_13965 === (11))){
var inst_13941 = (state_13964[(7)]);
var inst_13951 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13964__$1,(8),inst_13951,inst_13941);
} else {
if((state_val_13965 === (9))){
var state_13964__$1 = state_13964;
var statearr_13975_13999 = state_13964__$1;
(statearr_13975_13999[(2)] = tc);

(statearr_13975_13999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (5))){
var inst_13944 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13945 = cljs.core.async.close_BANG_.call(null,fc);
var state_13964__$1 = (function (){var statearr_13976 = state_13964;
(statearr_13976[(8)] = inst_13944);

return statearr_13976;
})();
var statearr_13977_14000 = state_13964__$1;
(statearr_13977_14000[(2)] = inst_13945);

(statearr_13977_14000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (14))){
var inst_13958 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
var statearr_13978_14001 = state_13964__$1;
(statearr_13978_14001[(2)] = inst_13958);

(statearr_13978_14001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (10))){
var state_13964__$1 = state_13964;
var statearr_13979_14002 = state_13964__$1;
(statearr_13979_14002[(2)] = fc);

(statearr_13979_14002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13965 === (8))){
var inst_13953 = (state_13964[(2)]);
var state_13964__$1 = state_13964;
if(cljs.core.truth_(inst_13953)){
var statearr_13980_14003 = state_13964__$1;
(statearr_13980_14003[(1)] = (12));

} else {
var statearr_13981_14004 = state_13964__$1;
(statearr_13981_14004[(1)] = (13));

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
});})(c__6540__auto___13990,tc,fc))
;
return ((function (switch__6478__auto__,c__6540__auto___13990,tc,fc){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_13985 = [null,null,null,null,null,null,null,null,null];
(statearr_13985[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_13985[(1)] = (1));

return statearr_13985;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_13964){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_13964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e13986){if((e13986 instanceof Object)){
var ex__6482__auto__ = e13986;
var statearr_13987_14005 = state_13964;
(statearr_13987_14005[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14006 = state_13964;
state_13964 = G__14006;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_13964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_13964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___13990,tc,fc))
})();
var state__6542__auto__ = (function (){var statearr_13988 = f__6541__auto__.call(null);
(statearr_13988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___13990);

return statearr_13988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___13990,tc,fc))
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
return (function (state_14053){
var state_val_14054 = (state_14053[(1)]);
if((state_val_14054 === (7))){
var inst_14049 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
var statearr_14055_14071 = state_14053__$1;
(statearr_14055_14071[(2)] = inst_14049);

(statearr_14055_14071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (6))){
var inst_14039 = (state_14053[(7)]);
var inst_14042 = (state_14053[(8)]);
var inst_14046 = f.call(null,inst_14039,inst_14042);
var inst_14039__$1 = inst_14046;
var state_14053__$1 = (function (){var statearr_14056 = state_14053;
(statearr_14056[(7)] = inst_14039__$1);

return statearr_14056;
})();
var statearr_14057_14072 = state_14053__$1;
(statearr_14057_14072[(2)] = null);

(statearr_14057_14072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (5))){
var inst_14039 = (state_14053[(7)]);
var state_14053__$1 = state_14053;
var statearr_14058_14073 = state_14053__$1;
(statearr_14058_14073[(2)] = inst_14039);

(statearr_14058_14073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (4))){
var inst_14042 = (state_14053[(8)]);
var inst_14042__$1 = (state_14053[(2)]);
var inst_14043 = (inst_14042__$1 == null);
var state_14053__$1 = (function (){var statearr_14059 = state_14053;
(statearr_14059[(8)] = inst_14042__$1);

return statearr_14059;
})();
if(cljs.core.truth_(inst_14043)){
var statearr_14060_14074 = state_14053__$1;
(statearr_14060_14074[(1)] = (5));

} else {
var statearr_14061_14075 = state_14053__$1;
(statearr_14061_14075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14054 === (3))){
var inst_14051 = (state_14053[(2)]);
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14053__$1,inst_14051);
} else {
if((state_val_14054 === (2))){
var state_14053__$1 = state_14053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14053__$1,(4),ch);
} else {
if((state_val_14054 === (1))){
var inst_14039 = init;
var state_14053__$1 = (function (){var statearr_14062 = state_14053;
(statearr_14062[(7)] = inst_14039);

return statearr_14062;
})();
var statearr_14063_14076 = state_14053__$1;
(statearr_14063_14076[(2)] = null);

(statearr_14063_14076[(1)] = (2));


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
var statearr_14067 = [null,null,null,null,null,null,null,null,null];
(statearr_14067[(0)] = cljs$core$async$reduce_$_state_machine__6479__auto__);

(statearr_14067[(1)] = (1));

return statearr_14067;
});
var cljs$core$async$reduce_$_state_machine__6479__auto____1 = (function (state_14053){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14068){if((e14068 instanceof Object)){
var ex__6482__auto__ = e14068;
var statearr_14069_14077 = state_14053;
(statearr_14069_14077[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14078 = state_14053;
state_14053 = G__14078;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6479__auto__ = function(state_14053){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6479__auto____1.call(this,state_14053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6479__auto____0;
cljs$core$async$reduce_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6479__auto____1;
return cljs$core$async$reduce_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_14070 = f__6541__auto__.call(null);
(statearr_14070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_14070;
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
var G__14080 = arguments.length;
switch (G__14080) {
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
return (function (state_14105){
var state_val_14106 = (state_14105[(1)]);
if((state_val_14106 === (7))){
var inst_14087 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14107_14131 = state_14105__$1;
(statearr_14107_14131[(2)] = inst_14087);

(statearr_14107_14131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (1))){
var inst_14081 = cljs.core.seq.call(null,coll);
var inst_14082 = inst_14081;
var state_14105__$1 = (function (){var statearr_14108 = state_14105;
(statearr_14108[(7)] = inst_14082);

return statearr_14108;
})();
var statearr_14109_14132 = state_14105__$1;
(statearr_14109_14132[(2)] = null);

(statearr_14109_14132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (4))){
var inst_14082 = (state_14105[(7)]);
var inst_14085 = cljs.core.first.call(null,inst_14082);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14105__$1,(7),ch,inst_14085);
} else {
if((state_val_14106 === (13))){
var inst_14099 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14110_14133 = state_14105__$1;
(statearr_14110_14133[(2)] = inst_14099);

(statearr_14110_14133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (6))){
var inst_14090 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
if(cljs.core.truth_(inst_14090)){
var statearr_14111_14134 = state_14105__$1;
(statearr_14111_14134[(1)] = (8));

} else {
var statearr_14112_14135 = state_14105__$1;
(statearr_14112_14135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (3))){
var inst_14103 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14105__$1,inst_14103);
} else {
if((state_val_14106 === (12))){
var state_14105__$1 = state_14105;
var statearr_14113_14136 = state_14105__$1;
(statearr_14113_14136[(2)] = null);

(statearr_14113_14136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (2))){
var inst_14082 = (state_14105[(7)]);
var state_14105__$1 = state_14105;
if(cljs.core.truth_(inst_14082)){
var statearr_14114_14137 = state_14105__$1;
(statearr_14114_14137[(1)] = (4));

} else {
var statearr_14115_14138 = state_14105__$1;
(statearr_14115_14138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (11))){
var inst_14096 = cljs.core.async.close_BANG_.call(null,ch);
var state_14105__$1 = state_14105;
var statearr_14116_14139 = state_14105__$1;
(statearr_14116_14139[(2)] = inst_14096);

(statearr_14116_14139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (9))){
var state_14105__$1 = state_14105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14117_14140 = state_14105__$1;
(statearr_14117_14140[(1)] = (11));

} else {
var statearr_14118_14141 = state_14105__$1;
(statearr_14118_14141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (5))){
var inst_14082 = (state_14105[(7)]);
var state_14105__$1 = state_14105;
var statearr_14119_14142 = state_14105__$1;
(statearr_14119_14142[(2)] = inst_14082);

(statearr_14119_14142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (10))){
var inst_14101 = (state_14105[(2)]);
var state_14105__$1 = state_14105;
var statearr_14120_14143 = state_14105__$1;
(statearr_14120_14143[(2)] = inst_14101);

(statearr_14120_14143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14106 === (8))){
var inst_14082 = (state_14105[(7)]);
var inst_14092 = cljs.core.next.call(null,inst_14082);
var inst_14082__$1 = inst_14092;
var state_14105__$1 = (function (){var statearr_14121 = state_14105;
(statearr_14121[(7)] = inst_14082__$1);

return statearr_14121;
})();
var statearr_14122_14144 = state_14105__$1;
(statearr_14122_14144[(2)] = null);

(statearr_14122_14144[(1)] = (2));


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
var statearr_14126 = [null,null,null,null,null,null,null,null];
(statearr_14126[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_14126[(1)] = (1));

return statearr_14126;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_14105){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14127){if((e14127 instanceof Object)){
var ex__6482__auto__ = e14127;
var statearr_14128_14145 = state_14105;
(statearr_14128_14145[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14146 = state_14105;
state_14105 = G__14146;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_14105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_14105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_14129 = f__6541__auto__.call(null);
(statearr_14129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_14129;
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

cljs.core.async.Mux = (function (){var obj14148 = {};
return obj14148;
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


cljs.core.async.Mult = (function (){var obj14150 = {};
return obj14150;
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
if(typeof cljs.core.async.t14372 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14372 = (function (cs,ch,mult,meta14373){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14373 = meta14373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14372.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14372.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14372.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14372.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14372.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14374){
var self__ = this;
var _14374__$1 = this;
return self__.meta14373;
});})(cs))
;

cljs.core.async.t14372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14374,meta14373__$1){
var self__ = this;
var _14374__$1 = this;
return (new cljs.core.async.t14372(self__.cs,self__.ch,self__.mult,meta14373__$1));
});})(cs))
;

cljs.core.async.t14372.cljs$lang$type = true;

cljs.core.async.t14372.cljs$lang$ctorStr = "cljs.core.async/t14372";

cljs.core.async.t14372.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14372");
});})(cs))
;

cljs.core.async.__GT_t14372 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14372(cs__$1,ch__$1,mult__$1,meta14373){
return (new cljs.core.async.t14372(cs__$1,ch__$1,mult__$1,meta14373));
});})(cs))
;

}

return (new cljs.core.async.t14372(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6540__auto___14593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14593,cs,m,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14593,cs,m,dchan,dctr,done){
return (function (state_14505){
var state_val_14506 = (state_14505[(1)]);
if((state_val_14506 === (7))){
var inst_14501 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14507_14594 = state_14505__$1;
(statearr_14507_14594[(2)] = inst_14501);

(statearr_14507_14594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (20))){
var inst_14406 = (state_14505[(7)]);
var inst_14416 = cljs.core.first.call(null,inst_14406);
var inst_14417 = cljs.core.nth.call(null,inst_14416,(0),null);
var inst_14418 = cljs.core.nth.call(null,inst_14416,(1),null);
var state_14505__$1 = (function (){var statearr_14508 = state_14505;
(statearr_14508[(8)] = inst_14417);

return statearr_14508;
})();
if(cljs.core.truth_(inst_14418)){
var statearr_14509_14595 = state_14505__$1;
(statearr_14509_14595[(1)] = (22));

} else {
var statearr_14510_14596 = state_14505__$1;
(statearr_14510_14596[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (27))){
var inst_14377 = (state_14505[(9)]);
var inst_14446 = (state_14505[(10)]);
var inst_14453 = (state_14505[(11)]);
var inst_14448 = (state_14505[(12)]);
var inst_14453__$1 = cljs.core._nth.call(null,inst_14446,inst_14448);
var inst_14454 = cljs.core.async.put_BANG_.call(null,inst_14453__$1,inst_14377,done);
var state_14505__$1 = (function (){var statearr_14511 = state_14505;
(statearr_14511[(11)] = inst_14453__$1);

return statearr_14511;
})();
if(cljs.core.truth_(inst_14454)){
var statearr_14512_14597 = state_14505__$1;
(statearr_14512_14597[(1)] = (30));

} else {
var statearr_14513_14598 = state_14505__$1;
(statearr_14513_14598[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (1))){
var state_14505__$1 = state_14505;
var statearr_14514_14599 = state_14505__$1;
(statearr_14514_14599[(2)] = null);

(statearr_14514_14599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (24))){
var inst_14406 = (state_14505[(7)]);
var inst_14423 = (state_14505[(2)]);
var inst_14424 = cljs.core.next.call(null,inst_14406);
var inst_14386 = inst_14424;
var inst_14387 = null;
var inst_14388 = (0);
var inst_14389 = (0);
var state_14505__$1 = (function (){var statearr_14515 = state_14505;
(statearr_14515[(13)] = inst_14423);

(statearr_14515[(14)] = inst_14387);

(statearr_14515[(15)] = inst_14386);

(statearr_14515[(16)] = inst_14388);

(statearr_14515[(17)] = inst_14389);

return statearr_14515;
})();
var statearr_14516_14600 = state_14505__$1;
(statearr_14516_14600[(2)] = null);

(statearr_14516_14600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (39))){
var state_14505__$1 = state_14505;
var statearr_14520_14601 = state_14505__$1;
(statearr_14520_14601[(2)] = null);

(statearr_14520_14601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (4))){
var inst_14377 = (state_14505[(9)]);
var inst_14377__$1 = (state_14505[(2)]);
var inst_14378 = (inst_14377__$1 == null);
var state_14505__$1 = (function (){var statearr_14521 = state_14505;
(statearr_14521[(9)] = inst_14377__$1);

return statearr_14521;
})();
if(cljs.core.truth_(inst_14378)){
var statearr_14522_14602 = state_14505__$1;
(statearr_14522_14602[(1)] = (5));

} else {
var statearr_14523_14603 = state_14505__$1;
(statearr_14523_14603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (15))){
var inst_14387 = (state_14505[(14)]);
var inst_14386 = (state_14505[(15)]);
var inst_14388 = (state_14505[(16)]);
var inst_14389 = (state_14505[(17)]);
var inst_14402 = (state_14505[(2)]);
var inst_14403 = (inst_14389 + (1));
var tmp14517 = inst_14387;
var tmp14518 = inst_14386;
var tmp14519 = inst_14388;
var inst_14386__$1 = tmp14518;
var inst_14387__$1 = tmp14517;
var inst_14388__$1 = tmp14519;
var inst_14389__$1 = inst_14403;
var state_14505__$1 = (function (){var statearr_14524 = state_14505;
(statearr_14524[(18)] = inst_14402);

(statearr_14524[(14)] = inst_14387__$1);

(statearr_14524[(15)] = inst_14386__$1);

(statearr_14524[(16)] = inst_14388__$1);

(statearr_14524[(17)] = inst_14389__$1);

return statearr_14524;
})();
var statearr_14525_14604 = state_14505__$1;
(statearr_14525_14604[(2)] = null);

(statearr_14525_14604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (21))){
var inst_14427 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14529_14605 = state_14505__$1;
(statearr_14529_14605[(2)] = inst_14427);

(statearr_14529_14605[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (31))){
var inst_14453 = (state_14505[(11)]);
var inst_14457 = done.call(null,null);
var inst_14458 = cljs.core.async.untap_STAR_.call(null,m,inst_14453);
var state_14505__$1 = (function (){var statearr_14530 = state_14505;
(statearr_14530[(19)] = inst_14457);

return statearr_14530;
})();
var statearr_14531_14606 = state_14505__$1;
(statearr_14531_14606[(2)] = inst_14458);

(statearr_14531_14606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (32))){
var inst_14446 = (state_14505[(10)]);
var inst_14445 = (state_14505[(20)]);
var inst_14447 = (state_14505[(21)]);
var inst_14448 = (state_14505[(12)]);
var inst_14460 = (state_14505[(2)]);
var inst_14461 = (inst_14448 + (1));
var tmp14526 = inst_14446;
var tmp14527 = inst_14445;
var tmp14528 = inst_14447;
var inst_14445__$1 = tmp14527;
var inst_14446__$1 = tmp14526;
var inst_14447__$1 = tmp14528;
var inst_14448__$1 = inst_14461;
var state_14505__$1 = (function (){var statearr_14532 = state_14505;
(statearr_14532[(10)] = inst_14446__$1);

(statearr_14532[(22)] = inst_14460);

(statearr_14532[(20)] = inst_14445__$1);

(statearr_14532[(21)] = inst_14447__$1);

(statearr_14532[(12)] = inst_14448__$1);

return statearr_14532;
})();
var statearr_14533_14607 = state_14505__$1;
(statearr_14533_14607[(2)] = null);

(statearr_14533_14607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (40))){
var inst_14473 = (state_14505[(23)]);
var inst_14477 = done.call(null,null);
var inst_14478 = cljs.core.async.untap_STAR_.call(null,m,inst_14473);
var state_14505__$1 = (function (){var statearr_14534 = state_14505;
(statearr_14534[(24)] = inst_14477);

return statearr_14534;
})();
var statearr_14535_14608 = state_14505__$1;
(statearr_14535_14608[(2)] = inst_14478);

(statearr_14535_14608[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (33))){
var inst_14464 = (state_14505[(25)]);
var inst_14466 = cljs.core.chunked_seq_QMARK_.call(null,inst_14464);
var state_14505__$1 = state_14505;
if(inst_14466){
var statearr_14536_14609 = state_14505__$1;
(statearr_14536_14609[(1)] = (36));

} else {
var statearr_14537_14610 = state_14505__$1;
(statearr_14537_14610[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (13))){
var inst_14396 = (state_14505[(26)]);
var inst_14399 = cljs.core.async.close_BANG_.call(null,inst_14396);
var state_14505__$1 = state_14505;
var statearr_14538_14611 = state_14505__$1;
(statearr_14538_14611[(2)] = inst_14399);

(statearr_14538_14611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (22))){
var inst_14417 = (state_14505[(8)]);
var inst_14420 = cljs.core.async.close_BANG_.call(null,inst_14417);
var state_14505__$1 = state_14505;
var statearr_14539_14612 = state_14505__$1;
(statearr_14539_14612[(2)] = inst_14420);

(statearr_14539_14612[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (36))){
var inst_14464 = (state_14505[(25)]);
var inst_14468 = cljs.core.chunk_first.call(null,inst_14464);
var inst_14469 = cljs.core.chunk_rest.call(null,inst_14464);
var inst_14470 = cljs.core.count.call(null,inst_14468);
var inst_14445 = inst_14469;
var inst_14446 = inst_14468;
var inst_14447 = inst_14470;
var inst_14448 = (0);
var state_14505__$1 = (function (){var statearr_14540 = state_14505;
(statearr_14540[(10)] = inst_14446);

(statearr_14540[(20)] = inst_14445);

(statearr_14540[(21)] = inst_14447);

(statearr_14540[(12)] = inst_14448);

return statearr_14540;
})();
var statearr_14541_14613 = state_14505__$1;
(statearr_14541_14613[(2)] = null);

(statearr_14541_14613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (41))){
var inst_14464 = (state_14505[(25)]);
var inst_14480 = (state_14505[(2)]);
var inst_14481 = cljs.core.next.call(null,inst_14464);
var inst_14445 = inst_14481;
var inst_14446 = null;
var inst_14447 = (0);
var inst_14448 = (0);
var state_14505__$1 = (function (){var statearr_14542 = state_14505;
(statearr_14542[(10)] = inst_14446);

(statearr_14542[(20)] = inst_14445);

(statearr_14542[(21)] = inst_14447);

(statearr_14542[(12)] = inst_14448);

(statearr_14542[(27)] = inst_14480);

return statearr_14542;
})();
var statearr_14543_14614 = state_14505__$1;
(statearr_14543_14614[(2)] = null);

(statearr_14543_14614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (43))){
var state_14505__$1 = state_14505;
var statearr_14544_14615 = state_14505__$1;
(statearr_14544_14615[(2)] = null);

(statearr_14544_14615[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (29))){
var inst_14489 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14545_14616 = state_14505__$1;
(statearr_14545_14616[(2)] = inst_14489);

(statearr_14545_14616[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (44))){
var inst_14498 = (state_14505[(2)]);
var state_14505__$1 = (function (){var statearr_14546 = state_14505;
(statearr_14546[(28)] = inst_14498);

return statearr_14546;
})();
var statearr_14547_14617 = state_14505__$1;
(statearr_14547_14617[(2)] = null);

(statearr_14547_14617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (6))){
var inst_14437 = (state_14505[(29)]);
var inst_14436 = cljs.core.deref.call(null,cs);
var inst_14437__$1 = cljs.core.keys.call(null,inst_14436);
var inst_14438 = cljs.core.count.call(null,inst_14437__$1);
var inst_14439 = cljs.core.reset_BANG_.call(null,dctr,inst_14438);
var inst_14444 = cljs.core.seq.call(null,inst_14437__$1);
var inst_14445 = inst_14444;
var inst_14446 = null;
var inst_14447 = (0);
var inst_14448 = (0);
var state_14505__$1 = (function (){var statearr_14548 = state_14505;
(statearr_14548[(30)] = inst_14439);

(statearr_14548[(10)] = inst_14446);

(statearr_14548[(29)] = inst_14437__$1);

(statearr_14548[(20)] = inst_14445);

(statearr_14548[(21)] = inst_14447);

(statearr_14548[(12)] = inst_14448);

return statearr_14548;
})();
var statearr_14549_14618 = state_14505__$1;
(statearr_14549_14618[(2)] = null);

(statearr_14549_14618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (28))){
var inst_14464 = (state_14505[(25)]);
var inst_14445 = (state_14505[(20)]);
var inst_14464__$1 = cljs.core.seq.call(null,inst_14445);
var state_14505__$1 = (function (){var statearr_14550 = state_14505;
(statearr_14550[(25)] = inst_14464__$1);

return statearr_14550;
})();
if(inst_14464__$1){
var statearr_14551_14619 = state_14505__$1;
(statearr_14551_14619[(1)] = (33));

} else {
var statearr_14552_14620 = state_14505__$1;
(statearr_14552_14620[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (25))){
var inst_14447 = (state_14505[(21)]);
var inst_14448 = (state_14505[(12)]);
var inst_14450 = (inst_14448 < inst_14447);
var inst_14451 = inst_14450;
var state_14505__$1 = state_14505;
if(cljs.core.truth_(inst_14451)){
var statearr_14553_14621 = state_14505__$1;
(statearr_14553_14621[(1)] = (27));

} else {
var statearr_14554_14622 = state_14505__$1;
(statearr_14554_14622[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (34))){
var state_14505__$1 = state_14505;
var statearr_14555_14623 = state_14505__$1;
(statearr_14555_14623[(2)] = null);

(statearr_14555_14623[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (17))){
var state_14505__$1 = state_14505;
var statearr_14556_14624 = state_14505__$1;
(statearr_14556_14624[(2)] = null);

(statearr_14556_14624[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (3))){
var inst_14503 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14505__$1,inst_14503);
} else {
if((state_val_14506 === (12))){
var inst_14432 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14557_14625 = state_14505__$1;
(statearr_14557_14625[(2)] = inst_14432);

(statearr_14557_14625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (2))){
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14505__$1,(4),ch);
} else {
if((state_val_14506 === (23))){
var state_14505__$1 = state_14505;
var statearr_14558_14626 = state_14505__$1;
(statearr_14558_14626[(2)] = null);

(statearr_14558_14626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (35))){
var inst_14487 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14559_14627 = state_14505__$1;
(statearr_14559_14627[(2)] = inst_14487);

(statearr_14559_14627[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (19))){
var inst_14406 = (state_14505[(7)]);
var inst_14410 = cljs.core.chunk_first.call(null,inst_14406);
var inst_14411 = cljs.core.chunk_rest.call(null,inst_14406);
var inst_14412 = cljs.core.count.call(null,inst_14410);
var inst_14386 = inst_14411;
var inst_14387 = inst_14410;
var inst_14388 = inst_14412;
var inst_14389 = (0);
var state_14505__$1 = (function (){var statearr_14560 = state_14505;
(statearr_14560[(14)] = inst_14387);

(statearr_14560[(15)] = inst_14386);

(statearr_14560[(16)] = inst_14388);

(statearr_14560[(17)] = inst_14389);

return statearr_14560;
})();
var statearr_14561_14628 = state_14505__$1;
(statearr_14561_14628[(2)] = null);

(statearr_14561_14628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (11))){
var inst_14386 = (state_14505[(15)]);
var inst_14406 = (state_14505[(7)]);
var inst_14406__$1 = cljs.core.seq.call(null,inst_14386);
var state_14505__$1 = (function (){var statearr_14562 = state_14505;
(statearr_14562[(7)] = inst_14406__$1);

return statearr_14562;
})();
if(inst_14406__$1){
var statearr_14563_14629 = state_14505__$1;
(statearr_14563_14629[(1)] = (16));

} else {
var statearr_14564_14630 = state_14505__$1;
(statearr_14564_14630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (9))){
var inst_14434 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14565_14631 = state_14505__$1;
(statearr_14565_14631[(2)] = inst_14434);

(statearr_14565_14631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (5))){
var inst_14384 = cljs.core.deref.call(null,cs);
var inst_14385 = cljs.core.seq.call(null,inst_14384);
var inst_14386 = inst_14385;
var inst_14387 = null;
var inst_14388 = (0);
var inst_14389 = (0);
var state_14505__$1 = (function (){var statearr_14566 = state_14505;
(statearr_14566[(14)] = inst_14387);

(statearr_14566[(15)] = inst_14386);

(statearr_14566[(16)] = inst_14388);

(statearr_14566[(17)] = inst_14389);

return statearr_14566;
})();
var statearr_14567_14632 = state_14505__$1;
(statearr_14567_14632[(2)] = null);

(statearr_14567_14632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (14))){
var state_14505__$1 = state_14505;
var statearr_14568_14633 = state_14505__$1;
(statearr_14568_14633[(2)] = null);

(statearr_14568_14633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (45))){
var inst_14495 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14569_14634 = state_14505__$1;
(statearr_14569_14634[(2)] = inst_14495);

(statearr_14569_14634[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (26))){
var inst_14437 = (state_14505[(29)]);
var inst_14491 = (state_14505[(2)]);
var inst_14492 = cljs.core.seq.call(null,inst_14437);
var state_14505__$1 = (function (){var statearr_14570 = state_14505;
(statearr_14570[(31)] = inst_14491);

return statearr_14570;
})();
if(inst_14492){
var statearr_14571_14635 = state_14505__$1;
(statearr_14571_14635[(1)] = (42));

} else {
var statearr_14572_14636 = state_14505__$1;
(statearr_14572_14636[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (16))){
var inst_14406 = (state_14505[(7)]);
var inst_14408 = cljs.core.chunked_seq_QMARK_.call(null,inst_14406);
var state_14505__$1 = state_14505;
if(inst_14408){
var statearr_14573_14637 = state_14505__$1;
(statearr_14573_14637[(1)] = (19));

} else {
var statearr_14574_14638 = state_14505__$1;
(statearr_14574_14638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (38))){
var inst_14484 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14575_14639 = state_14505__$1;
(statearr_14575_14639[(2)] = inst_14484);

(statearr_14575_14639[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (30))){
var state_14505__$1 = state_14505;
var statearr_14576_14640 = state_14505__$1;
(statearr_14576_14640[(2)] = null);

(statearr_14576_14640[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (10))){
var inst_14387 = (state_14505[(14)]);
var inst_14389 = (state_14505[(17)]);
var inst_14395 = cljs.core._nth.call(null,inst_14387,inst_14389);
var inst_14396 = cljs.core.nth.call(null,inst_14395,(0),null);
var inst_14397 = cljs.core.nth.call(null,inst_14395,(1),null);
var state_14505__$1 = (function (){var statearr_14577 = state_14505;
(statearr_14577[(26)] = inst_14396);

return statearr_14577;
})();
if(cljs.core.truth_(inst_14397)){
var statearr_14578_14641 = state_14505__$1;
(statearr_14578_14641[(1)] = (13));

} else {
var statearr_14579_14642 = state_14505__$1;
(statearr_14579_14642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (18))){
var inst_14430 = (state_14505[(2)]);
var state_14505__$1 = state_14505;
var statearr_14580_14643 = state_14505__$1;
(statearr_14580_14643[(2)] = inst_14430);

(statearr_14580_14643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (42))){
var state_14505__$1 = state_14505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14505__$1,(45),dchan);
} else {
if((state_val_14506 === (37))){
var inst_14464 = (state_14505[(25)]);
var inst_14377 = (state_14505[(9)]);
var inst_14473 = (state_14505[(23)]);
var inst_14473__$1 = cljs.core.first.call(null,inst_14464);
var inst_14474 = cljs.core.async.put_BANG_.call(null,inst_14473__$1,inst_14377,done);
var state_14505__$1 = (function (){var statearr_14581 = state_14505;
(statearr_14581[(23)] = inst_14473__$1);

return statearr_14581;
})();
if(cljs.core.truth_(inst_14474)){
var statearr_14582_14644 = state_14505__$1;
(statearr_14582_14644[(1)] = (39));

} else {
var statearr_14583_14645 = state_14505__$1;
(statearr_14583_14645[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14506 === (8))){
var inst_14388 = (state_14505[(16)]);
var inst_14389 = (state_14505[(17)]);
var inst_14391 = (inst_14389 < inst_14388);
var inst_14392 = inst_14391;
var state_14505__$1 = state_14505;
if(cljs.core.truth_(inst_14392)){
var statearr_14584_14646 = state_14505__$1;
(statearr_14584_14646[(1)] = (10));

} else {
var statearr_14585_14647 = state_14505__$1;
(statearr_14585_14647[(1)] = (11));

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
});})(c__6540__auto___14593,cs,m,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___14593,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6479__auto__ = null;
var cljs$core$async$mult_$_state_machine__6479__auto____0 = (function (){
var statearr_14589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14589[(0)] = cljs$core$async$mult_$_state_machine__6479__auto__);

(statearr_14589[(1)] = (1));

return statearr_14589;
});
var cljs$core$async$mult_$_state_machine__6479__auto____1 = (function (state_14505){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14590){if((e14590 instanceof Object)){
var ex__6482__auto__ = e14590;
var statearr_14591_14648 = state_14505;
(statearr_14591_14648[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14649 = state_14505;
state_14505 = G__14649;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6479__auto__ = function(state_14505){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6479__auto____1.call(this,state_14505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6479__auto____0;
cljs$core$async$mult_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6479__auto____1;
return cljs$core$async$mult_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14593,cs,m,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_14592 = f__6541__auto__.call(null);
(statearr_14592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14593);

return statearr_14592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14593,cs,m,dchan,dctr,done))
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
var G__14651 = arguments.length;
switch (G__14651) {
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

cljs.core.async.Mix = (function (){var obj14654 = {};
return obj14654;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14659){
var map__14660 = p__14659;
var map__14660__$1 = ((cljs.core.seq_QMARK_.call(null,map__14660))?cljs.core.apply.call(null,cljs.core.hash_map,map__14660):map__14660);
var opts = map__14660__$1;
var statearr_14661_14664 = state;
(statearr_14661_14664[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14660,map__14660__$1,opts){
return (function (val){
var statearr_14662_14665 = state;
(statearr_14662_14665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14660,map__14660__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14663_14666 = state;
(statearr_14663_14666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14655){
var G__14656 = cljs.core.first.call(null,seq14655);
var seq14655__$1 = cljs.core.next.call(null,seq14655);
var G__14657 = cljs.core.first.call(null,seq14655__$1);
var seq14655__$2 = cljs.core.next.call(null,seq14655__$1);
var G__14658 = cljs.core.first.call(null,seq14655__$2);
var seq14655__$3 = cljs.core.next.call(null,seq14655__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14656,G__14657,G__14658,seq14655__$3);
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
if(typeof cljs.core.async.t14786 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14786 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14787){
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
this.meta14787 = meta14787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14786.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14786.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14788){
var self__ = this;
var _14788__$1 = this;
return self__.meta14787;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14788,meta14787__$1){
var self__ = this;
var _14788__$1 = this;
return (new cljs.core.async.t14786(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14787__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14786.cljs$lang$type = true;

cljs.core.async.t14786.cljs$lang$ctorStr = "cljs.core.async/t14786";

cljs.core.async.t14786.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14786");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14786 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14786(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14787){
return (new cljs.core.async.t14786(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14787));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14786(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___14905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___14905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___14905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14858){
var state_val_14859 = (state_14858[(1)]);
if((state_val_14859 === (7))){
var inst_14802 = (state_14858[(7)]);
var inst_14807 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14802);
var state_14858__$1 = state_14858;
var statearr_14860_14906 = state_14858__$1;
(statearr_14860_14906[(2)] = inst_14807);

(statearr_14860_14906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (20))){
var inst_14817 = (state_14858[(8)]);
var state_14858__$1 = state_14858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14858__$1,(23),out,inst_14817);
} else {
if((state_val_14859 === (1))){
var inst_14792 = (state_14858[(9)]);
var inst_14792__$1 = calc_state.call(null);
var inst_14793 = cljs.core.seq_QMARK_.call(null,inst_14792__$1);
var state_14858__$1 = (function (){var statearr_14861 = state_14858;
(statearr_14861[(9)] = inst_14792__$1);

return statearr_14861;
})();
if(inst_14793){
var statearr_14862_14907 = state_14858__$1;
(statearr_14862_14907[(1)] = (2));

} else {
var statearr_14863_14908 = state_14858__$1;
(statearr_14863_14908[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (24))){
var inst_14810 = (state_14858[(10)]);
var inst_14802 = inst_14810;
var state_14858__$1 = (function (){var statearr_14864 = state_14858;
(statearr_14864[(7)] = inst_14802);

return statearr_14864;
})();
var statearr_14865_14909 = state_14858__$1;
(statearr_14865_14909[(2)] = null);

(statearr_14865_14909[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (4))){
var inst_14792 = (state_14858[(9)]);
var inst_14798 = (state_14858[(2)]);
var inst_14799 = cljs.core.get.call(null,inst_14798,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14800 = cljs.core.get.call(null,inst_14798,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14801 = cljs.core.get.call(null,inst_14798,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14802 = inst_14792;
var state_14858__$1 = (function (){var statearr_14866 = state_14858;
(statearr_14866[(11)] = inst_14801);

(statearr_14866[(12)] = inst_14799);

(statearr_14866[(7)] = inst_14802);

(statearr_14866[(13)] = inst_14800);

return statearr_14866;
})();
var statearr_14867_14910 = state_14858__$1;
(statearr_14867_14910[(2)] = null);

(statearr_14867_14910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (15))){
var state_14858__$1 = state_14858;
var statearr_14868_14911 = state_14858__$1;
(statearr_14868_14911[(2)] = null);

(statearr_14868_14911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (21))){
var inst_14810 = (state_14858[(10)]);
var inst_14802 = inst_14810;
var state_14858__$1 = (function (){var statearr_14869 = state_14858;
(statearr_14869[(7)] = inst_14802);

return statearr_14869;
})();
var statearr_14870_14912 = state_14858__$1;
(statearr_14870_14912[(2)] = null);

(statearr_14870_14912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (13))){
var inst_14854 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
var statearr_14871_14913 = state_14858__$1;
(statearr_14871_14913[(2)] = inst_14854);

(statearr_14871_14913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (22))){
var inst_14852 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
var statearr_14872_14914 = state_14858__$1;
(statearr_14872_14914[(2)] = inst_14852);

(statearr_14872_14914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (6))){
var inst_14856 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14858__$1,inst_14856);
} else {
if((state_val_14859 === (25))){
var state_14858__$1 = state_14858;
var statearr_14873_14915 = state_14858__$1;
(statearr_14873_14915[(2)] = null);

(statearr_14873_14915[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (17))){
var inst_14832 = (state_14858[(14)]);
var state_14858__$1 = state_14858;
var statearr_14874_14916 = state_14858__$1;
(statearr_14874_14916[(2)] = inst_14832);

(statearr_14874_14916[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (3))){
var inst_14792 = (state_14858[(9)]);
var state_14858__$1 = state_14858;
var statearr_14875_14917 = state_14858__$1;
(statearr_14875_14917[(2)] = inst_14792);

(statearr_14875_14917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (12))){
var inst_14813 = (state_14858[(15)]);
var inst_14832 = (state_14858[(14)]);
var inst_14818 = (state_14858[(16)]);
var inst_14832__$1 = inst_14813.call(null,inst_14818);
var state_14858__$1 = (function (){var statearr_14876 = state_14858;
(statearr_14876[(14)] = inst_14832__$1);

return statearr_14876;
})();
if(cljs.core.truth_(inst_14832__$1)){
var statearr_14877_14918 = state_14858__$1;
(statearr_14877_14918[(1)] = (17));

} else {
var statearr_14878_14919 = state_14858__$1;
(statearr_14878_14919[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (2))){
var inst_14792 = (state_14858[(9)]);
var inst_14795 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14792);
var state_14858__$1 = state_14858;
var statearr_14879_14920 = state_14858__$1;
(statearr_14879_14920[(2)] = inst_14795);

(statearr_14879_14920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (23))){
var inst_14843 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
if(cljs.core.truth_(inst_14843)){
var statearr_14880_14921 = state_14858__$1;
(statearr_14880_14921[(1)] = (24));

} else {
var statearr_14881_14922 = state_14858__$1;
(statearr_14881_14922[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (19))){
var inst_14840 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
if(cljs.core.truth_(inst_14840)){
var statearr_14882_14923 = state_14858__$1;
(statearr_14882_14923[(1)] = (20));

} else {
var statearr_14883_14924 = state_14858__$1;
(statearr_14883_14924[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (11))){
var inst_14817 = (state_14858[(8)]);
var inst_14823 = (inst_14817 == null);
var state_14858__$1 = state_14858;
if(cljs.core.truth_(inst_14823)){
var statearr_14884_14925 = state_14858__$1;
(statearr_14884_14925[(1)] = (14));

} else {
var statearr_14885_14926 = state_14858__$1;
(statearr_14885_14926[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (9))){
var inst_14810 = (state_14858[(10)]);
var inst_14810__$1 = (state_14858[(2)]);
var inst_14811 = cljs.core.get.call(null,inst_14810__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14812 = cljs.core.get.call(null,inst_14810__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14813 = cljs.core.get.call(null,inst_14810__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14858__$1 = (function (){var statearr_14886 = state_14858;
(statearr_14886[(15)] = inst_14813);

(statearr_14886[(17)] = inst_14812);

(statearr_14886[(10)] = inst_14810__$1);

return statearr_14886;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14858__$1,(10),inst_14811);
} else {
if((state_val_14859 === (5))){
var inst_14802 = (state_14858[(7)]);
var inst_14805 = cljs.core.seq_QMARK_.call(null,inst_14802);
var state_14858__$1 = state_14858;
if(inst_14805){
var statearr_14887_14927 = state_14858__$1;
(statearr_14887_14927[(1)] = (7));

} else {
var statearr_14888_14928 = state_14858__$1;
(statearr_14888_14928[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (14))){
var inst_14818 = (state_14858[(16)]);
var inst_14825 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14818);
var state_14858__$1 = state_14858;
var statearr_14889_14929 = state_14858__$1;
(statearr_14889_14929[(2)] = inst_14825);

(statearr_14889_14929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (26))){
var inst_14848 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
var statearr_14890_14930 = state_14858__$1;
(statearr_14890_14930[(2)] = inst_14848);

(statearr_14890_14930[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (16))){
var inst_14828 = (state_14858[(2)]);
var inst_14829 = calc_state.call(null);
var inst_14802 = inst_14829;
var state_14858__$1 = (function (){var statearr_14891 = state_14858;
(statearr_14891[(18)] = inst_14828);

(statearr_14891[(7)] = inst_14802);

return statearr_14891;
})();
var statearr_14892_14931 = state_14858__$1;
(statearr_14892_14931[(2)] = null);

(statearr_14892_14931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (10))){
var inst_14817 = (state_14858[(8)]);
var inst_14818 = (state_14858[(16)]);
var inst_14816 = (state_14858[(2)]);
var inst_14817__$1 = cljs.core.nth.call(null,inst_14816,(0),null);
var inst_14818__$1 = cljs.core.nth.call(null,inst_14816,(1),null);
var inst_14819 = (inst_14817__$1 == null);
var inst_14820 = cljs.core._EQ_.call(null,inst_14818__$1,change);
var inst_14821 = (inst_14819) || (inst_14820);
var state_14858__$1 = (function (){var statearr_14893 = state_14858;
(statearr_14893[(8)] = inst_14817__$1);

(statearr_14893[(16)] = inst_14818__$1);

return statearr_14893;
})();
if(cljs.core.truth_(inst_14821)){
var statearr_14894_14932 = state_14858__$1;
(statearr_14894_14932[(1)] = (11));

} else {
var statearr_14895_14933 = state_14858__$1;
(statearr_14895_14933[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (18))){
var inst_14813 = (state_14858[(15)]);
var inst_14812 = (state_14858[(17)]);
var inst_14818 = (state_14858[(16)]);
var inst_14835 = cljs.core.empty_QMARK_.call(null,inst_14813);
var inst_14836 = inst_14812.call(null,inst_14818);
var inst_14837 = cljs.core.not.call(null,inst_14836);
var inst_14838 = (inst_14835) && (inst_14837);
var state_14858__$1 = state_14858;
var statearr_14896_14934 = state_14858__$1;
(statearr_14896_14934[(2)] = inst_14838);

(statearr_14896_14934[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14859 === (8))){
var inst_14802 = (state_14858[(7)]);
var state_14858__$1 = state_14858;
var statearr_14897_14935 = state_14858__$1;
(statearr_14897_14935[(2)] = inst_14802);

(statearr_14897_14935[(1)] = (9));


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
});})(c__6540__auto___14905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6478__auto__,c__6540__auto___14905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6479__auto__ = null;
var cljs$core$async$mix_$_state_machine__6479__auto____0 = (function (){
var statearr_14901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14901[(0)] = cljs$core$async$mix_$_state_machine__6479__auto__);

(statearr_14901[(1)] = (1));

return statearr_14901;
});
var cljs$core$async$mix_$_state_machine__6479__auto____1 = (function (state_14858){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_14858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e14902){if((e14902 instanceof Object)){
var ex__6482__auto__ = e14902;
var statearr_14903_14936 = state_14858;
(statearr_14903_14936[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14937 = state_14858;
state_14858 = G__14937;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6479__auto__ = function(state_14858){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6479__auto____1.call(this,state_14858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6479__auto____0;
cljs$core$async$mix_$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6479__auto____1;
return cljs$core$async$mix_$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___14905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6542__auto__ = (function (){var statearr_14904 = f__6541__auto__.call(null);
(statearr_14904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___14905);

return statearr_14904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___14905,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj14939 = {};
return obj14939;
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
var G__14941 = arguments.length;
switch (G__14941) {
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
var G__14945 = arguments.length;
switch (G__14945) {
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
return (function (p1__14943_SHARP_){
if(cljs.core.truth_(p1__14943_SHARP_.call(null,topic))){
return p1__14943_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14943_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14946 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14946 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta14947){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta14947 = meta14947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14946.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t14946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14946.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14948){
var self__ = this;
var _14948__$1 = this;
return self__.meta14947;
});})(mults,ensure_mult))
;

cljs.core.async.t14946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14948,meta14947__$1){
var self__ = this;
var _14948__$1 = this;
return (new cljs.core.async.t14946(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta14947__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14946.cljs$lang$type = true;

cljs.core.async.t14946.cljs$lang$ctorStr = "cljs.core.async/t14946";

cljs.core.async.t14946.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t14946");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14946 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t14946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14947){
return (new cljs.core.async.t14946(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta14947));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14946(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6540__auto___15069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15069,mults,ensure_mult,p){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15069,mults,ensure_mult,p){
return (function (state_15020){
var state_val_15021 = (state_15020[(1)]);
if((state_val_15021 === (7))){
var inst_15016 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
var statearr_15022_15070 = state_15020__$1;
(statearr_15022_15070[(2)] = inst_15016);

(statearr_15022_15070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (20))){
var state_15020__$1 = state_15020;
var statearr_15023_15071 = state_15020__$1;
(statearr_15023_15071[(2)] = null);

(statearr_15023_15071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (1))){
var state_15020__$1 = state_15020;
var statearr_15024_15072 = state_15020__$1;
(statearr_15024_15072[(2)] = null);

(statearr_15024_15072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (24))){
var inst_14999 = (state_15020[(7)]);
var inst_15008 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14999);
var state_15020__$1 = state_15020;
var statearr_15025_15073 = state_15020__$1;
(statearr_15025_15073[(2)] = inst_15008);

(statearr_15025_15073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (4))){
var inst_14951 = (state_15020[(8)]);
var inst_14951__$1 = (state_15020[(2)]);
var inst_14952 = (inst_14951__$1 == null);
var state_15020__$1 = (function (){var statearr_15026 = state_15020;
(statearr_15026[(8)] = inst_14951__$1);

return statearr_15026;
})();
if(cljs.core.truth_(inst_14952)){
var statearr_15027_15074 = state_15020__$1;
(statearr_15027_15074[(1)] = (5));

} else {
var statearr_15028_15075 = state_15020__$1;
(statearr_15028_15075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (15))){
var inst_14993 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
var statearr_15029_15076 = state_15020__$1;
(statearr_15029_15076[(2)] = inst_14993);

(statearr_15029_15076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (21))){
var inst_15013 = (state_15020[(2)]);
var state_15020__$1 = (function (){var statearr_15030 = state_15020;
(statearr_15030[(9)] = inst_15013);

return statearr_15030;
})();
var statearr_15031_15077 = state_15020__$1;
(statearr_15031_15077[(2)] = null);

(statearr_15031_15077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (13))){
var inst_14975 = (state_15020[(10)]);
var inst_14977 = cljs.core.chunked_seq_QMARK_.call(null,inst_14975);
var state_15020__$1 = state_15020;
if(inst_14977){
var statearr_15032_15078 = state_15020__$1;
(statearr_15032_15078[(1)] = (16));

} else {
var statearr_15033_15079 = state_15020__$1;
(statearr_15033_15079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (22))){
var inst_15005 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
if(cljs.core.truth_(inst_15005)){
var statearr_15034_15080 = state_15020__$1;
(statearr_15034_15080[(1)] = (23));

} else {
var statearr_15035_15081 = state_15020__$1;
(statearr_15035_15081[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (6))){
var inst_14951 = (state_15020[(8)]);
var inst_15001 = (state_15020[(11)]);
var inst_14999 = (state_15020[(7)]);
var inst_14999__$1 = topic_fn.call(null,inst_14951);
var inst_15000 = cljs.core.deref.call(null,mults);
var inst_15001__$1 = cljs.core.get.call(null,inst_15000,inst_14999__$1);
var state_15020__$1 = (function (){var statearr_15036 = state_15020;
(statearr_15036[(11)] = inst_15001__$1);

(statearr_15036[(7)] = inst_14999__$1);

return statearr_15036;
})();
if(cljs.core.truth_(inst_15001__$1)){
var statearr_15037_15082 = state_15020__$1;
(statearr_15037_15082[(1)] = (19));

} else {
var statearr_15038_15083 = state_15020__$1;
(statearr_15038_15083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (25))){
var inst_15010 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
var statearr_15039_15084 = state_15020__$1;
(statearr_15039_15084[(2)] = inst_15010);

(statearr_15039_15084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (17))){
var inst_14975 = (state_15020[(10)]);
var inst_14984 = cljs.core.first.call(null,inst_14975);
var inst_14985 = cljs.core.async.muxch_STAR_.call(null,inst_14984);
var inst_14986 = cljs.core.async.close_BANG_.call(null,inst_14985);
var inst_14987 = cljs.core.next.call(null,inst_14975);
var inst_14961 = inst_14987;
var inst_14962 = null;
var inst_14963 = (0);
var inst_14964 = (0);
var state_15020__$1 = (function (){var statearr_15040 = state_15020;
(statearr_15040[(12)] = inst_14962);

(statearr_15040[(13)] = inst_14963);

(statearr_15040[(14)] = inst_14964);

(statearr_15040[(15)] = inst_14961);

(statearr_15040[(16)] = inst_14986);

return statearr_15040;
})();
var statearr_15041_15085 = state_15020__$1;
(statearr_15041_15085[(2)] = null);

(statearr_15041_15085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (3))){
var inst_15018 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15020__$1,inst_15018);
} else {
if((state_val_15021 === (12))){
var inst_14995 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
var statearr_15042_15086 = state_15020__$1;
(statearr_15042_15086[(2)] = inst_14995);

(statearr_15042_15086[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (2))){
var state_15020__$1 = state_15020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15020__$1,(4),ch);
} else {
if((state_val_15021 === (23))){
var state_15020__$1 = state_15020;
var statearr_15043_15087 = state_15020__$1;
(statearr_15043_15087[(2)] = null);

(statearr_15043_15087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (19))){
var inst_14951 = (state_15020[(8)]);
var inst_15001 = (state_15020[(11)]);
var inst_15003 = cljs.core.async.muxch_STAR_.call(null,inst_15001);
var state_15020__$1 = state_15020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15020__$1,(22),inst_15003,inst_14951);
} else {
if((state_val_15021 === (11))){
var inst_14975 = (state_15020[(10)]);
var inst_14961 = (state_15020[(15)]);
var inst_14975__$1 = cljs.core.seq.call(null,inst_14961);
var state_15020__$1 = (function (){var statearr_15044 = state_15020;
(statearr_15044[(10)] = inst_14975__$1);

return statearr_15044;
})();
if(inst_14975__$1){
var statearr_15045_15088 = state_15020__$1;
(statearr_15045_15088[(1)] = (13));

} else {
var statearr_15046_15089 = state_15020__$1;
(statearr_15046_15089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (9))){
var inst_14997 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
var statearr_15047_15090 = state_15020__$1;
(statearr_15047_15090[(2)] = inst_14997);

(statearr_15047_15090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (5))){
var inst_14958 = cljs.core.deref.call(null,mults);
var inst_14959 = cljs.core.vals.call(null,inst_14958);
var inst_14960 = cljs.core.seq.call(null,inst_14959);
var inst_14961 = inst_14960;
var inst_14962 = null;
var inst_14963 = (0);
var inst_14964 = (0);
var state_15020__$1 = (function (){var statearr_15048 = state_15020;
(statearr_15048[(12)] = inst_14962);

(statearr_15048[(13)] = inst_14963);

(statearr_15048[(14)] = inst_14964);

(statearr_15048[(15)] = inst_14961);

return statearr_15048;
})();
var statearr_15049_15091 = state_15020__$1;
(statearr_15049_15091[(2)] = null);

(statearr_15049_15091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (14))){
var state_15020__$1 = state_15020;
var statearr_15053_15092 = state_15020__$1;
(statearr_15053_15092[(2)] = null);

(statearr_15053_15092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (16))){
var inst_14975 = (state_15020[(10)]);
var inst_14979 = cljs.core.chunk_first.call(null,inst_14975);
var inst_14980 = cljs.core.chunk_rest.call(null,inst_14975);
var inst_14981 = cljs.core.count.call(null,inst_14979);
var inst_14961 = inst_14980;
var inst_14962 = inst_14979;
var inst_14963 = inst_14981;
var inst_14964 = (0);
var state_15020__$1 = (function (){var statearr_15054 = state_15020;
(statearr_15054[(12)] = inst_14962);

(statearr_15054[(13)] = inst_14963);

(statearr_15054[(14)] = inst_14964);

(statearr_15054[(15)] = inst_14961);

return statearr_15054;
})();
var statearr_15055_15093 = state_15020__$1;
(statearr_15055_15093[(2)] = null);

(statearr_15055_15093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (10))){
var inst_14962 = (state_15020[(12)]);
var inst_14963 = (state_15020[(13)]);
var inst_14964 = (state_15020[(14)]);
var inst_14961 = (state_15020[(15)]);
var inst_14969 = cljs.core._nth.call(null,inst_14962,inst_14964);
var inst_14970 = cljs.core.async.muxch_STAR_.call(null,inst_14969);
var inst_14971 = cljs.core.async.close_BANG_.call(null,inst_14970);
var inst_14972 = (inst_14964 + (1));
var tmp15050 = inst_14962;
var tmp15051 = inst_14963;
var tmp15052 = inst_14961;
var inst_14961__$1 = tmp15052;
var inst_14962__$1 = tmp15050;
var inst_14963__$1 = tmp15051;
var inst_14964__$1 = inst_14972;
var state_15020__$1 = (function (){var statearr_15056 = state_15020;
(statearr_15056[(12)] = inst_14962__$1);

(statearr_15056[(13)] = inst_14963__$1);

(statearr_15056[(14)] = inst_14964__$1);

(statearr_15056[(15)] = inst_14961__$1);

(statearr_15056[(17)] = inst_14971);

return statearr_15056;
})();
var statearr_15057_15094 = state_15020__$1;
(statearr_15057_15094[(2)] = null);

(statearr_15057_15094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (18))){
var inst_14990 = (state_15020[(2)]);
var state_15020__$1 = state_15020;
var statearr_15058_15095 = state_15020__$1;
(statearr_15058_15095[(2)] = inst_14990);

(statearr_15058_15095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15021 === (8))){
var inst_14963 = (state_15020[(13)]);
var inst_14964 = (state_15020[(14)]);
var inst_14966 = (inst_14964 < inst_14963);
var inst_14967 = inst_14966;
var state_15020__$1 = state_15020;
if(cljs.core.truth_(inst_14967)){
var statearr_15059_15096 = state_15020__$1;
(statearr_15059_15096[(1)] = (10));

} else {
var statearr_15060_15097 = state_15020__$1;
(statearr_15060_15097[(1)] = (11));

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
});})(c__6540__auto___15069,mults,ensure_mult,p))
;
return ((function (switch__6478__auto__,c__6540__auto___15069,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15064[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15064[(1)] = (1));

return statearr_15064;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15020){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15065){if((e15065 instanceof Object)){
var ex__6482__auto__ = e15065;
var statearr_15066_15098 = state_15020;
(statearr_15066_15098[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15099 = state_15020;
state_15020 = G__15099;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15069,mults,ensure_mult,p))
})();
var state__6542__auto__ = (function (){var statearr_15067 = f__6541__auto__.call(null);
(statearr_15067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15069);

return statearr_15067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15069,mults,ensure_mult,p))
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
var G__15101 = arguments.length;
switch (G__15101) {
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
var G__15104 = arguments.length;
switch (G__15104) {
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
var G__15107 = arguments.length;
switch (G__15107) {
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
var c__6540__auto___15177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15146){
var state_val_15147 = (state_15146[(1)]);
if((state_val_15147 === (7))){
var state_15146__$1 = state_15146;
var statearr_15148_15178 = state_15146__$1;
(statearr_15148_15178[(2)] = null);

(statearr_15148_15178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (1))){
var state_15146__$1 = state_15146;
var statearr_15149_15179 = state_15146__$1;
(statearr_15149_15179[(2)] = null);

(statearr_15149_15179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (4))){
var inst_15110 = (state_15146[(7)]);
var inst_15112 = (inst_15110 < cnt);
var state_15146__$1 = state_15146;
if(cljs.core.truth_(inst_15112)){
var statearr_15150_15180 = state_15146__$1;
(statearr_15150_15180[(1)] = (6));

} else {
var statearr_15151_15181 = state_15146__$1;
(statearr_15151_15181[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (15))){
var inst_15142 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
var statearr_15152_15182 = state_15146__$1;
(statearr_15152_15182[(2)] = inst_15142);

(statearr_15152_15182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (13))){
var inst_15135 = cljs.core.async.close_BANG_.call(null,out);
var state_15146__$1 = state_15146;
var statearr_15153_15183 = state_15146__$1;
(statearr_15153_15183[(2)] = inst_15135);

(statearr_15153_15183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (6))){
var state_15146__$1 = state_15146;
var statearr_15154_15184 = state_15146__$1;
(statearr_15154_15184[(2)] = null);

(statearr_15154_15184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (3))){
var inst_15144 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15146__$1,inst_15144);
} else {
if((state_val_15147 === (12))){
var inst_15132 = (state_15146[(8)]);
var inst_15132__$1 = (state_15146[(2)]);
var inst_15133 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15132__$1);
var state_15146__$1 = (function (){var statearr_15155 = state_15146;
(statearr_15155[(8)] = inst_15132__$1);

return statearr_15155;
})();
if(cljs.core.truth_(inst_15133)){
var statearr_15156_15185 = state_15146__$1;
(statearr_15156_15185[(1)] = (13));

} else {
var statearr_15157_15186 = state_15146__$1;
(statearr_15157_15186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (2))){
var inst_15109 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15110 = (0);
var state_15146__$1 = (function (){var statearr_15158 = state_15146;
(statearr_15158[(7)] = inst_15110);

(statearr_15158[(9)] = inst_15109);

return statearr_15158;
})();
var statearr_15159_15187 = state_15146__$1;
(statearr_15159_15187[(2)] = null);

(statearr_15159_15187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (11))){
var inst_15110 = (state_15146[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15146,(10),Object,null,(9));
var inst_15119 = chs__$1.call(null,inst_15110);
var inst_15120 = done.call(null,inst_15110);
var inst_15121 = cljs.core.async.take_BANG_.call(null,inst_15119,inst_15120);
var state_15146__$1 = state_15146;
var statearr_15160_15188 = state_15146__$1;
(statearr_15160_15188[(2)] = inst_15121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (9))){
var inst_15110 = (state_15146[(7)]);
var inst_15123 = (state_15146[(2)]);
var inst_15124 = (inst_15110 + (1));
var inst_15110__$1 = inst_15124;
var state_15146__$1 = (function (){var statearr_15161 = state_15146;
(statearr_15161[(7)] = inst_15110__$1);

(statearr_15161[(10)] = inst_15123);

return statearr_15161;
})();
var statearr_15162_15189 = state_15146__$1;
(statearr_15162_15189[(2)] = null);

(statearr_15162_15189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (5))){
var inst_15130 = (state_15146[(2)]);
var state_15146__$1 = (function (){var statearr_15163 = state_15146;
(statearr_15163[(11)] = inst_15130);

return statearr_15163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15146__$1,(12),dchan);
} else {
if((state_val_15147 === (14))){
var inst_15132 = (state_15146[(8)]);
var inst_15137 = cljs.core.apply.call(null,f,inst_15132);
var state_15146__$1 = state_15146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15146__$1,(16),out,inst_15137);
} else {
if((state_val_15147 === (16))){
var inst_15139 = (state_15146[(2)]);
var state_15146__$1 = (function (){var statearr_15164 = state_15146;
(statearr_15164[(12)] = inst_15139);

return statearr_15164;
})();
var statearr_15165_15190 = state_15146__$1;
(statearr_15165_15190[(2)] = null);

(statearr_15165_15190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (10))){
var inst_15114 = (state_15146[(2)]);
var inst_15115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15146__$1 = (function (){var statearr_15166 = state_15146;
(statearr_15166[(13)] = inst_15114);

return statearr_15166;
})();
var statearr_15167_15191 = state_15146__$1;
(statearr_15167_15191[(2)] = inst_15115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15147 === (8))){
var inst_15128 = (state_15146[(2)]);
var state_15146__$1 = state_15146;
var statearr_15168_15192 = state_15146__$1;
(statearr_15168_15192[(2)] = inst_15128);

(statearr_15168_15192[(1)] = (5));


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
});})(c__6540__auto___15177,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6478__auto__,c__6540__auto___15177,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15172[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15172[(1)] = (1));

return statearr_15172;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15146){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15173){if((e15173 instanceof Object)){
var ex__6482__auto__ = e15173;
var statearr_15174_15193 = state_15146;
(statearr_15174_15193[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15194 = state_15146;
state_15146 = G__15194;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15177,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6542__auto__ = (function (){var statearr_15175 = f__6541__auto__.call(null);
(statearr_15175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15177);

return statearr_15175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15177,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__15197 = arguments.length;
switch (G__15197) {
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
var c__6540__auto___15252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15252,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15252,out){
return (function (state_15227){
var state_val_15228 = (state_15227[(1)]);
if((state_val_15228 === (7))){
var inst_15207 = (state_15227[(7)]);
var inst_15206 = (state_15227[(8)]);
var inst_15206__$1 = (state_15227[(2)]);
var inst_15207__$1 = cljs.core.nth.call(null,inst_15206__$1,(0),null);
var inst_15208 = cljs.core.nth.call(null,inst_15206__$1,(1),null);
var inst_15209 = (inst_15207__$1 == null);
var state_15227__$1 = (function (){var statearr_15229 = state_15227;
(statearr_15229[(9)] = inst_15208);

(statearr_15229[(7)] = inst_15207__$1);

(statearr_15229[(8)] = inst_15206__$1);

return statearr_15229;
})();
if(cljs.core.truth_(inst_15209)){
var statearr_15230_15253 = state_15227__$1;
(statearr_15230_15253[(1)] = (8));

} else {
var statearr_15231_15254 = state_15227__$1;
(statearr_15231_15254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (1))){
var inst_15198 = cljs.core.vec.call(null,chs);
var inst_15199 = inst_15198;
var state_15227__$1 = (function (){var statearr_15232 = state_15227;
(statearr_15232[(10)] = inst_15199);

return statearr_15232;
})();
var statearr_15233_15255 = state_15227__$1;
(statearr_15233_15255[(2)] = null);

(statearr_15233_15255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (4))){
var inst_15199 = (state_15227[(10)]);
var state_15227__$1 = state_15227;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15227__$1,(7),inst_15199);
} else {
if((state_val_15228 === (6))){
var inst_15223 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
var statearr_15234_15256 = state_15227__$1;
(statearr_15234_15256[(2)] = inst_15223);

(statearr_15234_15256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (3))){
var inst_15225 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15227__$1,inst_15225);
} else {
if((state_val_15228 === (2))){
var inst_15199 = (state_15227[(10)]);
var inst_15201 = cljs.core.count.call(null,inst_15199);
var inst_15202 = (inst_15201 > (0));
var state_15227__$1 = state_15227;
if(cljs.core.truth_(inst_15202)){
var statearr_15236_15257 = state_15227__$1;
(statearr_15236_15257[(1)] = (4));

} else {
var statearr_15237_15258 = state_15227__$1;
(statearr_15237_15258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (11))){
var inst_15199 = (state_15227[(10)]);
var inst_15216 = (state_15227[(2)]);
var tmp15235 = inst_15199;
var inst_15199__$1 = tmp15235;
var state_15227__$1 = (function (){var statearr_15238 = state_15227;
(statearr_15238[(10)] = inst_15199__$1);

(statearr_15238[(11)] = inst_15216);

return statearr_15238;
})();
var statearr_15239_15259 = state_15227__$1;
(statearr_15239_15259[(2)] = null);

(statearr_15239_15259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (9))){
var inst_15207 = (state_15227[(7)]);
var state_15227__$1 = state_15227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15227__$1,(11),out,inst_15207);
} else {
if((state_val_15228 === (5))){
var inst_15221 = cljs.core.async.close_BANG_.call(null,out);
var state_15227__$1 = state_15227;
var statearr_15240_15260 = state_15227__$1;
(statearr_15240_15260[(2)] = inst_15221);

(statearr_15240_15260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (10))){
var inst_15219 = (state_15227[(2)]);
var state_15227__$1 = state_15227;
var statearr_15241_15261 = state_15227__$1;
(statearr_15241_15261[(2)] = inst_15219);

(statearr_15241_15261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15228 === (8))){
var inst_15199 = (state_15227[(10)]);
var inst_15208 = (state_15227[(9)]);
var inst_15207 = (state_15227[(7)]);
var inst_15206 = (state_15227[(8)]);
var inst_15211 = (function (){var c = inst_15208;
var v = inst_15207;
var vec__15204 = inst_15206;
var cs = inst_15199;
return ((function (c,v,vec__15204,cs,inst_15199,inst_15208,inst_15207,inst_15206,state_val_15228,c__6540__auto___15252,out){
return (function (p1__15195_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15195_SHARP_);
});
;})(c,v,vec__15204,cs,inst_15199,inst_15208,inst_15207,inst_15206,state_val_15228,c__6540__auto___15252,out))
})();
var inst_15212 = cljs.core.filterv.call(null,inst_15211,inst_15199);
var inst_15199__$1 = inst_15212;
var state_15227__$1 = (function (){var statearr_15242 = state_15227;
(statearr_15242[(10)] = inst_15199__$1);

return statearr_15242;
})();
var statearr_15243_15262 = state_15227__$1;
(statearr_15243_15262[(2)] = null);

(statearr_15243_15262[(1)] = (2));


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
});})(c__6540__auto___15252,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15252,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15247[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15247[(1)] = (1));

return statearr_15247;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15227){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15248){if((e15248 instanceof Object)){
var ex__6482__auto__ = e15248;
var statearr_15249_15263 = state_15227;
(statearr_15249_15263[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15264 = state_15227;
state_15227 = G__15264;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15252,out))
})();
var state__6542__auto__ = (function (){var statearr_15250 = f__6541__auto__.call(null);
(statearr_15250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15252);

return statearr_15250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15252,out))
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
var G__15266 = arguments.length;
switch (G__15266) {
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
var c__6540__auto___15314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15314,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15314,out){
return (function (state_15290){
var state_val_15291 = (state_15290[(1)]);
if((state_val_15291 === (7))){
var inst_15272 = (state_15290[(7)]);
var inst_15272__$1 = (state_15290[(2)]);
var inst_15273 = (inst_15272__$1 == null);
var inst_15274 = cljs.core.not.call(null,inst_15273);
var state_15290__$1 = (function (){var statearr_15292 = state_15290;
(statearr_15292[(7)] = inst_15272__$1);

return statearr_15292;
})();
if(inst_15274){
var statearr_15293_15315 = state_15290__$1;
(statearr_15293_15315[(1)] = (8));

} else {
var statearr_15294_15316 = state_15290__$1;
(statearr_15294_15316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (1))){
var inst_15267 = (0);
var state_15290__$1 = (function (){var statearr_15295 = state_15290;
(statearr_15295[(8)] = inst_15267);

return statearr_15295;
})();
var statearr_15296_15317 = state_15290__$1;
(statearr_15296_15317[(2)] = null);

(statearr_15296_15317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (4))){
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15290__$1,(7),ch);
} else {
if((state_val_15291 === (6))){
var inst_15285 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
var statearr_15297_15318 = state_15290__$1;
(statearr_15297_15318[(2)] = inst_15285);

(statearr_15297_15318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (3))){
var inst_15287 = (state_15290[(2)]);
var inst_15288 = cljs.core.async.close_BANG_.call(null,out);
var state_15290__$1 = (function (){var statearr_15298 = state_15290;
(statearr_15298[(9)] = inst_15287);

return statearr_15298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15290__$1,inst_15288);
} else {
if((state_val_15291 === (2))){
var inst_15267 = (state_15290[(8)]);
var inst_15269 = (inst_15267 < n);
var state_15290__$1 = state_15290;
if(cljs.core.truth_(inst_15269)){
var statearr_15299_15319 = state_15290__$1;
(statearr_15299_15319[(1)] = (4));

} else {
var statearr_15300_15320 = state_15290__$1;
(statearr_15300_15320[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (11))){
var inst_15267 = (state_15290[(8)]);
var inst_15277 = (state_15290[(2)]);
var inst_15278 = (inst_15267 + (1));
var inst_15267__$1 = inst_15278;
var state_15290__$1 = (function (){var statearr_15301 = state_15290;
(statearr_15301[(10)] = inst_15277);

(statearr_15301[(8)] = inst_15267__$1);

return statearr_15301;
})();
var statearr_15302_15321 = state_15290__$1;
(statearr_15302_15321[(2)] = null);

(statearr_15302_15321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (9))){
var state_15290__$1 = state_15290;
var statearr_15303_15322 = state_15290__$1;
(statearr_15303_15322[(2)] = null);

(statearr_15303_15322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (5))){
var state_15290__$1 = state_15290;
var statearr_15304_15323 = state_15290__$1;
(statearr_15304_15323[(2)] = null);

(statearr_15304_15323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (10))){
var inst_15282 = (state_15290[(2)]);
var state_15290__$1 = state_15290;
var statearr_15305_15324 = state_15290__$1;
(statearr_15305_15324[(2)] = inst_15282);

(statearr_15305_15324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15291 === (8))){
var inst_15272 = (state_15290[(7)]);
var state_15290__$1 = state_15290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15290__$1,(11),out,inst_15272);
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
});})(c__6540__auto___15314,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15314,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15309[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15309[(1)] = (1));

return statearr_15309;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15290){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15310){if((e15310 instanceof Object)){
var ex__6482__auto__ = e15310;
var statearr_15311_15325 = state_15290;
(statearr_15311_15325[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15326 = state_15290;
state_15290 = G__15326;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15314,out))
})();
var state__6542__auto__ = (function (){var statearr_15312 = f__6541__auto__.call(null);
(statearr_15312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15314);

return statearr_15312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15314,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15334 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15334 = (function (ch,f,map_LT_,meta15335){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15335 = meta15335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15337 = (function (fn1,_,meta15335,map_LT_,f,ch,meta15338){
this.fn1 = fn1;
this._ = _;
this.meta15335 = meta15335;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15338 = meta15338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15337.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15327_SHARP_){
return f1.call(null,(((p1__15327_SHARP_ == null))?null:self__.f.call(null,p1__15327_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15339){
var self__ = this;
var _15339__$1 = this;
return self__.meta15338;
});})(___$1))
;

cljs.core.async.t15337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15339,meta15338__$1){
var self__ = this;
var _15339__$1 = this;
return (new cljs.core.async.t15337(self__.fn1,self__._,self__.meta15335,self__.map_LT_,self__.f,self__.ch,meta15338__$1));
});})(___$1))
;

cljs.core.async.t15337.cljs$lang$type = true;

cljs.core.async.t15337.cljs$lang$ctorStr = "cljs.core.async/t15337";

cljs.core.async.t15337.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15337");
});})(___$1))
;

cljs.core.async.__GT_t15337 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15337(fn1__$1,___$2,meta15335__$1,map_LT___$1,f__$1,ch__$1,meta15338){
return (new cljs.core.async.t15337(fn1__$1,___$2,meta15335__$1,map_LT___$1,f__$1,ch__$1,meta15338));
});})(___$1))
;

}

return (new cljs.core.async.t15337(fn1,___$1,self__.meta15335,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15336){
var self__ = this;
var _15336__$1 = this;
return self__.meta15335;
});

cljs.core.async.t15334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15336,meta15335__$1){
var self__ = this;
var _15336__$1 = this;
return (new cljs.core.async.t15334(self__.ch,self__.f,self__.map_LT_,meta15335__$1));
});

cljs.core.async.t15334.cljs$lang$type = true;

cljs.core.async.t15334.cljs$lang$ctorStr = "cljs.core.async/t15334";

cljs.core.async.t15334.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15334");
});

cljs.core.async.__GT_t15334 = (function cljs$core$async$map_LT__$___GT_t15334(ch__$1,f__$1,map_LT___$1,meta15335){
return (new cljs.core.async.t15334(ch__$1,f__$1,map_LT___$1,meta15335));
});

}

return (new cljs.core.async.t15334(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15343 = (function (ch,f,map_GT_,meta15344){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15344 = meta15344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15343.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15343.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15343.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15343.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15343.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15343.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15345){
var self__ = this;
var _15345__$1 = this;
return self__.meta15344;
});

cljs.core.async.t15343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15345,meta15344__$1){
var self__ = this;
var _15345__$1 = this;
return (new cljs.core.async.t15343(self__.ch,self__.f,self__.map_GT_,meta15344__$1));
});

cljs.core.async.t15343.cljs$lang$type = true;

cljs.core.async.t15343.cljs$lang$ctorStr = "cljs.core.async/t15343";

cljs.core.async.t15343.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15343");
});

cljs.core.async.__GT_t15343 = (function cljs$core$async$map_GT__$___GT_t15343(ch__$1,f__$1,map_GT___$1,meta15344){
return (new cljs.core.async.t15343(ch__$1,f__$1,map_GT___$1,meta15344));
});

}

return (new cljs.core.async.t15343(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15349 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15349 = (function (ch,p,filter_GT_,meta15350){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15350 = meta15350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15349.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15351){
var self__ = this;
var _15351__$1 = this;
return self__.meta15350;
});

cljs.core.async.t15349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15351,meta15350__$1){
var self__ = this;
var _15351__$1 = this;
return (new cljs.core.async.t15349(self__.ch,self__.p,self__.filter_GT_,meta15350__$1));
});

cljs.core.async.t15349.cljs$lang$type = true;

cljs.core.async.t15349.cljs$lang$ctorStr = "cljs.core.async/t15349";

cljs.core.async.t15349.cljs$lang$ctorPrWriter = (function (this__4761__auto__,writer__4762__auto__,opt__4763__auto__){
return cljs.core._write.call(null,writer__4762__auto__,"cljs.core.async/t15349");
});

cljs.core.async.__GT_t15349 = (function cljs$core$async$filter_GT__$___GT_t15349(ch__$1,p__$1,filter_GT___$1,meta15350){
return (new cljs.core.async.t15349(ch__$1,p__$1,filter_GT___$1,meta15350));
});

}

return (new cljs.core.async.t15349(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15353 = arguments.length;
switch (G__15353) {
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
var c__6540__auto___15396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15396,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15396,out){
return (function (state_15374){
var state_val_15375 = (state_15374[(1)]);
if((state_val_15375 === (7))){
var inst_15370 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15376_15397 = state_15374__$1;
(statearr_15376_15397[(2)] = inst_15370);

(statearr_15376_15397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (1))){
var state_15374__$1 = state_15374;
var statearr_15377_15398 = state_15374__$1;
(statearr_15377_15398[(2)] = null);

(statearr_15377_15398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (4))){
var inst_15356 = (state_15374[(7)]);
var inst_15356__$1 = (state_15374[(2)]);
var inst_15357 = (inst_15356__$1 == null);
var state_15374__$1 = (function (){var statearr_15378 = state_15374;
(statearr_15378[(7)] = inst_15356__$1);

return statearr_15378;
})();
if(cljs.core.truth_(inst_15357)){
var statearr_15379_15399 = state_15374__$1;
(statearr_15379_15399[(1)] = (5));

} else {
var statearr_15380_15400 = state_15374__$1;
(statearr_15380_15400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (6))){
var inst_15356 = (state_15374[(7)]);
var inst_15361 = p.call(null,inst_15356);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15361)){
var statearr_15381_15401 = state_15374__$1;
(statearr_15381_15401[(1)] = (8));

} else {
var statearr_15382_15402 = state_15374__$1;
(statearr_15382_15402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (3))){
var inst_15372 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15374__$1,inst_15372);
} else {
if((state_val_15375 === (2))){
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15374__$1,(4),ch);
} else {
if((state_val_15375 === (11))){
var inst_15364 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15383_15403 = state_15374__$1;
(statearr_15383_15403[(2)] = inst_15364);

(statearr_15383_15403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (9))){
var state_15374__$1 = state_15374;
var statearr_15384_15404 = state_15374__$1;
(statearr_15384_15404[(2)] = null);

(statearr_15384_15404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (5))){
var inst_15359 = cljs.core.async.close_BANG_.call(null,out);
var state_15374__$1 = state_15374;
var statearr_15385_15405 = state_15374__$1;
(statearr_15385_15405[(2)] = inst_15359);

(statearr_15385_15405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (10))){
var inst_15367 = (state_15374[(2)]);
var state_15374__$1 = (function (){var statearr_15386 = state_15374;
(statearr_15386[(8)] = inst_15367);

return statearr_15386;
})();
var statearr_15387_15406 = state_15374__$1;
(statearr_15387_15406[(2)] = null);

(statearr_15387_15406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (8))){
var inst_15356 = (state_15374[(7)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15374__$1,(11),out,inst_15356);
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
});})(c__6540__auto___15396,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15396,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15391 = [null,null,null,null,null,null,null,null,null];
(statearr_15391[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15391[(1)] = (1));

return statearr_15391;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15374){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15392){if((e15392 instanceof Object)){
var ex__6482__auto__ = e15392;
var statearr_15393_15407 = state_15374;
(statearr_15393_15407[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15408 = state_15374;
state_15374 = G__15408;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15396,out))
})();
var state__6542__auto__ = (function (){var statearr_15394 = f__6541__auto__.call(null);
(statearr_15394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15396);

return statearr_15394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15396,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15410 = arguments.length;
switch (G__15410) {
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
return (function (state_15577){
var state_val_15578 = (state_15577[(1)]);
if((state_val_15578 === (7))){
var inst_15573 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15579_15620 = state_15577__$1;
(statearr_15579_15620[(2)] = inst_15573);

(statearr_15579_15620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (20))){
var inst_15543 = (state_15577[(7)]);
var inst_15554 = (state_15577[(2)]);
var inst_15555 = cljs.core.next.call(null,inst_15543);
var inst_15529 = inst_15555;
var inst_15530 = null;
var inst_15531 = (0);
var inst_15532 = (0);
var state_15577__$1 = (function (){var statearr_15580 = state_15577;
(statearr_15580[(8)] = inst_15532);

(statearr_15580[(9)] = inst_15531);

(statearr_15580[(10)] = inst_15530);

(statearr_15580[(11)] = inst_15554);

(statearr_15580[(12)] = inst_15529);

return statearr_15580;
})();
var statearr_15581_15621 = state_15577__$1;
(statearr_15581_15621[(2)] = null);

(statearr_15581_15621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (1))){
var state_15577__$1 = state_15577;
var statearr_15582_15622 = state_15577__$1;
(statearr_15582_15622[(2)] = null);

(statearr_15582_15622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (4))){
var inst_15518 = (state_15577[(13)]);
var inst_15518__$1 = (state_15577[(2)]);
var inst_15519 = (inst_15518__$1 == null);
var state_15577__$1 = (function (){var statearr_15583 = state_15577;
(statearr_15583[(13)] = inst_15518__$1);

return statearr_15583;
})();
if(cljs.core.truth_(inst_15519)){
var statearr_15584_15623 = state_15577__$1;
(statearr_15584_15623[(1)] = (5));

} else {
var statearr_15585_15624 = state_15577__$1;
(statearr_15585_15624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (15))){
var state_15577__$1 = state_15577;
var statearr_15589_15625 = state_15577__$1;
(statearr_15589_15625[(2)] = null);

(statearr_15589_15625[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (21))){
var state_15577__$1 = state_15577;
var statearr_15590_15626 = state_15577__$1;
(statearr_15590_15626[(2)] = null);

(statearr_15590_15626[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (13))){
var inst_15532 = (state_15577[(8)]);
var inst_15531 = (state_15577[(9)]);
var inst_15530 = (state_15577[(10)]);
var inst_15529 = (state_15577[(12)]);
var inst_15539 = (state_15577[(2)]);
var inst_15540 = (inst_15532 + (1));
var tmp15586 = inst_15531;
var tmp15587 = inst_15530;
var tmp15588 = inst_15529;
var inst_15529__$1 = tmp15588;
var inst_15530__$1 = tmp15587;
var inst_15531__$1 = tmp15586;
var inst_15532__$1 = inst_15540;
var state_15577__$1 = (function (){var statearr_15591 = state_15577;
(statearr_15591[(8)] = inst_15532__$1);

(statearr_15591[(9)] = inst_15531__$1);

(statearr_15591[(10)] = inst_15530__$1);

(statearr_15591[(12)] = inst_15529__$1);

(statearr_15591[(14)] = inst_15539);

return statearr_15591;
})();
var statearr_15592_15627 = state_15577__$1;
(statearr_15592_15627[(2)] = null);

(statearr_15592_15627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (22))){
var state_15577__$1 = state_15577;
var statearr_15593_15628 = state_15577__$1;
(statearr_15593_15628[(2)] = null);

(statearr_15593_15628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (6))){
var inst_15518 = (state_15577[(13)]);
var inst_15527 = f.call(null,inst_15518);
var inst_15528 = cljs.core.seq.call(null,inst_15527);
var inst_15529 = inst_15528;
var inst_15530 = null;
var inst_15531 = (0);
var inst_15532 = (0);
var state_15577__$1 = (function (){var statearr_15594 = state_15577;
(statearr_15594[(8)] = inst_15532);

(statearr_15594[(9)] = inst_15531);

(statearr_15594[(10)] = inst_15530);

(statearr_15594[(12)] = inst_15529);

return statearr_15594;
})();
var statearr_15595_15629 = state_15577__$1;
(statearr_15595_15629[(2)] = null);

(statearr_15595_15629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (17))){
var inst_15543 = (state_15577[(7)]);
var inst_15547 = cljs.core.chunk_first.call(null,inst_15543);
var inst_15548 = cljs.core.chunk_rest.call(null,inst_15543);
var inst_15549 = cljs.core.count.call(null,inst_15547);
var inst_15529 = inst_15548;
var inst_15530 = inst_15547;
var inst_15531 = inst_15549;
var inst_15532 = (0);
var state_15577__$1 = (function (){var statearr_15596 = state_15577;
(statearr_15596[(8)] = inst_15532);

(statearr_15596[(9)] = inst_15531);

(statearr_15596[(10)] = inst_15530);

(statearr_15596[(12)] = inst_15529);

return statearr_15596;
})();
var statearr_15597_15630 = state_15577__$1;
(statearr_15597_15630[(2)] = null);

(statearr_15597_15630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (3))){
var inst_15575 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15577__$1,inst_15575);
} else {
if((state_val_15578 === (12))){
var inst_15563 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15598_15631 = state_15577__$1;
(statearr_15598_15631[(2)] = inst_15563);

(statearr_15598_15631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (2))){
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15577__$1,(4),in$);
} else {
if((state_val_15578 === (23))){
var inst_15571 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15599_15632 = state_15577__$1;
(statearr_15599_15632[(2)] = inst_15571);

(statearr_15599_15632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (19))){
var inst_15558 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15600_15633 = state_15577__$1;
(statearr_15600_15633[(2)] = inst_15558);

(statearr_15600_15633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (11))){
var inst_15529 = (state_15577[(12)]);
var inst_15543 = (state_15577[(7)]);
var inst_15543__$1 = cljs.core.seq.call(null,inst_15529);
var state_15577__$1 = (function (){var statearr_15601 = state_15577;
(statearr_15601[(7)] = inst_15543__$1);

return statearr_15601;
})();
if(inst_15543__$1){
var statearr_15602_15634 = state_15577__$1;
(statearr_15602_15634[(1)] = (14));

} else {
var statearr_15603_15635 = state_15577__$1;
(statearr_15603_15635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (9))){
var inst_15565 = (state_15577[(2)]);
var inst_15566 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15577__$1 = (function (){var statearr_15604 = state_15577;
(statearr_15604[(15)] = inst_15565);

return statearr_15604;
})();
if(cljs.core.truth_(inst_15566)){
var statearr_15605_15636 = state_15577__$1;
(statearr_15605_15636[(1)] = (21));

} else {
var statearr_15606_15637 = state_15577__$1;
(statearr_15606_15637[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (5))){
var inst_15521 = cljs.core.async.close_BANG_.call(null,out);
var state_15577__$1 = state_15577;
var statearr_15607_15638 = state_15577__$1;
(statearr_15607_15638[(2)] = inst_15521);

(statearr_15607_15638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (14))){
var inst_15543 = (state_15577[(7)]);
var inst_15545 = cljs.core.chunked_seq_QMARK_.call(null,inst_15543);
var state_15577__$1 = state_15577;
if(inst_15545){
var statearr_15608_15639 = state_15577__$1;
(statearr_15608_15639[(1)] = (17));

} else {
var statearr_15609_15640 = state_15577__$1;
(statearr_15609_15640[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (16))){
var inst_15561 = (state_15577[(2)]);
var state_15577__$1 = state_15577;
var statearr_15610_15641 = state_15577__$1;
(statearr_15610_15641[(2)] = inst_15561);

(statearr_15610_15641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15578 === (10))){
var inst_15532 = (state_15577[(8)]);
var inst_15530 = (state_15577[(10)]);
var inst_15537 = cljs.core._nth.call(null,inst_15530,inst_15532);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15577__$1,(13),out,inst_15537);
} else {
if((state_val_15578 === (18))){
var inst_15543 = (state_15577[(7)]);
var inst_15552 = cljs.core.first.call(null,inst_15543);
var state_15577__$1 = state_15577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15577__$1,(20),out,inst_15552);
} else {
if((state_val_15578 === (8))){
var inst_15532 = (state_15577[(8)]);
var inst_15531 = (state_15577[(9)]);
var inst_15534 = (inst_15532 < inst_15531);
var inst_15535 = inst_15534;
var state_15577__$1 = state_15577;
if(cljs.core.truth_(inst_15535)){
var statearr_15611_15642 = state_15577__$1;
(statearr_15611_15642[(1)] = (10));

} else {
var statearr_15612_15643 = state_15577__$1;
(statearr_15612_15643[(1)] = (11));

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
var statearr_15616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15616[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__);

(statearr_15616[(1)] = (1));

return statearr_15616;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1 = (function (state_15577){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15617){if((e15617 instanceof Object)){
var ex__6482__auto__ = e15617;
var statearr_15618_15644 = state_15577;
(statearr_15618_15644[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15645 = state_15577;
state_15577 = G__15645;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__ = function(state_15577){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1.call(this,state_15577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto__))
})();
var state__6542__auto__ = (function (){var statearr_15619 = f__6541__auto__.call(null);
(statearr_15619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto__);

return statearr_15619;
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
var G__15647 = arguments.length;
switch (G__15647) {
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
var G__15650 = arguments.length;
switch (G__15650) {
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
var G__15653 = arguments.length;
switch (G__15653) {
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
var c__6540__auto___15703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15703,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15703,out){
return (function (state_15677){
var state_val_15678 = (state_15677[(1)]);
if((state_val_15678 === (7))){
var inst_15672 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
var statearr_15679_15704 = state_15677__$1;
(statearr_15679_15704[(2)] = inst_15672);

(statearr_15679_15704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (1))){
var inst_15654 = null;
var state_15677__$1 = (function (){var statearr_15680 = state_15677;
(statearr_15680[(7)] = inst_15654);

return statearr_15680;
})();
var statearr_15681_15705 = state_15677__$1;
(statearr_15681_15705[(2)] = null);

(statearr_15681_15705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (4))){
var inst_15657 = (state_15677[(8)]);
var inst_15657__$1 = (state_15677[(2)]);
var inst_15658 = (inst_15657__$1 == null);
var inst_15659 = cljs.core.not.call(null,inst_15658);
var state_15677__$1 = (function (){var statearr_15682 = state_15677;
(statearr_15682[(8)] = inst_15657__$1);

return statearr_15682;
})();
if(inst_15659){
var statearr_15683_15706 = state_15677__$1;
(statearr_15683_15706[(1)] = (5));

} else {
var statearr_15684_15707 = state_15677__$1;
(statearr_15684_15707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (6))){
var state_15677__$1 = state_15677;
var statearr_15685_15708 = state_15677__$1;
(statearr_15685_15708[(2)] = null);

(statearr_15685_15708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (3))){
var inst_15674 = (state_15677[(2)]);
var inst_15675 = cljs.core.async.close_BANG_.call(null,out);
var state_15677__$1 = (function (){var statearr_15686 = state_15677;
(statearr_15686[(9)] = inst_15674);

return statearr_15686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15677__$1,inst_15675);
} else {
if((state_val_15678 === (2))){
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15677__$1,(4),ch);
} else {
if((state_val_15678 === (11))){
var inst_15657 = (state_15677[(8)]);
var inst_15666 = (state_15677[(2)]);
var inst_15654 = inst_15657;
var state_15677__$1 = (function (){var statearr_15687 = state_15677;
(statearr_15687[(7)] = inst_15654);

(statearr_15687[(10)] = inst_15666);

return statearr_15687;
})();
var statearr_15688_15709 = state_15677__$1;
(statearr_15688_15709[(2)] = null);

(statearr_15688_15709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (9))){
var inst_15657 = (state_15677[(8)]);
var state_15677__$1 = state_15677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15677__$1,(11),out,inst_15657);
} else {
if((state_val_15678 === (5))){
var inst_15654 = (state_15677[(7)]);
var inst_15657 = (state_15677[(8)]);
var inst_15661 = cljs.core._EQ_.call(null,inst_15657,inst_15654);
var state_15677__$1 = state_15677;
if(inst_15661){
var statearr_15690_15710 = state_15677__$1;
(statearr_15690_15710[(1)] = (8));

} else {
var statearr_15691_15711 = state_15677__$1;
(statearr_15691_15711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (10))){
var inst_15669 = (state_15677[(2)]);
var state_15677__$1 = state_15677;
var statearr_15692_15712 = state_15677__$1;
(statearr_15692_15712[(2)] = inst_15669);

(statearr_15692_15712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15678 === (8))){
var inst_15654 = (state_15677[(7)]);
var tmp15689 = inst_15654;
var inst_15654__$1 = tmp15689;
var state_15677__$1 = (function (){var statearr_15693 = state_15677;
(statearr_15693[(7)] = inst_15654__$1);

return statearr_15693;
})();
var statearr_15694_15713 = state_15677__$1;
(statearr_15694_15713[(2)] = null);

(statearr_15694_15713[(1)] = (2));


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
});})(c__6540__auto___15703,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15703,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15698[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15698[(1)] = (1));

return statearr_15698;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15677){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15699){if((e15699 instanceof Object)){
var ex__6482__auto__ = e15699;
var statearr_15700_15714 = state_15677;
(statearr_15700_15714[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15715 = state_15677;
state_15677 = G__15715;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15703,out))
})();
var state__6542__auto__ = (function (){var statearr_15701 = f__6541__auto__.call(null);
(statearr_15701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15703);

return statearr_15701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15703,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15717 = arguments.length;
switch (G__15717) {
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
var inst_15718 = (new Array(n));
var inst_15719 = inst_15718;
var inst_15720 = (0);
var state_15755__$1 = (function (){var statearr_15758 = state_15755;
(statearr_15758[(7)] = inst_15719);

(statearr_15758[(8)] = inst_15720);

return statearr_15758;
})();
var statearr_15759_15788 = state_15755__$1;
(statearr_15759_15788[(2)] = null);

(statearr_15759_15788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (4))){
var inst_15723 = (state_15755[(9)]);
var inst_15723__$1 = (state_15755[(2)]);
var inst_15724 = (inst_15723__$1 == null);
var inst_15725 = cljs.core.not.call(null,inst_15724);
var state_15755__$1 = (function (){var statearr_15760 = state_15755;
(statearr_15760[(9)] = inst_15723__$1);

return statearr_15760;
})();
if(inst_15725){
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
var inst_15720 = (state_15755[(8)]);
var inst_15741 = (inst_15720 > (0));
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
var inst_15719 = (state_15755[(7)]);
var inst_15743 = cljs.core.vec.call(null,inst_15719);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15755__$1,(15),out,inst_15743);
} else {
if((state_val_15756 === (2))){
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15755__$1,(4),ch);
} else {
if((state_val_15756 === (11))){
var inst_15735 = (state_15755[(2)]);
var inst_15736 = (new Array(n));
var inst_15719 = inst_15736;
var inst_15720 = (0);
var state_15755__$1 = (function (){var statearr_15767 = state_15755;
(statearr_15767[(7)] = inst_15719);

(statearr_15767[(10)] = inst_15735);

(statearr_15767[(8)] = inst_15720);

return statearr_15767;
})();
var statearr_15768_15795 = state_15755__$1;
(statearr_15768_15795[(2)] = null);

(statearr_15768_15795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (9))){
var inst_15719 = (state_15755[(7)]);
var inst_15733 = cljs.core.vec.call(null,inst_15719);
var state_15755__$1 = state_15755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15755__$1,(11),out,inst_15733);
} else {
if((state_val_15756 === (5))){
var inst_15723 = (state_15755[(9)]);
var inst_15719 = (state_15755[(7)]);
var inst_15728 = (state_15755[(11)]);
var inst_15720 = (state_15755[(8)]);
var inst_15727 = (inst_15719[inst_15720] = inst_15723);
var inst_15728__$1 = (inst_15720 + (1));
var inst_15729 = (inst_15728__$1 < n);
var state_15755__$1 = (function (){var statearr_15769 = state_15755;
(statearr_15769[(11)] = inst_15728__$1);

(statearr_15769[(12)] = inst_15727);

return statearr_15769;
})();
if(cljs.core.truth_(inst_15729)){
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
var inst_15739 = (state_15755[(2)]);
var state_15755__$1 = state_15755;
var statearr_15775_15799 = state_15755__$1;
(statearr_15775_15799[(2)] = inst_15739);

(statearr_15775_15799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15756 === (8))){
var inst_15719 = (state_15755[(7)]);
var inst_15728 = (state_15755[(11)]);
var tmp15772 = inst_15719;
var inst_15719__$1 = tmp15772;
var inst_15720 = inst_15728;
var state_15755__$1 = (function (){var statearr_15776 = state_15755;
(statearr_15776[(7)] = inst_15719__$1);

(statearr_15776[(8)] = inst_15720);

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
var statearr_15781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
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

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15804 = arguments.length;
switch (G__15804) {
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
var c__6540__auto___15877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6540__auto___15877,out){
return (function (){
var f__6541__auto__ = (function (){var switch__6478__auto__ = ((function (c__6540__auto___15877,out){
return (function (state_15846){
var state_val_15847 = (state_15846[(1)]);
if((state_val_15847 === (7))){
var inst_15842 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15848_15878 = state_15846__$1;
(statearr_15848_15878[(2)] = inst_15842);

(statearr_15848_15878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (1))){
var inst_15805 = [];
var inst_15806 = inst_15805;
var inst_15807 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15846__$1 = (function (){var statearr_15849 = state_15846;
(statearr_15849[(7)] = inst_15806);

(statearr_15849[(8)] = inst_15807);

return statearr_15849;
})();
var statearr_15850_15879 = state_15846__$1;
(statearr_15850_15879[(2)] = null);

(statearr_15850_15879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (4))){
var inst_15810 = (state_15846[(9)]);
var inst_15810__$1 = (state_15846[(2)]);
var inst_15811 = (inst_15810__$1 == null);
var inst_15812 = cljs.core.not.call(null,inst_15811);
var state_15846__$1 = (function (){var statearr_15851 = state_15846;
(statearr_15851[(9)] = inst_15810__$1);

return statearr_15851;
})();
if(inst_15812){
var statearr_15852_15880 = state_15846__$1;
(statearr_15852_15880[(1)] = (5));

} else {
var statearr_15853_15881 = state_15846__$1;
(statearr_15853_15881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (15))){
var inst_15836 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15854_15882 = state_15846__$1;
(statearr_15854_15882[(2)] = inst_15836);

(statearr_15854_15882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (13))){
var state_15846__$1 = state_15846;
var statearr_15855_15883 = state_15846__$1;
(statearr_15855_15883[(2)] = null);

(statearr_15855_15883[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (6))){
var inst_15806 = (state_15846[(7)]);
var inst_15831 = inst_15806.length;
var inst_15832 = (inst_15831 > (0));
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15832)){
var statearr_15856_15884 = state_15846__$1;
(statearr_15856_15884[(1)] = (12));

} else {
var statearr_15857_15885 = state_15846__$1;
(statearr_15857_15885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (3))){
var inst_15844 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15846__$1,inst_15844);
} else {
if((state_val_15847 === (12))){
var inst_15806 = (state_15846[(7)]);
var inst_15834 = cljs.core.vec.call(null,inst_15806);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15846__$1,(15),out,inst_15834);
} else {
if((state_val_15847 === (2))){
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15846__$1,(4),ch);
} else {
if((state_val_15847 === (11))){
var inst_15814 = (state_15846[(10)]);
var inst_15810 = (state_15846[(9)]);
var inst_15824 = (state_15846[(2)]);
var inst_15825 = [];
var inst_15826 = inst_15825.push(inst_15810);
var inst_15806 = inst_15825;
var inst_15807 = inst_15814;
var state_15846__$1 = (function (){var statearr_15858 = state_15846;
(statearr_15858[(7)] = inst_15806);

(statearr_15858[(11)] = inst_15826);

(statearr_15858[(8)] = inst_15807);

(statearr_15858[(12)] = inst_15824);

return statearr_15858;
})();
var statearr_15859_15886 = state_15846__$1;
(statearr_15859_15886[(2)] = null);

(statearr_15859_15886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (9))){
var inst_15806 = (state_15846[(7)]);
var inst_15822 = cljs.core.vec.call(null,inst_15806);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15846__$1,(11),out,inst_15822);
} else {
if((state_val_15847 === (5))){
var inst_15814 = (state_15846[(10)]);
var inst_15810 = (state_15846[(9)]);
var inst_15807 = (state_15846[(8)]);
var inst_15814__$1 = f.call(null,inst_15810);
var inst_15815 = cljs.core._EQ_.call(null,inst_15814__$1,inst_15807);
var inst_15816 = cljs.core.keyword_identical_QMARK_.call(null,inst_15807,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15817 = (inst_15815) || (inst_15816);
var state_15846__$1 = (function (){var statearr_15860 = state_15846;
(statearr_15860[(10)] = inst_15814__$1);

return statearr_15860;
})();
if(cljs.core.truth_(inst_15817)){
var statearr_15861_15887 = state_15846__$1;
(statearr_15861_15887[(1)] = (8));

} else {
var statearr_15862_15888 = state_15846__$1;
(statearr_15862_15888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (14))){
var inst_15839 = (state_15846[(2)]);
var inst_15840 = cljs.core.async.close_BANG_.call(null,out);
var state_15846__$1 = (function (){var statearr_15864 = state_15846;
(statearr_15864[(13)] = inst_15839);

return statearr_15864;
})();
var statearr_15865_15889 = state_15846__$1;
(statearr_15865_15889[(2)] = inst_15840);

(statearr_15865_15889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (10))){
var inst_15829 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15866_15890 = state_15846__$1;
(statearr_15866_15890[(2)] = inst_15829);

(statearr_15866_15890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (8))){
var inst_15806 = (state_15846[(7)]);
var inst_15814 = (state_15846[(10)]);
var inst_15810 = (state_15846[(9)]);
var inst_15819 = inst_15806.push(inst_15810);
var tmp15863 = inst_15806;
var inst_15806__$1 = tmp15863;
var inst_15807 = inst_15814;
var state_15846__$1 = (function (){var statearr_15867 = state_15846;
(statearr_15867[(7)] = inst_15806__$1);

(statearr_15867[(14)] = inst_15819);

(statearr_15867[(8)] = inst_15807);

return statearr_15867;
})();
var statearr_15868_15891 = state_15846__$1;
(statearr_15868_15891[(2)] = null);

(statearr_15868_15891[(1)] = (2));


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
});})(c__6540__auto___15877,out))
;
return ((function (switch__6478__auto__,c__6540__auto___15877,out){
return (function() {
var cljs$core$async$state_machine__6479__auto__ = null;
var cljs$core$async$state_machine__6479__auto____0 = (function (){
var statearr_15872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15872[(0)] = cljs$core$async$state_machine__6479__auto__);

(statearr_15872[(1)] = (1));

return statearr_15872;
});
var cljs$core$async$state_machine__6479__auto____1 = (function (state_15846){
while(true){
var ret_value__6480__auto__ = (function (){try{while(true){
var result__6481__auto__ = switch__6478__auto__.call(null,state_15846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6481__auto__;
}
break;
}
}catch (e15873){if((e15873 instanceof Object)){
var ex__6482__auto__ = e15873;
var statearr_15874_15892 = state_15846;
(statearr_15874_15892[(5)] = ex__6482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15893 = state_15846;
state_15846 = G__15893;
continue;
} else {
return ret_value__6480__auto__;
}
break;
}
});
cljs$core$async$state_machine__6479__auto__ = function(state_15846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6479__auto____1.call(this,state_15846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6479__auto____0;
cljs$core$async$state_machine__6479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6479__auto____1;
return cljs$core$async$state_machine__6479__auto__;
})()
;})(switch__6478__auto__,c__6540__auto___15877,out))
})();
var state__6542__auto__ = (function (){var statearr_15875 = f__6541__auto__.call(null);
(statearr_15875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6540__auto___15877);

return statearr_15875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6542__auto__);
});})(c__6540__auto___15877,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map