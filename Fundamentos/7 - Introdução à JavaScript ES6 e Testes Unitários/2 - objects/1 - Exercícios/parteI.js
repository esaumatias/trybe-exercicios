const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const personDerlyvery = Object.values(order.order.delivery)
const cliente = Object.values(order);
const endereço = Object.values(order.address)
const pizza = Object.keys(order.order.pizza)
const drink = Object.values(order.order.drinks.coke)
const preco = Object.values(order.payment)

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${personDerlyvery[0]}, entrega para: ${cliente[0]},Telefone: ${cliente[1]}, ${endereço[0]}, Nº ${endereço[1]}, AP: ${endereço[2]}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`OLá ${cliente[0]}, o total do seu pedido de ${pizza} e ${drink[0]} é R$ ${preco},00. `)
}

orderModifier(order);