import { makeConfig } from '@fp-tx/build-tools'

const config = makeConfig(
  {
    buildMode: {
      type: 'Multi',
      entrypointGlobs: ['./src/!(internal).ts'],
    },
  },
  {
    splitting: true,
  },
)

export default config
