"use client";

import { useState, useEffect } from "react";

// ─── Icons ─────────────────────────────────────────────────────────────────
function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function IconBrush() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.65 2.02 5 2.02 2.5 0 4-1.5 4-3.02s-1.35-3.04-4-4.04z" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 8C8 10 5.9 16.17 3.82 22" />
      <path d="M2 2c0 0 2 4 7 8 5 4 12 4 13 2.5S17 4 12 2C7 0 2 2 2 2z" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
function IconChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#abordagem" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#faf7f2]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-[#2c2c2c] tracking-tight">
          Carolina Kawauchi
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#6b6560] hover:text-[#8faa8b] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5511991221820"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#8faa8b] hover:bg-[#7a9876] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          <IconCalendar />
          Agendar Conversa
        </a>

        <button
          className="md:hidden text-[#2c2c2c]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#faf7f2] border-t border-[#e0d8ce] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#6b6560] hover:text-[#8faa8b] py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511991221820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#8faa8b] text-white text-sm font-medium px-5 py-2.5 rounded-full w-fit mt-2"
          >
            <IconCalendar />
            Agendar Conversa
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#faf7f2] overflow-hidden pt-16">
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#8faa8b]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-[#c9876a]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#8faa8b] bg-[#8faa8b]/12 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
            Psicóloga & Arteterapeuta · CRP 06/83268
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-[#2c2c2c] leading-tight mb-6 animate-fade-in-up animate-delay-100">
            Encontre seu
            <br />
            <span className="text-[#8faa8b]">caminho</span> com
            <br />
            afeto e arte
          </h1>
          <p className="text-[#6b6560] text-lg leading-relaxed mb-8 max-w-md animate-fade-in-up animate-delay-200">
            Atendimento psicológico e arteterapia para quem busca autoconhecimento,
            equilíbrio emocional e um espaço seguro de cuidado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="https://wa.me/5511991221820"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#8faa8b] hover:bg-[#7a9876] text-white font-medium px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#8faa8b]/30"
            >
              <IconCalendar />
              Agendar Conversa Inicial
            </a>
            <a
              href="#sobre"
              className="flex items-center justify-center gap-2 text-[#6b6560] hover:text-[#2c2c2c] font-medium px-6 py-3.5 rounded-full border border-[#e0d8ce] hover:border-[#c9d4c7] transition-all duration-200"
            >
              Conhecer mais <IconArrow />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in-up animate-delay-400">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img
              src="/hero-illustration.jpg"
              alt="Ilustração artística — Carolina Kawauchi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2c]/20 to-transparent" />
          </div>
          <p className="text-center text-xs text-[#6b6560] mt-2 italic">
            Ilustração: Seng Soun Ratanavanh
          </p>


        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8faa8b] animate-bounce"
      >
        <span className="text-xs font-medium tracking-wider uppercase opacity-60">scroll</span>
        <IconChevronDown />
      </a>
    </section>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/foto-perfil.png"
                  alt="Carolina Kawauchi — Psicóloga & Arteterapeuta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-[#8faa8b]/15 flex items-center justify-center p-6">
                <blockquote className="text-center">
                  <p className="font-display text-2xl text-[#8faa8b] italic leading-snug">"A arte é a linguagem da alma."</p>
                </blockquote>
              </div>
            </div>
            <div className="col-span-1 space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-square bg-[#c9876a]/12 flex items-center justify-center p-6">
                <blockquote className="text-center">
                  <p className="font-display text-xl text-[#c9876a] italic leading-snug">"O inconsciente fala a língua das imagens."</p>
                </blockquote>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80"
                  alt="Sessão de arteterapia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-[#c9876a] bg-[#c9876a]/10 px-4 py-1.5 rounded-full">
            Sobre mim
          </span>
          <h2 className="font-display text-4xl font-semibold text-[#2c2c2c] mt-5 mb-6 leading-tight">
            Um espaço onde a cura
            <br />
            encontra a criação
          </h2>
          <p className="text-[#6b6560] leading-relaxed mb-5">
            Sou psicóloga com especialização em arteterapia, apaixonada pela interseção entre a
            expressão artística e o processo terapêutico. Acredito que cada pessoa carrega em si
            uma sabedoria interna que pode ser acessada de formas diversas — e a arte é uma
            dessas poderosas chaves.
          </p>
          <p className="text-[#6b6560] leading-relaxed mb-8">
            Minha prática é fundamentada na psicologia analítica junguiana, integrando recursos
            criativos como pintura, colagem, argila e escrita expressiva para acessar o inconsciente,
            promover autoconhecimento e favorecer o processo de individuação.
          </p>


          <div className="flex flex-wrap gap-2">
            {["Psicoterapia", "Arteterapia", "Grupos Terapêuticos", "Online"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-[#8faa8b] bg-[#8faa8b]/12 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Approach ───────────────────────────────────────────────────────────────
function Approach() {
  const pillars = [
    {
      icon: <IconHeart />,
      title: "Escuta Acolhedora",
      desc: "Um espaço de total segurança e sigilo, onde você é recebido sem julgamentos. A relação terapêutica é o alicerce da transformação.",
    },
    {
      icon: <IconBrush />,
      title: "Arte como Caminho",
      desc: "A expressão criativa acessa conteúdos que as palavras às vezes não alcançam. Usamos materiais artísticos como mediadores terapêuticos.",
    },
    {
      icon: <IconLeaf />,
      title: "Processo Personalizado",
      desc: "Cada pessoa tem seu próprio tempo e ritmo. O processo terapêutico é co-construído de forma única para cada contexto de vida.",
    },
    {
      icon: <IconUsers />,
      title: "Visão Integral",
      desc: "Trabalhamos com a pessoa inteira: emocional, cognitivo, corporal e relacional. O bem-estar é multidimensional.",
    },
  ];

  return (
    <section id="abordagem" className="py-24 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#8faa8b] bg-[#8faa8b]/12 px-4 py-1.5 rounded-full">
            Abordagem
          </span>
          <h2 className="font-display text-4xl font-semibold text-[#2c2c2c] mt-5 mb-4 leading-tight">
            Como trabalho
          </h2>
          <p className="text-[#6b6560] leading-relaxed">
            Minha prática integra psicoterapia e arteterapia de forma fluida, criando um espaço
            onde crescimento e criatividade caminham juntos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-[#8faa8b]/15 rounded-xl flex items-center justify-center text-[#8faa8b] mb-5 group-hover:bg-[#8faa8b] group-hover:text-white transition-all duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#2c2c2c] mb-3">{p.title}</h3>
              <p className="text-sm text-[#6b6560] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-[#2c2c2c] text-center mb-12">
            Como é o processo?
          </h3>
          <div className="grid sm:grid-cols-4 gap-6 relative">
            <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#e0d8ce]" />
            {[
              { step: "01", title: "Conversa Inicial", desc: "Um primeiro encontro gratuito para nos conhecermos e entender suas necessidades." },
              { step: "02", title: "Avaliação", desc: "Juntos definimos objetivos e formato mais adequado ao seu momento de vida." },
              { step: "03", title: "Processo Terapêutico", desc: "Sessões regulares, com recursos criativos e escuta profunda." },
              { step: "04", title: "Transformação", desc: "Colhemos os frutos do processo: mais autoconhecimento e leveza." },
            ].map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-16 h-16 bg-[#8faa8b] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#8faa8b]/30">
                  <span className="font-display text-lg font-bold text-white">{s.step}</span>
                </div>
                <h4 className="font-semibold text-[#2c2c2c] mb-2">{s.title}</h4>
                <p className="text-sm text-[#6b6560] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80",
      tag: "Individual",
      title: "Psicoterapia Individual",
      desc: "Atendimento personalizado para adultos que buscam autoconhecimento, manejo emocional e suporte para desafios da vida.",
      items: ["Ansiedade e estresse", "Autoestima e identidade", "Relacionamentos", "Transições de vida"],
      cta: "Saiba mais",
    },
    {
      img: "/arteterapia.jpeg",
      tag: "Arte",
      title: "Arteterapia",
      desc: "Sessões que utilizam diferentes linguagens artísticas como mediadores terapêuticos para acesso a conteúdos internos.",
      items: ["Pintura e aquarela", "Colagem e argila", "Escrita expressiva", "Mandala terapêutica"],
      cta: "Saiba mais",
    },
    {
      img: "/grupo.jpeg",
      tag: "Grupos",
      title: "Grupos para Autoconhecimento",
      desc: "Encontros em grupo com proposta terapêutica e criativa, explorando temas que nos conectam enquanto seres humanos.",
      items: ["Grupos fechados", "Temas mensais", "Dinâmicas vivenciais", "Espaço de partilha"],
      cta: "Ver agenda",
    },
    {
      img: "/atendimento.jpeg",
      tag: "Online",
      title: "Atendimento Online",
      desc: "A mesma qualidade e presença do atendimento presencial, na comodidade do seu espaço.",
      items: ["Videochamada segura", "Flexibilidade de horário", "Todo o Brasil", "Mesmo cuidado"],
      cta: "Agendar",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#c9876a] bg-[#c9876a]/10 px-4 py-1.5 rounded-full">
            Serviços
          </span>
          <h2 className="font-display text-4xl font-semibold text-[#2c2c2c] mt-5 mb-4">
            Como posso te ajudar
          </h2>
          <p className="text-[#6b6560] leading-relaxed">
            Ofereço diferentes modalidades de atendimento, sempre com escuta cuidadosa
            e presença genuína.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#faf7f2] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#8faa8b] text-xs font-semibold px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-[#2c2c2c] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6b6560] leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#6b6560]">
                      <span className="w-1.5 h-1.5 bg-[#8faa8b] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5511991221820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-[#8faa8b] hover:gap-3 transition-all duration-200"
                >
                  {s.cta} <IconArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Instagram ──────────────────────────────────────────────────────────────
function Instagram() {
  const posts = [
    "https://www.instagram.com/p/DNBx0CVR-aA/",
    "https://www.instagram.com/p/DDF_Y9NRLuS/",
    "https://www.instagram.com/p/DMgM7sHxWcW/",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8faa8b] hover:text-[#7a9876] transition-colors"
          >
            <IconInstagram />
            <span className="text-xs font-medium tracking-widest uppercase">@psicarolinakawauchi</span>
          </a>
          <h2 className="font-display text-4xl font-semibold text-[#2c2c2c] mt-3 mb-2">
            No Instagram
          </h2>
          <p className="text-[#6b6560] text-sm">Conteúdo sobre psicologia, arteterapia e autoconhecimento</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
          {posts.map((url, i) => (
            <div
              key={i}
              className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <blockquote
                className="instagram-media w-full !margin-0"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ border: "none", margin: 0, padding: 0 }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#e0d8ce] hover:border-[#8faa8b] text-[#6b6560] hover:text-[#8faa8b] font-medium text-sm px-6 py-3 rounded-full transition-all duration-200"
          >
            <IconInstagram />
            Ver mais no Instagram
          </a>
        </div>
      </div>

      <script async src="//www.instagram.com/embed.js" />
    </section>
  );
}

// ─── CTA Banner ─────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-20 bg-[#8faa8b] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <span className="text-white/70 text-xs font-medium tracking-widest uppercase">
          Primeiro passo
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-4 mb-5 leading-tight">
          Pronta para começar
          <br />
          sua jornada?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          A primeira conversa é gratuita. Vamos nos conhecer e entender como posso
          te apoiar nesse momento da sua vida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5511991221820"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-white text-[#8faa8b] hover:bg-[#faf7f2] font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
          >
            <IconWhatsApp />
            Conversar pelo WhatsApp
          </a>
          <a
            href="mailto:psicarolinakawauchi@gmail.com"
            className="flex items-center justify-center gap-2.5 border-2 border-white/40 hover:border-white text-white font-medium px-8 py-4 rounded-full transition-all duration-200"
          >
            <IconMail />
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" className="py-24 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <span className="text-xs font-medium tracking-widest uppercase text-[#c9876a] bg-[#c9876a]/10 px-4 py-1.5 rounded-full">
            Contato
          </span>
          <h2 className="font-display text-4xl font-semibold text-[#2c2c2c] mt-5 mb-5 leading-tight">
            Vamos conversar?
          </h2>
          <p className="text-[#6b6560] leading-relaxed mb-10">
            Estou aqui para te acolher. Entre em contato e agende sua conversa inicial gratuita.
            Atendo presencialmente em São Paulo e online para todo o Brasil.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#8faa8b]/15 rounded-xl flex items-center justify-center text-[#8faa8b] flex-shrink-0">
                <IconPhone />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#2c2c2c]">WhatsApp</p>
                <a
                  href="https://wa.me/5511991221820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b6560] hover:text-[#8faa8b] transition-colors text-sm"
                >
                  (11) 99122-1820
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#8faa8b]/15 rounded-xl flex items-center justify-center text-[#8faa8b] flex-shrink-0">
                <IconMail />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#2c2c2c]">E-mail</p>
                <a
                  href="mailto:psicarolinakawauchi@gmail.com"
                  className="text-[#6b6560] hover:text-[#8faa8b] transition-colors text-sm"
                >
                  psicarolinakawauchi@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#8faa8b]/15 rounded-xl flex items-center justify-center text-[#8faa8b] flex-shrink-0">
                <IconMapPin />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#2c2c2c]">Endereço</p>
                <p className="text-[#6b6560] text-sm leading-relaxed">
                  Zetha Vital<br />
                  Rua Alexandre Dumas, 1268 cj 126<br />
                  Santo Amaro - Chácara Santo Antônio<br />
                  São Paulo, SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#8faa8b]/15 rounded-xl flex items-center justify-center text-[#8faa8b] flex-shrink-0">
                <IconInstagram />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#2c2c2c]">Instagram</p>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6b6560] hover:text-[#8faa8b] transition-colors text-sm"
                >
                  @psicarolinakawauchi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-[#8faa8b]/15 rounded-full flex items-center justify-center text-[#8faa8b] mb-5">
                <IconHeart />
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#2c2c2c] mb-3">Mensagem enviada!</h3>
              <p className="text-[#6b6560] text-sm leading-relaxed max-w-xs">
                Obrigada pelo contato. Retorno em breve para agendarmos nossa conversa inicial.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-semibold text-[#2c2c2c] mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#6b6560] uppercase tracking-wider mb-1.5">
                    Nome
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] placeholder:text-[#b5aaa2] focus:outline-none focus:border-[#8faa8b] focus:ring-2 focus:ring-[#8faa8b]/20 transition-all bg-[#faf7f2]"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#6b6560] uppercase tracking-wider mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] placeholder:text-[#b5aaa2] focus:outline-none focus:border-[#8faa8b] focus:ring-2 focus:ring-[#8faa8b]/20 transition-all bg-[#faf7f2]"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6b6560] uppercase tracking-wider mb-1.5">
                      Telefone
                    </label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] placeholder:text-[#b5aaa2] focus:outline-none focus:border-[#8faa8b] focus:ring-2 focus:ring-[#8faa8b]/20 transition-all bg-[#faf7f2]"
                      placeholder="(11) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#6b6560] uppercase tracking-wider mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#e0d8ce] rounded-xl px-4 py-3 text-sm text-[#2c2c2c] placeholder:text-[#b5aaa2] focus:outline-none focus:border-[#8faa8b] focus:ring-2 focus:ring-[#8faa8b]/20 transition-all resize-none bg-[#faf7f2]"
                    placeholder="Como posso te ajudar?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#8faa8b] hover:bg-[#7a9876] text-white font-medium py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Enviar mensagem <IconArrow />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-3">Carolina Kawauchi</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Psicóloga e arteterapeuta em São Paulo. Cuidado com afeto, escuta com presença.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#8faa8b] rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <IconInstagram />
              </a>
              <a
                href="https://wa.me/5511991221820"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#8faa8b] rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <IconWhatsApp />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {["Psicoterapia Individual", "Arteterapia", "Grupos para Autoconhecimento", "Atendimento Online"].map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-sm text-white/60 hover:text-[#8faa8b] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <IconPhone />
                <a href="https://wa.me/5511991221820" className="hover:text-[#8faa8b] transition-colors">
                  (11) 99122-1820
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <IconMapPin />
                <span>Zetha Vital<br />Rua Alexandre Dumas, 1268 cj 126<br />Santo Amaro – São Paulo, SP</span>
              </li>
            </ul>
            <a
              href="https://wa.me/5511991221820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8faa8b] hover:bg-[#7a9876] text-white text-sm font-medium px-5 py-2.5 rounded-full mt-5 transition-colors duration-200"
            >
              <IconCalendar />
              Agendar Conversa Inicial
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Carolina Kawauchi. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs">
            CRP 06/83268 · Psicóloga & Arteterapeuta
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float ──────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5511991221820"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] hover:bg-[#20ba58] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110"
      aria-label="Conversar no WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Instagram />
      <CTABanner />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
