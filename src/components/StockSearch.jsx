import { forwardRef, useEffect, useRef, useState } from 'react';
import { Search, ArrowUpRight, X } from 'lucide-react';
import { searchStocks, stocks, formatPrice } from '../data/mockData';
import { StockMark, PriceChange } from './Shared';

const StockSearch = forwardRef(function StockSearch({ onSelect }, inputRef) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapper = useRef(null);
  const matches = searchStocks(query);
  useEffect(() => {
    const dismiss = (event) => { if (!wrapper.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, []);
  function select(stock) { onSelect(stock); setQuery(''); setOpen(false); setActive(0); }
  function onKeyDown(event) {
    if (event.nativeEvent.isComposing) {
      if (event.key === 'Enter') event.preventDefault();
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      const step = event.key === 'ArrowDown' ? 1 : -1;
      setActive((i) => matches.length ? (i + step + matches.length) % matches.length : 0);
    } else if (event.key === 'Escape') { setOpen(false); }
  }
  function submit(event) { event.preventDefault(); if (query.trim() && matches.length) select(matches[Math.min(active, matches.length - 1)]); else setOpen(true); }
  return <div className="stock-search" ref={wrapper} onBlur={(event) => {if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);}}>
    <form className={`search-form ${open ? 'is-open' : ''}`} role="search" onSubmit={submit}>
      <Search className="search-leading-icon" size={22} aria-hidden="true"/>
      <label className="sr-only" htmlFor="stock-search">종목명 또는 종목코드 검색</label>
      <input id="stock-search" ref={inputRef} value={query} onChange={(event) => {setQuery(event.target.value); setOpen(true); setActive(0);}} onFocus={() => setOpen(true)} onKeyDown={onKeyDown} placeholder="삼성전자 또는 005930 검색" autoComplete="off" role="combobox" aria-expanded={open} aria-controls="stock-results" aria-autocomplete="list" aria-activedescendant={open && matches.length ? `stock-result-${matches[Math.min(active, matches.length - 1)].id}` : undefined}/>
      {query && <button className="clear-search" type="button" aria-label="검색어 지우기" onClick={() => {setQuery(''); setActive(0); inputRef.current?.focus();}}><X size={15}/></button>}
      <button className="search-submit" type="submit">검색<ArrowUpRight size={17}/></button>
    </form>
    {open && <div className="search-dropdown"><div className="search-results-heading"><span>{query ? '검색 결과' : '분석 가능한 종목'}</span><span>MOCK DATA</span></div><ul id="stock-results" role="listbox" aria-label="종목 검색 결과">{matches.map((stock, index) => <li key={stock.id} id={`stock-result-${stock.id}`} role="option" aria-selected={index === active} className={index === active ? 'selected' : ''} onPointerMove={() => setActive(index)} onPointerDown={(event) => event.preventDefault()} onClick={() => select(stock)}><StockMark stock={stock} small/><div className="search-result-name"><strong>{stock.name}</strong><span>{stock.ticker} · {stock.market}</span></div><div className="search-result-price"><span>{formatPrice(stock.price)}</span><PriceChange value={stock.change} compact/></div><ArrowUpRight size={17}/></li>)}</ul>{matches.length === 0 && <div className="empty-search" role="status"><Search size={25}/><strong>일치하는 종목이 없어요</strong><p>삼성전자, SK하이닉스, NAVER, 현대차를<br/>종목명 또는 6자리 코드로 검색해 보세요.</p></div>}<div className="search-dropdown-footer">{matches.length ? '↑ ↓ 선택 · Enter 확인 · Esc 닫기' : '현재 4개 샘플 종목을 지원합니다.'}</div></div>}
    <div className="quick-search"><span>빠른 검색</span>{stocks.slice(0, 3).map((stock) => <button type="button" key={stock.id} onClick={() => select(stock)}>{stock.name}<ArrowUpRight size={12}/></button>)}</div>
  </div>;
});
export default StockSearch;
