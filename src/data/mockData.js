// All numbers are fictional UI fixtures. This module makes no network calls.
// AI Score is an example composite score, not the probability of a price rise.
export const prototype = {
  version: 'UI Prototype v0.1',
  dataLabel: '예시 데이터',
  analysisHorizon: 5,
  rankingHorizon: 20,
};

export const stocks = [
  {
    id: '005930', name: '삼성전자', ticker: '005930', market: 'KOSPI',
    aliases: ['samsung', 'samsung electronics', '삼전'], mark: 'S', brand: 'samsung',
    price: 82300, change: 1.37, changeAmount: 1110, score: 76, rankingScore: 86,
    signal: 'BULLISH', rankingSignal: 'BULLISH',
    forecasts: [{ days: 1, probability: 57 }, { days: 5, probability: 63 }, { days: 20, probability: 71 }],
    history: [77500, 78100, 77800, 79100, 78500, 78900, 79800, 79100, 80200, 79800, 80400, 80100, 81300, 81100, 82300],
    positives: [
      { icon: 'activity', title: 'RSI Momentum', detail: '가격의 상승 흐름이 점차 강해지고 있어요.', value: 'RSI 58.4' },
      { icon: 'trend', title: 'MA20 > MA60', detail: '최근 20일 평균 가격이 60일 평균보다 높아요.', value: '상승 추세' },
      { icon: 'volume', title: 'Trading Volume Increasing', detail: '거래량이 늘며 시장의 관심이 높아졌어요.', value: '+24.8%' },
      { icon: 'market', title: 'Market Momentum', detail: '시장 전체의 긍정적인 흐름이 뒷받침돼요.', value: '긍정적' },
    ],
    risks: [
      { icon: 'volatility', title: 'High Volatility', detail: '단기 가격 변동이 커질 수 있어요.', value: '변동성 확대' },
      { icon: 'currency', title: 'USD/KRW Rising', detail: '환율 상승이 외국인 자금 흐름에 영향을 줄 수 있어요.', value: '+0.21%' },
    ],
  },
  {
    id: '000660', name: 'SK하이닉스', ticker: '000660', market: 'KOSPI',
    aliases: ['sk hynix', 'hynix', '하이닉스'], mark: 'SK', brand: 'sk',
    price: 189500, change: 2.16, changeAmount: 4000, score: 79, rankingScore: 83,
    signal: 'BULLISH', rankingSignal: 'BULLISH',
    forecasts: [{ days: 1, probability: 59 }, { days: 5, probability: 67 }, { days: 20, probability: 69 }],
    history: [172000, 173000, 176000, 174000, 178000, 177000, 181000, 179000, 184000, 183000, 186000, 184000, 187000, 186000, 189500],
    positives: [
      { icon: 'activity', title: 'RSI Momentum', detail: '매수세가 이어지며 상승 흐름이 강해지고 있어요.', value: 'RSI 61.2' },
      { icon: 'trend', title: 'MA20 > MA60', detail: '단기 평균 가격이 장기 평균을 웃돌고 있어요.', value: '상승 추세' },
      { icon: 'volume', title: 'Trading Volume Increasing', detail: '평소보다 많은 거래가 상승 흐름에 힘을 더해요.', value: '+31.2%' },
      { icon: 'market', title: 'Market Momentum', detail: '반도체 업종의 예시 시장 지표가 긍정적이에요.', value: '긍정적' },
    ],
    risks: [
      { icon: 'volatility', title: 'High Volatility', detail: '빠른 상승 이후 단기 조정이 나타날 수 있어요.', value: '변동성 확대' },
      { icon: 'currency', title: 'USD/KRW Rising', detail: '환율 변화로 해외 자금 흐름이 달라질 수 있어요.', value: '+0.21%' },
    ],
  },
  {
    id: '035420', name: 'NAVER', ticker: '035420', market: 'KOSPI',
    aliases: ['naver', '네이버'], mark: 'N', brand: 'naver',
    price: 204500, change: 0.74, changeAmount: 1500, score: 72, rankingScore: 79,
    signal: 'BULLISH', rankingSignal: 'BULLISH',
    forecasts: [{ days: 1, probability: 54 }, { days: 5, probability: 61 }, { days: 20, probability: 66 }],
    history: [197000, 198000, 196000, 199000, 198000, 201000, 200000, 199000, 202000, 201000, 203000, 202000, 204000, 203000, 204500],
    positives: [
      { icon: 'activity', title: 'RSI Momentum', detail: '과도한 상승 없이 완만한 회복 흐름을 보여요.', value: 'RSI 54.8' },
      { icon: 'trend', title: 'MA20 > MA60', detail: '단기 가격 흐름이 장기 평균보다 좋아졌어요.', value: '완만한 상승' },
      { icon: 'volume', title: 'Trading Volume Increasing', detail: '거래 참여가 조금씩 늘어나고 있어요.', value: '+12.6%' },
      { icon: 'market', title: 'Market Momentum', detail: '시장 전체 상승 흐름이 긍정적으로 작용해요.', value: '긍정적' },
    ],
    risks: [
      { icon: 'volatility', title: 'High Volatility', detail: '개별 뉴스에 따라 가격이 흔들릴 수 있어요.', value: '뉴스 민감도' },
      { icon: 'currency', title: 'USD/KRW Rising', detail: '환율 변화가 시장 전반의 불확실성을 높여요.', value: '+0.21%' },
    ],
  },
  {
    id: '005380', name: '현대차', ticker: '005380', market: 'KOSPI',
    aliases: ['hyundai', 'hyundai motor', '현대자동차'], mark: 'H', brand: 'hyundai',
    price: 247000, change: -0.40, changeAmount: -1000, score: 61, rankingScore: 76,
    signal: 'NEUTRAL', rankingSignal: 'NEUTRAL+',
    forecasts: [{ days: 1, probability: 48 }, { days: 5, probability: 53 }, { days: 20, probability: 58 }],
    history: [246000, 249000, 247000, 251000, 248000, 250000, 249000, 252000, 250000, 248000, 251000, 249000, 250000, 248000, 247000],
    positives: [
      { icon: 'activity', title: 'RSI Momentum', detail: '매수와 매도 흐름이 비교적 균형을 이루고 있어요.', value: 'RSI 49.6' },
      { icon: 'trend', title: 'MA20 ≈ MA60', detail: '단기와 장기 평균 가격의 차이가 크지 않아요.', value: '횡보 구간' },
      { icon: 'volume', title: 'Stable Trading Volume', detail: '급격한 거래량 변화 없이 흐름을 유지해요.', value: '+3.1%' },
      { icon: 'market', title: 'Market Momentum', detail: '시장 전반의 상승 흐름이 하방을 지지해요.', value: '완만한 긍정' },
    ],
    risks: [
      { icon: 'volatility', title: 'Direction Uncertainty', detail: '상승 추세가 뚜렷하지 않아 방향 확인이 필요해요.', value: '추세 불확실' },
      { icon: 'currency', title: 'USD/KRW Rising', detail: '환율 변화가 수익 전망과 투자 심리에 영향을 줄 수 있어요.', value: '+0.21%' },
    ],
  },
];

