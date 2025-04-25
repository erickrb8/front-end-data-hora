# ⏰ Data e Hora em Tempo Real por Localidade

Este projeto exibe a **data e a hora atualizadas em tempo real**, com base na **localidade selecionada** pelo usuário, utilizando uma **API externa**.

---

## 🚀 Funcionalidades

- ✅ Atualização da data e hora a cada segundo via `setInterval`
- 🌍 Seleção de localidade via dropdown (`pt-br`, `en-us`, etc.)
- 🔄 Consulta automática à API: `/api/datetime/{locale}`
- 🧠 Formatação de data/hora baseada no retorno da API
---

## 🧱 Estrutura do Projeto

```bash
📁 projeto-data-hora
├── index.html          # Estrutura principal da página
├── styles.css          # Estilo visual (CSS)
└── script.js           # Lógica e integração com a API
