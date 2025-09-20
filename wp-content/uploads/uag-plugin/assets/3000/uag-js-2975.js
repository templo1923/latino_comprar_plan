document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-cb1447b4' );
});
				window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-e7cb6604' );
					if ( ! blockScope ) {
						return;
					}

					const anchorElement = blockScope.querySelector('a');
					if (!anchorElement) {
						return;
					} 

					 
					blockScope.addEventListener('keydown', (event) => {
						if ( 13 === event.keyCode || 32 === event.keyCode ) {
							event.preventDefault();
							 
							anchorElement.click();	
						}
					} );
				} );
			window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-50b0a23d' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-94b6bc9b' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-93c1b2d1' );
});
 });