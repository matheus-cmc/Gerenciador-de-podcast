export enum contentType {
  // Aplicação
  JSON = "application/json",
  JSON_PATCH = "application/json-patch+json",
  JSON_MERGE_PATCH = "application/merge-patch+json",
  
  // Texto
  HTML = "text/html",
  XML = "application/xml",
  PLAIN = "text/plain",
  CSS = "text/css",
  CSV = "text/csv",
  JAVASCRIPT = "text/javascript",
  MARKDOWN = "text/markdown",
  EVENT_STREAM = "text/event-stream",
  
  // Formulários
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  MULTIPART_FORM_DATA = "multipart/form-data",
  
  // Mídia
  PDF = "application/pdf",
  OCTET_STREAM = "application/octet-stream",
  ZIP = "application/zip",
  
  // Imagens
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  WEBP = "image/webp",
  SVG = "image/svg+xml",
  
  // Áudio/Video
  MP4 = "video/mp4",
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  
  // GraphQL/Protobuf
  GRAPHQL = "application/graphql",
  PROTOBUF = "application/protobuf",
  YAML = "application/yaml",
  
  // Segurança
  JWT = "application/jwt"
}