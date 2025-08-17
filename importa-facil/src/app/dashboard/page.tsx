'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChartBarIcon, 
  DocumentArrowDownIcon, 
  ShareIcon,
  ClockIcon,
  FunnelIcon,
  StarIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('simular')
  const [simulationResult, setSimulationResult] = useState<any>(null)
  const [productUrl, setProductUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Mock user data
  const user = {
    name: 'João Silva',
    plan: 'gratis', // 'gratis' or 'premium'
    simulationsUsed: 2,
    simulationsLimit: 3
  }

  // Mock simulation history
  const simulationHistory = [
    {
      id: 1,
      name: 'Fone Bluetooth JBL',
      image: '🎧',
      margin: 70,
      date: '2024-01-15',
      category: 'Eletrônicos'
    },
    {
      id: 2,
      name: 'Tênis Nike Air',
      image: '👟',
      margin: 45,
      date: '2024-01-14',
      category: 'Calçados'
    },
    {
      id: 3,
      name: 'Smartwatch Apple',
      image: '⌚',
      margin: 65,
      date: '2024-01-13',
      category: 'Eletrônicos'
    }
  ]

  const handleSimulation = async () => {
    if (!productUrl) return
    
    setIsLoading(true)
    
    // Mock simulation - in real app, this would call an API
    setTimeout(() => {
      setSimulationResult({
        productName: 'Fone Bluetooth Premium',
        originalPrice: 25.99,
        importCost: 58.50,
        taxes: 23.40,
        shipping: 15.00,
        totalCost: 96.90,
        marketPrice: 159.90,
        estimatedMargin: 63,
        marketplaces: {
          mercadoLivre: 159.90,
          shopee: 149.90,
          amazon: 169.90
        }
      })
      setIsLoading(false)
    }, 2000)
  }

  const Sidebar = () => (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0">
      <div className="p-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ImportaFácil
        </Link>
      </div>
      
      <nav className="mt-8">
        <div className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Menu
        </div>
        
        <button
          onClick={() => setActiveTab('simular')}
          className={`w-full text-left px-6 py-3 flex items-center space-x-3 ${
            activeTab === 'simular' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ChartBarIcon className="h-5 w-5" />
          <span>Simular</span>
        </button>
        
        <button
          onClick={() => setActiveTab('historico')}
          className={`w-full text-left px-6 py-3 flex items-center space-x-3 ${
            activeTab === 'historico' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <ClockIcon className="h-5 w-5" />
          <span>Histórico</span>
        </button>
        
        <button
          onClick={() => setActiveTab('plano')}
          className={`w-full text-left px-6 py-3 flex items-center space-x-3 ${
            activeTab === 'plano' ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <CreditCardIcon className="h-5 w-5" />
          <span>Plano</span>
        </button>
        
        <Link
          href="/conta"
          className="w-full text-left px-6 py-3 flex items-center space-x-3 text-gray-700 hover:bg-gray-50"
        >
          <StarIcon className="h-5 w-5" />
          <span>Conta</span>
        </Link>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">JS</span>
            </div>
            <div>
              <div className="font-medium text-sm">{user.name}</div>
              <div className="text-xs text-gray-500 capitalize">Plano {user.plan}</div>
            </div>
          </div>
          {user.plan === 'gratis' && (
            <div className="text-xs text-gray-500">
              {user.simulationsUsed}/{user.simulationsLimit} simulações usadas
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const SimulationTab = () => (
    <div className="space-y-6">
      {/* Premium Banner for Free Users */}
      {user.plan === 'gratis' && user.simulationsUsed >= user.simulationsLimit - 1 && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Você já usou {user.simulationsUsed}/{user.simulationsLimit} simulações grátis
              </h3>
              <p className="text-blue-100">
                Faça o upgrade para ter simulações ilimitadas e relatórios completos.
              </p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-50">
              Assinar PRO agora
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nova Simulação</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cole o link do produto
            </label>
            <div className="flex space-x-4">
              <input
                type="url"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                placeholder="https://pt.aliexpress.com/item/..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSimulation}
                disabled={!productUrl || isLoading}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'Simulando...' : 'Simular'}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Suportamos links do AliExpress, Amazon e Shopee
            </p>
          </div>
        </div>
      </div>

      {/* Simulation Result */}
      {simulationResult && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Resultado da Simulação
            </h3>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  user.plan === 'premium' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={user.plan !== 'premium'}
              >
                <DocumentArrowDownIcon className="h-4 w-4 inline mr-1" />
                Exportar PDF
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  user.plan === 'premium' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={user.plan !== 'premium'}
              >
                <DocumentArrowDownIcon className="h-4 w-4 inline mr-1" />
                Exportar Excel
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                <ShareIcon className="h-4 w-4 inline mr-1" />
                Compartilhar
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Cost Breakdown */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Custos de Importação</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Preço original:</span>
                  <span className="font-medium">US$ {simulationResult.originalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Custo + frete:</span>
                  <span className="font-medium">R$ {simulationResult.importCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impostos:</span>
                  <span className="font-medium">R$ {simulationResult.taxes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete nacional:</span>
                  <span className="font-medium">R$ {simulationResult.shipping}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Custo total:</span>
                    <span>R$ {simulationResult.totalCost}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Analysis */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Análise de Mercado</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mercado Livre:</span>
                  <span className="font-medium">R$ {simulationResult.marketplaces.mercadoLivre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shopee:</span>
                  <span className="font-medium">R$ {simulationResult.marketplaces.shopee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amazon:</span>
                  <span className="font-medium">R$ {simulationResult.marketplaces.amazon}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-green-600">
                    <span>Margem estimada:</span>
                    <span>{simulationResult.estimatedMargin}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ChartBarIcon className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Produto com boa margem de lucro! 
                  Investimento inicial recomendado: R$ 500 - R$ 1.000
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const HistoryTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Histórico de Simulações</h2>
          <div className="flex space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todas as categorias</option>
              <option>Eletrônicos</option>
              <option>Calçados</option>
              <option>Roupas</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Margem maior que 50%</option>
              <option>Margem maior que 60%</option>
              <option>Margem maior que 70%</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {simulationHistory.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{item.image}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.category} • {new Date(item.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      {item.margin}%
                    </div>
                    <div className="text-sm text-gray-500">margem</div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Ver detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const PlanTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Seu Plano Atual</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Plan */}
          <div className={`border-2 rounded-xl p-6 ${user.plan === 'gratis' ? 'border-gray-200' : 'border-blue-500'}`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 capitalize">
                Plano {user.plan}
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {user.plan === 'gratis' ? 'R$ 0' : 'R$ 19,90'}
              </div>
              {user.plan === 'gratis' && <p className="text-gray-600">Para começar</p>}
              {user.plan === 'premium' && <p className="text-gray-600">por mês</p>}
            </div>

            {user.plan === 'gratis' && (
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Simulações usadas:</span>
                  <span className="font-medium">{user.simulationsUsed}/{user.simulationsLimit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(user.simulationsUsed / user.simulationsLimit) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Upgrade Option */}
          {user.plan === 'gratis' && (
            <div className="border-2 border-blue-500 rounded-xl p-6 bg-blue-50">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">R$ 19,90</div>
                <p className="text-gray-600">por mês</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Simulações ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Exportação PDF/Excel</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Relatórios de mercado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Suporte prioritário</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Assinar Premium
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'simular' && <SimulationTab />}
          {activeTab === 'historico' && <HistoryTab />}
          {activeTab === 'plano' && <PlanTab />}
        </div>
      </div>
    </div>
  )
}