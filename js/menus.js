$(document).ready(function() 
{
	//cuando entra
	var ban = "default";
	$("#por").mouseover(function(){
        if( $('.menu').is(':visible') )
        {
			$('.menu').fadeOut(200);
		    $('.submenu').delay(300).slideDown(500);
		}
	});
	
	//ocultar submenus...
	$("#menu1, #content").mouseover(function(){
		if( $('.submenu').is(':visible') )
		{
			$(".submenu").hide();
			$(".menu").fadeIn(400);
		}
	});
	
	function quitarPush()
	{
		$("a").removeClass("pushado");
		$('.show').empty().remove();
	}
	
	//funciones
	$("#bio").click(function(){
		if(ban != "bio")
		{	
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(500);
			$("#content").fadeIn(200);
			$("#content").load("biografia.html");
			ban = "bio";
		}
	});
	
	$("#cur").click(function(){
		if(ban != "cur")
		{
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(500);
			$("#content").fadeIn(200);
			$("#content").load("curriculum.html");
			ban = "cur";
	    }
	});
	
	$("#con").click(function(){
	   if(ban != "con")
	   {	
		  quitarPush();
		  $(this).addClass("pushado");
		  $("#content").slideUp(500);
          $("#content").fadeIn(200);
          $("#content").load("contacto.html");
          ban = "con";
	   }
	});
	
	$("#car").click(function(){
		if(ban != "car")
		{
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(500);
			$("#content").fadeIn(200);
		    $("#content").load("sub/carteles.html");
		    ban = "car";
		}
    });        
    $("#inv").click(function(){
		if(ban != "inv")
		{
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(200);
			$("#content").fadeIn(500);
		    $("#content").load("sub/invitaciones.html");
		    ban = "inv";
		}
	});
	$("#log").click(function(){
		if(ban != "log")
		{
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(200);
			$("#content").fadeIn(500);
			$("#content").load("sub/logotipos.html");
			ban = "log";
		}
	});
	$("#sou").click(function(){
		if(ban != "sou")
		{
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(500);
			$("#content").fadeIn(200);
			$("#content").load("sub/souvenirs.html");
			ban = "sou";
		}
	});
	$("#tar").click(function(){
		if(ban != "tar")
		{
			quitarPush();
			$(this).addClass("pushado");
			$("#content").slideUp(200);
            $("#content").fadeIn(500);
            $("#content").load("sub/tarjetas.html");
            ban = "tar";
		}
	});
	
}); 
