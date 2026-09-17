import {
  Activity,
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle2,
  Dumbbell,
  Footprints,
  HandHeart,
  HeartPulse,
  Leaf,
  MessageCircle,
  Salad,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { site, treatments, treatmentsFaqItems } from "@/data/site";
import {
  Breadcrumbs,
  FAQ,
  PageShell,
  SEO,
  SectionTitle,
  TreatmentCard,
  WhatsAppButton,
} from "@/components/SiteComponents";

const careElements = [
  { icon: MessageCircle, label: "Psicoterapia individual" },
  { icon: Users, label: "Psicoterapia em grupo" },
  { icon: Salad, label: "Acompanhamento nutricional" },
  { icon: Dumbbell, label: "Atividades físicas" },
  { icon: Footprints, label: "Caminhadas ecológicas" },
  { icon: Activity, label: "Laborterapia" },
  { icon: Sparkles, label: "Oficina de espiritualidade" },
  { icon: HandHeart, label: "Grupos de mútua ajuda" },
  { icon: ShieldCheck, label: "Estratégias de prevenção de recaídas" },
  { icon: Brain, label: "Treinamento de habilidades sociais" },
  { icon: HeartPulse, label: "Orientação e apoio familiar" },
] as const;

const phases = [
  {
    number: "01",
    title: "DESINTOXICAÇÃO",
    text: "Etapa inicial voltada à estabilização do quadro físico e emocional, com acolhimento e acompanhamento dos sintomas relacionados à abstinência.",
  },
  {
    number: "02",
    title: "MOTIVAÇÃO",
    text: "Com a redução dos efeitos agudos da abstinência, inicia-se um trabalho voltado à adesão e participação ativa no processo terapêutico.",
  },
  {
    number: "03",
    title: "REABILITAÇÃO",
    text: "Etapa dedicada à construção de novos recursos, mudanças comportamentais e fortalecimento de uma rede de apoio para a continuidade da recuperação.",
  },
  {
    number: "04",
    title: "MANUTENÇÃO",
    text: "Desenvolvimento de estratégias de prevenção de recaídas e fortalecimento da autonomia para a retomada da vida fora do ambiente de tratamento.",
  },
] as const;

const professionalAreas = [
  "Psicologia",
  "Psiquiatria",
  "Nutrição",
  "Arteterapia",
  "Enfermagem",
  "Atividades físicas",
] as const;

const dependencyResources = [
  "Identificação de gatilhos",
  "Prevenção de recaídas",
  "Psicoterapia",
  "Grupos terapêuticos",
  "Reabilitação",
  "Acompanhamento familiar",
] as const;

const alcoholSigns = [
  "Dificuldade em reduzir o consumo",
  "Sentimento de culpa relacionado à bebida",
  "Conflitos familiares ou profissionais",
  "Consumo apesar das consequências negativas",
  "Necessidade crescente de beber",
  "Sintomas relacionados à interrupção do consumo",
] as const;

const environmentResources = [
  "Área verde",
  "Piscina semi-olímpica",
  "Campo de futebol",
  "Vôlei",
  "Espaços para caminhadas",
  "Atividades terapêuticas",
] as const;

export default function TreatmentsPage() {
  return (
    <PageShell>
      <SEO
        fullTitle
        title="Tratamentos | Dependência Química, Alcoolismo e Saúde Mental | Espaço Village"
        description="Conheça os tratamentos da Clínica Espaço Village para dependência química, alcoolismo e saúde mental, com acompanhamento multidisciplinar e cuidado individualizado."
        path="/tratamentos"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: site.name,
            url: `${site.canonical}/tratamentos`,
            telephone: site.phone,
            image: `${site.canonical}/assets/clinica-jardim.jpeg`,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Um, 1038, Jardim Anápolis",
              addressLocality: "Guapimirim",
              addressRegion: "RJ",
              postalCode: "25940-000",
              addressCountry: "BR",
            },
          }),
        }}
      />

      <section className="relative flex min-h-[640px] items-end overflow-hidden bg-[#244c36] pt-[76px]">
        <img
          src="/assets/clinica-paisagem.jpeg"
          alt="Paisagem da propriedade do Espaço Village"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          width="1600"
          height="900"
        />
        <div className="absolute inset-0 bg-[#1d3c2a]/65" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
          <h1 className="eyebrow text-[#e2c58f]">Tratamentos</h1>
          <p className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Tratamentos individualizados para cada etapa da recuperação
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#edf0e7]">
            Na Clínica Espaço Village, cada pessoa é acolhida de forma individualizada, considerando suas necessidades clínicas, emocionais, familiares e sociais.
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-[#d8e0d1]">
            O cuidado é realizado por uma equipe multidisciplinar, em ambiente protegido e humanizado, com acompanhamento ao longo das diferentes etapas do tratamento.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton>Fale com nossa equipe</WhatsAppButton>
            <a
              href="#principais-tratamentos"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/70 px-5 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Conheça os tratamentos <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs current="Tratamentos" />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionTitle eyebrow="Cuidado individualizado" title="Cada história precisa de um plano de cuidado" />
            <div className="mt-6 space-y-5 leading-8 text-[#5b675b]">
              <p>Não existe um único caminho que funcione da mesma maneira para todas as pessoas. Por isso, o processo começa com uma avaliação individual, permitindo compreender o quadro apresentado, as necessidades do paciente e o nível de cuidado indicado.</p>
              <p>Com base nessa avaliação, o plano terapêutico pode ser estruturado e revisto ao longo do tratamento, sempre considerando a evolução e as necessidades individuais.</p>
            </div>
          </div>
          <img
            src="/assets/clinica-espaco.jpeg"
            alt="Área externa da Clínica Espaço Village em meio à natureza"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
            width="1000"
            height="750"
            loading="lazy"
          />
        </div>
      </section>

      <section id="principais-tratamentos" className="scroll-mt-24 bg-[#edf0e8] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Possibilidades de cuidado"
            title="Tratamentos especializados para diferentes necessidades"
            text="Cada pessoa chega até nós com uma história, necessidades e desafios diferentes. Por isso, o cuidado no Espaço Village começa com uma avaliação individualizada, que orienta a construção do plano terapêutico mais adequado para cada caso."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {treatments.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} />)}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Programa terapêutico" title="Um cuidado que considera a pessoa por inteiro" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {careElements.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-[#dfe4d9] bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#edf0e8] text-[#244c36]"><Icon size={18} strokeWidth={1.6} /></span>
                <span className="text-sm font-medium text-[#526153]">{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-[#5b675b]">As estratégias terapêuticas são organizadas de acordo com o programa de tratamento e podem ser adaptadas às necessidades individuais de cada paciente.</p>
        </div>
      </section>

      <section className="bg-[#244c36] px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle light eyebrow="Quatro fases" title="O caminho terapêutico" />
          <div className="relative mt-12 grid gap-6 md:grid-cols-4">
            {phases.map((phase) => (
              <article key={phase.number} className="relative border-l border-[#79917d] pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-7">
                <span className="font-serif text-3xl text-[#e2c58f]">{phase.number}</span>
                <h3 className="mt-3 text-sm font-semibold tracking-[0.12em] text-white">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#d8e0d1]">{phase.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <img
            src="/assets/clinica-interior.jpeg"
            alt="Ambiente da Clínica Espaço Village"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            width="1000"
            height="750"
            loading="lazy"
          />
          <div>
            <SectionTitle
              eyebrow="Equipe multidisciplinar"
              title="Diferentes profissionais, um mesmo propósito de cuidado"
              text="O tratamento envolve diferentes áreas profissionais, permitindo uma abordagem ampla das necessidades apresentadas durante o processo terapêutico."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {professionalAreas.map((area) => <div key={area} className="rounded-xl bg-[#edf0e8] px-4 py-4 text-sm font-medium text-[#244c36]">{area}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0e8] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Dependência química" title="Dependência química é uma condição de saúde que precisa de cuidado" />
          <div className="mt-6 max-w-4xl space-y-5 leading-8 text-[#5b675b]">
            <p>O uso problemático de álcool e outras drogas pode afetar diferentes áreas da vida, incluindo saúde, relacionamentos, família, trabalho e estabilidade emocional.</p>
            <p>O primeiro passo do processo é uma avaliação clínica e biopsicossocial. A partir dela, é possível compreender as necessidades do paciente e estabelecer um plano terapêutico individualizado.</p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dependencyResources.map((item) => <div key={item} className="rounded-xl border border-[#dfe4d9] bg-white p-5"><h3 className="font-serif text-lg text-[#244c36]">{item}</h3></div>)}
          </div>
          <Link to="/tratamentos/dependencia-quimica" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#244c36] px-5 text-sm font-semibold text-white">
            Saiba mais sobre Dependência Química <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
                      <SectionTitle eyebrow="Alcoolismo" title="Quando o álcool começa a trazer perdas, procurar ajuda pode ser o começo de uma mudança." />
                      <p className="mt-6 leading-8 text-[#5b675b]">A dependência do álcool pode afetar a saúde, os relacionamentos, a família, o trabalho e o equilíbrio emocional. No Espaço Village, cada pessoa é acolhida de forma individualizada, considerando sua história, necessidades e momento de vida.</p>
                      <Link to="/tratamentos/alcoolismo" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#244c36]">Conheça o tratamento do alcoolismo <ArrowRight size={16} /></Link>
                    </div>
          <div className="rounded-2xl border border-[#dfe4d9] bg-[#f6f5ed] p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-[#244c36]">Alguns sinais merecem atenção</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#5b675b]">
              {alcoholSigns.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[#a17c46]" size={17} />{item}</li>)}
            </ul>
            <p className="mt-6 border-t border-[#dfe4d9] pt-5 text-sm font-medium text-[#526153]">A presença desses sinais não substitui uma avaliação profissional.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e6d7] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Internação" title="Quando a internação pode fazer parte do cuidado" />
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="font-serif text-2xl text-[#244c36]">Internação Voluntária</h3>
              <p className="mt-4 leading-7 text-[#5b675b]">Indicada quando o paciente compreende a necessidade do tratamento e concorda com a internação e com a participação no processo terapêutico.</p>
            </article>
            <article className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="font-serif text-2xl text-[#244c36]">Internação Involuntária</h3>
              <p className="mt-4 leading-7 text-[#5b675b]">Pode ser considerada em situações específicas, mediante avaliação clínica e cumprimento dos critérios e procedimentos previstos na legislação brasileira.</p>
            </article>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-7 text-[#5b675b]">A indicação da modalidade de internação depende de avaliação individual e dos requisitos clínicos e legais aplicáveis.</p>
          <div className="mt-7"><WhatsAppButton>Falar com a equipe sobre internação</WhatsAppButton></div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionTitle eyebrow="Família" title="A recuperação também envolve a família" />
            <p className="mt-6 leading-8 text-[#5b675b]">A dependência química e os transtornos relacionados à saúde mental podem repercutir em toda a estrutura familiar. Por isso, orientação, participação e apoio aos familiares fazem parte da proposta terapêutica da Clínica Espaço Village.</p>
          </div>
          <img src="/assets/clinica-area-verde.jpeg" alt="Área verde da Clínica Espaço Village" className="aspect-[4/3] w-full rounded-2xl object-cover" width="1000" height="750" loading="lazy" />
        </div>
      </section>

      <section className="bg-[#edf0e8] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Ambiente terapêutico" title="Um espaço preparado para acolher" text="O ambiente faz parte da experiência de cuidado. A Clínica Espaço Village oferece estrutura voltada à rotina terapêutica, convivência, atividades físicas e momentos de integração." />
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {environmentResources.map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-[#dfe4d9] bg-white p-5"><Leaf className="shrink-0 text-[#a17c46]" size={19} /><h3 className="font-serif text-lg text-[#244c36]">{item}</h3></div>)}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {site.photos.slice(0, 3).map((photo) => <img key={photo.src} src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full rounded-2xl object-cover" width="800" height="600" loading="lazy" />)}
          </div>
        </div>
      </section>

      <section className="bg-[#244c36] px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-[#e2c58f]">Acolhimento e orientação</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl md:text-4xl">Você não precisa tomar essa decisão sozinho.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#d8e0d1]">Se você está buscando tratamento para si ou para alguém da sua família, nossa equipe pode orientar sobre o processo, esclarecer dúvidas e explicar as possibilidades de atendimento.</p>
            <p className="mt-4 text-sm font-semibold text-[#e2c58f]">{site.whatsapp.display} — WhatsApp</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <WhatsAppButton>Falar com nossa equipe</WhatsAppButton>
            <Link to="/a-clinica" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/70 px-5 text-sm font-semibold text-white hover:bg-white/10">Conhecer a Clínica Espaço Village <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mt-8"><FAQ items={treatmentsFaqItems} /></div>
        </div>
      </section>
    </PageShell>
  );
}
