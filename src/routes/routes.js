import { Root, AppRoot } from 'app/components'
import { Home, Faq, Privacy, NotFound } from 'app/pages'
import docsRoutes from './docs.routes'

export default [{
  component: Root,
  path: '/',
  routes: [
    ...docsRoutes, {
      path: '/',
      component: AppRoot,
      routes: [{
        path: '/:searchTerm?/:weirdness?',
        exact: true,
        component: Home,
        meta: {
          title: 'Politech Weirdness',
          description: 'Lets get weird.'
        }
      }, {
        path: '/faq',
        exact: true,
        component: Faq,
        meta: {
          title: 'Politech Weirdness - FAQ',
          description: 'Frequently asked questions'
        }
      }, {
        path: '/privacy',
        exact: true,
        component: Privacy,
        meta: {
          title: 'Politech Weirdness - Privacy Policy',
          description: 'Privacy policy'
        }
      }, {
        path: '*',
        component: NotFound,
        meta: {
          title: 'Politech Weirdness - Not found',
          description: 'Lets get weird.'
        }
      }]
    }]
}]
