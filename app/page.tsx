import Link from 'next/link'
import {
  Landmark,
  Cog,
  Bug,
  Rocket,
  BookOpen,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1>A Qualidade Não Nasceu Ontem</h1>
            <p className="hero-subtitle">
              Explore a fascinante jornada dos testes, desde o <span className="hero-highlight">Código de Hamurabi</span>
              {' '}até os <span className="hero-highlight">algoritmos de Inteligência Artificial</span>
            </p>
            <Link href="#principais-eras" className="btn btn-primary">
              Inicie a Jornada
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Principais Eras */}
      <section className="section" id="principais-eras">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">As Grandes Eras da Qualidade</h2>
            <p className="section-subtitle">
              Quatro épocas transformadoras que moldaram nossa compreensão de testes e garantia de qualidade
            </p>
          </div>

          <div className="card-grid">
            <Link href="/ancient-roots" className="card">
              <div className="card-icon">
                <Landmark size={40} />
              </div>
              <h3 className="card-title">Raízes Antigas</h3>
              <p className="card-description">
                Da Babilônia ao Império Romano, descubra como responsabilidade e padrões nasceram da necessidade humana
                de construir com qualidade e confiança. O Código de Hamurabi estabeleceu a primeira &quot;garantia de qualidade&quot;
                com consequências dramáticas.
              </p>
            </Link>

            <Link href="/industrial-revolution" className="card">
              <div className="card-icon">
                <Cog size={40} />
              </div>
              <h3 className="card-title">Revolução Industrial</h3>
              <p className="card-description">
                A manufatura em massa quebrou a conexão entre artesão e produto. Surgem departamentos de inspeção
                e, com Walter Shewhart, nasce o controle estatístico que transforma qualidade de arte em ciência.
              </p>
            </Link>

            <Link href="/software-era" className="card">
              <div className="card-icon">
                <Bug size={40} />
              </div>
              <h3 className="card-title">Era do Software</h3>
              <p className="card-description">
                Grace Hopper encontra uma mariposa em um computador, popularizando o termo &quot;bug&quot;. Glenford Myers
                revoluciona a mentalidade: o objetivo do teste não é provar que funciona, mas encontrar onde falha.
              </p>
            </Link>

            <Link href="/modern-future" className="card">
              <div className="card-icon">
                <Rocket size={40} />
              </div>
              <h3 className="card-title">O Futuro da Qualidade</h3>
              <p className="card-description">
                Do Manifesto Ágil ao DevOps, qualidade se torna responsabilidade compartilhada. IA e Machine Learning
                prometem testes preditivos, autônomos e uma nova era de garantia de qualidade.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Timeline Teaser */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Marcos que Mudaram a História</h2>
            <p className="section-subtitle">
              Uma prévia dos momentos decisivos que transformaram nossa abordagem à qualidade
            </p>
          </div>

          <div className="timeline-teaser">
            <div className="timeline-item">
              <div className="timeline-year">~1750 a.C.</div>
              <div className="timeline-content">
                <h3>O Código de Hamurabi</h3>
                <p>
                  &quot;Se um construtor constrói uma casa para alguém e não a constrói adequadamente,
                  e a casa que ele construiu cai e mata o dono, então esse construtor será morto.&quot;
                  A primeira forma documentada de responsabilidade pela qualidade.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1924</div>
              <div className="timeline-content">
                <h3>Gráficos de Controle de Shewhart</h3>
                <p>
                  Walter Shewhart, na Bell Labs, cria os gráficos de controle estatístico.
                  A revolução de prevenir defeitos controlando o processo, não apenas inspecionando produtos.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">1979</div>
              <div className="timeline-content">
                <h3>The Art of Software Testing</h3>
                <p>
                  Glenford Myers publica seu livro seminal: &quot;Testar é o processo de executar um programa
                  com a intenção de encontrar erros.&quot; A mentalidade destrutiva que mudou tudo.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2001</div>
              <div className="timeline-content">
                <h3>O Manifesto Ágil</h3>
                <p>
                  Dezessete desenvolvedores se reúnem em Snowbird, Utah, e criam o Manifesto Ágil.
                  Qualidade e testes se tornam atividades contínuas, integradas ao desenvolvimento.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-lg">
            <Link href="/timeline" className="btn btn-secondary">
              <BookOpen size={20} />
              Explorar a Linha do Tempo Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Seção Figuras-Chave */}
      <section className="section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">Os Pioneiros da Qualidade</h2>
            <p className="section-subtitle">
              Conheça as mentes brilhantes que transformaram a qualidade de um conceito vago
              em uma disciplina científica e essencial
            </p>
          </div>

          <div className="pioneers-carousel">
            {[
              {
                initials: 'WS',
                name: 'Walter A. Shewhart',
                role: 'O Pai do Controle Estatístico de Qualidade',
                description: 'Desenvolveu os gráficos de controle na década de 1920, transformando qualidade de inspeção reativa em controle proativo de processos.',
                gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
              },
              {
                initials: 'GH',
                name: 'Grace Hopper',
                role: 'Almirante e Pioneira da Computação',
                description: 'Popularizou os termos "bug" e "debugging" após encontrar uma mariposa literal causando falhas no Harvard Mark II em 1947.',
                gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
              },
              {
                initials: 'WD',
                name: 'W. Edwards Deming',
                role: 'O Guru da Qualidade Total',
                description: 'Levou os princípios de Shewhart ao Japão pós-guerra, criando a filosofia de melhoria contínua que revolucionou a indústria global.',
                gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
              },
              {
                initials: 'GM',
                name: 'Glenford J. Myers',
                role: 'Revolucionário da Mentalidade de Testes',
                description: 'Seu livro "The Art of Software Testing" (1979) redefiniu o propósito dos testes: não provar que funciona, mas descobrir onde falha.',
                gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'
              }
            ].map((pioneer) => (
              <div key={pioneer.initials} className="pioneer-card">
                <div className="pioneer-image" style={{ background: pioneer.gradient }}>
                  {pioneer.initials}
                </div>
                <h3 className="pioneer-name">{pioneer.name}</h3>
                <p className="pioneer-role">{pioneer.role}</p>
                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {pioneer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-lg">
            <Link href="/pioneers" className="btn btn-secondary">
              <Users size={20} />
              Conhecer Todos os Pioneiros
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Final */}
      <section className="section" style={{ background: 'var(--gradient-dark)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <Sparkles size={48} style={{ margin: '0 auto 1rem', color: 'var(--accent-gold)' }} />
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Pronto para Iniciar sua Jornada?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Descubra como milênios de história moldaram as práticas de qualidade que você usa hoje.
            De tábuas de argila a algoritmos de IA, a busca pela perfeição é universal e atemporal.
          </p>
          <Link href="/ancient-roots" className="btn btn-primary">
            <Landmark size={20} />
            Começar pelas Raízes Antigas
          </Link>
        </div>
      </section>
    </>
  )
}
