up:
	docker compose up -d --remove-orphans

logs:
	docker compose logs

install:
	docker compose exec -w /app dev bash -c "yarn install"

build:
	docker compose exec -w /app dev bash -c "yarn build"

start:
	docker compose exec -w /app dev bash -c "yarn start"
open:
	open http://localhost:3000