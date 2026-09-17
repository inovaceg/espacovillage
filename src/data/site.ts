export type GalleryCategory = "Área Verde" | "Estrutura" | "Acomodações" | "Ambientes";

export type Treatment = {
  name: string;
  slug: string;
  description: string;
  image?: string;
  information: string[];
  frequentlyAskedQuestions: string[];
  cta: string;
};

export const site = {
  name: "Espaço Village",
  phone: "(21) 2538-1202",
  phoneHref: "tel:+552125381202",
  whatsapp: {
    display: "(21) 99071-6245",
    href: "https://wa.me/5521990716245",
  },
  canonical: "https://espacovillage.com.br",
  addressGuapi: "Rua Um, 1038 / Jardim Anápolis / Guapimirim — RJ / CEP 25940-000",
  addressCopa: "Av. Nossa Senhora de Copacabana, 788 / Grupos 501 a 504 / Copacabana — Rio de Janeiro — RJ. A Clínica fica do lado esquerdo no sentido da Av. Nossa Senhora de Copacabana, no centro do quarteirão entre as ruas Dias da Rocha e Raimundo Correia.",
  photos: [
    { src: "/assets/clinica-jardim.jpeg", alt: "Jardim do Espaço Village", category: "Área Verde" as GalleryCategory },
    { src: "/assets/clinica-espaco.jpeg", alt: "Área externa do Espaço Village", category: "Estrutura" as GalleryCategory },
    { src: "/assets/clinica-piscina.jpeg", alt: "Piscina registrada na propriedade", category: "Estrutura" as GalleryCategory },
    { src: "/assets/clinica-area-verde.jpeg", alt: "Área verde da propriedade", category: "Área Verde" as GalleryCategory },
    { src: "/assets/clinica-area-recreativa.jpeg", alt: "Área recreativa externa registrada", category: "Estrutura" as GalleryCategory },
    { src: "/assets/clinica-detalhe.jpeg", alt: "Detalhe de um ambiente do Espaço Village", category: "Ambientes" as GalleryCategory },
    { src: "/assets/clinica-paisagem.jpeg", alt: "Paisagem da propriedade", category: "Área Verde" as GalleryCategory },
    { src: "/assets/clinica-interior.jpeg", alt: "Ambiente interno do Espaço Village", category: "Ambientes" as GalleryCategory },
  ],
};

export const galleryCategories: Array<"Todos" | GalleryCategory> = ["Todos", "Área Verde", "Estrutura", "Acomodações", "Ambientes"];

