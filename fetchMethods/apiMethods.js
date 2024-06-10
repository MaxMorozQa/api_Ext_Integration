const fetchWrapper = require('./fetchWrapper.js');
 
 const bodyRegisterDealInFns = {
  "dateProvideService": "2024-05-10T11:42:58.000+0300",
  "incomeType": "FROM_INDIVIDUAL",
  "serviceAmount": 5000,
  "serviceName": "testJS5",
  "serviceQuantity": 1,
  "totalAmount": 5000
 }

 const bodyCreateInvoice = {
 "meta": "payIt1",
 "callbackUrl": "https://functiaons.yandexcloud.net/d4e76vcidauks58s1kk2",
 "commentary": "testV96",
 "dateProvideService": "2024-05-13T09:50:54.164+0300",
 "email": "pyhov.m@selfwork.ru",
 "sum": 15000
}

const bodyCreateMoney = {
"meta": "treck1",
"callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
 "commentary": "moneyrequest1",
"email": "pyhov.m@selfwork.ru",
"sum": 3000
  }

const bodyTransferCard = {
    "meta": "cardWithout",
    "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
    "pan": "4000000000000002",
    "sumIn": 5000
  }

  const bodyTransferSbp = {
    "meta": "SpbTestCheck",
    "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
    "bankId": 100000000005,
    "description": "SPB",
    "phone": "79654343434",
    "sumIn": 5000
  }



const payItType = {
    MONEY: 'money',
    INVOICE: 'invoice'
  }

  const typeComission = {
    SBP: 'spb',
    BANKCARD: 'bankcard'
  }



 
 
 
 
class apiRequest {
     constructor(baseUrl, token) {
         this.baseUrl = baseUrl;
         this.token = token;
     }

     async getClientInfo() {
         const info = await fetchWrapper({
            baseUrl: this.baseUrl, 
            url: '/v1/client-info', 
            token: this.token
        });
         console.log(info)
     };

