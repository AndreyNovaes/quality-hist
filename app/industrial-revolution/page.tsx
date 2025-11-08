import { Factory, Search, TrendingUp, BarChart3, ArrowRight } from 'lucide-react'

export default function IndustrialRevolution() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>⚙️ A Revolução Industrial</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '1rem auto 0' }}>
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
            <h2 id="inspecao"><Search size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />O Nascimento da Inspeção</h2>
            <h3>Controle de Qualidade por Departamento Separado</h3>

            <p>
              A resposta inicial ao problema foi direta: se os trabalhadores fazem peças mas não garantem
              sua qualidade, então <strong>crie um departamento separado cuja única função seja inspecionar</strong>.
            </p>

            <div className="info-box">
              <h3>Limitações da Inspeção em Massa</h3>
              <ul style={{ marginBottom: 0 }}>
                <li><strong>Ineficiência econômica:</strong> Desperdício de produtos defeituosos já fabricados</li>
                <li><strong>Impossibilidade de inspeção total:</strong> Testes destrutivos, custos proibitivos</li>
                <li><strong>Antagonismo organizacional:</strong> "Nós fazemos, vocês criticam"</li>
                <li><strong>Abordagem reativa:</strong> Detecta problemas, mas não os previne</li>
              </ul>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Juran, Joseph M. "Quality Control Handbook". McGraw-Hill, 1951, p. 2-8
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2 id="taylor"><TrendingUp size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />O Gerenciamento Científico de Taylor</h2>
            <h3>Otimização e Padronização Sistemática</h3>

            <p>
              No início do século XX, Frederick Winslow Taylor revolucionou a manufatura com seus princípios
              de <strong>Gerenciamento Científico</strong>. Taylor aplicou metodologia científica rigorosa
              para otimizar cada aspecto do trabalho industrial, com foco obsessivo em eficiência.
            </p>

            <div className="info-box">
              <h3>Os Quatro Princípios de Taylor</h3>
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Ciência, não empirismo:</strong> Substituir métodos tradicionais por análise científica</li>
                <li><strong>Seleção e treinamento:</strong> Cientificamente selecionar e treinar trabalhadores</li>
                <li><strong>Cooperação:</strong> Garantir que trabalho seja feito segundo princípios científicos</li>
                <li><strong>Divisão de responsabilidade:</strong> Trabalho dividido entre gestão e trabalhadores</li>
              </ol>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Taylor, Frederick Winslow. "The Principles of Scientific Management". Harper & Brothers, 1911
              </p>
            </div>

            <div className="quote-box">
              <p>
                O Taylorismo trouxe padronização e medição essenciais para qualidade moderna, mas seu
                foco extremo em eficiência muitas vezes sacrificava qualidade pela quantidade.
              </p>
              <div className="quote-author">Análise conforme Kanigel, Robert. "The One Best Way: Frederick Winslow Taylor and the Enigma of Efficiency". Viking, 1997</div>
            </div>
          </div>

          <div className="content-section">
            <h2 id="shewhart"><BarChart3 size={32} style={{ display: 'inline-block', marginRight: '1rem', verticalAlign: 'middle', color: 'var(--accent-gold)' }} />A Revolução de Walter Shewhart</h2>
            <h3>Do Controle de Produto ao Controle de Processo</h3>

            <div className="info-box">
              <h3>A Insight Revolucionária de Shewhart</h3>
              <p style={{ fontSize: '1.15rem' }}>
                <strong>"Em vez de inspecionar produtos acabados para separar bons de ruins, monitore
                o processo de produção em tempo real para prevenir a criação de defeitos."</strong>
              </p>
            </div>

            <p>
              Em <strong>16 de maio de 1924</strong>, Walter A. Shewhart, trabalhando na Bell Telephone Laboratories,
              criou um memorando de uma página que mudaria a história da qualidade. Nele, ele esboçou o primeiro
              <strong> gráfico de controle estatístico</strong>.
            </p>

            <p>
              Shewhart reconheceu uma verdade fundamental: <strong>variação é inerente a todos os
              processos</strong>. A questão crítica não é eliminar variação (impossível), mas distinguir
              entre <em>variação de causa comum</em> (natural, inerente ao processo) e <em>variação de
              causa especial</em> (anormal, indicando problema).
            </p>

            <div className="quote-box">
              <p>
                "O objetivo não é zero variação — isso é impossível. O objetivo é um processo estável
                e previsível, onde a única variação é aleatória."
              </p>
              <div className="quote-author">Shewhart, Walter A. "Economic Control of Quality of Manufactured Product". D. Van Nostrand Company, 1931, p. 6</div>
            </div>

            <div className="info-box">
              <h3>O Ciclo PDSA (Plan-Do-Study-Act)</h3>
              <p>
                Shewhart também desenvolveu o <strong>ciclo PDSA</strong>, base da melhoria contínua moderna:
              </p>
              <ol style={{ marginBottom: 0 }}>
                <li><strong>Plan:</strong> Desenvolver hipótese e planejar experimento</li>
                <li><strong>Do:</strong> Executar o plano em pequena escala</li>
                <li><strong>Study:</strong> Analisar os resultados</li>
                <li><strong>Act:</strong> Adotar, adaptar ou abandonar a mudança</li>
              </ol>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: 0 }}>
                Fonte: Shewhart, Walter A. "Statistical Method from the Viewpoint of Quality Control". The Graduate School, Department of Agriculture, 1939
              </p>
            </div>

            <div className="quote-box">
              <p>
                O trabalho de Shewhart transformou qualidade de uma arte subjetiva baseada em inspeção
                para uma ciência objetiva baseada em estatística e controle de processos.
              </p>
              <div className="quote-author">Análise conforme Deming, W. Edwards. "Out of the Crisis". MIT Press, 1986, p. 88-96</div>
            </div>

            <div className="text-center mt-lg">
              <a href="/software-era" className="btn btn-primary">
                Próxima Era: A Era do Software
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
