import { Zap, Target, Repeat, Brain, Sparkles, ArrowRight } from 'lucide-react'

export default function ModernFuture() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>🚀 A Evolução Moderna e o Futuro</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '1rem auto 0' }}>
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
            <h2 id="agil"><Target size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />Do Modelo Cascata ao Manifesto Ágil</h2>

            <p>
              Durante décadas, o desenvolvimento seguiu o <strong>modelo cascata</strong>: Requisitos →
              Design → Implementação → Teste → Manutenção. Teste acontecia DEPOIS de meses de desenvolvimento,
              tornando defeitos extremamente caros de corrigir.
            </p>

            <h3>O Manifesto Ágil: Uma Revolução (2001)</h3>
            <p>
              Em <strong>fevereiro de 2001</strong>, dezessete desenvolvedores se reuniram em Snowbird, Utah,
              e criaram o <strong>Manifesto para Desenvolvimento Ágil de Software</strong>, mudando
              fundamentalmente a indústria de software.
            </p>

            <div className="info-box">
              <h3>Os Quatro Valores Centrais</h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Indivíduos e interações</strong> mais que processos e ferramentas</li>
                <li><strong>Software em funcionamento</strong> mais que documentação abrangente</li>
                <li><strong>Colaboração com o cliente</strong> mais que negociação de contratos</li>
                <li><strong>Responder a mudanças</strong> mais que seguir um plano</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Beck, Kent et al. "Manifesto for Agile Software Development". AgileManifesto.org, 2001
              </p>
            </div>

            <h3>Impacto Revolucionário no Teste</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li><strong>Teste Contínuo:</strong> Acontece em ciclos curtos (sprints de 1-4 semanas), não como fase final</li>
              <li><strong>Definition of Done:</strong> Funcionalidade só está realmente "pronta" quando testada e funcionando</li>
              <li><strong>Testadores na Equipe:</strong> Membros integrais do time, não departamento separado</li>
              <li><strong>TDD (Test-Driven Development):</strong> Escrever testes ANTES do código de produção</li>
              <li><strong>Automação:</strong> Testes automatizados passam de luxo a necessidade absoluta</li>
            </ul>

            <div className="quote-box">
              <p>
                Metodologias ágeis transformaram teste de uma fase separada ao final do desenvolvimento
                para uma atividade contínua integrada a cada iteração, fundamentalmente mudando quando
                e como bugs são descobertos e corrigidos.
              </p>
              <div className="quote-author">Crispin, Lisa e Gregory, Janet. "Agile Testing: A Practical Guide for Testers and Agile Teams". Addison-Wesley, 2009, p. 9-12</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="devops"><Repeat size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />DevOps e Shift-Left Testing</h2>

            <p>
              Se Ágil uniu desenvolvedores e testadores, <strong>DevOps</strong> (Development + Operations)
              deu o próximo passo: unir desenvolvimento, qualidade e operações em um fluxo contínuo e
              completamente automatizado.
            </p>

            <h3>CI/CD: O Pipeline Automatizado</h3>
            <p>
              O coração do DevOps é o <strong>pipeline CI/CD</strong> (Continuous Integration / Continuous Deployment)
              — um processo automatizado que leva código desde o commit inicial até produção, com qualidade
              verificada rigorosamente em cada etapa.
            </p>

            <div className="info-box">
              <h3>Pipeline CI/CD Típico</h3>
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Commit:</strong> Desenvolvedor faz push de código para repositório Git</li>
                <li><strong>CI - Build:</strong> Compilação automática e análise estática de código</li>
                <li><strong>CI - Testes Unitários:</strong> Executados em segundos, feedback imediato</li>
                <li><strong>Testes de Integração:</strong> Verificam interação entre componentes</li>
                <li><strong>Testes E2E em Staging:</strong> Simulam usuário real em ambiente de homologação</li>
                <li><strong>CD - Deploy Automático:</strong> Se todos os testes passam, deploy para produção</li>
              </ol>
              <p style={{ marginTop: '1rem' }}><strong>Princípio fundamental: Se qualquer etapa falhar, o pipeline para imediatamente.</strong></p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Humble, Jez e Farley, David. "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation". Addison-Wesley, 2010
              </p>
            </div>

            <h3>Shift-Left Testing</h3>
            <p>
              O conceito de <strong>"shift-left"</strong> (deslocar para a esquerda) significa trazer teste
              o mais cedo possível no ciclo de desenvolvimento. Em vez de testar no final, teste começa
              desde a concepção:
            </p>

            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li>Testadores participam da definição de requisitos</li>
              <li>Testabilidade é considerada na arquitetura desde o início</li>
              <li>TDD: Testes escritos antes do código</li>
              <li>Feedback em minutos (não semanas) via CI/CD</li>
            </ul>

            <div className="quote-box">
              <p>
                <strong>A Regra 1-10-100:</strong> Defeitos encontrados em requisitos custam $1 para corrigir.
                Encontrados durante desenvolvimento custam $10. Encontrados em produção custam $100.
              </p>
              <div className="quote-author">Análise conforme IBM Systems Sciences Institute, citado em Boehm, Barry W. "Software Engineering Economics". Prentice Hall, 1981</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="ia"><Brain size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />O Futuro: IA e Machine Learning nos Testes</h2>

            <p>
              Estamos no limiar de outra revolução fundamental: a aplicação de <strong>Inteligência Artificial
              e Machine Learning</strong> diretamente no processo de garantia de qualidade.
            </p>

            <h3>Aplicações Emergentes de IA em Testes</h3>
            <div className="card-grid" style={{ margin: '2rem 0' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-primary)' }}>Geração Automática de Testes</h3>
                <p>IA analisa código-fonte e gera casos de teste relevantes automaticamente, identificando caminhos críticos e edge cases</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-primary)' }}>Self-Healing Tests</h3>
                <p>Testes que se auto-reparam quando a UI muda, usando ML para identificar elementos alternativos</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-primary)' }}>Análise Preditiva de Defeitos</h3>
                <p>Modelos de ML preveem onde bugs têm maior probabilidade com base em histórico de código</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-primary)' }}>Detecção de Anomalias</h3>
                <p>IA identifica padrões incomuns em logs de produção, detectando problemas antes de usuários</p>
              </div>
            </div>

            <div className="info-box">
              <h3>Ferramentas de IA para Testes (2020s)</h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Testim, Mabl, Functionize:</strong> Self-healing tests e geração automática</li>
                <li><strong>Applitools, Percy:</strong> Visual testing com IA para detectar mudanças de UI</li>
                <li><strong>Diffblue, Ponicode:</strong> Geração automática de testes unitários</li>
                <li><strong>Sentry, Datadog:</strong> Detecção de anomalias em produção</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte:Analise de mercado de ferramentas de teste com IA. World Quality Report 2023-24, Capgemini
              </p>
            </div>

            <div className="quote-box">
              <p>
                "IA em testes não substitui testadores humanos — ela os amplifica exponencialmente.
                Humanos trazem criatividade, intuição e contexto de negócio. IA traz velocidade,
                escala e análise de padrões impossíveis para humanos."
              </p>
              <div className="quote-author">Fewster, Mark e Graham, Dorothy. "Software Test Automation: Effective use of test execution tools". Addison-Wesley, 2012 (atualização 2020)</div>
            </div>

            <h3>O Futuro: Sistemas de Teste Autônomos</h3>
            <p>
              A visão emergente é de <strong>sistemas de teste completamente autônomos</strong> que:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li>Analisam código continuamente em tempo real</li>
              <li>Geram testes relevantes automaticamente baseado em mudanças</li>
              <li>Executam de forma inteligente (priorizando testes de alto risco)</li>
              <li>Detectam defeitos com precisão superior a humanos</li>
              <li>Sugerem (ou até implementam) correções automaticamente</li>
              <li>Aprendem continuamente com cada build, deploy e incidente de produção</li>
            </ul>

            <div className="quote-box">
              <p>
                Assim como Shewhart transformou qualidade de inspeção para prevenção, IA está transformando
                de prevenção para <strong>predição</strong> — antecipando defeitos antes mesmo que código seja escrito.
              </p>
              <div className="quote-author">Análise de tendência emergente baseada em Kim, Gene et al. "The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations". IT Revolution Press, 2021</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="jornada"><Sparkles size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />A Jornada Continua</h2>

            <p>
              De tábuas de argila babilônicas em 1750 a.C. a algoritmos de aprendizado de máquina em 2025,
              percorremos uma jornada extraordinária de 3.775 anos. Mas a essência permanece inalterada:
              <strong> a busca humana pela excelência e confiabilidade</strong>.
            </p>

            <div className="card-grid" style={{ margin: '2rem 0' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Responsabilidade</h3>
                <p>Do Código de Hamurabi ao CI/CD, quem cria é responsável pela qualidade</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Medição</h3>
                <p>Do côvado egípcio aos gráficos de Shewhart, medir é controlar</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Prevenção</h3>
                <p>Da obra-prima medieval ao shift-left, prevenir supera corrigir</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Evolução</h3>
                <p>De inspeção manual a IA autônoma, a qualidade nunca para de evoluir</p>
              </div>
            </div>

            <div className="quote-box" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)', borderLeftColor: 'var(--accent-primary)' }}>
              <p style={{ fontSize: '1.3rem' }}>
                <strong>"A busca pela qualidade perfeita é eterna e inalcançável — mas cada geração
                aproxima-se mais. De artesãos babilônicos a algoritmos de IA, a história da qualidade
                é a história da humanidade tentando criar coisas dignas de durar."</strong>
              </p>
              <div className="quote-author">A essência da jornada da qualidade</div>
            </div>

            <p style={{ fontSize: '1.15rem', textAlign: 'center', marginTop: '2rem' }}>
              E você, profissional de QA e software de 2025, é parte desta história milenar.
              Cada teste que você escreve, cada bug que você encontra, cada processo que você melhora —
              tudo isso é a continuação de uma jornada que começou há milênios e que continuará
              muito além de nós.
            </p>

            <div className="text-center mt-lg">
              <a href="/timeline" className="btn btn-primary">
                <ArrowRight size={20} />
                Explorar a Linha do Tempo Completa
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
