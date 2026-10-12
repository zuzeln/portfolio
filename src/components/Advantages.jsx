import { Shield, Sparkles, Cpu, Smartphone, Layers, Globe } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Advantages() {
  const { advantages } = resumeData;

  const renderCandyIcon = (index) => {
    switch (index) {
      case 0:
        return (
          <div className="adv-glass-squircle glass-bg-coral">
            <Sparkles size={24} className="icon-glass-coral" />
          </div>
        );
      case 1:
        return (
          <div className="adv-glass-squircle glass-bg-blue">
            <Cpu size={24} className="icon-glass-blue" />
          </div>
        );
      case 2:
        return (
          <div className="adv-glass-squircle glass-bg-green">
            <Smartphone size={24} className="icon-glass-green" />
          </div>
        );
      case 3:
        return (
          <div className="adv-glass-squircle glass-bg-purple">
            <Layers size={24} className="icon-glass-purple" />
          </div>
        );
      case 4:
        return (
          <div className="adv-glass-squircle glass-bg-amber">
            <Globe size={24} className="icon-glass-amber" />
          </div>
        );
      default:
        return (
          <div className="adv-glass-squircle glass-bg-blue">
            <Shield size={24} className="icon-glass-blue" />
          </div>
        );
    }
  };

  return (
    <section id="advantages" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag section-tag-glass">
            <Sparkles size={14} />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="section-title">核心竞争优势与能力矩阵</h2>
          <p className="section-desc">
            拒绝死板的通用模板与花哨套话，在真实产品实战中沉淀的“极简审美 + AI提效 + 工程落地”三合一能力底盘。
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((adv, idx) => (
            <div key={adv.id} className="advantage-card">
              <div className="adv-card-header">
                {renderCandyIcon(idx)}
                <span className="adv-number">0{idx + 1}</span>
              </div>

              <h3 className="adv-title">{adv.title}</h3>
              <p className="adv-desc">{adv.desc}</p>

              <div className="adv-tags-row">
                {adv.tags.map((t, tIdx) => (
                  <span key={tIdx} className="adv-tag-glass">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
