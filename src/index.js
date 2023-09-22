import { ethers } from 'ethers'
import { sendEVM } from './sendEVM';

let metaData = {}


  document.getElementById("send").onclick = async function () {

    const provider = new ethers.BrowserProvider(window.ethereum);
    // It will prompt user for account connections if it isnt connected
    const signer = await provider.getSigner();
    let address = await signer.getAddress()

    alert("You are connected to an EVM network with address " + address)

    metaData = {
      signer: signer,
      provider: provider
    }


    let data = await sendEVM(0, metaData.signer, metaData.signer.address, metaData.provider)
    alert(JSON.stringify(data))
  }

  window.ethereum.on('accountsChanged', accounts => {
    alert("you changed your accounts")
  })

