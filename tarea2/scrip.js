/**
 * Imprime error
 * @param {string|number} msg
 */


var contador=1;
let photoscount= [1];
let errores=[];


/**
 Validacion del formulario
 */



function validarDireccion(){
  let booli= true;
  let reg=document.getElementById("region").value;
  let comu=document.getElementById("comuna").value;
  let call=document.getElementById("calle").value;
  let nume=document.getElementById("numero").value;
  let sec= document.getElementById("sector").value;
  let regexText = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
  let regexNum =/^[0-9]*$/;

  if(reg === ""){
    errores.push('Porfavor elija una region');
    booli=booli && false;
  } 

  if(comu === ""){
    errores.push('Porfavor elija una comuna');
    booli=booli && false;
  }


  if ( call.length > 250 || !regexText.test(call)) {
    errores.push('Tu nombre de calle no esta correcto');
    booli=booli && false;
  }

  if ( sec.length > 100 || !regexText.test(sec) || sec==="") {
    errores.push('Tu sector no esta correcto');
    booli=booli && false;
  }

  if ( nume.length > 20 || !regexNum.test(nume)) {
    errores.push('Tu numero de calle no esta correcto');
    booli=booli && false;
  }
  
  return booli;

}
function validarContacto(){
  let booli= true;

  let eml=document.getElementById("email").value;
  let cel=document.getElementById("celular").value;
  let nombre=document.getElementById("nombre").value;
  let regexText = /^[a-zA-Z ]*$/;
  let regexcellNum =/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;
  let regexmail= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  

  if (!regexmail.test(eml)) {
    errores.push('Tu email no esta correcto');
    booli=booli && false;
  }


  if ( nombre.length > 200 || !regexText.test(nombre)) {
    errores.push('Tu nombre no esta correcto');
    booli=booli && false;
  }

  if (  !regexcellNum.test(cel)) {
    errores.push('Tu numero de celular no esta correcto');
    booli=booli && false;
  }
  
  return booli;

}


function validarMascota(){

  let booli=true;

  for(var nummascota=1 ; nummascota<=Petcounter; nummascota++){

    
      let tipmascota=document.getElementById('tipo-mascota'+nummascota.toString()).value;
      let edadmascota=document.getElementById('edad-mascota'+nummascota.toString()).value;
      let colormascota=document.getElementById('color-mascota'+nummascota.toString()).value;
      let razamascota=  document.getElementById('raza-mascota'+nummascota.toString()).value;
      let estmascota=  document.getElementById('esterilizado-mascota'+nummascota.toString()).value; 
      let vacmascota=  document.getElementById('vacunas-mascota'+nummascota.toString()).value; 



      let regexText =/^[a-zA-Z ]*$/;;
      let regexNum =/^[0-9]*$/;

  if(tipmascota === ""){
    errores.push('Porfavor elija un tipo de mascota');
    booli=booli && false;
  } 

  if(estmascota === ""){
    errores.push('Porfavor confirme si su mascota esta esterilizada');
    booli=booli && false;
  }
  if(vacmascota === ""){
    errores.push('Porfavor confirme si su mascota esta con sus vacunas al dia');
    booli=booli && false;
  }


  if ( razamascota.length > 30 || !regexText.test(razamascota) || razamascota==="") {
    errores.push('La raza de tu mascota no es valida');
    booli=booli && false;
  }

  if ( colormascota.length > 30 || !regexText.test(colormascota)|| colormascota==="") {
    errores.push('El color de tu mascota no es valido');
    booli=booli && false;
  }

  if ( edadmascota.length > 5|| !regexNum.test(edadmascota) ||edadmascota==="") {
    errores.push('La edad de tu mascota no es valida');
    booli=booli && false;
  }


  let photoarray=nummascota-1;
  for(var photonum=1;photonum<= photoscount[photoarray];photonum++){
  
    let photoid='foto-mascota'+photonum.toString()+'-'+nummascota.toString();

    let fotomascota=document.getElementById(photoid);
    
    
    if(fotomascota.files.length==0){

    errores.push('Falta agregar una foto');
    booli=booli && false;

    }

  }

  }
  return booli;



}


