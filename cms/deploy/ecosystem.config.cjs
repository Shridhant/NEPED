// pm2 process file:  pm2 start deploy/ecosystem.config.cjs  (run from the cms/ folder)
module.exports = {
  apps: [
    {
      name: 'neped-cms',
      cwd: __dirname + '/..',
      script: 'npm',
      args: 'run start',
      env: { NODE_ENV: 'production' },
      max_memory_restart: '1500M',
    },
  ],
};
