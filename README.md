# CRUDE Angular - Cadastro de Produto
> Status do Projeto: Em desenvolvimento :warning: 
## Curso JS Moderno COD3R.
### Desenvolvido em Angular 9 
#### _BD json-server._

#### 1. Instalando e Iniciando CRUDE-ANGULAR/backend :heavy_check_mark:
	npm install   
	npm start  
   
#### 2. Instalando e Iniciando CRUDE-ANGULAR/frontend :heavy_check_mark:
	npm install  
	npm start/ng serve  

________________________________________________________________________________________________________
### Desenvolvendo DB.json

#### 1. Cria projeto (CRUDE-ANGULAR/backend/) :heavy_check_mark:
	npm init 
	npm i json-server
	db.json 
> Em package.json, adicionar em scripts :heavy_check_mark:
	
	"start": "json-server --watch db.json --port 3001" 
    
________________________________________________________________________________________________________
### Desenvolvendo Aplicação Angular :heavy_check_mark:

1. Instalar angular cli, caso não tenha sido instalado.    
	
		npm i -g @angular/cli     

2. Criar o projeto responedendo as peguntas.
	
		ng g new "nome do projeto"

3. Adionar o angular material.
	
		ng add @angular/material

4. Importar no app.modules:  

	> - [X] toolbar 
	> - [X] sidenav
	> - [X] list 
	> - [X] LOCALE_ID
	> - [X] card 
	> - [X] button 
	> - [X] snack-bar 
	> - [X] localePt  
	> - [X] form-field 
	> - [X] input 
	> - [X] http 
	> - [X] registerLocaleData 
	> - [X] animations 
	> - [X] forms 
	> - [X] table.
	
	> Chamar registerLocaleData passando localePt.
	> Incluir LOCALE_ID em providers.

5. Criar classe products 
	> components/product/product/products.model.ts


6. Criar os seguintes componentes:
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
	
	
	  :warning: Atenção ao elemento mat-sidenav, ele que
	       realiza a reinderização do nav.
	       Os elementos na tag a ajusta o icone dentro do menu.
	       Injetar em product-read productService e implementar ngOnInit.
	       Implementar metodo Read em product.service.ts.
            

7. Criar as views:
	> Home
								
		ng g c views/home.
			
	> Product Crud
		
		ng g c views/products-crud
	
	 :warning: Criar metodo para navegação.
	         Injetar Router no construtor.

8. Implementar rotas
	> app-routing.

9. Criar o serviço
	> Product:

		ng g s components/product/product
	
	:warning: Criar metodo que realiza inserção do produto.
	          Configurar snack-bar para ser injetado em outros componentes.