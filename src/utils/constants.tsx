import { ICircle } from '../components/RippleAnimation'

export const MIN_WIDTH_BREAKPOINT = 1070

export const CIRCLE_CONFIG_MAP: ICircle[] = [
  {
    size: 300,
    duration: 10,
    opacity: 0.2,
  },
  {
    size: 500,
    duration: 11,
    opacity: 0.2,
  },
  {
    size: 700,
    duration: 12,
    opacity: 0.2,
  },
  {
    size: 900,
    duration: 13,
    opacity: 0.1,
  },
  {
    size: 1100,
    duration: 14,
    opacity: 0.1,
  },
]

export const PAGES_CONFIG_MAP = [
  {
    name: 'Анализ финансовой устойчивости',
    id: 1,
  },
  {
    name: 'Анализ ликвидности',
    id: 2,
  },
  {
    name: 'Анализ финансовых результатов',
    id: 3,
  },
  {
    name: 'Анализ оборачиваемости и основных средств',
    id: 4,
  },
  {
    name: 'Финансовый анализ',
    id: 5,
  },
]

export const OPTIONS_CONFIG_1 = {
  id: 1,
  label: 'Анализ финансовой устойчивости',
  options: [
    { name: 'Коэффициент автономии', id: 1 },
    { name: 'Коэффициент капитализации', id: 2 },
    { name: 'Коэффициент обеспеченности запасов', id: 3 },
    { name: 'Коэффициент покрытия активов', id: 4 },
    { name: 'Коэффициент покрытия инвестиций', id: 5 },
    { name: 'Коэффициент покрытия процентов', id: 6 },
    { name: 'Коэффициент финансовой зависимости', id: 7 },
    { name: 'Отношение долга к EBITDA', id: 8 },
    { name: 'Чистые активы', id: 9 },
    { name: 'Финансовый леверидж', id: 10 },
  ],
}

export const OPTIONS_CONFIG_2 = {
  id: 2,
  label: 'Анализ ликвидности',
  options: [
    { name: 'Коэффициент абсолютной ликвидности', id: 1 },
    { name: 'Коэффициент быстрой ликвидности', id: 2 },
    { name: 'Коэффициент обеспеченности собственными средствами', id: 3 },
    { name: 'Коэффициент текущей ликвидности', id: 4 },
    { name: 'Рабочий капитал', id: 5 },
    { name: 'Собственные оборотные средства', id: 6 },
  ],
}

export const OPTIONS_CONFIG_3 = {
  id: 3,
  label: 'Анализ финансовых результатов',
  options: [
    { name: 'EBIT', id: 1 },
    { name: 'EBITDA', id: 2 },
    { name: 'EBITDARM', id: 3 },
    { name: 'Норма чистой прибыли', id: 4 },
    { name: 'Рентабельность', id: 5 },
    { name: 'Рентабельность активов', id: 6 },
    { name: 'Рентабельность задействованного капитала', id: 7 },
    { name: 'Рентабельность продаж', id: 8 },
    { name: 'Рентабельность собственного капитала', id: 9 },
    { name: 'Формула Дюпона', id: 10 },
  ],
}

export const OPTIONS_CONFIG_4 = {
  id: 4,
  label: 'Анализ оборачиваемости и основных средств',
  options: [
    { name: 'Денежный цикл (цикл оборотного капитала)', id: 1 },
    { name: 'Оборачиваемость активов', id: 2 },
    { name: 'Оборачиваемость дебиторской задолженности', id: 3 },
    { name: 'Оборачиваемость запасов', id: 4 },
    { name: 'Оборачиваемость кредиторской задолженности', id: 5 },
    { name: 'Оборачиваемость оборотных средств', id: 6 },
    { name: 'Фондоёмкость', id: 7 },
    { name: 'Фондоотдача', id: 8 },
  ],
}

export const OPTIONS_CONFIG_5 = {
  id: 5,
  label: 'Финансовый анализ',
  options: [
    { name: 'Z-модель Альтмана (Z-счет Альтмана)', id: 1 },
    { name: 'Коэффициент восстановления платежеспособности', id: 2 },
    { name: 'Коэффициент утраты платежеспособности', id: 3 },
    { name: 'Модель Сайфуллина-Кадыкова', id: 4 },
    { name: 'Модель Таффлера (Z-счет Таффлера)', id: 5 },
  ],
}

export const ALL_OPTIONS = [
  OPTIONS_CONFIG_1,
  OPTIONS_CONFIG_2,
  OPTIONS_CONFIG_3,
  OPTIONS_CONFIG_4,
  OPTIONS_CONFIG_5,
]
