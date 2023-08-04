start:
	docker-compose up -d
	chmod +x ./scripts/check-database-ready.sh
	./scripts/check-database-ready.sh
	make init

stop:
	docker-compose down
	docker image rm app-test-express-react_app
	docker image rm app-test-express-react_server

init:
	docker-compose exec server npm run migration:run
