# Wireframe: TwinsDo Manus AI Interface

Este documento descreve o wireframe para a interface de interação com o Manus AI (simulado) no TwinsDo, baseado nas especificações do Guia de Configuração do Ambiente de Desenvolvimento.

## Versão Desktop (`manus_ai_interface_desktop.png`)

**Layout Geral:** Interface dividida com formulário de geração de conteúdo, área de visualização e painel do avatar.

1.  **Cabeçalho (Header):**
    *   Logo "TwinsDo" (canto esquerdo)
    *   Menu de Navegação (centro ou direita): "Home", "Study", "Library", "Marketplace", "Profile"
    *   Indicação de usuário logado (canto direito)

2.  **Título da Página:**
    *   Ex: "Generate Content with Manus AI"

3.  **Área Principal (dividida em duas colunas):**
    
    **Coluna Esquerda (Formulário de Geração - 40% da largura):**
    *   Título: "Content Generation Parameters"
    *   Campo "Área de Conhecimento" (Dropdown com opções pré-definidas)
    *   Campo "Tópico Específico" (Campo de texto)
    *   Campo "Nível de Dificuldade" (Dropdown: Beginner, Intermediate, Advanced, Expert)
    *   Campo "Instruções Adicionais" (Área de texto para detalhar o pedido)
    *   Botão "Gerar Conteúdo" (Botão primário, azul)
    *   Indicador de carregamento (visível durante a geração simulada)
    
    **Coluna Direita (Visualização e Interação - 60% da largura):**
    *   Título: "Generated Content"
    *   Área de visualização do conteúdo gerado (texto formatado)
    *   Painel do Avatar (abaixo ou ao lado da visualização):
        *   Avatar do usuário
        *   Botão "Iniciar Neural Mirroring" (para usar o conteúdo gerado)
        *   Controles básicos (pausar, repetir - se aplicável)
    *   Opções de Ação para o Conteúdo:
        *   Botão "Salvar na Biblioteca"
        *   Botão "Editar Conteúdo"
        *   Botão "Gerar Novo Conteúdo"

4.  **Rodapé (Footer):**
    *   Layout padrão com logo, links e copyright.

## Versão Mobile (`manus_ai_interface_mobile.png`)

**Layout Geral:** Layout vertical com formulário, visualização e painel do avatar empilhados.

1.  **Cabeçalho (Header):**
    *   Logo "TwinsDo" (canto esquerdo)
    *   Ícone de Menu Hambúrguer (canto direito)

2.  **Título da Página:**
    *   Ex: "Generate Content"

3.  **Formulário de Geração:**
    *   Campos empilhados verticalmente.
    *   Botão "Gerar Conteúdo" na parte inferior do formulário.
    *   Indicador de carregamento.

4.  **Área de Visualização:**
    *   Posicionada abaixo do formulário.
    *   Conteúdo adaptado para tela estreita.

5.  **Painel do Avatar e Ações:**
    *   Posicionado abaixo da área de visualização.
    *   Avatar em tamanho reduzido.
    *   Botões de ação ("Iniciar Neural Mirroring", "Salvar", etc.) em layout compacto.

6.  **Rodapé (Footer):**
    *   Layout simplificado.

