define(["Modernizr","createElement","docElement","testStyles"],function(e,n,t,i){e.addTest("details",function(){var e=n("details"),t;return"open"in e?(i("#modernizr details{display:block}",function(n){n.appendChild(e),e.innerHTML="<summary>a</summary>b",t=e.offsetHeight,e.open=!0,t=t!=e.offsetHeight}),t):!1})});