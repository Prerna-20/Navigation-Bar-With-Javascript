 /* ------------- GLOBAL VARIABLES DECLARED -------------*/

 var link = document.getElementById('tabs').getElementsByTagName('a');
 var desc = document.getElementById('tab_content').getElementsByTagName('div');
 var check = document.getElementById('menu');
 var title = document.getElementById('title');

/*---------------- TOGGLE FUNCTION ------------- */

 function toggleMenu(a) {
    link[a].onclick = function () {

    for (i = 0; i< link.length; i++) {
        link[i].className = link[i].className.replace(/\bactive\b/g, "");
        desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
    }
        link[a].className += "active"; 
        desc[a].className += "active";   
        if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
            check.checked = false;
            title.innerHTML = link[a].text;
       }
    }
}

 /*---------------ON CLICK EVENTS FOR EVERY TAB--------------*/

 for (j = 0; j< link.length; j++) {
     toggleMenu(j);
 }
  