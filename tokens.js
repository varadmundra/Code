



async function checkBalance() {
    let balance = await window.ethereum.request({
        method: "eth_getBalance ",

        params: [

        ]
    })
}