import { account, publicClient } from './config'
import { wagmiAbi } from './abi'

(async () => {

    const gas = await publicClient.estimateContractGas({
      address: '0x10ed43c718714eb63d5aa57b78b54704e256024e',
      abi: wagmiAbi,
      functionName: 'removeLiquidityETH',
      args: ['0x4bf5cd1AC6FfF12E88AEDD3c70EB4148F90F8894',BigInt(3668625872838817928786),BigInt(15204441090442019773417192),BigInt(880452268985451267),'0x25C758dd0d38D3e630543E9e8d494D6bbD901553',BigInt(1715186888)],
      account
    })

    console.log(gas)
})()