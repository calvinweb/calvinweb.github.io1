function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’a
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById('t').innerHTML= d24(h)+":"+m+":"+s+week();
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
startTime()
