# Wireframe: TwinsDo Marketplace

Este documento descreve o wireframe para a página do marketplace do TwinsDo, baseado nas especificações do Guia de Configuração do Ambiente de Desenvolvimento.

## Versão Desktop (`marketplace_desktop.png`)

**Layout Geral:** Página com navegação por abas (B2C e B2B), pesquisa, filtros e listagem de serviços/profissionais.

1.  **Cabeçalho (Header):**
    *   Logo "TwinsDo" (canto esquerdo)
    *   Menu de Navegação (centro ou direita): "Home", "Study", "Library", "Marketplace", "Profile"
    *   Indicação de usuário logado (canto direito)

2.  **Navegação do Marketplace:**
    *   Título da Página (ex: "TwinsDo Marketplace")
    *   Abas de Navegação: "Para Alunos (B2C)", "Para Empresas (B2B)"
    *   Aba ativa destacada

3.  **Barra de Ferramentas (abaixo das abas):**
    *   Barra de Pesquisa (para encontrar tutores, cursos, serviços)
    *   Botão/Dropdown de Filtros

4.  **Filtros (específicos para cada aba):**
    
    **Filtros B2C (Para Alunos):**
    *   Filtrar por Assunto/Matéria
    *   Filtrar por Nível (Iniciante, Intermediário, Avançado)
    *   Filtrar por Tipo (Tutor Particular, Curso Online, Material Premium)
    *   Filtrar por Preço (faixa de preço)
    *   Filtrar por Avaliação (mínimo de estrelas)
    *   Opção de Ordenação (Relevância, Preço, Avaliação)
    
    **Filtros B2B (Para Empresas):**
    *   Filtrar por Área de Treinamento (Vendas, Liderança, Técnico)
    *   Filtrar por Formato (Workshop Online, Consultoria, Conteúdo Personalizado)
    *   Filtrar por Indústria
    *   Filtrar por Tamanho da Empresa
    *   Opção de Ordenação

5.  **Conteúdo Principal (depende da aba ativa):**
    
    **Conteúdo B2C:**
    *   Seção "Tutores em Destaque" (cards de perfil de tutores)
    *   Seção "Cursos Populares" (cards de cursos)
    *   Listagem principal em grid ou lista (tutores ou cursos, dependendo dos filtros)
        *   Card de Tutor: Foto, Nome, Especialidade, Avaliação, Preço/hora, Botão "Ver Perfil"
        *   Card de Curso: Thumbnail, Título, Instrutor, Avaliação, Preço, Botão "Ver Curso"
    
    **Conteúdo B2B:**
    *   Seção "Soluções em Destaque" (cards de serviços B2B)
    *   Seção "Consultores Recomendados"
    *   Listagem principal de serviços ou consultores
        *   Card de Serviço: Ícone/Imagem, Título, Descrição breve, Botão "Saber Mais"
        *   Card de Consultor: Foto, Nome, Empresa, Especialidade, Botão "Ver Perfil"

6.  **Paginação:**
    *   Controles de paginação na parte inferior da listagem.

7.  **Rodapé (Footer):**
    *   Layout padrão com logo, links e copyright.

## Versão Mobile (`marketplace_mobile.png`)

**Layout Geral:** Layout vertical com abas, pesquisa, filtros acessíveis por botão e listagens empilhadas.

1.  **Cabeçalho (Header):**
    *   Logo "TwinsDo" (canto esquerdo)
    *   Ícone de Menu Hambúrguer (canto direito)

2.  **Navegação do Marketplace:**
    *   Título da Página
    *   Abas de Navegação (B2C, B2B) - podem ser scrolláveis se houver muitas

3.  **Barra de Ferramentas:**
    *   Barra de Pesquisa
    *   Botão de Filtros (ícone)

4.  **Filtros (modal ou painel lateral):**
    *   Mesmas opções da versão desktop, adaptadas para toque.

5.  **Conteúdo Principal:**
    *   Seções de destaque e listagens empilhadas verticalmente.
    *   Cards com layout otimizado para mobile.

6.  **Paginação:**
    *   Controles simplificados ("Carregar Mais" ou "Anterior"/"Próximo").

7.  **Rodapé (Footer):**
    *   Layout simplificado.

