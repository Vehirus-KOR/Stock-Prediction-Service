import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function ForecastCard({ days, probability }) {
  const rising = probability >= 50;
  const Icon = rising ? ArrowUpRight : ArrowDownRight;
  return <div className="forecast-card"><span className="forecast-period">{days} {days === 1 ? 'DAY' : 'DAYS'}</span><div className={`forecast-value ${rising ? 'positive' : 'negative'}`}><span>UP</span><strong>{probability}<small>%</small></strong><Icon size={15}/></div><div className="forecast-track"><div className={rising ? '' : 'down'} style={{width: `${probability}%`}}/></div></div>;
}
