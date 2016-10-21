'use strict';

function docComments(){
	var doc=document;
	var comments=[];
	function findComments(doc){
		for(var i=0; i<doc.childNodes.length; i++){
			if (doc.childNodes[i].nodeName=='#comment')
				comments.push(doc.childNodes[i].nodeValue);
			findComments(doc.childNodes[i])
		}
		return comments;
	}
	console.log(findComments(doc));
};
docComments();