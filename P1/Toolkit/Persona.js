/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.JTS";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/jesusts99/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Dolores Martín Mateos",
				Photo: "dolores.jpeg",
				Quote: "No importa la edad; hay demasiadas aventuras ahí fuera esperando a ser vividas",
				Age: 66,
				Occupation: "Actualmente jubilada, fue asistente personal",
				Family: "Soltera, sus padres fallecieron hace unos años",
				Location: "Granada",
				Character: "Es activa y aventurera; le gusta disfrutar y conocer sitios nuevos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Viajar y visitar otras ciudades", "Aumentar su conocimiento acerca del patrimonio histórico, gastronómico y cultural de otros lugares del mundo"],
				Frustrations: ["Nunca ha tenido un teléfono móvil y no dispone de ninguna persona que pueda ayudarla en este aspecto.", "Le gustaría viajar a muchos sitios, aunque antes de visitar una ciudad prefiere conocer un poco sobre la misma y saber qué ofrece para saber si merece la pena ir allí."],
				Bio: "Es de Granada y ha trabajado como asistente personal desde los 18 años. Debido al sacrificio que supuso su trabajo, no tuvo oportunidad de viajar ni conocer a gente en el pasado. Sus padres fallecieron hace unos años y se jubiló el año pasado. Ante esta situación, decide tomar las riendas de su vida y empezar a disfrutar con lo que realmente le gusta : viajar y conocer sitios nuevos. De este modo, se ha comprado un teléfono móvil con el objetivo de conocer más a fondo las ciudades que tenga en mente visitar, teniendo Madrid como primer destino.",
				Tech: [
					{ Name: "TIC/Internet", Value: 0.5 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 0.5 }
					
				], 
                Contextos: "Después de casi 50 años de trabajo, ha decidido cumplir su sueño de viajar y conocer nuevos lugares, empezando por Madrid, una ciudad que siempre quiso visitar.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 0 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Alejandro Reche Lorenzo",
				Photo: "alejandro.jpeg",
				Quote: "La vida te pone obstáculos. Los límites los pones tú",
				Age: 21,
				Occupation: "Graduado en Filología Hispánica, actualmente buscando trabajo.",
				Family: "Vive con sus padres, pero quiere independizarse y vivir en una nueva ciudad",
				Location: "Castropol (Asturias)",
				Character: "Fuerte y decidido, no para de luchar hasta que alcanza sus objetivos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Quiere conocer mejor Madrid para saber si la cuidad es un buen sitio dónde comenzar una nueva vida.", "Necesita utilizar una aplicación móvil para conocer más sobre Madrid sin necesidad de ir allí en persona debido a las restricciones actuales."],
				Frustrations: ["Alejandro quiere conocer la ciudad, aunque debido a las limitaciones de movilidad actuales debe hacerlo mediante su teléfono móvil.", "La mayoría de aplicaciones turísticas no están adaptadas a sus características."],
				Bio: "Alejandro es de Castropol, un pequeño pueblo de Asturias. Cuando era muy pequeño, sus padres detectaron que tenía dificultades visuales y motrices, aspecto que se ha ido intensificando a lo largo de los años. Para él, la falta de adaptación de las infraestructuras le ha dificultado enormemente en su vida cotidiana. Después de haber finalizado sus estudios como Filólogo Hispánico vía telemática, ha decidido comenzar una nueva vida en Madrid. Sin embargo, antes de emprender esta aventura, quiere informarse acerca de la cuidad para saber si es el sitio ideal dónde vivir.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "El usuario quiere conocer mejor la ciudad mediante una aplicación móvil de turismo para saber si es el lugar idóneo dónde trabajar y vivir." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
