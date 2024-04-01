# Página de Vendas GoodLifePage

Este é um projeto de uma página de vendas desenvolvida com HTML, CSS (utilizando SASS) e JavaScript, com o framework Tailwind CSS.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- npm (gerenciador de pacotes do Node.js)

Além disso, você precisará de extensões para compilar o SASS em CSS e inicializar o Tailwind CSS.

## Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   ```

2. **Navegue até o diretório do projeto**

```bash
cd nome-do-projeto

```

3. **Instale as dependências do Node.js**

```bash
npm install

```

## Compilação SASS e Tailwind CSS

Para compilar o SASS para CSS e inicializar o TailwindCSS, siga esses passos:

1. **Certifique-se de ter o Tailwind CSS instalado localmente no projeto:**

```bash
npm install tailwindcss

```

2. **Compile o SASS utilizando alguma extensão como Live Sass Compiler e inicialize o Tailwind CSS:**

```bash
npx tailwindcss -i ./src/css/style.css -o ./src/css/output.css --watch

```

Certifique-se de que o caminho dos arquivos CSS está correto de acordo com a estrutura do seu projeto.

3. **Minificando arquivos**

O arquivo src/js/app.js esta sendo minificado para app.min.js pela extensão Minifier ao ser alterado, para ser carregado de forma mais leve no browser, caso sejam feitas modificações, não se esqueça de minificar o arquivo.

## Uso

Abra o arquivo index.html no seu navegador para visualizar a página de vendas. Você pode modificar os arquivos HTML, CSS (SASS) e JavaScript conforme necessário para personalizar a página de acordo com suas necessidades.

## Licença

Este projeto é licensiado sobre a [MIT License](https://opensource.org/licenses/MIT).
