(this.webpackJsonpquiz_webapp_starter=this.webpackJsonpquiz_webapp_starter||[]).push([[0],{24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),o=n(18),a=n.n(o),r=(n(29),n(30),n(13)),c=n.n(r),l=n(19),u=n(8),h=n(9),d=n(11),m=n(10);function p(e){return s.a.createElement("div",{style:{fontSize:"48px",margin:"32px"}},e.question)}n(32);var f=n(20),C=n.n(f);function g(e){return s.a.createElement("div",{onClick:e.disableClick?null:function(){e.triggerClick(e.option,e.correct)},className:"option ".concat(e.selected?e.correct?"correct-option":"wrong-option":"")},s.a.createElement(C.a,{active:e.disableClick&&e.correct&&e.selected}),e.text)}n(34),n(35);var v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={timeRemaining:10,timer:null},i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.timer=setTimeout((function(){e.props.callBackFn(null,!1),e.state.timeRemaining--,console.log(e.state.timeRemaining,"time rem")}),1e4)}},{key:"componentWillUnmount",value:function(){console.log("com2"),this.state.timer=null,clearTimeout(this.state.timer)}},{key:"render",value:function(){return this.props.optionSubmitted?(clearTimeout(this.state.timer),null):s.a.createElement("div",{className:"timer"})}}]),n}(s.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={score:0,showAnswers:!1,selection:null,displayedQuestionIndex:0,disableClick:!1,status:null,userChoices:[]},e.questions=[{text:"Who is current PM of India?",options:["Narendra Modi","Rahul Gandhi","Manmohan Singh","Sonia Gandhi"],correct_choice:0},{text:"What is capital of Orissa?",options:["Chandigarh","Bhubaneshwar","Tripura","Nagaland"],correct_choice:1},{text:"In the context to India's wild life, the flying fox is a __?",options:["Bat","Vulture","Stok","Kite"],correct_choice:0},{text:"What percentage of land area should remain covered by forest to maintain Ecological balance?",options:["10%","33%","5%","None of these"],correct_choice:1},{text:" The purest form of iron is",options:["Wrought iron","Steel","Pig iron","Nickel steel"],correct_choice:0},{text:"Layer of atmosphere in which Ozone layer lies is",options:["Exosphere","Mesosphere","Troposphere","Stratosphere"],correct_choice:3}],e}return Object(h.a)(n,[{key:"triggerClick",value:function(){var e=Object(l.a)(c.a.mark((function e(t,n){var i=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.userChoices.push(null!==t?this.questions[this.state.displayedQuestionIndex].options[t]:"Timed out"),this.state.displayedQuestionIndex!==this.questions.length-1){e.next=4;break}return this.props.history.push({pathname:"/React_Quiz/result",state:{score:this.state.score,questions:this.questions,userChoices:this.state.userChoices}}),e.abrupt("return");case 4:return console.log("Entered triggerClick with:",t,n),n?this.setState({status:"Yayy!! Correct Answer!",score:this.state.score+10}):null===t?this.setState({status:"Sorry. Timed Out"}):n||this.setState({status:"Sorry. Wrong Answer!"}),this.setState({selection:t,disableClick:!0}),e.next=9,setTimeout((function(){i.setState({displayedQuestionIndex:i.state.displayedQuestionIndex+1,disableClick:!1,selection:null,status:null})}),3e3);case 9:console.log(this.state.selection," is the selected option");case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.displayedQuestionIndex<this.questions.length)return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"score"},"Score: ",this.state.score),s.a.createElement(p,{question:this.questions[this.state.displayedQuestionIndex].text}),s.a.createElement("div",{className:"options-container"},this.questions[this.state.displayedQuestionIndex].options.map((function(t,n){return s.a.createElement(g,{text:t,correct:e.questions[e.state.displayedQuestionIndex].correct_choice===n,option:n,selected:e.state.selection===n,triggerClick:e.triggerClick.bind(e),disableClick:e.state.disableClick})}))),s.a.createElement("div",{className:"status"},this.state.status),s.a.createElement(v,{key:this.state.displayedQuestionIndex,optionSubmitted:this.state.disableClick,callBackFn:this.triggerClick.bind(this)}))}}]),n}(s.a.Component),b=n(21),y=n(5);n(36);function k(e){return i.createElement("div",{className:"result-row"},i.createElement("div",{className:"question-column"},e.question),i.createElement("div",{className:"correct-choices"},e.correctChoice),i.createElement("div",{className:"user-choices  ".concat(e.userChoice===e.correctChoice?"correct-option":"Timed out"!==e.userChoice?"YOUR CHOICE"!==e.userChoice?"wrong-option":"":"timed-out")},e.userChoice))}var x=function(e){return console.log(e),i.createElement("div",null,i.createElement("head",null,i.createElement("title",null,"Result Page")),i.createElement("body",null,i.createElement("div",null,"Your total score is : ",e.location.state.score),i.createElement("div",{className:"result-table"},i.createElement(k,{question:"QUESTION",correctChoice:"CORRECT CHOICE",userChoice:"YOUR CHOICE"}),e.location.state.questions.map((function(t,n){return i.createElement(k,{question:t.text,correctChoice:t.options[t.correct_choice],userChoice:e.location.state.userChoices[n]})})))))};var w=function(){return s.a.createElement(b.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(y.c,null,s.a.createElement(y.a,{exact:!0,path:"/React_Quiz/",component:E}),s.a.createElement(y.a,{exact:!0,path:"/React_Quiz/result",component:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5cab0b1d.chunk.js.map