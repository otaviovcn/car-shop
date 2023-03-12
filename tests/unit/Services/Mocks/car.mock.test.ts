const FIRST_CAR_MODEL = 'Marea';
const SECOND_CAR_MODEL = 'Tempra';

export const ONE_CAR_INPUT_MOCK = {
  model: FIRST_CAR_MODEL,
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const ONE_CAR_MODEL_OUTPUT_MOCK = {
  _id: '634852326b35b59438fbea2f',
  model: FIRST_CAR_MODEL,
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const ONE_CAR_SERVICE_OUTPUT_MOCK = {
  id: '634852326b35b59438fbea2f',
  model: FIRST_CAR_MODEL,
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

export const CAR_LIST_MODEL_OUTPUT_MOCK = [
  {
    _id: '634852326b35b59438fbea2f',
    model: FIRST_CAR_MODEL,
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    _id: '634852326b35b59438fbea31',
    model: SECOND_CAR_MODEL,
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const CAR_LIST_SERVICE_OUTPUT_MOCK = [
  {
    id: '634852326b35b59438fbea2f',
    model: FIRST_CAR_MODEL,
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: SECOND_CAR_MODEL,
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];
