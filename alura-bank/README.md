# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
* GIT

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Help

#### O que significa o erro “Execução de scripts foi desabilitada neste sistema”?

* Se por acaso você tiver problemas para executar comandos como o ng v por restrições do Windows no terminal segue a dica.

* Isto é uma política de segurança do Powershell para evitar que scripts maliciosos sejam executados indevidamente no seu sistema. Por isso, todos os scripts que não forem assinados terão sua execução bloqueada. Ou seja, a política de execução está como Restricted (que é o padrão).

* Você pode controlar estas permissões usando o cmdlet Set-ExecutionPolicy. E pode conferir qual a política de execução atual usando o cmdlet Get-ExecutionPolicy.

##### PowerSchell...
------------

<code>

PS C:\Users\LINQ> Get-ExecutionPolicy RemoteSigned

Restricted

PS C:\Users\LINQ> Set-ExecutionPolicy RemoteSigned

PS C:\Users\LINQ> Get-ExecutionPolicy

RemoteSigned

</code>

------------

* Existem vários tipos de permissão que você pode usar com este cmdlet

#### Restricted
* Não carrega nem executa arquivos de configuração e/ou scripts do Powershell.

#### AllSigned
* Só executa scripts e arquivos de configuração assinados por um fornecedor confiável, mesmo que o script tenha sido escrito por você mesmo (local).

#### RemoteSigned
* É basicamente o mesmo que o acima, porém permite a execução de arquivos de configuração e/ou scripts locais.

#### Unrestricted
* Carrega e executa todos os arquivos de configuração e scripts PowerShell. Pode ser pedida uma confirmação para executar scripts não assinados.

#### Bypass
* Não há nenhuma restrição.

#### Undefined
* Remove a política de execução atual. A não ser que ela esteja definida numa diretiva de grupo.

### GIT

* Para criar uma nova branch junto a ramificação deve utilizar o comando abaixo

<code>

git flow branch_path_name start branch_name

</code>

* Para finalizar a branch criada e voltar a correção para sua origem


<code>

git flow branch_path_name finish branch_name

// git flow hotfix finish 'strict-null-checks'

</code>
