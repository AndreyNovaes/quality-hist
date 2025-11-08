import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Navegação</h3>
            <ul className="footer-links">
              <li><Link href="/">Página Inicial</Link></li>
              <li><Link href="/ancient-roots">Raízes Antigas</Link></li>
              <li><Link href="/industrial-revolution">Revolução Industrial</Link></li>
              <li><Link href="/software-era">Era do Software</Link></li>
              <li><Link href="/modern-future">O Futuro</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Recursos</h3>
            <ul className="footer-links">
              <li><Link href="/timeline">Linha do Tempo Completa</Link></li>
              <li><Link href="/pioneers">Pioneiros da Qualidade</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Sobre Este Projeto</h3>
            <p style={{ color: 'var(--light-gray)', fontSize: '0.95rem' }}>
              Um site educacional dedicado a preservar e compartilhar a rica história
              dos testes e garantia de qualidade, desde a antiguidade até a era moderna.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 A Jornada da Qualidade. Criado para fins educacionais.</p>
        </div>
      </div>
    </footer>
  )
}
