$(document).ready(function() {

     // do something
     dui_grid();
     $(window).resize(function(event) {
       /* Act on the event */
       dui_grid();
     });


});

$(window).on('load', function() {
  //document.getElementsByTagName("html")[0].style.visibility = "visible";
   //$(".ds-cover").remove();
});

function dui_grid() {
  $('.ds-row > [class*="ds-col-"]').each( function(i,val){
     var sty=$(this).attr("class").split(" ").filter(dui_getColClass);
     var wt=dui_getColWidth(sty);
     $(this).css("width",wt+"%");
  });

  $('.ds-row > [class*="ds-grid-"]').each( function(i,val){
    // var sty=$(this).attr("class").split(" ").filter(dui_getGridClass);
     var sty=$(this).attr("class").split(" ");
     var wt=100;
     for(i=0;i<sty.length;i++){
       wt=dui_getGridWidth(sty[i]);
       if(wt){
         //alert(wt);
         $(this).css("width",wt+"%");
         break;
       }
     }
  });

}

function dui_getColClass(value) {
    return value.indexOf("ds-col-") > -1;
}

function dui_getGridClass(value) {
  //alert(value)
    return value.indexOf("ds-grid-") > -1;
}

function dui_getColWidth(sty, col){
  if(!col) col="ds-col-";
  var wt=100;
  if(sty.toString().indexOf(col+"s-") > -1){
    if($(window).width()>479) wt= sty.toString().substr(9);
  }else if(sty.toString().indexOf(col+"m-") > -1){
    if($(window).width()>767) wt=sty.toString().substr(9);
  }else if(sty.toString().indexOf(col+"l-") > -1){
    if($(window).width()>991) wt=sty.toString().substr(9);
  }else if(sty.toString().indexOf(col+"xl-") > -1){
    if($(window).width()>1280) wt=sty.toString().substr(10);
  }else if(sty.toString().indexOf(col+"") > -1){
    wt=sty.toString().substr(7);
  }
  return wt;
}

function dui_getGridWidth(sty){
  var wt=false;
  if(sty.toString().indexOf("ds-grid-s-") > -1){
    if($(window).width()<=480) wt= sty.toString().substr(10);
  }else if(sty.toString().indexOf("ds-grid-m-") > -1){
    if($(window).width()<=768) wt=sty.toString().substr(10);
  }else if(sty.toString().indexOf("ds-grid-l-") > -1){
    if($(window).width()<=991) wt=sty.toString().substr(10);
  }else if(sty.toString().indexOf("ds-grid-xl-") > -1){
    if($(window).width()>1279) wt=sty.toString().substr(11);
  }else if(sty.toString().indexOf("ds-grid-") > -1){
    wt=sty.toString().substr(8);
  }
  return wt;
}