function validacionFormulario() {
 
    

    let finalbool=true;
    let direccion= validarDireccion();
    let contacto= validarContacto();
    let mascotas= validarMascota();

    /*
    La idea sería ir añadiendo más validaciones aquí, e ir concatenando el mensaje
    de error si es que existe, para al final realizar "mostrarError(mensaje_error_concatenado)".
     */
    finalbool=finalbool && direccion && contacto && mascotas
    if(!finalbool){
    mostrarError();}

    return finalbool;

}






 // THE JSON ARRAY.
 var regiones = [
   
    {
      "region": "Tarapacá",
      "numero": "I",
      "index": "1",
      "comunas": [
        "Alto Hospicio",
        "Camiña",
        "Colchane",
        "Huara",
        "Iquique",
        "Pica",
        "Pozo Almonte"
      ]
    },
    {
      "region": "Antofagasta",
      "numero": "II",
      "index": "2",
      "comunas": [
        "Antofagasta",
        "Calama",
        "María Elena",
        "Mejillones",
        "Ollagüe",
        "San Pedro de Atacama",
        "Sierra Gorda",
        "Taltal",
        "Tocopilla"
      ]
    },
    {
      "region": "Atacama",
      "numero": "III",
      "index": "3",
      "comunas": [
        "Alto del Carmen",
        "Caldera",
        "Chañaral",
        "Copiapó",
        "Diego de Almagro",
        "Freirina",
        "Huasco",
        "Tierra Amarilla",
        "Vallenar"
      ]
    },
    {
      "region": "Coquimbo",
      "numero": "IV",
      "index": "4",
      "comunas": [
        "Andacollo",
        "Canela",
        "Combarbalá",
        "Coquimbo",
        "Illapel",
        "La Higuera",
        "La Serena",
        "Los Vilos",
        "Monte Patria",
        "Ovalle",
        "Paiguano",
        "Punitaqui",
        "Río Hurtado",
        "Salamanca",
        "Vicuña"
      ]
    },
    {
      "region": "Valparaíso",
      "numero": "V",
      "index": "5",
      "comunas": [
        "Algarrobo",
        "Cabildo",
        "Calera",
        "Calle Larga",
        "Cartagena",
        "Casablanca",
        "Catemu",
        "Concón",
        "El Quisco",
        "El Tabo",
        "Hijuelas",
        "Isla de Pascua",
        "Juan Fernández",
        "La Cruz",
        "La Ligua",
        "Limache",
        "Llaillay",
        "Los Andes",
        "Nogales",
        "Olmué",
        "Panquehue",
        "Papudo",
        "Petorca",
        "Puchuncaví",
        "Putaendo",
        "Quillota",
        "Quilpué",
        "Quintero",
        "Rinconada",
        "San Antonio",
        "San Esteban",
        "San Felipe",
        "Santa María",
        "Santo Domingo",
        "Valparaíso",
        "Villa Alemana",
        "Viña del Mar",
        "Zapallar"
      ]
    },
    
    {
      "region": "Libertador Gral. Bernardo O’Higgins",
      "numero": "VI",
      "index": "6",
      "comunas": [
        "Chimbarongo",
        "Chépica",
        "Codegua",
        "Coinco",
        "Coltauco",
        "Doñihue",
        "Graneros",
        "La Estrella",
        "Las Cabras",
        "Litueche",
        "Lolol",
        "Machalí",
        "Malloa",
        "Marchihue",
        "Nancagua",
        "Navidad",
        "Olivar",
        "Palmilla",
        "Paredones",
        "Peralillo",
        "Peumo",
        "Pichidegua",
        "Pichilemu",
        "Placilla",
        "Pumanque",
        "Quinta de Tilcoco",
        "Rancagua",
        "Rengo",
        "Requínoa",
        "San Fernando",
        "San Francisco de Mostazal",
        "San Vicente de Tagua Tagua",
        "Santa Cruz"
      ]
    },
    {
      "region": "Maule",
      "numero": "VII",
      "index": "7",
      "comunas": [
        "Cauquenes",
        "Chanco",
        "Colbún",
        "Constitución",
        "Curepto",
        "Curicó",
        "Empedrado",
        "Hualañé",
        "Licantén",
        "Linares",
        "Longaví",
        "Maule",
        "Molina",
        "Parral",
        "Pelarco",
        "Pelluhue",
        "Pencahue",
        "Rauco",
        "Retiro",
        "Romeral",
        "Río Claro",
        "Sagrada Familia",
        "San Clemente",
        "San Javier de Loncomilla",
        "San Rafael",
        "Talca",
        "Teno",
        "Vichuquén",
        "Villa Alegre",
        "Yerbas Buenas"
      ]
    },
    {
      "region": "Biobío",
      "numero": "VIII",
      "index": "8",
      "comunas": [
        "Alto Biobío",
        "Antuco",
        "Arauco",
        "Cabrero",
        "Cañete",
        "Chiguayante",
        "Concepción",
        "Contulmo",
        "Coronel",
        "Curanilahue",
        "Florida",
        "Hualpén",
        "Hualqui",
        "Laja",
        "Lebu",
        "Los Álamos",
        "Los Ángeles",
        "Lota",
        "Mulchén",
        "Nacimiento",
        "Negrete",
        "Penco",
        "Quilaco",
        "Quilleco",
        "San Pedro de la Paz",
        "San Rosendo",
        "Santa Bárbara",
        "Santa Juana",
        "Talcahuano",
        "Tirúa",
        "Tomé",
        "Tucapel",
        "Yumbel"
      ]
    },
    {
      "region": "Araucanía",
      "numero": "IX",
      "index": "9",
      "comunas": [
        "Angol",
        "Carahue",
        "Cholchol",
        "Collipulli",
        "Cunco",
        "Curacautín",
        "Curarrehue",
        "Ercilla",
        "Freire",
        "Galvarino",
        "Gorbea",
        "Lautaro",
        "Loncoche",
        "Lonquimay",
        "Los Sauces",
        "Lumaco",
        "Melipeuco",
        "Nueva Imperial",
        "Padre las Casas",
        "Perquenco",
        "Pitrufquén",
        "Pucón",
        "Purén",
        "Renaico",
        "Saavedra",
        "Temuco",
        "Teodoro Schmidt",
        "Toltén",
        "Traiguén",
        "Victoria",
        "Vilcún",
        "Villarrica"
      ]
    },
    
    {
      "region": "Los Lagos",
      "numero": "X",
      "index": "10",
      "comunas": [
        "Ancud",
        "Calbuco",
        "Castro",
        "Chaitén",
        "Chonchi",
        "Cochamó",
        "Curaco de Vélez",
        "Dalcahue",
        "Fresia",
        "Frutillar",
        "Futaleufú",
        "Hualaihué",
        "Llanquihue",
        "Los Muermos",
        "Maullín",
        "Osorno",
        "Palena",
        "Puerto Montt",
        "Puerto Octay",
        "Puerto Varas",
        "Puqueldón",
        "Purranque",
        "Puyehue",
        "Queilén",
        "Quellón",
        "Quemchi",
        "Quinchao",
        "Río Negro",
        "San Juan de la Costa",
        "San Pablo"
      ]
    },
    {
      "region": "Aisén del Gral. Carlos Ibáñez del Campo",
      "numero": "XI",
      "index": "11",
      "comunas": [
        "Aisén",
        "Chile Chico",
        "Cisnes",
        "Cochrane",
        "Coihaique",
        "Guaitecas",
        "Lago Verde",
        "O’Higgins",
        "Río Ibáñez",
        "Tortel"
      ]
    },

  

    {
      "region": "Magallanes y de la Antártica Chilena",
      "numero": "XII",
      "index": "12",
      "comunas": [
        "Antártica",
        "Cabo de Hornos (Ex Navarino)",
        "Laguna Blanca",
        "Natales",
        "Porvenir",
        "Primavera",
        "Punta Arenas",
        "Río Verde",
        "San Gregorio",
        "Timaukel",
        "Torres del Paine"
      ]
    },

    {
      "region": "Metropolitana de Santiago",
      "numero": "MET",
      "index": "13",
      "comunas": [
        "Alhué",
        "Buin",
        "Calera de Tango",
        "Cerrillos",
        "Cerro Navia",
        "Colina",
        "Conchalí",
        "Curacaví",
        "El Bosque",
        "El Monte",
        "Estación Central",
        "Huechuraba",
        "Independencia",
        "Isla de Maipo",
        "La Cisterna",
        "La Florida",
        "La Granja",
        "La Pintana",
        "La Reina",
        "Lampa",
        "Las Condes",
        "Lo Barnechea",
        "Lo Espejo",
        "Lo Prado",
        "Macul",
        "Maipú",
        "María Pinto",
        "Melipilla",
        "Ñuñoa",
        "Padre Hurtado",
        "Paine",
        "Pedro Aguirre Cerda",
        "Peñaflor",
        "Peñalolén",
        "Pirque",
        "Providencia",
        "Pudahuel",
        "Puente Alto",
        "Quilicura",
        "Quinta Normal",
        "Recoleta",
        "Renca",
        "San Bernardo",
        "San Joaquín",
        "San José de Maipo",
        "San Miguel",
        "San Pedro",
        "San Ramón",
        "Santiago",
        "Talagante",
        "Tiltil",
        "Vitacura"
      ]
    },

    {
      "region": "Los Ríos",
      "numero": "XIV",
      "index": "14",
      "comunas": [
        "Corral",
        "Futrono",
        "La Unión",
        "Lago Ranco",
        "Lanco",
        "Los Lagos",
        "Mariquina",
        "Máfil",
        "Paillaco",
        "Panguipulli",
        "Río Bueno",
        "Valdivia"
      ]
    },


    {
      "region": "Arica y Parinacota",
      "numero": "XV",
      "index": "15",
      "comunas": [
        "Arica",
        "Camarones",
        "General Lagos",
        "Putre"
      ]
    },

    
    {
      "region": "Ñuble",
      "numero": "XVI",
      "index": "16",
      "comunas": [
        "Bulnes",
        "Chillán Viejo",
        "Chillán",
        "Cobquecura",
        "Coelemu",
        "Coihueco",
        "El Carmen",
        "Ninhue",
        "Ñiquén",
        "Pemuco",
        "Pinto",
        "Portezuelo",
        "Quillón",
        "Quirihue",
        "Ránquil",
        "San Carlos",
        "San Fabián",
        "San Ignacio",
        "San Nicolás",
        "Treguaco",
        "Yungay"
      ]
    },

  ];//perdon por el jsonfile directo, estoy aprendiendo jquery que es mas facil para trabajar pero por ahora usare esto :( si estas en una idle recomiendo minimizar todo este pedazo apretando en la flechita a la izquierda


