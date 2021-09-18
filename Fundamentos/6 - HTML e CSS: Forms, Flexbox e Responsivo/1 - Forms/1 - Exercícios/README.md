<h1>Criando um formulário de currículo</h1>
<h3> Para Fixar</h3>
<p>
Crie um <fieldset> para os seguintes dados pessoais:
Nome - Texto <br>
Limite de 40 caracteres<br>
Campo obrigatório<br>
Email - Texto<br>
Limite de 50 caracteres<br>
Campo obrigatório<br>
CPF - Texto<br>
Limite de 11 caracteres<br>
Campo obrigatório<br>
Endereço - Texto<br>
Limite de 200 caracteres<br>
Campo obrigatório<br>
Cidade - Texto<br>
Limite de 28 caracteres<br>
Campo obrigatório<br>
Estado - Select<br>
Todos os estados do Brasil<br>
Utilize estruturas de repetição via JavaScript para gerar os <option><br>
Campo obrigatório<br>
Tipo - Radio Button<br>
Casa, Apartamento<br>
Campo obrigatório<br>
Crie outro <fieldset> para dados do seu último emprego<br>
Resumo do currículo - TextArea<br>
Limite de 1000 caracteres<br>
Campo obrigatório<br>
Cargo - Texto<br>
Limite de 40 caracteres<br>
Campo obrigatório<br>
Descrição do cargo - Texto<br>
Limite de 500 caracteres<br>
Campo obrigatório<br>
Data de início - Texto<br>
Verificar o formato da data dd/mm/aaaa .<br>
O dia deve ser > 0 e <= 31.<br>
O mês deve ser > 0 e <= 12.<br>
O ano não pode ser negativo.<br>
Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.<br>
Campo obrigatório<br>
Logo abaixo do formulário, crie um botão que:<br>
Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit
Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.<br>
Caso todos os dados sejam válidos, monte uma <div> com o consolidado dos dados que foram inseridos no formulário.<br>
Caso haja algum dado inválido, mostre em uma <div> uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.<br>
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
</p>
