LearnosityAmd.define(["underscore-v1.5.2","mathcore"],(function(e,t){"use strict";var i=function(e,t){this.question=e,this.response=t};return i.prototype.isValid=function(){var e,i,o=!0;for(e=0;e<this.question.validation.valid_response.value.length;e++){var n,s,r;i=null!==(n=null===(s=t.validate)||void 0===s?void 0:s.call(t,this.question.validation.valid_response.value[e],this.response[e]))&&void 0!==n?n:null===(r=t.evaulateVerbose)||void 0===r?void 0:r.call(t,this.question.validation.valid_response.value[e],this.response[e]),o=o&&i.result}return o},i.prototype.score=function(){return this.isValid()?this.maxScore():0},i.prototype.maxScore=function(){return this.question.validation.score||1},i.prototype.canValidateResponse=function(){return!0},{Scorer:i}}));