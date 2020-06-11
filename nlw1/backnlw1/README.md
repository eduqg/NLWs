# Backend Next Level Week 1 - Ecoleta

yarn add init -y

yarn add express

yarn add @types/express

Para node 'entender javascript'

```console
yarn add ts-node -D
yarn add typescript -D
npx ts-node src/server.ts
```

Dará um erro, pois precisamos definir um arquivo de configuração do Typescript. tsc é a abreviação de typescript. Crie o arquivo com:

```console
npx tsc --init

```

Executar servidor com

```console
npx ts-node src/server.ts
```

Para atualizar servidor automaticamente.

```console
yarn add ts-node-dev -D
```

Alterar package.json

"dev": "ts-node-dev --no-notify src/server.ts",

Utilizar 

```console
yarn dev
```

### ORM

```console
yarn add knex sqlite3
```

#### Migrations

Criar na mão arquivos de migration

```js
export async function up() {

}

export async function down() {
  
}
```

Criar arquivo knexfile.ts na raiz

```console
sudo apt-get install sqlite3

```

Executar migração
```console
npx knex migrate:latest --knexfile knexfile.ts migrate:latest
```

Instalar extensão SQlite, ctrl+shift+p, abrir database.sqlite abrir database do projeto, desta forma estará na lateral do vscode.

Para imagens

```console
yarn add multer
yarn add @types/multer -D
```

Para validações no backend
```console
yarn add celebrate
yarn add @types/hapi__joi -D
```

```console

```

```console

```

```console

```