(ns streak.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :as async :refer [chan]]
            [cljs.core.match :refer-macros [match]]
            [vdom.elm :refer [foldp event render!]]))

(enable-console-print!)

(def day (.format js/d3.time "%w"))
(def week (.format js/d3.time "%U"))
(def month (.format js/d3.time "%B"))

(defn month-path [t0]
  (let [t1 (js/Date. (.getFullYear t0) (inc (.getMonth t0)) 0)
        d0 (js/parseInt (day t0))
        w0 (js/parseInt (week t0))
        d1 (js/parseInt (day t1))
        w1 (js/parseInt (week t1))]
    ["M" d0 w0
     "H" 7
     "V" w1
     "H" (inc d1)
     "V" (inc w1)
     "H" 0
     "V" (inc w0)
     "H" d0
     "Z"]))

(defn scale [ps x]
  (map #(if (number? %) (* x %) %) ps))

(defn path [ps]
  (apply str (interleave ps (repeat " "))))

(defn spy [x] (println x) x)
(defn ui [actions]
  (fn [{:keys [year]}]
    (let [width 147]
      [:div {:id "root"}
       [:a {:id "download" :href "#" :onclick (event actions :download)} "Download"]
       [:div {:id "decrement-year"
              :className "change-year"
              :onclick (event actions :previous-year)}]
       [:div {:id "increment-year"
              :className "change-year"
              :onclick (event actions :next-year)}]
       [:main {}
        [:svg {:id "calendar" :width width :height 1000}
        (let [start (js/Date. year 0 1)
              stop (js/Date. (inc year) 0 1)
              size 18]
          [:g {:transform "translate(1,14)"}
           [:g {}
            (for [m (range 12)
                  :let [d (js/Date. year m 1)
                        offset (if (-> d day js/parseInt zero?) identity inc)]]
              [:text {:transform (str "translate(0," (-> d week js/parseInt offset (* size)) ") rotate(-90)")
                      :dy 12
                      :text-anchor "end"}
               (month d)])]
           [:g {:transform "translate(17,0)"}
            [:text {:x (-> 7 (* size) (/ 2))
                    :dy -2
                    :text-anchor "middle"} year]
            (for [d (js->clj (.days js/d3.time start stop))]
              [:rect {:class "day"
                      :x (* size (day d))
                      :y (* size (week d))
                      :width size
                      :height size}])
            (for [m (js->clj (.months js/d3.time start stop))]
              [:path {:class "month"
                      :d (-> m month-path (scale size) path)}])]])]]])))

(defn step [model action]
  (match action
    :no-op model
    :previous-year (update-in model [:year] dec)
    :next-year (update-in model [:year] inc)
    :download (do
                (js/saveSvgAsPng
                  (.getElementById js/document "calendar")
                  (str "calendar-" (:year model) ".png"))
                model)))

(go
  (let [actions (chan)
        initial-model {:year (.getFullYear (js/Date.))}
        models (foldp step initial-model actions)]
    (render! (async/map (ui actions) [models]) js/document.body)))
