
import cgi
from save_data import HackBoxDatabase

print("Content-type: text/html\r\n\r\n")

form = cgi.FieldStorage()
hbdb = HackBoxDatabase("root", "")


html = f'''
    <!DOCTYPE html>
<!--suppress ALL -->
<head>
    <meta charset="UTF-8">
    <title>Hackbox</title>
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <script src="validador.js"></script>
</head>


<body>

<div class="menu entrada">

    <div class="entrada">
        <a href="https://google.cl">Home</a>
    </div>

    <div class="entrada">
        <a href="https://hackbox.html">Favoritos</a>
    </div>

    <div class="entrada" style="border-right: 0">
        <a href="ljfklsd">Configuraciones</a>
    </div>

</div>

<div class="titulo negrita">Hackbox</div>
<div class="main">

    

        Su mensaje informacion se guardo con exito!!!

    

</div>



</body>


</html>
'''

region={
    
    '1':'Tarapaca​',"2":"Antofagasta","3":"Atacama","4":"Coquimbo","5":"Valparaíso","6":"Libertador General Bernardo O’Higgins","7":"Maule","8":"Biobío","9":" La Araucanía",
"10":"Los Lagos","11":"Aysén del General Carlos Ibáñez del Campo","12":"Magallanes y Antártica Chilena","13":"Metropolitana","14":"Los Ríos","15":"Arica y Parinacota","16":"Ñuble"}


