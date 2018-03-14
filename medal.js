//US 9 8 6
//REPUBLIC OF KOREA 5 8 4
var svg = document.getElementById("s");
var title = document.getElementById("country"); 
var switchbtn = document.getElementById("switch");
var country = 1; //1 for US of A, -1 for Korea
var usa = [9, 8, 6];
var korea = [5, 8, 4];


var changeTitle = function(){
    if (country == 1){
	title.innerHTML = "United States"; 
    }
    if (country == -1){
	title.innerHTML = "Republic of Korea";
    }
}

var changeCircles = function(){
    var cs = d3.selectAll("circle");
    changeTitle(); 
    if (country == 1){
	cs.data(usa);
	console.log(usa); 
    }
    if (country == -1){
	cs.data(korea);
	console.log(korea); 
    }
    cs.attr("r", function(d){ return d*5; });
    country = country*-1
}


changeCircles(); 
switchbtn.addEventListener("click", changeCircles); 
