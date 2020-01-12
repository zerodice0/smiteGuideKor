import Home from './routes/home.svelte'
import Items from './routes/items.svelte'
import Stats from './routes/stats.svelte'
import Role from './routes/role.svelte'

const routes = {
  '/': Home,
  '/stats': Stats,
  '/role': Role,
  '/conquests': Home
}

export default routes;