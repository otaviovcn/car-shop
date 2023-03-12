import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/Car.service';
import {
  ONE_CAR_INPUT_MOCK,
  ONE_CAR_MODEL_OUTPUT_MOCK,
  ONE_CAR_SERVICE_OUTPUT_MOCK,
  CAR_LIST_MODEL_OUTPUT_MOCK,
  CAR_LIST_SERVICE_OUTPUT_MOCK,
} from './Mocks/car.mock.test';

describe('Verifica a rota de carros', function () {
  describe('Testa a rota POST /cars', function () {
    it('Testa se a rota consegue adicionar um carro com sucesso.', async function () {
      const carInput: ICar = ONE_CAR_INPUT_MOCK;

      const carOutput = ONE_CAR_SERVICE_OUTPUT_MOCK;
      sinon.stub(Model, 'create').resolves(carOutput);

      const service = new CarService();
      const result = await service.create(carInput);

      expect(result.message).to.be.deep.equal(carOutput);
      expect(result.type).to.be.equal(201);
    });
  });

  describe('Testa a rota GET /cars', function () {
    it('Testa se a rota retorna a lista com todos os carros.', async function () {
      const modelOutput = CAR_LIST_MODEL_OUTPUT_MOCK;
      const serviceOutput = CAR_LIST_SERVICE_OUTPUT_MOCK;
      sinon.stub(Model, 'find').resolves(modelOutput);

      const service = new CarService();
      const result = await service.getAll();

      expect(result.message).to.be.deep.equal(serviceOutput);
      expect(result.type).to.be.equal(200);
    });
  });
  describe('Testa a rota GET /cars:id', function () {
    it('Testa se a rota retorna, com sucesso, o carro escolhido.', async function () {
      const modelOutput = ONE_CAR_MODEL_OUTPUT_MOCK;
      const serviceOutput = ONE_CAR_SERVICE_OUTPUT_MOCK;

      sinon.stub(Model, 'findById').resolves(modelOutput);

      const service = new CarService();
      const result = await service.getById('634852326b35b59438fbea2f');

      expect(result.message).to.be.deep.equal(serviceOutput);
      expect(result.type).to.be.equal(200);
    });

    it('Testa se, ao procurar um carro inexistente, a rota trás uma excessão', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      const service = new CarService();
      const result = await service.getById('1234567891011121314');

      expect(result.message).to.be.equal('Car not found');
    });
  });
  describe('Testa a rota PUT /cars:id', function () {
    it('Testa se a rota atualiza, com sucesso, o carro escolhido.', async function () {
      const serviceInput = ONE_CAR_INPUT_MOCK;
      const serviceOutput = 'Car not found';

      const service = new CarService();
      sinon.stub(Model, 'findById').resolves(null);

      const result = await service.update('634852326b35b59438fbea2f', serviceInput);

      expect(result.message).to.be.deep.equal(serviceOutput);
      expect(result.type).to.be.equal(404);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
