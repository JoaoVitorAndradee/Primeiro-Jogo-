import Link from 'next/link'
import { 
  ChartBarIcon, 
  TrendingUpIcon, 
  CurrencyDollarIcon,
  ShoppingCartIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Exemplos() {
  const successCases = [
    {
      id: 1,
      title: 'Fones Bluetooth Premium',
      category: 'Eletrônicos',
      image: '🎧',
      originalPrice: 15.99,
      importCost: 45.30,
      taxes: 18.50,
      totalCost: 78.80,
      marketPrice: 149.90,
      profit: 71.10,
      margin: 47.4,
      monthlyVolume: 250,
      monthlyRevenue: 17775,
      description: 'Fones sem fio com cancelamento de ruído que se tornaram um sucesso de vendas.'
    },
    {
      id: 2,
      title: 'Smartwatch Fitness',
      category: 'Wearables',
      image: '⌚',
      originalPrice: 35.50,
      importCost: 89.20,
      taxes: 35.60,
      totalCost: 160.30,
      marketPrice: 299.90,
      profit: 139.60,
      margin: 46.5,
      monthlyVolume: 180,
      monthlyRevenue: 25128,
      description: 'Relógio inteligente com monitor cardíaco e GPS integrado.'
    },
    {
      id: 3,
      title: 'Tênis Esportivos',
      category: 'Calçados',
      image: '👟',
      originalPrice: 28.90,
      importCost: 78.50,
      taxes: 31.20,
      totalCost: 138.60,
      marketPrice: 249.90,
      profit: 111.30,
      margin: 44.5,
      monthlyVolume: 120,
      monthlyRevenue: 13368,
      description: 'Tênis para corrida com tecnologia de amortecimento avançada.'
    }
  ]

  const detailedCase = {
    title: 'Caso de Sucesso: Fones Bluetooth Premium',
    timeline: [
      { month: 'Mês 1', investment: 5000, revenue: 3200, profit: -1800 },
      { month: 'Mês 2', investment: 0, revenue: 8500, profit: 6700 },
      { month: 'Mês 3', investment: 3000, revenue: 12400, profit: 9400 },
      { month: 'Mês 4', investment: 0, revenue: 15800, profit: 12800 },
      { month: 'Mês 5', investment: 5000, revenue: 18200, profit: 13200 },
      { month: 'Mês 6', investment: 0, revenue: 21500, profit: 16500 }
    ],
    insights: [
      'Produto validado em 2 meses',
      'ROI de 47% ao mês após estabilização',
      'Demanda crescente identificada através de análise de mercado',
      'Escalabilidade comprovada com aumento de pedidos'
    ]
  }

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
              <Link href="/planos" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              Exemplos de <span className="text-blue-600">Sucessos Reais</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Veja como nossos usuários PRO descobriram produtos lucrativos e construíram negócios de sucesso
            </p>

            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <TrendingUpIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>+500 produtos analisados</span>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>R$ 2M+ em vendas geradas</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>95% taxa de sucesso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produtos que Geraram Lucro Real
            </h2>
            <p className="text-xl text-gray-600">
              Análises detalhadas de produtos que nossos usuários importaram com sucesso
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successCases.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{product.image}</div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Preço original:</span>
                      <span className="font-medium">US$ {product.originalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Custo total:</span>
                      <span className="font-medium">R$ {product.totalCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Preço de venda:</span>
                      <span className="font-medium">R$ {product.marketPrice.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-green-600 font-bold">Lucro por unidade:</span>
                        <span className="text-green-600 font-bold">R$ {product.profit.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-600 font-bold">Margem:</span>
                        <span className="text-green-600 font-bold">{product.margin.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">Performance Mensal</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-600">Volume:</span>
                        <div className="font-bold text-green-800">{product.monthlyVolume} unidades</div>
                      </div>
                      <div>
                        <span className="text-green-600">Receita:</span>
                        <div className="font-bold text-green-800">R$ {product.monthlyRevenue.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Simular Produto Similar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estudo de Caso Detalhado
            </h2>
            <p className="text-xl text-gray-600">
              Acompanhe a jornada completa de um usuário PRO
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{detailedCase.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">Evolução Financeira (6 meses)</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    {detailedCase.timeline.map((period, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">{period.month}</span>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">
                            Investimento: R$ {period.investment.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Receita: R$ {period.revenue.toLocaleString()}
                          </div>
                          <div className={`font-bold ${period.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            Lucro: R$ {period.profit.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-4">Insights Principais</h4>
                  <ul className="space-y-2">
                    {detailedCase.insights.map((insight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-blue-800">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">Resumo do Sucesso</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">R$ 95k</div>
                      <div className="text-sm text-gray-600">Receita Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">R$ 57k</div>
                      <div className="text-sm text-gray-600">Lucro Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">438%</div>
                      <div className="text-sm text-gray-600">ROI Total</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">6</div>
                      <div className="text-sm text-gray-600">Meses</div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Estratégia Utilizada</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Validação Inicial</h5>
                        <p className="text-sm text-gray-600">Usou o ImportaFácil para analisar 15 produtos diferentes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Teste Pequeno</h5>
                        <p className="text-sm text-gray-600">Começou com pedido de 20 unidades para testar o mercado</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-blue-600 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Escalonamento</h5>
                        <p className="text-sm text-gray-600">Aumentou gradualmente os pedidos conforme a demanda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Encontrar Seu Próximo Produto de Sucesso?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se aos importadores que já descobriram produtos lucrativos com nossa plataforma
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center"
            >
              Começar Grátis Agora
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/planos"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Ver Planos PRO
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Simulações realizadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">R$ 2M+</div>
              <div className="text-blue-100">Em vendas geradas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Taxa de sucesso</div>
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