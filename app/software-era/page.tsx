export default function SoftwareEra() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>🐛 A Era do Software</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--light-gray)', maxWidth: '800px', margin: '1rem auto 0' }}>
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
            <h2>🦋 &quot;O Primeiro Bug Real&quot;</h2>
            <h3>Grace Hopper e a Mariposa que Mudou a Linguagem</h3>

            <p>
              Em 9 de setembro de 1947, no Computation Laboratory da Universidade de Harvard, algo incomum
              aconteceu. O <strong>Harvard Mark II</strong> estava apresentando comportamento errático. A equipe
              de engenheiros, liderada pela Almirante <strong>Grace Murray Hopper</strong>, encontrou a causa:
              uma mariposa presa em um relé.
            </p>

            <p>
              Hopper e sua equipe removeram a mariposa, colaram-na no livro de registros e anotaram:
              <em>&quot;First actual case of bug being found&quot;</em>. O termo &quot;bug&quot; existia antes,
              mas este incidente o popularizou definitivamente no contexto de computação.
            </p>

            <h3>Grace Hopper: Mais que uma Mariposa</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li><strong>Invenção do Compilador (1952):</strong> Desenvolveu o A-0 System, permitindo programação em linguagem simbólica</li>
              <li><strong>COBOL:</strong> Foi instrumental na criação do COBOL (1959), priorizando legibilidade</li>
              <li><strong>Filosofia de Validação:</strong> Enfatizava que programas deveriam ser verificados metodicamente</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>🔬 A Separação Formal: Teste vs. Depuração</h2>
            <h3>Charles L. Baker e a Profissionalização (1957)</h3>

            <p>
              Em 1957, <strong>Charles L. Baker</strong> argumentou pela separação formal entre
              <strong> teste</strong> e <strong>depuração</strong> como atividades distintas.
            </p>

            <div className="card-grid" style={{ margin: '2rem 0' }}>
              <div className="card">
                <h3 style={{ color: 'var(--secondary-blue)' }}>Teste (Testing)</h3>
                <p><strong>Objetivo:</strong> Verificar se o software atende aos requisitos</p>
                <p><strong>Resultado:</strong> Descobrir se existem defeitos</p>
              </div>

              <div className="card">
                <h3 style={{ color: 'var(--secondary-blue)' }}>Depuração (Debugging)</h3>
                <p><strong>Objetivo:</strong> Encontrar a causa raiz de um defeito conhecido</p>
                <p><strong>Resultado:</strong> Eliminar a causa do defeito</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>💡 A Mentalidade Destrutiva de Myers</h2>
            <h3>&quot;The Art of Software Testing&quot; (1979)</h3>

            <p>
              Em 1979, Glenford J. Myers publicou <strong>&quot;The Art of Software Testing&quot;</strong>,
              revolucionando como pensamos sobre teste.
            </p>

            <div className="quote-box">
              <p style={{ fontSize: '1.3rem' }}>
                <strong>&quot;Testar é o processo de executar um programa com a intenção de encontrar erros.&quot;</strong>
              </p>
              <div className="quote-author">— Glenford J. Myers, 1979</div>
            </div>

            <p>
              Myers argumentava que testar para &quot;provar que funciona&quot; leva a testes superficiais.
              Em vez disso, testadores deveriam adotar uma <strong>mentalidade destrutiva</strong> — assumir
              que bugs existem e criá-los ativamente.
            </p>

            <h3>Princípios Fundamentais de Myers</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              <li><strong>Impossibilidade de teste exaustivo:</strong> É impossível testar tudo, portanto teste deve ser estratégico</li>
              <li><strong>Presença vs. Ausência:</strong> Teste pode provar presença de defeitos, nunca sua ausência</li>
              <li><strong>Paradoxo do pesticida:</strong> Mesmos testes repetidos param de encontrar novos bugs</li>
              <li><strong>Agrupamento de defeitos:</strong> Bugs tendem a se concentrar em módulos específicos</li>
            </ul>

            <div className="quote-box">
              <p>
                &quot;Um teste que não encontra defeitos não é necessariamente um bom teste.
                Pode ser apenas um teste fraco.&quot;
              </p>
              <div className="quote-author">— Glenford J. Myers</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
