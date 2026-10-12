import { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, ArrowUp, Send } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Contact() {
  const { profile } = resumeData;
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-fullscreen-section">
      <div className="contact-glow-layer" />
      <div className="container contact-container">
        <div className="contact-top-tag">
          <Send size={14} />
          <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
        </div>

        <h2 className="contact-main-title">
          <span className="text-dim">寻找一位懂大模型、懂减法审美、</span><br />
          <span className="text-liquid-glass">能独立交付原型的 AI 产品经理？</span>
        </h2>

        <p className="contact-subtitle">
          现已开放全职 / 顾问沟通。期待加入具备创新精神的团队，共同打磨用户真正每天愿意打开的高品质产品。
        </p>

        {/* Contact Cards Grid with Liquid Glass badges */}
        <div className="contact-cards-grid">
          {/* Phone Card */}
          <div className="contact-card">
            <div className="contact-card-icon glass-badge-orange">
              <Phone size={20} />
            </div>
            <div className="contact-card-body">
              <span className="contact-label">直接电话联系 / 微信同号</span>
              <span className="contact-value">{profile.phone}</span>
            </div>
            <button
              onClick={() => copyToClipboard('17658596889', 'phone')}
              className="copy-btn"
              title="复制号码"
            >
              {copiedType === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copiedType === 'phone' ? '已复制' : '复制'}</span>
            </button>
          </div>

          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-card-icon glass-badge-purple">
              <Mail size={20} />
            </div>
            <div className="contact-card-body">
              <span className="contact-label">电子邮箱</span>
              <span className="contact-value">{profile.email}</span>
            </div>
            <button
              onClick={() => copyToClipboard(profile.email, 'email')}
              className="copy-btn"
              title="复制邮箱"
            >
              {copiedType === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copiedType === 'email' ? '已复制' : '复制'}</span>
            </button>
          </div>

          {/* WeChat Card */}
          <div className="contact-card">
            <div className="contact-card-icon glass-badge-green">
              <MessageSquare size={20} />
            </div>
            <div className="contact-card-body">
              <span className="contact-label">微信联系</span>
              <span className="contact-value">17658596889</span>
            </div>
            <button
              onClick={() => copyToClipboard('17658596889', 'wechat')}
              className="copy-btn"
              title="复制微信号"
            >
              {copiedType === 'wechat' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copiedType === 'wechat' ? '已复制' : '复制'}</span>
            </button>
          </div>
        </div>

        {/* Action bar */}
        <div className="contact-actions-bar">
          <a
            href="mailto:757458811@qq.com"
            className="btn-primary-lg"
          >
            <Mail size={18} />
            <span>发送邮件建联</span>
          </a>

          <button
            onClick={() => copyToClipboard('17658596889', 'phone-cta')}
            className="btn-secondary-lg"
          >
            <Phone size={18} />
            <span>拨打电话 / 微信交流</span>
          </button>
        </div>

        {/* Footer */}
        <footer className="footer-bar">
          <div className="footer-left">
            <span>© 2026 {profile.name} (Ethan Zou). Built with React + Vite.</span>
            <span className="footer-sep">•</span>
            <span className="footer-status">随时到岗 / 开放全职</span>
          </div>

          <button onClick={scrollToTop} className="back-to-top">
            <span>回到顶部</span>
            <ArrowUp size={16} />
          </button>
        </footer>
      </div>
    </section>
  );
}