export const markets = [
  { name: 'KOSPI', label: '코스피', value: '2,724.18', change: 0.82, history: [20, 26, 23, 29, 27, 33, 31, 36, 33, 42, 38, 43, 47, 45, 54] },
  { name: 'KOSDAQ', label: '코스닥', value: '854.06', change: 1.13, history: [20, 23, 21, 26, 24, 32, 29, 31, 39, 36, 42, 40, 49, 45, 52] },
  { name: 'NASDAQ', label: '나스닥', value: '16,742.39', change: -0.34, history: [52, 48, 50, 44, 47, 40, 43, 34, 38, 33, 35, 28, 30, 24, 26] },
  { name: 'USD/KRW', label: '원·달러 환율', value: '1,368.50', change: 0.21, history: [29, 26, 32, 29, 35, 33, 38, 36, 41, 39, 44, 42, 45, 44, 49] },
];

export const model = {
  name: 'XGBoost', version: 'v1.0', accuracy: 58.7, f1: 0.59, auc: 0.61,
  strategyReturn: 18.4, benchmarkReturn: 11.2,
  trainingPeriod: '2020.01 – 2025.12', backtestPeriod: '2026.01 – 2026.06',
  // Synthetic paths for a chart placeholder; not actual training or backtesting.
  backtest: [
    { date: '01.01', strategy: 0, benchmark: 0 },
    { date: '01.15', strategy: 1.4, benchmark: 0.8 },
    { date: '02.01', strategy: 0.9, benchmark: 0.5 },
    { date: '02.15', strategy: 4.2, benchmark: 2.4 },
    { date: '03.01', strategy: 3.5, benchmark: 2.1 },
    { date: '03.15', strategy: 7.1, benchmark: 4.7 },
    { date: '04.01', strategy: 6.3, benchmark: 3.9 },
    { date: '04.15', strategy: 10.7, benchmark: 6.2 },
    { date: '05.01', strategy: 10.1, benchmark: 7.1 },
    { date: '05.15', strategy: 13.9, benchmark: 8.6 },
    { date: '06.01', strategy: 15.4, benchmark: 9.7 },
    { date: '06.30', strategy: 18.4, benchmark: 11.2 },
  ],
};

export const normalizeQuery = (query) => query.toLocaleLowerCase('ko-KR').replace(/\s/g, '');
export function searchStocks(query) {
  const normalized = normalizeQuery(query);
  if (!normalized) return stocks;
  return stocks.filter((stock) => [stock.name, stock.ticker, ...stock.aliases].some((text) => normalizeQuery(text).includes(normalized)));
}
export const formatPrice = (value) => `₩${value.toLocaleString('ko-KR')}`;
export const formatChange = (value) => `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
