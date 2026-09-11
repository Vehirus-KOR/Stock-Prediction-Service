import { useId, useState } from 'react';
import { Cpu, CalendarDays, FlaskConical, ArrowUpRight } from 'lucide-react';
import { model } from '../data/mockData';
import { SectionHeading } from './Shared';

export function BacktestChart() {
  const id = useId().replace(/:/g, '');
  const [hovered, setHovered] = useState(null);
  const left = 10, right = 548, top = 18, bottom = 177;
  const x = (i) => left + i / (model.backtest.length - 1) * (right - left);
  const y = (value) => bottom - value / 20 * (bottom - top);
  const points = (key) => model.backtest.map((p, i) => `${x(i)},${y(p[key])}`).join(' ');
  const focus = hovered === null ? null : model.backtest[hovered];
  function inspect(event) { const r=event.currentTarget.getBoundingClientRect(); const pos=(event.clientX-r.left)/r.width*600; setHovered(Math.min(model.backtest.length-1, Math.max(0, Math.round((pos-left)/(right-left)*(model.backtest.length-1))))); }
  return <div className="backtest-chart" onPointerLeave={() => setHovered(null)}><div className="chart-readout" aria-live="polite">{focus ? <><span>{focus.date}</span><span className="positive">AI +{focus.strategy.toFixed(1)}%</span><span>KOSPI +{focus.benchmark.toFixed(1)}%</span></> : <span>누적 수익률 (%) · 예시</span>}</div><svg viewBox="0 0 600 213" role="img" aria-label="예시 누적 수익률: AI 전략 0%에서 18.4%, KOSPI 0%에서 11.2%로 변화. 실제 백테스트 결과가 아닙니다." onPointerMove={inspect}>
    <defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3ce6ac" stopOpacity=".13"/><stop offset="100%" stopColor="#3ce6ac" stopOpacity="0"/></linearGradient></defs>
    {[0, 5, 10, 15, 20].map((v) => <g key={v}><line x1={left} x2={right} y1={y(v)} y2={y(v)} stroke="#252B36" strokeDasharray={v === 0 ? '0' : '3 5'}/><text x="561" y={y(v)+4}>{v}%</text></g>)}
    <polygon points={`${left},${bottom} ${points('strategy')} ${right},${bottom}`} fill={`url(#${id})`}/>
    <polyline points={points('benchmark')} fill="none" stroke="#8392a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points={points('strategy')} fill="none" stroke="#3ce6ac" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx={right} cy={y(model.strategyReturn)} r="4" fill="#3ce6ac" stroke="#151a23" strokeWidth="3"/>
    {[0, 2, 4, 6, 8, 10].map((i) => <text key={i} x={x(i)} y="205" textAnchor={i===0?'start':'middle'}>{Number(model.backtest[i].date.split('.')[0])}월</text>)}
    {focus && <g><line x1={x(hovered)} x2={x(hovered)} y1={top} y2={bottom} stroke="#697889" strokeDasharray="3 4"/><circle cx={x(hovered)} cy={y(focus.strategy)} r="4" fill="#3ce6ac"/><circle cx={x(hovered)} cy={y(focus.benchmark)} r="4" fill="#8392a8"/></g>}
  </svg></div>;
}

export default function ModelPerformance() {
  return <section className="section model-section container" id="model" aria-labelledby="model-heading"><SectionHeading eyebrow="MODEL TRANSPARENCY" title="숫자만 보여주지 않습니다." description="예측 결과뿐 아니라 모델의 성능과 검증 결과도 함께 제공합니다." id="model-heading" action={<span className="quiet-label"><FlaskConical size={15}/> 샘플 검증 결과</span>}/><div className="model-grid"><article className="model-card"><div className="model-name"><div className="model-icon"><Cpu size={24}/></div><div><span>ANALYSIS MODEL</span><h3>{model.name}<span>{model.version}</span></h3></div></div><p className="model-description">다양한 시장 지표로 가격 움직임의<br className="desktop-break"/> 패턴을 학습하는 머신러닝 모델</p><div className="model-metrics"><div><span>Accuracy</span><strong>{model.accuracy}<small>%</small></strong></div><div><span>F1 Score</span><strong>{model.f1.toFixed(2)}</strong></div><div><span>AUC</span><strong>{model.auc.toFixed(2)}</strong></div></div><div className="training-period"><span><CalendarDays size={14}/>학습 기간</span><strong>{model.trainingPeriod}</strong></div><p className="model-footnote">성능 수치는 UI 예시이며 실제 학습 결과가 아닙니다.</p></article><article className="backtest-card"><div className="backtest-heading"><h3>전략 성과 비교<span>Backtest</span></h3><span className="backtest-period">{model.backtestPeriod}</span></div><div className="backtest-legend"><div><span><i className="legend-line strategy"/>AI Strategy</span><strong className="positive">+{model.strategyReturn}%<ArrowUpRight size={16}/></strong></div><div><span><i className="legend-line benchmark"/>KOSPI Benchmark</span><strong>+{model.benchmarkReturn}%</strong></div></div><BacktestChart/><p className="chart-note">가상의 수익률 곡선입니다. 실제 운용 성과나 미래 수익을 의미하지 않습니다.</p></article></div></section>;
}
