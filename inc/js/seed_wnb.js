jQuery(document).ready(function($){
	var button = '';
	if(seed_wnb_js_localize.button_label != '' && seed_wnb_js_localize.button_link != ''){
		var button = '<a href="'+seed_wnb_js_localize.button_link+'" target="'+seed_wnb_js_localize.button_target+'"><span class="wnb-bar-button">'+seed_wnb_js_localize.button_label+'</span></a>';
	}
	$('body').prepend('<div id="wnb-bar"><button class="btn" id="wnp-close--">X</button><span>' + seed_wnb_js_localize.msg + '</span> ' + button + '</div>');
	var pt = $('body').css('padding-top');

	if($('#wpwrap').length < 1){
		$('body').css('padding-top', (parseFloat(pt) + 33) + 'px');
	}
});

jQuery(document).ready(function() {
    jQuery('#wnp-close--').on('click', function(e) { 
        jQuery('#wnb-bar').remove(); 
    });
});