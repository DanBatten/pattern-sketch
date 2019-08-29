import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/


export function smartDuplicateVersion(context){
	var app = NSApplication.sharedApplication();
	var sketch = context.api();
	var application = sketch.Application();
	var controller = context.document.actionsController();
	var doc = context.document;
	var pages = doc.pages();
	var selection = context.selection;
	for (var i = 0; i < selection.length; i++) {
		if(selection[i].class() == 'MSArtboardGroup' ){
			var currName,newName,abWidth, abX, abY;
			currName = selection[i].name();
			abWidth = selection[i].frame().width();
			abX = selection[i].frame().left();
			abY = selection[i].frame().top();
			var newAB = selection[i].duplicate();
			newAB.frame().setX(abX + abWidth + 100);
			newAB.frame().setY(abY);
			
			var regxMatch = new RegExp('(v\d+)');
			var matchV = currName.match(/v\d+/);
			
			if (matchV == null) {
				newName = currName + '-v1';
			}else{
				
				matchV = matchV.toString();
				
				var nameParse = matchV.match(/\d+/);
				
				var newVersion = parseInt(nameParse);
				newVersion = newVersion + 1;
				
				newName = currName.replace(matchV, "v" + newVersion);
			}
			
			newAB.name = newName;
		}else{return}
	}
	
}

export function smartDuplicateIterate(context){
	var app = NSApplication.sharedApplication();
	var sketch = context.api();
	var application = sketch.Application();
	var controller = context.document.actionsController();
	var doc = context.document;
	var pages = doc.pages();
	var selection = context.selection;
	for (var i = 0; i < selection.length; i++) {
		if(selection[i].class() == 'MSArtboardGroup' ){
			var currName,newName,abWidth, abX, abY;
			currName = selection[i].name();
			abHeight = selection[i].frame().height();
			abX = selection[i].frame().left();
			abY = selection[i].frame().top();
			var newAB = selection[i].duplicate();
			newAB.frame().setX(abX);
			newAB.frame().setY(abY+abHeight+100);
			
			var regxMatch = new RegExp('(r\d+)');
			var matchV = currName.match(/r\d+/);
			
			if (matchV == null) {
				newName =  'r1-'+currName;
			}else{
				
				matchV = matchV.toString();
				
				var nameParse = matchV.match(/\d+/);
				
				var newVersion = parseInt(nameParse);
				newVersion = newVersion + 1;
				
				newName = currName.replace(matchV, "r" + newVersion);
			}
			newAB.name = newName;
			
		}else{return}
	}
	
}
