import { makeConfig } from '@jacob-alford/build-tools'

const config = makeConfig({
  getEntrypoints: (srcFiles) => srcFiles.map((file) => file.name),
  dts: false
})

export default config
