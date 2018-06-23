function h2u(html) 
{ 
    
     
    html = html.replace(/\n/g,''); 
    html = html.replace(/<div.*?>(.+?)<\/div>/ig,'[    DISCUZ_CODE_0    ]\n\n'); 
    html = html.replace(/<p.*?>(.+?)<\/p>/ig,'$1\n\n'); 
    html = html.replace(/<br\/?>/ig,'\n\n'); 
    html = html.replace(/<a.+?href="(.+?)".*?>(.+?)<\/a>/ig,'[url=$1]$2[/url]'); 
    html = html.replace(/<img.+?src="(.+?)".*?>/ig,'[align=center][img]$1[/img][/align]'); 
    html = html.replace(/<strong>(.+?)<\/strong>/ig,'[b]$1[/b]'); 
    html = html.replace(/<h\d>(.+?)<\/h\d>/ig,'[size=3][b]$1[/b][/size]\n\n'); 
     
return html
} 