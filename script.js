
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span style="color:orange;">Hello World!<span\>')
.pauseFor(300)
.deleteAll()
.pauseFor(300)
.typeString('<span style="color:orange;">I am <span\><span style = "color:white;">Lakshay<span\>')
.pauseFor(5000)



.start()



    
  
