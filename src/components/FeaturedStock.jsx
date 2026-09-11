import { ArrowRight, Sparkles } from 'lucide-react';
import { formatPrice } from '../data/mockData';
import { StockMark, PriceChange, SignalBadge, Sparkline } from './Shared';
import AIScore from './AIScore';
import ForecastCard from './ForecastCard';

export default function FeaturedStock({ stock, onDetail, inDialog = false }) {
  return <article className={`featured-stock ${inDialog ? 'in-dialog' : ''}`} aria-label={`${stock.name} AI 분석`}>
    <div className="featured-card-header"><span><Sparkles size={14}/> {inDialog ? '종목 AI 분석' : '대표 AI 분석'}</span><span className="sample-label">예시 데이터</span></div>
    <div className="featured-main"><div className="featured-stock-info"><div className="stock-identity"><StockMark stock={stock}/><div><h3>{stock.name}</h3><p className="ticker">{stock.ticker}<span/>{stock.market}</p></div></div><div className="featured-price">{formatPrice(stock.price)}</div><div className="featured-change"><PriceChange value={stock.change}/><span>전일 대비</span></div><Sparkline values={stock.history} negative={stock.change < 0} area/></div><AIScore score={stock.score}/></div>
    <div className="forecast-heading"><span>기간별 상승 가능성</span><SignalBadge signal={stock.signal}/></div><div className="forecast-grid">{stock.forecasts.map((forecast) => <ForecastCard key={forecast.days} {...forecast}/>)}</div>
    {!inDialog && <button className="analysis-button" onClick={() => onDetail(stock)}>{stock.name} 분석 자세히 보기<ArrowRight size={16}/></button>}
  </article>;
}
