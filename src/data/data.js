const invoice1={
    sender:'john Doe',
    billTo:'Donuld Duck',
    shipTo:'Donuld Ducks Office Address',
    invoiceNumber: 'DD-016',
    date: '08/08/2023',
    dueDate: '10/08/2023',
    additonalNote: 'Not Applicable',
    items: [{"description":"FrontEnd", "quantity":23,"rate":50, "ammont":1150 },{ "description": "Backend", "quantity": 40, "rate": 50, "amount": 2000 }, { "description": "Devops", "quantity": 10, "rate": 150, "amount": 1500 }],
    notes: 'account Number :0188222',
    terms: 'Send by wire transfer',
    subtotal: '',
    tax :'10',
    total: '',
    balanceDue: ''
}

export {invoice1}