function regionSelect() {
   

    var ele = document.getElementById('region');
    for (var i = 0; i < regiones.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        ele.innerHTML = ele.innerHTML +
            '<option value="' + regiones[i]['index'] + '">' + regiones[i]['region'] + '</option>';
    }
}

function resetComuna(){
    var ele = document.getElementById('comuna');
    ele.innerHTML='';
    ele.innerHTML=' <option value="" selected="selected">Seleccione una comuna</option>';


}

function comunaSelect(){
    resetComuna();
    var ele = document.getElementById('comuna');
    var selreg= parseInt(document.getElementById('region').value, 10)-1

    for (var i=0 ; i <regiones[selreg]['comunas'].length; i++){

        ele.innerHTML = ele.innerHTML +
        '<option value="' + regiones[selreg]['comunas'][i] + '">' + regiones[selreg]['comunas'] [i]+ '</option>';
    }


}




function initApp(){
    regionSelect();

}


function enableOther(bloque,id){

    let selection=document.getElementById(id).value;
  
    var bloquechar=bloque.slice(-1);
    let otroid='otro-'+bloquechar+''
    if(selection === "9"){
        
        var NewForm = document.getElementById(otroid);
        NewForm.innerHTML= "Otro tipo<br><br><input type='text'  size='40' maxlength='40' required='required'/></div>"
    
        
    }


    else{
      //let truquitoen= 'enableOther("'+bloque+'",this.id)';
      //document.getElementById(bloque).innerHTML="<div class='leyenda'>Tipo</div><select id='"+id+"' required='required' onchange='"+truquitoen+"'><option value='' selected='selected'>Seleccione un tipo</option><option value='1'>Perro</option><option value='2'>Gato</option><option value='3'>Pez</option><option value='4'>Tortuga</option><option value='5'>Hamster</option><option value='6'>Loro</option><option value='7'>Iguana</option><option value='8'>Araña</option><option value='9'>Otro</option></select></div>"
      
      var NewForm = document.getElementById(otroid);
      NewForm.innerHTML= ""
      

    }



}


