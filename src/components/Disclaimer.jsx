import { Info } from 'lucide-react';

export default function Disclaimer() {
  return <aside className="disclaimer container" aria-label="투자 관련 안내"><Info size={17}/><div><p>StockAI의 분석 결과는 투자 판단을 돕기 위한 데이터 기반 참고 정보이며 투자 권유가 아닙니다. 투자의 최종 판단과 책임은 사용자에게 있습니다.</p><span>UI Prototype v0.1 · 모든 시세, AI 점수, 예측 및 성능 지표는 예시 데이터입니다.</span></div></aside>;
}
