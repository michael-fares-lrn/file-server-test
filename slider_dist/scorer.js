(()=>{"use strict";function e(e,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var n=function(){function n(e,s){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.question=e,this.response=s}var s,i;return s=n,(i=[{key:"isValid",value:function(){return console.log("this.question.valid_response",this.question.valid_response),console.log("this.response",this.response),this.question.valid_response&&this.response&&this.response===this.question.valid_response}},{key:"validateIndividualResponses",value:function(){return this.isValid()}},{key:"score",value:function(){return this.isValid()?this.maxScore():0}},{key:"maxScore",value:function(){return this.question.score||0}},{key:"canValidateResponse",value:function(){return!0}}])&&e(s.prototype,i),n}();LearnosityAmd.define([],(function(){return{Scorer:n}}))})();