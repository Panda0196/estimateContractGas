import { account, publicClient } from './config'
import { wagmiAbi } from './abi'


(async () => {
const gas = await publicClient.estimateContractGas({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: wagmiAbi,
  functionName: 'mint',
  account,
})
console.log(gas)
})()