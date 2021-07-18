$(function () {
  //se inicia con function (document.ready abreviado) para que se cargue el html y luego el js//
  //se activa el popover//
    $('[data-toggle="popover"]').popover()
    //abriendo otra funcion se seleciona las etiquetas "a" que contengan un #//
    $("a").click(function(event){
      if(this.hash !== "");{
        event.preventDefault();
        //se ocupa este if para prevenir que se active este evento por error//
        //se crea la variable pepi (puede tener cualquier nombre como gato, perro, etc)//
        var pepi = this.hash;
        //finalmente se selecciona la etiqueta html y body para que funcione la animacion scrolltop//
        $("html, body").animate({
          //se añade offset para que la animacion llegue arriba de lo seleccionado//
          scrollTop: $(pepi).offset().top
          //con este numero se selecciona el tiempo de la animacion en milisegundos//
        }, 900, function(){
          window.location.hash = pepi;
        });
      }
      });
  });