// onload the page get started from the top

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}


// scrolling
// counter numbers 
var a1 = 0;
	var a2 = 0;
	var a3 = 0;

window.onscroll = () => {
	// show fixed header onscroll 20 pageYOffset
	if (window.scrollY > 30 && window.scrollY < 400){
		document.querySelector(".header").classList.add('header2');
		document.getElementById("arrow-button").style.display = "block";
		// show all categories in buttons with bg darkblue
		document.querySelector(".catg1").classList.add("catg");
		// change color of the burger and close image
		document.querySelector(".burger").style.filter = "none";
		document.querySelector(".close").style.filter = "none";
		
		setInterval(changeClass, 10);
    }
	
	// show counter onscroll 400
	else if(window.scrollY > 350 && window.scrollY < 750){
      var timer1 = setInterval(function() {
			document.querySelector(".number1").innerHTML = a1++;
	document.querySelector(".number2").innerHTML = a2++;
	document.querySelector(".number3").innerHTML = a3++;
			
			setTimeout(function() {
				if(a1 > 653 && a2 > 653 && a3 > 653) {
		document.querySelector(".number1").innerHTML = "653";
		document.querySelector(".number2").innerHTML = "1246";
		document.querySelector(".number3").innerHTML = "2343";
		clearInterval(timer1);
		document.querySelector(".number1").setAttribute("class" , "n1");
		document.querySelector(".number2").setAttribute("class" , "n2");
		document.querySelector(".number3").setAttribute("class" , "n3");
		
	}
				
			});
			
			
		} , 2);
	} 
	// show article onscroll 650
	else if (window.scrollY > 750) {  
	document.querySelector(".art1").style.WebkitAnimationPlayState= "running";
	document.querySelector(".art2").style.WebkitAnimationPlayState= "running";
	document.querySelector(".art3").style.WebkitAnimationPlayState= "running";
		//document.querySelector(".catg1").classList.add("catg");
	}
	
	
	else {
         // document.querySelector(".header").setAttribute("class" , "header");
	document.querySelector(".header").classList.remove('header2');
		document.getElementById("arrow-button").style.display = "none";
		// change color of the burger and close image
		document.querySelector(".burger").style.filter ="brightness(0) invert(1)";
		document.querySelector(".close").style.filter ="brightness(0) invert(1)";
		
    }
};




// slide images
var detIndex = 1;
showSlides(detIndex);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n , detIndex += n);
	
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n , detIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var det = document.getElementsByClassName("details");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
	
	 if (n > det.length) {detIndex = 1}
  if (n < 1) {detIndex = det.length}
	
	
	//document.querySelector(".mySlides").setAttribute("class" , "mySlidesHide") ;
	//document.querySelector(".mySlides").classList.add("mySlidesHide");
	//setTimeout(function() {
		
		 for (i = 0; i < slides.length; i++) {
	  
 slides[i].style.display = "none";
     
  } 
	
	for (i = 0; i < det.length; i++) {
	  
 det[i].style.display = "none";
     
  } 
	
	//} , 700);

	
	
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
	 //document.querySelector(".mySlides").classList.add("mySlidesVisible");
	//setTimeout( function() {
		slides[slideIndex-1].style.display = "block";
		det[detIndex-1].style.display = "block";
		
	//} , 700);
  //slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



// show and hide arrows
function showArrows() {
	document.querySelector(".next").style.display = "block";
	document.querySelector(".prev").style.display = "block";
}



// onclick on the ctageories
function changeCategories(class1 , class2 , class3 , class4 , class5) {
	document.querySelector(class1).classList.add("catg");
	
	
	document.querySelector(class2).classList.remove("catg");
	document.querySelector(class3).classList.remove("catg");
	document.querySelector(class4).classList.remove("catg");
	document.querySelector(class5).classList.remove("catg");
	
}

