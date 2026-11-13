(function(){var d=document,r=Math.random,g=function(i){return d.getElementById(i)};
g('tg').onclick=function(){var e=d.documentElement;e.dataset.theme=(e.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'))=='dark'?'light':'dark'};
var h='',i,z;if(g('sky')){for(i=0;i<30;i++)h+='<b style="left:'+r()*100+'%;top:'+r()*100+'%;animation-delay:'+r()*2+'s"></b>';g('sky').insertAdjacentHTML('beforeend',h)}
if(g('bub')){h='';for(i=0;i<12;i++){z=10+r()*30;h+='<u style="left:'+r()*90+'%;width:'+z+'px;height:'+z+'px;opacity:'+(.2+r()*.6)+';animation-delay:-'+r()*5+'s;animation-duration:'+(4+r()*4)+'s"></u>'}g('bub').insertAdjacentHTML('beforeend',h)}
if(g('snow')){h='';for(i=0;i<25;i++)h+='<s style="left:'+r()*100+'%;--x:'+(r()*40-20)+'px;font-size:'+(10+r()*10)+'px;animation-delay:-'+r()*6+'s;animation-duration:'+(4+r()*4)+'s">❄</s>';g('snow').innerHTML=h}
var cd=g('cd');if(cd)cd.addEventListener('click',function(e){var s=e.target.dataset.s;if(!s)return;cd.className='c cd';void cd.offsetWidth;cd.classList.add(s)});
var mv=g('mv');if(mv){var t=function(){mv.classList.toggle('go')};mv.onclick=t;mv.onkeydown=function(e){if(e.key=='Enter'||e.key==' '){e.preventDefault();t()}}}
})();