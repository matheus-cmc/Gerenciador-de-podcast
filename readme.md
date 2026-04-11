# API de Podcasts

Este projeto é uma API simples em TypeScript que expõe endpoints HTTP para listar episódios de podcasts e filtrar por nome de podcast.

## Visão geral

- Linguagem: TypeScript
- Execução: Node.js com `tsx`
- Estrutura: diretório `src/` com separação entre controladores, serviços, repositórios, modelos, rotas e utilitários
- Fonte de dados: arquivo JSON local em `src/repositories/podcasts.json`

## Estrutura de pastas

- `src/app.ts` - trata requisições HTTP e faz roteamento interno para rotas definidas
- `src/server.ts` - cria e inicializa o servidor HTTP
- `src/routes/routes.ts` - define as rotas da API
- `src/controllers/podcasts-controller.ts` - implementa os handlers de API que respondem aos endpoints
- `src/services/` - contém a lógica de negócio para listar e filtrar episódios
- `src/repositories/` - contém o acesso aos dados armazenados em `podcasts.json`
- `src/models/` - define os modelos TypeScript usados pela API
- `src/utils/` - define constantes de métodos HTTP, tipos de conteúdo e códigos de status

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Execute em modo de desenvolvimento:

```bash
npm run start:dev
```

3. Ou execute com watch:

```bash
npm run start:watch
```

4. Para construir uma versão de produção e executá-la:

```bash
npm run dist
npm run start:dist
```

> O servidor usa a porta definida em `process.env.PORT` a partir do arquivo `.env`.

## Endpoints disponíveis

### Listar todos os episódios

- Método: `GET`
- Rota: `/api/list`
- Retorno: JSON com todos os episódios de podcast

### Filtrar episódios por podcast

- Método: `GET`
- Rota: `/api/filter?p=<nome-do-podcast>`
- Exemplo: `/api/filter?p=flow`
- Retorno: JSON com os episódios que correspondem ao nome do podcast informado

## Modelo de dados

Os registros de podcast seguem o formato abaixo:

```ts
interface PodcastModel {
  podcastName: string;
  episode: string;
  videoID: string;
  categories: string[];
}
```

A resposta da API utiliza o modelo:

```ts
interface FilterPodcastsModel {
  statusCode: number;
  body: PodcastModel[];
}
```

## Observações importantes

- O repositório de dados lê diretamente `src/repositories/podcasts.json` usando `fs.readFileSync`.
- O endpoint de filtro extrai o parâmetro de consulta com `?p=` na URL.
- A API atualmente implementa apenas rotas `GET`.

## Melhorias sugeridas

- Adicionar tratamento de erros e retorno de status `400`/`500` quando necessário
- Suporte a rotas dinâmicas com parsing de query string mais robusto
- Substituir leitura síncrona de arquivo por leitura assíncrona ou banco de dados
- Validar entrada do usuário ao filtrar podcasts