function abrirCollapsable(){


    let coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
            }
  });
}
}



function zoomIn(id){


    let Img =  document.getElementById(id);
   
    let currWidth = Img.clientWidth;
    let currHeight = Img.clientHeight;
    if(currWidth == 800 && currHeight== 600 ){
        zoomOut(id);
    } else{
        Img.style.width = 800 + "px";
        Img.style.height = 600 + "px";
    } 
}

function zoomOut(id){



    let myImg = document.getElementById(id);
        myImg.style.width = 320 + "px";
        myImg.style.height = 240 + "px";
}


var Petcounter=1;
var Petlimit=20; //Se coloco un limite de mascotas a agregar pues si se deja libre entonces podria ser posible un spam de mascotas


function addPet(){
    if (Petcounter == Petlimit)  {
         alert("You have reached the limit of adding " + Petcounter + " Pets");
    }
    else {
        
         Petcounter++;
         photoscount.push(1);
         var NewForm = document.createElement('div');
         let actualindex=Petcounter-1;
         let truquitoadd= 'addInput("grupo-fotos'+Petcounter.toString()+'",'+actualindex.toString()+')'
         let truquitoenable= 'enableOther("seleccion-bloque'+Petcounter.toString()+'",this.id)'
         // Then add the content (a new input box) of the element.
        NewForm.innerHTML = " <div class='leyenda'>Mascota "+Petcounter.toString()+"</div>         <div class='seccion'>        <div class='entrada'>           <div class='seleccion' id='seleccion-bloque"+Petcounter.toString()+"'>      <div class='leyenda'>Tipo</div>   <select  name='tipo-mascota' id='tipo-mascota"+Petcounter.toString()+"' required='required'  onchange='"+truquitoenable+"'>  <option value='' selected='selected'>Seleccione un tipo</option> <option value='1'>Perro</option> <option value='2'>Gato</option> <option value='3'>Pez</option> <option value='4'>Tortuga</option>   <option value='5'>Hamster</option> <option value='6'>Loro</option>  <option value='7'>Iguana</option>  <option value='8'>Araña</option> <option value='9'>Otro</option> </select><div id='otro-"+Petcounter.toString()+"'></div> </div></div><div class='entrada'> <div class='leyenda'>Edad en Años</div> <input type='text' name='edad-mascota' id='edad-mascota"+Petcounter.toString()+"' size='5' maxlength='3' required='required'/></div><div class='entrada'><div class='leyenda'>Color</div><input name='color-mascota' type='text' id='color-mascota"+Petcounter.toString()+"' size='30' maxlength='30' required='required'/></div><div class='entrada'><div class='leyenda'>Raza</div><input name='raza-mascota' type='text' id='raza-mascota"+Petcounter.toString()+"' size='30' maxlength='30' required='required'/></div><div class='entrada'><div class='leyenda'>Esterilizado</div><select name='esterilizado-mascota' id='esterilizado-mascota"+Petcounter.toString()+"' required='required'><option value='' selected='selected'>Seleccione una opcion</option><option value='1'>Si</option><option value='2'>No</option><option value='3'>No aplica</option></select></div><div class='entrada'><div class='leyenda'>Vacunas al dia</div><select name='vacunas-mascota' id='vacunas-mascota"+Petcounter.toString()+"' required='required'><option value='' selected='selected'>Seleccione una opcion</option><option value='1'>Si</option><option value='2'>No</option><option value='3'>No aplica</option></select></div><div class='entrada'><div class='leyenda'>Foto</div><div class='grupofotos' id='grupo-fotos"+Petcounter.toString()+"'><input name='foto-mascota' type='file' id='foto-mascota1-"+Petcounter.toString()+"' required='required' accept='image/*' ></div><button id='agregar-foto"+Petcounter.toString()+"' type='button' onclick='"+truquitoadd+"'>Agregar otra foto</button></div></div>";
     
         // Finally put it where it is supposed to appear.
         document.getElementById("seccion-mascotas").appendChild(NewForm);
         
    }
}




