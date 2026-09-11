import { Database, Cpu, ChartNoAxesCombined, ArrowRight } from 'lucide-react';
import { SectionHeading } from './Shared';

const steps = [
  { n: '01', title: 'MARKET DATA', description: '주가 · 거래량 · 시장 지표 수집', icon: Database },
  { n: '02', title: 'AI ANALYSIS', description: '기술적 · 재무 · 시장 데이터를 머신러닝 모델이 분석', icon: Cpu },
  { n: '03', title: 'PREDICTION', description: '상승 가능성과 주요 판단 근거 제공', icon: ChartNoAxesCombined },
];

export default function HowItWorks() {
  return <section className="how-section" id="about" aria-labelledby="how-heading"><div className="container"><SectionHeading eyebrow="HOW IT WORKS" title="데이터가 인사이트가 되기까지" id="how-heading" description="시장을 읽는 세 단계. 복잡한 분석은 AI에게 맡기세요."/><div className="steps-grid">{steps.map((step, index) => <div className="step" key={step.n}><div className="step-icon"><step.icon size={25} strokeWidth={1.5}/></div><div className="step-copy"><span className="step-number">{step.n}</span><h3>{step.title}</h3><p>{step.description}</p></div>{index < 2 && <ArrowRight className="step-arrow" size={20}/>}</div>)}</div><p className="pipeline-caption">정식 서비스의 분석 흐름입니다. 현재 프로토타입에서는 예시 데이터로 확인할 수 있습니다.</p></div></section>;
}
