/*! DUI Framework  v0.1 | (c) Dhrusya Solutions | dhrusya.com */
var DUI={};

(function(core) {
  var dui;
  if (!window.jQuery) {
      throw new Error('DUI 0.x requires jQuery');
  }else {
    dui = core(window.jQuery);
  }
}(function($) {
    DUI.noConflict = function() {
        return DUI;
    };
   // cache jQuery
    DUI.$ = $;
    DUI.$doc  = DUI.$(document);
    DUI.$win  = DUI.$(window);
    DUI.$html = DUI.$('html');

    DUI.grid=function(){
      $('.ds-row > [class*="ds-col-"]').each( function(i,val){
         var sty=$(this).attr("class").split(" ");
         DUI.setColWidth($(this),sty);
      });
      $('.ds-row > [class*="ds-grid-"]').each( function(i,val){
         var sty=$(this).attr("class").split(" ");
         DUI.setGridWidth($(this),sty);
      });
      $('[class*="ds-cols-"]').each( function(i,val){
         var sty=$(this).attr("class").split(" ");
         DUI.setColsWidth($(this),sty);
      });
    };
    DUI.setColsWidth=function(ob,arr){
      for(i=0;i<arr.length;i++){
         var wt=DUI.getColsWidth(arr[i]);
         var cls=arr[i].toString().trim();
         if(wt){
           wt=parseInt(wt);
           wt=DUI.round(100/wt,2);
           ob=$(".ds-row > *");
           DUI.setElWidth(ob,wt);
           break;
         }
      }
    };
    DUI.setColWidth=function(ob,arr){
      for(i=0;i<arr.length;i++){
        var wt=DUI.getColWidth(arr[i]);
        if(wt){
          DUI.setElWidth(ob,wt);
          break;
        }
      }
    };
    DUI.setGridWidth=function(ob,arr){
      for(i=0;i<arr.length;i++){
        var wt=DUI.getColsWidth(arr[i], 'ds-grid-', '10', '100');
        if(wt){
          DUI.setElWidth(ob,wt);
          break;
        }
      }
    };
    DUI.setElWidth=function(ob,wt){
        ob.css("width",wt+"%");
        ob.animate({
          opacity: 1},
          500, function() {
            /* stuff to do after animation is complete */
          });
    };
    DUI.getColsWidth=function(sty, col, num, def){
      if(!col) col="ds-cols-"; //style class name
      if(!num) num="10"; //substr num
      if(!def) def="1"; //default
      var wt=false;
      sty=sty.toString().trim();
      if(sty.indexOf(col+"s-") > -1){
        if(DUI.$win.width()<=480) wt= sty.toString().substr(num);
      }else if(sty.indexOf(col+"m-") > -1){
        if(DUI.$win.width()<=768) wt=sty.toString().substr(num);
      }else if(sty.indexOf(col+"l-") > -1){
        if(DUI.$win.width()<=991) wt=sty.toString().substr(num);
      }else if(sty.indexOf(col+"xl-") > -1){
        if(DUI.$win.width()>=1280) wt=sty.toString().substr(num+1);
      }else if(sty.indexOf(col+"") > -1){
        wt=sty.toString().substr(num-2);
      }
      return wt;
    };

    DUI.getColWidth=function(sty, col){
      if(!col) col="ds-col-";
      var wt=100;
      if(sty.toString().indexOf(col+"s-") > -1){
        if(DUI.$win.width()>479) wt= sty.toString().substr(9);
      }else if(sty.toString().indexOf(col+"m-") > -1){
        if(DUI.$win.width()>767) wt=sty.toString().substr(9);
      }else if(sty.toString().indexOf(col+"l-") > -1){
        if(DUI.$win.width()>991) wt=sty.toString().substr(9);
      }else if(sty.toString().indexOf(col+"xl-") > -1){
        if(DUI.$win.width()>=1280) wt=sty.toString().substr(10);
      }else if(sty.toString().indexOf(col+"") > -1){
        wt=sty.toString().substr(7);
      }
      return wt;
    };

    DUI.round = function(number, precision) {
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };

    DUI.$doc.ready(function(){
      //alert("loaded in DUI");
      DUI.grid();
      DUI.$win.resize(function(event) {
        /* Act on the event */
        DUI.grid();
      });
    });

}));
