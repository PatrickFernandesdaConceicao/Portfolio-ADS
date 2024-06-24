function changeContent(topic) {
    const contentText = document.getElementById('contentText');
    const buttons = document.querySelectorAll('.titles button');

    buttons.forEach(button => button.classList.remove('selected'));

    if (topic === 'cpa') {
        contentText.innerHTML = `
            A Comissão Própria de Avaliação (CPA) é um setor constituído em todas as Instituições de Ensino Superior (IES), em cumprimento à Lei nº 10.861/2004, que instituiu o Sistema Nacional de Avaliação do Ensino Superior (SINAES). 
            A Comissão Própria de Avaliação (CPA) é formada por professores, alunos, técnicos-administrativos e representantes da sociedade civil organizada, com o objetivo de coordenar os processos de avaliação internos da instituição e sistematização dos dados solicitados pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP), órgão vinculado ao Ministério da Educação.
            <br><br>
            A CPA realiza anualmente o levantamento de informações por meio da aplicação do instrumento (questionário) de Avaliação Institucional via sistema on-line com toda a comunidade acadêmica (docentes, discentes e técnicos-administrativos) no intuito de conhecer suas opiniões e demandas, tendo como objetivo implantar a melhoria contínua na Faculdade, nos cursos e seus programas, nas dimensões de ensino, pesquisa, extensão, gestão e formação, além de promover a melhoria da qualidade da educação superior e responsabilidade social da Instituição.
            <br><br>
            Destaca-se que a Avaliação Institucional (Interna – questionários aplicados on-line) realizada pela CPA serve de subsídio para o reconhecimento, credenciamento e recredenciamento de cursos e Instituições de Ensino Superior (IES), ou seja, serve para a Avaliação de Cursos de Graduação (Externa – feita pelos avaliadores do Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira – INEP), e que juntamente com o Exame Nacional de Avaliação dos Estudantes (ENADE) formam o Sistema Nacional de Avaliação da Educação Superior (SINAES), constituindo dentre outros o Índice de Curso de Graduação (IGC), conhecido como nota ou conceito do curso.
        `;
        document.getElementById('btn-cpa').classList.add('selected');
    } else if (topic === 'objetivos') {
        contentText.innerHTML = `
            ⦁ Coordenar os processos de avaliação internos da instituição;
            <br><br>
            ⦁ Elaborar, implementar e acompanhar o Projeto de Avaliação Interna da
            Faculdade Biopark;
            <br><br>
            ⦁ Sensibilizar a comunidade interna da Faculdade Biopark para participar ativamente das ações avaliativas;
            <br><br>
            ⦁ Sistematizar e prestar as informações solicitadas pelo INEP/MEC;
            <br><br>
            ⦁ Promover as ações institucionais necessárias ao cumprimento dos objetivos do SINAES;
            <br><br>
            ⦁ Conduzir de forma ética os processos de avaliação interna;
            <br><br>
            ⦁ Garantir um processo de autoavaliação coletivo, contínuo, ético e democrático;
            <br><br>
            ⦁ Propiciar a reflexão e revisão dos programas, ações e diretrizes de planejamento e desenvolvimento da Instituição;
            <br><br>
            ⦁ Estimular a cultura da autoavaliação no meio institucional;
            <br><br>
            ⦁ Colaborar para a transparência da Instituição em todos os níveis;
            <br><br>
            ⦁ Dimensionar os pontos fortes e fracos, com o intuito de (re)dimensionar e (re)orientar a gestão acadêmica e administrativa;
            <br><br>
            ⦁ Divulgar para a comunidade acadêmica e sociedade os resultados alcançados.
        `;
        document.getElementById('btn-objetivos').classList.add('selected');
    } else if(topic == 'autoavaliacao'){
        contentText.innerHTML = `
            Sob responsabilidade da CPA, a autoavaliação é uma demanda interna da IES, que pode, por meio dela, obter maior índice de eficiência, utilizando melhor seus recursos (humanos, materiais, financeiros, etc), bem como em sua eficácia no alcance de seus objetivos de ensino, pesquisa, extensão e desenvolvimento social.
            <br><br>
            É também uma obrigação institucional junto ao SINAES que tem como ideias centrais, as de integração e de participação para a construção de um sistema de avaliação capaz de aprofundar os compromissos e responsabilidades sociais das instituições, bem como promover os valores democráticos, o respeito à diversidade, a busca da autonomia e a afirmação da identidade.
            <br><br>
            A proposta de avaliação do SINAES pretende incorporar, além da dimensão cognitiva, as perspectivas críticas das funções da Educação Superior dentro do contexto nacional e internacional. Busca a articulação de um sistema de avaliação com autonomia, que é própria dos processos educativo-emancipatórios, e as funções de regulação, que são inerentes à supervisão estatal, para o fortalecimento das funções e compromissos educativos.
            <br><br>
            A gestão estratégica de instituições de ensino e pesquisa depende essencialmente do nível de qualificação de seu corpo técnico e do comprometimento deste com a missão da instituição.
            <br><br>
            Um sistema de avaliação institucional, gerado internamente, que leve em conta os diferentes conjuntos de critérios e de atributos relevantes para a avaliação dos diferentes grupos de componentes da instituição pode auxiliar no diagnóstico, levantamento e análise dos elementos essenciais para a realização da gestão estratégica. Pode também promover continuamente a redefinição de metas para indivíduos e grupos de pesquisa e para o planejamento das atividades acadêmicas, à medida que evoluem a geração e difusão de diferentes conhecimentos.
            <br><br>
            A Lei Federal nº 10.861, de 14 de abril de 2004, instituiu o Sistema Nacional de Avaliação da Educação Superior (SINAES), que preconiza que toda instituição de ensino superior, pública ou privada, constituirá uma Comissão Própria de Avaliação (CPA), responsável pela autoavaliação da Instituição considerando, obrigatoriamente, os 5 (cinco) eixos, os quais contém 10 (dez) dimensões, definidos pela Nota Técnica nº 14//2014 – CGACGIES/DAES/INEP/MEC, os quais são:
            <br><br>
            <span>Eixo 1: Planejamento e Avaliação Institucional</span>
            <br><br>
            Dimensão 8: Planejamento e Avaliação
            <br><br>
            <span>Eixo 2: Desenvolvimento Institucional</span>
            <br><br>
            Dimensão 1: Missão e Plano de Desenvolvimento Institucional
            <br><br>
            Dimensão 3: Responsabilidade Social da Instituição
            <br><br>
            <span>Eixo 3: Políticas Acadêmicas</span>
            <br><br>
            Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão
            <br><br>
            Dimensão 4: Comunicação com a Sociedade
            <br><br>
            Dimensão 9: Política de Atendimento aos Discentes
            <br><br>
            <span>Eixo 4: Políticas de Gestão</span>
            <br><br>
            Dimensão 5: Políticas de Pessoal
            <br><br>
            Dimensão 6: Organização e Gestão da Instituição
            <br><br>
            Dimensão 10: Sustentabilidade Financeira
            <br><br>
            <span>Eixo 5: Infraestrutura Física</span>
            <br><br>
            Dimensão 7: Infraestrutura Física
        `;
        document.getElementById('btn-autoavaliacao').classList.add('selected');
    } else if(topic == 'documentos'){
        contentText.innerHTML = `
            <span>LEGISLAÇÃO:</span>
            <br><br>
            Lei nº 10.861 de 14 de abril de 2004 – instituiu o Sistema Nacional de Avaliação da Educação Superior (SINAES)
            <br><br>
            Nota Técnica nº 14/2014 – CGACGIES/DAES/INEP/MEC
            <br><br>
            <span>RELATÓRIOS DE AVALIAÇÃO INSTITUCIONAL:</span>
            <br><br>
            <a href="">Relatório da CPA Biopark I 2021</a>
            <br><br>
            <a href="">Relatório da CPA Biopark II 2021</a>
            <br><br>
            <a href="">Relatório da CPA Faculdade Biopark I 2022</a>
            <br><br>
            <a href="">Relatório da CPA Faculdade Biopark II 2022</a>
            <br><br>
            <a href="">Relatório da CPA Faculdade Biopark I 2023</a>
        `;
        document.getElementById('btn-documentos').classList.add('selected');
    } else if(topic == 'SINAES'){
        contentText.innerHTML = `
            <span>Sistema Nacional de Avaliação da Educação Superior (Sinaes)</span>
            <br><br>
            Criado pela Lei n° 10.861, de 14 de abril de 2004, o Sistema Nacional de Avaliação da Educação Superior (Sinaes) é formado por três componentes principais: a avaliação das instituições, dos cursos e do desempenho dos estudantes. O Sinaes avalia todos os aspectos que giram em torno desses três eixos, principalmente o ensino, a pesquisa, a extensão, a responsabilidade social, o desempenho dos alunos, a gestão da instituição, o corpo docente e as instalações. 
            <br><br>
            Os principais objetivos da avaliação envolvem melhorar o mérito e o valor das instituições, áreas, cursos e programas, nas dimensões de ensino, pesquisa, extensão, gestão e formação; melhorar a qualidade da educação superior e orientar a expansão da oferta, além de promover a responsabilidade social das IES, respeitando a identidade institucional e a autonomia de cada organização. 
            <br><br>
            O Sinaes possui uma série de instrumentos complementares: autoavaliação, avaliação externa, Exame Nacional de Desempenho de Estudantes – Enade, Avaliação dos cursos de graduação e instrumentos de informação como o censo e o cadastro. A integração dos instrumentos permite que sejam atribuídos alguns conceitos, ordenados numa escala com cinco níveis, a cada uma das dimensões e ao conjunto das dimensões avaliadas. O Ministério da Educação torna público e disponível o resultado da avaliação das instituições de ensino superior e de seus cursos. 
            <br><br>
            A divulgação abrange tanto instrumentos de informação (dados do censo, do cadastro, Conceito Preliminar de Curso – CPC e Índice Geral de Cursos – IGC) quanto os conceitos das avaliações para os atos de renovação, reconhecimento e recredenciamento (parte do ciclo trienal do Sinaes, com base nos cursos contemplados no Enade a cada ano).
        `;
        document.getElementById('btn-SINAES').classList.add('selected');
    }
}

window.onload = function () {
    changeContent('cpa');
};
