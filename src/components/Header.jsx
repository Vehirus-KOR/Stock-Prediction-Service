import { useEffect, useRef, useState } from 'react';
import { Menu, Search, X, ArrowUpRight } from 'lucide-react';
import { Brand } from './Shared';

const links = [{ id: 'home', label: 'Home' }, { id: 'market', label: 'Market' }, { id: 'ranking', label: 'AI Ranking' }, { id: 'model', label: 'Model' }];

export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const menuButton = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    links.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return <header className="site-header"><div className="container header-inner">
    <a className="brand-link" href="#home" aria-label="StockAI 홈" onClick={() => setOpen(false)}><Brand /></a>
    <nav className="desktop-nav" aria-label="주 메뉴">{links.map((link) => <a className={active === link.id ? 'active' : ''} key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined}>{link.label}</a>)}</nav>
    <div className="header-actions"><span className="prototype-pill">UI Prototype <span>v0.1</span></span><button className="header-search" aria-label="종목 검색창으로 이동" onClick={onSearch}><Search size={17}/><span>종목 검색</span></button><button ref={menuButton} className="icon-button mobile-toggle" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button></div>
  </div>
  {open && <nav className="mobile-nav" id="mobile-menu" aria-label="모바일 메뉴">{links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={() => {setOpen(false); setActive(link.id);}}>{link.label}<ArrowUpRight size={17}/></a>)}</nav>}
  </header>;
}
