import { ArrowDown, Sparkles, Terminal, Zap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const { profile } = resumeData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow-layer" />
      <div className="container hero-container">
        <div className="hero-badge-glass">
          <Sparkles size={14} className="icon-pulse text-blue" />
          <span>AI Product Management & Agent Experience</span>
        </div>

        <h1 className="hero-title">
          <span className="text-dim">让复杂 AI 能力</span>
          <br />
          <span className="text-liquid-glass">随口一说，即成现实</span>
        </h1>

        <p className="hero-subtitle">
          我是 <span className="highlight-text">{profile.name} ({profile.enName})</span>，一名专注于大模型与智能体落地的 <span className="highlight-tag">AI 产品经理</span>。
          秉持清晰克制的做减法哲学，以深刻的工程理解与敏捷 AI 工具链，驱动产品从真实场景痛点走向高品质真机交付。
        </p>

        <div className="hero-actions">
          <button onClick={() => scrollTo('projects')} className="btn-primary-lg">
            <span>浏览精选作品</span>
            <Terminal size={18} />
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-secondary-lg">
            <span>获取联系方式</span>
            <Zap size={18} />
          </button>
        </div>


        <div className="scroll-indicator" onClick={() => scrollTo('experience')}>
          <span>EXPLORE EXPERIENCES</span>
          <ArrowDown size={16} className="bounce" />
        </div>
      </div>
    </section>
  );
}
