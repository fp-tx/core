import { makeConfig } from '@fp-tx/build-tools'

const config = makeConfig(
  {
    getEntrypoints: srcFiles => srcFiles.map(file => file.name),
  },
  {
    tsconfig: './tsconfig.build.json',
  },
)

export default config
