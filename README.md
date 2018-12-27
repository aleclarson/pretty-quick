# https://github.com/azz/pretty-quick/pull/54

```sh
yarn

# Test without prettier-eslint and prettier-tslint.
git pull && pretty-quick --since HEAD~3 && git diff | cat

# Test with prettier-eslint and prettier-tslint.
git reset --hard HEAD^ && yarn && pretty-quick --since HEAD~2 && git diff | cat
```
