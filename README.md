# GTX

## O que faz

Essa extensão substitui a página interna mostrada quando o usuário abre uma nova guia sem especificar uma página para carregar (por exemplo, quando o usuário pressiona Ctrl/Cmd + T). A página de substituição é preenchida com uma home da GTX.

## Como rodar

Use a ferramenta de linha de comando [web-ext](https://www.npmjs.com/package/web-ext). As [instruções sobre como usar essa ferramenta estão aqui](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext).

Basicamente, na pasta que contém o ```manifest.json```, você irá executar:

```
$ web-ext run
```

Para fazer o build, use:

```
$ web-ext build
```
