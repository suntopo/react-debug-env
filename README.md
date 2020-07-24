## React Debug Env
We could debug React by:
1. Jest
2. Chrome

Jest could not easily add interactions，instead of, i use chrome. But React could run directly with webpack, you must modify some specific files. So..., i pull these files out into overlay. You guys just need to `npm run overlay`.

## Get started
1. download `React source code`，soft link to `src/react`, eg `ln -s source src/react`
3. `npm run overlay` 
4. `npm start` 

## React Versions vs Branches

| 版本     | V16.13.1      |      |      |      |      |
| -------- | ------------- | ---- | ---- | ---- | ---- |
| master | ✓ |      |      |      |      |