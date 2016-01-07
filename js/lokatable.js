function LokaTable (params) {
	var LokaTable = this;
	LokaTable = { 
		table: $('table'),
		minWidth:400,
		maxHeight:100 
	};
	if(typeof params != "undefined"){
		LokaTable.table = (typeof params.id !="undefined") ? $(params.id) : LokaTable.table;
		LokaTable.minWidth = (typeof params.minWidth != "undefined") ? params.minWidth : LokaTable.minWidth;
		LokaTable.maxHeight = (typeof params.maxHeight != "undefined") ? params.maxHeight : LokaTable.maxHeight;
	}
	LokaTable.table.css({'display':'block','position':'relative'});

    LokaTable.resize = function(){
    	$( window ).resize(function() {
			LokaTable.init();
		});
    }
    LokaTable.init = function() {

    	LokaTable.table.each(function() {

    		var table = $(this);

			var width = table.width();
			var row_width =  [];
			var rowContador = 0;
		    var contador = 0;

			if(width > LokaTable.minWidth){
				$(table).children('tbody').css({'overflow-x':'hidden'});
			}
			else {
				$(table).children('tbody').css({'overflow-x':'scroll'});
			}

			table.children('thead').css({'display':'block','position':'relative'});
			table.children('thead').children('tr').css({'display':'block','position':'relative'});
			table.children('tbody').children('tr').css({'display':'block','position':'relative'});
		    table.children('tbody').css({'overflow-y':'scroll','display':'block','position':'relative','height':LokaTable.maxHeight});
		    $(table).children('tbody').children('tr').children('td').css({'display':'inline-block','position':'relative','width':' 100%','text-align':' center'});
		   	table.children('thead').children('tr').width(width);
		    table.children('tbody').children('tr').width(width);
		    var rowLength = $(table).children('thead').children('tr').children('th').length;
		    var Widthrow = width / rowLength;
		    $(table).children('thead').children('tr').children('th').each(function(){
		      row_width.push($(this).width(Widthrow));
		    });
		    $(table).children('tbody').children('tr').each(function(){
		      contador = 0;
		      $(table).children('tbody').children('tr').children('td').each(function(){
		        $(this).width(Widthrow -5);
		        contador++;
		      });
		    });

    	});
 	 
    }
    LokaTable.init();
	LokaTable.resize();
}
