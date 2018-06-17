function myFunction(){
	var d = new Date();
	var weekday=new Array(7);
	weekday[0]="周日";
	weekday[1]="周一";
	weekday[2]="周二";
	weekday[3]="周三";
	weekday[4]="周四";
	weekday[5]="周五";
	weekday[6]="周六";
	var x = document.getElementById("demo");
	x.innerHTML=weekday[d.getDay()];
}