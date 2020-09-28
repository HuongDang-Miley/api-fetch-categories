let apis = [
    {
        API: 'Nexchange',
        Description: 'Automated cryptocurrency exchange service',
        Auth: '',
        HTTPS: false,
        Cors: 'yes',
        Link: 'https://nexchange2.docs.apiary.io/',
        Category: 'dog'
      },
      {
        API: 'NiceHash',
        Description: 'Largest Crypto Mining Marketplace',
        Auth: 'apiKey',
        HTTPS: true,
        Cors: 'unknown',
        Link: 'https://docs.nicehash.com/',
        Category: 'snake'
      },
      {
        API: 'Poloniex',
        Description: 'US based digital asset exchange',
        Auth: 'apiKey',
        HTTPS: true,
        Cors: 'unknown',
        Link: 'https://poloniex.com/support/api/',
        Category: 'test'
      },
]

let nums = ['a','b','c','d','']
let result = nums.filter((char) => char === 'a')
result
let length = nums.length
length
let random = Math.floor(Math.random() * apis.length)
let randomEle = apis[random]
random
let cat = randomEle.Category
cat























