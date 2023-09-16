# NLW IA

Notion
https://efficient-sloth-d85.notion.site/NLW-13-IA-dc54c0a8b5c04d8198cef71627852d73

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

Open AI, Vamos usar o whisper, para transcrição de audio e video

Criar secret key e colocar em env

Para ler variáveis de ambiente
instalar dotenv -D

```shell
yarn add dotenv -D
```


inset-0 seta todas as propriedades top, right, left, bottom para 0 no css

## ffmpeg

Com webassembly é possível rodar diferentes linguagens no navegador
ffmpeg possibilita converter arquivos de video e audio

"ffmpeg.wasm is a pure WebAssembly / JavaScript port of FFmpeg enabling video & audio record, convert and stream right inside browsers!"

ffmpeg.wasm

https://ffmpegwasm.netlify.app/docs/getting-started/installation

precisa de versão node 18


```shell
yarn add @ffmpeg/ffmpeg @ffmpeg/util
```

Para carregar dados iniciais pode ser utilizado react-query ou swr


Ajuda a escrever resposta da IA dinamicamente

```shell
yarn add ai
```


# Seed

 npx prisma db seed