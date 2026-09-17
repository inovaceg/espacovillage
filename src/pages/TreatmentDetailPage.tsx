import {
  ArrowLeft,
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  CircleAlert,
  EyeOff,
  Gauge,
  HeartPulse,
  RotateCcw,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { site, treatments } from "@/data/site";
import { Breadcrumbs, PageShell, SEO, SectionTitle, WhatsAppButton } from "@/components/SiteComponents";

const dependencyParagraphs = [
  "Talvez você já tenha prometido a si mesmo que iria parar. Talvez tenha conseguido ficar algum tempo sem usar e depois voltou. Ou talvez esteja vendo sua saúde, seus relacionamentos, sua família, seu trabalho e seus planos serem afetados pelo uso de álcool ou outras drogas.",
  "A dependência química não se resume à falta de força de vontade. É uma condição complexa que pode envolver aspectos físicos, emocionais, comportamentais e sociais — e que merece ser tratada com seriedade, respeito e sem julgamentos.",
  "No Espaço Village, cada pessoa é recebida a partir da sua própria história. O primeiro passo é compreender o que está acontecendo: o padrão de uso, as consequências, possíveis sintomas de abstinência, a saúde mental, os vínculos familiares e as necessidades individuais.",
  "A partir dessa avaliação, é construído um plano terapêutico individualizado, com acompanhamento multidisciplinar e uma rotina estruturada em ambiente protegido e acolhedor.",
  "O tratamento pode envolver acompanhamento médico e psicológico, psicoterapia individual e em grupo, prevenção de recaídas, atividades físicas, acompanhamento nutricional, grupos de mútua ajuda e orientação familiar, de acordo com as necessidades de cada caso.",
] as const;

const dependencySigns: Array<{ icon: LucideIcon; label: string }> = [
  { icon: RotateCcw, label: "Já tentou parar sozinho e voltou a usar" },
  { icon: Gauge, label: "Precisa consumir cada vez mais ou perdeu o controle sobre o uso" },
  { icon: Users, label: "O álcool ou as drogas estão afetando sua família e seus relacionamentos" },
  { icon: BriefcaseBusiness, label: "Seu trabalho, estudos ou vida financeira começaram a ser prejudicados" },
  { icon: CircleAlert, label: "Continua usando mesmo percebendo consequências negativas" },
  { icon: EyeOff, label: "Sente que sua rotina passou a girar em torno do álcool ou das drogas" },
  { icon: Brain, label: "Apresenta sofrimento emocional ou mudanças importantes de comportamento" },
  { icon: HeartPulse, label: "Sua família está preocupada e você já não sabe como sair dessa situação" },
];

function DependencyContent() {
  return (
    <>
      <div className="space-y-5">
        {dependencyParagraphs.map((paragraph) => <p key={paragraph} className="leading-8 text-[#5b675b]">{paragraph}</p>)}
      </div>
      <section className="mt-12" aria-labelledby="dependency-signs-title">
        <h2 id="dependency-signs-title" className="font-serif text-2xl text-[#244c36] sm:text-3xl">Você pode estar precisando de ajuda se...</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {dependencySigns.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-3 rounded-xl border border-[#dfe4d9] bg-white p-4 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf0e8] text-[#a17c46]"><Icon size={17} strokeWidth={1.6} aria-hidden="true" /></span>
              <p className="text-sm leading-6 text-[#5b675b]">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-[#526153]">Esses sinais não substituem uma avaliação profissional.</p>
      </section>
      <div className="mt-10 rounded-2xl border border-[#dfe4d9] bg-[#f6f5ed] p-6 sm:p-8">
        <h2 className="font-serif text-2xl text-[#244c36]">O primeiro passo não precisa ser enfrentar tudo sozinho.</h2>
        <p className="mt-4 leading-8 text-[#5b675b]">Conversar com nossa equipe não significa assumir um compromisso imediato com a internação. É uma oportunidade para explicar o que está acontecendo, tirar dúvidas e entender quais possibilidades de cuidado podem ser consideradas para você ou para alguém da sua família.</p>
        <Link to="/contato" className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#c2a16a] px-5 text-sm font-semibold text-[#203d2b] transition hover:bg-[#d5b87f] focus:outline-none focus:ring-2 focus:ring-[#c2a16a] focus:ring-offset-2">
          Quero conversar com a equipe <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug) ?? treatments[0];
  const isDependency = treatment.slug === "dependencia-quimica";

  return (
    <PageShell>
      <SEO title={`${treatment.name} | Tratamentos`} description={treatment.description} path={`/tratamentos/${treatment.slug}`} />
      <section className="relative flex min-h-[440px] items-end overflow-hidden bg-[#244c36] pt-[76px]">
        <img src={treatment.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" width="1600" height="900" />
        <div className="absolute inset-0 bg-[#1d3c2a]/65" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
          <p className="eyebrow text-[#e2c58f]">Tratamentos</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{treatment.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#edf0e7]">{isDependency ? "Quando o álcool ou as drogas começam a controlar a vida, pedir ajuda pode ser o começo de uma nova direção." : treatment.description}</p>
        </div>
      </section>
      <Breadcrumbs current={treatment.name} />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr]">
          <article>
            {isDependency ? <DependencyContent /> : <>
              <SectionTitle eyebrow="Cuidado individualizado" title={treatment.name} text={treatment.description} />
              <div className="mt-8 space-y-5"><p className="leading-8 text-[#5b675b]">{treatment.secondaryDescription}</p>{treatment.information.map((paragraph) => <p key={paragraph} className="leading-8 text-[#5b675b]">{paragraph}</p>)}</div>
              {treatment.slug === "internacao" && <div className="mt-8 rounded-2xl border border-[#dfe4d9] bg-[#f6f5ed] p-6"><h2 className="font-serif text-2xl text-[#244c36]">Orientação responsável</h2><p className="mt-3 text-sm leading-7 text-[#5b675b]">A internação voluntária ou involuntária deve observar a legislação aplicável. Fale com a equipe para receber orientação sobre a situação.</p></div>}
            </>}
            <div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton /><Link to="/tratamentos" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#b9c5b5] px-5 text-sm font-semibold text-[#244c36] hover:bg-[#edf0e8]"><ArrowLeft size={16} /> Voltar para tratamentos</Link></div>
          </article>
          <div><img src={treatment.image} alt="Registro da propriedade do Espaço Village" className="aspect-[4/3] w-full rounded-2xl object-cover" width="1000" height="750" loading="lazy" /><div className="mt-7 rounded-2xl bg-[#edf0e8] p-6"><h2 className="font-serif text-2xl text-[#244c36]">Fale com nossa equipe</h2><p className="mt-3 text-sm leading-7 text-[#5b675b]">{site.whatsapp.display} — WhatsApp</p><WhatsAppButton className="mt-5">Conversar pelo WhatsApp</WhatsAppButton></div></div>
        </div>
      </section>
      <section className="bg-[#e9e6d7] px-5 py-14 lg:px-8"><div className="mx-auto max-w-5xl"><SectionTitle title="Conheça também" text="Veja os outros tratamentos apresentados pelo Espaço Village." /><div className="mt-7 flex flex-wrap gap-3">{treatments.filter((item) => item.slug !== treatment.slug).map((item) => <Link key={item.slug} to={`/tratamentos/${item.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#b9c5b5] bg-white px-5 text-sm font-semibold text-[#244c36] hover:bg-[#edf0e8]">{item.name}<ArrowRight size={16} /></Link>)}</div></div></section>
    </PageShell>
  );
}
