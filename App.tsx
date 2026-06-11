import { Link, Route, Routes, useParams } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-brandYellow text-brandBlack">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="leading-tight">
          <strong className="block text-2xl font-black tracking-tight">
            TáNaMão Brasil
          </strong>
          <span className="text-xs font-bold uppercase tracking-[0.22em]">
            O Brasil encontra aqui
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm font-black">
          <Link className="rounded-full px-3 py-2 hover:bg-black/10" to="/">
            Home
          </Link>

          <Link className="rounded-full px-3 py-2 hover:bg-black/10" to="/search">
            Buscar
          </Link>

          <Link className="rounded-full px-3 py-2 hover:bg-black/10" to="/planos">
            Planos
          </Link>

          <Link className="rounded-full px-3 py-2 hover:bg-black/10" to="/anunciar">
            Anunciar
          </Link>

          <Link
            className="rounded-full bg-brandBlack px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-brandYellow shadow-soft"
            to="/cadastro-profissional"
          >
            Cadastre-se Grátis
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-auto bg-brandBlack text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <strong className="text-xl font-black text-brandYellow">
            TáNaMão Brasil
          </strong>
          <p className="mt-1 text-sm text-white/70">
            Marketplace para encontrar profissionais perto de você.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm font-bold text-white/80">
          <Link to="/search">Buscar</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/anunciar">Anunciar</Link>
          <Link to="/cadastro-profissional">Cadastrar serviço</Link>
        </div>
      </div>
    </footer>
  );
}

function PageShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <section className="rounded-[32px] bg-white p-6 shadow-soft md:p-10">
        <h1 className="text-3xl font-black tracking-tight text-brandBlack md:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-black/65 md:text-lg">
          {subtitle}
        </p>

        {children && <div className="mt-8">{children}</div>}
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <main>
      <section className="bg-brandYellow text-brandBlack">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <span className="rounded-full bg-brandBlack px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brandYellow">
              Lançamento em São Paulo
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-7xl">
              O Brasil encontra aqui
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed text-black/70 md:text-xl">
              Encontre profissionais perto de você e chame direto no WhatsApp.
            </p>

            <div className="mt-8 grid gap-3 rounded-[28px] bg-white p-4 shadow-soft md:grid-cols-[1fr_1fr_auto]">
              <input
                className="h-14 rounded-2xl border border-black/10 px-4 text-sm font-bold outline-none focus:border-brandBlack"
                placeholder="Qual serviço você precisa?"
              />

              <input
                className="h-14 rounded-2xl border border-black/10 px-4 text-sm font-bold outline-none focus:border-brandBlack"
                placeholder="Cidade"
              />

              <Link
                className="flex h-14 items-center justify-center rounded-2xl bg-brandBlack px-6 text-sm font-black uppercase tracking-[0.18em] text-brandYellow"
                to="/search"
              >
                Buscar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-black text-brandBlack md:text-3xl">
          Categorias principais
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ['Eletricista', '/search/sorocaba/eletricista'],
            ['Encanador', '/search/sorocaba/encanador'],
            ['Diarista', '/search/sorocaba/diarista'],
            ['Pintor', '/search/sorocaba/pintor'],
            ['Montador', '/search/sorocaba/montador'],
            ['Pedreiro', '/search/sorocaba/pedreiro'],
            ['Jardineiro', '/search/sorocaba/jardineiro'],
            ['Mecânico', '/search/sorocaba/mecanico']
          ].map(([name, url]) => (
            <Link
              key={name}
              to={url}
              className="rounded-[24px] bg-white p-5 text-center font-black text-brandBlack shadow-soft transition hover:-translate-y-1 hover:bg-brandYellow"
            >
              {name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-[32px] bg-brandBlack p-6 text-white shadow-soft md:p-10">
          <h2 className="text-3xl font-black text-brandYellow">
            Receba novos clientes todos os dias
          </h2>

          <p className="mt-3 max-w-2xl text-white/70">
            Crie seu perfil grátis no TáNaMão Brasil e seja encontrado por clientes
            da sua cidade.
          </p>

          <Link
            to="/cadastro-profissional"
            className="mt-6 inline-flex rounded-2xl bg-brandYellow px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-brandBlack"
          >
            Cadastre-se Grátis
          </Link>
        </div>
      </section>
    </main>
  );
}

function SearchPage() {
  const { city, category } = useParams();

  return (
    <PageShell
      title="Encontre profissionais"
      subtitle={`Busca inicial ${city ? `em ${city}` : ''} ${
        category ? `para ${category}` : ''
      }. Na próxima etapa, vamos criar os cards reais com dados mockados.`}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {['Premium', 'Destaque', 'Gratuito'].map((plan) => (
          <div key={plan} className="rounded-[24px] border border-black/10 p-5">
            <span className="rounded-full bg-brandYellow px-3 py-1 text-xs font-black text-brandBlack">
              {plan}
            </span>

            <h2 className="mt-4 text-xl font-black">Profissional exemplo</h2>

            <p className="mt-2 text-sm text-black/60">
              Card temporário. Na Parte 4, vamos deixar esta tela completa.
            </p>

            <a
              href="https://wa.me/5599984061999"
              className="mt-5 inline-flex rounded-xl bg-green-600 px-4 py-3 text-sm font-black text-white"
            >
              WhatsApp
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function ProfessionalProfilePage() {
  const { id } = useParams();

  return (
    <PageShell
      title="Perfil do profissional"
      subtitle={`Perfil temporário do profissional ID: ${id || '1'}. Na próxima etapa, vamos transformar isso em um mini-site completo.`}
    >
      <a
        href="https://wa.me/5599984061999"
        className="inline-flex rounded-2xl bg-green-600 px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
      >
        Chamar no WhatsApp
      </a>
    </PageShell>
  );
}

function ProfessionalRegisterPage() {
  return (
    <PageShell
      title="Cadastre seu serviço grátis"
      subtitle="Receba novos clientes todos os dias pelo TáNaMão Brasil."
    >
      <form className="grid gap-4 md:grid-cols-2">
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="Nome completo" autoComplete="name" />
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="Nome comercial" />
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="WhatsApp" autoComplete="tel" />
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="E-mail" type="email" autoComplete="email" />
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="Senha" type="password" autoComplete="new-password" />
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="Cidade" />

        <button type="button" className="h-14 rounded-2xl bg-brandBlack px-6 text-sm font-black uppercase tracking-[0.18em] text-brandYellow md:col-span-2">
          Criar meu perfil grátis
        </button>
      </form>
    </PageShell>
  );
}

function PlansPage() {
  return (
    <PageShell title="Planos para profissionais" subtitle="Comece grátis e depois escolha mais visibilidade quando quiser.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Gratuito', 'R$ 0', 'Perfil público, WhatsApp e até 3 fotos.'],
          ['Destaque', 'R$ 19,90/mês', 'Selo Destaque e melhor posição na busca.'],
          ['Premium', 'R$ 39,90/mês', 'Topo da busca, mais fotos e mais visibilidade.']
        ].map(([name, price, description]) => (
          <div key={name} className={`rounded-[28px] p-6 shadow-soft ${name === 'Premium' ? 'bg-brandYellow text-brandBlack' : 'border border-black/10 bg-white text-brandBlack'}`}>
            <h2 className="text-2xl font-black">{name}</h2>
            <p className="mt-4 text-3xl font-black">{price}</p>
            <p className="mt-3 text-sm font-bold opacity-70">{description}</p>
            <Link to="/cadastro-profissional" className="mt-6 inline-flex rounded-2xl bg-brandBlack px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-brandYellow">
              Escolher plano
            </Link>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function AdvertisePage() {
  return (
    <PageShell title="Anuncie no TáNaMão Brasil" subtitle="Destaque seu serviço na sua cidade e receba mais contatos.">
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Banner Patrocinado', 'R$ 29,90/semana'],
          ['Categoria Patrocinada', 'R$ 99,90/mês'],
          ['Cidade Patrocinada', 'R$ 149,90/mês']
        ].map(([name, price]) => (
          <div key={name} className="rounded-[28px] border border-black/10 p-6">
            <h2 className="text-xl font-black">{name}</h2>
            <p className="mt-4 text-3xl font-black">{price}</p>
            <a href="https://wa.me/5599984061999" className="mt-6 inline-flex rounded-2xl bg-brandBlack px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-brandYellow">
              Quero anunciar
            </a>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function LocalSeoPage() {
  const { serviceSlug, citySlug } = useParams();
  const service = serviceSlug?.replaceAll('-', ' ') || 'serviço';
  const city = citySlug?.replaceAll('-', ' ') || 'cidade';

  return (
    <PageShell title={`${service} em ${city}`} subtitle={`Encontre ${service} em ${city}. Compare profissionais e chame direto no WhatsApp.`}>
      <div className="flex flex-col gap-3 md:flex-row">
        <Link to={`/search/${citySlug}/${serviceSlug}`} className="rounded-2xl bg-brandBlack px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-brandYellow">
          Buscar profissionais
        </Link>

        <Link to="/cadastro-profissional" className="rounded-2xl bg-brandYellow px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-brandBlack">
          Cadastrar meu serviço
        </Link>
      </div>
    </PageShell>
  );
}

function LoginPage() {
  return (
    <PageShell title="Entrar" subtitle="Acesse sua conta profissional no TáNaMão Brasil.">
      <form className="grid max-w-md gap-4">
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="E-mail" type="email" autoComplete="email" />
        <input className="h-14 rounded-2xl border border-black/10 px-4 font-bold outline-none focus:border-brandBlack" placeholder="Senha" type="password" autoComplete="current-password" />

        <button type="button" className="h-14 rounded-2xl bg-brandBlack px-6 text-sm font-black uppercase tracking-[0.18em] text-brandYellow">
          Entrar
        </button>
      </form>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell title="Página não encontrada" subtitle="Essa página ainda não existe ou o endereço está incorreto.">
      <Link to="/" className="inline-flex rounded-2xl bg-brandBlack px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-brandYellow">
        Voltar para Home
      </Link>
    </PageShell>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brandGray text-brandBlack">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:city/:category" element={<SearchPage />} />
        <Route path="/profissional/:id" element={<ProfessionalProfilePage />} />
        <Route path="/profile/:id" element={<ProfessionalProfilePage />} />
        <Route path="/cadastro-profissional" element={<ProfessionalRegisterPage />} />
        <Route path="/planos" element={<PlansPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/anunciar" element={<AdvertisePage />} />
        <Route path="/sp/:serviceSlug/:citySlug" element={<LocalSeoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
