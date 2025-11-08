export default function Pioneers() {
  const pioneers = [
    {
      initials: 'WS',
      name: 'Walter Andrew Shewhart',
      role: 'O Pai do Controle Estatístico de Qualidade',
      years: '1891-1967',
      affiliation: 'Bell Telephone Laboratories',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
      achievements: [
        'Criou os gráficos de controle estatístico em 1924',
        'Desenvolveu o ciclo PDSA (Plan-Do-Study-Act)',
        'Estabeleceu que qualidade deve ser construída no processo',
        'Base para Six Sigma, Lean e toda metodologia moderna de qualidade'
      ],
      quote: '"O objetivo de um gráfico de controle é detectar a presença de causas especiais de variação quando elas aparecem."'
    },
    {
      initials: 'GH',
      name: 'Grace Murray Hopper',
      role: 'Almirante e Pioneira da Computação',
      years: '1906-1992',
      affiliation: 'Yale, Harvard, US Navy',
      gradient: 'linear-gradient(135deg, #cd7f32 0%, #d4af37 100%)',
      achievements: [
        'Popularizou os termos "bug" e "debugging" (1947)',
        'Desenvolveu o primeiro compilador (A-0 System, 1952)',
        'Foi instrumental na criação do COBOL (1959)',
        'Enfatizava validação rigorosa e código legível'
      ],
      quote: '"É mais fácil pedir perdão do que conseguir permissão."'
    },
    {
      initials: 'WD',
      name: 'W. Edwards Deming',
      role: 'O Guru da Qualidade Total',
      years: '1900-1993',
      affiliation: 'Yale, NYU, Japão',
      gradient: 'linear-gradient(135deg, #1f2937 0%, #6b7280 100%)',
      achievements: [
        'Levou princípios de Shewhart ao Japão pós-guerra',
        'Desenvolveu os 14 Pontos de Deming para gestão',
        'Popularizou o ciclo PDCA de melhoria contínua',
        'Contribuiu para o "milagre industrial japonês"'
      ],
      quote: '"Não é necessário mudar. A sobrevivência não é obrigatória."'
    },
    {
      initials: 'GM',
      name: 'Glenford J. Myers',
      role: 'Revolucionário da Mentalidade de Testes',
      years: '1946-presente',
      affiliation: 'IBM, Consultor',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
      achievements: [
        'Publicou "The Art of Software Testing" (1979)',
        'Redefiniu teste: intenção de encontrar erros, não provar que funciona',
        'Formalizou técnicas de caixa-preta e caixa-branca',
        'Estabeleceu teste como disciplina profissional rigorosa'
      ],
      quote: '"Testar é o processo de executar um programa com a intenção de encontrar erros."'
    }
  ]

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>🌟 Os Pioneiros da Qualidade</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--light-gray)', maxWidth: '800px', margin: '1rem auto 0' }}>
            As Mentes Brilhantes que Transformaram Qualidade em Ciência
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-section">
            <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              A história da qualidade é construída sobre os ombros de gigantes — visionários que viram além
              do óbvio, desafiaram o status quo e criaram disciplinas inteiras onde antes havia apenas
              intuição e prática informal. Conheça os pioneiros que moldaram como pensamos sobre qualidade hoje.
            </p>
          </div>
        </div>
      </section>

      {pioneers.map((pioneer, index) => (
        <section key={index} className="section" style={{ background: index % 2 === 0 ? 'white' : 'var(--off-white)' }}>
          <div className="container">
            <div className="content-section">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flexShrink: 0 }}>
                  <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: pioneer.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '4rem', border: index === 1 ? '6px solid var(--primary-blue)' : '6px solid var(--gold)', boxShadow: 'var(--shadow-lg)' }}>
                    {pioneer.initials}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ marginTop: 0 }}>{pioneer.name}</h2>
                  <p style={{ fontSize: '1.3rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem' }}>
                    {pioneer.role}
                  </p>
                  <p style={{ color: 'var(--medium-gray)', fontSize: '1.1rem' }}>
                    {pioneer.years} | {pioneer.affiliation}
                  </p>
                </div>
              </div>

              <h3>Contribuições Fundamentais</h3>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {pioneer.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>

              <div className="quote-box">
                <p>{pioneer.quote}</p>
                <div className="quote-author">— {pioneer.name.split(' ')[0]} {pioneer.name.split(' ').slice(-1)}</div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-gray) 100%)', color: 'white' }}>
        <div className="container">
          <div className="content-section" style={{ background: 'transparent', boxShadow: 'none' }}>
            <h2 style={{ color: 'white', textAlign: 'center' }}>Os Ombros de Gigantes</h2>
            <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--light-gray)' }}>
              Estes pioneiros não apenas criaram técnicas e ferramentas — eles transformaram mentalidades.
              Hoje, quando escrevemos um teste unitário, executamos CI/CD ou analisamos métricas de qualidade,
              estamos de pé sobre os ombros destes gigantes.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
