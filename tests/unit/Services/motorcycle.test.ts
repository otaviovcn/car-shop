import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/Motorcycle.service';
import {
  MOTORCYCLE_LIST_MODEL_OUTPUT_MOCK,
  MOTORCYCLE_LIST_SERVICE_OUTPUT_MOCK,
  ONE_MOTORCYCLE_INPUT_MOCK,
  ONE_MOTORCYCLE_MODEL_OUTPUT_MOCK,
  ONE_MOTORCYCLE_SERVICE_OUTPUT_MOCK,
} from './Mocks/motorcycle.mock.test';

describe('Verifica a rota de motocicletas', function () {
  describe('Testa a rota POST /motorcycles', function () {
    it('Testa se a rota consegue adicionar uma motocicleta com sucesso.', async function () {
      const motorcycleInput: IMotorcycle = ONE_MOTORCYCLE_INPUT_MOCK;

      const motorcycleOutput = ONE_MOTORCYCLE_SERVICE_OUTPUT_MOCK;
      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create(motorcycleInput);

      expect(result.message).to.be.deep.equal(motorcycleOutput);
      expect(result.type).to.be.equal(201);
    });
  });

  describe('Testa a rota GET /motorcycles', function () {
    it('Testa se a rota retorna a lista com todas as motocicletas.', async function () {
      const modelOutput = MOTORCYCLE_LIST_MODEL_OUTPUT_MOCK;
      const serviceOutput = MOTORCYCLE_LIST_SERVICE_OUTPUT_MOCK;
      sinon.stub(Model, 'find').resolves(modelOutput);

      const service = new MotorcycleService();
      const result = await service.getAll();

      expect(result.message).to.be.deep.equal(serviceOutput);
      expect(result.type).to.be.equal(200);
    });
  });
  describe('Testa a rota GET /motorcycles:id', function () {
    it('Testa se a rota retorna, com sucesso, a motocicleta escolhida.', async function () {
      const modelOutput = ONE_MOTORCYCLE_MODEL_OUTPUT_MOCK;
      const serviceOutput = ONE_MOTORCYCLE_SERVICE_OUTPUT_MOCK;

      sinon.stub(Model, 'findById').resolves(modelOutput);

      const service = new MotorcycleService();
      const result = await service.getById('6348513f34c397abcad040b2');

      expect(result.message).to.be.deep.equal(serviceOutput);
      expect(result.type).to.be.equal(200);
    });

    it('Testa se, ao procurar uma moto inexistente, a rota trás uma excessão', async function () {
      sinon.stub(Model, 'findById').resolves(null);

      const service = new MotorcycleService();
      const result = await service.getById('1234567891011121314');

      expect(result.message).to.be.equal('Motorcycle not found');
      expect(result.type).to.be.equal(404);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
