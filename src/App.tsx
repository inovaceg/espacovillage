import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AClinica from "./pages/AClinica";
import Tratamentos from "./pages/Tratamentos";
import Estrutura from "./pages/Estrutura";
import Equipe from "./pages/Equipe";
import Unidades from "./pages/Unidades";
import Guapimirim from "./pages/Guapimirim";
import Copacabana from "./pages/Copacabana";
import Galeria from "./pages/Galeria";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider><Toaster /><Sonner /><BrowserRouter><Routes>
      <Route path="/" element={<Index />} />
      <Route path="/a-clinica" element={<AClinica />} />
      <Route path="/tratamentos" element={<Tratamentos />} />
      <Route path="/estrutura" element={<Estrutura />} />
      <Route path="/equipe" element={<Equipe />} />
      <Route path="/unidades" element={<Unidades />} />
      <Route path="/unidades/guapimirim" element={<Guapimirim />} />
      <Route path="/unidades/copacabana" element={<Copacabana />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/politica-de-privacidade" element={<Privacy />} />
      <Route path="/termos-de-uso" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes></BrowserRouter></TooltipProvider>
  </QueryClientProvider>
);

export default App;
