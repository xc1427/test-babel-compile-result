import { add } from './add';
import * as multiplyModule from './multiply';
import multiply from './multiply';
import minus from './minus';

const res = minus(multiplyModule.default(3, 4), add(1, multiply(2, 3)));

console.log('result:', res);