
dockerlogin:
	docker login -u user -p 'password' registry.io

release: dockerlogin
	npm test --prefix src/
	sudo docker build -t bennu-challenge:latest .
	sudo docker push bennu-challenge:latest

run: 
	docker build -t bennu-challenge:latest .
	docker run -d -p 3030:3030 bennu-challenge:latest
