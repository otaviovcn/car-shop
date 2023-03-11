import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/Motorcycle.service';

describe('Verifica a rota de motocicletas', function () {
  describe('Testa a rota POST /motorcycles', function () {
    it('Testa se a rota consegue adicionar um motocicleta com sucesso.', async function () {
      const motorcycleInput: IMotorcycle = {
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };

      const motorcycleOutput = {
        id: '6348513f34c397abcad040b2',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };
      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const service = new MotorcycleService();
      const result = await service.create(motorcycleInput);

      expect(result.message).to.be.deep.equal(motorcycleOutput);
      expect(result.type).to.be.equal(201);
    });
  });

  // describe('Testa a rota GET /cars', function () {
  //   it('Testa se a rota retorna a lista com todos os carros.', async function () {
  //     const modelOutput = [
  //       {
  //         _id: '634852326b35b59438fbea2f',
  //         model: 'Marea',
  //         year: 2002,
  //         color: 'Black',
  //         status: true,
  //         buyValue: 15.99,
  //         doorsQty: 4,
  //         seatsQty: 5,
  //       },
  //       {
  //         _id: '634852326b35b59438fbea31',
  //         model: 'Tempra',
  //         year: 1995,
  //         color: 'Black',
  //         status: false,
  //         buyValue: 39,
  //         doorsQty: 2,
  //         seatsQty: 5,
  //       },
  //     ];
  //     const serviceOutput = [
  //       {
  //         id: '634852326b35b59438fbea2f',
  //         model: 'Marea',
  //         year: 2002,
  //         color: 'Black',
  //         status: true,
  //         buyValue: 15.99,
  //         doorsQty: 4,
  //         seatsQty: 5,
  //       },
  //       {
  //         id: '634852326b35b59438fbea31',
  //         model: 'Tempra',
  //         year: 1995,
  //         color: 'Black',
  //         status: false,
  //         buyValue: 39,
  //         doorsQty: 2,
  //         seatsQty: 5,
  //       },
  //     ];
  //     sinon.stub(Model, 'find').resolves(modelOutput);

  //     const service = new CarService();
  //     const result = await service.getAll();

  //     expect(result.message).to.be.deep.equal(serviceOutput);
  //     expect(result.type).to.be.equal(200);
  //   });
  // });
  // describe('Testa a rota GET /cars:id', function () {
  //   it('Testa se a rota retorna, com sucesso, o carro escolhido.', async function () {
  //     const modelOutput = {
  //       _id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     };
  //     const serviceOutput = {
  //       id: '634852326b35b59438fbea2f',
  //       model: 'Marea',
  //       year: 2002,
  //       color: 'Black',
  //       status: true,
  //       buyValue: 15.99,
  //       doorsQty: 4,
  //       seatsQty: 5,
  //     };

  //     sinon.stub(Model, 'findById').resolves(modelOutput);

  //     const service = new CarService();
  //     const result = await service.getById('634852326b35b59438fbea2f');

  //     expect(result.message).to.be.deep.equal(serviceOutput);
  //     expect(result.type).to.be.equal(200);
  //   });

  //   it('Testa se, ao procurar um carro inexistente, a rota trás uma excessão', async function () {
  //     sinon.stub(Model, 'findById').resolves(null);

  //     const service = new CarService();
  //     const result = await service.getById('1234567891011121314');

  //     expect(result.message).to.be.equal('Car not found');
  //   });
  // });

  afterEach(function () {
    sinon.restore();
  });
});
