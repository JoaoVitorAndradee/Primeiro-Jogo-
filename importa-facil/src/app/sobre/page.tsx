import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  ChartBarIcon, 
  CpuChipIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

export default function Sobre() {
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
              <Link href="/sobre" className="text-blue-600 font-medium">
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
              Sobre o <span className="text-blue-600">ImportaFácil</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Democratizando o acesso à importação através de tecnologia e dados precisos.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <LightBulbIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Tornar a importação simples, acessível e segura para qualquer pessoa
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Acreditamos que todos devem ter acesso às oportunidades do mercado global. 
                  Por isso, desenvolvemos uma plataforma que elimina as barreiras técnicas e 
                  burocráticas da importação, oferecendo dados precisos e análises detalhadas 
                  para que você tome decisões informadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona Nosso Algoritmo
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologia avançada para cálculos precisos e análises de mercado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <CpuChipIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cálculo Automático de Impostos
                </h3>
                <p className="text-gray-600">
                  Nosso sistema calcula automaticamente todos os impostos e taxas aplicáveis, 
                  incluindo ICMS, IPI, PIS/COFINS e taxa de armazenagem dos Correios.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Análise de Preços Reais
                </h3>
                <p className="text-gray-600">
                  Coletamos dados em tempo real do Mercado Livre, Shopee e Amazon para 
                  fornecer uma visão precisa dos preços praticados no mercado brasileiro.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dados Confiáveis
                </h3>
                <p className="text-gray-600">
                  Utilizamos APIs oficiais e fontes verificadas para garantir a precisão 
                  dos cálculos e a confiabilidade das informações apresentadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600">
              Profissionais experientes em tecnologia, importação e e-commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">RC</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rafael Costa</h3>
              <p className="text-blue-600 font-medium mb-3">CEO & Co-fundador</p>
              <p className="text-gray-600">
                10+ anos em e-commerce e importação. Ex-gerente de produto em grandes 
                marketplaces brasileiros.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">MS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marina Silva</h3>
              <p className="text-blue-600 font-medium mb-3">CTO & Co-fundadora</p>
              <p className="text-gray-600">
                Engenheira de software com especialização em sistemas de análise de dados 
                e machine learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-blue-600">TA</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thiago Almeida</h3>
              <p className="text-blue-600 font-medium mb-3">Head de Produto</p>
              <p className="text-gray-600">
                Especialista em comércio exterior e regulamentações aduaneiras. 
                15+ anos de experiência em importação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Nossos Números
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
                <div className="text-blue-100">Simulações realizadas</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2.5k+</div>
                <div className="text-blue-100">Usuários ativos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Precisão dos cálculos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Produtos analisados diariamente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-xl text-gray-600">
              Trabalhamos com as melhores empresas do setor
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">Receita Federal</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">Correios</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">BACEN</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">MDIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Junte-se a milhares de importadores que já descobriram produtos lucrativos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cadastro"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Começar Grátis
              </Link>
              <Link
                href="/planos"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Ver Planos
              </Link>
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