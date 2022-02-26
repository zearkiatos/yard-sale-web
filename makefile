docker-dev:
	docker-compose -f docker-compose.develop.yml up

docker-build:
	docker-compose up --build

docker-down:
	docker-compose down