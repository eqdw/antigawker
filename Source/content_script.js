walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
      
      if(node.href && isGawker(node.href)){
        cacheify(node)
      }
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

	}
}

function isGawker(href){
  var gawkerSitesRegex = [
    /^(https?:\/\/)?(www\.)?gawker\.com/,
    /^(https?:\/\/)?(www\.)?gizmodo\.com/,
    /^(https?:\/\/)?(www\.)?kotaku\.com/,
    /^(https?:\/\/)?(www\.)?jalopnik\.com/,
    /^(https?:\/\/)?(www\.)?lifehacker\.com/,
    /^(https?:\/\/)?(www\.)?deadspin\.com/,
    /^(https?:\/\/)?(www\.)?jezebel\.com/,
    /^(https?:\/\/)?(www\.)?io9\.com/,
    /^(https?:\/\/)?(www\.)?valleywag\.gawker\.com/
  ]
  var i;
  for(i=0; i<9; i++){
    if( href.match(gawkerSitesRegex[i])){
      return true;
    }
  }
  return false
}

function cacheify(node){
  var href = node.href;
  href = href.replace(/https?:\/\//g, "");
  href = "http://webcache.googleusercontent.com/search?q=cache:" + href;
  node.href = href; 
}