id_comunas={

 "Alto Hospicio":0,"Camiña":1, "Colchane":2,"Huara":3, "Iquique":4,"Pica":5,"Pozo Almonte":6 ,"Antofagasta":7,"Calama":8,"María Elena":9,"Mejillones":10,"Ollagüe":11,
"San Pedro de Atacama":12,"Sierra Gorda":13,"Taltal":14,"Tocopilla":15,"Alto del Carmen":16,"Caldera":17,"Chañaral":18,"Copiapó":19,"Diego de Almagro":20,"Freirina":21,"Huasco":22,
"Tierra Amarilla":23,"Vallenar":24,"Andacollo":25,"Canela":26,"Combarbalá":27,"Coquimbo":27,"Illapel":28,"La Higuera":29,"La Serena":30,"Los Vilos":31,"Monte Patria":32,
"Ovalle":33,"Paiguano":34,"Punitaqui":35,"Río Hurtado":36,"Salamanca":37,"Vicuña":38 "Algarrobo":39,"Cabildo":40,"Calera":41,"Calle Larga":42,"Cartagena":43,"Casablanca":44,
"Catemu":45,"Concón":46,"El Quisco":47,"El Tabo":48,"Hijuelas":49,"Isla de Pascua":50,"Juan Fernández":51,"La Cruz":52,"La Ligua":53,"Limache":54,"Llaillay":55,"Los Andes":56,
"Nogales":57,"Olmué":58,"Panquehue":59,"Papudo":60,"Petorca":61,"Puchuncaví":62,"Putaendo":63,"Quillota":64,"Quilpué":65,"Quintero":66,"Rinconada":67,"San Antonio":68,
"San Esteban":69,"San Felipe":70,"Santa María":71,"Santo Domingo":72,"Valparaíso":73,"Villa Alemana":74,"Viña del Mar":75,"Zapallar":76, "Chimbarongo":77,"Chépica":78,"Codegua":79,"Coinco":80,
"Coltauco":81,"Doñihue":82,"Graneros":83,"La Estrella":84,"Las Cabras":85,"Litueche":86,"Lolol":87,"Machalí":88,"Malloa":89,"Marchihue":90,"Nancagua":91,"Navidad":92,"Olivar":93,"Palmilla":94,"Paredones":95,"Peralillo":96,
"Peumo":97,"Pichidegua":98,"Pichilemu":99,"Placilla":100,"Pumanque":101,"Quinta de Tilcoco":102,"Rancagua":103,"Rengo":104,"Requínoa":105,"San Fernando":106,"San Francisco de Mostazal":107,"San Vicente de Tagua Tagua":108,"Santa Cruz":109
"Cauquenes":110,"Chanco":111,"Colbún":112,"Constitución":113,"Curepto":114,"Curicó":115,"Empedrado":116,"Hualañé":117,"Licantén":118,"Linares":119,"Longaví":120,"Maule":121,"Molina":122,
"Parral":123,"Pelarco":124,"Pelluhue":125,"Pencahue":126,"Rauco":127,"Retiro":128,"Romeral":129,"Río Claro":130,"Sagrada Familia":131,"San Clemente":132,"San Javier de Loncomilla":133,
"San Rafael":134,"Talca":135,"Teno":136,"Vichuquén":137,"Villa Alegre":138,"Yerbas Buenas":139, "Alto Biobío":140,"Antuco":141,"Arauco":142,"Cabrero":143,"Coronel":144,"Curanilahue":145,
"Florida":146,"Hualpén":147,"Hualqui":148,"Laja":149,"Lebu":150,"Los Álamos":151,"Los Ángeles":152,"Lota":153,"Mulchén":154,"Nacimiento":155,"Negrete":156,"Penco":157,
"Quilaco":158,"Quilleco":159,"San Pedro de la Paz"160,"San Rosendo":161,"Santa Bárbara":162,"Santa Juana":163,"Talcahuano":164,"Tirúa":165,"Tomé":166,"Tucapel":167,"Yumbel":168
 "Angol":169,"Carahue":170,"Cholchol":171,"Collipulli":172,"Cunco":173,"Curacautín":174,"Curarrehue":175,"Ercilla":176,"Freire":177,"Galvarino":178,"Gorbea":179,"Lautaro":180,"Loncoche":181,
"Lonquimay":182,"Los Sauces":183,"Lumaco":184,"Melipeuco":185,"Nueva Imperial":186,"Padre las Casas":187,"Perquenco":188,"Pitrufquén":189,"Pucón":190,"Purén":191,
"Renaico":192,"Saavedra":193,"Temuco":194,"Teodoro Schmidt":195,"Toltén":196,"Traiguén":197,"Victoria":198,"Vilcún":199,"Villarrica":200,"Ancud":201,"Calbuco":202,"Castro":203,
"Chaitén":204,"Chonchi":205,"Cochamó":206,"Curaco de Vélez":207,"Dalcahue":208,"Fresia":209,"Frutillar":210,"Futaleufú":211,"Hualaihué":212,"Llanquihue":213,"Los Muermos":214,
 "Maullín":215,"Osorno":216,"Palena":217,"Puerto Montt":218,"Puerto Octay":219,"Puerto Varas":220,"Puqueldón":221,"Purranque":222,"Puyehue":223,"Queilén":224,
"Quellón":225,"Quemchi":226,"Quinchao":227,"Río Negro":228,"San Juan de la Costa":229,"San Pablo":230,"Aisén":231,"Chile Chico":232,"Cisnes":233,"Cochrane":234,
 "Coihaique":235,"Guaitecas":236,"Lago Verde":237,"O’Higgins":238,"Río Ibáñez":239,"Tortel":240,"Antártica":241,"Cabo de Hornos (Ex Navarino)":242,"Laguna Blanca":243,"Natales":244,
"Porvenir":245,"Primavera":246,"Punta Arenas":247,"Río Verde":248,"San Gregorio":249,"Timaukel":250,"Torres del Paine":251,"Alhué":252,"Buin":253,"Calera de Tango":254,
"Cerrillos":256,"Cerro Navia":257,"Colina":258,"Conchalí":259,"Curacaví":260,"El Bosque":261,"El Monte":262,"Estación Central":263,"Huechuraba":264,"Independencia":265,"Isla de Maipo":266,
"La Cisterna":267,"La Florida":268,"La Granja":269,"La Pintana":270,"La Reina":271,"Lampa":272,"Las Condes":273,"Lo Barnechea":274,"Lo Espejo":275,"Lo Prado";276,"Macul":277,
"Maipú":278,"María Pinto":279,"Melipilla":280,"Ñuñoa":281,"Padre Hurtado":282,"Paine":283,"Pedro Aguirre Cerda":284,"Peñaflor":285,"Peñalolén":286,"Pirque":287,"Providencia":288,
"Pudahuel":289,"Puente Alto":290,"Quilicura":291,"Quinta Normal":292,"Recoleta":293,"Renca":294,"San Bernardo":295,"San Joaquín":296,"San José de Maipo":297,"San Miguel":298,"San Pedro":299,
"San Ramón":300,"Santiago":301,"Talagante":302,"Tiltil":303,"Vitacura":304,"Corral":305,"Futrono":306,"La Unión":307,"Lago Ranco":308,"Lanco":309,"Los Lagos":310,"Mariquina":311,
"Máfil":312,"Paillaco":313,"Panguipulli":314,"Río Bueno":315,"Valdivia":316,"Arica":317,"Camarones":318,"General Lagos":319,"Putre":320,"Bulnes":321,
"Chillán Viejo":322,"Chillán":323,"Cobquecura":324,"Coelemu":325,"Coihueco":326,"El Carmen":327,"Ninhue":328,"Ñiquén":329,"Pemuco":330,
"Pinto":331,"Portezuelo":332,"Quillón":333,"Quirihue":334,"Ránquil":335,"San Carlos":336,"San Fabián":337,"San Ignacio":338,"San Nicolás":339,"Treguaco":340,"Yungay":341

}



print(html)
data_comuna=(
     form['comuna'].value, form['region'].value
)
data_region=


(

    regiones[form['region'].value]
)
data_domicilio=(


)
data_tipo
data_info
data_fotos = (
     form['calle'].value, form['numero'].value, form['sector'].value, form['nombre'].value, form['email'].value, form['celular'].value, form['tipo-mascota'].value
    , form['edad-mascota'].value, form['color-mascota'].value , form['raza-mascota'].value, form['esterilizado-mascota'].value, form['vacunas-mascota'].value , form['foto-mascota'].value
)

)
#print(data)
hbdb.save_data(data) 
