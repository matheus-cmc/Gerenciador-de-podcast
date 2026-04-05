# Nome do Aplicativo
podcast menager

### Descrição
app estilo netflix, onde é possivel centralizar episódios do podcast separados por categorias

### Domínio
podcasts feito em vídeos

### features

-Listar os episódios podcasts em sessões de categorias
    -[humor, mentalidade, , saúde,bodybuilder]
-Filtrar episódio por nome de podcast

### como vou implementar
 
 vou retonar um uma API REST(json) o nome do podcast, nome do episódio, a imagem de capa, categorias e link

 GET: retorna lista de episódios

 response:
 ```js
 [
 {
    podcastName:"flow",
    episode: "CBUM-Flow #319",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLCeNGQeHGq3EN9VBoh7CCsKQU0L4Q"
    link:"https://support.google.com/youtube?p=ppp&nohelpkit=1"
    categories:["saúde, bodybuilder"]
 },

  podcastName:"flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLDgyHAUb9vIwNYXr8G6ZPXKWyU__A"
    link:"https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUXZmxvdyBydWJlbnMgYmFycmljaGVsbG8%3D1"
    categories:["esporte", "corrida"]

 ]
 ```

 GET: retorna lista de epsiodios baseado em um parâmentro enviando pelo cliente do nome do podecast