const apiRequest = require('./apiMethods.js');

const SECONDS = 1000;
jest.setTimeout(10 * SECONDS)

const payItType = {
    MONEY: 'money',
    INVOICE: 'invoice'
  }

const dealData = {
    "dateProvideService": "2024-05-10T11:42:58.000+0300",
    "incomeType": "FROM_INDIVIDUAL",
    "serviceAmount": 5000,
    "serviceName": "testJS5",
    "serviceQuantity": 1,
    "totalAmount": 5000
   };

   let user = {"lastName": "Противоречивый", "firstName": "Блеск", "middleName": "Полуэктович"};

   const responseGetClientLimit = {
    "extIntLimitResponse": {
        "accountMaxBalance": 6000000,
        "operationMaxSum": 6000000,
        "commonLimit": {
            "monthlySum": 20000000,
            "weeklySum": 20000000,
            "dailySum": 10000000
        },
        "remainingLimit": {
            "monthlySum": 20000000,
            "weeklySum": 20000000,
            "dailySum": 10000000
        }
    },
    "paymentDataResponse": {
        "currency": "RUB",
        "maxLimitSum": 6000000,
        "serviceData": [
            {
                "code": "bankcard",
                "available": true,
                "minSum": 1000,
                "maxSum": 6000000,
                "commission": {
                    "minComm": 4000,
                    "fixValue": 0,
                    "value": 3.5,
                    "type": 0
                }
            },
            {
                "code": "sbp",
                "available": true,
                "minSum": 100,
                "maxSum": 6000000,
                "commission": {
                    "minComm": 4000,
                    "fixValue": 0,
                    "value": 3.5,
                    "type": 0
                }
            },
            {
                "code": "yamoney",
                "available": false
            },
            {
                "code": "sz",
                "available": false
            },
            {
                "code": "webmoney",
                "available": false
            },
            {
                "code": "qiwi",
                "available": false
            }
        ]
    }
};

const bodyCreateInvoice = {
    "meta": "payIt18",
    "callbackUrl": "https://functiaons.yandexcloud.net/d4e76vcidauks58s1kk2",
    "commentary": "testV96",
    "dateProvideService": "2024-05-23T09:50:54.164+0300",
    "email": "pyhov.m@selfwork.ru",
    "sum": 15000
   };

const desertFieldCreateInvoice = {
    "meta": "payIt18",
    "callbackUrl": "https://functiaons.yandexcloud.net/d4e76vcidauks58s1kk2",
    "commentary": "",
    "dateProvideService": "2024-05-23T09:50:54.164+0300",
    "email": "pyhov.m@selfwork.ru",
    "sum": 15000
   };

   const responseDesertField = {
    "result": {
        "code": 422,
        "message": "Данные введены некорректно"
    },
    "data": {
        "fields": [
            {
                "type": "ERROR",
                "id": "commentary",
                "title": null,
                "message": "размер должен находиться в диапазоне от 1 до 256",
                "rid": "commentary",
                "group": ""
            }
        ],
        "globalsCount": 0,
        "fieldsCount": 1
    }
};







