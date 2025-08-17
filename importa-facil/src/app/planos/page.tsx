import Link from 'next/link'
import { 
  CheckIcon, 
  XMarkIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentArrowDownIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Planos() {
  const features = [
    {
      category: 'Simulações',
      items: [
        { name: 'Simulações mensais', free: 'Até 3', premium: 'Ilimitadas' },
        { name: 'Análise de impostos', free: true, premium: true },
        { name: 'Comparação de preços', free: true, premium: true },
        { name: 'Histórico básico', free: true, premium: false },
        { name: 'Histórico avançado com filtros', free: false, premium: true },
      ]
    },
    {
      category: 'Relatórios',
      items: [
        { name: 'Exportação PDF', free: false, premium: true },
        { name: 'Exportação Excel', free: false, premium: true },
        { name: 'Relatórios de mercado', free: false, premium: true },
        { name: 'Análise de tendências', free: false, premium: true },
        { name: 'Alertas de oportunidades', free: false, premium: true },
      ]
    },
    {
      category: 'Suporte',
      items: [
        { name: 'Suporte por e-mail', free: true, premium: true },
        { name: 'Suporte prioritário', free: false, premium: true },
        { name: 'Chat ao vivo', free: false, premium: true },
        { name: 'Consultoria personalizada', free: false, premium: true },
      ]
    }
  ]

  const faqs = [
    {
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim! Você pode cancelar sua assinatura Premium a qualquer momento através do painel de controle. Não há taxas de cancelamento e você continuará tendo acesso aos recursos Premium até o final do período pago.'
    },
    {
      question: 'Como funciona o período grátis?',
      answer: 'Todo usuário novo tem direito a 3 simulações gratuitas por mês. Isso permite que você teste nossa plataforma e veja a qualidade dos nossos cálculos antes de fazer o upgrade para o plano Premium.'
    },
    {
      question: 'Os preços incluem impostos?',
      answer: 'Sim, todos os preços apresentados já incluem todos os impostos aplicáveis. Não há taxas ocultas ou custos adicionais.'
    },
    {
      question: 'Vocês oferecem desconto para pagamento anual?',
      answer: 'Sim! Oferecemos 20% de desconto para assinantes que optam pelo pagamento anual. Entre em contato conosco para mais detalhes.'
    },
    {
      question: 'Como vocês calculam os impostos?',
      answer: 'Utilizamos as tabelas oficiais da Receita Federal e APIs atualizadas em tempo real para garantir que todos os cálculos de impostos (ICMS, IPI, PIS/COFINS) estejam sempre precisos e atualizados.'
    },
    {
      question: 'Posso usar o ImportaFácil para qualquer tipo de produto?',
      answer: 'Sim! Nossa plataforma funciona para a maioria dos produtos importáveis. Cobrimos eletrônicos, roupas, calçados, acessórios, brinquedos e muito mais. Alguns produtos restritos podem ter limitações específicas.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ImportaFácil
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </Link>
              <Link href="/planos" className="text-blue-600 font-medium">
                Planos
              </Link>
              <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre Nós
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </Link>
            </nav>

            <Link 
              href="/cadastro" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Começar Grátis
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Escolha o <span className="text-blue-600">plano ideal</span> para seu negócio
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comece grátis e faça upgrade quando quiser. Sem compromisso, sem taxas ocultas.
            </p>

            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <BoltIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span>Configuração em 30 segundos</span>
              </div>
              <div className="flex items-center">
                <ShieldCheckIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span>Dados 100% seguros</span>
              </div>
              <div className="flex items-center">
                <HeartIcon className="h-5 w-5 text-blue-500 mr-2" />
                <span>Suporte em português</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Grátis</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">R$ 0</div>
                <p className="text-gray-600">Para sempre • Sem cartão de crédito</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>3 simulações por mês</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Cálculo completo de impostos</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Análise de preços do mercado</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Histórico básico</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Suporte por e-mail</span>
                </div>
              </div>

              <button className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl hover:bg-gray-300 transition-colors font-medium text-lg">
                Começar Grátis
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Perfeito para testar a plataforma
              </p>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-8 relative transform lg:scale-105">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-4 py-2 rounded-bl-xl rounded-tr-2xl text-sm font-bold">
                🔥 MAIS POPULAR
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Plano Premium</h3>
                <div className="text-5xl font-bold mb-2">R$ 19,90</div>
                <p className="text-blue-100">por mês • Cancele quando quiser</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Simulações ilimitadas</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Exportação PDF e Excel</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Relatórios detalhados de mercado</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Histórico avançado com filtros</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Alertas de oportunidades</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Suporte prioritário + Chat</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Consultoria personalizada</span>
                </div>
              </div>

              <button className="w-full bg-white text-blue-600 py-4 rounded-xl hover:bg-gray-50 transition-colors font-bold text-lg">
                Assinar Premium
              </button>
              
              <p className="text-center text-sm text-blue-100 mt-4">
                Para importadores sérios
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              <strong>O plano Premium se paga sozinho:</strong> Com apenas 1 produto de sucesso descoberto, 
              você pode recuperar o investimento de meses de assinatura.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Análises Ilimitadas</h4>
                <p className="text-gray-600 text-sm">
                  Teste quantos produtos quiser sem limitações
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentArrowDownIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Relatórios Profissionais</h4>
                <p className="text-gray-600 text-sm">
                  Exporte dados para apresentações e análises
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Suporte VIP</h4>
                <p className="text-gray-600 text-sm">
                  Atendimento prioritário e consultoria especializada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comparação Detalhada
            </h2>
            <p className="text-xl text-gray-600">
              Veja todas as funcionalidades de cada plano
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Funcionalidades
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Grátis
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-blue-600">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <>
                      <tr key={category.category} className="bg-gray-100">
                        <td colSpan={3} className="px-6 py-3 text-sm font-bold text-gray-800 uppercase tracking-wider">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-gray-200">
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {typeof feature.free === 'boolean' ? (
                              feature.free ? (
                                <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <XMarkIcon className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-gray-600">{feature.free}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {typeof feature.premium === 'boolean' ? (
                              feature.premium ? (
                                <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <XMarkIcon className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm font-medium text-gray-900">{feature.premium}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos planos
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Falar com nosso time
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece Sua Jornada na Importação Hoje
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mais de 2.500 importadores já descobriram produtos lucrativos com nossa plataforma
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold text-lg"
            >
              Começar Grátis Agora
            </Link>
            <Link
              href="/exemplos"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium text-lg"
            >
              Ver Casos de Sucesso
            </Link>
          </div>

          <div className="mt-12 flex justify-center space-x-8 text-sm text-blue-100">
            <div className="flex items-center">
              <CheckIcon className="h-4 w-4 mr-2" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-4 w-4 mr-2" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-4 w-4 mr-2" />
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">ImportaFácil</div>
              <p className="text-gray-400">
                Tornando a importação simples e acessível para todos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
                <li><Link href="/termos" className="hover:text-white transition-colors">Termos</Link></li>
                <li><Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@importafacil.com.br</li>
                <li>(11) 99999-9999</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ImportaFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}