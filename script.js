AOS.init();

const dropdown = document.querySelectorAll(".dropdown");
const responseOfQuestions = document.querySelectorAll(".res");
const cardsGoal = document.querySelectorAll(".card-goal");
const numberPrinciple = document.querySelectorAll(".number-principle");
const principleOf = document.querySelectorAll(".principle-of");
const descriptionPrinciple = document.querySelectorAll(
  ".description-principle"
);
const principlesOfGoals = [
  {
    id: "01",
    principle: "Autoconsciência",
    description:
      "Expandir a consciência para compreender suas próprias emoções, valores e objetivos.",
  },
  {
    id: "02",
    principle: "Autodisciplina",
    description:
      "Ser capaz de controlar impulsos e adiar gratificações imediatas em prol de metas de longo prazo.",
  },
  {
    id: "03",
    principle: "Autocompaixão",
    description:
      "Tratar-se com gentileza e compreensão em momentos de falha e sofrimento.",
  },
  {
    id: "04",
    principle: "Legado",
    description:
      "Compreender como influenciar positivamente o mundo e as pessoas ao seu redor.",
  },
  {
    id: "05",
    principle: "Inteligência",
    description:
      "Valorizar suas habilidades e saber utilizá-las da melhor forma, a depender de cada situação.",
  },
  {
    id: "06",
    principle: "Relacionamentos",
    description:
      "Cultivar bons relacionamentos, pois a forma como estabelece as relações interpessoais determina seus resultados ao longo da vida.",
  },
  {
    id: "07",
    principle: "Propósito Verdadeiro",
    description:
      "Compreender seu dom dominante e o seu verdadeiro propósito profissional.",
  },
  {
    id: "08",
    principle: "Gerência de Tempo",
    description:
      "Organizar e priorizar tarefas de forma eficiente para maximizar os resultados.",
  },
  {
    id: "09",
    principle: "Comunicação",
    description:
      "Aprimorar habilidades de comunicação, tornando suas interações mais eficazes, produtivas e harmoniosas.",
  },
  {
    id: "10",
    principle: "Integridade | Autenticidade",
    description: "Uma vida de paz, de realização pessoal com recompensa eterna.",
  },
  {
    id: "11",
    principle: "Sabedoria",
    description: "Aprender a aplicar um recurso que nunca se acaba.",
  },
  {
    id: "12",
    principle: "Pensamento",
    description:
      "Fortalecer a capacidade de aplicar planos e metas de maneira firme e coerente, beneficiando a si mesmo e todos ao redor.",
  },
];

const states = new Array(dropdown.length).fill(false);

dropdown.forEach((item, i) => {
  item.onclick = () => {
    states[i] = !states[i];

    states[i]
      ? (responseOfQuestions[i].style.display = "flex")
      : (responseOfQuestions[i].style.display = "none");
  };
});

cardsGoal.forEach((item, i, arr) => {
  item.onclick = () => {
    arr.forEach((item) => (item.style.borderColor = "gray"));
    item.style.borderColor = "#FFC107";

    principlesOfGoals
      .slice(3 * (i + 1 - 1), 3 * (i + 1 - 1) + 3)
      .forEach((item, i) => {
        numberPrinciple[i].innerHTML = item.id;
        principleOf[i].innerHTML = item.principle;
        descriptionPrinciple[i].innerHTML = item.description;
      });
  };
});
