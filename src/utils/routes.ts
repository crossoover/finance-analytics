export const BASE_ROUTE = '/finance-analytics-app'
export const SECTION_ROUTE = `:sectionId`
export const OPTION_ROUTE = `:optionId`

export const getOptionRouteById = (sectionId: number, optionId: number) =>
  `${BASE_ROUTE}/${sectionId}/${optionId}`
