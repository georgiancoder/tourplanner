$("section.choose2 article form select").selectmenu({
  icons: { button: "ui-icon-circle-triangle-s" }
});

//tour page gallery
var counter = 0;
var allimage = $(".bullet").length;
window.setInterval(carousel,3000,false);
function carousel(){
	if(counter < allimage-1){
		$($(".bullet")[counter]).removeClass('active');
		counter++;
		$($(".bullet")[counter]).addClass('active');
		$(".gallery img.main").hide();
		$(".gallery img.main").attr('src',$($(".bullet")[counter]).find('img').attr('src'));
		$(".gallery img.main").fadeIn();
	}
	else
	{
		$($(".bullet")[counter]).removeClass('active');
		counter=0;
		$($(".bullet")[counter]).addClass('active');
		$(".gallery img.main").hide();
		$(".gallery img.main").attr('src',$($(".bullet")[counter]).find('img').attr('src'));
		$(".gallery img.main").fadeIn();
	}
}

$(".bullet").click(function(){
	$(".bullet").removeClass("active");
	counter = $(this).index();
	$($(".bullet")[counter]).addClass("active");
	$(".gallery img.main").hide();
	$(".gallery img.main").attr('src',$($(".bullet")[counter]).find('img').attr('src'));
	$(".gallery img.main").fadeIn();
});

jQuery('.time').datetimepicker({
  datepicker:false,
  format:'H:i'
});


jQuery('.date').datetimepicker({
 i18n:{
  de:{
   months:[
    'Januar','Februar','MÃ¤rz','April',
    'Mai','Juni','Juli','August',
    'September','Oktober','November','Dezember',
   ],
   dayOfWeek:[
    "So.", "Mo", "Di", "Mi", 
    "Do", "Fr", "Sa.",
   ]
  }
 },
 timepicker:false,
 format:'d.m.Y'
});