// show inside image
function insideImage1(){
	document.querySelector(".inImage1").style.WebkitAnimationPlayState= "running";
	document.querySelector(".inImage1").classList.remove("hideImage");
}
function insideImage2(){
	document.querySelector(".inImage2").style.WebkitAnimationPlayState= "running";
	document.querySelector(".inImage2").classList.remove("hideImage");
}
function insideImage3(){
	document.querySelector(".inImage3").style.WebkitAnimationPlayState= "running";
	document.querySelector(".inImage3").classList.remove("hideImage");
}
// hide inside images
function hideInImages1() {
	document.querySelector(".inImage1").classList.add("hideImage");
}
function hideInImages2() {
	document.querySelector(".inImage2").classList.add("hideImage");
}
function hideInImages3() {
	document.querySelector(".inImage3").classList.add("hideImage");
}

// shoe clients 
function showClient1() {
	
	var mq = window.matchMedia("(max-width: 900px)");
	var disp = "flex";
	if(mq.matches) {
		var disp = "block";
	} 
	// divs
	document.querySelector(".client1").style.display = disp;
	document.querySelector(".client2").style.display = "none";
	document.querySelector(".client3").style.display = "none";
	// buttons
	document.querySelector(".button1").style.backgroundColor = "#ed5434";
	document.querySelector(".button2").style.backgroundColor = "#ffffff";
	document.querySelector(".button3").style.backgroundColor = "#ffffff";
	
}

function showClient2() {
	var mq = window.matchMedia("(max-width: 900px)");
	var disp = "flex";
	if(mq.matches) {
		var disp = "block";
	} 
	
	// divs
	document.querySelector(".client2").style.display = disp;
	document.querySelector(".client1").style.display = "none";
	document.querySelector(".client3").style.display = "none";
	// buttons
	document.querySelector(".button2").style.backgroundColor = "#ed5434";
	document.querySelector(".button1").style.backgroundColor = "#ffffff";
	document.querySelector(".button3").style.backgroundColor = "#ffffff";
	
}

function showClient3() {
	
	var mq = window.matchMedia("(max-width: 900px)");
	var disp = "flex";
	if(mq.matches) {
		var disp = "block";
	} 
	// divs
	document.querySelector(".client3").style.display = disp;
	document.querySelector(".client1").style.display = "none";
	document.querySelector(".client2").style.display = "none";
	// buttons
	document.querySelector(".button3").style.backgroundColor = "#ed5434";
	document.querySelector(".button1").style.backgroundColor = "#ffffff";
	document.querySelector(".button2").style.backgroundColor = "#ffffff";
}

// check message 

