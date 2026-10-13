import { useState, useRef } from 'react';
import { Layers, Store, GraduationCap, ChevronLeft, ChevronRight, Eye, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  const { projects } = resumeData;
  const [expandedProject, setExpandedProject] = useState(null); // project id or null
  const [activeSlide, setActiveSlide] = useState({}); // { [projId]: index }
  const sliderRefs = useRef({});

  const toggleExpand = (projId) => {
    setExpandedProject((prev) => (prev === projId ? null : projId));
  };

  const handleSlide = (projId, direction, total) => {
    const current = activeSlide[projId] || 0;
    let next = direction === 'next' ? current + 1 : current - 1;
    if (next < 0) next = total - 1;
    if (next >= total) next = 0;
    setActiveSlide((prev) => ({ ...prev, [projId]: next }));

    const slider = sliderRefs.current[projId];
    if (slider) {
      const targetChild = slider.children[next];
      if (targetChild) {
        targetChild.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const renderProjectIcon = (proj) => {
    if (proj.iconType === 'image') {
      return (
        <div className="app-icon-squircle">
          <img src={proj.iconSrc} alt={proj.title} className="app-icon-img" />
        </div>
      );
    }
    if (proj.candySymbol === 'shop') {
      return (
        <div className="app-icon-squircle app-icon-clean-green">
          <Store size={26} className="text-emerald-400" />
        </div>
      );
    }
    return (
      <div className="app-icon-squircle app-icon-clean-blue">
        <GraduationCap size={26} className="text-sky-400" />
      </div>
    );
  };

  return (
    <section id="projects" className="section-wrapper bg-subtle">
      <div className="container">
        <div className="section-header">
          <div className="section-tag candy-tag-blue">
            <Layers size={14} />
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="section-title">精选重点主导项目</h2>
          <p className="section-desc">
            从 0 到 1 构思原型、提示词规则约束、大模型流式解析与端侧轻量化交互，注重真机可用性与真实用户价值。
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj) => {
            const isExpanded = expandedProject === proj.id;
            const hasScreenshots = proj.screenshots && proj.screenshots.length > 0;
            const currentIdx = activeSlide[proj.id] || 0;

            return (
              <div key={proj.id} className="project-card">
                <div className="project-card-inner">
                  <div className="project-header">
                    <div className="project-title-area">
                      {renderProjectIcon(proj)}
                      <div className="project-meta-box">
                        <div className="project-category-row">
                          <span className="project-cat-pill" style={{ color: proj.badgeColor }}>
                            {proj.category}
                          </span>
                          <span className="project-status-pill">{proj.status}</span>
                        </div>
                        <h3 className="project-name">{proj.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="project-tagline">{proj.subTitle}</p>
                  <p className="project-desc">{proj.description}</p>

                  <div className="project-highlights">
                    <div className="hl-title">核心设计与落地亮点：</div>
                    {proj.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="hl-item">
                        <div className="hl-bullet" style={{ background: proj.badgeColor }} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="project-footer">
                    <div className="project-tags">
                      {proj.tags.map((t, tIdx) => (
                        <span key={tIdx} className="tag-pill">{t}</span>
                      ))}
                    </div>

                    <div className="project-action-group">
                      {proj.demoUrl && (
                        <a
                          href={proj.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-demo-link"
                        >
                          <ExternalLink size={14} />
                          <span>体验链接</span>
                        </a>
                      )}

                      {hasScreenshots && (
                        <button
                          onClick={() => toggleExpand(proj.id)}
                          className={`btn-screenshot-toggle ${isExpanded ? 'active' : ''}`}
                        >
                          <ImageIcon size={15} />
                          <span>{isExpanded ? '折叠真机截图' : `展开真机截图 (${proj.screenshots.length}张)`}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Collapsible / Expandable Screenshot Carousel */}
                {hasScreenshots ? (
                  <div className={`project-carousel-wrapper ${isExpanded ? 'is-open' : 'is-collapsed'}`}>
                    {isExpanded && (
                      <div className="carousel-container">
                        <div className="carousel-top-bar">
                          <span className="carousel-title">
                            {proj.title} 真机实测界面（可左右滑动查看）
                          </span>
                          <div className="carousel-controls">
                            <span className="carousel-page-indicator">
                              {currentIdx + 1} / {proj.screenshots.length}
                            </span>
                            <button
                              onClick={() => handleSlide(proj.id, 'prev', proj.screenshots.length)}
                              className="carousel-nav-btn"
                              aria-label="Previous"
                            >
                              <ChevronLeft size={16} />
                            </button>
                            <button
                              onClick={() => handleSlide(proj.id, 'next', proj.screenshots.length)}
                              className="carousel-nav-btn"
                              aria-label="Next"
                            >
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>

                        <div
                          className="carousel-track"
                          ref={(el) => (sliderRefs.current[proj.id] = el)}
                        >
                          {proj.screenshots.map((sUrl, sIdx) => (
                            <div key={sIdx} className="carousel-slide-item">
                              <img
                                src={sUrl}
                                alt={`${proj.title} 截图 ${sIdx + 1}`}
                                className="carousel-device-img"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Placeholder wireframe for other deliverables */
                  <div className="project-simple-preview">
                    <div className="preview-status-line">
                      <span className="preview-dot" />
                      <span>已完成需求说明书 (PRD) 撰写、API联调与 TestFlight 分发验证</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
