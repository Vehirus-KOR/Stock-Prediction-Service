import { Activity, TrendingUp, ChartNoAxesColumnIncreasing, Globe2, Waves, ArrowLeftRight, CircleCheck, TriangleAlert, Sparkles } from 'lucide-react';
import { SectionHeading } from './Shared';

const icons = { activity: Activity, trend: TrendingUp, volume: ChartNoAxesColumnIncreasing, market: Globe2, volatility: Waves, currency: ArrowLeftRight };

export function SignalList({ items, risk = false }) {
  return <ul className={`signal-list ${risk ? 'risks' : ''}`}>{items.map((item) => {const Icon = icons[item.icon]; return <li key={item.title}><span className="signal-icon"><Icon size={18}/></span><div className="signal-content"><div><h4>{item.title}</h4><span className="signal-value">{item.value}</span></div><p>{item.detail}</p></div></li>;})}</ul>;
}

export default function SignalAnalysis({ stock }) {
  return <section className="section signals-section container" id="signals" aria-labelledby="signals-heading"><SectionHeading eyebrow="BEHIND THE PREDICTION" title={stock.signal === 'NEUTRAL' ? 'AI는 왜 신중하게 보고 있을까요?' : 'AI는 왜 상승 가능성을 높게 봤을까요?'} description="복잡한 데이터 속에서, 판단에 필요한 핵심 근거만." id="signals-heading" action={<span className="selected-stock-label"><Sparkles size={14}/>{stock.name} 분석</span>}/><div className="signals-grid"><article className="signal-panel positive-panel"><div className="signal-panel-header"><h3><CircleCheck size={18}/>긍정 신호<span>Positive signals</span></h3><span className="signal-count">{stock.positives.length}</span></div><SignalList items={stock.positives}/></article><article className="signal-panel risk-panel"><div className="signal-panel-header"><h3><TriangleAlert size={18}/>위험 신호<span>Risk signals</span></h3><span className="signal-count">{stock.risks.length}</span></div><SignalList items={stock.risks} risk/><div className="risk-note"><span>함께 살펴보세요</span><p>긍정 신호가 있어도 가격은 하락할 수 있습니다.<br/>상승 가능성과 위험 요인을 함께 확인하세요.</p></div></article></div></section>;
}
