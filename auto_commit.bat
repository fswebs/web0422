:loop

	cd D:\조휘일T\web0422

	git init
	
	git pull
	
	git add --all
	
	git commit -m "auto commit"
	
	git push
	
	:: 3600초 대기
	TIMEOUT 3600
	
goto loop