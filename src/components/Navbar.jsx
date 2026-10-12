import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container nav-content">
        <div className="logo" onClick={() => scrollTo('hero')}>
          <span className="logo-rainbow-ai">AI</span>
          <span className="logo-text">ETHAN.ZOU</span>
        </div>

        <nav className="nav-links">
          <button onClick={() => scrollTo('hero')} className="nav-link">首页</button>
          <button onClick={() => scrollTo('experience')} className="nav-link">经历与实战</button>
          <button onClick={() => scrollTo('projects')} className="nav-link">精选项目</button>
          <button onClick={() => scrollTo('advantages')} className="nav-link">核心优势</button>
          <button onClick={() => scrollTo('contact')} className="nav-link">联系方式</button>
        </nav>

        <div className="nav-actions">
          <button onClick={() => scrollTo('contact')} className="btn-primary-sm">
            <span>发起沟通</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </header>
  );
}
