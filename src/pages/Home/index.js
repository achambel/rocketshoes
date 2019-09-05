import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://resources.mandmdirect.com/Images/_default/n/b/1/nb1560_1_cloudzoom.jpg"
          alt="trainer"
        />
        <strong>Cool trainer</strong>
        <span>£29.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://resources.mandmdirect.com/Images/_default/n/b/1/nb1560_1_cloudzoom.jpg"
          alt="trainer"
        />
        <strong>Cool trainer</strong>
        <span>£29.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://resources.mandmdirect.com/Images/_default/n/b/1/nb1560_1_cloudzoom.jpg"
          alt="trainer"
        />
        <strong>Cool trainer</strong>
        <span>£29.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://resources.mandmdirect.com/Images/_default/n/b/1/nb1560_1_cloudzoom.jpg"
          alt="trainer"
        />
        <strong>Cool trainer</strong>
        <span>£29.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://resources.mandmdirect.com/Images/_default/n/b/1/nb1560_1_cloudzoom.jpg"
          alt="trainer"
        />
        <strong>Cool trainer</strong>
        <span>£29.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
      <li>
        <img
          src="https://resources.mandmdirect.com/Images/_default/n/b/1/nb1560_1_cloudzoom.jpg"
          alt="trainer"
        />
        <strong>Cool trainer</strong>
        <span>£29.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Add to Cart</span>
        </button>
      </li>
    </ProductList>
  );
}
