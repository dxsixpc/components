(self.webpackChunk_dxsixpc_components=self.webpackChunk_dxsixpc_components||[]).push([[63326],{63326:function(){(function(e){var p=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,d=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function a(o,k){for(var i=0;i<k;i++)o=o.replace(/<self>/g,function(){return"(?:"+o+")"});return o.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+d+")").replace(/<comment>/g,"(?:"+p+")")}var r=a(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),h=a(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,1),s=a(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),f=a(/<(?:[^<>'"@/]|<comment>|<self>)*>/.source,1),n=/@/.source+/(?:await\b\s*)?/.source+"(?:"+/(?!await\b)\w+\b/.source+"|"+r+")(?:"+/[?!]?\.\w+\b/.source+"|(?:"+f+")?"+r+"|"+h+")*"+/(?![?!\.(\[]|<(?!\/))/.source,m=/@(?![\w()])/.source+"|"+n,l="(?:"+/"[^"@]*"|'[^'@]*'|[^\s'"@>=]+(?=[\s>])/.source+`|["'][^"'@]*(?:(?:`+m+`)[^"'@]*)+["'])`,c=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*<tagAttrValue>|(?=[\s/>])))+)?/.source.replace(/<tagAttrValue>/,l),t=/(?!\d)[^\s>\/=$<%]+/.source+c+/\s*\/?>/.source,v=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+c+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+t+"|"+a(/<\1/.source+c+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+t+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+t+")";e.languages.cshtml=e.languages.extend("markup",{});var w=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(v),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),u={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:w},g={pattern:RegExp(/(^|[^@])/.source+n),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:u}};e.languages.cshtml.tag.pattern=RegExp(/<\/?/.source+t),e.languages.cshtml.tag.inside["attr-value"].pattern=RegExp(/=\s*/.source+l),e.languages.insertBefore("inside","punctuation",{value:g},e.languages.cshtml.tag.inside["attr-value"]),e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[s,/(?:code|functions)\s*/.source+s,/(?:for|foreach|lock|switch|using|while)\s*/.source+r+/\s*/.source+s,/do\s*/.source+s+/\s*while\s*/.source+r+/(?:\s*;)?/.source,/try\s*/.source+s+/\s*catch\s*/.source+r+/\s*/.source+s+/\s*finally\s*/.source+s,/if\s*/.source+r+/\s*/.source+s+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+r+")?"+/\s*/.source+s+")*",/helper\s+\w+\s*/.source+r+/\s*/.source+s].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:u}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:u}},value:g,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml})(Prism)}}]);
