import { 
  RocketLaunchIcon, 
  ChartBarIcon, 
  LightBulbIcon, 
  ShieldCheckIcon,
  CheckIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
              <Link href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">
                Como Funciona
              </Link>
              <Link href="#simulacoes" className="text-gray-700 hover:text-blue-600 transition-colors">
                Simulações
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
              href="#simular" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Simular Agora
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Descubra em segundos se vale a pena{' '}
              <span className="text-blue-600">importar qualquer produto</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cole o link do AliExpress, Amazon ou Shopee e veja impostos, margens e mercado real no Brasil.
            </p>

            <div id="simular" className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="url"
                  placeholder="Cole o link aqui"
                  className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg">
                  Simular grátis agora
                </button>
              </div>
            </div>

            {/* Benefits Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <RocketLaunchIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">Cálculo automático de impostos e taxas</p>
              </div>
              <div className="text-center">
                <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">Análise de preço real no Mercado Livre, Shopee e Amazon</p>
              </div>
              <div className="text-center">
                <LightBulbIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">Validação de mercado instantânea</p>
              </div>
              <div className="text-center">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">Segurança e dados confiáveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="simulacoes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exemplos de Simulações Reais
            </h2>
            <p className="text-xl text-gray-600">
              Veja como nossos usuários PRO descobrem produtos lucrativos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">🎧 Fone Bluetooth</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Fone Bluetooth</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Custo importação:</span>
                  <span className="font-medium">R$ 58</span>
                </div>
                <div className="flex justify-between">
                  <span>Preço médio venda:</span>
                  <span className="font-medium">R$ 129</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Lucro estimado:</span>
                  <span>70%</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Simular algo parecido
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">👟 Tênis Esportivo</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Tênis Esportivo</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Custo importação:</span>
                  <span className="font-medium">R$ 120</span>
                </div>
                <div className="flex justify-between">
                  <span>Preço médio venda:</span>
                  <span className="font-medium">R$ 249</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Lucro estimado:</span>
                  <span>60%</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Simular algo parecido
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">⌚ Relógio Smartwatch</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Relógio Smartwatch</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Custo importação:</span>
                  <span className="font-medium">R$ 89</span>
                </div>
                <div className="flex justify-between">
                  <span>Preço médio venda:</span>
                  <span className="font-medium">R$ 210</span>
                </div>
                <div className="flex justify-between text-green-600 font-bold">
                  <span>Lucro estimado:</span>
                  <span>65%</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Simular algo parecido
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos usuários dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">MC</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Clara</h4>
                  <p className="text-gray-600 text-sm">Empreendedora</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Com o ImportaFácil consegui validar meus produtos antes de arriscar dinheiro. Economizei muito!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">João Silva</h4>
                  <p className="text-gray-600 text-sm">Importador</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Assinei o PRO e agora já sei exatamente o que importar e onde revender."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Grátis</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">R$ 0</div>
                <p className="text-gray-600">Para começar</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>Até 3 simulações/mês</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span>Cálculo básico de impostos</span>
                </li>
                <li className="flex items-center">
                  <XMarkIcon className="h-5 w-5 text-red-500 mr-3" />
                  <span>Exportação PDF/Excel</span>
                </li>
                <li className="flex items-center">
                  <XMarkIcon className="h-5 w-5 text-red-500 mr-3" />
                  <span>Relatórios de mercado</span>
                </li>
              </ul>

              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                Começar Grátis
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-blue-600 text-white rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
                Mais Popular
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-2">R$ 19,90</div>
                <p className="text-blue-100">por mês</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                  <span>Simulações ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                  <span>Exportação PDF/Excel</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                  <span>Relatórios de mercado</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-400 mr-3" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>

              <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Assinar PRO – R$ 19,90/mês
              </button>
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
