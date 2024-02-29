import { css, RuleSet } from 'styled-components';

const breakpoints = {
  xs: '400px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px'
};

export const screen = (
  Object.keys(breakpoints) as (keyof typeof breakpoints)[]
).reduce((acc, cur) => {
  acc[cur] = (...args) => {
    return css`
      @media (min-width: ${breakpoints[cur]}) {
        ${args}
      }
    `;
  };

  return acc;
}, {} as Record<keyof typeof breakpoints, (...args: Parameters<typeof css>) => RuleSet<object>>);
