# Wireframe: TwinsDo Study Interface

Este documento descreve o wireframe para a interface de estudo do TwinsDo, baseado nas especificações do Guia de Configuração do Ambiente de Desenvolvimento.

## Versão Desktop (`study_interface_desktop.png`)

**Layout Geral:** Interface dividida em duas áreas principais - conteúdo de estudo e painel de Neural Mirroring.

1. **Cabeçalho (Header):**
   * Logo "TwinsDo" (canto esquerdo)
   * Menu de Navegação (centro ou direita): "Home", "Study", "Library", "Marketplace", "Profile"
   * Indicação de usuário logado (canto direito)

2. **Barra de Título e Progresso:**
   * Título do conteúdo sendo estudado
   * Barra de progresso horizontal (indicando avanço no conteúdo)
   * Tempo estimado restante

3. **Área Principal (dividida em duas seções):**
   
   **Seção Esquerda (Conteúdo de Estudo - 70% da largura):**
   * Navegação por abas na parte superior:
     * "Overview" (Visão Geral)
     * "Lesson" (Lição)
     * "Practice" (Prática)
     * "Quiz" (Teste)
   * Área de conteúdo principal:
     * Texto formatado com títulos, parágrafos, listas
     * Área para fórmulas matemáticas (quando aplicável)
     * Imagens e diagramas explicativos
     * Exemplos destacados em caixas
   * Botões de interação:
     * "Ver Vídeo" (quando disponível)
     * "Exemplos Interativos"
     * "Mostrar Solução" (em exercícios)
   * Navegação de conteúdo:
     * Botões "Anterior" e "Próximo"
     * Índice/sumário expansível (lateral ou dropdown)
   
   **Seção Direita (Neural Mirroring - 30% da largura):**
   * Avatar do usuário (imagem/animação)
   * Status do Neural Mirroring (Pronto, Processando, Falando)
   * Controles de ajuste:
     * Slider para velocidade da voz
     * Slider para profundidade da explicação
     * Slider para nível dos exemplos
   * Botões de ação:
     * "Iniciar Neural Mirroring" (grande, destacado)
     * "Pausar/Retomar"
     * "Repetir"
   * Área de notas:
     * Campo de texto para anotações
     * Botão "Salvar Notas"

4. **Barra de Ferramentas Inferior:**
   * Botão "Voltar à Biblioteca"
   * Opções de compartilhamento
   * Botão de feedback/avaliação

## Versão Mobile (`study_interface_mobile.png`)

**Layout Geral:** Layout vertical com áreas de conteúdo e Neural Mirroring empilhadas.

1. **Cabeçalho (Header):**
   * Logo "TwinsDo" (canto esquerdo)
   * Ícone de Menu Hambúrguer (canto direito)

2. **Barra de Título e Progresso:**
   * Título do conteúdo (possivelmente truncado)
   * Barra de progresso

3. **Navegação por Abas:**
   * Abas compactas: "Overview", "Lesson", "Practice", "Quiz"

4. **Área de Conteúdo:**
   * Conteúdo adaptado para tela estreita
   * Imagens redimensionadas
   * Fórmulas com possibilidade de zoom

5. **Botão de Ativação do Neural Mirroring:**
   * Botão flutuante ou fixo na parte inferior
   * Ao clicar, expande o painel de Neural Mirroring

6. **Painel de Neural Mirroring (expansível):**
   * Versão compacta dos controles
   * Avatar em tamanho reduzido
   * Controles essenciais apenas

7. **Navegação de Conteúdo:**
   * Botões "Anterior" e "Próximo" na parte inferior
   * Acesso ao índice via menu hambúrguer
