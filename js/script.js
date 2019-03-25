(function(){
    
    var header = document.getElementById("header");
    var navToggle = document.getElementById("nav-toggle");
    var goUpButton = document.getElementById("go-up");
   
    
    
    navToggle.addEventListener("click", function(){
        toggleClass(header, "toggled");
    })
    
    window.addEventListener("scroll", function(e){
        var yOfsset = window.pageYOffset;
        
 
 
        if(yOfsset > 150){
            addClass(header, "open");
        }else{
            removeClass(header, "open");
        }
        if(yOfsset > 250){
            addClass(goUpButton, "show");
        }else{
            removeClass(goUpButton, "show");
        }
    })
    function toggleClass(element, className){
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1){
            addClass(element, className);
        }else{
            removeClass(element, className);
        }
    }
    function addClass(element, className){
        var classList = element.className.split(" ");
        if (classList.indexOf(className) === -1){
            classList.push(className);
            classList = classList.join(" ");
            element.className = classList;
        }
    }
    function removeClass(element, className){
        var classList = element.className.split(" ");
        if (classList.indexOf(className) !== -1){
            classList = classList.filter(function(e){
                return e !== className
            })
            element.className = classList;
        }
    }
})();