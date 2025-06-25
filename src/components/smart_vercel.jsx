export default function SmartTray() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo Principal */}
          <div className="relative">
            <svg
              width="200"
              height="120"
              viewBox="0 0 200 120"
              className="drop-shadow-lg"
            >
              {/* Bandeja Base */}
              <defs>
                <linearGradient
                  id="trayGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
                <linearGradient
                  id="circuitGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>

              {/* Bandeja Principal */}
              <rect
                x="20"
                y="60"
                width="160"
                height="40"
                rx="8"
                fill="url(#trayGradient)"
                stroke="#1E40AF"
                strokeWidth="2"
              />

              {/* Bordas da Bandeja */}
              <rect
                x="15"
                y="55"
                width="8"
                height="50"
                rx="4"
                fill="url(#trayGradient)"
              />
              <rect
                x="177"
                y="55"
                width="8"
                height="50"
                rx="4"
                fill="url(#trayGradient)"
              />

              {/* Circuitos Tecnológicos */}
              <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
                {/* Linhas de Circuito */}
                <path d="M40 70 L60 70 L60 50 L80 50" />
                <path d="M120 50 L140 50 L140 70 L160 70" />
                <path d="M70 90 L90 90 L90 110" />
                <path d="M110 110 L110 90 L130 90" />

                {/* Nós de Conexão */}
                <circle cx="60" cy="50" r="3" fill="#10B981" />
                <circle cx="80" cy="50" r="3" fill="#10B981" />
                <circle cx="120" cy="50" r="3" fill="#10B981" />
                <circle cx="140" cy="70" r="3" fill="#10B981" />
                <circle cx="90" cy="90" r="3" fill="#10B981" />
                <circle cx="110" cy="90" r="3" fill="#10B981" />
              </g>

              {/* Chip Central (ESP32) */}
              <rect
                x="85"
                y="65"
                width="30"
                height="30"
                rx="4"
                fill="#1F2937"
                stroke="#10B981"
                strokeWidth="2"
              />

              {/* Detalhes do Chip */}
              <rect x="90" y="70" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="96" y="70" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="102" y="70" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="108" y="70" width="4" height="4" rx="1" fill="#10B981" />

              <rect x="90" y="76" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="96" y="76" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="102" y="76" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="108" y="76" width="4" height="4" rx="1" fill="#10B981" />

              <rect x="90" y="82" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="96" y="82" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="102" y="82" width="4" height="4" rx="1" fill="#10B981" />
              <rect x="108" y="82" width="4" height="4" rx="1" fill="#10B981" />

              {/* Indicador de Conectividade */}
              <g transform="translate(160, 30)">
                <path
                  d="M0 10 Q5 5 10 10 Q15 15 20 10"
                  stroke="#10B981"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M2 15 Q7 10 12 15 Q17 20 22 15"
                  stroke="#10B981"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M4 20 Q9 15 14 20 Q19 25 24 20"
                  stroke="#10B981"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />
              </g>
            </svg>
          </div>

          {/* Nome da Marca */}
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Smart<span className="text-emerald-500">Tray</span>
            </h1>
            <p className="text-gray-500 text-sm mt-2 font-medium">
              Bandeja Inteligente
            </p>
          </div>

          {/* Versões Alternativas */}
          <div className="grid grid-cols-2 gap-4 w-full mt-8">
            {/* Versão Compacta */}
            <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center">
              <svg width="60" height="40" viewBox="0 0 200 120">
                <rect
                  x="20"
                  y="60"
                  width="160"
                  height="40"
                  rx="8"
                  fill="#3B82F6"
                />
                <rect
                  x="85"
                  y="65"
                  width="30"
                  height="30"
                  rx="4"
                  fill="#1F2937"
                  stroke="#10B981"
                  strokeWidth="2"
                />
                <circle cx="100" cy="80" r="2" fill="#10B981" />
              </svg>
              <span className="text-xs text-gray-600 mt-2">Ícone App</span>
            </div>

            {/* Versão Monocromática */}
            <div className="bg-gray-900 rounded-xl p-4 flex flex-col items-center">
              <svg width="60" height="40" viewBox="0 0 200 120">
                <rect
                  x="20"
                  y="60"
                  width="160"
                  height="40"
                  rx="8"
                  fill="#FFFFFF"
                />
                <rect
                  x="85"
                  y="65"
                  width="30"
                  height="30"
                  rx="4"
                  fill="#000000"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                <circle cx="100" cy="80" r="2" fill="#FFFFFF" />
              </svg>
              <span className="text-xs text-gray-400 mt-2">Monocromático</span>
            </div>
          </div>
        </div>
      </div>

      {/* Informações Técnicas */}
      <div className="mt-8 bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-3">
          Especificações da Logo
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Cores Principais:</span>
            <span>#3B82F6, #10B981</span>
          </div>
          <div className="flex justify-between">
            <span>Formato:</span>
            <span>SVG (Escalável)</span>
          </div>
          <div className="flex justify-between">
            <span>Uso:</span>
            <span>App Mobile, Web</span>
          </div>
          <div className="flex justify-between">
            <span>Tema:</span>
            <span>IoT, Tecnologia</span>
          </div>
        </div>
      </div>
    </div>
  );
}
