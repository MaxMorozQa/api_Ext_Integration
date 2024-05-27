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
         try {
             const response = await fetch(`${this.baseUrl}/v1/client-info`, {
                 headers : {
                     'Authorization' : this.token
                 }
             });
             let result = await response.json()
             if (!response.ok) {
                 throw new Error ('Network response was not ok');
             }
                 return {
                         data: result,
                         status: response.status
                        }
         } catch (error) {
           console.error('Theree was a problem with the fetch operation', error);
           throw error;
         }
     };

     async getClientBalance() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/get-balance`, {
                headers : {
                    'Authorization' : this.token
                }
            });
            let result = await response.json()
            if (!response.ok) {
                throw new Error ('Network response was not ok');
            }
                return {
                    data: result,
                    status: response.status
                   }
        } catch (error) {
          console.error('Theree was a problem with the fetch operation', error);
          throw error;
        }
     };

     async registerDealInFns(dealData) {
        try {
            const response = await fetch(`${this.baseUrl}/v1/deal`, {
                method : 'POST',
                body : JSON.stringify(dealData),
                headers : {
                    'Authorization' : this.token,
                    'Content-Type' : 'application/json',
                },

            });
            let result = response.json()
            if (!response.ok) {
                throw new Error ('Network response was not ok');
            }

                return {
                    data: result,
                    status: response.status
                   }
        } catch (error) {
            console.error('Theree was a problem with the fetch operation', error);
            throw error;
        }
     };

     async getDealsList() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/deals/history?month=05&page=1&pageSize=5&year=2024&zoneOffset=-420`, {
                headers : {
                    'Authorization' : this.token
                },

            });
            let result = await response.json()
            if (!response.ok) {
                throw new Error ('Network response was not ok');
            }

                return {
                    data: result.items,
                    status: response.status
                   }
        } catch (error) {
            console.error('Theree was a problem with the fetch operation', error);
            throw error
        }
     };

    async getDealAfterDealRegister(id) {
        try{
            const response = await fetch(`${this.baseUrl}/v1/deals/${id}`, {
                headers : {
                    'Authorization' : this.token
                },

            });
            if (!response.ok) {
                throw new Error ('Network response was not ok');
            }

                return {
                    data: result,
                    status: response.status
                   }
        } catch (error) {
            console.error('Theree was a problem with the fetch operation', error);
            throw error
        }
    };

    async getClientLimit() {
        try{
            const response = await fetch(`${this.baseUrl}/v1/client-limits`, {
                headers : {
                    'Authorization' : this.token,
                            cookie : 'ASP.NET_SessionId=9510A4E3F20945D4B7A1FABD8A679BF3.worker-samozanyatye1'
                }
            });
            let result = await response.json()
            if (!response.ok) {
                let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
            }

                return {
                    data: result,
                    status: response.status,
                    serviceData: result.paymentDataResponse.serviceData,
                   }
        } catch (error) {
            console.error('Theree was a problem with the fetch operation', error);
            throw error
        }
    };

    async createInvoice(dealData) {
        try{
            const response = await fetch(`${this.baseUrl}/v1/pay-it/invoice`, {
                method : 'POST',
                body : JSON.stringify(dealData),
                headers : {
                    'Authorization' : this.token,
                    'Content-Type' : 'application/json',
                }
            });
            let result = await response.json();
            if (!response.ok) {
                let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
            }

                return {
                    data: result,
                    status: response.status
                   }
        } catch (error) {
            console.error('Theree was a problem with the fetch operation', error);
            throw error
        }
    };

    async getInfoAboutPayIt({type, id}) {
        try {
            const response = await fetch(`${this.baseUrl}/v1/pay-it/${type}/${id}`, {
                headers : {
                    'Authorization' : this.token
                }
            });
            let result = await response.json();
            if (!response.ok) {
                let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
            }

            return {
                data: result,
                status: response.status
               }
        } catch (error) {
            // console.error('Theree was a problem with the fetch operation', error);
            throw error
        }

    };

    async createMoneyRequest(dealData) {
        try {
            const response = await fetch(`${this.baseUrl}/v1/pay-it/money`, {
                method : 'POST',
                body : JSON.stringify(dealData),
                headers : {
                    'Authorization' : this.token,
                    'Content-Type' : 'application/json',
                }
            });
            let result = await response.json();
            if (!response.ok) {
                let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
            }

            return {
                data: result,
                status: response.status
               }
        } catch (error) {
            // console.error('Theree was a problem with the fetch operation', error);
            throw error
        }

    };

    async getMoneyInvoicePayItContext() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/pay-it/money/context`, {
                headers : {
                    'Authorization' : this.token
                }
            });
            let result = await response.json();
            if (!response.ok) {
                let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
            };

            return {
                data: result,
                status: response.status
               }
        } catch (error) {
            throw error
        };
    }

    async getPayItQueryHistory() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/pay-it/history?month=05&page=1&pageSize=5&year=2024&zoneOffset=-420`, {
                headers : {
                    'Authorization' : this.token
                }
            });
            const result = await response.json();
            if (!response.ok) {
                let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
            };

            return {
                data: result,
                status: response.status
               }
        } catch (error) {
             throw error
        }
    };

    async transferToBankCard(dealData) {
        try {
           const response = await fetch(`${this.baseUrl}/v1/transfer/bankcard`, {
               method: 'POST',
               body : JSON.stringify(dealData),
               headers : {
                'Authorization' : this.token,
                'Content-Type' : 'application/json',
               }
           });
           const result = await response.json();
           if (!response.ok) {
            let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
           }

           return {
            data: result,
            status: response.status
           }
        } catch (error) {
             throw error
        }
    };

    async transferToSbp(dealData) {
        try {
           const response = await fetch(`${this.baseUrl}/v1/transfer/sbp`, {
               method: 'POST',
               body : JSON.stringify(dealData),
               headers : {
                'Authorization' : this.token,
                'Content-Type' : 'application/json',
               }
           });
           const result = await response.json();
           if (!response.ok) {
            let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
           }

           return {
            data: result,
            status: response.status
           }
        } catch (error) {
             throw error
        }

    };

    async manualConfirmOperationTransfer(id) {
        try {
           const response = await fetch(`${this.baseUrl}/v1/transfer/operations/${id}/confirm`, {
                method: 'PUT',
                headers : {
                    'Authorization' : this.token
                }
           });
           const result = await response.json();
           if (!response.ok) {
            let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                throw new Error(error);
           }

           return {
            data: result,
            status: response.status
           }
        } catch (error) {
              throw error
        }
    };

    async getOperationTransferStatus(id) {
        try {
            const response = await fetch(`${this.baseUrl}/v1/transfer/operations/${id}/state`, {
                 headers : {
                     'Authorization' : this.token
                 }
            });
            const result = await response.json();
            if (!response.ok) {
             let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                 throw new Error(error);
            }
            return {
                data: result,
                status: response.status
               }
         } catch (error) {
               throw error
         }
    };

    async getTransferOperationHistory() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/transfer/history?month=05&page=1&pageSize=15&year=2024&zoneOffset=-420`, {
                 headers : {
                     'Authorization' : this.token
                 }
            });
            const result = await response.json();
            if (!response.ok) {
             let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                 throw new Error(error);
            }
            return {
                data: result,
                status: response.status
               }
         } catch (error) {
               throw error
         }
    };

    async getProvidersListForTransferOperations() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/transfer/providers`, {
                 headers : {
                     'Authorization' : this.token
                 }
            });
            const result = await response.json();
            if (!response.ok) {
             let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                 throw new Error(error);
            }
            return {
                data: result,
                status: response.status
               }
         } catch (error) {
               throw error
         }
    };

    async getProviderCommissionForTransferOperationsSBP() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/transfer/providers/sbp/commission`, {
                 headers : {
                     'Authorization' : this.token
                 }
            });
            const result = response.json();
            if (!response.ok) {
             let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                 throw new Error(error);
            }
            return result;
         } catch (error) {
               throw error
         }
    };

    async getProviderCommissionForTransferOperationsBANKCARD() {
        try {
            const response = await fetch(`${this.baseUrl}/v1/transfer/providers/bankcard/commission`, {
                 headers : {
                     'Authorization' : this.token
                 }
            });
            const result = response.json();
            if (!response.ok) {
             let error = `${response.status}: ${result?.result?.message || 'Неизвестная ошибка'}`;
                 throw new Error(error);
            }
            return result;
         } catch (error) {
               throw error
         }
    }

}


 const fetcher = new apiRequest('https://test.pro.selfwork.ru/external-integration', 'Bearer h2RRiD4CfHohrVkBYaQl9RQkEnmuVOptPixLPGG0b1H0mSKfxVJabqpuLSNOi33OsTdlVMSZpPHOFfHW7Twcy_N_bWgNZnYKuHummkbUkDu9EGyzP3c0b2x0bW5lZXJz');

//  fetcher.getClientInfo() // Получение информации о пользователе
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

//  fetcher.getClientBalance() // Получение баланса пользователя
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

module.exports = apiRequest;