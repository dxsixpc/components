(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[9662],{9662:function(){(function(e){var n={pattern:/((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}};e.languages.gradle=e.languages.extend("clike",{string:{pattern:/'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,greedy:!0},keyword:/\b(?:apply|def|dependencies|else|if|implementation|import|plugin|plugins|project|repositories|repository|sourceSets|tasks|val)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),e.languages.insertBefore("gradle","string",{shebang:{pattern:/#!.+/,alias:"comment",greedy:!0},"interpolation-string":{pattern:/"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}}}),e.languages.insertBefore("gradle","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),e.languages.insertBefore("gradle","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),n.inside.expression.inside=e.languages.gradle})(Prism)}}]);
