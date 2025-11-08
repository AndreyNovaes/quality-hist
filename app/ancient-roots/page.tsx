import { Scroll, Pyramid, Flag, Award, BookOpen, ArrowRight } from 'lucide-react'

export default function AncientRoots() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>🏛️ As Raízes Antigas</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '1rem auto 0' }}>
            O Alicerce da Responsabilidade e dos Padrões
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-section fade-in-up">
            <h2>A Qualidade Como Necessidade Universal</h2>

            <p>
              Muito antes do primeiro computador, antes mesmo da Revolução Industrial, a humanidade já reconhecia
              uma verdade fundamental: <strong>a qualidade não é opcional</strong>. Desde que os primeiros artesãos
              começaram a criar ferramentas, construir abrigos e comercializar produtos, a necessidade de garantir
              que o trabalho fosse bem feito tornou-se inseparável do próprio ato de criar.
            </p>

            <p>
              A história da qualidade não começa em uma fábrica do século XX ou em um laboratório de software.
              Ela começa nas antigas civilizações, onde reis e legisladores perceberam que a confiança no comércio,
              a segurança das estruturas e a reputação dos artesãos dependiam de um conceito emergente:
              <em> responsabilidade pela excelência</em>.
            </p>

            <div className="quote-box">
              <p>
                A busca pela qualidade é tão antiga quanto a própria civilização. Onde há criação,
                há a necessidade de validação.
              </p>
              <div className="quote-author">Princípio fundamental da garantia de qualidade</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="hamurabi"><Scroll size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />O Código de Hamurabi (c. 1750 a.C.)</h2>
            <h3>A Primeira &quot;Garantia de Qualidade&quot; Documentada</h3>

            <p>
              Na antiga Babilônia, por volta de 1750 antes de Cristo, o rei Hamurabi mandou esculpir em uma estela
              de diorito negro um dos mais antigos códigos de leis da humanidade. Entre suas 282 leis, algumas se
              destacam como os primeiros registros formais de responsabilidade pela qualidade na história.
            </p>

            <div className="info-box">
              <h3>A Lei do Construtor</h3>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: 0 }}>
                <strong>Lei 229:</strong> &quot;Se um construtor constrói uma casa para alguém e não a constrói adequadamente,
                e a casa que ele construiu cai e mata o dono, então esse construtor será morto.&quot;
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Código de Hamurabi, c. 1750 a.C., Estela de Diorito, Museu do Louvre, Paris
              </p>
            </div>

            <p>
              Estas leis são brutais pelos padrões modernos, mas representam um marco filosófico crucial:
              <strong> a responsabilidade final pela qualidade do trabalho</strong>. O construtor não poderia
              simplesmente entregar uma casa e ir embora. Ele carregava consigo a responsabilidade vitalícia
              pelo que criou.
            </p>

            <h3>O Primeiro "Teste de Aceitação"</h3>

            <p>
              De certa forma, a permanência estrutural da casa era o <em>teste de aceitação definitivo</em>.
              Se a casa permanecesse de pé e segura, o construtor havia passado no teste. Se falhasse, as
              consequências eram irreversíveis.
            </p>

            <div className="quote-box">
              <p>
                O Código de Hamurabi não apenas punia defeitos — ele institucionalizou a ideia de que
                o criador é eternamente responsável por sua criação.
              </p>
              <div className="quote-author">Análise moderna do Código, conforme Bottéro, Jean. &quot;The Code of Hammurabi&quot;. Mesopotamia: Writing, Reasoning, and the Gods. University of Chicago Press, 1992</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="egito"><Pyramid size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />Precisão no Antigo Egito</h2>
            <h3>Engenharia de Qualidade nas Pirâmides</h3>

            <p>
              Enquanto a Babilônia institucionalizava a responsabilidade através da lei, o Antigo Egito estava
              realizando uma das maiores façanhas de engenharia da história humana: a construção das pirâmides
              de Gizé. E esta conquista monumental dependia fundamentalmente de <strong>precisão, medição e
              controle de qualidade</strong>.
            </p>

            <p>
              A Grande Pirâmide de Quéops, construída por volta de 2560 a.C., é uma demonstração
              impressionante de controle de qualidade antigo: precisão angular excepcional, uniformidade dimensional
              e consistência de materiais.
            </p>

            <div className="info-box">
              <h3>Sistema de Medição Padronizado</h3>
              <p>
                Os egípcios desenvolveram o <strong>côvado real</strong> (aproximadamente 52,4 cm) como unidade
                padrão de medida. Varas de medição feitas de granito negro foram encontradas, demonstrando a
                necessidade de instrumentos calibrados e consistentes.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Lehner, Mark. &quot;The Complete Pyramids&quot;. Thames & Hudson, 1997, p. 108-112
              </p>
            </div>

            <div className="quote-box">
              <p>
                A pirâmide não perdoa imprecisão. Cada erro se multiplica e se torna visível na estrutura final.
                Os egípcios não tinham escolha senão dominar o controle de qualidade.
              </p>
              <div className="quote-author">Petrie, W.M. Flinders. &quot;The Pyramids and Temples of Gizeh&quot;. Field & Tuer, 1883</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="china"><Flag size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />Padronização na China Imperial</h2>
            <h3>Marcação de Produtos e Rastreabilidade</h3>

            <p>
              Durante o reinado do Imperador Qin Shi Huang (259-210 a.C.), o primeiro imperador da China unificada,
              foi implementado um sistema revolucionário de garantia de qualidade que antecipou conceitos modernos
              de <strong>rastreabilidade e responsabilização</strong>.
            </p>

            <p>
              Qin Shi Huang instituiu uma política inovadora: <strong>todos os produtos manufaturados deveriam
              ser marcados com o nome do fabricante</strong>. Este sistema permitia identificar rapidamente
              a origem de produtos defeituosos e responsabilizar os envolvidos.
            </p>

            <div className="info-box">
              <h3>Rastreabilidade Milenar</h3>
              <p>
                Armas, ferramentas e telhas foram encontradas com inscrições incluindo: nome do artesão,
                supervisor, data de produção e local de fabricação.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Portal, Jane. &quot;The First Emperor: China&#39;s Terracotta Army&quot;. British Museum Press, 2007
              </p>
            </div>

            <div className="quote-box">
              <p>
                Quando seu nome está permanentemente gravado em seu trabalho, a qualidade deixa de ser
                uma escolha e se torna uma necessidade pessoal.
              </p>
              <div className="quote-author">Análise conforme Li, Xueqin. &quot;Eastern Zhou and Qin Civilizations&quot;. Yale University Press, 1985</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="guildas"><Award size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />As Guildas Medievais e a &quot;Obra-Prima&quot;</h2>
            <h3>Certificação de Qualidade Através da Maestria</h3>

            <p>
              Na Europa Medieval (séculos XII a XVI), as <strong>guildas de artesãos</strong> desenvolveram
              um dos sistemas de garantia de qualidade mais sofisticados da história pré-industrial.
            </p>

            <p>
              Para ascender de jornaleiro a mestre, o artesão precisava criar uma <strong>obra-prima
              (masterpiece)</strong> — uma peça de trabalho excepcional que demonstrasse domínio completo
              de todas as técnicas, materiais e padrões de qualidade do ofício.
            </p>

            <div className="info-box">
              <h3>Os Três Níveis de Maestria</h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Aprendiz:</strong> 7 anos de treinamento sob supervisão</li>
                <li><strong>Jornaleiro:</strong> Artesão competente, ainda não certificado</li>
                <li><strong>Mestre:</strong> Certificado após aprovar a obra-prima</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Epstein, Steven A. &quot;Wage Labor and Guilds in Medieval Europe&quot;. University of North Carolina Press, 1991
              </p>
            </div>

            <div className="quote-box">
              <p>
                A obra-prima não era apenas um teste de habilidade técnica. Era a demonstração de que
                o artesão internalizara os valores de qualidade da guilda e poderia ser confiado para
                manter esses padrões ao longo de sua carreira.
              </p>
              <div className="quote-author">Richardson, Gary. &quot;Brand Names Before the Industrial Revolution&quot;. NBER Working Paper No. 13930, 2008</div>
            </div>
          </div>

          <div className="content-section">
            <h2>🌍 Lições das Raízes Antigas</h2>

            <div className="card-grid" style={{ margin: '2rem 0' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Responsabilidade</h3>
                <p>De Hamurabi às guildas, quem cria é responsável pela qualidade do que criou.</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Padrões</h3>
                <p>Especificações claras são essenciais para avaliar qualidade de forma objetiva.</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Rastreabilidade</h3>
                <p>Identificar a origem de defeitos permite correção e melhoria contínua.</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Maestria</h3>
                <p>Qualidade requer conhecimento profundo, não apenas seguir procedimentos.</p>
              </div>
            </div>

            <div className="quote-box">
              <p>
                Toda a sofisticação moderna de testes automatizados, CI/CD e IA de qualidade repousa
                sobre fundações estabelecidas há milênios: responsabilidade, padrões, verificação e
                orgulho no trabalho bem feito.
              </p>
              <div className="quote-author">Reflexão sobre continuidade histórica</div>
            </div>

            <div className="text-center mt-lg">
              <a href="/industrial-revolution" className="btn btn-primary">
                Próxima Era: A Revolução Industrial
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
