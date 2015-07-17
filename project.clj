(defproject streak "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "https://github.com/exupero/streak-calendar"
  :license {:name "MIT License"
            :url "http://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3195" :exclusions [org.apache.ant/ant]]
                 [org.clojure/core.match  "0.3.0-alpha4"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljsjs/d3 "3.5.5-3"]
                 [cljsjs/vdom "0.1.0-0"]
                 [vdom "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {:builds {:dev {:source-paths ["src"]
                             :incremental true
                             :jar true
                             :assert true
                             :compiler {:output-to "out/js/streak-dev.js"
                                        :output-dir "out/js"
                                        :warnings true
                                        :elide-asserts true
                                        :optimizations :none
                                        :source-map "out/js/streak-dev.js.map"
                                        :pretty-print true
                                        :output-wrapper false}}
                       :prod {:source-paths ["src"]
                              :incremental true
                              :jar true
                              :assert true
                              :compiler {:output-to "out/js/streak.js"
                                         :warnings true
                                         :elide-asserts true
                                         :optimizations :advanced
                                         :pretty-print false
                                         :output-wrapper false}}}})