     async getClientBalance() {
        const balance = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/get-balance',
            token: this.token
        })
        console.log(balance)
     };

     async registerDealInFns() {
        const body = {
            "dateProvideService": "2024-06-06T11:42:58.000+0300",
            "incomeType": "FROM_INDIVIDUAL",
            "serviceAmount": 5000,
            "serviceName": "testJS90",
            "serviceQuantity": 1,
            "totalAmount": 5000
           }

        const deal = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/deal',
            method: 'POST',
            body,
            token: this.token
        })
        console.log(deal)
     };

     async getDealsList() {
        const dealList = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/deals/history?month=05&page=1&pageSize=5&year=2024&zoneOffset=-420',
            token: this.token
        })
        console.log(dealList)
     };

    async getDealAfterDealRegister(id) {
        const dealAfterDealRegister = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: `/v1/deals/${id}`,
            token: this.token
        })
        console.log(dealAfterDealRegister)
    };

    async getClientLimit() {
        const limit = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/client-limits',
            token: this.token
        })
        console.log(limit)
    };

    async createInvoice() {

        const body = {
            "meta": "payIt",
            "callbackUrl": "https://functiaons.yandexcloud.net/d4e76vcidauks58s1kk2",
            "commentary": "testV8",
            "dateProvideService": "2024-06-10T09:50:54.164+0300",
            "email": "pyhov.m@selfwork.ru",
            "sum": 15000
          }

       const invoice = await fetchWrapper({
        baseUrl: this.baseUrl,
        url: '/v1/pay-it/invoice',
        method: 'POST',
        body,
        token: this.token
       })
       console.log(invoice)
    };

    async getInfoAboutPayIt({type, id}) {
        const infoAboutPayIt = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: `/v1/pay-it/${type}/${id}`,
            token: this.token
        })
        console.log(infoAboutPayIt)
    };

    async createMoneyRequest() {
        
        const body = {
            "meta": "treck",
            "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
            "commentary": "moneyrequest",
            "email": "pyhov.m@selfwork.ru",
            "sum": 3000
          }

       const money = await fetchWrapper({
          baseUrl: this.baseUrl,
          url: '/v1/pay-it/money',
          method: 'POST',
          body,
          token: this.token
       })
       console.log(money)
    };

    async getMoneyInvoicePayItContext() {
        const moneyContext = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/pay-it/money/context',
            token: this.token
        })
        console.log(moneyContext)
    }

    async getPayItQueryHistory() {
        const payItQueryHistory = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/pay-it/history?month=05&page=1&pageSize=5&year=2024&zoneOffset=-420',
            token: this.token
        })
        console.log(payItQueryHistory)
    };

    async transferToBankCard() {

        const body = {
            "meta": "cardWithout",
            "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
            "pan": "4000000000000002",
            "sumIn": 5000
          }

        const bankCard = await fetchWrapper({
          baseUrl: this.baseUrl,
          url: '/v1/transfer/bankcard',
          method: 'POST',
          body,
          token: this.token
        })
        console.log(bankCard)
    };

    async transferToSbp() {
        
        const body = {
            "meta": "SpbTestCheck1",
            "callbackUrl": "https://functions.yandexcloud.net/d4e76vcidauks58s1kk2",
            "bankId": 100000000005,
            "description": "SPB1",
            "phone": "79991111123",
            "sumIn": 5000
        }

        const sbp = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/transfer/sbp',
            method: 'POST',
            body,
            token: this.token
          })
          console.log(sbp)
    };

    async manualConfirmOperationTransfer(id) {
        const confirm = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: `/v1/transfer/operations/${id}/confirm`,
            method: 'PUT',
            token: this.token
          })
          console.log(confirm)
    };

    async getOperationTransferStatus(id) {
        const operationTransferStatus = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: `/v1/transfer/operations/${id}/state`,
            token: this.token
          })
          console.log(operationTransferStatus)
    };

    async getTransferOperationHistory() {
        const transferOperationHistory = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/transfer/history?month=05&page=1&pageSize=15&year=2024&zoneOffset=-420',
            token: this.token
          })
          console.log(transferOperationHistory)
    };

    async getProvidersListForTransferOperations() {
       const providersListForTransferOperations = await fetchWrapper({
        baseUrl: this.baseUrl,
        url: '/v1/transfer/providers',
        token: this.token
      })
      console.log(providersListForTransferOperations)
    };

    async getProviderCommissionForTransferOperationsSBP() {
        const providerCommissionForTransferOperationsSBP = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/transfer/providers/sbp/commission',
            token: this.token
          })
          console.log(providerCommissionForTransferOperationsSBP)
    };

    async getProviderCommissionForTransferOperationsBANKCARD() {
        const providerCommissionForTransferOperationsBANKCARD = await fetchWrapper({
            baseUrl: this.baseUrl,
            url: '/v1/transfer/providers/bankcard/commission',
            token: this.token
          })
          console.log(providerCommissionForTransferOperationsBANKCARD)
    }

}


 const fetcher = new apiRequest('https://test.pro.selfwork.ru/external-integration', 'Bearer h2RRiD4CfHohrVkBYaQl9RQkEnmuVOptPixLPGG0b1H0mSKfxVJabqpuLSNOi33OsTdlVMSZpPHOFfHW7Twcy_N_bWgNZnYKuHummkbUkDu9EGyzP3c0b2x0bW5lZXJz');

//  fetcher.getClientInfo() // Получение информации о пользователе
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

//  fetcher.getClientBalance() // Получение баланса пользователя
//  .then(data => console.log(data))
//  .catch(error => console.log(error));


// fetcher.getProviderCommissionForTransferOperationsBANKCARD() // для теста вызова
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

// const getInfoAboutDeal = async() => {
// const responseRegisterDeal = await fetcher.registerDealInFns(bodyRegisterDealInFns)
// const data = await responseRegisterDeal.json();
// console.log(data);
// const receiptId = data.receiptId;

