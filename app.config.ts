export default defineAppConfig({
    docus: {
      title: 'Starblast Modding',
      titleTemplate: '%s - Starblast Modding',
      description: 'Starblast Modding Docs',
      url: 'http://bhpsngum.github.io',
      socials: {
        github: 'bhpsngum/starblast-modding',
      },
      
      layout: 'default',
      header: {
        logo: false,
        showLinkIcon: false,
        title: 'Starblast Modding Docs',
      },
      footer: {
        credits: {
          icon: 'material-symbols:rocket-launch',
          text: 'Powered by Vue.js and Nuxt',
          href: 'https://nuxt.com/',
        },
        textLinks: [
          {
            text: 'Starblast Modding Library',
            href: 'https://npmjs.com/package/starblast-modding',
            target: '_blank',
            rel: 'noopener'
          }
        ],
        
      }
    }
  })
  