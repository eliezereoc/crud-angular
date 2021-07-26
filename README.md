# CRUDE Angular - Cadastro de Produto
## Curso JS Moderno COD3R.
### Desenvolvido em Angular 9 
#### _BD json-server._

> Status do Projeto: Em desenvolvimento :warning:

#### 1. Instalando e Iniciando CRUDE-ANGULAR/backend
    - npm install  
    - npm start
   
#### 2. Instalando e Iniciando CRUDE-ANGULAR/frontend
    - npm install
    - npm start/ng serve

________________________________________________________________________________________________________
### Desenvolvendo DB.json

#### 1. Cria projeto (CRUDE-ANGULAR/backend/)
    - npm init  
    - npm i json-server
    - db.json
    - Em package.json, adicionar em scripts: "start": "json-server --watch db.json --port 3001"
    
________________________________________________________________________________________________________
### Desenvolvendo Aplicação Angular

> 1. Instalar angular cli, caso não tenha sido instalado.
    
        npm i -g @angular/cli  
   

> 2. Criar o projeto responedendo as peguntas.

	    ng g new "nome do projeto"

> 3. Adionar o angular material.

	    ng add @angular/material

> 4. Importar no app.modules:
    
        toolbar, sidenav, list,LOCALE_ID,
	    card, button, snack-bar,localePt,
	    form-field, input, http,registerLocaleData,
	    animations, forms, table.

	    Chamar registerLocaleData passando localePt.
	    Incluir LOCALE_ID em providers.

> 5. Criar classe products em components/product/product/products.model.ts


> 6. Criar os seguintes componentes:

        Heard: ng g c components/template/header
		Footer: ng g c components/template/gooter
	   	Nav: ng g c components/template/nav
	    Product Create: ng g c components/product/product-create
	    Product Read: ng g c components/product/product-read
	
	    Obs: Atenção ao elemento mat-sidenav, ele que
	         realiza a reinderização do nav.
	         Os elementos na tag a ajusta o icone dentro do menu.
	         Injetar em product-read productService e implementar ngOnInit.
	         Implementar metodo Read em product.service.ts.
             Instalar ng generate @angular/material:table component/product/produt-read-example

> 7. Criar as views:

		Home: ng g c views/home.
	    Product Crud: ng g c views/products-crud
	
	    Obs: Criar metodo para navegação.
	         Injetar Router no construtor.

> 8. Implementar rotas em app-routing.

> 9. Criar o serviço Product:

	    ng g s components/product/product
	
	    Obs: Criar metodo que realiza inserção do produto.
	         Configurar snack-bar para ser injetado em outros componentes.