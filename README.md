# Projeto ToDo Acessível

## Descrição
Este projeto consiste em um aplicativo de lista de tarefas (**ToDo**) com foco em **usabilidade e acessibilidade**, desenvolvido como atividade de extensão da disciplina de Engenharia de Software.

O objetivo é permitir que qualquer usuário, independentemente de suas habilidades sensoriais ou cognitivas, consiga adicionar, concluir, desmarcar e excluir tarefas de forma simples e eficiente.

---

## Funcionalidades

- **Adicionar tarefa:** Insere uma nova tarefa na lista.
- **Concluir / Desmarcar:** Marca a tarefa como concluída ou desfaz a conclusão, riscando o texto.
- **Mensagem temporária:** Exibe um aviso rápido "Tarefa concluída!" quando uma tarefa é marcada como feita.
- **Excluir tarefa:** Remove a tarefa individualmente.
- **Limpar tarefas:** Botões para remover todas as tarefas ou apenas as concluídas.
- **Persistência de dados:** As tarefas são salvas no navegador usando `localStorage`.

---

## Tecnologias Utilizadas

- **HTML5** – estrutura do aplicativo.
- **CSS3** – layout e estilo acessível.
- **JavaScript** – funcionalidades e persistência de dados.

---

## Acessibilidade

O projeto inclui recursos de acessibilidade:

- Labels claros para formulários.
- Mensagens temporárias com `aria-live` para feedback ao usuário.
- Botões legíveis e com contraste adequado.
- Estrutura semântica de lista (`<ul>` e `<li>`).

---

## Como Rodar o Projeto

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/seu-usuario/Projeto-ToDo-Acessivel.git
