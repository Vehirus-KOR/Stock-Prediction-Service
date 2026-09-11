import { useId } from 'react';
import { ArrowUpRight, ArrowDownRight, Minus, ChartNoAxesCombined } from 'lucide-react';
import { formatChange } from '../data/mockData';

export function Brand({ small = false }) {
  return <span className={`brand ${small ? 'brand-small' : ''}`}><span className="brand-icon"><ChartNoAxesCombined size={23} strokeWidth={2.4} /></span><span>Stock<span className="brand-ai">AI</span></span></span>;
}

export function StockMark({ stock, small = false }) {
  return <span aria-hidden="true" className={`stock-mark ${stock.brand} ${small ? 'small' : ''}`}>{stock.mark}</span>;
}

export function PriceChange({ value, compact = false }) {
  const Icon = value > 0 ? ArrowUpRight : value < 0 ? ArrowDownRight : Minus;
  return <span className={`price-change ${value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral'} ${compact ? 'compact' : ''}`}><Icon size={15} aria-hidden="true" />{formatChange(value)}</span>;
}

export function SignalBadge({ signal }) {
  const tone = signal.startsWith('BULLISH') ? 'bullish' : signal.startsWith('BEARISH') ? 'bearish' : 'neutral';
  const Icon = tone === 'bullish' ? ArrowUpRight : tone === 'bearish' ? ArrowDownRight : Minus;
  return <span className={`signal-badge ${tone}`}><Icon size={13} aria-hidden="true" />{signal}</span>;
}

export function Sparkline({ values, negative = false, area = false, className = '' }) {
  const id = useId().replace(/:/g, '');
  const min = Math.min(...values), max = Math.max(...values);
  const points = values.map((value, i) => `${i / (values.length - 1) * 200},${48 - (value - min) / (max - min || 1) * 40}`).join(' ');
  return <svg className={`sparkline ${negative ? 'down' : ''} ${className}`} viewBox="0 0 200 55" preserveAspectRatio="none" aria-hidden="true">
    {area && <><defs><linearGradient id={id} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="currentColor" stopOpacity=".14"/><stop offset="100%" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs><polygon points={`0,55 ${points} 200,55`} fill={`url(#${id})`}/></>}
    <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}

export function SectionHeading({ eyebrow, title, description, action, id }) {
  return <div className="section-heading"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 id={id}>{title}</h2>{description && <p className="section-description">{description}</p>}</div>{action}</div>;
}
