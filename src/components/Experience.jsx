import { Briefcase, GraduationCap, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  const { profile, experiences } = resumeData;

  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag candy-tag-blue">
            <Briefcase size={14} />
            <span>BACKGROUND & TRACK RECORD</span>
          </div>
          <h2 className="section-title">个人经历与实战底盘</h2>
          <p className="section-desc">
            计算机工学背景结合全流程产品实战，跑通需求澄清、高保真原型打样、接口联调与真机交付全链条。
          </p>
        </div>

        <div className="experience-layout">
          {/* Left Column: Persona & Contact Card with Real Portrait */}
          <div className="profile-card">
            <div className="profile-card-header">
              <div className="avatar-frame">
                <img
                  src={`${import.meta.env.BASE_URL}ethan_avatar.jpg`}
                  alt="Ethan Zou"
                  className="avatar-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="avatar-fallback" style={{ display: 'none' }}>
                  <span>EZ</span>
                </div>
                <div className="status-dot-online" title="Ready for AI Product Opportunities" />
              </div>
              <div>
                <h3 className="profile-name">
                  {profile.name} <span className="profile-en">/ {profile.enName}</span>
                </h3>
                <p className="profile-role-tag">{profile.title}</p>
              </div>
            </div>

            <p className="profile-bio-text">{profile.bio}</p>

            <div className="profile-info-list">
              <div className="info-item">
                <div className="info-icon-badge glass-badge-orange">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="info-sublabel">联系电话 / 微信</span>
                  <span className="info-mainval">{profile.phone}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-badge glass-badge-purple">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="info-sublabel">电子邮箱</span>
                  <span className="info-mainval">{profile.email}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-badge glass-badge-blue">
                  <GraduationCap size={15} />
                </div>
                <div>
                  <span className="info-sublabel">教育背景</span>
                  <span className="info-mainval">{profile.education.school} • {profile.education.degree}</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-badge glass-badge-green">
                  <MapPin size={15} />
                </div>
                <div>
                  <span className="info-sublabel">期望坐标 / 状态</span>
                  <span className="info-mainval">深圳 • 随时到岗 / 开放全职</span>
                </div>
              </div>
            </div>

            <div className="profile-card-footer">
              <div className="profile-status-badge">
                <span className="status-ping-dot" />
                <span>随时沟通 • 期待与团队共同打造高品质 AI 产品</span>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline without Thesis */}
          <div className="timeline-container">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-header">
                  <div>
                    <h4 className="company-name">{exp.company}</h4>
                    <span className="job-role-pill">{exp.role}</span>
                  </div>
                  <span className="time-badge">{exp.period}</span>
                </div>

                <ul className="duties-list">
                  {exp.duties.map((duty, dIdx) => (
                    <li key={dIdx} className="duty-item">
                      <CheckCircle2 size={16} className="duty-check-icon" />
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
