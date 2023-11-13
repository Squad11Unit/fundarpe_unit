<h1 align="center"> Plataforma Web - Editais Fundarpe </h1>

![Logo](https://github.com/Squad11Unit/fundarpe_unit/assets/89558668/d3690b15-ce9c-49f0-916f-8f5ac5e20617)

# Badges
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

# Índice
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)

# Descrição do Projeto
<p> Desenvolvimento de uma plataforma web com novo layout - que respeita a identidade visual do governo de PE, para todas as páginas, que direciona o usuário até os editais e otimiza os formulários de inscrições considerando as particularidades dos editais. </p>

# :white_check_mark: Tecnologias Utilizadas
<ul>
  <li>Javascript</li>
  <li>CSS</li>
  <li>Git e Github</li>
  <li>React.js</li>
  <li>React-Bootstrap</li>
  <li>Node version managers(NPM)</li>
  <li>VS Code</li>
  <li>Netlify</li>
</ul>

# :hammer: Funcionalidades e Demonstração da Aplicação
`Tela Principal`: representa a tela principal da plataforma dedicada à promoção cultural e divulgação de eventos e editais. 

<p> 
A tela home é composta por 3 arquivos js: index, styled e constants. 

O index.js representa a Tela Principal e está dividido em várias seções, cada uma representando um bloco ou uma parte específica da página. Todas as seções da página se encontram dentro do ContainerHome.

O styled.js representa os elementos de estilo da página principal.

O constants.js representa os filtros de mês e categoria da seção de editais da página principal.

</p>

<h3>Da pasta Components foram importados os seguintes componentes:</h3>
<ul><li>CardHome</li>
<li>CarouselHome</li>
<li>Header</li>
<li>Footer</li></ul>

<h3>Dentro da pasta Card foram importados os seguintes componentes:</h3>
<ul><li>editalCard</li>
<li>eventsCard</li></ul>

<h3>Do react-bootstrap foram importados os seguintes componentes:</h3>
<ul><li>Dropdown</li>
<li>DropdownButton</li></ul>

<h3>Do arquivo styled.js foram importados os seguintes elementos:</h3>
<ul><li>SelectGroup</li>
<li>CardBox</li>
<li>ContainerHome</li>
<li>AboutBox</li>
<li>ButtonBox</li></ul>

<h3>Do arquivo constant.js foram importados os seguintes elementos:</h3>
<ul><li>meses</li>
<li>categorias</li></ul>

<h3>Da pasta assets foram importadas as seguintes imagens:</h3>
<ul><li>Banner1</li>
<li>Banner2</li>
<li>bridge</li></ul>

<h3>Dentro do ContainerHome teremos os seguintes componentes (alguns já importados acima):</h3>
<ul><li>Header: Contém informações do cabeçalho, como o nome de usuário, links para seções específicas (como institucionais), botões para registrar e sair, e uma opção para iniciar a sessão. </li>
<li>CarouselHome: Exibe informações de forma dinâmica e atrativa em um carrossel. Contém título, detalhe adicional e uma descrição mais aprofundada sobre a iniciativa do Governo de Pernambuco relacionada à cultura. </li>
<li>SelectGroup, CardBox e ButtonBox: Permite filtrar os editais por mês e categoria, exibindo uma lista de editais em cartões (CardHome). Além disso, inclui um botão para possibilitar a visualização de mais detalhes sobre os editais. </li>
<li>AboutBox: Seção informativa sobre o Funcultura PE, contendo um link para obter mais informações, uma imagem relacionada e um parágrafo detalhado explicando a origem, funcionamento e impacto do Funcultura.
<li>Div flex_container, flex_section e flex_imag: Seção visualmente rica, contendo imagens, vídeos e texto. Ela utiliza a flexibilidade do layout para organizar elementos visualmente de maneira atrativa e dinâmica.
<li>CardBox: Seção de eventos, onde cada evento é exibido por meio do componente CardHome. Os eventos são mapeados a partir do array eventsCard e apresentados em cartões. Cada cartão inclui informações relacionadas ao evento (título, imagem, data e descrição). </li>
<li>Footer: Representa o rodapé que contém informações institucionais, linguagens, suporte, logos e links para redes sociais. </li></ul>



`Tela de Login`: representa a tela de acesso do usuário à plataforma através das suas credenciais de autenticação seja ele um agente ou administrador.

<p>
A tela de login é composta por 3 arquivos js: Login, Login.Adm e styled.

O Login.js representa a tela de login do Agente, indíviduo que participa de editais lançados pela Funcultura, competindo por recursos financeiros para a execução de projetos culturais específicos.

O LoginAdm.js representa a tela de login do Administrador, indivíduo que realiza a gestão e manutenção da plataforma e dos editais divulgados.

O styled.js representa os elementos de estilo utilizados na tela de login.
</p>

<h3>Da pasta Components foram importados os seguintes componentes:</h3>
<ul><li>Header</li>
<li>Footer</li></ul>

<h3>Do react foi importado o seguinte componente:</h3>
<><li>React, useState</li>

