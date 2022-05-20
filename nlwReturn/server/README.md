# Server NLW Return Widget

```console
yarn init -y
yarn add typescript @types/node ts-node-dev -D
```

Criar tsconfig.json

```console
npx typescript --init
ou
npx tsc --init
```

Mudar no tsconfig.json
es2016 para es2020

Em produção, por exemplo, suporta async apos a compilação, conferir dist.

Node já entende sintaxe nova, evita compilações desnecessárias.

Alterar outDir e rootDir

```console
npx tsc
```

```console
yarn add express
yarn add @types/express -D
```

Vamos usar SQLite, Prisma (ORM) Facilita operações com banco de dados.

Prisma

```console
yarn add prisma -D
yarn add @prisma/client
npx prisma init
```

Alterar na pasta prisma para criar tabelas. Realizar migrações.

```console
npx prisma migrate dev
npx prisma studio
```

Nodemailer

```console
yarn add nodemailer
yarn add @types/nodemailer -D
```

Mailgun, sparkpost, mailchimp, mailtrap, ethereal

SOLID

1. Single Responsibility Principle

   Cada classe tem uma responsabilidade única;

2. Open/Closed Principle

   As classes da aplicação devem ser abertas para  extensão mas fechadas para modificação;

3. Liskov Substitution Principle

   Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;

4. Interface Segregation Principle

   class Impessora implements Imprimir, Digitalizar, Escanear

5. Dependency Inversion Principle

   classe consegue consumir serviço externo e ele pode ser substiuível

Repositories: servem para a comunicação com o banco de dados

Teste

```console
yarn add jest -D
npx jest --init

Jest com typescript

yarn add ts-node -D
```

Swc projeto em rust, compila javascript. Vamos usar para rodar testes.

```console
yarn add -D jest @swc/core @swc/jest
yarn add @types/jest -D 
```

Deploy

Mudar de sqlite para postgres. Mudar DATABASE_URL. tsconfig adicionar ultima linha


```console
npx tsx
```

"build": "npx tsc",
"start": "node dist/server.js",

Railway app para deploy, semelhante ao heroku

Provision postgres

```console

```


```console

```


```console

```


```console

```