function checkMessage() {
	window.submit.innerHTML = "Submit Message";
	// input name
	
var text = document.querySelector(".name").value,
		batt,
		batt = /^[A-Za-z]+\s*[,]*[-]*[?]*[!]*[A-Za-z]*\s*[,]*[-]*[?]*[!]*[A-Za-z]*\s*[,]*[-]*[?]*[!]*[A-Za-z]*\s*[,]*[-]*[?]*[!]*[A-Za-z]*\s*[,]*[-]*[?]*[!]*[A-Za-z]*$/,
		b = batt.test(text),
	
	// input email
	 text2 = document.querySelector(".email").value,
	batt2 = /^[A-Za-z]{1,2}[-]?\s?[.]?\w+[-]?\s?[.]?\w*[-]?\s?[.]?\w*[-]?\s?[.]?\w*[@]{1}[g][m][a][i][l]{1}[.][c][o][m]{1}$/,
	//batt22 = /^[A-Za-z]{1,2}[-]?\s?[.]?\w+[-]?\s?[.]?\w*[-]?\s?[.]?\w*[-]?\s?[.]?\w*[@]{1}[y][a][h][o][o]{1}[.][c][o][m]{1}$/,
		b2 = batt2.test(text2),
		//b22 = batt22.test(text2);
	
	 text3 = document.querySelector(".subject").value,
		b3 = batt.test(text3),
	
	 text4 = document.querySelector(".message").value,
		b4 = batt.test(text4),
	
	text22 = document.querySelector(".email").value,
	
	batt22 = /^[A-Za-z]{1,2}[-]?\s?[.]?\w+[-]?\s?[.]?\w*[-]?\s?[.]?\w*[-]?\s?[.]?\w*[@]{1}[y][a][h][o][o]{1}[.][c][o][m]{1}$/,
	b22 = batt22.test(text22);
	
	if (b){
		document.querySelector(".name").style.border = "3px solid green";
	}
    if (!b){
		document.querySelector(".name").style.border = "3px solid red";
	}
	
	 if (b2) {
		document.querySelector(".email").style.border = "3px solid green";
	}
	if(b22){
		document.querySelector(".email").style.border = "3px solid green";
	}
	 if (!b2){
		document.querySelector(".email").style.border = "3px solid red";
	}
	
	 if(b3){
		document.querySelector(".subject").style.border = "3px solid green";
	}
	 if(!b3){
		document.querySelector(".subject").style.border = "3px solid red";
	}
	
	 if(b4){
		document.querySelector(".message").style.border = "3px solid green";
	}
	 if(!b4){
		document.querySelector(".message").style.border = "3px solid red";
	}
	
	 if(b && b2 && b3 && b4) {
		
		 document.getElementById("submit").innerHTML = "";
	     document.getElementById("load").style.display = "block";
		 setTimeout(function() {
			 window.location.href = "loveFit.html";
		 } , 3000)
	}
	
}
setInterval(checkMessage, 10);

// scroll to top
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}



// shoe and hide burger 
function showBurger() {
	
	document.querySelector(".inside-burger").style.display="block";
	document.querySelector(".inside-burger").classList.remove("removeBurger");
	document.querySelector(".burger").style.display = "none";
	document.querySelector(".close").style.display = "block";
}


function closeBurger() {
	
	document.querySelector(".burger").style.display = "block";
	document.querySelector(".close").style.display = "none";
	document.querySelector(".inside-burger").classList.add("removeBurger");
	setTimeout(function() {
		document.querySelector(".inside-burger").style.display="none";
		
	} , 400);
}

// change class
 var mq = window.matchMedia("(max-width: 900px)");

function changeClass() {
	var mq = window.matchMedia("(max-width: 900px)");
	
	
	if(mq.matches) {
		var x = document.querySelectorAll(".details2");
		for(var i = 0; i < x.length; i++){
			
			
				x[i].setAttribute("class", "details hiddenDetails");
			
		}
		
			
		}
	
		else{
				var x = document.querySelectorAll(".hiddenDetails");
		for(var i = 0; i < x.length; i++){
			
				x[i].setAttribute("class", "details2 hiddenDetails");
			
		}
			}
		
	
	if(mq.matches) {
		var x2 = document.querySelectorAll(".mySlides2");
		for(var ii = 0; ii < x2.length; ii++){
			
				x2[ii].setAttribute("class", "mySlides hiddenSlides");
			}
					
			
		}
	
	else{
		var x2 = document.querySelectorAll(".hiddenSlides");
		
		for(var ii = 0; ii < x2.length; ii++){
			
				x2[ii].setAttribute("class", "mySlides2 hiddenSlides");
			}
		
			}
		
	
	
	
	/*else{
		var x4 = document.querySelectorAll(".details hiddenDetails");
		for(var iiii = 0; iiii < x4.length; iiii++){
			//x4[iiii].setAttribute("class", "details3");
			x4[iiii].classList.remove("details");
		} 
		
		var x3 = document.querySelectorAll(".mySlides hiddenSlides");
		for(var iii = 0; iii < x3.length; iii++){
			//x3[iii].setAttribute("class", "mySlides3");
			x3[iii].classList.remove("mySlides");
		}
	} */
}

//setInterval(changeClass, 10);