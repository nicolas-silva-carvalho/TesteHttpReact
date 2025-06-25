import React from "react";

export default function SmartTrayLogo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #bfdbfe 0%, #6366f1 100%)",
        padding: 32,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 48,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          padding: 48,
          maxWidth: 400,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* Logo Principal */}
        <div style={{ position: "relative" }}>
          <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            style={{ filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.25))" }}
            xmlns="http://www.w3.org/2000/svg"
          >
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
            {[70, 76, 82].map((y) =>
              [90, 96, 102, 108].map((x) => (
                <rect
                  key={`${x}-${y}`}
                  x={x}
                  y={y}
                  width="4"
                  height="4"
                  rx="1"
                  fill="#10B981"
                />
              ))
            )}

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
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: 36,
              fontWeight: "bold",
              background: "linear-gradient(90deg, #2563EB 0%, #4F46E5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            Smart
            <span style={{ color: "#10B981" }}>Tray</span>
          </h1>
          <p
            style={{
              color: "#6B7280",
              fontSize: 14,
              marginTop: 8,
              fontWeight: 500,
            }}
          >
            Bandeja Inteligente
          </p>
        </div>

        {/* Versões Alternativas */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
            width: "100%",
            marginTop: 32,
          }}
        >
          {/* Versão Compacta */}
          <div
            style={{
              background: "#F9FAFB",
              borderRadius: 16,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              width="60"
              height="40"
              viewBox="0 0 200 120"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <span style={{ fontSize: 12, color: "#4B5563", marginTop: 8 }}>
              Ícone App
            </span>
          </div>

          {/* Versão Monocromática */}
          <div
            style={{
              background: "#111827",
              borderRadius: 16,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              width="60"
              height="40"
              viewBox="0 0 200 120"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            <span style={{ fontSize: 12, color: "#9CA3AF", marginTop: 8 }}>
              Monocromático
            </span>
          </div>
        </div>
      </div>

      {/* Informações Técnicas */}
      <div
        style={{
          marginTop: 32,
          background: "white",
          borderRadius: 16,
          padding: 24,
          maxWidth: 400,
          width: "100%",
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            fontWeight: 600,
            color: "#374151",
            marginBottom: 12,
          }}
        >
          Especificações da Logo
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontSize: 14,
            color: "#4B5563",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Cores Principais:</span>
            <span>#3B82F6, #10B981</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Formato:</span>
            <span>SVG (Escalável)</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Uso:</span>
            <span>App Mobile, Web</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Tema:</span>
            <span>IoT, Tecnologia</span>
          </div>
        </div>
      </div>
    </div>
  );
}
