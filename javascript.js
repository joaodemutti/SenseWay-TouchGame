var $right = document.querySelector(".right,.down");
		var $left = document.querySelector(".left,.up");
		var points = 0;
		

		

		var moveX = 0; moveY = 0;

		document.addEventListener("touchstart",
		function(event){
			moveX = event.touches[0].screenX
			moveY = event.touches[0].screenY
		},
		false);

		document.addEventListener("touchend",
		function(event){
			moveX = event.changedTouches[0].screenX - moveX;
			moveY -= event.changedTouches[0].screenY;

			var directionX = 0; directionY = 0;

			directionX= -1;
			if(moveY<0)directionY= -1;
			if(moveX>0)directionX= 1;
			if(moveY>0)directionY= 1;
		
			var intenseX = moveX/directionX, intenseY = moveY/directionY;
			var slideMinimunLength = 20;
			if(intenseX>intenseY && intenseX > slideMinimunLength)
			{
				if(directionX==1)action("right");
				else action("left");
			}else{
			if(intenseX<intenseY && intenseY > slideMinimunLength)
			{
				if(directionY==1)action("up");
				else action("down");
			}
			else action("simple");}
		},
		false);

		var $p = document.querySelectorAll("p");
		var actual = 3;
		var $point = document.querySelector("#point");
		function sucessor(num,aray){
			if(num + 1 == aray.length)
			{
				return 0;
			}else
			{
				return num + 1;
			}
		}
		function antecessor(num,aray){
			if(num == 0)
			{
				return aray.length - 1;
			}else
			{
				return num - 1;
			}
		}
		function action(acao)
		{
			
			console.log(acao==$p[actual].classList[0]);
			console.log(acao+$p[actual].className);
			if(acao==$p[actual].classList[0])
				{ console.log("point");
				points++; $point.textContent = points;
				let type = 0, max = 5; //max of types

				type = Math.floor(Math.random() * Math.floor(max))
				var $class, $content;

				switch(type)
				{
					case 0: $class = "left";   $content = "<"; break;
					case 1: $class = "right";  $content = ">"; break;
					case 2: $class = "up";     $content = "<"; break;
					case 3: $class = "down";   $content = ">"; break;
					case 4: $class = "simple"; $content = "."; break;
				}
				
				let time = 230;
				animar(time,actual,$class,$content);

			}
			if(acao=="simple"){}
		}

	function proximo(mActual,mClass,mContent)
	{
		
		for(var i = 3; i >= 0; i--)
		{
			$p[i].classList.replace($p[i].classList[0], $p[antecessor(i,$p)].classList[0])
			$p[i].textContent = $p[antecessor(i,$p)].textContent;
		}
		$p[mActual + 1].classList.replace($p[mActual + 1].classList[0],mClass);
		$p[mActual + 1].textContent = mContent;
	}

	function animar(time,mActual,mClass,mContent)
	{
			$p[0].animate([ { bottom: "120vw" },
                  { bottom: "90vw" } ],time).onfinish = function(event){$p[3].style.opacity = 1;proximo(mActual,mClass,mContent)};
			$p[1].animate([ { bottom: "90vw" },
                  { bottom: "60vw" } ],time);
			$p[2].animate([ 
				{ 
					bottom: "60vw",
					fontSize: "13vw",
					width:"22vw",
					height:"18.5vw",
					paddingTop: "3.5vw",
					left:"39vw"
				},
                { 
                  	bottom: "6vw",
                  	fontSize:"20vw",
					width:"45vw",
					height:"34vw",
					paddingTop: "11vw",
					left:"27.5vw"
                }],time);
			$p[4].style.display = "block"
			$p[4].animate([
				{
					opacity:0,
					bottom:"150vw"
				},
				{
					opacity:1,
					bottom:"120vw"
				}],time);
			$p[3].style.opacity = 0;
			
	}