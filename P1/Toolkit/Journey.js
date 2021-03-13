/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.JTS";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/jesusts99/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
				Id: 0,
				Name: "Dolores Martín Mateos",
                Photo: "dolores.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere realizar un viaje a Madrid la próxima semana",
                touch1: "Calendario",
                feel1: "4",
                con1: "Utilizar el dispositivo móvil para buscar información sobre los lugares a visitar, rutas a seguir y sitios más llamativos.",
                ima1: "cartoon-thinking.png",
				
                /*** PASO #2: DECISION ***/ 
                goal2: "Intenta descargar una aplicación de turismo en Madrid",
                touch2: "Teléfono Móvil",
                feel2: "5",
                con2: "Consigue instalar la aplicación y entrar a la página principal. Parece que la interfaz de la aplicación es bastante intuitiva y está contenta porque parece que la búsqueda de información va a ser sencilla. ",
                ima2: "cartoon-phone-sitting.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Accede a las principales actividades turísticas registradas en la aplicación",
                touch3: "Teléfono Móvil",
                feel3: "1",
                con3: "Para acceder a las actividades de interés la aplicación tarda bastante tiempo en descargar los mapas, lo que le hace perder la paciencia.",
                ima3: "cartoon-MobileAngry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca dentro de las actividades ofertadas aquellas que resultan de mayor interés",
                touch4: "Teléfono Móvil",
                feel4: "4",
                con4: "Encuentra numerosas opciones con información muy detallada, lo que le resulta de gran ayuda a la hora de planificar su viaje y descubrir sitios muy interesantes.",
                ima4: "cartoon-phone.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Analiza los resultados ofrecidos por la aplicación",
                touch5: "Teléfono Móvil",
                feel5: "2",
                con5: "A pesar de la información ofrecida, al no disponer de un sistema de valoración no consigue identificar cuáles son las mejores actividades a realizar. Además, también encuentra un poco difícil organizar toda la información, echando en falta la presencia de rutas establecidas que incorporasen un pack de actividades.",
                ima5: "cartoon-Mobilehard.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue planificar su viaje, aunque le ha resultado un poco complicado",
                touch6: "Teléfono Móvil",
                feel6: "3",
                con6: "Ha conseguido planificar un itinerario con las actividades que más le han llamado la atención, aunque el proceso le ha resultado un poco tedioso.",
                ima6: "cartoon-deciding.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Alejandro Reche Lorenzo",
                Photo: "alejandro.jpeg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Lleva demasiado tiempo viviendo con sus padres y ha estado pensando en independizarse e irse a vivir a Madrid",
                touch1: "Teléfono Móvil",
                feel1: "5",
                con1: "Quiere irse a Madrid a trabajar, aunque necesita saber si la ciudad tiene los suficientes atractivos y facilidades como para establecerse allí de forma permanente.",
                ima1: "cartoon-thinking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Instalar una aplicación de turismo de la ciudad para comprobar si la ciudad cumple con sus expectativas",
                touch2: "Teléfono Móvil",
                feel2: "4",
                con2: "Consigue instalar la aplicación fácilmente y además comprueba que funciona correctamente con TalkBack, lo que le alivia después de haber tenido problemas en relación a este aspecto a lo largo de los últimos años.",
                ima2: "cartoon-phone.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Investiga los eventos planificados para los últimos meses",
                touch3: "Teléfono Móvil",
                feel3: "3",
                con3: "Encuentra algunos eventos interesantes, aunque no hay demasiada información, especialmente en relación a la adaptación de las distintas infraestructuras a una silla de ruedas.",
                ima3: "cartoon-looking.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca los mejores restaurantes de cocina tradicional en Madrid",
                touch4: "Teléfono Móvil",
                feel4: "1",
                con4: "Ha encontrado numerosos restaurantes, pero no hay información sobre la comida que ofrecen, simplemente cómo acceder a ellos y un poco de su historia.",
                ima4: "cartoon-MobileAngry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Intenta buscar una forma de comunicarse con el resto de usuarios",
                touch5: "Teléfono Móvil",
                feel5: "2",
                con5: "Tras su descontento con la falta de información sobre las comida en los restaurantes, intenta buscar algún tipo de foro o sección de comentarios dónde preguntar sobre este tema, aunque no encuentra este tipo de recurso en la aplicación.",
                ima5: "cartoon-Mobilehard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue obtener alguna información, aunque siente que no la suficiente",
                touch6: "Teléfono Móvil",
                feel6: "3",
                con6: "A pesar de que hay algunas funciones de utilidad, siente que ha perdido el tiempo con la aplicación, echando en falta más información en algunas secciones.",
                ima6: "cartoon-KO.png",
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



