define(["Modernizr","testStyles"],function(t,e){t.addTest("hiddenscroll",function(){return e("#modernizr {width:100px;height:100px;overflow:scroll}",function(t){return t.offsetWidth===t.clientWidth})})});