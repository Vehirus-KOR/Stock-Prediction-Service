import { useCallback, useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowRight, Github, Info } from 'lucide-react';
import { stocks, formatPrice } from './data/mockData';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedStock from './components/FeaturedStock';
import MarketSnapshot from './components/MarketSnapshot';
import SignalAnalysis, { SignalList } from './components/SignalAnalysis';
import AITopPicks from './components/AITopPicks';
import HowItWorks from './components/HowItWorks';
import ModelPerformance from './components/ModelPerformance';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { PriceChange, SignalBadge, StockMark } from './components/Shared';
import { registerStockTools } from './utils/stockTools';

export default function App() {
  const [stock, setStock] = useState(stocks[0]);
  const [modal, setModal] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const searchRef = useRef(null);
  const closeModal = () => setModal(null);
  const selectStock = useCallback((selected) => {
    setStock(selected);
    setAnnouncement(`${selected.name} 분석으로 변경했습니다. 5일 AI Score ${selected.score}점, 5일 상승 가능성 ${selected.forecasts[1].probability}%.`);
  }, []);
  const openDetail = useCallback((selected) => {selectStock(selected); setModal('detail');}, [selectStock]);
  useEffect(() => registerStockTools((selected) => flushSync(() => openDetail(selected))), [openDetail]);
  function focusSearch() {
    document.getElementById('home')?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    searchRef.current?.focus({preventScroll:true});
  }
  return <><a className="skip-link" href="#main-content">본문으로 건너뛰기</a><Header onSearch={focusSearch}/><main id="main-content"><Hero stock={stock} onSelect={selectStock} searchRef={searchRef} onDetail={openDetail}/><MarketSnapshot/><SignalAnalysis stock={stock}/><AITopPicks onSelect={openDetail} onRanking={() => setModal('ranking')}/><HowItWorks/><ModelPerformance/><Disclaimer/></main><Footer onGithub={() => setModal('github')}/><div className="sr-only" role="status">{announcement}</div>
    {modal === 'detail' && <Modal key="detail" title={`${stock.name} AI 분석`} onClose={closeModal} wide><div className="detail-grid"><div><FeaturedStock stock={stock} inDialog/><div className="detail-explainer"><Info size={16}/><p>AI Score는 여러 지표를 종합한 <strong>5거래일 기준 점수</strong>이며 상승 확률과 다릅니다. 랭킹은 <strong>20거래일 기준 점수({stock.rankingScore}점)</strong>를 사용합니다. 모든 값은 예시입니다.</p></div></div><div className="detail-signals"><h3>주요 긍정 요인</h3><SignalList items={stock.positives}/><h3 className="detail-risk-title">확인할 위험 요인</h3><SignalList items={stock.risks} risk/></div></div><p className="detail-disclaimer">제시된 확률은 실제 모델에서 산출한 값이 아닙니다. 투자 권유가 아닌 UI 시연용 정보입니다.</p></Modal>}
    {modal === 'ranking' && <Modal key="ranking" title="AI Ranking" onClose={closeModal} wide><p className="ranking-intro">20거래일 기준 AI Score 순위 · 현재 제공되는 4개 샘플 종목 전체입니다.</p><div className="ranking-table-wrap"><table className="ranking-table"><thead><tr><th scope="col">순위</th><th scope="col">종목</th><th scope="col">현재가 / 등락률</th><th scope="col">AI Score</th><th scope="col">Signal</th><th scope="col"><span className="sr-only">종목 분석</span></th></tr></thead><tbody>{stocks.map((item, i) => <tr key={item.id}><td className="ranking-position">{i+1}</td><th scope="row"><span className="table-stock"><StockMark stock={item} small/><span>{item.name}<small>{item.ticker}</small></span></span></th><td><strong>{formatPrice(item.price)}</strong><PriceChange value={item.change} compact/></td><td className="table-score">{item.rankingScore}</td><td><SignalBadge signal={item.rankingSignal}/></td><td><button className="icon-button" aria-label={`${item.name} 분석 보기`} onClick={() => openDetail(item)}><ArrowRight size={19}/></button></td></tr>)}</tbody></table></div><p className="ranking-intro ranking-note">AI Score는 상승 확률이 아닙니다. 대표 분석 카드의 5거래일 점수와는 기준 기간이 다릅니다.</p></Modal>}
    {modal === 'github' && <Modal key="github" title="StockAI on GitHub" onClose={closeModal}><div className="github-placeholder"><Github size={36}/><h3>저장소 링크 준비 중</h3><p>StockAI의 GitHub 저장소가 연결되면<br/>이곳에서 소스 코드를 확인할 수 있습니다.</p><button className="analysis-button" onClick={closeModal}>확인<ArrowRight size={16}/></button></div></Modal>}
  </>;
}
