const FIRST_MOTORCYCLE_MODEL = 'Honda Cb 600f Hornet';
const SECOND_MOTORCYCLE_MODEL = 'Honda Cbr 1000rr';

export const ONE_MOTORCYCLE_INPUT_MOCK = {
  model: FIRST_MOTORCYCLE_MODEL,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const ONE_MOTORCYCLE_MODEL_OUTPUT_MOCK = {
  _id: '6348513f34c397abcad040b2',
  model: FIRST_MOTORCYCLE_MODEL,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const ONE_MOTORCYCLE_SERVICE_OUTPUT_MOCK = {
  id: '6348513f34c397abcad040b2',
  model: FIRST_MOTORCYCLE_MODEL,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const MOTORCYCLE_LIST_MODEL_OUTPUT_MOCK = [
  {
    _id: '634852326b35b59438fbea2f',
    model: FIRST_MOTORCYCLE_MODEL,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    _id: '634852326b35b59438fbea31',
    model: SECOND_MOTORCYCLE_MODEL,
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const MOTORCYCLE_LIST_SERVICE_OUTPUT_MOCK = [
  {
    id: '634852326b35b59438fbea2f',
    model: FIRST_MOTORCYCLE_MODEL,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: SECOND_MOTORCYCLE_MODEL,
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];
