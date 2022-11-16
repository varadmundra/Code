
windows.onload = function () {
    if (windows.ethereum !== "undefined") {
        this.ethereum.on("accountsChanged", handleAccountsChanged)
    }
}


let accounts;

const handleAccountsChanged = (_accounts) => {
    console.log("accounts changed")
}

async function checkBalance() {
    let balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [
            window.userWalletAddress,
            'latest'

        ]
    }).catch((err) => {
        console.log(err.code)
    })
    console.log(window.userWalletAddress)
    console.log(parseInt(balance) / Math.pow(10, 18))
}