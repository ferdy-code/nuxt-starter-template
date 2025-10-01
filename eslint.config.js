import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  typescript: true,
  rules: {
    'curly': ['error', 'all'],
    'style/brace-style': ['error', '1tbs'],
    'node/prefer-global/process': ['off'],
    'node/prefer-global/buffer': ['off'],
  },
})
