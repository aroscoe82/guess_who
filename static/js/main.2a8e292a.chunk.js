(this.webpackJsonpguess_who=this.webpackJsonpguess_who||[]).push([[0],{169:function(e,t,a){e.exports=a(409)},386:function(e,t,a){},408:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);a(170),a(172),a(173),a(174),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(76),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(218),a(219),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(277),a(278),a(279),a(280),a(282),a(283),a(284),a(285),a(288),a(289),a(290),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(311),a(148),a(312),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(347),a(348),a(349),a(350),a(351),a(352),a(353),a(354),a(355),a(356),a(357),a(358),a(359),a(360),a(361),a(362),a(363),a(364),a(365),a(366),a(367),a(368),a(369),a(370),a(371),a(372),a(373),a(374),a(375),a(376),a(377),a(378),a(381),a(155);var n=a(1),r=a.n(n),c=a(166),i=a.n(c),s=(a(386),a(15)),o=a(16),l=a(21),u=a(20),m=a(22),h=a(89),v=a.n(h),g=a(57),p=a(46),d=function(){function e(){var t=this;Object(s.a)(this,e),this.levels={muggle:{code:0,label:"Muggle",time:90,clues:["patronus","wand","boggart","bloodStatus"],randomCharacter:function(){var e=t.getMainCharacters();return e[Math.floor(Math.random()*e.length)]}},wizard:{code:1,label:"Wizard",time:60,clues:["house","bloodStatus","orderOfThePhoenix"],randomCharacter:function(){var e=t.getStudentCharacters();return e[Math.floor(Math.random()*e.length)]}},auror:{code:2,label:"Auror",time:60,clues:["house","bloodStatus","orderOfThePhoenix"],randomCharacter:function(){return t.characterList[Math.floor(Math.random()*t.characterList.length)]}}},this.characterList=[]}return Object(o.a)(e,[{key:"getLevels",value:function(){return this.levels}},{key:"getLevelDetail",value:function(e){return this.levels[e]}},{key:"setCharacters",value:function(e){this.characterList=e}},{key:"getAllCharacters",value:function(){return this.characterList}},{key:"getStudentCharacters",value:function(){return this.characterList.filter((function(e){return"student"===e.role}))}},{key:"getMainCharacters",value:function(){var e=["Harry Potter","Ronald Weasley","Hermione Granger","Neville Longbottom","Luna Lovegood"];return this.characterList.filter((function(t){return e.includes(t.name)}))}}]),e}(),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSelect=function(e){e.preventDefault(),a.props.setLevel(e.target.value)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gameLevels,a=Object.keys(t).map((function(a){return r.a.createElement("button",{className:"btn-default level-option",key:"level-"+t[a].code,value:a,onClick:e.handleSelect},t[a].label)}));return r.a.createElement("div",{className:"level-options"},a)}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).setGameLevel=function(e){var t=a.game.getLevelDetail(e),n=t.randomCharacter(),r={label:t.label,time:t.time,clues:t.clues,guessWho:n};a.props.history.push({pathname:"/level/"+t.code,state:{level:r}})},a.game=new d,a.state={loading:!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://www.potterapi.com/v1/characters/").then((function(t){e.game.setCharacters(t.data),e.setState({loading:!1})})).catch((function(e){}))}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h1",{className:"text-center py-5 color-white"},"Loading..."));var e=this.game.getLevels();return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h1",{className:"text-center color-white py-5"},"Select A Level"),r.a.createElement(f,{setLevel:this.setGameLevel,gameLevels:e}))}}]),t}(r.a.Component),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={secondsRemaining:0},a.tick=function(){a.state.secondsRemaining?a.setState({secondsRemaining:a.state.secondsRemaining-1}):(clearInterval(a.timer),a.props.gameOver("Out of Time"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({secondsRemaining:this.props.time},(function(){e.timer=setInterval(e.tick,1e3)}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return r.a.createElement("span",null,"Time Remaining: ",this.state.secondsRemaining)}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={initialTime:0,timerRemaining:0,clues:[],count:0,clueInterval:0},a.getClues=function(e){return e.map((function(e,t){return{id:t,label:e,answer:a.props.who[e]}}))},a.tick=function(){if(a.state.timerRemaining){var e=Object.assign({},a.state);e.timerRemaining=e.timerRemaining-1,e.timerRemaining===e.initialTime-(e.count+1)*e.clueInterval&&(e.count+=1),a.setState({timerRemaining:e.timerRemaining,count:e.count})}else clearInterval(a.timer)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=Object.assign({},this.state);t.clueInterval=Math.ceil(this.props.time/this.props.clues.length),t.clues=this.getClues(this.props.clues),t.initialTime=this.props.time,t.timerRemaining=this.props.time,this.setState(t,(function(){e.timer=setInterval(e.tick,1e3)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"clues"},this.state.clues.map((function(t,a){if(t.id<=e.state.count)return r.a.createElement("p",{className:"clue",key:t.id},t.label,": ",t.answer)})))}}]),t}(r.a.Component),j=[{path:"/",exact:!0,name:"Dashboard",component:b},{path:"/level/:code",exact:!0,name:"Game",component:function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,gameInfo:void 0,guess:void 0,gameOver:!1},a.guessHandler=function(e){e.target.value.toLowerCase()===a.state.gameInfo.guessWho.name.toLowerCase()&&a.setState({gameOver:"You Won!"})},a.gameOver=function(e){a.setState({gameOver:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({gameInfo:this.props.location.state.level})}},{key:"render",value:function(){if(this.state.gameInfo&&!this.state.gameOver){var e=this.state.gameInfo;return r.a.createElement("div",{className:"gameboard"},r.a.createElement("div",{className:"header p-3"},r.a.createElement(g.b,{className:"back-btn",to:"/"},"Quit"),r.a.createElement("span",{className:"timer text-right"},r.a.createElement(O,{gameOver:this.gameOver,time:e.time}))),r.a.createElement("div",{className:"game p-3 text-center"},r.a.createElement(y,{time:e.time,clues:e.clues,who:e.guessWho})),r.a.createElement("div",{className:"entry p-3 text-center"},r.a.createElement("input",{className:"guessAnswer",type:"text",name:"guessAnswer",placeholder:"Guess",onChange:this.guessHandler})))}return this.state.gameInfo&&this.state.gameOver?r.a.createElement("div",{className:"gameboard"},r.a.createElement("div",{className:"header p-3"},r.a.createElement(g.b,{className:"back-btn",to:"/"},"Back")),r.a.createElement("div",{className:"game p-3 text-center"},r.a.createElement("h1",{className:"mb-5 color-white"},this.state.gameOver),r.a.createElement(g.b,{className:"btn-default btn-lg",to:"/"},"Play Again"))):r.a.createElement("div",{className:"gameboard"},r.a.createElement("h1",{class:"text-center color-white py-5"},"Loading..."))}}]),t}(r.a.Component)}],E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={error:null,errorInfo:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Oops - Something went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.a.Component);a(408);function k(){return r.a.createElement("p",null,"You Seem Lost...")}var w=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),v.a.interceptors.request.use((function(e){return e.params={key:"$2a$10$E69VTQagjnPakm/6NHmCU.IFUteVppxlAL137AkvG7yiQ9/LcPzNe"},e})),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null,r.a.createElement(g.a,null,r.a.createElement(p.c,null,j.map((function(e,t){return r.a.createElement(p.a,{key:t,path:e.path,exact:e.exact,component:e.component})})),r.a.createElement(p.a,{component:k})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.2a8e292a.chunk.js.map