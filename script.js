AOS.init();

const dropdown = document.querySelectorAll(".dropdown");
const responseOfQuestions = document.querySelectorAll(".res");
const cardsGoal = document.querySelectorAll(".card-goal");
const textsGoal = [
  "Princípio 1 – Autoconsciência Resultado: Expandir a consciência para compreender suas próprias emoções, valores e objetivos. Princípio 2  - Autodisciplina Resultado: Ser capaz de controlar impulsos e adiar gratificações imediatas em prol de metas de longo prazo. Princípio 3 - Autocompaixão Resultado: Tratar-se com gentileza e compreensão em momentos de falha e sofrimento.",
  "Princípio 4 – Legado Resultado: Compreender como influenciar positivamente o mundo e as pessoas ao seu redor. Princípio 5 - Inteligência Resultado: Valorizar suas habilidades e saber utilizá-las da melhor forma, a depender de cada situação Princípio 6 - Relacionamentos chave Resultado: Cultivar bons relacionamentos, pois a forma como estabelece os relações interpessoais determina seus resultados ao longo da vida.",
  "Princípio 7 – Propósito Verdadeiro Resultado: Compreender seu dom dominante e o seu verdadeiro propósito profissional. Princípio 8- Gerenciamento de Tempo Resultado: Organizar e priorizar tarefas de forma eficiente para maximizar os resultados. Princípio 9 – Comunicação eficiente Resultado: Aprimorar habilidades de comunicação, tornando suas interações mais eficazes, produtivas e harmoniosas.",
  "Princípio 10 – Integridade e Autenticidade Resultado: Uma vida de paz, realização pessoal de recompensa eterna. Princípio 11 - Sabedoria Resultado: Aprender a aplicar um recurso que nunca se acaba. Princípio 12 – Pensamento  Resultado: Fortalecer a capacidade de aplicar planos e metas de maneira firme e coerente, beneficiando a si mesmo e todos ao redor.",
];
const states = new Array(dropdown.length).fill(false);
const modalGoal = document.getElementById("modal-goal");
modalGoal.style.display = "none";
const closeModalGoalButton = document.getElementById("close-modal");
const contentModalGoal = document.querySelector(".content-modal-goal");
let modalGoalIsOpen = false;

dropdown.forEach((item, i) => {
  item.onclick = () => {
    states[i] = !states[i];

    states[i]
      ? (responseOfQuestions[i].style.display = "flex")
      : (responseOfQuestions[i].style.display = "none");
  };
});

cardsGoal.forEach((item, i) => {
  item.onclick = () => {
    modalGoalIsOpen = !modalGoalIsOpen;
    contentModalGoal.innerHTML = textsGoal[i];

    if (modalGoalIsOpen) {
      document.body.style.overflow = "hidden";
      modalGoal.style.display = "flex";
      return;
    }

    modalGoal.style.display = "none";
  };
});

closeModalGoalButton.onclick = () => {
  modalGoalIsOpen = !modalGoalIsOpen;
  document.body.style.overflow = "initial";

  modalGoal.style.display = "none";
};
