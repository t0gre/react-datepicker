declare function renderWithProviders(
  ui: any,
  options?: any,
  contextValues?: Record<string, unknown>,
): import('@testing-library/react').RenderResult<
  typeof import('@testing-library/dom/types/queries')
>
export * from '@testing-library/react'
export {renderWithProviders as render}
