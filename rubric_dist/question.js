(()=>{"use strict";var e="lrn-custom-question";function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=function(){function n(e,t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.init=e,this.events=e.events,this.lrnUtils=t,this.el=e.$el.get(0),this.render().then((function(){a.registerPublicMethods(),a.handleEvents(),"review"===e.state&&e.getFacade().disable(),e.events.trigger("ready")}))}var a,r;return a=n,(r=[{key:"render",value:function(){var t=this.el,n=this.init,a=n.question,r=n.response,i=n.state;return t.innerHTML='\n            <div class="'.concat(e,' lrn-response-validation-wrapper">\n                <div class="lrn_response_input"></div>            \n                <div class="').concat(e,'-checkAnswer-wrapper"></div>\n                <div class="').concat(e,'-suggestedAnswers-wrapper"></div>\n            </div>\n        '),Promise.all([]).then((function(){!function(e,t,n,a){var r=e.querySelector(".lrn_response_input"),i=document.createElement("form");i.classList.add("main-container");var s=document.createElement("div");s.classList.add("category-column");var l=document.createElement("div");l.classList.add("input-column"),t.categories.forEach((function(e){var t=document.createElement("div");t.classList.add("input-container");var n=document.createElement("div");n.classList.add("category-container");var a=e.label.toLowerCase().replace(/ /g,"_"),c=document.createElement("input");c.setAttribute("type","number"),c.setAttribute("id",a),c.setAttribute("name",a),c.setAttribute("min",0),c.setAttribute("max",e.points),c.setAttribute("placeholder",0),c.classList.add("number-input");var o=document.createElement("span");o.classList.add("slash"),o.innerHTML="/";var d=document.createElement("span");d.classList.add("points"),d.innerHTML="".concat(e.points," points");var u=document.createElement("label");u.classList.add("category-label"),u.innerHTML=e.label;var p=document.createElement("span");p.classList.add("categor-description"),p.innerHTML=e.description,t.appendChild(c),t.appendChild(o),t.appendChild(d),n.appendChild(u),n.appendChild(p),l.appendChild(t),s.appendChild(n),i.appendChild(s),i.appendChild(l),r.appendChild(i)}));var c=document.createElement("div");c.classList.add("total-container");var o=document.createElement("div");o.classList.add("category-container");var d=document.createElement("span");d.classList.add("total-label"),d.innerHTML="Total score:",o.appendChild(d);var u=document.createElement("span");u.classList.add("total"),u.innerHTML="0";var p=document.createElement("span");p.classList.add("slash"),p.innerHTML="/";var v=document.createElement("span");if(v.classList.add("total-possible"),v.innerHTML="".concat(t.categories.map((function(e){return e.points})).reduce((function(e,t){return e+t}))," points"),s.appendChild(o),c.appendChild(u),c.appendChild(p),c.appendChild(v),l.appendChild(c),("resume"===a||"review"===a)&&n){console.log("the saved response is",n),e.querySelector(".total").innerHTML=n.total_score;var m=Array.from(e.querySelectorAll(".number-input")),h=Object.keys(n.categories);m.forEach((function(e){var t=h.find((function(t){return t===e.name}));e.value=n.categories[t]}))}}(t,a,r,i)}))}},{key:"registerPublicMethods",value:function(){var e=this,t=this.init,n=this.el,a=t.getFacade();a.disable=function(){e.disabled=!0,n.querySelectorAll("input").forEach((function(e){return e.disabled=!0})),n.querySelector(".lrn_response_input").classList.add("disabled"),n.querySelectorAll("label").forEach((function(e){return e.classList.add("disabled")}))},a.enable=function(){e.disabled=!1,n.querySelectorAll("input").forEach((function(e){return e.disabled=!1})),n.querySelector(".lrn_response_input").classList.remove("disabled"),n.querySelectorAll("label").forEach((function(e){return e.classList.remove("disabled")}))},a.resetResponse=function(){}}},{key:"handleEvents",value:function(){var e=this.events,t=this.el,n=this.init,a=n.state,r=n.getFacade(),i=t.querySelectorAll('input[type="number"]'),s=t.querySelector(".total"),l={categories:{}};i.forEach((function(t){l.categories[t.name]||(l.categories[t.name]=0),"resume"===a&&(l.categories[t.name]=Number(t.value)),t.addEventListener("change",(function(t){var n=Array.from(i).map((function(e){return Number(e.value)})).reduce((function(e,t){return e+t}));s.innerHTML=n,l.categories[t.target.name]=Number(t.target.value),l.total_score=n,e.trigger("changed",l),console.log("response value is ",r.getResponse().value)}))})),e.on("validate",(function(e){}))}}])&&t(a.prototype,r),n}();LearnosityAmd.define([],(function(){return{Question:n}}))})();