<h3>Do arquivo validations.js da pasta Utils foram importados os seguintes componentes:</h3>
<li>cpfCnpjMask</li>
<li>validatePassword</li>

<h3>Do react-router-dom foi importado o seguinte componente:</h3>
<li>useNavigate</li>

<h3>Do styled.js foram importados os seguintes componentes:</h3>
<li>ContainerLogin</li>
<li>ReCaptcha</li>
<li>Acessos</li>

<h3>Do LoginAdm.js foi importado o seguinte componente:</h3>
<li>LoginAdm</li>

<h3>Da pasta Form (dentro da pasta assets) foi importado o seguinte componente:</h3>
<li>reCaptcha</li>

<h3>Do react-bootstrap foi importado o seguinte componente:</h3>
<li>Form</li>

<h3>Antes da estrutura da página, foram utilizados os seguintes componentes funcionais de React:</h3>
<li>useState: Utiliza o Hook useState para gerenciar estados locais, incluindo form (para os dados do formulário), loading (para indicar se o processo de login está em andamento), cpfCnpj (para armazenar CPF ou CNPJ), e agente (para controlar se a tela exibe o formulário de agente ou administrador).</li>
<li>useNavigate: Utiliza o hook useNavigate para obter a função de navegação. A função navigate será usada para redirecionar o usuário após o login bem-sucedido.</li>
<li>showAgenteLogin/showAdminLogin: São funções que alteram o estado agente (setAgente), determinando qual formulário de login deve ser exibido. </li>
<li>handleSubmitUser: Chamada quando o formulário é enviado. Ela coleta os dados do usuário (CPF ou CNPJ e senha), os armazena no localStorage e redireciona o usuário para a página inicial.</li>
<li>handleCpfCnpj/handlerChange: Responsáveis por manipular mudanças nos campos de CPF/CNPJ e senha, respectivamente.</li>
<li>InputValidator: Verifica se a senha é válida (usando validatePassword) e se o comprimento do CPF/CNPJ é maior que 10.</li>
<li>isUserLoggedIn: Verifica se um usuário já está autenticado (tem uma sessão ativa) usando o localStorage. Se sim, redireciona imediatamente para a página inicial. A renderização do componente é condicional, se não houver usuário autenticado, o restante do componente é renderizado.</li>

<h3>A página de login é composta pelos seguintes componentes (alguns já importados e citados acima):</h3>
<li>Header: Representa as informações do cabeçalho, como a logo do funcultura por exemplo.</li>
<li>Acessos: Responsável por exibir dois botões que permitem alternar entre os modos de "Acesso Agente" e "Acesso Administrador". A mudança de estilo destaca visualmente o tipo de acesso selecionado. As funções showAgenteLogin e showAdminLogin alteram o estado do componente para refletir a escolha do usuário.</li>
<li>form: A renderização do código está condicionada ao valor da variável de estado agente. Se agente for verdadeiro renderiza um formulário de login para agentes, com campos para CPF/CNPJ, senha, opção de redefinição de senha, e um botão de entrada. O formulário inclui um ReCaptcha para melhorar a segurança durante o processo de login.</li>
<li>LoginAdm: Caso agente não seja verdadeiro, renderiza um formulário de login para administradores contendo campos para matrícula, senha, opção de redefinição de senha, um botão de entrada e ReCaptcha.</li>
<li>Footer: Mesmo rodapé utilizado em todas as páginas, contendo informações institucionais, linguagens, suporte, logos e links para redes sociais. </li>



- `Tela de Cadastro`: descrição da tela

- `Tela de Detalhes do Edital`: descrição da tela

- `Tela de Inscrição do Edital`: descrição da tela

- `Tela de Perfil (Agente)`: descrição da tela

- `Tela de Perfil (Administrador)`: descrição da tela


# Pessoas Desenvolvedoras do Projeto
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/89558668?v=4" width=115><br><sub>Ana Beatriz Lira</sub>](https://github.com/anabsl) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/146121865?v=4" width=115><br><sub>Anderson Fernandes</sub>](https://github.com/AndersonFernandes-dev) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/146091291?v=4" width=115><br><sub>Artur Ramos</sub>](https://github.com/Arturdev05) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/124224859?v=4" width=115><br><sub>Beatriz Rodrigues</sub>](https://github.com/Beatriz-Rodriguesx) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/145875117?v=4" width=115><br><sub>Beatriz Silva</sub>](https://github.com/BiaSilvaa) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/144251910?v=4" width=115><br><sub>Carlos Lima</sub>](https://github.com/CarlosDev258) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/104471926?v=4" width=115><br><sub>Flavia Favacho</sub>](https://github.com/flaviafavacho) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/145810174?v=4" width=115><br><sub>Gabriel Oliveira</sub>](https://github.com/gabrieloliveiraa05) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/144847596?v=4" width=115><br><sub>Joana D'Arc</sub>](https://github.com/joanadarc84) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/69319634?v=4" width=115><br><sub>Kelvia Santos</sub>](https://github.com/kelvia-snts) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/62075108?v=4" width=115><br><sub>Rennan Reis</sub>](https://github.com/rennan2020) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |