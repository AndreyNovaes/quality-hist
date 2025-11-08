import { Bug, Microscope, FlaskConical, Lightbulb, ArrowRight } from 'lucide-react'

export default function SoftwareEra() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>🐛 A Era do Software</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '1rem auto 0' }}>
            O Nascimento de uma Disciplina: Testando o Intangível
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-section fade-in-up">
            <h2>Um Novo Paradigma de Qualidade</h2>
            <p>
              Durante milênios, a humanidade aperfeiçoou técnicas para garantir a qualidade de objetos físicos.
              Então, na segunda metade do século XX, surgiu algo radicalmente diferente: <strong>software</strong>.
            </p>
            <p>
              Software é pura lógica abstrata. Você não pode segurar um bug nas mãos. Como aplicar séculos
              de sabedoria sobre qualidade a algo fundamentalmente <em>intangível</em>?
            </p>
          </div>

          <div className="content-section">
            <h2 id="hopper"><Bug size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />"O Primeiro Bug Real"</h2>
            <h3>Grace Hopper e a Mariposa que Mudou a Linguagem</h3>

            <p>
              Em <strong>9 de setembro de 1947</strong>, no Computation Laboratory da Universidade de Harvard,
              algo incomum aconteceu. O <strong>Harvard Mark II</strong> estava apresentando comportamento errático.
              A equipe de engenheiros, liderada pela Almirante <strong>Grace Murray Hopper</strong>, encontrou
              a causa: uma mariposa presa no relé #70 do Painel F.
            </p>

            <div className="info-box">
              <h3>O Bug Original</h3>
              <p>
                Hopper e sua equipe removeram a mariposa, colaram-na no livro de registros e anotaram:
                <em> "First actual case of bug being found"</em> (Primeiro caso real de bug sendo encontrado).
              </p>
              <p>
                O termo "bug" já existia desde o século XIX para descrever falhas em sistemas mecânicos,
                mas este incidente o popularizou definitivamente no contexto de computação.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Log book do Harvard Mark II, 9 de setembro de 1947. Smithsonian National Museum of American History
              </p>
            </div>

            <h3>Grace Hopper: Mais que uma Mariposa</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li><strong>Invenção do Compilador (1952):</strong> Desenvolveu o A-0 System, primeiro compilador funcional</li>
              <li><strong>COBOL (1959):</strong> Foi instrumental na criação do COBOL, priorizando legibilidade</li>
              <li><strong>Filosofia de Validação:</strong> Enfatizava que programas deveriam ser verificados metodicamente</li>
            </ul>

            <div className="quote-box">
              <p>
                "Uma embarcação no porto está segura, mas não é para isso que os navios são construídos.
                O mesmo vale para programas — eles devem ser testados em condições reais."
              </p>
              <div className="quote-author">Atribuído a Grace Hopper. Beyer, Kurt W. "Grace Hopper and the Invention of the Information Age". MIT Press, 2009, p. 271</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="baker"><Microscope size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />A Separação Formal: Teste vs. Depuração</h2>
            <h3>Charles L. Baker e a Profissionalização (1957)</h3>

            <p>
              Em 1957, <strong>Charles L. Baker</strong> argumentou pela separação formal entre
              <strong> teste</strong> e <strong>depuração</strong> como atividades distintas com
              objetivos e metodologias diferentes.
            </p>

            <div className="card-grid" style={{ margin: '2rem 0' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-primary)' }}>Teste (Testing)</h3>
                <p><strong>Objetivo:</strong> Verificar se o software atende aos requisitos</p>
                <p><strong>Método:</strong> Executar programa com entradas conhecidas</p>
                <p><strong>Resultado:</strong> Descobrir se existem defeitos</p>
              </div>

              <div className="card">
                <h3 style={{ color: 'var(--accent-primary)' }}>Depuração (Debugging)</h3>
                <p><strong>Objetivo:</strong> Encontrar a causa raiz de um defeito conhecido</p>
                <p><strong>Método:</strong> Análise de código, breakpoints, traces</p>
                <p><strong>Resultado:</strong> Eliminar a causa do defeito</p>
              </div>
            </div>

            <div className="info-box">
              <p>
                Esta separação conceitual foi revolucionária porque estabeleceu teste como uma
                <strong> disciplina profissional distinta</strong>, não apenas uma etapa de correção de bugs.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Baker, Charles L. "Debugging". ACM National Meeting, 1957
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2 id="myers"><Lightbulb size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />A Mentalidade Destrutiva de Myers</h2>
            <h3>"The Art of Software Testing" (1979)</h3>

            <p>
              Em 1979, Glenford J. Myers publicou <strong>"The Art of Software Testing"</strong>,
              um livro que revolucionou fundamentalmente como pensamos sobre teste de software.
            </p>

            <div className="quote-box">
              <p style={{ fontSize: '1.3rem' }}>
                <strong>"Testar é o processo de executar um programa com a intenção de encontrar erros."</strong>
              </p>
              <div className="quote-author">Myers, Glenford J. "The Art of Software Testing". John Wiley & Sons, 1979, p. 5</div>
            </div>

            <p>
              Myers argumentava que testar para "provar que funciona" leva inevitavelmente a testes superficiais
              e ineficazes. Em vez disso, testadores deveriam adotar uma <strong>mentalidade destrutiva</strong>
              — assumir que bugs existem e buscá-los ativamente, quase agressivamente.
            </p>

            <div className="info-box">
              <h3>Princípios Fundamentais de Myers</h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Impossibilidade de teste exaustivo:</strong> É impossível testar todas as combinações; teste deve ser estratégico</li>
                <li><strong>Presença vs. Ausência:</strong> Teste pode provar a presença de defeitos, nunca sua ausência completa</li>
                <li><strong>Paradoxo do pesticida:</strong> Mesmos testes repetidos param de encontrar novos bugs (sistema "se adapta")</li>
                <li><strong>Agrupamento de defeitos:</strong> Bugs tendem a se concentrar em módulos específicos (80/20)</li>
                <li><strong>Ausência de erros ≠ Sistema correto:</strong> Sistema sem bugs pode ainda não atender às necessidades</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Myers, Glenford J. "The Art of Software Testing". John Wiley & Sons, 1979, p. 6-16
              </p>
            </div>

            <div className="quote-box">
              <p>
                "Um teste bem-sucedido é aquele que encontra um erro ainda não descoberto. Um teste
                que não encontra defeitos não é necessariamente um bom teste — pode ser apenas um teste fraco."
              </p>
              <div className="quote-author">Myers, Glenford J. "The Art of Software Testing". John Wiley & Sons, 1979, p. 8</div>
            </div>

            <div className="quote-box">
              <p>
                O trabalho de Myers transformou teste de uma atividade de confirmação ("vamos verificar
                se está funcionando") para uma investigação científica ("vamos descobrir onde está quebrando").
              </p>
              <div className="quote-author">Análise conforme Hetzel, William. "The Complete Guide to Software Testing". QED Information Sciences, 1988, p. 12-15</div>
            </div>

            <div className="text-center mt-lg">
              <a href="/modern-future" className="btn btn-primary">
                Próxima Era: O Futuro da Qualidade
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
