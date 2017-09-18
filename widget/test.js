MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    mutations.forEach(function( mutation ) {
    var newNodes = mutation.addedNodes; // DOM NodeList
    if( newNodes !== null ) { // If there are new nodes added
    	var $nodes = $( newNodes ); // jQuery set
    	$nodes.each(function() {
    		var $node = $( this );
    		if( $node.has( '#repuso_floating_iframe' ) ) {
    			var iFrame02 = document.getElementById('repuso_floating_iframe');
				var elm = "<button style='padding: 2.5px 15px;color: #5ea8aa;background-color: #ffffff;border: 1px solid #ffffff;font-size: 17px'>New Button</button>";
        iFrame02.getElementsByClassName('repuso_content')[0].innerHTML += elm;
        }
    	});
    }
  });
    // ...

});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  childList: true
  //...
});
