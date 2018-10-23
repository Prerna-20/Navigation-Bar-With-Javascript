    /* ------------- GLOBAL VARIABLES DECLARED -------------*/

    var tabs = document.getElementsByClassName('tabs');
    var link = tabs[0].getElementsByTagName('a');
    var cont = document.getElementsByClassName('tab_content');
    var desc = cont[0].getElementsByTagName('div');
    //var desc = document.getElementsByClassName('tab_content').getElementsByTagName('div');
    var check = document.getElementById('menu');
    var title = document.getElementById('title');

    /* ------------- ON CLICK EVENTS FOR TOGGLEABLE MENU -------------*/

    link[0].onclick = function () {
        for (i = 0; i< link.length; i++) {
            link[i].className = link[i].className.replace(/\bactive\b/g, "");
            desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
        }
            link[0].className += " " + "active"; 
        //var attr = link[0].getAttribute('href');
            desc[0].className += " " + "active";   
            if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                check.checked = false;
                title.innerHTML = link[0].text;
           }
    }

    link[1].onclick = function () {
            for (i = 0; i< link.length; i++) {
                link[i].className = link[i].className.replace(/\bactive\b/g, "");
                desc[i].className = desc[i].className.replace(/\bactive\b/g, "");    
        }
            link[1].className += " " + "active"; 
            desc[1].className += " " + "active";
            if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                check.checked = false;
                title.innerHTML = link[1].text;
           }
    }
    link[2].onclick = function () {
            for (i = 0; i< link.length; i++) {
            link[i].className = link[i].className.replace(/\bactive\b/g, "");
            desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
           }
               link[2].className += " " + "active"; 
               desc[2].className += " " + "active";
               if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                    check.checked = false;
                    title.innerHTML = link[2].text;
                  }
            }
            link[3].onclick = function () {
                for (i = 0; i< link.length; i++) {
                    link[i].className = link[i].className.replace(/\bactive\b/g, "");
                    desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
                }
                link[3].className += " " + "active"; 
                desc[3].className += " " + "active";
                if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                    check.checked = false;
                    title.innerHTML = link[3].text;
                }
            }
            link[4].onclick = function () {
                for (i = 0; i< link.length; i++) {
                    link[i].className = link[i].className.replace(/\bactive\b/g, "");
                    desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
                }
                link[4].className += " " + "active"; 
                desc[4].className += " " + "active";
                if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                    check.checked = false;
                    title.innerHTML = link[4].text;
                }
            }
            
            link[5].onclick = function () {
                for (i = 0; i< link.length; i++) {
                    link[i].className = link[i].className.replace(/\bactive\b/g, "");
                    desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
                }
                link[5].className += " " + "active"; 
                        desc[5].className += " " + "active";
                if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                    check.checked = false;
                    title.innerHTML = link[5].text;
                }
            }
            link[6].onclick = function () {
                for (i = 0; i< link.length; i++) {
                            link[i].className = link[i].className.replace(/\bactive\b/g, "");
                    desc[i].className = desc[i].className.replace(/\bactive\b/g, "");
                }
                link[6].className += " " + "active"; 
                desc[6].className += " " + "active";
                if(window.matchMedia("(min-width : 320px) and (max-width : 768px)").matches){
                    check.checked = false;
                    title.innerHTML = link[6].text;
                }
            }
            

            
            