describe('extApi', () => {
    let api

    beforeAll(() => {
        api = new apiRequest('https://test.pro.selfwork.ru/external-integration', 'Bearer h2RRiD4CfHohrVkBYaQl9RQkEnmuVOptPixLPGG0b1H0mSKfxVJabqpuLSNOi33OsTdlVMSZpPHOFfHW7Twcy_N_bWgNZnYKuHummkbUkDu9EGyzP3c0b2x0bW5lZXJz')
    });

    it('Get user info --- success', async () => {
        result = await api.getClientInfo()
        console.log(result)

        expect(result.status).toBe(200);
        expect(result.data).toBeDefined();
        expect(result.data.personal).toMatchObject(user)
    });

    it('Get user balance --- success', async () => {
        const balance = {
            "currentBalance": 400500
        }
        result = await api.getClientBalance()
        console.log(result)

        expect(result.status).toBe(200);
        expect(result.data).toBeDefined();
        expect(result.data).toMatchObject(balance)
    });

    it('Register deal --- success', async () => {
        result = await api.registerDealInFns(dealData)
        console.log(result)
    });


    it('Get deal list --- success', async () => {
        result = await api.getDealsList()
        // console.log(result)
        
        expect(result.status).toBe(200);
        expect(result.data).toBeDefined();
    });

    it('Get client limit --- success', async () => {
        result = await api.getClientLimit()
        console.log(result)

        expect(result.status).toBe(200);
        expect(result.data).toMatchObject(responseGetClientLimit);

    });
    
    it('Create Invoice and get info about invoice --- successe', async () => {
        const responseInvoice = {
                    "uuid": "1320296098",
                    "loginLastChars": "1123",
                    "commentary": "testV2",
                    "sum": 15000,
                    "currency": "RUB",
                    "available": true,
                    "maxLimitSum": 6000000,
                    "type": "INVOICE",
                    "payed": false
                }

        const createInvoice =  await api.createInvoice(bodyCreateInvoice);
        const getInfoAboutPayItInvoice = await api.getInfoAboutPayIt({id: createInvoice.data.payItUuid, type: payItType.INVOICE});
        console.log(getInfoAboutPayItInvoice);
        
        expect(getInfoAboutPayItInvoice.status).toBe(200)
        expect(getInfoAboutPayItInvoice.data).toHaveProperty('uuid');
        expect(getInfoAboutPayItInvoice.data.sum).toBe(responseInvoice.sum)
    });

    
    it('desert field create invoice --- error', async () => {
        result = await api.createInvoice(desertFieldCreateInvoice);
        console.log(result)
        
        expect(result.status).toBe(400);
        expect(result.data).toMatchObject(responseDesertField)
    });

    it('Create money and get info about money --- successe', async () => {
        const bodyMoneyRequest = {
            "meta": "treck",
            "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
            "commentary": "moneyrequest",
            "email": "pyhov.m@selfwork.ru",
            "sum": 3000
          };

          const responseGetOperationInfo = {
            data: {
              uuid: '2040156800',
              loginLastChars: '3434',
              commentary: 'moneyrequest',
              sum: 3000,
              currency: 'RUB',
              available: true,
              maxLimitSum: 5599500,
              type: 'MONEY_REQUEST',
              payed: false
            },
            status: 200
          }

        const createMoneyRequest = await api.createMoneyRequest(bodyMoneyRequest);
        expect(createMoneyRequest.status).toBe(200);
        expect(createMoneyRequest.data).toHaveProperty('moneyRequestUuid')

        const getInfoAboutMoney = await api.getInfoAboutPayIt({id: createMoneyRequest.data.moneyRequestUuid, type: payItType.MONEY});
        console.log(getInfoAboutMoney)

        expect(getInfoAboutMoney.status).toBe(200);
        expect(getInfoAboutMoney.data).toHaveProperty('uuid'),
        expect(getInfoAboutMoney.type).toBe(responseGetOperationInfo.type)
    });



    it('Get money|invoice pay it context --- success', async () => {
        
        const result = await api.getMoneyInvoicePayItContext()
        console.log(result)

        expect(result.status).toBe(200);
        expect(result.data).toBeDefined()
    });

    it('Get pay-it query history --- success', async () => {

        const result = await api.getPayItQueryHistory()
        console.log(result)

        expect(result.status).toBe(200);
        expect(result.data).toBeDefined();
    });

     it('Create bank card transfer and get info --- successe', async () => {
        const bodyRequest = {
            "meta": "cardWithout",
            "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
            "pan": "4000000000000002",
            "sumIn": 5000
          };

          const responseConfirm = {
            "result": {
                "code": 200,
                "message": null
            },
            "data": null

        };

        const responseOperationStatus = {
            data: {
              result: { code: 200, message: null },
              data: { state: 'wait', meta: 'cardWithout' }
            },
            status: 200
          };

        const createTransfer = await api.transferToBankCard(bodyRequest);
        expect(createTransfer.status).toBe(200);
        expect(createTransfer.data).not.toBeNull();

        const dataId = createTransfer.data.data.id;
        const confirmTransfer = await api.manualConfirmOperationTransfer(dataId);
        expect(confirmTransfer.status).toBe(200);
        expect(confirmTransfer.data).toMatchObject(responseConfirm);

        const getTransferstatus = await api.getOperationTransferStatus(dataId);
        console.log(getTransferstatus);
        expect(getTransferstatus.status).toBe(200);
        

     });

it('Create sbp transfer and get info --- successe', async () => {
    const bodyRequest = {
        "meta": "SpbTestCheck",
        "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
        "bankId": 100000000005,
        "description": "SPB",
        "phone": "79654343434",
        "sumIn": 5000
      };

      const responseConfirm = {
                    "result": {
                        "code": 200,
                        "message": null
                    },
                    "data": null
        
                };

                

    const createSbp = await api.transferToSbp(bodyRequest);
    expect(createSbp.status).toBe(200);
    expect(createSbp.data).not.toBeNull();

    const dataId = createSbp.data.data.id;
    const manualConfirm = await api.manualConfirmOperationTransfer(dataId);
    expect(manualConfirm.status).toBe(200);
    expect(manualConfirm.data).toMatchObject(responseConfirm);
    
    const getTransferstatus = await api.getOperationTransferStatus(dataId);
    console.log(getTransferstatus);
    expect(getTransferstatus.status).toBe(200);
    expect(getTransferstatus.data).not.toBeNull()


})

});
