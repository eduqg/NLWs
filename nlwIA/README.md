# NLW IA


## Web

pnpm: Cria link simbólico do pacote instalado e compartilha entre todos os projetos que utilizam.

npm e yarn nao compartilham, ficam salvos no node_modules

Tailwind -> https://tailwindcss.com/docs/installation

Radix ui -> https://www.radix-ui.com/themes/docs/overview/getting-started

Shadcn/ui -> componentes pré implementados https://ui.shadcn.com/




```console
yarn create vite
yarn
yarn dev
yarn add tailwindcss postcss autoprefixer
yarn add @types/node -D
npx tailwind init -p
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
```

Extensoes

tailwind, prisma, postcss



# Backend

```shell
yarn init -y
yarn add -D typescript @types/node tsx
yarn add fastify
```

tsx server para compilar typescript e rodar
fastify, framework para rotas http


https://httpie.io/
Serve para fazer uma requicao http via terminal


```shell
http localhost:3333
```

```shell
npx prisma init --datasource-provider sqlite
```

Adicionar no user settings json

  "[prisma]": {
    "editor.formatOnSave": true
  }

Criar models e migrar

```shell
  npx prisma migrate dev
  npx prisma studio
  ```