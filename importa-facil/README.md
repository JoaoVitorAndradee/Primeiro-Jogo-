# ImportaFácil - Plataforma de Simulação de Importação

ImportaFácil é uma plataforma completa para importadores que desejam validar produtos antes de investir. Com cálculos precisos de impostos e análise de mercado em tempo real, ajudamos empreendedores a descobrir produtos lucrativos.

## 🚀 Funcionalidades

### Landing Page Completa
- **Header** com navegação responsiva
- **Hero Section** com simulação em destaque
- **Benefícios** com ícones e descrições
- **Exemplos de simulações** reais com produtos de sucesso
- **Depoimentos** de usuários
- **Planos e preços** com comparação clara
- **Footer** institucional

### Autenticação
- **Página de Login** com e-mail/senha
- **Página de Cadastro** com validação
- **Login social** (Google/Facebook)
- **Recuperação de senha**

### Dashboard do Usuário
- **Simulação de produtos** com URL de marketplace
- **Cálculo automático** de impostos (ICMS, IPI, PIS/COFINS)
- **Análise de preços** do Mercado Livre, Shopee e Amazon
- **Histórico de simulações** com filtros
- **Exportação** PDF/Excel (Premium)
- **Relatórios de mercado** (Premium)

### Páginas Institucionais
- **Sobre Nós** - Missão, equipe e como funciona
- **Exemplos Detalhados** - Casos de sucesso com métricas reais
- **Planos** - Comparação detalhada de funcionalidades
- **FAQ** - Perguntas frequentes

## 🛠 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Heroicons** - Ícones SVG
- **Headless UI** - Componentes acessíveis

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/page.tsx        # Página de login
│   ├── cadastro/page.tsx     # Página de cadastro
│   ├── dashboard/page.tsx    # Dashboard do usuário
│   ├── sobre/page.tsx        # Página sobre nós
│   ├── exemplos/page.tsx     # Exemplos de sucesso
│   ├── planos/page.tsx       # Planos e preços
│   ├── layout.tsx            # Layout raiz
│   └── globals.css           # Estilos globais
```

## 🎨 Design System

### Cores
- **Primária**: Blue 600 (#2563eb)
- **Secundária**: Purple 600 (#9333ea)
- **Sucesso**: Green 600 (#16a34a)
- **Neutros**: Gray 50-900

### Componentes
- Cards com shadow e hover effects
- Botões com estados e transições
- Formulários com validação visual
- Tabelas responsivas
- Modais e overlays

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>

# Acesse o diretório
cd importa-facil

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Build para Produção
```bash
# Gerar build otimizado
npm run build

# Executar em produção
npm start
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona em:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)  
- **Mobile** (320px - 767px)

## 🎯 Funcionalidades por Plano

### Plano Grátis
- ✅ 3 simulações por mês
- ✅ Cálculo de impostos
- ✅ Análise de preços
- ✅ Histórico básico
- ✅ Suporte por e-mail

### Plano Premium (R$ 19,90/mês)
- ✅ Simulações ilimitadas
- ✅ Exportação PDF/Excel
- ✅ Relatórios de mercado
- ✅ Histórico avançado
- ✅ Alertas de oportunidades
- ✅ Suporte prioritário
- ✅ Consultoria personalizada

## 🔧 Configurações

### Variáveis de Ambiente
```env
NEXT_PUBLIC_API_URL=https://api.importafacil.com.br
NEXT_PUBLIC_STRIPE_KEY=pk_test_...
DATABASE_URL=postgresql://...
```

### APIs Integradas
- **Receita Federal** - Cálculo de impostos
- **Mercado Livre API** - Preços de produtos
- **Shopee API** - Comparação de preços
- **Amazon API** - Análise de mercado
- **Stripe** - Processamento de pagamentos

## 📊 Métricas de Negócio

- **+10k** simulações realizadas
- **+2.5k** usuários ativos
- **95%** precisão dos cálculos
- **R$ 2M+** em vendas geradas pelos usuários

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **E-mail**: contato@importafacil.com.br
- **Telefone**: (11) 99999-9999
- **Site**: https://importafacil.com.br

---

**ImportaFácil** - Tornando a importação simples e acessível para todos! 🚀
