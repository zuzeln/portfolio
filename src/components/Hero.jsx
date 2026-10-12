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
          <span>AI 原生产品建造者 · iOS 独立开发</span>
        </div>

        <h1 className="hero-title">
          <span className="text-dim">用 AI 工具独立驱动全栈开发</span>
          <br />
          <span className="text-liquid-glass">从场景洞察到 iOS 原生真机交付</span>
        </h1>

        <p className="hero-subtitle">
          我是 <span className="highlight-text">{profile.name} ({profile.enName})</span>，计算机工学背景的 <span className="highlight-tag">AI 原生建造者</span>。
          熟练运用前沿 AI 工具链独立写代码、调逻辑并交付 iOS 原生应用；坚持极简做减法设计哲学，把想法真正做成能跑在真机上的好产品。
        </p>

        <div className="hero-actions">
          <button onClick={() => scrollTo('projects')} className="btn-primary-lg">
            <span>浏览独立开发作品</span>
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
