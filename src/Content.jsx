import { ProductsIndex } from './ProductsIndex';
import { ProductsNew } from './ProductsNew';
import axios from 'axios';
import { useState } from 'react';

export function Content() {
  const [pants, setPants] = useState => ([{
    id: 1,
    name: "Pant",
    brief: "Something you wear"
  }]);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex pants = {pants} />
    </div>
  );
}
