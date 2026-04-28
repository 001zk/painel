# LZK Painel

Painel administrativo web simples com autenticação local. Projeto de estudo desenvolvido para explorar o fluxo completo de login → área restrita usando Node.js no backend e HTML/CSS/JS puro no frontend — sem frameworks.

---

## Stack

- **Frontend:** HTML5 · CSS3 · JavaScript (Vanilla)
- **Backend:** Node.js · Express
- **Autenticação:** Validação server-side com sessão simples

---

## Estrutura

```
painel/
├── index.html          # Tela de login
├── painel-adm.html     # Área administrativa
├── script.js           # Lógica de login (frontend)
├── painel-adm.js       # Lógica do painel (frontend)
├── style.css           # Estilos
└── server.js           # Servidor Node.js / rotas
```

---

## Como rodar

```bash
# Instalar dependências
npm install

# Iniciar o servidor
node server.js
```

Acesse `http://localhost:3000` no navegador.

---

## Contexto

Projeto de aprendizado — foco em entender o ciclo request/response HTTP, proteção de rotas no servidor e separação de responsabilidades entre front e back sem depender de frameworks ou bibliotecas externas.

---

> Desenvolvido por [LzK](https://github.com/001zk)
