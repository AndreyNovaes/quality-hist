export default function IndustrialRevolution() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>⚙️ A Revolução Industrial</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--light-gray)', maxWidth: '800px', margin: '1rem auto 0' }}>
            Da Arte à Ciência: A Transformação da Garantia de Qualidade
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-section fade-in-up">
            <h2>O Grande Desacoplamento</h2>
            <p>
              Por milênios, a qualidade foi garantida por uma conexão direta e pessoal: o artesão conhecia
              intimamente cada peça que criava. Então veio a Revolução Industrial, e tudo mudou.
            </p>
            <p>
              Com a chegada das máquinas a vapor e manufatura em massa, esta ligação fundamental foi
              <strong> quebrada de forma irreversível</strong>. A responsabilidade pessoal pela qualidade
              evaporou na névoa das fábricas.
            </p>
          </div>

          <div className="content-section">
            <h2>🔍 O Nascimento da Inspeção</h2>
            <p>
              A resposta inicial ao problema foi direta: se os trabalhadores fazem peças mas não garantem
              sua qualidade, então <strong>crie um departamento separado cuja única função seja inspecionar</strong>.
            </p>
            <p>
              Embora melhor do que nenhum controle, rapidamente ficaram evidentes as limitações graves da
              inspeção em massa: ineficiência econômica, impossibilidade de inspeção total, antagonismo
              organizacional e abordagem reativa.
            </p>
          </div>

          <div className="content-section">
            <h2>📊 O Gerenciamento Científico de Taylor</h2>
            <p>
              No início do século XX, Frederick Winslow Taylor revolucionou a manufatura com seus princípios
              de <strong>Gerenciamento Científico</strong>. Taylor aplicou metodologia científica rigorosa
              para otimizar cada aspecto do trabalho industrial, com foco obsessivo em eficiência.
            </p>
            <p>
              O Taylorismo trouxe padronização e medição, mas também desumanização e foco em quantidade
              sobre qualidade.
            </p>
          </div>

          <div className="content-section">
            <h2>📈 A Revolução de Walter Shewhart</h2>
            <h3>Do Controle de Produto ao Controle de Processo</h3>

            <div className="info-box">
              <h3>A Insight Revolucionária de Shewhart</h3>
              <p style={{ fontSize: '1.15rem' }}>
                <strong>&quot;Em vez de inspecionar produtos acabados para separar bons de ruins, monitore
                o processo de produção em tempo real para prevenir a criação de defeitos.&quot;</strong>
              </p>
            </div>

            <p>
              Em 16 de maio de 1924, Shewhart criou um memorando de uma página que mudaria a história
              da qualidade. Nele, ele esboçou o primeiro <strong>gráfico de controle estatístico</strong>.
            </p>

            <p>
              Shewhart reconheceu uma verdade fundamental: <strong>variação é inerente a todos os
              processos</strong>. A questão crítica é distinguir entre variação de causa comum (natural)
              e variação de causa especial (anormal).
            </p>

            <div className="quote-box">
              <p>
                &quot;O objetivo não é zero variação — isso é impossível. O objetivo é um processo estável
                e previsível, onde a única variação é aleatória.&quot;
              </p>
              <div className="quote-author">— Walter A. Shewhart</div>
            </div>

            <p>
              Shewhart também desenvolveu o <strong>ciclo PDSA</strong> (Plan-Do-Study-Act), base da
              melhoria contínua moderna. Este ciclo se tornaria fundamental para Lean, Six Sigma e Kaizen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
