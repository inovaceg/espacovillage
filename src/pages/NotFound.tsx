import { Link } from "react-router-dom";
import { PageShell, SEO } from "@/components/SiteComponents";

const NotFound = () => <PageShell><SEO title="Página não encontrada" description="A página procurada não foi encontrada."/><section className="flex min-h-[65vh] items-center justify-center px-5 pt-20 text-center"><div><p className="eyebrow">Espaço Village</p><h1 className="mt-3 font-serif text-6xl text-[#244c36]">404</h1><p className="mt-4 text-[#5b675b]">Esta página não foi encontrada.</p><Link to="/" className="mt-7 inline-flex min-h-11 items-center rounded-full bg-[#244c36] px-6 text-sm font-semibold text-white">Voltar ao início</Link></div></section></PageShell>;

export default NotFound;
