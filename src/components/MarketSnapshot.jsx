import { Globe2 } from 'lucide-react';
import { markets } from '../data/mockData';
import { PriceChange, SectionHeading, Sparkline } from './Shared';

export default function MarketSnapshot() {
  return <section className="section market-section container" id="market" aria-labelledby="market-heading"><SectionHeading eyebrow="MARKET SNAPSHOT" title="오늘의 시장" id="market-heading" action={<span className="quiet-label"><Globe2 size={14}/> 시장 지수 · 예시 데이터</span>}/><div className="market-grid">{markets.map((market) => <article className="market-card" key={market.name}><div className="market-card-header"><h3>{market.name}</h3><span>{market.label}</span></div><div className="market-value">{market.value}</div><div className="market-bottom"><PriceChange value={market.change}/><Sparkline values={market.history} negative={market.change < 0}/></div></article>)}</div></section>;
}