let photolimit=5;
function addInput(grupo,index){
     if (photoscount[index] == photolimit)  {
          alert("You have reached the limit of adding " + photolimit + " inputs");
     }
     else {
          var grupochar=grupo.slice(-1);
          photoscount[index]++;
          var NewInput = document.createElement('div');

          // Then add the content (a new input box) of the element.
          NewInput.innerHTML = " <input name='foto-mascota' type='file' id='foto-mascota"+photoscount[index].toString()+"-"+grupochar+"' required='required' accept='image/*' >";
      
          // Finally put it where it is supposed to appear.
          document.getElementById(grupo).appendChild(NewInput);
          
     }
}

function closeError(){
  errores=[];
  let contenedor = document.getElementById('error');
  contenedor.innerHTML="";
  contenedor.style.display = 'none';


}

function mostrarError() {

  let contenedor = document.getElementById('error');
  let text = "";
  for (i = 0; i < errores.length; i++) {
      text += errores[i] + '<br>';
    }


  let close='<button  type="button" onclick="closeError()">Cerrar errores</button>';
  text+=close;
  contenedor.innerHTML = text;

  contenedor.style.display = 'block';
  contenedor.style.fontWeight = '800';

}


function confirmation() {
    let  conf=confirm("Esta seguro que quiere enviar el formulario?");
    if(conf && validacionFormulario() ){
     
        document.getElementById('miformulario').submit();
        alert("Hemos recibido su información, muchas gracias por colaborar");
    }

  }



function showTables(){

  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);


}
console.log('app v1.0'); // stack trace