export const navItems = [
  ["Início", "/"],
  ["A clínica", "/a-clinica"],
  ["Tratamentos", "/tratamentos"],
  ["Estrutura", "/estrutura"],
  ["Equipe", "/equipe"],
  ["Unidades", "/unidades"],
  ["Galeria", "/galeria"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
  ["Contato", "/contato"],
] as const;

export const treatments: Treatment[] = [
  {
    name: "Dependência Química",
    slug: "dependencia-quimica",
    description: "Tratamento individualizado para pessoas que enfrentam problemas relacionados ao uso de álcool e outras drogas, com abordagem multidisciplinar e estratégias voltadas à recuperação e prevenção de recaídas.",
    image: "/assets/clinica-jardim.jpeg",
    information: [
      "O uso problemático de álcool e outras drogas pode afetar diferentes áreas da vida, incluindo saúde, relacionamentos, família, trabalho e estabilidade emocional.",
      "O primeiro passo do processo é uma avaliação clínica e biopsicossocial. A partir dela, é possível compreender as necessidades do paciente e estabelecer um plano terapêutico individualizado.",
    ],
    frequentlyAskedQuestions: [],
    cta: "Conheça o tratamento",
  },
  {
    name: "Tratamento do Alcoolismo",
    slug: "alcoolismo",
    description: "Abordagem estruturada para pessoas que desenvolveram dependência do álcool, considerando aspectos físicos, emocionais, comportamentais, familiares e sociais.",
    image: "/assets/clinica-paisagem.jpeg",
    information: [
      "A dependência do álcool pode comprometer a saúde física, emocional, familiar, social e profissional. Reconhecer os sinais e buscar avaliação especializada é um passo importante.",
      "A presença de sinais relacionados ao consumo não substitui uma avaliação profissional.",
    ],
    frequentlyAskedQuestions: [],
    cta: "Saiba mais",
  },
  {
    name: "Psiquiatria e Saúde Mental",
    slug: "saude-mental",
    description: "Cuidado em ambiente protegido e humanizado para pessoas que necessitam de acompanhamento relacionado à saúde mental, com atividades terapêuticas e acompanhamento multidisciplinar.",
    image: "/assets/clinica-interior.jpeg",
    information: [
      "O tratamento envolve diferentes áreas profissionais, permitindo uma abordagem ampla das necessidades apresentadas durante o processo terapêutico.",
    ],
    frequentlyAskedQuestions: [],
    cta: "Conheça o tratamento",
  },
  {
    name: "Internação",
    slug: "internacao",
    description: "Quando existe indicação clínica, a internação pode oferecer um ambiente protegido e estruturado para estabilização, acompanhamento e desenvolvimento do plano terapêutico.",
    image: "/assets/clinica-espaco.jpeg",
    information: [
      "A internação voluntária é indicada quando o paciente compreende a necessidade do tratamento e concorda com a internação e com a participação no processo terapêutico.",
      "A internação involuntária pode ser considerada em situações específicas, mediante avaliação clínica e cumprimento dos critérios e procedimentos previstos na legislação brasileira.",
      "A indicação da modalidade de internação depende de avaliação individual e dos requisitos clínicos e legais aplicáveis.",
    ],
    frequentlyAskedQuestions: [],
    cta: "Entenda como funciona",
  },
];

export const treatmentsFaqItems = [
  {
    question: "Como saber se uma pessoa precisa de tratamento?",
    answer: "Uma avaliação profissional permite compreender o quadro apresentado, as necessidades da pessoa e o nível de cuidado indicado. Sinais de prejuízo à saúde, aos relacionamentos, à família, ao trabalho ou à estabilidade emocional merecem atenção.",
  },
  {
    question: "Como funciona a avaliação inicial?",
    answer: "O processo começa com uma avaliação clínica e biopsicossocial, considerando o quadro apresentado e as necessidades clínicas, emocionais, familiares e sociais da pessoa.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "A duração depende da avaliação, da evolução e das necessidades individuais. Não há um prazo único aplicável a todas as pessoas.",
  },
  {
    question: "Como funciona a internação voluntária?",
    answer: "É indicada quando o paciente compreende a necessidade do tratamento e concorda com a internação e com a participação no processo terapêutico.",
  },
  {
    question: "Como funciona a internação involuntária?",
    answer: "Pode ser considerada em situações específicas, mediante avaliação clínica e cumprimento dos critérios e procedimentos previstos na legislação brasileira.",
  },
  {
    question: "A família participa do tratamento?",
    answer: "Sim. Orientação, participação e apoio aos familiares fazem parte da proposta terapêutica da Clínica Espaço Village.",
  },
  {
    question: "Quais profissionais acompanham os pacientes?",
    answer: "O cuidado envolve Psicologia, Psiquiatria, Nutrição, Arteterapia, Enfermagem e Atividades físicas.",
  },
  {
    question: "Existem atividades durante o tratamento?",
    answer: "O programa pode incluir psicoterapia individual e em grupo, acompanhamento nutricional, atividades físicas, caminhadas ecológicas, laborterapia, oficina de espiritualidade, grupos de mútua ajuda e outras estratégias adaptadas às necessidades individuais.",
  },
] as const;

export const faqItems = [
  {
    question: "Onde fica o Espaço Village?",
    answer: "O Espaço Village fica na Rua Um, 1038, Jardim Anápolis, em Guapimirim, no Estado do Rio de Janeiro.",
  },
  {
    question: "O Espaço Village possui atendimento 24 horas?",
    answer: "Sim. A unidade Espaço Village — Guapimirim oferece atendimento 24 horas.",
  },
  {
    question: "Como chegar?",
    answer: "A página da unidade de Guapimirim apresenta orientações pela BR-116 e por São Gonçalo, além do mapa e do botão para abrir a rota. Consulte seu aplicativo de navegação antes do deslocamento.",
  },
  {
    question: "Qual a distância do Rio de Janeiro?",
    answer: "O Espaço Village fica a aproximadamente 65 km do Rio de Janeiro.",
  },
  {
    question: "Existe atendimento em Copacabana?",
    answer: "Sim. O atendimento em Copacabana fica na Av. Nossa Senhora de Copacabana, 788, grupos 501 a 504, no centro do quarteirão entre as ruas Dias da Rocha e Raimundo Correia.",
  },
  {
    question: "Como entrar em contato?",
    answer: `Você pode ligar para ${site.phone} ou falar pelo WhatsApp ${site.whatsapp.display}.`,
  },
  {
    question: "Quais tratamentos são oferecidos?",
    answer: "O Espaço Village apresenta tratamentos para dependência química, alcoolismo, saúde mental e internação.",
  },
] as const;
