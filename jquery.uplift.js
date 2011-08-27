/*
This plugin can't be used in Non-Islamic activities.

Author: Muhammad Usman, Sylhet, Bangladesh

http://www.halalit.net

For Dcumentation: http://www.halalit.net/blog/archives/jquery-uplift-plugin
For Dem: http://www.halalit.net/ (see Testimonials section)

You can use or modify this script keeping this whole comment untouched.
*/

$.fn.uplift = function(opts) {
		var defaults= {
			timeout: 5000,
			speed: 1000,
			show: 2,
			easing: 'easeInOutSine'
		};
		mee=$(this);
		numm=mee.children().get();

		slength=numm.length;
		maxheight=0;
		
		if (slength < 2) {
            if (window.console && window.console.log)
                window.console.log('terminating; too few slides: ' + slength);
            return;
        }
		
		for(i=0;i<slength;i++)	if($(numm[i]).height()>maxheight) maxheight=$(numm[i]).height();
		
		for(i=0;i<slength;i++)	
		{
			
			
			if( jQuery.trim($(numm[i]).html()) =='')
			{
				
				$(numm[i]).remove();
			}else{
				$(numm[i]).height(maxheight);
			}
		}

		mee.height((maxheight*(opts.show)));
		mee.css('overflow','hidden');
		
		numm=mee.children().get();
		slength=numm.length;
		last=slength-1;
			if(!$.browser.msie)
			{
				
				window.setInterval(function(){
					numm=mee.children().get();
					
					eend=$(numm[last]);
					
					
					eend.height(0);
					
					eend.css('opacity','0');

					
					mee.prepend(eend);
					
					
					eend.animate({height: maxheight,opacity: 1},opts.speed,opts.easing)

					
					

				}, opts.timeout ); 
				
			}
			return mee;
	}