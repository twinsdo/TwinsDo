# Wireframe: TwinsDo Avatar Creation

Este documento descreve o wireframe para a página de criação de avatar do TwinsDo, baseado nas especificações do Guia de Configuração do Ambiente de Desenvolvimento.

## Versão Desktop (`avatar_creation_desktop.png`)

**Layout Geral:** Formulário de múltiplas etapas com indicador de progresso e área de visualização do avatar.

1. **Cabeçalho (Header):**
   * Logo "TwinsDo" (canto esquerdo)
   * Menu de Navegação (centro ou direita): "Home", "Study", "Library", "Marketplace", "Profile"
   * Indicação de usuário logado (canto direito)

2. **Indicador de Progresso:**
   * Barra horizontal ou círculos numerados mostrando as 4 etapas
   * Etapa atual destacada
   * Etapas: "Informações Básicas", "Estilo de Aprendizado", "Preferências de Assunto", "Voz e Aparência"

3. **Área Principal (dividida em duas colunas):**
   
   **Coluna Esquerda (Formulário):**
   * Título da etapa atual
   * Campos de formulário específicos para cada etapa:
     
     **Etapa 1 - Informações Básicas:**
     * Nome completo (campo de texto)
     * Idade (campo numérico ou seletor)
     * Nível educacional (dropdown)
     * Objetivos de aprendizado (área de texto)
     
     **Etapa 2 - Estilo de Aprendizado:**
     * Seletores para estilo de aprendizado (Visual, Auditivo, Leitura/Escrita, Cinestésico)
     * Sliders para preferências de ritmo, profundidade e complexidade
     
     **Etapa 3 - Preferências de Assunto:**
     * Lista de categorias de assuntos com checkboxes
     * Campo para adicionar assuntos específicos
     * Nível de conhecimento prévio para cada assunto selecionado
     
     **Etapa 4 - Voz e Aparência:**
     * Seletor de voz com amostras de áudio
     * Opções de personalização de aparência (gênero, estilo, cor)
     * Opção para upload de imagem personalizada
   
   **Coluna Direita (Visualização):**
   * Área de visualização do avatar
   * Texto de exemplo sendo "falado" pelo avatar
   * Controles de teste para ouvir a voz selecionada

4. **Botões de Navegação:**
   * "Voltar" (exceto na primeira etapa)
   * "Próximo" (exceto na última etapa)
   * "Finalizar" (apenas na última etapa)
   * "Cancelar" (em todas as etapas)

5. **Informações Adicionais:**
   * Dicas contextuais para cada campo
   * Indicação de campos obrigatórios

## Versão Mobile (`avatar_creation_mobile.png`)

**Layout Geral:** Layout vertical com as mesmas etapas, mas reorganizado para telas menores.

1. **Cabeçalho (Header):**
   * Logo "TwinsDo" (canto esquerdo)
   * Ícone de Menu Hambúrguer (canto direito)

2. **Indicador de Progresso:**
   * Versão compacta do indicador de progresso
   * Posicionado logo abaixo do cabeçalho

3. **Área Principal (layout vertical):**
   * Título da etapa atual
   * Campos de formulário (mesmos da versão desktop, mas em layout vertical)
   * Área de visualização do avatar (menor, posicionada abaixo do formulário)

4. **Botões de Navegação:**
   * Posicionados na parte inferior da tela
   * "Voltar" e "Próximo" lado a lado
   * "Finalizar" (ocupa toda a largura na última etapa)
   * "Cancelar" (menor, posicionado acima ou abaixo dos botões principais)

5. **Adaptações Específicas:**
   * Campos de formulário ocupam toda a largura da tela
   * Dropdowns e seletores adaptados para toque
   * Área de visualização redimensionada para caber na tela menor
