import { stocks } from '../data/mockData';

// Optional browser capability. Unsupported browsers keep the same full UI.
export function registerStockTools(showStock) {
  const context = typeof document === 'undefined' ? undefined : document.modelContext;
  if (!context?.registerTool) return undefined;
  const lifecycle = new AbortController();
  const tool = {
    name: 'show_stock_analysis',
    title: '종목 예시 분석 보기',
    description: '4개 샘플 종목 중 하나의 AI 분석 창을 열고 홈페이지의 선택 종목을 바꿉니다. 실제 시세나 예측이 아닙니다.',
    inputSchema: {
      type: 'object',
      properties: { ticker: { type: 'string', enum: stocks.map((stock) => stock.ticker) } },
      required: ['ticker'], additionalProperties: false,
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).some((key) => key !== 'ticker') || typeof input.ticker !== 'string') throw new Error('ticker에 6자리 샘플 종목 코드를 입력하세요.');
      const stock = stocks.find((item) => item.ticker === input.ticker);
      if (!stock) throw new Error('지원하지 않는 샘플 종목입니다.');
      showStock(stock);
      return { isMock: true, ticker: stock.ticker, name: stock.name, score: stock.score, scoreHorizonDays: 5, forecasts: stock.forecasts, view: 'analysis_dialog' };
    },
  };
  try {
    Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});
  } catch { /* Optional enhancement: a registration failure does not affect the UI. */ }
  return () => lifecycle.abort();
}
