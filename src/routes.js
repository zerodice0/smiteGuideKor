import Home from './routes/home.svelte'
import Items from './routes/items.svelte'
import Stats from './routes/stats.svelte'

const routes = {
  '/': Home,
  '/stats': Stats,
  '/items': Items,
  '/conquests': Home
}

export default routes;