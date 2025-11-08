import Link from 'next/link'

export default function Timeline() {
  const events = [
    { year: '~1750 a.C.', title: 'O Código de Hamurabi', description: 'Primeira forma documentada de responsabilidade pela qualidade.', link: '/ancient-roots#hamurabi' },
    { year: '~2560 a.C.', title: 'Construção das Pirâmides', description: 'Engenheiros egípcios demonstram maestria em precisão e controle.', link: '/ancient-roots#egito' },
    { year: '~221 a.C.', title: 'Padronização na China', description: 'Sistema de marcação de produtos para rastreabilidade.', link: '/ancient-roots#china' },
    { year: 'Século XIII', title: 'Guildas Medievais', description: 'Sistema de certificação e o conceito de obra-prima.', link: '/ancient-roots#guildas' },
    { year: '1911', title: 'Gerenciamento Científico', description: 'Frederick Taylor introduz medição sistemática e padronização.', link: '/industrial-revolution' },
    { year: '1924', title: '🌟 Gráficos de Controle', description: 'Walter Shewhart cria o Controle Estatístico de Qualidade.', link: '/industrial-revolution' },
    { year: '1947', title: 'O Primeiro Bug Real', description: 'Grace Hopper encontra uma mariposa no Harvard Mark II.', link: '/software-era' },
    { year: '1957', title: 'Teste vs. Depuração', description: 'Charles Baker formaliza a separação entre teste e depuração.', link: '/software-era' },
    { year: '1979', title: '🌟 The Art of Software Testing', description: 'Glenford Myers redefine o propósito do teste de software.', link: '/software-era' },
    { year: '2001', title: '🌟 O Manifesto Ágil', description: 'Teste se torna atividade contínua integrada ao desenvolvimento.', link: '/modern-future' },
    { year: '2009', title: 'Surgimento do DevOps', description: 'CI/CD e cultura de responsabilidade compartilhada.', link: '/modern-future' },
    { year: 'Anos 2020', title: 'IA e Machine Learning', description: 'Testes inteligentes, preditivos e autônomos.', link: '/modern-future' },
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>⏳ Linha do Tempo Interativa</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--light-gray)', maxWidth: '800px', margin: '1rem auto 0' }}>
            4.000 Anos de História da Qualidade em Uma Jornada Visual
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="timeline-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}>
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '100%', background: 'linear-gradient(180deg, var(--gold) 0%, var(--primary-blue) 50%, var(--secondary-blue) 100%)' }}></div>

            {events.map((event, index) => (
              <div key={index} className="timeline-event" style={{ position: 'relative', marginBottom: '4rem', display: 'flex', alignItems: 'center', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--gold)', border: '4px solid white', borderRadius: '50%', boxShadow: 'var(--shadow-md)', zIndex: 10 }}></div>

                <Link
                  href={event.link}
                  className="timeline-content"
                  style={{
                    flex: 1,
                    background: 'white',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow-md)',
                    transition: 'all var(--transition-base)',
                    cursor: 'pointer',
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                    [index % 2 === 0 ? 'marginRight' : 'marginLeft']: 'calc(50% + 2rem)'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '0.5rem' }}>
                    {event.year}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                    {event.title}
                  </h3>
                  <p style={{ color: 'var(--dark-gray)', fontSize: '1rem', lineHeight: 1.7 }}>
                    {event.description}
                  </p>
                </Link>
              </div>
            ))}

            <div className="timeline-event" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--secondary-blue)', border: '4px solid white', borderRadius: '50%', boxShadow: 'var(--shadow-md)', zIndex: 10 }}></div>

              <div style={{ flex: 1, background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)', border: '2px solid var(--secondary-blue)', padding: '2rem', borderRadius: '12px', marginRight: 'calc(50% + 2rem)', textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--secondary-blue)', marginBottom: '0.5rem' }}>
                  Futuro
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                  A Jornada Continua...
                </h3>
                <p style={{ color: 'var(--dark-gray)', fontSize: '1rem', lineHeight: 1.7 }}>
                  O futuro da qualidade será moldado por desafios que ainda não imaginamos — mas uma verdade permanece: a busca pela excelência é eterna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
