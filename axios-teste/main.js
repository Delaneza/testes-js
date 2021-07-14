// Test using api ViaCEP => https://viacep.com.br/


import axios from 'axios'

class Api{

    static async getAdress(cep) {
        const response = (await axios.get(`https://viacep.com.br/ws/${cep}/json`)).data
        console.log('response :', response)
    }
}

// Insert your CEP
Api.getAdress('')