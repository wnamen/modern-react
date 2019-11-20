import dev from './dev';
import prod from './prod';
import staging from './staging';
import test from './test';

export default (process.env.NODE_ENV === 'test'
  ? test
  : process.env.NODE_ENV === 'production'
  ? prod
  : process.env.NODE_ENV === 'staging'
  ? staging
  : dev
);
