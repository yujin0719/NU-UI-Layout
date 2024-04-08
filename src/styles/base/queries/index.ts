const queryForDesktop = '(min-width: 851px)'
const queryForMobile = '(max-width: 850px)'

const queryForLandscape = '(orientation: landscape)'
const queryForPortrait = '(orientation: portrait)'

const queryForDarkMode = '(prefers-color-scheme: dark)'
const queryForLightMode = '(prefers-color-scheme: light)'

const media = {
  mobile: `@media screen and ${queryForMobile}`,
  desktop: `@media screen and ${queryForDesktop}`,
}

export {
  queryForDesktop,
  queryForMobile,
  queryForLandscape,
  queryForPortrait,
  queryForDarkMode,
  queryForLightMode,
  media,
}
