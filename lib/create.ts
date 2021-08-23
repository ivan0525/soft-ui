import type {App, Plugin} from 'vue'
import version from './version'

interface SUiInstance {
  version: string
  componentPrefix: string
  install: (app: App) => void
}

interface SUiCreateOptions {
  components?: any[]
  componentPrefix?: string
}

function create({
  componentPrefix = 'S',
  components = []
}: SUiCreateOptions = {}): SUiInstance  {

  function install(app: App) {

  }
  return {
    version,
    componentPrefix,
    install
  }
}

export default create