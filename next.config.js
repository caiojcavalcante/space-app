module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      // Soluciona o problema de não carregar o CSS em produção
      if (!isServer) {
        config.resolve.fallback.fs = false
      }
      return config
    },
  }
  