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

export const treatments: Treatment[] = [];

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
    answer: `Você pode ligar para ${site.phone} ou preencher o formulário da página de contato. Nesta versão, o formulário apenas confirma os dados localmente e não realiza envio.`,
  },
  {
    question: "Quais tratamentos são oferecidos?",
    answer: "A lista oficial de tratamentos ainda será cadastrada. Para manter uma comunicação responsável, nenhum tratamento será apresentado antes da confirmação das informações.",
  },
] as const;
