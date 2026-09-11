import { Info } from 'lucide-react';

export default function AIScore({ score, label = '5일 기준' }) {
  const circumference = 2 * Math.PI * 48;
  return <div className="ai-score"><div className="ai-score-heading">AI SCORE<Info size={12} aria-label="AI Score는 복합 지표 점수이며 상승 확률과 다릅니다."/></div><div className="score-ring" role="img" aria-label={`${label} AI Score ${score}점, 100점 만점`}><svg viewBox="0 0 112 112" aria-hidden="true"><circle className="score-track" cx="56" cy="56" r="48"/><circle className="score-fill" cx="56" cy="56" r="48" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - score / 100)}/></svg><div className="score-number"><strong>{score}</strong><span>/ 100</span></div></div><span className="score-period">{label}</span></div>;
}
