// JavaScript Document
$(document).ready(function(e){
	$('#principal').height($('#page').height());//Calcular el alto de la pantalla del dispositivo	
	document.addEventListener("deviceready",function(){
		
		//Precargar sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('gato','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\gato.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('perro','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\rana.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('rana','audio/Animales_domesticos/Gallo.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('pato','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\Gato.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('puerco','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\Perros.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('borrego','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\Burro.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('cocodrilo','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\Aguila.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('leon','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\leon.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('oso','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\oso.mp3',function(){},function(e){alert('Error',+e);});
		
		audio.preloadFX('serpiente','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\serpiente.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('tigre','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio/tigre.mp3',function(){},function(e){alert('Error',+e);});
		audio.preloadFX('elefante','C:\Users\Beary\Documents\Moviles Oriana\aplicacion niños\Oriana Solis Justo\audio\audio\Pantera.mp3',function(){},function(e){alert('Error',+e);});
		
		//Reproducir notas
		$('.nota').bind('touchstart',function(){$(this).addClass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
	    },false); //deviceready
        });//ready