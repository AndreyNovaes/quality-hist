export default function ModernFuture() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>🚀 A Evolução Moderna e o Futuro</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--light-gray)', maxWidth: '800px', margin: '1rem auto 0' }}>
            Qualidade como Responsabilidade Compartilhada na Era da Velocidade
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-section fade-in-up">
            <h2>A Aceleração Exponencial</h2>
            <p>
              Se a evolução da qualidade nos primeiros 4.000 anos foi gradual, as últimas duas décadas foram
              uma <strong>explosão de mudanças exponenciais</strong>. A transformação digital criou pressões
              sem precedentes para entregar software de qualidade mais rápido do que nunca.
            </p>
          </div>

          <div className="content-section">
            <h2>📊 Do Modelo Cascata ao Manifesto Ágil</h2>

            <p>
              Durante décadas, o desenvolvimento seguiu o <strong>modelo cascata</strong>: Requisitos →
              Design → Implementação → Teste → Manutenção. Teste acontecia DEPOIS de meses de desenvolvimento.
            </p>

            <h3>O Manifesto Ágil: Uma Revolução (2001)</h3>
            <p>
              Em fevereiro de 2001, dezessete desenvolvedores criaram o <strong>Manifesto para Desenvolvimento
              Ágil de Software</strong>, mudando fundamentalmente a indústria.
            </p>

            <div className="info-box">
              <h3>Os Quatro Valores Centrais</h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Indivíduos e interações</strong> mais que processos e ferramentas</li>
                <li><strong>Software em funcionamento</strong> mais que documentação abrangente</li>
                <li><strong>Colaboração com o cliente</strong> mais que negociação de contratos</li>
                <li><strong>Responder a mudanças</strong> mais que seguir um plano</li>
              </ul>
            </div>

            <h3>Impacto no Teste</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li><strong>Teste Contínuo:</strong> Acontece em ciclos curtos (sprints), não fase final</li>
              <li><strong>Definition of Done:</strong> Funcionalidade só está pronta quando testada</li>
              <li><strong>Testadores na Equipe:</strong> Membros integrais, não departamento separado</li>
              <li><strong>TDD:</strong> Escrever testes ANTES do código</li>
              <li><strong>Automação:</strong> Essencial, não opcional</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>🔄 DevOps e Shift-Left Testing</h2>

            <p>
              Se Ágil uniu desenvolvedores e testadores, <strong>DevOps</strong> (Development + Operations)
              deu o próximo passo: unir desenvolvimento, qualidade e operações em um fluxo contínuo automatizado.
            </p>

            <h3>CI/CD: O Pipeline Automatizado</h3>
            <p>
              O coração do DevOps é o <strong>pipeline CI/CD</strong> — processo automatizado que leva
              código desde commit até produção, com qualidade verificada em cada etapa.
            </p>

            <div className="info-box">
              <h3>Pipeline Típico</h3>
              <ol>
                <li>Commit de código → Git push</li>
                <li><strong>CI:</strong> Build, análise estática, testes unitários</li>
                <li><strong>Testes de Integração</strong></li>
                <li><strong>Testes E2E em staging</strong></li>
                <li><strong>CD:</strong> Deploy automático para produção</li>
              </ol>
              <p><strong>Se qualquer etapa falhar, o pipeline para.</strong></p>
            </div>

            <h3>Shift-Left Testing</h3>
            <p>
              O conceito de <strong>&quot;shift-left&quot;</strong> significa trazer teste o mais cedo possível:
              testadores participam da definição de requisitos, testabilidade é considerada na arquitetura,
              TDD, e feedback em minutos via CI/CD.
            </p>

            <p>
              <strong>Por quê?</strong> Defeitos encontrados em requisitos custam 1x. Em produção, custam 100x.
            </p>
          </div>

          <div className="content-section">
            <h2>🤖 O Futuro: IA e Machine Learning nos Testes</h2>

            <p>
              Estamos no limiar de outra revolução: aplicação de <strong>Inteligência Artificial</strong>
              diretamente no processo de teste.
            </p>

            <h3>Aplicações de IA em Testes</h3>
            <div className="card-grid" style={{ margin: '2rem 0' }}>
              <div className="card">
                <h3 style={{ color: 'var(--secondary-blue)' }}>Geração de Testes</h3>
                <p>IA analisa código e gera casos de teste automaticamente</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--secondary-blue)' }}>Auto-Healing</h3>
                <p>Testes se auto-reparam quando UI muda</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--secondary-blue)' }}>Análise Preditiva</h3>
                <p>IA prevê onde bugs têm maior probabilidade</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--secondary-blue)' }}>Detecção de Anomalias</h3>
                <p>Identifica padrões incomuns em logs de produção</p>
              </div>
            </div>

            <div className="quote-box">
              <p>
                &quot;IA em testes não substitui testadores humanos — ela os amplifica. Humanos trazem
                criatividade e contexto. IA traz velocidade e escala.&quot;
              </p>
              <div className="quote-author">— Simbiose humano-IA na qualidade</div>
            </div>

            <h3>O Futuro: Testes Autônomos</h3>
            <p>
              A visão final é de <strong>sistemas de teste autônomos</strong> que analisam código continuamente,
              geram testes relevantes automaticamente, executam de forma inteligente, detectam defeitos e
              até sugerem correções — aprendendo continuamente com cada build e deploy.
            </p>
          </div>

          <div className="content-section">
            <h2>🌅 A Jornada Continua</h2>

            <div className="quote-box" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)', borderLeftColor: 'var(--secondary-blue)' }}>
              <p style={{ fontSize: '1.3rem', color: 'var(--primary-blue)' }}>
                <strong>&quot;A busca pela qualidade perfeita é eterna e inalcançável — mas cada geração
                aproxima-se mais. De artesãos a algoritmos, a história da qualidade é a história
                da humanidade tentando criar coisas dignas de durar.&quot;</strong>
              </p>
              <div className="quote-author">— A essência da jornada da qualidade</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
