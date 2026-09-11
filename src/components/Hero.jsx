import { CircleCheck, ShieldCheck, Sparkles } from 'lucide-react';
import StockSearch from './StockSearch';
import FeaturedStock from './FeaturedStock';

export default function Hero({ stock, onSelect, searchRef, onDetail }) {
  return <section className="hero container" id="home" aria-labelledby="hero-heading">
    <div className="hero-copy"><div className="hero-eyebrow"><Sparkles size={15}/><span>AI-POWERED STOCK INTELLIGENCE</span></div><h1 id="hero-heading">데이터로 읽는 시장,<br/><span>AI로 보는 다음 움직임</span></h1><p className="hero-description">주가 · 기술적 지표 · 시장 데이터를 분석하여<br className="desktop-break"/> AI가 종목의 향후 움직임과 주요 판단 근거를 제공합니다.</p><StockSearch ref={searchRef} onSelect={onSelect}/><div className="hero-trust"><span><CircleCheck size={15}/>근거가 있는 분석</span><span><ShieldCheck size={15}/>투명한 모델 성능</span></div></div>
    <div className="hero-featured"><FeaturedStock stock={stock} onDetail={onDetail}/><p className="featured-caption">실시간 시세 및 실제 AI 예측이 아닌 예시 데이터입니다.</p></div>
  </section>;
}