// const dealInfoAfterRegistration = await fetcher.getDealAfterDealRegister(receiptId);
// console.log(dealInfoAfterRegistration);

// return dealInfoAfterRegistration
// };

// (async () => {  
//     const res = await getInfoAboutDeal()
//     console.log(res)
// })();


// fetcher.getDealsList() // Получение списка доходов
// .then(date => console.log(date))
// .catch(error => console.log(error));

// fetcher.getClientLimit() // Получение лимитов пользователя
// .then(data => console.log(data))
// .catch(error => console.log(error));

// const createInvoiceAndGetInfoAboutInvoice = async () => { // Создание счёта и получение информации о нем
//     const createInvoice = await fetcher.createInvoice(bodyCreateInvoice);
//     const payItUuid = createInvoice.payItUuid;
//     const invoiceInfoAfterCreate = await fetcher.getInfoAboutPayIt({type: payItType.INVOICE, id: payItUuid});

//     return invoiceInfoAfterCreate;
// };

// (async () => {  
//     const res = await createInvoiceAndGetInfoAboutInvoice()
//     console.log(res)
// })();


// const createMoneyAndGetInfoAboutMoneyRequest = async () => { создание запроса денег и получение информации по нему
//     const createMoney = await fetcher.createMoneyRequest(bodyCreateMoney);
//     const moneyRequestUuid = createMoney.moneyRequestUuid;
//     const moneyInfoAfterCreate = await fetcher.getInfoAboutPayIt({type: payItType.MONEY, id: moneyRequestUuid});

//     return moneyInfoAfterCreate
// };

// (async () => {
//     const res = await createMoneyAndGetInfoAboutMoneyRequest()
//     console.log(res)
// })();


// fetcher.getMoneyInvoicePayItContext()
// .then(data => console.log(data))
// .catch(error => console.log(error))

// fetcher.getPayItQueryHistory()
// .then(data => console.log(data))
// .catch(error => console.log(error))


// const createTransferBankCardConfirmOperationGetInfo = async () => {  // Создание вывода по карте, подтверждение и получение информации по операции
//     const createTransfer = await fetcher.transferToBankCard(bodyTransferCard);
//     console.log(createTransfer);
//     const dataId = createTransfer.data.id;
//     const confirmTransfer = await fetcher.manualConfirmOperationTransfer(dataId);
//     console.log(confirmTransfer);
//     const getStatusOperation = await fetcher.getOperationTransferStatus(dataId);
   
    
//    return getStatusOperation
// }

// (async () => {
//         const res = await createTransferBankCardConfirmOperationGetInfo()
//         console.log(res)
//     })();


// const createTransferSbpConfirmOperationGetInfo = async() => { // Создание вывода по СБП, подтверждение и получение информации по операции
//     const createTransferSbp = await fetcher.transferToSbp(bodyTransferSbp);
//     console.log(createTransferSbp);
//     const dataId = createTransferSbp.data.id;
//     const confirmTransfer = await fetcher.manualConfirmOperationTransfer(dataId);
//     console.log(confirmTransfer);
//     const getStatusOperation = await fetcher.getOperationTransferStatus(dataId);
    

//     return getStatusOperation
// }

// (async () => {
//     const res = await createTransferSbpConfirmOperationGetInfo()
//     console.log(res)
// })();


// fetcher.getTransferOperationHistory() // История операций по выводу
// .then(data => console.log(data))
// .catch(error => console.log(error))


// fetcher.getProvidersListForTransferOperations() // получени списка возможных способов вывода
// .then(data => console.log(data))
// .catch(error => console.log(error))


// fetcher.getProviderCommissionForTransferOperationsSBP()
// .then(data => console.log(data))
// .catch(error => console.log(error))

// fetcher.getProviderCommissionForTransferOperationsBANKCARD()
// .then(data => console.log(data))
// .catch(error => console.log(error)api

module.exports = apiRequest