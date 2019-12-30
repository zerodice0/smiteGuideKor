import Home from './routes/home.svelte'
import Items from './routes/items.svelte'

const routes = {
  '/': Home,
  '/items': Items,
  '/conquests': Home
}

export default routes;