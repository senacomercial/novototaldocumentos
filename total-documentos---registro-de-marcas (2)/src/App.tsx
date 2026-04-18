import { motion, useScroll, useTransform } from "motion/react";
import { 
  ShieldCheck, 
  Search, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle,
  FileText,
  Users,
  Globe,
  Instagram,
  Linkedin,
  ChevronRight,
  ChevronDown,
  Lock,
  Loader2
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import React, { useRef, useState } from "react";
import { supabase } from "./lib/supabase";

const WHATSAPP_URL = "https://wa.me/5519971206971"; 
const MEETING_URL = "https://wa.me/5519971206971"; 

const Logo = ({ className = "", variant = "default" }: { className?: string, variant?: "default" | "white" }) => {
  const isWhite = variant === "white";
  return (
    <div className={cn("flex items-center gap-3 md:gap-4", className)}>
      <div className="flex items-center">
        <span className={cn("text-2xl md:text-3xl font-black tracking-tighter", isWhite ? "text-white" : "text-brand-black")}>t</span>
        <div className="relative w-5 h-5 md:w-7 md:h-7 mx-0.5">
          <div className={cn("absolute inset-0 rounded-sm", isWhite ? "bg-white" : "bg-brand-deep")}>
            <div className={cn("absolute inset-[4px] md:inset-[6px] rounded-sm", isWhite ? "bg-brand-deep" : "bg-white")} />
            <div 
              className="absolute top-0 right-0 w-0 h-0 border-t-[8px] border-r-[8px] md:border-t-[12px] md:border-r-[12px] border-t-transparent border-r-transparent"
              style={{ borderRightColor: 'var(--color-brand-primary)', borderTopColor: 'var(--color-brand-primary)' }}
            />
          </div>
        </div>
        <span className={cn("text-2xl md:text-3xl font-black tracking-tighter", isWhite ? "text-white" : "text-brand-black")}>tal</span>
      </div>
      <div className={cn("w-[1px] h-6 md:h-8", isWhite ? "bg-white/20" : "bg-brand-black/20")} />
      <span className={cn("text-[10px] md:text-sm font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase", isWhite ? "text-white/80" : "text-brand-black")}>Documentos</span>
    </div>
  );
};

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('newsletter_leads')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) throw error;
      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Ocorreu um erro ao salvar seu e-mail. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col selection:bg-brand-primary selection:text-white bg-paper">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-offwhite/60 backdrop-blur-xl border-b border-brand-gray/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-20 items-center">
            <Logo className="scale-90 md:scale-100 origin-left" />
            
            <div className="hidden md:flex items-center gap-10">
              {["Método", "Diferenciais", "Contato"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-xs font-bold uppercase tracking-widest text-brand-gray hover:text-brand-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-primary text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-deep transition-all shadow-xl shadow-brand-primary/20 active:scale-95"
              >
                Análise Gratuita
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Editorial Style */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-brand-primary" 
                  />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary">
                    Propriedade Intelectual Consultiva
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-7xl lg:text-[120px] font-serif font-medium leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-12 text-balance">
                  Proteja sua <br />
                  <span className="serif-italic text-brand-primary">história.</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-brand-gray mb-10 md:mb-14 leading-relaxed max-w-xl font-light">
                  Sua marca é seu maior patrimônio. Nós entregamos a <span className="text-brand-black font-medium">verdade técnica</span> antes de você investir um real no registro.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 bg-brand-primary text-white px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest shadow-3xl shadow-brand-primary/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Análise Gratuita
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={MEETING_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 bg-white border border-brand-gray/10 text-brand-black px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest shadow-premium hover:bg-brand-offwhite transition-all"
                  >
                    <Calendar className="w-5 h-5" />
                    Agendar Reunião
                  </motion.a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                <div className="aspect-[4/5] bg-brand-deep rounded-full overflow-hidden shadow-4xl relative border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000" 
                    alt="Vinicius Tronconi" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-4xl border border-brand-gray/5 z-30"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center">
                      <ShieldCheck className="w-7 h-7 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold leading-none mb-1">100%</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">Segurança</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-black text-brand-black/[0.02] select-none pointer-events-none whitespace-nowrap">
            TOTAL DOCUMENTOS
          </div>
        </section>

        {/* The Problem - Dark & Immersive */}
        <section className="py-12 md:py-20 bg-brand-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-brand-deep/20 rounded-full blur-[150px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-24 items-center">
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-8 block">O Risco Invisível</span>
                  <h2 className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 leading-tight md:leading-[0.8] tracking-tighter">
                    O INPI não <br />
                    <span className="serif-italic opacity-40">vai te avisar.</span>
                  </h2>
                  <div className="space-y-8 md:space-y-10 text-lg md:text-xl text-white/50 font-light leading-relaxed">
                    <p>
                      O sistema burocrático é passivo. Ele não te alerta quando alguém protocola um nome idêntico ao seu. Ele só se manifesta quando o dano já é <span className="text-white font-medium italic underline underline-offset-8 decoration-brand-primary">irremediável</span>.
                    </p>
                    <div className="p-10 bg-white/[0.03] border-l-2 border-brand-primary rounded-r-3xl backdrop-blur-sm">
                      <p className="text-white font-serif italic text-2xl">
                        "8 em cada 10 PMEs perdem a marca por pura procrastinação."
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Perda do Nome", desc: "Outra empresa protocola primeiro e você perde o direito de uso.", icon: XCircle, color: "text-risk-red" },
                  { title: "Rebranding", desc: "Trocar tudo custa até 100x o valor de um registro profissional.", icon: AlertTriangle, color: "text-risk-yellow" },
                  { title: "Crescimento", desc: "Sem registro você não franqueia e não capta investidores.", icon: Lock, color: "text-brand-primary" },
                  { title: "Indenizações", desc: "Risco real de processos por uso indevido de marca alheia.", icon: AlertTriangle, color: "text-risk-red" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] hover:bg-white/[0.05] transition-all group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl group-hover:bg-brand-primary/10 transition-all" />
                    <item.icon className={cn("w-12 h-12 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3", item.color)} />
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-base text-white/30 leading-relaxed font-light">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Method - Bento Grid Style */}
        <section id="método" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-6 md:mb-8 block">Nossa Metodologia</span>
              <h2 className="text-4xl md:text-7xl font-serif leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-10">
                A verdade técnica <br />
                <span className="serif-italic text-brand-primary">antes da venda.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 p-12 bg-brand-offwhite rounded-[3rem] border border-brand-gray/5 group hover:shadow-premium transition-all relative overflow-hidden">
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-premium group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6">01. Análise de Viabilidade</h3>
                    <p className="text-xl text-brand-gray font-light leading-relaxed max-w-xl">
                      Você nos manda o nome. Em até 48h, devolvemos um parecer técnico real: a marca pode ser registrada? Qual o risco? Sem custo e sem letras miúdas.
                    </p>
                  </div>
                  <div className="mt-12 flex items-center gap-4 text-brand-primary font-bold text-xs uppercase tracking-widest">
                    Começar agora <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 text-[20rem] font-serif font-black text-brand-black/[0.02] select-none pointer-events-none">01</div>
              </div>
              
              <div className="md:col-span-4 p-12 bg-brand-deep text-white rounded-[3rem] group hover:shadow-premium transition-all relative overflow-hidden">
                <div className="flex flex-col h-full justify-between relative z-10">
                  <div>
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md group-hover:bg-brand-primary transition-all">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6">02. Decisão</h3>
                    <p className="text-lg text-white/50 font-light leading-relaxed">
                      Se o parecer for verde, você decide protocolar. Se for vermelho, orientamos o que fazer.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 text-[15rem] font-serif font-black text-white/[0.03] select-none pointer-events-none">02</div>
              </div>

              <div className="md:col-span-12 p-12 bg-brand-primary text-white rounded-[3rem] group hover:shadow-premium transition-all relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6">03. Gestão Patrimonial</h3>
                    <p className="text-xl text-white/70 font-light leading-relaxed">
                      Protocolamos e acompanhamos os 18 meses do processo. Te avisamos de tudo. Você só recebe o certificado no final.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="w-48 h-48 border-4 border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                      <div className="w-32 h-32 border-4 border-white/40 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-20 -right-20 text-[25rem] font-serif font-black text-white/[0.03] select-none pointer-events-none">03</div>
              </div>
            </div>
          </div>
        </section>

        {/* The Artifact - Semáforo de Risco */}
        <section className="py-12 md:py-20 bg-brand-offwhite relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-brand-deep rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 shadow-4xl relative overflow-hidden">
              {/* Background Texture Overlay */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-paper pointer-events-none" />
              
              <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-center relative z-10">
                <div className="lg:col-span-5 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-6 md:mb-8 block">O Diferencial Visual</span>
                  <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif mb-8 md:mb-12 leading-tight md:leading-[0.8] tracking-tighter">
                    O <span className="serif-italic text-brand-primary">Semáforo</span> <br />
                    de Risco.
                  </h2>
                  <p className="text-sm md:text-xl text-white/50 mb-10 md:mb-14 font-light leading-relaxed max-w-md">
                    Diferente de despachantes que protocolam a cego, nós materializamos a verdade em um documento técnico e visual proprietário.
                  </p>
                  
                  <div className="space-y-8 md:space-y-10">
                    {[
                      { label: "VERDE (VIÁVEL)", desc: "Pode protocolar agora com segurança.", color: "bg-risk-green" },
                      { label: "AMARELO (RISCO MÉDIO)", desc: "Existem ajustes possíveis para viabilizar.", color: "bg-risk-yellow" },
                      { label: "VERMELHO (ALTO RISCO)", desc: "Recomendamos não protocolar como está.", color: "bg-risk-red" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 md:gap-8 items-start group">
                        <div className={cn("w-4 h-4 md:w-5 md:h-5 rounded-full mt-1.5 ring-4 md:ring-8 ring-white/5 group-hover:scale-125 transition-transform shadow-lg shrink-0", item.color)} />
                        <div>
                          <h4 className="font-bold text-base md:text-xl mb-1 md:mb-2 tracking-tight">{item.label}</h4>
                          <p className="text-white/30 text-xs md:text-base font-light leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-7 relative perspective-1000">
                  <motion.div 
                    initial={{ rotateY: 20, rotateX: 10 }}
                    whileInView={{ rotateY: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-[3rem] p-16 shadow-5xl relative preserve-3d border border-white/20"
                  >
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 bg-paper opacity-5 pointer-events-none rounded-[3rem]" />
                    
                    <div className="flex justify-between items-start mb-16">
                      <Logo className="scale-75 origin-left" />
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gray mb-1">Parecer Técnico</p>
                        <p className="text-sm font-serif italic text-brand-black">Ref: #2026-0413-VT</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 md:space-y-8 mb-12 relative z-10">
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Análise de Colidência</p>
                        <p className="text-sm md:text-base text-brand-black font-medium leading-relaxed">
                          Após busca fonética e radical no banco de dados do INPI, não foram encontrados processos impeditivos para a classe solicitada.
                        </p>
                      </div>
                      
                      <div className="h-32 w-full bg-brand-offwhite rounded-[2rem] flex items-center justify-center border border-brand-gray/5">
                        <div className="flex gap-8">
                          <motion.div 
                            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-14 h-14 rounded-full bg-risk-green shadow-2xl shadow-risk-green/40" 
                          />
                          <div className="w-14 h-14 rounded-full bg-risk-yellow/10" />
                          <div className="w-14 h-14 rounded-full bg-risk-red/10" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Conclusão do Especialista</p>
                        <p className="text-xs md:text-sm text-brand-gray leading-relaxed italic">
                          "Marca apresenta alto índice de distintividade. Recomendamos o protocolo imediato para garantir a prioridade de uso nacional."
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-10 border-t border-brand-gray/5 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" 
                          alt="Vinicius Tronconi" 
                          className="w-10 h-10 rounded-full object-cover border border-brand-gray/5"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">Responsável Técnico</p>
                          <p className="text-xs font-bold">Vinicius Tronconi</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-brand-primary/5 rounded-full">
                        <ShieldCheck className="w-5 h-5 text-brand-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Autenticado</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-12 -right-12 bg-brand-primary text-white p-10 rounded-[2.5rem] shadow-4xl rotate-6 hidden md:block border-4 border-white"
                  >
                    <p className="text-4xl font-serif italic mb-2">Viável</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-60">Parecer Final</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators - Bento Grid Editorial */}
        <section id="diferenciais" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 p-10 md:p-16 bg-brand-offwhite rounded-[3rem] md:rounded-[4rem] flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-6 md:mb-8 block">Por que nós?</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-10">
                  Diferenciação <br />
                  <span className="serif-italic text-brand-primary">Defensável.</span>
                </h2>
                <p className="text-xl text-brand-gray font-light leading-relaxed mb-12">
                  Diferente de despachantes online que protocolam a cego e escritórios caros sem foco real em PME.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-premium">
                    <Globe className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-premium">
                    <Users className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Atendimento Consultivo", desc: "Nada de burocracia ou vendedores agressivos. Falamos português de gente.", icon: MessageCircle },
                  { title: "Análise Profunda", desc: "Não apenas preenchemos formulários. Analisamos, estrategizamos e protegemos.", icon: Search },
                  { title: "Tradução Empresarial", desc: "Transformamos jargões técnicos em decisões de negócio claras para você.", icon: Globe },
                  { title: "Acompanhamento Ativo", desc: "Você saberá o que está acontecendo em cada fase, sem precisar perguntar.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="p-12 bg-white rounded-[3rem] border border-brand-gray/5 hover:border-brand-primary/20 transition-all shadow-sm hover:shadow-premium group">
                    <div className="w-14 h-14 bg-brand-offwhite rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-brand-gray font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12 md:mb-20">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-primary mb-6 md:mb-8 block">Dúvidas Frequentes</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-[0.9] md:leading-[0.8] tracking-tighter">
                Clareza <br />
                <span className="serif-italic text-brand-primary">Absoluta.</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                { q: "Quanto tempo demora o registro?", a: "O processo completo no INPI leva, em média, de 15 a 18 meses. No entanto, o ponto mais importante é a sua prioridade de uso, que é garantida no exato momento do protocolo. Assim que damos entrada, sua marca já está protegida contra cópias posteriores." },
                { q: "E se minha marca for negada?", a: "É exatamente para evitar esse risco que realizamos nossa Análise de Viabilidade Técnica. Se identificarmos qualquer chance real de indeferimento, você será avisado antes de investir um único real em taxas federais. Nosso foco é transparência: só protocolamos o que tem chances reais de aprovação." },
                { q: "O registro é vitalício?", a: "Juridicamente, a concessão vale por 10 anos, podendo ser renovada sucessivamente por períodos iguais. Na prática, sua marca pode ser protegida para sempre, desde que a gestão patrimonial e as renovações sejam feitas corretamente dentro dos prazos." },
                { q: "Posso registrar como pessoa física?", a: "Sim, o INPI permite o registro via CPF. Porém, estrategicamente, o ideal é o CNPJ. No CPF, a marca fica vinculada à pessoa e não ao negócio, o que pode gerar limitações para escalar, franquear ou vender a empresa no futuro (Exit)." },
              ].map((item, i) => (
                <details key={i} className="group bg-white rounded-3xl border border-brand-gray/5 overflow-hidden transition-all hover:shadow-premium">
                  <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                    <h3 className="text-xl font-bold tracking-tight">{item.q}</h3>
                    <div className="w-10 h-10 rounded-full bg-brand-offwhite flex items-center justify-center group-open:rotate-180 transition-transform">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-brand-gray font-light leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Immersive */}
        <section id="contato" className="py-16 md:py-24 bg-brand-deep text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-brand-primary)_0%,transparent_70%)] opacity-20" />
            <img 
              src="https://picsum.photos/seed/business/1920/1080?blur=10" 
              className="w-full h-full object-cover grayscale opacity-20"
              alt="Background"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-brand-primary mb-8 md:mb-12 block">Próximo Passo</span>
              <h2 className="text-4xl md:text-7xl lg:text-[140px] font-serif leading-[0.9] md:leading-[0.8] tracking-tighter mb-10 md:mb-16">
                Sua marca <br />
                <span className="serif-italic text-brand-primary">segura hoje.</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/50 font-light leading-relaxed max-w-3xl mx-auto mb-12 md:mb-20">
                Não deixe para amanhã a proteção do que você levou anos para construir. Fale com um especialista agora.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-brand-primary text-white px-10 md:px-16 py-6 md:py-8 rounded-full text-sm md:text-lg font-bold uppercase tracking-widest shadow-4xl shadow-brand-primary/40"
                >
                  <MessageCircle className="w-6 h-6" />
                  Análise Gratuita via WhatsApp
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={MEETING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-brand-black border-2 border-brand-primary/30 px-10 md:px-16 py-6 md:py-8 rounded-full text-sm md:text-lg font-bold uppercase tracking-widest hover:bg-brand-offwhite transition-all shadow-xl shadow-brand-black/5"
                >
                  <Calendar className="w-6 h-6" />
                  Agendar Reunião
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer - Sophisticated */}
        <footer className="py-16 bg-brand-black text-white border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-20 mb-24">
              <div className="lg:col-span-4">
                <Logo variant="white" className="mb-10 scale-90 origin-left" />
                <p className="text-white/40 font-light leading-relaxed mb-10 max-w-xs">
                  Especialistas em Propriedade Intelectual e Registro de Marcas para PMEs que buscam segurança e clareza.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-8">Navegação</h4>
                  <ul className="space-y-4 text-sm font-medium text-white/50">
                    <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
                    <li><a href="#método" className="hover:text-white transition-colors">Método</a></li>
                    <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a></li>
                    <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-8">Unidade</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Campinas, SP<br />
                    Atendimento Nacional<br />
                    Vinicius Tronconi
                  </p>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-primary mb-8">Newsletter</h4>
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-brand-primary/10 rounded-2xl border border-brand-primary/20"
                    >
                      <p className="text-sm text-brand-primary font-bold">Obrigado! Você agora faz parte da nossa lista.</p>
                    </motion.div>
                  ) : (
                    <>
                      <p className="text-sm text-white/50 mb-6 font-light">Receba insights sobre proteção de marca.</p>
                      <form onSubmit={handleNewsletterSubmit} className="flex gap-2 p-2 bg-white/5 rounded-2xl border border-white/5">
                        <input 
                          type="email" 
                          placeholder="Seu e-mail" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-transparent border-none focus:ring-0 text-sm px-4 w-full text-white placeholder:text-white/20" 
                        />
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-brand-primary text-white p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                        >
                          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
              <p>© 2026 Total Documentos. Todos os direitos reservados.</p>
              <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Global Noise Texture */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay bg-paper" />

        {/* Sticky Mobile CTA */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden fixed bottom-6 right-6 z-50"
        >
          <motion.a 
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 20px 40px -10px rgba(0, 122, 51, 0.4)",
                "0 25px 50px -12px rgba(0, 122, 51, 0.6)",
                "0 20px 40px -10px rgba(0, 122, 51, 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            href={WHATSAPP_URL}
            className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-4xl active:scale-90 transition-all"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.a>
        </motion.div>

        {/* Desktop Floating WhatsApp */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block fixed bottom-10 right-10 z-50"
        >
          <motion.a 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.1 }}
            href={WHATSAPP_URL}
            className="group relative flex items-center gap-4 bg-white p-2 pr-8 rounded-full shadow-4xl border border-brand-gray/5 overflow-hidden"
          >
            <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">Online agora</span>
              <span className="text-xs font-bold text-brand-black">Falar com Especialista</span>
            </div>
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-2 right-4 w-2 h-2 bg-brand-primary rounded-full"
            />
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
