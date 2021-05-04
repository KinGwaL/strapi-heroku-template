module.exports = {
    apps : [{
      name: 'strapi',
      script: 'npm',
      args: 'start',
      autorestart: true,
    //   watch: false,
    //   max_memory_restart: '1G',
  // not production or staging
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],

  };
  