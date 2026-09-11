import { Github, ArrowUpRight } from 'lucide-react';
import { Brand } from './Shared';

export default function Footer({ onGithub }) {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><a className="brand-link" href="#home" aria-label="StockAI 홈"><Brand small/></a><p>시장을 이해하는 더 나은 시선.</p></div><nav aria-label="하단 메뉴"><a href="#home">Dashboard</a><a href="#market">Market</a><a href="#ranking">AI Ranking</a><a href="#model">Model</a><a href="#about">About</a></nav><button className="github-link" onClick={onGithub}><Github size={18}/>GitHub<ArrowUpRight size={14}/></button></div><div className="footer-bottom"><span>© 2026 StockAI</span><span>Built with data. Designed for clarity.</span><span>UI Prototype v0.1</span></div></div></footer>;
}
