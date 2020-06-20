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
			}
			if(intenseX<intenseY && intenseY > slideMinimunLength)
			{
				if(directionY==1)action("up");
				else action("down");
			}
			else action("simple");
		},
		false);

		var $p = document.querySelector("p");
		var $point = document.querySelector("#point");

		function action(acao)
		{
			
			
			if(acao==$p.className){
				
				let type = 0, max = 5;

				type = Math.floor(Math.random() * Math.floor(5))
				var $class, $content;

				switch(type)
				{
					case 0: $class = "left";   $content = "<"; break;
					case 1: $class = "right";  $content = ">"; break;
					case 2: $class = "up";     $content = "<"; break;
					case 3: $class = "down";   $content = ">"; break;
					case 4: $class = "simple"; $content = "."; break;
				}
				points++;
				$point.textContent = points;
				let anim1, anim2;
				if(acao == "up" || acao == "down")
				{
					anim1 = "pAnimB";
					anim2 = "pAnimB2";
				}
				else
				{
					anim1 = "pAnim";
					anim2 = "pAnim2";
				}
				$p.style.backgroundColor = "#005f00";
				$p.ontransitionend = function()
					{
						$p.ontransitionend = function()
						{
							$p.ontransitionend = function()
							{
								$p.ontransitionend = function()
								{
									$p.ontransitionend = function()
									{
										$p.ontransitionend = function()
										{
											$p.ontransitionend = function()
											{
												$p.ontransitionend = function()
												{
													$p.textContent= $content;
													$p.className= $class;
													$p.style.backgroundColor ="#d0d0d0"
												};
												$p.classList.remove(anim2);
											};
											$p.classList.add(anim2);					
										}
										$p.classList.remove(anim1);
									};
									$p.classList.add(anim1);
								};
								$p.classList.remove(anim2);					
							}
							$p.classList.add(anim2);
						};
						$p.classList.remove(anim1);
					};
				$p.classList.add(anim1);
			}
			if(acao=="simple"){}
		}