const knowledgeBase = {
    "como acessar o sistema?": "Para acessar o sistema, utilize seu usuário e senha no portal oficial da empresa.",
    "como redefinir minha senha?": "Para redefinir sua senha, clique em 'Esqueci minha senha' na tela de login.",
    "passo a passo para configuração": `
        Para seguir o passo a passo, baixe o manual em PDF: 
        <a href="manual_configuracao.pdf" target="_blank" style="color: blue; text-decoration: underline;">Baixar Manual</a>
    `,
    "como funciona o sistema de ponto?": `
        O sistema de ponto registra a entrada e saída automaticamente. 
        Veja mais detalhes aqui: 
        <a href="FATURAMENTO.pdf" target="_blank" style="color: blue; text-decoration: underline;">Sistema de Ponto PDF</a>
    `,
    "feriados e cálculo da folha": `
        Os feriados influenciam diretamente na quantidade de dias úteis do mês para o cálculo da folha e vencimentos de guias. 
        Para cadastrar feriados no módulo Folha:
        1. Acesse o menu Arquivo > Outros > Feriados;
        2. Clique no botão [Novo] e informe uma Descrição;
        3. No quadro Abrangência, selecione o Nível do feriado e preencha os campos conforme seleção;
        4. No quadro Tipo do Feriado, escolha:
           - '[x] Móvel' para feriados variáveis, informando a Data;
           - '[x] Fixo' para feriados fixos, informando Dia/Mês;
        5. Clique em [Gravar] para salvar.
        Informações complementares:
        • Feriados móveis devem ser cadastrados anualmente.
        • Evite alterar feriados já cadastrados para não impactar cálculos retroativos.
    `,
    "eSocial sem movimento": `
        Para enviar o eSocial sem movimento:
        - Empresa constituída e sem movimentação:
          1. Acesse Relatórios > eSocial > Cadastramento Inicial e clique em [Enviar].
          2. Acompanhe a validação no Painel de Pendências.
          3. Em Eventos Periódicos, selecione '[x] S-1299 - Fechamento dos eventos periódicos' e clique em [Enviar].
        - Empresa passou a ser sem movimento:
          1. Acesse Relatórios > eSocial > Eventos Periódicos e informe a Competência.
          2. Clique em [Enviar] e acompanhe a validação no Painel de Pendências.
        Obs.: Desde 2023, não é mais obrigatório enviar a situação “sem movimento” anualmente em janeiro.
    `,
    "como cadastrar empregado e enviar S-2200?": `
        Para cadastrar um empregado e enviar o evento S-2200 ao eSocial:
        1. Acesse Arquivo > Empregados.
        2. Preencha o Nome completo, Matrícula e dados contratuais.
        3. Na guia Profissionais, complete as informações de admissão e jornada.
        4. Adicione dependentes e verifique a qualificação cadastral.
        5. Clique em [Gravar]. O evento S-2200 será enviado automaticamente.
        Obs.: A partir de 03/2024, o CPF será usado como identificação exclusiva.
    `,
    "obrigado": "De nada! Estou à disposição para ajudar. 😊"
};

export default knowledgeBase;
