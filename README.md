# CRUDE Angular - Cadastro de Produto

> Status do Projeto: Concluido **:heavy_check_mark:**

## Curso JS Moderno COD3R.

### Desenvolvido em Angular 9

#### _BD json-server._

#### 1. Instalando e Iniciando CRUDE-ANGULAR/backend :heavy_check_mark:

    npm install
    npm start

#### 2. Instalando e Iniciando CRUDE-ANGULAR/frontend :heavy_check_mark:

    npm install
    npm start/ng serve

---

### Desenvolvendo DB.json

#### 1. Cria projeto (CRUDE-ANGULAR/backend/) :heavy_check_mark:

    npm init
    npm i json-server
    db.json

> Em package.json, adicionar em scripts :heavy_check_mark:

    "start": "json-server --watch db.json --port 3001"

---

### Desenvolvendo Aplicação Angular :heavy_check_mark:

1.  Instalar angular cli, caso não tenha sido instalado.

        npm i -g @angular/cli

2.  Criar o projeto responedendo as peguntas.

        ng new "nome do projeto"

3.  Adionar o angular material.

        ng add @angular/material

4.  Importar no app.modules:

    > - [x] toolbar
    > - [x] sidenav
    > - [x] list
    > - [x] LOCALE_ID
    > - [x] card
    > - [x] button
    > - [x] snack-bar
    > - [x] localePt
    > - [x] form-field
    > - [x] input
    > - [x] http
    > - [x] registerLocaleData
    > - [x] animations
    > - [x] forms
    > - [x] table.

    > Chamar registerLocaleData passando localePt.
    > Incluir LOCALE_ID em providers.

5.  Criar classe products

    > components/product/product/products.model.ts

6.  Criar os seguintes componentes:

    > Heard

        ng g c components/template/header

    > Footer

        ng g c components/template/gooter

    > Nav

        ng g c components/template/nav

    > Product Create

        ng g c components/product/product-create

    > Product Read

        ng g c components/product/product-read

    > Product Update

        ng g c components/product/product-update

    > Product Delete

        ng g c components/product/product-delete

    :warning: Atenção ao elemento mat-sidenav, ele que
    realiza a reinderização do nav.
    Os elementos na tag a ajusta o icone dentro do menu.
    Injetar em product-read productService e implementar ngOnInit.
    Implementar metodo Read em product.service.ts.
      
    Registrar rotas de create, update e delete.

7.  Criar as views:

    > Home

        ng g c views/home.


    > Product Crud

        ng g c views/products-crud

    :warning: Criar metodo para navegação.
    Injetar Router no construtor.

8.  Implementar rotas

    > app-routing.

9.  Criar o serviço

    > Product:

        ng g s components/product/product

    :warning:Implementar metodos

    > **create()** que realiza inserção do produto.  
    >  **read()** que realiza a leitura de todos os produtos.  
    >  **metodo** readById(id) que realiza a leitura de um produtos específico.  
    >  **update()** que atualiza um produto específico.  
    >  **delete()** que exclui um produto.

    Configurar snack-bar para ser injetado em outros componentes.  
    Implementar **pip** e metodo **errorHandler()** para exibir mensagen de erros.

    > Class msg-success e msg-erro em styles.css, incluir em showMessege de product.services.

10. Ajustando titulos.

    > Em components/template/header criar arquivo heafer-data.model.ts.  
    > Em components/template/header/ criar o serviço header:

        ng g s components/template/header/header


    > Em header.service criar os metodos get e set.
    > No componente header.ts, injetar header.service e implementar metodo get.
    > Em componente header.html, realize a interpolação de title, icon e router.
    > Vá em no componentes home.ts e product.ts injete header.service e passe
    > title, icon e router com base no componente.
