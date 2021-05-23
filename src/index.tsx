import React from 'react';
import { package1Function } from '@evankennedy/test-shared-js_package-1';
import { Package1Component } from '@evankennedy/test-shared-js_package-1/ui';

const res1 = package1Function({ propA: 1337 });
const res2 = <Package1Component propA={1337} />;

console.log(res1, res2);
