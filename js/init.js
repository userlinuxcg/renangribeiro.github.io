jQuery(document).ready(function() {

	skel.init({
		reset : 'full',
		containers : '100%',
		breakpoints : {
			global : {
				href : 'css/style.css',
				grid : {
					gutters : ['2.5em', 0]
				}
			},
			xlarge : {
				media : '(max-width: 1800px)',
				href : 'css/style-xlarge.css'
			},
			large : {
				media : '(max-width: 1280px)',
				href : 'css/style-large.css',
				grid : {
					gutters : ['2em', 0]
				}
			},
			medium : {
				media : '(max-width: 980px)',
				href : 'css/style-medium.css'
			},
			small : {
				media : '(max-width: 736px)',
				href : 'css/style-small.css',
				grid : {
					gutters : ['1.5em', 0]
				},
				viewport : {
					scalable : false
				}
			},
			xsmall : {
				media : '(max-width: 480px)',
				href : 'css/style-xsmall.css'
			}
		}
	});

	jQuery('.skillbar').each(function() {
		jQuery(this).find('.skillbar-bar').animate({
			width : jQuery(this).attr('data-percent')
		}, 6000);
	});

	$('#visualizar_curriculo').click(function() {

		window.open("../renanribeiro.pdf");

	});

	$('#mensagem').hide();

	//timeline
	$(".box").hide();
	$("#2012.circulo").mouseover(function() {

		$("#2012.ano").css("color", "#ffffff");

		$("#2012 .box").fadeIn();
		// // $("#linha").css("border-top","px #efefef");

	});

	$("#2013.circulo").mouseover(function() {

		$("#2013.ano").css("color", "#ffffff");

		$("#2013 .box").fadeIn();
		// // $("#linha").css("border-top","px #efefef");

	});

	$("#2014.circulo").mouseover(function() {

		$("#2014.ano").css("color", "#ffffff");

		$("#2014 .box").fadeIn();
		// // $("#linha").css("border-top","px #efefef");

	});

	$("#2015.circulo").mouseover(function() {

		$("#2015.ano").css("color", "#ffffff");

		$("#2015 .box").fadeIn();
		// // $("#linha").css("border-top","px #efefef");

	});

	$(".circulo").mouseleave(function() {

		$(".box").fadeOut();
		$(".ano").css("color", "#d1d1d1");
	});

	$('#enviar').click(function() {

		// alert("txt");
		$.ajax({
			type : 'post',

			url : 'email.php',

			data : 'nome=' + $('#nome').val() + '&email=' + $('#email').val() + '&mensagem=' + $('#mensagem').val(),

			dataType : 'html',

			success : function(retorno) {
			
				$('#mensagem').append('<h3>' + retorno + '</h3>');
				$("#mensagem").show(2000);
				$('#mensagem').hide(8000);
				$('#mensagem').append('');
				$('#nome').val("");
				$('email').val("");
		


			}
		});

	});

});
